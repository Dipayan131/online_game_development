const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

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
    port: 3011,
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
      name: "firebase_app",
      filename: "remoteEntry.js",
      exposes: {
        "./DataProvider": "./src/shared/context/DataProvider.tsx",
        "./useData": "./src/shared/context/useData.tsx",
        "./storage": "./src/shared/config/storage.ts",
        "./useFirebase": "./src/shared/hooks/useFirebase.ts",
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
  ],
};
