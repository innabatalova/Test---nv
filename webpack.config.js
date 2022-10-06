const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: "file-loader",
        options: {
          publicPath: "../",
          name: `assets/image/[name].[ext]`,
        },
      },

      { test: /\.(js)$/, use: "babel-loader" },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    historyApiFallback: true,
    compress: true,
    port: 3000,
  },
   plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),]
}