module.exports = {
	entry: './src/App.js',
	output: {
		path: __dirname + '/build',
		filename: 'App.js',
		publicPath: '/build/',
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
			test: /\.css$/,
			loader: "style!css"
		}]
	},
	devServer: {
		port: 3000,
		open: true,
	}
};
