module.exports = {
	entry: "./src/hydration.js",
	output: {
		filename: "./hydration.js"
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