const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const Dotenv = require("dotenv-webpack");
require("dotenv").config();

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
    port: 3009,
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
      name: "scenify_sdk",
      filename: "remoteEntry.js",
      remotes: {
        slide_app: `slide_app@${process.env.SLIDE_APP}/remoteEntry.js`,
        firebase_app: `firebase_app@${process.env.FIREBASE_APP}/remoteEntry.js`,
      },
      exposes: {
        "./App": "./src/App.tsx",
        "./EditorContext": "./src/context/EditorContext.tsx",
        "./EditorProvider": "./src/context/EditorProvider.tsx",
        "./Editor": "./src/Canvas.tsx",
        "./useEditorContext": "./src/exposes/useEditorContext.ts",
        "./useEditor": "./src/exposes/useEditor.ts",
        "./useSlide": "./src/exposes/useSlide.ts",
        "./useActiveObject": "./src/exposes/useActiveObject.ts",
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
    new Dotenv(),
  ],
};
