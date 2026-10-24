const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const { ModuleFederationPlugin } = webpack.container;

module.exports = {
  mode: "development",

  entry: "./src/main.jsx",

  output: {
    publicPath: "auto",
  },

  devServer: {
    port: 5174,
    hot: true,

    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
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
      name: "deviceApp",

      filename: "remoteEntry.js",

      exposes: {
        "./DeviceDashboard": "./src/DeviceDashboard.jsx",
      },

      shared: {
        react: {
          singleton: true,
          eager: true,
        },

        "react-dom": {
          singleton: true,
          eager: true,
        },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};