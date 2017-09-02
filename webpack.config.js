var webpack = require("webpack");

var POD = process.env.NODE_ENV === "production";

var plugins = [];

plugins.push(
  new webpack.ProvidePlugin({
      axios: 'axios',
      redux: "redux",
      moment: "moment",
      React: 'react',
      ReactDOM: 'reactDOM',
    })
);

if (POD) {
  plugins.push(
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true
      },
      sourceMap: false
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  );
}


module.exports = {
  entry: {
    bundle: './src/assets/js/app.js'
  },
  output: {
    publicPath: '/assets/js/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },

  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            ["transform-object-assign"]
          ]
        }
      },
    ]
  },

  devtool: "#source-map",
  resolve: {
    extensions: ['', '.js']
  },
  plugins: plugins
};
