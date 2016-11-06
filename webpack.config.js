const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname + '/client/public');
const APP_DIR = path.resolve(__dirname + '/client/public/app');

const config = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'react-hmre'],
					plugins: ["transform-decorators-legacy", "transform-class-properties"]
				}
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		contentBase: path.join('./client/public'),
		hot: true,
		inline: true,
		stats: {
			colors: true
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};

module.exports = config;