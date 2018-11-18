const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
  mode: "production",

  entry: "./src/index.js",
  output: {
    filename:  "[name].[chunkhash:8].js", 
    chunkFilename: "[name].[chunkhash:8].js", 
    path: path.resolve(__dirname, "dist") 
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    extensions: [".js", ".json", ".jsx", ".css", ".sass"],
    alias: {
      alias: {
        "@": path.resolve("src"),
        "containers": path.resolve("./src/containers/"),
        "components": path.resolve("./src/components/"),
        "images": path.resolve("./src/images/"),
        "scss": path.resolve("./src/scss/"),
        "utils": path.resolve("./src/utils/"),
        "constants": path.resolve("./src/constants/"),
      }
    }
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
           MiniCssExtractPlugin.loader, //分离CSS文件，但是这个插件不兼容style-loader，所以设置分别开发与生产
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              plugins: [autoprefixer] //这个必须要写,不然报错 应该是版本兼容问题
            }
          },
          { loader: "sass-loader"}
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp)/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 5000, //如果小于则以base64位显示，大于这个则以图片路径显示
              outputPath: "images/" //让图片都打包到images文件夹下
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "url-loader",
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
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
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
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  node: {
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  }
};
