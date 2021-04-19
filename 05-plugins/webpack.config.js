const path = require('path')
// 自动删除 dist 文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 自动生成  HTML 插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 拷贝一些静态文件到对应的目录下
const CopyPlugin = require('copy-webpack-plugin')

const MyPlugin = require('./my-plugin')

const A = new Pr
module.exports = {
  // 打包模式
  mode: 'none',
  // 文件的打包入口 可以有多个入口
  entry: './src/main.js',  // 注意这里的 ./ 不能省略
  // 只能存在一个 输出
  output: {
    filename: 'bundle.js',
    // 输出的文件名称
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.png$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024 // 10 KB
          }
        }
      }
    ]
  },
  plugins: [
    // 自动清理 dist 目录
    new CleanWebpackPlugin(),
    // 生成 html 文件
    new HtmlWebpackPlugin({
      title: 'Webpack Plugin Sample - 1',
      template: './src/index.html'
    }),
    // 生成一个新得 html 文件 多页应用
    new HtmlWebpackPlugin({
      filename: 'about.html',
      title: 'about.html',
      template: './src/index.html'
    }),
    // new CopyPlugin({
    //   patterns: ['public']
    // })
    // 拷贝目录
    new CopyPlugin({
      patterns: [
        {
          from: 'public', to: 'public'
        },
      ]
    }),
    new MyPlugin()
  ]
}

