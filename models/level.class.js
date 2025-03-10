/**
 * Class representing a Level in the game.
 * The Level class manages the different elements that make up the level, such as clouds, enemies, background objects, coins, and the endboss.
 * It also defines the level's end position and other properties like the bottle count.
 */
class Level {

    /**
     * Array of cloud objects in the level.
     * @type {Cloud[]}
     */
    clouds;

    /**
     * Array of enemy objects in the level.
     * @type {Enemy[]}
     */
    enemies;

    /**
     * Array of background objects in the level.
     * @type {DrawableObjects[]}
     */
    backgroundObjects;

    /**
     * Array of coin objects in the level.
     * @type {Coin[]}
     */
    coins;

    /**
     * The Endboss object for the level.
     * @type {Endboss}
     */
    endboss;

    /**
     * The x-coordinate at which the level ends.
     * @type {number}
     */
    level_end_x = 4000;

    /**
     * The number of bottles collected in the level.
     * @type {number}
     */
    bottlesCount = 0;

    /**
     * Creates an instance of the Level object.
     * Initializes the level with the given parameters like bottle count, end position, enemies, coins, clouds, and background objects.
     * 
     * @param {number} bottlesCount - The number of bottles collected in the level.
     * @param {number} level_end_x - The x-coordinate at which the level ends.
     * @param {Enemy[]} enemies - The array of enemies present in the level.
     * @param {Coin[]} coins - The array of coins present in the level.
     * @param {Cloud[]} clouds - The array of cloud objects present in the level.
     * @param {DrawableObjects[]} backgroundObjects - The array of background objects in the level.
     */
    constructor(bottlesCount, level_end_x, enemies, coins, clouds, backgroundObjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottlesCount = bottlesCount;
        this.level_end_x = level_end_x;
    }

    /**
     * Adds a new chicken enemy to the level at a specified interval.
     * The chicken is added to the enemies array every 5 seconds.
     * 
     * @returns {void}
     */
    addChicken(){
        setInterval(() => {
            let chickenEnd = new Chicken(4500);
            this.enemies.push(chickenEnd);
        }, 5000);
    }
}
