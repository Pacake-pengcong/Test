(function (win) {

    var defaultPar = {
        turnNum: 5,
        table: document.getElementsByTagName('body')[0],
        judgeFn: function () {}
    }
    
//   var  pars = {
//     turnNum:8,
//     table:document.getElementsByClassName('container')[0],
//     judgeFn:judgeFn
// }

    win.Lottery = Lottery;//暴露接口 
    function Lottery(pars) { //构造函数
        this.pars = Object.assign(defaultPar, pars) //相当于extend
        // console.log(this.pars)
        this.bool = true;
        this.init(); //初始化
    }
    Lottery.prototype.init = function () {
        var btn = this.pars.table.getElementsByClassName('btn')[0];
        this.pan = this.pars.table.getElementsByClassName('pan')[0];
        var self = this;
        btn.onclick = function () {
            // this ==//指向btn
            if (self.bool) {
                self.num = Math.floor(Math.random() * 360); //随机出一个数（角度）
                console.log(self.num);
                self.turnTable(self.num) //旋转大转盘
                self.bool = false;
            }
        }

        this.pan.addEventListener('webkitTransitionEnd', function () {
            console.log('end');
            self.bool = true;
            this.style.transform = 'rotate(' + self.num + 'deg)';
            this.style.transition = 'none';
            self.pars.judgeFn(self.num);
        })

    }

    Lottery.prototype.turnTable = function (deg) {
        var deg = deg + 360 * this.pars.turnNum; // 加了8圈
        this.pan.style.transform = 'rotate(' + deg + 'deg)';
        this.pan.style.transition = 'all 3s';

    }



})(window)