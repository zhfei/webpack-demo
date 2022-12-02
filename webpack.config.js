const path = require('path')


module.exports = {
    mode: "development", //mode: development, production 开发模式与生产模式配置

    entry: path.join(__dirname, "./src/index123.js"), //自定义webpack的打包入口

    output: {
        path: path.join(__dirname, "./dist"), //自定义webpack的打包导出目录
        filename: 'bundle.js' //自定义webpack的打包导出文件名
    }



}