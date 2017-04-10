/**
 * Created by xuting on 2017/4/10.
 */

function Time() {

    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
}



Time.prototype.render = function (ctx) {

    ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
    renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(this.hours/10), ctx);
    renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(this.hours%10), ctx);
    renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, ctx);
    renderDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(this.minutes/10), ctx);
    renderDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(this.minutes%10), ctx);
    renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, ctx);
    renderDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(this.seconds/10), ctx);
    renderDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(this.seconds%10), ctx);
};

Time.prototype.update = function (curShowTimeSeconds) {

    this.hours = parseInt(curShowTimeSeconds / 3600);
    this.minutes = parseInt((curShowTimeSeconds - 3600 * this.hours) / 60);
    this.seconds = curShowTimeSeconds % 60;
};






/*
 * 画一个数字
 * x, y : 该数字的相对坐标坐标
 * num : 需要绘制的数字
 * cxt : canvas 的 context
 *
 * */
function renderDigit(x, y, num, ctx) {

    ctx.fillStyle = 'rgb(0, 102, 153)';
    for(let i = 0; i < digit[num].length; i++){

        for(let j = 0; j < digit[num][i].length; j++){

            if(digit[num][i][j] == 1){

                // 第 i 行,第 j 列, 注意: i, j 都是从 0 开始的
                ctx.beginPath();
                ctx.arc(x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
                    y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
                    RADIUS, 0, Math.PI * 2);

                ctx.fill();
            }
        }
    }
}