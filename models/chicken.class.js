/**
 * Class representing a Chicken object that extends MovableObject.
 * The Chicken object is part of a game and can walk, die, and be deleted after a collision.
 * It has properties for movement, state (dead or alive), and animations for walking and dying.
 * 
 * @extends MovableObject
 */
class Chicken extends MovableObject { 

    /**
     * The y-coordinate of the chicken object.
     * @type {number}
     */
    y = 350;

    /**
     * Current image index used for animation.
     * @type {number}
     */
    currentImage = 0;

    /**
     * Left offset for the chicken object.
     * @type {number}
     */
    offsetLeft = 10;

    /**
     * Right offset for the chicken object.
     * @type {number}
     */
    offsetRight = 10;

    /**
     * Top offset for the chicken object.
     * @type {number}
     */
    offsetTop = 40;

    /**
     * Bottom offset for the chicken object.
     * @type {number}
     */
    offsetBottom = 1;

    /**
     * Boolean indicating whether the chicken is dead or alive.
     * @type {boolean}
     */
    isDead = false;

    /**
     * Boolean indicating if the chicken can start walking.
     * @type {boolean}
     */
    chickenCanStartWalking = false;

    /**
     * Boolean indicating if the width of the chicken object has been changed to 0.
     * @type {boolean}
     */
    isWidthChangedTo0 = false;

    /**
     * Boolean indicating whether the chicken has already collided with something.
     * @type {boolean}
     */
    alreadyCollided = false;

    /**
     * Array of image paths for the chicken's walking animation.
     * @type {string[]}
     */
    images_walking = [
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    /**
     * Array of image paths for the chicken's dead animation.
     * @type {string[]}
     */
    images_dead = [
        './img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    /**
     * Creates an instance of a Chicken object.
     * 
     * @param {number} x - The x-coordinate of the chicken object.
     */
    constructor(x){
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = x;
        this.speed = 1.5 + 1 * Math.random();
        this.loadimages(this.images_walking);
        this.loadimages(this.images_dead);
        this.animate();
    }

    /**
     * Animates the chicken object by setting intervals for walking and changing images.
     * 
     * @returns {void}
     */
    animate(){
        // Interval for moving the chicken left if it's alive and can start walking.
        setInterval(() => {
            if(!this.isDead && this.chickenCanStartWalking){
                this.moveLeft();
            }
        }, 1000 / 60);

        // Interval for updating the animation (either walking or dead) based on the state.
        setInterval(() => {
            if(this.chickenCanStartWalking){
                if(this.isDead){
                    this.playAnimation(this.images_dead);
                } else {
                    this.playAnimation(this.images_walking);
                }
            }
        }, 200);
    }

    /**
     * Deletes the chicken object after a certain time has passed since the last collision.
     * Changes the width of the chicken to 0 once enough time has passed.
     * 
     * @param {number} lastCollisionDate - The timestamp of the last collision.
     * 
     * @returns {void}
     */
    deleteEnemy(lastCollisionDate){
        setInterval(() => {
            let timePassed = (new Date().getTime() - lastCollisionDate) / 1000;
            if(timePassed > 0.005 && !this.isWidthChangedTo0){
                this.width = 0;
                this.isWidthChangedTo0 = true;
            }
        }, 1000);
    }
}
