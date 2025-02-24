class Character extends MovableObject {
    y = 140;
    height = 300;
    width = 100;
    currentImage = 0;
    world;
    speed = 7;
    moveable = 1;
    energy = 100;
    coins = 0;
    deadAnimated = 1;
    offsetLeft = 30;
    offsetRight = 40;
    offsetTop = 120;
    offsetBottom = 30;
    images_walking = [
        './img/2_character_pepe/2_walk/W-21.png',
        './img/2_character_pepe/2_walk/W-22.png',
        './img/2_character_pepe/2_walk/W-23.png',
        './img/2_character_pepe/2_walk/W-24.png',
        './img/2_character_pepe/2_walk/W-25.png',
        './img/2_character_pepe/2_walk/W-26.png',
        './img/2_character_pepe/2_walk/W-21.png'
    ];

    images_idle = [
        './img/2_character_pepe/1_idle/idle/I-1.png',
        './img/2_character_pepe/1_idle/idle/I-2.png',
        './img/2_character_pepe/1_idle/idle/I-3.png',
        './img/2_character_pepe/1_idle/idle/I-4.png',
        './img/2_character_pepe/1_idle/idle/I-5.png',
        './img/2_character_pepe/1_idle/idle/I-6.png',
        './img/2_character_pepe/1_idle/idle/I-7.png',
        './img/2_character_pepe/1_idle/idle/I-8.png',
        './img/2_character_pepe/1_idle/idle/I-9.png',
        './img/2_character_pepe/1_idle/idle/I-10.png'
    ];
    images_jumping = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];
    images_dead = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];
    images_hurt = [
        './img/2_character_pepe/4_hurt/H-41.png',
        './img/2_character_pepe/4_hurt/H-42.png',
        './img/2_character_pepe/4_hurt/H-43.png'
    ];
    images_game_over = [
        './img/9_intro_outro_screens/game_over/game over.png'
    ];
    constructor(){
        super().loadImage('./img/2_character_pepe/2_walk/W-21.png');
        this.loadimages(this.images_walking);
        this.loadimages(this.images_idle);
        this.loadimages(this.images_jumping);
        this.loadimages(this.images_dead);
        this.loadimages(this.images_hurt);
        this.loadimages(this.images_game_over);
        this.animate();
        this.applyGravity();
    }

    animate(){
        setInterval(()=>{
            if(this.world.keyboard.ArrowRight && this.x < level1.level_end_x){
                this.moveRight();
                this.world.staturbar_healt.x = this.x -100;
                this.world.staturbar_coins.x = this.x -100;
                this.world.staturbar_botlle.x = this.x -100;
                this.otherDirection = false;
            }
            if(this.world.keyboard.ArrowLeft && this.x > 0){
                this.moveLeft();
                this.world.staturbar_healt.x = this.x -100;
                this.world.staturbar_coins.x = this.x -100;
                this.world.staturbar_botlle.x = this.x -100;
                this.otherDirection = true;
            }
            if(this.world.keyboard.ArrowUp && this.y == 140){
                this.jump();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000/60);
        this.deadAnimation();
    }

    startAnimation(){
        setInterval(()=>{
            if (this.isHurt()){
                this. playAnimation(this.images_hurt);
            }else if(this.isAboveGround()){
                this. playAnimation(this.images_jumping);
            }else{
                
                if(this.world.keyboard.ArrowRight || this.world.keyboard.ArrowLeft && this.y == 140){
                    this. playAnimation(this.images_walking);
                }else{
                    //this.animateIdle();
                }
            }
        }, 60);
    }

    animateIdle(){
        setInterval(()=>{
            //this. playAnimation(this.images_jumping);
        }, 7000);
    }

    deadAnimation(){
        setInterval(()=>{
            if(this.isDead()){
                this. playAnimation(this.images_dead);
                this.width = 0;
                //this. playAnimation(this.images_game_over);
            }else{
                this.startAnimation();
            }
        }, 20);
        
    }

}