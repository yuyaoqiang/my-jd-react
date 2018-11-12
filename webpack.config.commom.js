const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

const devMode = process.env.NODE_ENV !== "production";
module.exports = {
  entry: ['react-hot-loader/patch',"./src/index.js"],
  output: {
    filename: devMode ? "[name].[hash:8].js" : "[name].[chunkhash:8].js", //为了缓存,由于热更新与chunkhash不兼容，所以开发与生产要分开配置
    chunkFilename: devMode ? "[name].[hash:8].js" : "[name].[chunkhash:8].js", //为了缓存,由于热更新与chunkhash不兼容，所以开发与生产要分开配置
    path: path.resolve(__dirname, "dist") //定义输出文件夹dist路径
  },
  resolve: {
    modules: [
        "node_modules",
        path.resolve(__dirname, "src")
    ],
    extensions: [".js", ".json", ".jsx", ".css", ".sass"],
    alias: {
      '@': path.resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader, //分离CSS文件，但是这个插件不兼容style-loader，所以设置分别开发与生产
          { loader: "css-loader", options: { sourceMap: true } },
          {
            loader: "postcss-loader",
            options: {
              plugins:[autoprefixer], //这个必须要写,不然报错 应该是版本兼容问题
            }
          },
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      },
      {
        test:/\.(png|jpg|gif|jpeg)/,
          use: [
              {
                  loader: 'url-loader',
                  options: {
                      limit: 5000,//如果小于则以base64位显示，大于这个则以图片路径显示
                      outputPath: 'images/'//让图片都打包到images文件夹下
                  }
              }
          ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
              {
                  loader: 'url-loader',
                  options: {
                    limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
                    publicPath: "fonts/",
                    outputPath: "fonts/"
                  }
              }
          ]
      }
    ]
  },
  optimization: {
    runtimeChunk: {
      //分离webpack运行时的引导代码
      name: "single"
    },
    splitChunks: {
      chunks: "initial", //移除js重复的模块
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
    new CleanWebpackPlugin(["./dist"]),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      inject: "body",
      minify: {
        removeAttributeQuotes: true // 移除属性的引号
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
      chunkFilename: "[name].[contenthash:8].css"
    })
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  }
};
