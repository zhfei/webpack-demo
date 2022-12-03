
//插件的插件
//babel-loader插件在加载时，会读取babel.config.js配置文件，查询是否有它需要的插件要加载
//这里通过plugin-proposal-decorators来处理js的高级语法“装饰器”语法
module.exports = {
    plugins: [
        ['@babel/plugin-proposal-decorators', {legacy: true}]
    ]
}