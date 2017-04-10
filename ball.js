/**
 * Created by xuting on 2017/4/10.
 */

let colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];


/*
 *
 * x, y : 坐标
 * g : 重力加速度(竖直方向上的加速度)
 * vx : 水平方向上的速度
 * vy : 竖直方向上的速度
 * 注意: 所有的速度与加速度都是矢量,带方向的
 *
 * */
function Ball(x, y, num, i, j) {

    this.x = x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
    this.y = y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
    this.g = 1.5 + Math.random(),
    this.vx = Math.random() > 0.5 ? 4 : -4,
    this.vy = -5,
    this.color = colors[Math.floor(Math.random() * colors.length)]
}


/*
 * 绘制小球
 * */
Ball.prototype.render = function (ctx) {

    this.update();

    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.arc(this.x, this.y, RADIUS, 0, Math.PI * 2, true);

    ctx.fill();

};


Ball.prototype.update = function () {

    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.g;

    /*
     * 碰撞检测,接触到地板了
     * 控制 y 坐标不让落出地板
     * 竖直方向上 改变 速度方向,并 减小速度值
     * */
    if(this.y >= WINDOW_HEIGHT - RADIUS){

        this.y = WINDOW_HEIGHT - RADIUS;
        this.vy = -this.vy * 0.5;

    }
};