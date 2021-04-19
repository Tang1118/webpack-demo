class MyPlugin {
  apply(compiler) {
    console.log('MyPlugin 启动')
    
    // 参数1是插件的名字 参数 2  是钩子的回调函数
    compiler.hooks.emit.tap('RemoveCommentsPlugin', (compilation) => {
      // compilation  可以理解成 这次打包的 上下文
      // 我们可以使用这个对象中的 assets 属性获取即将写入输出目录的资源文件信息，它是一个对象
      for (const name in compilation.assets) {
        // 输出文件（正在处理文件）的名称
        // console.log(name)
        
        // 输出文件的内容
        // console.log(compilation.assets[name].source())
        
        // 判断是否是js
        if (name.endsWith('.js')) {
          // 输出文件的内容
          const contents = compilation.assets[name].source()
          
          console.log('处理前的长度：', compilation.assets[name].size())
          
          // 正则匹配删除注释
          const noComments = contents.replace(/\/\*{2,}\/\s?/g, '')
          
          // 最后覆盖掉 compilation.assets 中对应的对象
          compilation.assets[name] = {
            source: () => noComments,
            size: () => noComments.length
          }
          
          console.log('处理后的长度：', compilation.assets[name].size())
          
        }
      }
    })
  }
}

module.exports = MyPlugin
