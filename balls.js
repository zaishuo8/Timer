/**
 * Created by xuting on 2017/4/10.
 */

function Balls() {

    this.ballsArr = [];
}


Balls.prototype.addBall = function (x, y, num) {

    for(let i = 0; i < digit[num].length; i++){

        for(let j = 0; j < digit[num][i].length; j++){

            if(digit[num][i][j] == 1){

                let ball = new Ball(x, y, num, i, j);
                this.ballsArr.push(ball);
            }
        }
    }

};


Balls.prototype.render = function (ctx) {

    this.clear();
    for(let i = 0; i < this.ballsArr.length; i++){

        this.ballsArr[i].render(ctx);
    }
};


Balls.prototype.update = function (curHours, nextHours, curMinutes, nextMinutes, curSeconds, nextSeconds) {

    /*
     * 产生小球过程,每个位置上的数字若发生变化,则产生小球
     *
     * */
    if(parseInt(curHours / 10) != parseInt(nextHours / 10)){

        this.addBall(MARGIN_LEFT + 0,
            MARGIN_TOP,
            parseInt(curHours / 10));
    }
    if(parseInt(curHours % 10) != parseInt(nextHours % 10)){

        this.addBall(MARGIN_LEFT + 15 * (RADIUS + 1),
            MARGIN_TOP,
            curHours % 10);
    }

    if(parseInt(curMinutes / 10) != parseInt(nextMinutes / 10)){

        this.addBall(MARGIN_LEFT + 39 * (RADIUS + 1),
            MARGIN_TOP,
            parseInt(curMinutes / 10));
    }
    if(parseInt(curMinutes % 10) != parseInt(nextMinutes % 10)){

        this.addBall(MARGIN_LEFT + 54 * (RADIUS + 1),
            MARGIN_TOP,
            curMinutes % 10);
    }

    if(parseInt(curSeconds / 10) != parseInt(nextSeconds / 10)){

        this.addBall(MARGIN_LEFT + 78 * (RADIUS + 1),
            MARGIN_TOP,
            parseInt(curSeconds / 10));
    }
    if(parseInt(curSeconds % 10) != parseInt(nextSeconds % 10)){

        this.addBall(MARGIN_LEFT + 93 * (RADIUS + 1),
            MARGIN_TOP,
            curSeconds % 10);
    }

};


/*
 * 判断小球时候滚出了画布
 *
 * */
Balls.prototype.clear = function () {

    for(let i = 0; i < this.ballsArr.length; i++){

        if(this.ballsArr[i].x + RADIUS < 0 || this.ballsArr[i].x - RADIUS > WINDOW_WIDTH){

            this.ballsArr.splice(i, 1);
            i--;
        }
    }
};