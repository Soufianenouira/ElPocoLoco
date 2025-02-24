class Coin extends DrawableObjects{
    height = 150;
    width = 150;
    offsetLeft = 30;
    offsetRight = 80;
    offsetTop = 30;
    offsetBottom = 30;
    constructor(x, y){
        super().loadImage('./img/8_coin/coin_2.png');
        this.x = x;
        this.y = y;
    }
}