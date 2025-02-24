class Chicken extends MovableObject {
    y = 350;
    moveable = 1;
    currentImage = 0;
    offsetLeft = 10;
    offsetRight = 100;
    offsetTop = 1;
    offsetBottom = 1;
    images_walking = [
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor(x){
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = x;
        this.speed = 1.5 ;
        this.loadimages(this.images_walking);
        this.animate();
    }

    animate(){
        setInterval(() =>{
            this.moveLeft();
        }, 1000/60);
        setInterval(()=>{
            this. playAnimation(this.images_walking);
        }, 200);
    }
}