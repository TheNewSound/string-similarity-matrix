const path = require('path');

const webConfig = {
    entry: './src/index.js',
    mode: 'production',
    target: 'web',

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

const nodeConfig = {
    entry: './src/index.js',
    mode: 'production',
    target: 'node',

    output: {
        filename: 'main.node.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'stringSimilarityMatrix',
        libraryTarget: 'umd',
        umdNamedDefine: true
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

module.exports = [ webConfig, nodeConfig ];