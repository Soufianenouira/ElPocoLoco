/**
 * Class representing an Icon that extends DrawableObjects.
 * The Icon class is used to represent a status bar icon, such as a health icon for an Endboss.
 * It includes properties such as size, position, and the image for the icon.
 * 
 * @extends DrawableObjects
 */
class Icon extends DrawableObjects {

    /**
     * The y-coordinate of the icon.
     * @type {number}
     */
    y = -3;

    /**
     * The width of the icon.
     * @type {number}
     */
    width = 50;

    /**
     * The height of the icon.
     * @type {number}
     */
    height = 50;

    /**
     * The collection or group the icon belongs to (undefined at initialization).
     * @type {any}
     */
    collection;

    /**
     * The starting value for the icon, often used for initialization.
     * @type {number}
     */
    startValue = 100;

    /**
     * Creates an instance of an Icon object.
     * It loads the image for the icon, using a specified path for the health icon of the Endboss.
     * 
     * @param {number} x - The x-coordinate of the icon.
     */
    constructor(x){
        super();
        this.x = x;
        this.loadImage(`./img/7_statusbars/3_icons/icon_health_endboss.png`);
    }
}
