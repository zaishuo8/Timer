/**
 * Created by xuting on 2017/4/10.
 */

const WINDOW_WIDTH = 1024;
const WINDOW_HEIGHT = 500;
const RADIUS = 8; // 小球半径
const MARGIN_TOP = 60;
const MARGIN_LEFT = 30;

let curShowTimeSeconds = 0;

/* new Date(); 返回 Date 对象
* 若填参数,参数有好几种填法, 下面是其中的一种 都是 Int , 年月日时分秒
* 注意: 其中月的数值是 0-11
*/
// const endTime = new Date(2017, 3, 10, 22, 28, 30);



window.onload = function () {

    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    curShowTimeSeconds = getCurrentShowTimeSeconds();

    let time = new Time();
    let balls = new Balls();

    /*
    * 因为 Time 和 Balls 都要用到 timerUpdate
    * 所以放在 主函数中,不放在 Time 对象下
    *
    * */
    function timerUpdate() {

        let nextShowTimeSeconds = getCurrentShowTimeSeconds();
        let nextHours = parseInt(nextShowTimeSeconds / 3600);
        let nextMinutes = parseInt((nextShowTimeSeconds - nextHours * 3600) / 60);
        let nextSeconds = nextShowTimeSeconds % 60;

        let curHours = parseInt(curShowTimeSeconds / 3600);
        let curMinutes = parseInt((curShowTimeSeconds - curHours * 3600) / 60);
        let curSeconds = curShowTimeSeconds % 60;

        if(curSeconds != nextSeconds){

            balls.update(curHours, nextHours, curMinutes, nextMinutes, curSeconds, nextSeconds);

            time.update(curShowTimeSeconds);

            curShowTimeSeconds = nextShowTimeSeconds;
        }
    }

    setInterval(function () {

        timerUpdate();

        time.render(context);

        balls.render(context);

    }, 20);
}


/*
* 获取当前时间到截止时间的 秒 数
* */
function getCurrentShowTimeSeconds() {

    let curTime = new Date();

    let secs = curTime.getHours() * 3600 + curTime.getMinutes() * 60 + curTime.getSeconds();

    return Math.round(secs);  // round 是四舍五入到最接近的整数
}
