const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'production',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'stringSimilarityMatrix'
    },
    
    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        compress: true,
        port: 9000,
        open: true,
        publicPath: '/assets/'
    },

    module: {
        /*rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]*/
    }
};