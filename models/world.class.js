/**
 * World class representing the game world, character, and various in-game objects.
 * Handles collisions, status updates, and game logic such as throwing bottles, character health, and enemies.
 */
class World {
    /** @type {Character} The main character in the game. */
    character = new Character();
    
    /** @type {Statusbar} The health status bar of the character. */
    staturbar_healt = new Statusbar('health', 100, 20, -10);
    
    /** @type {Statusbar} The coin status bar showing the amount of coins collected. */
    staturbar_coins = new Statusbar('coin', 0, 20, 30);
    
    /** @type {Statusbar} The bottle status bar showing the remaining bottles. */
    staturbar_botlle = new Statusbar('bottle', 100, 20, 70);
    
    /** @type {Statusbar} The status bar showing the health of the end boss. */
    staturbar_endBoss_healt = new Statusbar('endBoss', 100, this.character.x + 330, -10);
    
    /** @type {Icon} The icon representing the end boss on the screen. */
    endBossIcon = new Icon(this.character.x + 330);
    
    /** @type {string} The energy status of the end boss. */
    endBossEnergy = '3X';
    
    /** @type {string} The energy percentage of the character. */
    characterenergy = '100%';
    
    /** @type {string} The counter for the amount of coins collected by the character. */
    coinsCounter = '0$';
    
    /** @type {string} The count of remaining bottles the character has. */
    bottlesCount = '10x';
    
    /** @type {level} The current level of the game. */
    level = level1;
    
    /** @type {CanvasRenderingContext2D} The 2D rendering context for the canvas. */
    ctx;
    
    /** @type {HTMLCanvasElement} The HTML canvas element. */
    canvas;
    
    /** @type {Keyboard} The keyboard input for the game. */
    keyboard;
    
    /** @type {GameOver} The game over screen. */
    gameOver = new GameOver();
    
    /** @type {number} The status of the game over (0 = not over, 1 = game over). */
    isGameOver = 0;
    
    /** @type {number} The camera's horizontal position. */
    camera_x = 0;
    
    /** @type {Array} The array of throwable objects (bottles). */
    throwableObject = [];
    
    /** @type {number} The last time a collision occurred. */
    lastCollisionDate;
    
    /** @type {boolean} Indicates if the world has been deleted. */
    deleted = false;
    
    /** @type {boolean} Indicates if a bottle has collided with an enemy. */
    bottleCollided = false;
    
    /** @type {Array} The array of audio objects for game sounds. */
    audios = [
        new Audio('audio/background-music1.mp3'),
        new Audio('audio/coins.mp3'),
        new Audio('audio/characterHurt.mp3'),
        new Audio('audio/chickendead.mp3'),
        new Audio('audio/gameOverLost.mp3'),
        new Audio('audio/winGame.mp3'),
        new Audio('audio/grill.mp3')
    ];

    /**
     * Creates a new world instance, initializing the canvas, keyboard, and game elements.
     * @param {HTMLCanvasElement} canvas - The HTML canvas element used for rendering the game world.
     * @param {Keyboard} keyboard - The keyboard input object.
     */
    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
    }

    /**
     * Initializes the world by assigning the world instance to the character and keyboard.
     */
    setWorld(){
        this.character.world = this;
        this.keyboard.world = this;
    }

    /**
     * Starts the main game loop to check for object throws and collisions.
     */
    run(){
        setInterval(()=>{
            this.checkThrowObjects();
            this.checkCollisions();
        }, 50);
    }

    /**
     * Checks if the player has pressed the throw bottle button and if there are bottles left to throw.
     * Creates a new bottle object and updates the status bar for bottles.
     */
    checkThrowObjects(){
        if((this.keyboard.DBtn || this.keyboard.D) && this.level.bottlesCount && !this.character.isDead()){
            let bottle = new SalsaBottle(this.character.x, this.character.y, this.character.otherDirection);
            this.throwableObject.push(bottle);
            this.keyboard.D = false;
            this.keyboard.DBtn = false;
            this.level.bottlesCount -= 10;
            this.bottlesCount = `${this.level.bottlesCount/10}x`;
            this.updateBottleStatusbar();
        }
    }

    /**
     * Updates the bottle status bar depending on the number of bottles remaining.
     */
    updateBottleStatusbar(){
        if(this.level.bottlesCount <= 0){
            this.staturbar_botlle.loadNewImage(0);
        }else if(this.level.bottlesCount <= 20){
            this.staturbar_botlle.loadNewImage(20);
        }else if(this.level.bottlesCount <= 40){
            this.staturbar_botlle.loadNewImage(40);
        }else if(this.level.bottlesCount <= 60){
            this.staturbar_botlle.loadNewImage(60);
        }else if(this.level.bottlesCount <= 80){
            this.staturbar_botlle.loadNewImage(80);
        }else if(this.level.bottlesCount <= 100){
            this.staturbar_botlle.loadNewImage(100);
        }
    }

    /**
     * Handles a collision between the character and a chicken enemy from the front.
     * @param {Chicken} enemy - The enemy (chicken) that the character collides with.
     */
    collisionsCharacterChickenFront(enemy){
        if(!enemy.alreadyCollided){
            this.character.hit();
            this.characterenergy = `${this.character.energy}%`;
            enemy.alreadyCollided = true;
        }
        if(!(this.character.energy % 20)){
            this.staturbar_healt.loadNewImage(this.character.energy);
        }
    }

    /**
     * Handles a collision between the character and a chicken enemy from the top.
     * @param {Chicken} enemy - The enemy (chicken) that the character collides with from the top.
     * @param {number} indexEnemy - The index of the enemy in the level's enemy array.
     */
    collisionsCharacterChickenFromTheTop(enemy, indexEnemy){
        this.level.enemies[indexEnemy].isDead = true;
        this.audios[3].play();
        this.level.enemies[indexEnemy].offsetRight = 100;
        this.level.enemies[indexEnemy].offsetTop = 100;
        this.lastCollisionDate = new Date().getTime();
        enemy.isWidthChangedTo0 = false;
        enemy.deleteEnemy(this.lastCollisionDate);
    }

    /**
     * Checks for collisions between the character and chicken enemies, both from the front and top.
     */
    checkCollisionsCharacterChicken(){
        this.level.enemies.forEach((enemy, indexEnemy)=>{
            if(this.character.isIncolliding(enemy) && enemy instanceof Chicken){
                this.collisionsCharacterChickenFront(enemy);
            }else if(this.character.y < this.character.characterStartY - 100 || this.character.wasInTheAir){
                this.character.wasInTheAir = true;
                if (this.character.isIncollidingFromTheTop(enemy) && enemy instanceof Chicken && !enemy.isDead){
                    this.collisionsCharacterChickenFromTheTop(enemy, indexEnemy);
                }
            }
        });
    }

    /**
     * Checks for collisions between the character and the end boss.
     */
    checkCollisionsCharacterEndBoss(){
        this.level.enemies.forEach((enemy, indexEnemy)=>{
            if(this.character.isIncolliding(enemy) && enemy instanceof Endboss){
                this.character.energy = 0;
                this.characterenergy = '0%';
                enemy.collidedwithCharacter = true;
            }
        });
    }

    /**
     * Checks for collisions between the character and coins. If a coin is collected, the coin disappears and the coin counter is updated.
     */
    checkCollisionsCharacterCoins(){
        this.level.coins.forEach((coin, index)=>{
            if(this.character.isIncolliding(coin)){
                this.level.coins[index].width = 0;
                this.audios[1].play();
                this.character.coins += 1;
                this.coinsCounter = `${this.character.coins}$`;
                if(!(this.character.coins % 20) && this.character.coins <= 100){
                    this.staturbar_coins.loadNewImage(this.character.coins);
                }
            }
        });
    }

    /**
     * Handles a collision between a chicken and a bottle thrown by the character.
     * @param {Chicken} enemy - The enemy (chicken) that the bottle collides with.
     * @param {number} indexEnemy - The index of the chicken enemy in the level's enemies array.
     */
    collisionChickenBottles(enemy, indexEnemy){
        this.level.enemies[indexEnemy].isDead = true;
        this.level.enemies[indexEnemy].offsetRight = 100;
        this.level.enemies[indexEnemy].offsetTop = 100;
        this.lastCollisionDate = new Date().getTime();
        enemy.isWidthChangedTo0 = false;
        enemy.deleteEnemy(this.lastCollisionDate);
    }

    /**
     * Handles a collision between a bottle and the end boss.
     * @param {Endboss} enemy - The end boss that the bottle collides with.
     * @param {number} indexBottle - The index of the bottle in the throwableObject array.
     */
    collisionEndBossBottles(enemy, indexBottle){
        if(!this.throwableObject[indexBottle].alreadyDamaged){
            enemy.hit();
            this.throwableObject[indexBottle].alreadyDamaged = true;
        }
        this.endBossEnergy = `X${enemy.energy/10}`;
        if(enemy.energy <= 0){
            this.isGameOver = 1;
            enemy.width = 0;
        }else if(enemy.isHurt()){
            this.audios[6].play();
        }
    }

    /**
     * Checks for collisions between enemies and throwable bottles.
     */
    checkCollisionsEnemiesBottles(){
        this.level.enemies.forEach((enemy, indexEnemy)=>{
            this.throwableObject.forEach((bottle,indexBottle)=>{
                if(enemy.isIncolliding(bottle) && enemy instanceof Chicken && !enemy.isDead){
                    this.collisionChickenBottles(enemy, indexEnemy);
                }else if (enemy.isIncolliding(bottle)){
                    this.collisionEndBossBottles(enemy, indexBottle);
                }
            });
        });
    }

    /**
     * Checks for all types of collisions in the game.
     */
    checkCollisions(){
        this.checkCollisionsCharacterChicken();
        this.checkCollisionsCharacterEndBoss();
        this.checkCollisionsCharacterCoins();
        this.checkCollisionsEnemiesBottles();
    }

    /**
     * Adds the status bars (health, coins, bottles) to the canvas.
     */
    addstaturbars(){
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = 'purple';
        this.addToMap(this.staturbar_healt);
        this.addToMap(this.staturbar_coins);
        this.addToMap(this.staturbar_botlle);
        this.ctx.fillText(this.characterenergy, this.staturbar_healt.x + 100, this.staturbar_healt.y + 39);
        this.ctx.fillText(this.coinsCounter, this.staturbar_coins.x + 100, this.staturbar_coins.y + 39);
        this.ctx.fillText(this.bottlesCount, this.staturbar_botlle.x + 100, this.staturbar_botlle.y + 39);
        if(this.character.x > 7000){
            this.ctx.font = "28px Arial";
            this.ctx.fillStyle = 'white';
            this.addToMap(this.endBossIcon);
            this.ctx.fillText(this.endBossEnergy,this.endBossIcon.x - 42, this.endBossIcon.y + 33);
        }
    }

    /**
     * Draws all elements of the game (background, clouds, objects, character, enemies) to the canvas.
     */
    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.clouds);
        this.addstaturbars();
        this.addObjectToMap(this.level.coins);
        this.addToMap(this.character);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.throwableObject);
        this.addToMap(this.gameOver);
        this.ctx.translate(-this.camera_x, 0);
        this.repeatDraw();
    }

    /**
     * Repeats the drawing process by calling `draw()` in the next animation frame.
     */
    repeatDraw(){
        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    }

    /**
     * Adds an array of objects to the canvas.
     * @param {Array} objects - The array of objects to be drawn.
     */
    addObjectToMap(objects){
        for (let index = 0; index < objects.length; index++) {
            let element = objects[index];
            this.addToMap(element);
        }
    }

    /**
     * Draws an individual element to the canvas.
     * @param {Object} element - The element to be drawn.
     */
    addToMap(element){
        if(element.otherDirection){
            this.flipImage(element);
        }
        element.draw(this.ctx);
        if(element.moveable){
            element.drawFrame(this.ctx);
        }
        if(element.otherDirection){
            this.flipImageBack(element);
        }
    }

    /**
     * Flips an image horizontally for an element that is facing the opposite direction.
     * @param {Object} element - The element to be flipped.
     */
    flipImage(element) {
        this.ctx.save();
        this.ctx.translate(element.width, 0);
        this.ctx.scale(-1, 1);
        element.x = element.x * -1;
    }

    /**
     * Reverses the horizontal flip of an element.
     * @param {Object} element - The element to reverse the flip for.
     */
    flipImageBack(element) {
        this.ctx.restore();
        element.x = element.x * -1;
    }
}
