const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: 'index',
    resolve: {
        modules: [path.resolve(__dirname, 'src/js'), 'node_modules'],
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*'], { watch: true }),
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
    ],
};
