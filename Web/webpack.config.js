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
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			jquery$: path.resolve(__dirname, 'wwwroot/lib/jquery/dist/jquery.min.js'),
			bootstrap$: path.resolve(__dirname, 'wwwroot/lib/bootstrap/dist/js/bootstrap.min.js'),
			ko$: path.resolve(__dirname, 'wwwroot/lib/knockout/dist/knockout.js'),
		}
	},
	output: {
		// same file name with js extension
		filename: '[name].js',
		// to this path we will save our JS generated files
		path: path.resolve(__dirname, 'wwwroot/js')
	}
};
