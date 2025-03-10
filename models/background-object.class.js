/**
 * Class representing a background object that extends from MovableObject.
 * This object is typically used for background elements in a game or animation.
 * It includes properties such as width, height, and the position on the x and y axes.
 * The object can load an image and adjust its y-position based on the provided height.
 * 
 * @extends MovableObject
 */
class BackgroundObject extends MovableObject {

    /**
     * The width of the background object.
     * @type {number}
     */
    width = 720;

    /**
     * The height of the background object.
     * @type {number}
     */
    height = 480;

    /**
     * Creates an instance of a BackgroundObject.
     * 
     * @param {string} imagePath - The path to the image file to be loaded.
     * @param {number} x - The x-coordinate of the background object.
     * @param {number} y - The y-coordinate of the background object (positioned at the bottom of the screen).
     */
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}
