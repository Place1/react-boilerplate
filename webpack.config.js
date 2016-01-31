module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname + '/build',
		filename: "app.js",
		publicPath: "/build/",
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: "babel-loader",
			exclude: /(node_modules|bower_components)/,
			query: {
				presets: ["es2015", "react"]
			}
		}]
	},
	devServer: {
		port: 3000,
		open: true,
	}
};