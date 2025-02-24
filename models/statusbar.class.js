class Statusbar extends DrawableObjects {
    x = 20;
    y = -10;
    width = 230;
    height = 50;
    collection;
    startValue = 100;
    

    constructor(typ, startValue, x, y){
        super();
        this.x = x;
        this.y = y;
        this.startValue = startValue;
        if(typ == 'coin'){
            this.collection = '1_statusbar_coin';
        }else if( typ == 'health'){
            this.collection = '2_statusbar_health';
        }else{
            this.collection = '3_statusbar_bottle';
        }
        this.loadImage( `./img/7_statusbars/1_statusbar/${this.collection}/blue/${this.startValue}.png`);
    }

    loadNewImage(energy){
        this.loadImage( `./img/7_statusbars/1_statusbar/${this.collection}/blue/${energy}.png`);
    }
}