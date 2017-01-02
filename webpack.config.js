const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: "eval-source-map",
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.[hash].js',
		publicPath: '/',
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude: /(node_modules|bower_components)/,
			query: {
				presets: ['es2015', 'react', 'stage-0'],
				plugins: ['transform-decorators-legacy']
			}
		}, {
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass']
		}, {
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}, {
			test: /\.(png|woff|woff2|eot|ttf|svg)$/,
			loader: 'url-loader?limit=100000'
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'index.html'),
			inject: true
		})
	],
	devServer: {
		port: 3000
	}
};
