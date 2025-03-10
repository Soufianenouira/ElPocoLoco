/**
 * Class representing a Cloud object that extends MovableObject.
 * The Cloud object represents a background cloud that moves left in a game or animation.
 * It has properties for the cloud's position and size, and an animation method to move it.
 * 
 * @extends MovableObject
 */
class Cloud extends MovableObject {

    /**
     * The y-coordinate of the cloud object.
     * @type {number}
     */
    y = 50;

    /**
     * The width of the cloud object.
     * @type {number}
     */
    width = 500;

    /**
     * The height of the cloud object.
     * @type {number}
     */
    height = 250;

    /**
     * Creates an instance of a Cloud object.
     * 
     * @param {number} x - The x-coordinate of the cloud object.
     */
    constructor(x){
        super().loadImage('./img/5_background/layers/4_clouds/1.png');
        this.x = x;
        this.animate();
    }

    /**
     * Animates the cloud object by making it move left continuously.
     * 
     * @returns {void}
     */
    animate(){
        // Interval for moving the cloud left at 60 FPS.
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}
