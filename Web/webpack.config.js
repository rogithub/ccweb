const path = require('path');

module.exports = {
	entry: {
		clientes: './TypeScript/pages/clientes.ts'
	},
	mode: 'production',
	optimization: {
		minimize: false,
		splitChunks: {
			chunks: 'all',
			minSize: 0,
			name: 'shared'
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		// same file name with js extension
		filename: '[name].js',
		// to this path we will save our JS generated files
		path: path.resolve(__dirname, 'wwwroot/js')
	},
	// If using webpack and declaring knockout on your html add this to webpack.config.js
	externals: {
		'ko': 'ko',
		jquery: 'jQuery'
	}
};
