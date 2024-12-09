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
    port: 3008,
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
      name: "slide_app",
      filename: "remoteEntry.js",
      exposes: {
        "./CommonView": "./src/views/CommonViewMain/index.tsx",
        "./ResponsiveView": "./src/views/ResponsiveView/index.tsx",
        "./IconView": "./src/views/IconView/index.tsx",
        "./CommonContainer": "./src/containers/CommonContainer/index.tsx",
        "./ViewContainer": "./src/containers/ViewContainer/index.tsx",
        "./Loader": "./src/components/base/Loader/index.tsx",
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
