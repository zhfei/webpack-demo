import $ from 'jquery'

//webpack的打包入口是这里，所以将index.css从这里引入就可以被打包进去
//ES6中，一切皆模块，所以使用import导入
import './css/index.css'
//导入less类型模块
import './css/index.less'
//导入图片类型模块
import img from './images/cat.jpeg'

$('.box').attr('src',img)

$(function () {
    $('li:odd').css('background-color','red')
    $('li:even').css('background-color','green')
})