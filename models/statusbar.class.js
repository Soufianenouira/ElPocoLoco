/**
 * Class representing a Statusbar.
 * The Statusbar class is used to display various status bars in the game,
 * such as health, coins, and bottles. It can also load new images when
 * the status changes.
 */
class Statusbar extends DrawableObjects {

    /**
     * The x-coordinate of the status bar.
     * @type {number}
     */
    x = 20;

    /**
     * The y-coordinate of the status bar.
     * @type {number}
     */
    y = -10;

    /**
     * The width of the status bar.
     * @type {number}
     */
    width = 230;

    /**
     * The height of the status bar.
     * @type {number}
     */
    height = 50;

    /**
     * The collection (type) of the status bar (coin, health, or bottle).
     * @type {string}
     */
    collection;

    /**
     * The initial value of the status bar.
     * @type {number}
     */
    startValue = 100;

    /**
     * Creates an instance of the Statusbar.
     * 
     * @param {string} typ - The type of the status bar ('coin', 'health', 'bottle', or other).
     * @param {number} startValue - The initial value of the status bar.
     * @param {number} x - The x-coordinate of the status bar.
     * @param {number} y - The y-coordinate of the status bar.
     */
    constructor(typ, startValue, x, y){
        super();
        this.x = x;
        this.y = y;
        this.startValue = startValue;

        if(typ == 'coin'){
            this.collection = '1_statusbar_coin';
            this.loadImage(`./img/7_statusbars/1_statusbar/${this.collection}/blue/${this.startValue}.png`);
        } else if(typ == 'health'){
            this.collection = '2_statusbar_health';
            this.loadImage(`./img/7_statusbars/1_statusbar/${this.collection}/blue/${this.startValue}.png`);
        } else if(typ == 'bottle'){
            this.collection = '3_statusbar_bottle';
            this.loadImage(`./img/7_statusbars/1_statusbar/${this.collection}/blue/${this.startValue}.png`);
        } else {
            this.loadImage('./img/7_statusbars/2_statusbar_endboss/green.png');
        }
    }

    /**
     * Loads a new image for the status bar when the energy or value changes.
     * The image will be updated every 20 units of energy.
     * 
     * @param {number} energy - The current energy value of the status bar.
     * @returns {void}
     */
    loadNewImage(energy){
        if(!(energy % 20)){
            this.loadImage(`./img/7_statusbars/1_statusbar/${this.collection}/blue/${energy}.png`);
        }
    }
}
