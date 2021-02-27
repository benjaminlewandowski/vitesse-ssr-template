module.exports = {
    plugins: [
        require('postcss-preset-env')({ stage: 1 }),
        require('postcss-sorting'),
        require('postcss-sort-media-queries'),
        require('cssnano'),
    ],
}
