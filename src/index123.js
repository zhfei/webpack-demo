import $ from 'jquery'

//webpack的打包入口是这里，所以将index.css从这里引入就可以被打包进去
//ES6中，一切皆模块，所以使用import导入
import './css/index.css'


$(function () {
    $('li:odd').css('background-color','red')
    $('li:even').css('background-color','green')
})