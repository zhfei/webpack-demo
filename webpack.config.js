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
    ],
    devServer: {
        open: true, //首次打包成功后，默认打开浏览器, 
        port: 8888, //设置使用的端口，http如果使用的80端口，默认是可以忽略的
        host: '127.0.0.1', //指定运行的主机地址
    }, 

    module: { //非js模块： webpack默认处理的模块是js结尾的。如果碰到其他模块，就查询这个key, 查询它们有没有对应的加载器，然后把这个模块交给对应的加载器
        rules: [
            //test: 要匹配的文件类型， 
            //use:  要调用的loader,其中use数组的顺序是固定的，调用顺序是从后往前
            {test: /\.css$/, use:['style-loader', 'css-loader']},

            //less库 是less-loader库加载器的内部依赖项，所以需要安装单不需要添加到处理规则中
            {test: /\.less$/, use:['style-loader', 'css-loader', 'less-loader']},

            {test: /\.png|jpg|jpeg$/, use:'url-loader'},
        ]
    }

}