/**
 * Class representing a Keyboard input handler.
 * The Keyboard class handles touch events for character movement and actions in the game.
 * It listens for touchstart and touchend events on specific buttons and updates corresponding state properties.
 */
class Keyboard {
    
    /**
     * Indicates whether the left arrow key or button is pressed.
     * @type {boolean}
     */
    ArrowLeft = false;

    /**
     * Indicates whether the right arrow key or button is pressed.
     * @type {boolean}
     */
    ArrowRight = false;

    /**
     * Indicates whether the space key or button is pressed.
     * @type {boolean}
     */
    Space = false;

    /**
     * Indicates whether the up arrow key or button is pressed.
     * @type {boolean}
     */
    ArrowUp = false;

    /**
     * Indicates whether the down arrow key or button is pressed.
     * @type {boolean}
     */
    ArrowDown = false;

    /**
     * Indicates whether the 'D' key or button is pressed.
     * @type {boolean}
     */
    D = false;

    /**
     * Indicates whether the 'D' button (for a specific action like throwing) is pressed.
     * @type {boolean}
     */
    DBtn = false;

    /**
     * The world object that contains the character to be controlled.
     * @type {Object}
     */
    world;

    /**
     * Creates an instance of the Keyboard class.
     * Initializes the keyboard input handling by setting up the event listeners.
     */
    constructor(){
        // Intentionally left empty as event listeners are set up in bindKeyPressEvents.
    }

    /**
     * Sets up touch event listeners for the "move-right" button.
     * Updates the character's movement state when the button is pressed or released.
     */
    checkRightButton(){
        document.getElementById('move-right').addEventListener('touchstart', (e) => {
            if (e.cancelable) { e.preventDefault(); }
            this.world.character.right = true;
        });

        document.getElementById('move-right').addEventListener('touchend', (e) => {
            if (e.cancelable) { e.preventDefault(); }
            this.world.character.right = false;
        });
    }

    /**
     * Sets up touch event listeners for the "move-left" button.
     * Updates the character's movement state when the button is pressed or released.
     */
    checkLeftButton(){
        document.getElementById('move-left').addEventListener('touchstart', (e) => {
            if (e.cancelable) { e.preventDefault(); }
            this.world.character.left = true;
        });

        document.getElementById('move-left').addEventListener('touchend', (e) => {
            if (e.cancelable) { e.preventDefault(); }
            this.world.character.left = false;
        });
    }

    /**
     * Sets up touch event listeners for the "jump" button.
     * Updates the ArrowUp state when the button is pressed or released.
     */
    checkUpButton(){
        document.getElementById('jump').addEventListener('touchstart', (e) => {
            if (e.cancelable) { e.preventDefault(); }
            this.ArrowUp = true;
        });

        document.getElementById('jump').addEventListener('touchend', (e) => {
            if (e.cancelable) { e.preventDefault(); }
            this.ArrowUp = false;
        });
    }

    /**
     * Sets up touch event listeners for the "throw" button (action for "D").
     * Updates the DBtn state when the button is released.
     */
    checkDButton(){
        document.getElementById('throw').addEventListener('touchend', (e) => {
            if (e.cancelable) { e.preventDefault(); }
            this.DBtn = true;
        });
    }

    /**
     * Binds all key press events to their respective buttons.
     * This method initializes all touch event listeners for movement and action buttons.
     */
    bindKeyPressEvents(){
        this.checkRightButton();
        this.checkLeftButton();
        this.checkUpButton();
        this.checkDButton();
    }
}
