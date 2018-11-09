const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
module.exports = {
  entry: {
    index: "./src/index.js",
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "index"
    })
  ],
  output: {
    filename: devMode ? '[name].[hash:8].js': '[name].[chunkhash:8].js',       //为了缓存,由于热更新与chunkhash不兼容，所以开发与生产要分开配置
    chunkFilename: devMode ? '[name].[hash:8].js': '[name].[chunkhash:8].js',  //为了缓存,由于热更新与chunkhash不兼容，所以开发与生产要分开配置
    path: path.resolve(__dirname, "dist") //定义输出文件夹dist路径
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader, //分离CSS文件，但是这个插件不兼容style-loader，所以设置分别开发与生产
          "css-loader",
          {
            loader: "postcss-loader", //本文未用到此loader...
            options: {
              // 如果没有options这个选项将会报错 No PostCSS Config found
              plugins: loader => []
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all", //移除js重复的模块
      runtimeChunk: {
          name: 'runtime'
        }, //分离webpack运行时的引导代码
      cacheGroups: {
        //将样式文件提取到一个css中
        styles: {
          name: "styles",
          test: /\.scss$/,
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};
