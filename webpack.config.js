const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: 'index',
    resolve: {
        modules: [path.resolve(__dirname, 'src/js'), 'node_modules'],
    },
    module: {
        // rules: [
        //     {
        //         test: /\.html$/,
        //         include: path.resolve(__dirname, 'src'),
        //         use: 'html-loader',
        //     }
        // ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],
};
