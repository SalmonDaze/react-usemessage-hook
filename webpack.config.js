const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, "./example/src/index.html"),
	filename: "./index.html"
});

module.exports = {
	entry: path.join(__dirname, "./useMessage.js"),
	output: {
		path: path.join(__dirname, "./dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			use: "babel-loader",
			exclude: /node_modules/
		}]
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
};