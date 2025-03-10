/**
 * Class representing a GameOver screen that extends DrawableObjects.
 * The GameOver screen is displayed when the game ends.
 * It includes properties such as size and position, and it loads an image to be displayed.
 * 
 * @extends DrawableObjects
 */
class GameOver extends DrawableObjects {

    /**
     * The x-coordinate of the GameOver screen.
     * @type {number}
     */
    x = 0;

    /**
     * The y-coordinate of the GameOver screen.
     * @type {number}
     */
    y = 0;

    /**
     * The height of the GameOver screen.
     * @type {number}
     */
    height = 480;

    /**
     * The width of the GameOver screen.
     * @type {number}
     */
    width = 0;

    /**
     * Creates an instance of a GameOver screen object.
     * It loads the image that will be displayed for the GameOver screen.
     */
    constructor(){
        super().loadImage('./img/9_intro_outro_screens/game_over/game over.png');
    }
}
