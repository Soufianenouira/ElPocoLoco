class SalsaBottle extends MovableObject{
    height = 100;
    width = 100;
    speedX = 10;
    speedY = 30;
    moveable = 1;

    images_rotation = [
        './img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    images_splash = [
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    constructor(x, y){
        super().loadImage('./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.speed = 1.5 ;
        this.x = x;
        this.y = y;
        this.loadimages(this.images_rotation);
        this.loadimages(this.images_splash);
        this.throw();
    }

    throw(){
        this.applyGravity();
        setInterval(()=>{
            this.x += this.speedX;
            this.playAnimation(this.images_rotation);
        }, 25);
    }
    

}