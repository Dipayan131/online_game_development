const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const Dotenv = require("dotenv-webpack");
require("dotenv").config({ path: "./.env" });

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    hot: true,
    open: true,
    historyApiFallback: true,
    port: 3010,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "editor_app",
      filename: "remoteEntry.js",
      remotes: {
        // slide_app: "viewApp@http://localhost:3017/remoteEntry.js",
        slide_app: `slide_app@${process.env.SLIDE_APP}/remoteEntry.js`,
        // slide_app:
        scenify_sdk: `scenify_sdk@${process.env.SCENIFY_SDK}/remoteEntry.js`,
        firebase_app: `firebase_app@${process.env.FIREBASE_APP}/remoteEntry.js`,
        // slide_app: process.env.SLIDE_APP,
        //scenify_sdk: process.env.SCENIFY_SDK,
        // firebase_app:process.env.FIREBASE_APP,
        animation_builder: `animation_builder@${process.env.ANIMATION_BUILDER}/remoteEntry.js`,
      },
      exposes: {
        "./App": "./src/App.tsx",
        "./scenifyEditor": "./src/ScenifyEditor.tsx",
        "./preview": "./src/scenes/Editor/components/Preview/index.tsx",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: require("./package.json").dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: require("./package.json").dependencies["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new Dotenv({
      path: "./.env",
    }),
  ],
};
