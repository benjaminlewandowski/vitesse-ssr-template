/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'vite-plugin-windicss'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'
import forms from 'windicss/plugin/forms'
import lineClamp from 'windicss/plugin/line-clamp'
import ar from 'windicss/plugin/aspect-ratio'
import plugin from 'windicss/plugin'

const defaultTheme = require('windicss/defaultTheme')

export default defineConfig({
    darkMode: 'class',
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            cyan: colors.cyan,
            emerald: colors.emerald,
            gray: colors.blueGray,
        },
        container: {
            center: true,
        },
        screens: {
            sm: '512px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            '3xl': '1920px',
        },
        variants: {
            transitionProperty: ['group-hover'],
        },
        extend: {
            colors: {
                specialgray: {
                    950: '#080c16',
                },
            },
        },
    },
    plugins: [
        forms(),
        lineClamp(),
        ar(),
        typography(),
        // require('windicss/plugin/filters'),
        plugin(function ({ addUtilities }) {
            const newUtilities = {
                '.empty-content': {
                    content: '',
                },
            }
            addUtilities(newUtilities)
        }),
    ],
})
