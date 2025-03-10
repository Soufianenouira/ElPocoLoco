/**
 * Class representing a MovableObject.
 * The MovableObject class is a base class for objects that can move in the game world.
 * It includes properties and methods related to movement, gravity, collision detection, energy, and animation.
 */
class MovableObject extends DrawableObjects {

    /**
     * The x-coordinate of the object.
     * @type {number}
     */
    x = 120;

    /**
     * The y-coordinate of the object.
     * @type {number}
     */
    y = 250;

    /**
     * The height of the object.
     * @type {number}
     */
    height = 100;

    /**
     * The width of the object.
     * @type {number}
     */
    width = 100;

    /**
     * The image of the object.
     * @type {HTMLImageElement}
     */
    img;

    /**
     * Cache for images to avoid reloading.
     * @type {Object<string, HTMLImageElement>}
     */
    imageCache = {};

    /**
     * The speed of movement for the object.
     * @type {number}
     */
    speed = 0.15;

    /**
     * A flag indicating the object's direction.
     * @type {boolean}
     */
    otherDirection = false;

    /**
     * The vertical speed of the object (used for gravity).
     * @type {number}
     */
    speedY = 0;

    /**
     * The acceleration applied to the object (used for gravity).
     * @type {number}
     */
    acceleration = 2.5;

    /**
     * A flag indicating if the object is movable.
     * @type {number}
     */
    ismoveable = 0;

    /**
     * The energy of the object.
     * @type {number}
     */
    energy = 100;

    /**
     * A flag indicating if the object is dead.
     * @type {number}
     */
    dead = 0;

    /**
     * The timestamp of the last time the object was hit.
     * @type {number}
     */
    lastHit = 0;

    /**
     * The index of the current image in the animation.
     * @type {number}
     */
    currentImage = 0;

    /**
     * A flag indicating if the object is colliding from the top.
     * @type {boolean}
     */
    incollidingFromTheTop = false;

    /**
     * The initial y-coordinate where the character starts (used for gravity).
     * @type {number}
     */
    characterStartY = 140;

    /**
     * The damage value of the object.
     * @type {number}
     */
    damage = 10;

    /**
     * Applies gravity to the object, updating its position based on speed and acceleration.
     * The object's position is adjusted, and speedY is decreased due to gravity.
     * The object resets to its starting y-coordinate when it reaches the ground.
     * 
     * @returns {void}
     */
    applyGravity(){
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0){
                this.y -= this.speedY;
                this.speedY -= this.acceleration;  
            } else {
                this.y = this.characterStartY;
                this.wasInTheAir = false;
            }
        }, 1000/25);
    }

    /**
     * Checks if the object is above the ground.
     * 
     * @returns {boolean} True if the object is above the ground, false otherwise.
     */
    isAboveGround(){
        if(this instanceof SalsaBottle && this.y > 70 && !this.collided){
            return true;
        } else {
            return this.y < this.characterStartY;
        }
    }

    /**
     * Moves the object to the right by its speed value.
     * 
     * @returns {void}
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * Moves the object to the left by its speed value.
     * 
     * @returns {void}
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Makes the object jump by setting its vertical speed (speedY).
     * 
     * @returns {void}
     */
    jump(){
        this.speedY = 25;
    }

    /**
     * Reduces the energy of the object when it is hit.
     * If the object’s energy is 0 or less, it is marked as dead.
     * If the object is an Endboss, it will also set its width to 0 when dead.
     * 
     * @returns {void}
     */
    hit(){
        if(this.energy <= 0){
            this.energy = 0;
            if(this instanceof Endboss){
                this.width = 0;
            }
        } else {
            this.energy -= this.damage;
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Checks if the object is currently hurt based on the time elapsed since the last hit.
     * 
     * @returns {boolean} True if the object is hurt (less than 0.5 seconds since the last hit), false otherwise.
     */
    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed /= 1000;
        return timepassed < 0.5;
    }

    /**
     * Checks if the object is dead based on its energy and the time elapsed since the last hit.
     * 
     * @returns {boolean} True if the object is dead (energy is 0 or less), false otherwise.
     */
    isDead(){
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed /= 1000;
        return this.energy <= 0;
    }

    /**
     * Plays the animation by updating the object's image based on the provided images array.
     * The image is updated based on the current animation frame.
     * 
     * @param {string[]} images - The array of image paths to use for the animation.
     * @returns {void}
     */
    playAnimation(images){
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Checks if this object is colliding with another object.
     * 
     * @param {MovableObject} mo - The other object to check for collision.
     * @returns {boolean} True if the objects are colliding, false otherwise.
     */
    isIncolliding(mo){
        let characterX1 = this.x + this.offsetLeft;
        let characterX2 = this.x + this.width - this.offsetRight;
        let characterY1 = this.y + this.offsetTop;
        let characterY2 = this.y + this.height - this.offsetBottom;
        let moX1 = mo.x + mo.offsetLeft;
        let moX2 =  mo.x + mo.width - mo.offsetRight;
        let moY1 = mo.y + mo.offsetTop;
        let moY2 = mo.y + mo.height - mo.offsetBottom - mo.offsetTop;
        return characterX2 > moX1 && 
            characterY2 > moY1 &&
            characterX1 < moX2 && 
            characterY1 < moY2;
    }

    /**
     * Checks if this object is colliding with another object from the top.
     * 
     * @param {MovableObject} mo - The other object to check for collision from the top.
     * @returns {boolean} True if the objects are colliding from the top, false otherwise.
     */
    isIncollidingFromTheTop(mo){
        let characterX1 = this.x + this.offsetLeft;
        let characterX2 = this.x + this.width - this.offsetRight;
        let characterY1 = this.y + this.offsetTop;
        let characterY2 = this.y + this.height - this.offsetBottom;
        let moX1 = mo.x + mo.offsetLeft;
        let moX2 =  mo.x + mo.width - mo.offsetRight;
        let moY1 = mo.y + mo.offsetTop;
        let moY2 = mo.y + mo.height - mo.offsetBottom - mo.offsetTop;
        return characterX2 > moX1 && 
            characterX1 < moX2 && 
            characterY2 > mo.y &&
            characterY1 < moY2;
    }
}
