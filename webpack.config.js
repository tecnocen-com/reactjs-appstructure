var path = require("path"),
  webpack = require("webpack"),
  uglify = require("uglifyjs-webpack-plugin"),
  debug = process.env.NODE_ENV !== "production";
module.exports = {
  entry: {
    index: "./client/js/index/index.jsx",
    home: "./client/js/home/home.jsx"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/build/", // always string
    filename: debug ? "[name].bundle.js" : "[name].min.js",
    chunkFilename: debug ? "[name]/[name].bundle.js" : "[name]/[name].min.js"
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  plugins: debug ? [] : [
    new webpack.DefinePlugin({          //Setting Vue on production mode
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new uglify()
  ]
};