/***
 * coder 写代码 
 * 
 * 
 */
//我是programmer  

var  pars = {
    turnNum:8,
    table:document.getElementsByClassName('container')[0],
    judgeFn:judgeFn
}

 var lotter = new Lottery();







//我是小白  

// var btn = document.getElementsByClassName('btn')[0],
//     pan = document.getElementsByClassName('pan')[0];
// var bool = true;
// var num = 0;

// btn.onclick = function () {
//     if (bool) {
//         num = Math.floor(Math.random() * 360); //随机出一个数（角度）
//         console.log(num);
//         turnTable(num) //旋转大转盘
//         bool = false;
//     }
// }

// function turnTable(deg) {
//     var deg = deg + 360 * 8; // 加了8圈
//     pan.style.transform = 'rotate(' + deg + 'deg)';
//     pan.style.transition = 'all 3s';

// }

// pan.addEventListener('webkitTransitionEnd', function () {
//     console.log('end');
//     bool = true;
//     pan.style.transform = 'rotate(' + num + 'deg)';
//     pan.style.transition = 'none';
//     judgeFn(num);
// })

function judgeFn(deg) { //判断函数 
    var str = '';
    if (deg > 0 && deg < 45) {
        //二等奖
        str = '二等奖'
    } else if (deg > 90 && deg < 135 || deg > 270 && deg < 315) {
        //三等奖
        str = '三等奖'
    } else if (deg > 45 && deg < 90 || deg > 135 && deg < 180 || deg > 225 && deg < 270 || deg > 315 && deg < 360) {
        //四等奖
        str = '四等奖'
    } else if(deg>180 && deg<225){
        //一等奖
        str = '一等奖'
    }

    alert('恭喜你 大吉大利 ，今晚获得'+ str + '!');
}
/***
 * 1,让我们的代码具有可维护性，可复用性。
 * 2，代码的语义化，能看懂你写的是啥。
 * 3，避免全局的变量的污染
 * 4，模块化
 *    封装的思想
 * 5，设计模式的东西在里面 

 */
//一 ，  函数 最初的封装的和模块的思想 --闭包  函数式编程 
 
// function add(a,b){
//     return a+b ;
// }
// 二 ，立即执行函数 
// var abc = (function(){ //代码块 
//     var abc = 'deng';
//     function getadc(){
//         console.log(abc)
//     }
//     return {
//         getadc:getadc
//     }
// })()
// 三 、 对象 
// var obj  = {
//     name:'deng',
//     init:function(){
//         console.log(this.name)
//     }
// }
// obj.init();//代码入口
// 四 对象的原型 类

// function ABC (){ CLASS
// }
// ABC.prototype = XXX

//  五，jquery

// (function(a,b){
//     //modle
//     b(a);

// })(window,function(window){
//     //主代码  
//     window.jquery = jquery = $;
//     function jquery(){

//     }
//     jquery.prototype.init = function()
    
//         return this;
//     }

// })

// 2013-14 年
// nodejs --  js  mvc  mvvm




