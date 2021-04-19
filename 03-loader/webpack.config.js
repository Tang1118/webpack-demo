const path = require('path')

module.exports = {
  // 打包模式
  mode: 'none',
  // 文件的打包入口 可以有多个入口
  entry: './src/main.js',  // 注意这里的 ./ 不能省略
  // 只能存在一个 输出
  output: {
    filename: '02-mode-none-bundle.js',
    // 输出的文件名称
    path: path.join(__dirname, 'output')
  }
}

