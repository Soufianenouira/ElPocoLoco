/**
 * The SalsaBottle class represents a throwable salsa bottle that displays a rotation and splash animation
 * when it collides with an object.
 * 
 * @extends MovableObject
 */
class SalsaBottle extends MovableObject {
    /** @type {number} The height of the bottle */
    height = 100;

    /** @type {number} The width of the bottle */
    width = 100;

    /** @type {number} The speed of the bottle along the X-axis */
    speedX = 15;

    /** @type {number} The speed of the bottle along the Y-axis */
    speedY = 5;

    /** @type {World} The world in which the bottle exists */
    world;

    /** @type {boolean} Indicates whether the bottle has already collided with an object */
    collided = false;

    /** @type {number} The offset on the left side of the bottle */
    offsetLeft = 10;

    /** @type {number} The offset on the right side of the bottle */
    offsetRight = 10;

    /** @type {number} The offset on the top of the bottle */
    offsetTop = 10;

    /** @type {number} The offset on the bottom of the bottle */
    offsetBottom = 10;

    /** @type {number} The direction the bottle is thrown, either 1 or -1 */
    direction = 1;

    /** @type {boolean} Indicates whether the bottle has already caused damage */
    alreadyDamaged = false;

    /** @type {string[]} Array of image URLs for the bottle's rotation animation */
    images_rotation = [
        './img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    /** @type {string[]} Array of image URLs for the bottle's splash animation */
    images_splash = [
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    /**
     * Creates a new instance of SalsaBottle and sets its position and direction.
     * 
     * @param {number} x The starting X position of the bottle
     * @param {number} y The starting Y position of the bottle
     * @param {boolean} direction The direction the bottle is thrown (true = left, false = right)
     */
    constructor(x, y, direction) {
        super().loadImage('./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.speed = 1.5;
        if (direction) {
            this.direction = -1;
        } else {
            this.direction = 1;
        }
        this.x = x + (100 * this.direction);
        this.y = y + 100;
        this.loadimages(this.images_rotation);
        this.loadimages(this.images_splash);
        this.throw();
    }

    /**
     * Applies gravity to the bottle and starts the throw animation.
     * The bottle moves with a specific speed and shows a rotation animation.
     */
    throw() {
        this.applyGravity();
        setInterval(() => {
            if (this.Collided) {
                this.playAnimation(this.images_splash);
            } else {
                this.x += this.speedX * this.direction;
                this.playAnimation(this.images_rotation);
            }
        }, 50);
    }
}
