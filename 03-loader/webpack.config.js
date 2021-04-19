const path = require('path')

module.exports = {
  // 打包模式
  mode: 'none',
  // 文件的打包入口 可以有多个入口
  entry: './src/main.css',  // 注意这里的 ./ 不能省略
  // 只能存在一个 输出
  output: {
    filename: '03-bundle.js',
    // 输出的文件名称
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        // 正则表达式，来匹配文件
        test: /.css&/,
        //  指定具体的 loader
        use: 'css-loader'
      }
    ]
  }
}

