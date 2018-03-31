const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'build/'
  },
	module: {
    'rules': [
			{
				'loader': 'babel-loader',
				'test': /\.js$/,
				'exclude': /node_modules/,
				'options': {
					'presets': [
						'env'
					],
				}
			}
		],
	},
	target: 'node',
	node: {
	__dirname: false,
	__filename: false
  }
}
