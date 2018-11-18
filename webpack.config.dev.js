const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: ["react-hot-loader/patch", "./src/index.js"],
  output: {
    filename: "[name].[hash:8].js" ,//为了缓存,由于热更新与chunkhash不兼容，所以开发与生产要分开配置
    path: path.resolve(__dirname, "dist") //定义输出文件夹dist路径
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    extensions: [".js", ".json", ".jsx", ".css", ".sass","scss"],
    alias: {
      "@": path.resolve("src"),
      "containers": path.resolve("./src/containers/"),
      "components": path.resolve("./src/components/"),
      "images": path.resolve("./src/images/"),
      "scss": path.resolve("./src/scss/"),
      "utils": path.resolve("./src/utils/"),
      "constants": path.resolve("./src/constants/"),
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
          "style-loader",
          { loader: "css-loader", options: { sourceMap: true } },
          {
            loader: "postcss-loader",
            options: {
              plugins: [autoprefixer] //这个必须要写,不然报错 应该是版本兼容问题
            }
          },
          { loader: "sass-loader", options: { sourceMap: true } }
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
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      inject: "body",
    }),
    new webpack.HotModuleReplacementPlugin() //webpack内置的热更新插件
  ],
  devtool: "cheap-module-eval-source-map",
  devServer: {
    //启用开发服务器
    contentBase: "./dist", //告诉服务器从哪提供内容，只有在想要提供静态文件时才需要
    compress: true, //一切服务都启用gzip 压缩
    host: "192.168.254.103", //指定使用一个host，可用ip地址访问，没有的话如果别人访问会被禁止。默认localhost。
    port: "8080", //指定端口号，如省略，默认为”8080“
    hot: true, //启用模块热替换特性
    inline: true, //启用内联模式，一段处理实时重载的脚本被插入到bundle中，并且构建消息会出现在浏览器控制台
    historyApiFallback: true //开发单页应用时有用，依赖于HTML5 history API，设为true时所有跳转将指向index.html
  },
  mode: "development"
};
