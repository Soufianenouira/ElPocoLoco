/**
 * Class representing a Coin object that extends DrawableObjects.
 * The Coin object is used to represent collectible coins in a game.
 * It has properties such as size and position offsets.
 * 
 * @extends DrawableObjects
 */
class Coin extends DrawableObjects {

    /**
     * The height of the coin object.
     * @type {number}
     */
    height = 150;

    /**
     * The width of the coin object.
     * @type {number}
     */
    width = 150;

    /**
     * The left offset of the coin object.
     * @type {number}
     */
    offsetLeft = 30;

    /**
     * The right offset of the coin object.
     * @type {number}
     */
    offsetRight = 80;

    /**
     * The top offset of the coin object.
     * @type {number}
     */
    offsetTop = 30;

    /**
     * The bottom offset of the coin object.
     * @type {number}
     */
    offsetBottom = 30;

    /**
     * Creates an instance of a Coin object.
     * 
     * @param {number} x - The x-coordinate of the coin object.
     * @param {number} y - The y-coordinate of the coin object.
     */
    constructor(x, y){
        super().loadImage('./img/8_coin/coin_2.png');
        this.x = x;
        this.y = y;
    }
}
