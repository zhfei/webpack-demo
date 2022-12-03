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



function info(target) {
    //为对象添加静态属性
    target.info = 'Person info'
}

//使用一个webpack默认不支持的高级语法，装饰器，此时webpack会查询是否有其他rules中结尾为js的laoder加载器可以处理这个高级语法
@info
class Person {}


console.log(Person.info);
