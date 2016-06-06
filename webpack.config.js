var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js|jsx$/,
        loader: 'babel',
        query: {
            presets: ['es2015','react']
        },
        exclude: /node_modules/,
        include: /src/
      },
      {test: /\.css$/, loader: 'css'},
      {test: /\.scss$/, loader: 'sass'},
      {test: /\.json$/, loader: 'json-loader'},
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
}