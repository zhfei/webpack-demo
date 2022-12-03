const path = require('path')

//导入插件，得出一个构造函数
const HtmlPlugin = require('html-webpack-plugin')
//创建插件实例对象
const htmlplugin = new HtmlPlugin({
    template: './src/index.html', //copy文件路径源
    filename: './index.html'      //copy文件路径目标
})

module.exports = {
    mode: "development", //mode: development, production 开发模式与生产模式配置

    entry: path.join(__dirname, "./src/index123.js"), //自定义webpack的打包入口
    output: {
        path: path.join(__dirname, "./dist"), //自定义webpack的打包导出目录
        filename: 'bundle.js' //自定义webpack的打包导出文件名
    },
    plugins: [
        htmlplugin //添加htmlplugin插件对象，webpack在运行前，读取这个插件实例并运行
    ]

}