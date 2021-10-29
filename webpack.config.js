const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "./index.js"
	},
	module: {
		rules: [
			{
				test: /\.riot$/,
				exclude: /node_modules/,
				use: [{
					loader: '@riotjs/webpack-loader',
					options: {
					hot: false,
					}
				}]
			}
		]
	}
};