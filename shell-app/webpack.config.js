const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const { ModuleFederationPlugin } = webpack.container;

module.exports = {
  mode: "development",

  entry: "./src/main.jsx",

  output: {
    publicPath: "auto",
    clean: true,
  },

  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "shellApp",

      remotes: {
        deviceApp:
          "deviceApp@http://localhost:5174/remoteEntry.js",
      },

      shared: {
        react: {
          singleton: true,
          requiredVersion: false,
        },

        "react-dom": {
          singleton: true,
          requiredVersion: false,
        },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};