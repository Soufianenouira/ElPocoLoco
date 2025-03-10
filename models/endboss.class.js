/**
 * Class representing an Endboss that extends MovableObject.
 * The Endboss is a boss enemy character with different states such as idle, walking, and hurt.
 * It includes properties such as health, speed, and different animations for each state.
 * 
 * @extends MovableObject
 */
class Endboss extends MovableObject {

    /**
     * The y-coordinate of the Endboss.
     * @type {number}
     */
    y = 50;

    /**
     * The height of the Endboss.
     * @type {number}
     */
    height = 400;

    /**
     * The width of the Endboss.
     * @type {number}
     */
    width = 300;

    /**
     * The left offset of the Endboss.
     * @type {number}
     */
    offsetLeft = 50;

    /**
     * The right offset of the Endboss.
     * @type {number}
     */
    offsetRight = 0;

    /**
     * The top offset of the Endboss.
     * @type {number}
     */
    offsetTop = 130;

    /**
     * The bottom offset of the Endboss.
     * @type {number}
     */
    offsetBottom = 0;

    /**
     * The index of the current image being displayed for the Endboss.
     * @type {number}
     */
    currentImage = 0;

    /**
     * The energy (health points) of the Endboss.
     * @type {number}
     */
    energy = 30;

    /**
     * The movement speed of the Endboss.
     * @type {number}
     */
    speed = 2;

    /**
     * Array of image paths for the Endboss's idle animation.
     * @type {string[]}
     */
    images_idle = [
        './img/4_enemie_boss_chicken/2_alert/G5.png',
        './img/4_enemie_boss_chicken/2_alert/G6.png',
        './img/4_enemie_boss_chicken/2_alert/G7.png',
        './img/4_enemie_boss_chicken/2_alert/G8.png',
        './img/4_enemie_boss_chicken/2_alert/G9.png',
        './img/4_enemie_boss_chicken/2_alert/G10.png',
        './img/4_enemie_boss_chicken/2_alert/G11.png',
        './img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    /**
     * Array of image paths for the Endboss's walking animation.
     * @type {string[]}
     */
    images_walking = [
        './img/4_enemie_boss_chicken/1_walk/G1.png',
        './img/4_enemie_boss_chicken/1_walk/G2.png',
        './img/4_enemie_boss_chicken/1_walk/G3.png',
        './img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    /**
     * Array of image paths for the Endboss's hurt animation.
     * @type {string[]}
     */
    images_hurt = [
        './img/4_enemie_boss_chicken/4_hurt/G21.png',
        './img/4_enemie_boss_chicken/4_hurt/G22.png',
        './img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];

    /**
     * Creates an instance of an Endboss object.
     * 
     * @param {number} x - The x-coordinate of the Endboss object.
     */
    constructor(x){
        super().loadImage('./img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadimages(this.images_idle);
        this.loadimages(this.images_hurt);
        this.x = x;
        this.animate();
    }

    /**
     * Animates the Endboss by switching between the idle and hurt animations based on its state.
     * It checks if the Endboss is hurt, and if so, plays the hurt animation, otherwise plays the idle animation.
     * 
     * @returns {void}
     */
    animate(){
        setInterval(() => {
            if (this.isHurt()) {
                this.playAnimation(this.images_hurt);            
            } else {
                this.playAnimation(this.images_idle);
            }
        }, 200);
    }

}
