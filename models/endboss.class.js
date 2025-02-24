class Endboss extends MovableObject {
    y = -35;
    height = 500;
    width = 300;
    images_walking = [
        './img/4_enemie_boss_chicken/2_alert/G5.png',
        './img/4_enemie_boss_chicken/2_alert/G6.png',
        './img/4_enemie_boss_chicken/2_alert/G7.png',
        './img/4_enemie_boss_chicken/2_alert/G8.png',
        './img/4_enemie_boss_chicken/2_alert/G9.png',
        './img/4_enemie_boss_chicken/2_alert/G10.png',
        './img/4_enemie_boss_chicken/2_alert/G11.png',
        './img/4_enemie_boss_chicken/2_alert/G12.png'
    ];
    currentImage = 0;
    constructor(){
        super().loadImage('./img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadimages(this.images_walking);
        this.x = 4000;
        this.animate();
    }

    animate(){
        setInterval(()=>{
            this. playAnimation(this.images_walking);
        }, 200);
    }

    playAnimation(){
        let i = this.currentImage % this.images_walking.length;
                let path = this.images_walking[i];
                this.img = this.imageCache[path];
                this.currentImage++;
    }
}