class MovableObject extends DrawableObjects {
    x = 120;
    y = 250;
    height = 100;
    width = 100;
    img;
    imageCache = {};
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    ismoveable = 0;
    energy = 100;
    dead = 0;
    lastHit = 0;
    currentImage = 0;
    

    applyGravity(){
        setInterval(()=>{
            if(this.isAboveGround() || this.speedY > 0){
                this.y -= this.speedY;
                this.speedY -= this.acceleration;  
            }else{
                //this.img = this.imageCache['./img/2_character_pepe/2_walk/W-21.png'];
                this.y = 140;
            }
        },1000/25);
    }

    isAboveGround(){
        if(this instanceof SalsaBottle){
            return true;
        }else{
            return this.y < 120;
        }
    }

    

    moveRight () {
        this.x += this.speed;
    }

    moveLeft () {
        this.x -= this.speed;
    }

    jump(){
        this.speedY = 25;
    }

    hit(){
        if(this.energy <= 0){
            this.energy = 0;
        }else{
            this.energy -= 1;
            this.lastHit = new Date().getTime();

        }
    }

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed /= 1000;
        return timepassed < 1;
    }

    isDead(){
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed /= 1000;
        return this.energy <= 0 && timepassed < 2;
    }

    playAnimation(images){
        let i = this.currentImage % images.length;
                let path = images[i];
                this.img = this.imageCache[path];
                this.currentImage++;
    }

    isIncolliding(mo){
        let characterX1 = this.x + this.offsetLeft;
        let characterX2 = this.x + this.width - this.offsetRight;
        let characterY1 = this.y + this.offsetTop;
        let characterY2 = this.y + this.height - this.offsetBottom;
        let moX1 = mo.x + mo.offsetLeft;
        let moX2 =  mo.x + mo.width - mo.offsetRight;
        let moY1 = mo.y + mo.offsetTop;
        let moY2 = mo.y + mo.height - mo.offsetBottom - mo.offsetTop;
        let a = characterX2 > moX1;
        let b = characterY2 > moY1;
        let c =  characterX1 < moX2;
        let d = characterY1 < moY2;
        return characterX2 > moX1 && 
        characterY2 > moY1 &&
        characterX1 < moX2 && 
        characterY1 < moY2;
    }

}//this.x + this.width - this.offsetLeft > mo.x + mo.offsetLeft && 
//this.y + this.height - this.offsetBottom > mo.y + mo.offsetTop &&
//this.x + this.offsetLeft < mo.x + mo.width - mo.offsetRight && 
//this.y + this.offsetTop < mo.y + mo.height - mo.offsetBottom;