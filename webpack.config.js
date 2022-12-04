const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

//导入插件，得出一个构造函数
const HtmlPlugin = require('html-webpack-plugin')
//创建插件实例对象
const htmlplugin = new HtmlPlugin({
    template: './src/index.html', //copy文件路径源
    filename: './index.html'      //copy文件路径目标
})

module.exports = {
    //在开发阶段打开这个设置，可以在浏览器的js报错定位到源码的对应行数，点击能直接跳到源码。
    //如果不设置的话：浏览器的js报错定位是webpack打包对应的内存包的行数，点击查看跳的是内存结果bundle.js包
    devtool: 'eval-source-map',

    mode: "development", //mode: development, production 开发模式与生产模式配置

    entry: path.join(__dirname, "./src/index123.js"), //自定义webpack的打包入口
    output: {
        path: path.join(__dirname, "./dist"), //自定义webpack的打包导出目录
        filename: 'js/bundle.js' //自定义webpack的打包导出文件名
    },
    plugins: [
        htmlplugin, //添加htmlplugin插件对象，webpack在运行前，读取这个插件实例并运行
        new CleanWebpackPlugin(),
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

            //file-loader库 是url-loader加载器的内部依赖项，所以需要安装
            //如果匹配的use加载器只有一个时，可以直接写成字符串，或者写成数组也可以
            //limit参数为最大值设置，单位是字节，当大于这个限制时，图片使用网络请求获取，当小于这个3500字节时，图片会被转成base64随网页标签一起返回
            {test: /\.png|jpg|jpeg|gif$/, use:'url-loader?limit=3500&outputPath=images'},
            //js结尾文件中，webpack默认不能处理的高级语法走下面匹配的loader加载器
            //exclude排除/node_modules/目录下的第三方包
            {test: /\.js$/, use:'babel-loader', exclude: /node_modules/},
        ]
    }

}