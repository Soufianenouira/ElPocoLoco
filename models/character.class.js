/**
 * The Character class represents a player character that can move, jump, and interact with the game world.
 * It also handles animations for different character states like walking, idle, jumping, and being dead.
 * 
 * @extends MovableObject
 */
class Character extends MovableObject {
    /** @type {number} The Y position of the character */
    y = 140;

    /** @type {number} The X position of the character */
    x = 120;

    /** @type {number} The height of the character */
    height = 300;

    /** @type {number} The width of the character */
    width = 100;

    /** @type {number} The current image index used for animation */
    currentImage = 0;

    /** @type {World} The world in which the character exists */
    world;

    /** @type {number} The speed at which the character moves */
    speed = 7;

    /** @type {number} The character's energy level (100 is full) */
    energy = 100;

    /** @type {number} The number of coins the character has collected */
    coins = 0;

    /** @type {number} The left offset of the character */
    offsetLeft = 30;

    /** @type {number} The right offset of the character */
    offsetRight = 40;

    /** @type {number} The top offset of the character */
    offsetTop = 120;

    /** @type {number} The bottom offset of the character */
    offsetBottom = 30;

    /** @type {boolean} Flag indicating whether the character is moving left */
    left = false;

    /** @type {boolean} Flag indicating whether the character is moving right */
    right = false;

    /** @type {boolean} Flag indicating if the character's dead animation has played */
    deadAnimated = false;

    /** @type {boolean} Flag indicating if the game over animation has played */
    gameOverAnimated = false;

    /** @type {number} The last time the character was idle (used for sleep mode) */
    lastTimeGetIdle = 0;

    /** @type {string[]} Array of image paths for walking animations */
    images_walking = [
        './img/2_character_pepe/2_walk/W-21.png',
        './img/2_character_pepe/2_walk/W-22.png',
        './img/2_character_pepe/2_walk/W-23.png',
        './img/2_character_pepe/2_walk/W-24.png',
        './img/2_character_pepe/2_walk/W-25.png',
        './img/2_character_pepe/2_walk/W-26.png',
        './img/2_character_pepe/2_walk/W-21.png'
    ];

    /** @type {string[]} Array of image paths for idle animations */
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

    /** @type {string[]} Array of image paths for jumping animations */
    images_jumping = [
        './img/2_character_pepe/3_jump/J-31.png',
        './img/2_character_pepe/3_jump/J-34.png',
        './img/2_character_pepe/3_jump/J-35.png',
        './img/2_character_pepe/3_jump/J-36.png',
        './img/2_character_pepe/3_jump/J-37.png',
        './img/2_character_pepe/3_jump/J-38.png',
        './img/2_character_pepe/3_jump/J-39.png'
    ];

    /** @type {string[]} Array of image paths for dead animations */
    images_dead = [
        './img/2_character_pepe/5_dead/D-51.png',
        './img/2_character_pepe/5_dead/D-52.png',
        './img/2_character_pepe/5_dead/D-53.png',
        './img/2_character_pepe/5_dead/D-54.png',
        './img/2_character_pepe/5_dead/D-55.png',
        './img/2_character_pepe/5_dead/D-56.png',
        './img/2_character_pepe/5_dead/D-57.png'
    ];

    /** @type {string[]} Array of image paths for hurt animations */
    images_hurt = [
        './img/2_character_pepe/4_hurt/H-41.png',
        './img/2_character_pepe/4_hurt/H-42.png',
        './img/2_character_pepe/4_hurt/H-43.png'
    ];

    /** @type {string[]} Array of image paths for game over animation */
    images_game_over = [
        './img/9_intro_outro_screens/game_over/game over.png'
    ];

    /** @type {string[]} Array of image paths for sleep (long idle) animations */
    images_sleep = [
        './img/2_character_pepe/1_idle/long_idle/I-11.png',
        './img/2_character_pepe/1_idle/long_idle/I-12.png',
        './img/2_character_pepe/1_idle/long_idle/I-13.png',
        './img/2_character_pepe/1_idle/long_idle/I-14.png',
        './img/2_character_pepe/1_idle/long_idle/I-15.png',
        './img/2_character_pepe/1_idle/long_idle/I-16.png',
        './img/2_character_pepe/1_idle/long_idle/I-17.png',
        './img/2_character_pepe/1_idle/long_idle/I-18.png',
        './img/2_character_pepe/1_idle/long_idle/I-19.png',
        './img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];
    
    /**
     * Creates a new instance of the Character class and initializes the character's animations and gravity.
     */
    constructor() {
        super().loadImage('./img/2_character_pepe/2_walk/W-21.png');
        this.loadimages(this.images_walking);
        this.loadimages(this.images_idle);
        this.loadimages(this.images_sleep);
        this.loadimages(this.images_jumping);
        this.loadimages(this.images_dead);
        this.loadimages(this.images_hurt);
        this.loadimages(this.images_game_over);
        this.animate();
        this.applyGravity();
        this.audioAnimation();
    }

    /**
     * Adjusts the positions of the character's status bars and boss icon.
     * Keeps the status bars aligned with the character's position.
     */
    keepAllBarsLeft() {
        this.world.staturbar_healt.x = this.x - 100;
        this.world.staturbar_coins.x = this.x - 100;
        this.world.staturbar_botlle.x = this.x - 100;
        this.world.endBossIcon.x = this.x + 330;
    }

    /**
     * Starts moving the character to the right.
     */
    startMovingRight() {
        this.moveRight();
        this.keepAllBarsLeft();
        this.otherDirection = false;
    }

    /**
     * Starts moving the character to the left.
     */
    startMovingLeftt() {
        this.moveLeft();
        this.keepAllBarsLeft();
        this.otherDirection = true;
    }

    /**
     * Animates the character by checking for keyboard input and updating the character's position and animation accordingly.
     */
    animate() {
        setInterval(() => {
            if ((this.right || this.world.keyboard.ArrowRight) && this.x < level1.level_end_x && !this.isDead() && !this.world.isGameOver) {
                this.startMovingRight();
            } else if ((this.left || this.world.keyboard.ArrowLeft) && this.x > 0 && !this.isDead() && !this.world.isGameOver) {
                this.startMovingLeftt();
            }
            if (this.world.keyboard.ArrowUp && this.y == this.characterStartY && !this.isDead() && !this.isHurt() && !this.world.isGameOver) {
                this.jump();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
        this.deadAnimation();
    }

    /**
     * Starts the appropriate animation for the character based on their current state (hurt, jumping, walking, idle, or sleep).
     */
    startAnimation() {
        if (this.isHurt()) {
            this.playAnimation(this.images_hurt);
            this.world.audios[2].play();
        } else if (this.isAboveGround()) {
            this.playAnimation(this.images_jumping);
        } else {
            if (((this.right || this.world.keyboard.ArrowRight) || (this.left || this.world.keyboard.ArrowLeft)) && this.y == this.characterStartY) {
                this.playAnimation(this.images_walking);
                this.lastTimeGetIdle = new Date().getSeconds();
            } else {
                if (this.sleepMode()) {
                    this.playAnimation(this.images_idle);
                } else {
                    this.playAnimation(this.images_sleep);
                }
            }
        }
    }

    /**
     * Determines whether the character is in sleep mode (idle for less than 10 seconds).
     * 
     * @returns {boolean} True if the character is in sleep mode, false otherwise.
     */
    sleepMode() {
        let newTime = new Date().getSeconds();
        let timepassed = newTime - this.lastTimeGetIdle;
        return timepassed < 10;
    }

    /**
     * Plays different audio effects based on the character's state (dead or game over).
     */
    audioAnimation() {
        setInterval(() => {
            if (this.isDead() && !this.deadAnimated) {
                this.world.audios[0].pause();
                this.world.audios[4].play();
                this.deadAnimated = true;
            }
            if (this.world.isGameOver && !this.gameOverAnimated) {
                this.world.audios[0].pause();
                this.world.audios[5].play();
                this.gameOverAnimated = true;
            }
        }, 150);
    }
    
    /**
     * Disables movement for all chicken enemies in the game.
     */
    disableChickensMoveParameter() {
        this.world.level.enemies.forEach((enemy) => {
            if (enemy instanceof Chicken) {
                enemy.chickenCanStartWalking = false;
            }
        });
    }

    /**
     * Starts the dead animation for the character.
     */
    startDeadAnimation() {
        this.disableChickensMoveParameter();
        this.playAnimation(this.images_dead);
        this.world.gameOver.x = this.x - 100;
        this.world.gameOver.width = 720;
        this.offsetTop = 300;
        this.offsetRight = 100;
        document.getElementById('bottom-bar').style.display = 'none';
        document.getElementById('upper-bar').style.display = 'none';
        document.getElementById('game-restart-container').style.display = 'flex';
        document.getElementById('menu').style.justifyContent = 'center';
    }

    /**
     * Starts the game over animation.
     */
    startGameOverAnimation() {
        this.disableChickensMoveParameter();
        this.playAnimation(this.images_idle);
        this.world.gameOver.x = this.x - 100;
        this.world.gameOver.width = 750;
        this.offsetTop = 300;
        this.offsetRight = 100;
        this.width = 0;
        document.getElementById('bottom-bar').style.display = 'none';
        document.getElementById('upper-bar').style.display = 'none';
        document.getElementById('menu').style.justifyContent = 'center';
        document.getElementById('game-restart-container').style.display = 'flex';
        if(this.world.level == level2){
            document.getElementById('Congratulations').style.display = 'flex';
        }else{
            document.getElementById('next-btn').style.display = 'flex';
        }
    }

    /**
     * Handles the dead animation of the character based on the current game state.
     */
    deadAnimation() {
        setInterval(() => {
            if (this.isDead()) {
                document.getElementById('continue-btn').style.display = 'none';
                this.startDeadAnimation();
            } else if (this.world.isGameOver) {
                document.getElementById('continue-btn').style.display = 'none';
                this.startGameOverAnimation();
            } else {
                this.startAnimation();
            }
        }, 150);
    }
}
