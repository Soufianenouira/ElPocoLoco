/** @type {HTMLCanvasElement} */
let canvas;
/** @type {World} */
let world;
/** @type {Keyboard} */
let keyboard = new Keyboard();
/** @type {string} */
let screenSize = 'min';
/** @type {boolean} */
let audiosMuted = false;
/** @type {number} */
let coinsCounterStartValue = 0;

/**
 * Initializes the game by setting up the canvas and checking device type.
 */
function init() {
    canvas = document.getElementById('canvas');
    widthUpdate();
    detectDevice();
}

/**
 * Listens for keydown events to update keyboard state.
 * @param {KeyboardEvent} e - The keydown event.
 */
window.addEventListener("keydown", (e) => {
    keyboard[e.code] = true;
});

/**
 * Listens for keyup events to update keyboard state and handle specific keys.
 * @param {KeyboardEvent} e - The keyup event.
 */
window.addEventListener("keyup", (e) => {
    keyboard[e.code] = false;
    if (e.code == 'KeyD') {
        keyboard.D = true;
    }
});

/**
 * Starts the game by initializing world, audio, and setting up the UI.
 */
function startGame() {
    document.getElementById('continue-show-btn').style.display = 'flex';
    document.getElementById('new-game-btn').style.display = 'none';
    document.getElementById('impressum-link').style.display = 'none';
    canvas.style.display = 'block';
    document.getElementById('menu-overlayer').style.display = 'flex';
    document.getElementById('start-img').style.display = 'none';
    document.getElementById('h1').style.display = 'none';
    world = new World(canvas, keyboard);
    world.keyboard.bindKeyPressEvents();
    world.audios[0].play();
    world.audios[0].loop = true;
    enableChickensMoveParameter();
    audiosMuted = Number(localStorage.getItem("audiosMuted"));
    muteAll();
    if(detectDevice() == 'Mobile'){
        updateFullscreen();
    }
}

/**
 * Enables the movement of chickens within the game world.
 */
function enableChickensMoveParameter() {
    world.level.enemies.forEach((enemy) => {
        if (enemy instanceof Chicken) {
            enemy.chickenCanStartWalking = true;
        }
    });
}

/**
 * Disables the movement of chickens within the game world.
 */
function disableChickensMoveParameter() {
    world.level.enemies.forEach((enemy) => {
        if (enemy instanceof Chicken) {
            enemy.chickenCanStartWalking = false;
        }
    });
}

/**
 * Resets the character's position, energy, and coin count to their starting values.
 */
function resetCharacter() {
    world.character.x = 120;
    world.character.width = 100;
    world.character.energy = 100;
    world.character.offsetTop = 120;
    world.character.offsetRight = 40;
    world.character.deadAnimated = false;
    world.character.coins = coinsCounterStartValue;
}

/**
 * Resets the status bars (health, coins, bottles) to their initial values.
 */
function resetStatusBars() {
    world.staturbar_healt.loadNewImage(100);
    world.staturbar_coins.loadNewImage(coinsCounterStartValue);
    world.staturbar_botlle.loadNewImage(100);
    world.staturbar_healt.x = world.character.x - 100;
    world.staturbar_coins.x = world.character.x - 100;
    world.staturbar_botlle.x = world.character.x - 100;
    world.coinsCounter = `${world.character.coins}$`;
    world.characterenergy = `${world.character.energy}%`;
    world.bottlesCount = `${world.level.bottlesCount / 10}x`;
}

/**
 * Resets the state of all coins in the world.
 */
function resetCoins() {
    world.level.coins.forEach((coin) => {
        coin.width = 150;
    });
}

/**
 * Resets the position and state of chickens in the world.
 * @param {number} chickensStartPosition - The starting position for chickens.
 * @param {Enemy} enemy - The enemy to be reset.
 */
function resetChickens(chickensStartPosition, enemy) {
    enemy.width = 100;
    enemy.x = chickensStartPosition;
    enemy.chickenCanStartWalking = true;
    enemy.alreadyCollided = false;
    enemy.isDead = false;
    enemy.offsetRight = 10;
    enemy.offsetTop = 40;
    enemy.y = 350;
}

/**
 * Resets the state of the end boss.
 * @param {Enemy} enemy - The end boss to be reset.
 */
function resetEndBoss(enemy) {
    enemy.width = 300;
    enemy.energy = 30;
    enemy.collidedwithCharacter = false;
    world.endBossEnergy = '3x';
}

/**
 * Displays control buttons based on the device type.
 */
function showControlButtons() {
    document.getElementById('upper-bar').style.display = 'flex';
    document.getElementById('menu').style.justifyContent = 'space-between';
    document.getElementById('game-restart-container').style.display = 'none';
}

/**
 * Hides the game over image.
 */
function hideGameOverImg() {
    world.gameOver.x = -1000;
    world.isGameOver = 0;
}

/**
 * Resets all enemies to their starting positions and states.
 * @param {number} chickensStartPosition - The starting position for chickens.
 */
function resetEnemies(chickensStartPosition) {
    world.level.enemies.forEach((enemy) => {
        if (enemy instanceof Chicken) {
            resetChickens(chickensStartPosition, enemy);
            chickensStartPosition += 400;
        } else {
            resetEndBoss(enemy);
        }
    });
}

/**
 * Prepares the character for level 2.
 */
function prepareCharacterforLevel2() {
    world.character.x = 120;
    world.character.y = 100;
    world.character.width = 100;
    world.character.energy = 100;
    world.character.offsetTop = 120;
    world.character.offsetRight = 40;
    world.character.characterStartY = 100;
    world.character.coins = coinsCounterStartValue;
}

/**
 * Adjusts the Y position of chickens in level 2.
 * @param {number} newY - The new Y position for chickens.
 */
function adaptChickensY(newY) {
    level2.enemies.forEach((enemy) => {
        if (enemy instanceof Chicken) {
            enemy.y = newY;
        }
    });
}

/**
 * Resets status bars to get ready for the next level.
 */
function statusbarsGetreadyForNextLevel() {
    world.staturbar_healt.loadNewImage(100);
    world.staturbar_botlle.loadNewImage(100);
    world.staturbar_healt.x = world.character.x - 100;
    world.staturbar_coins.x = world.character.x - 100;
    world.staturbar_botlle.x = world.character.x - 100;
    world.characterenergy = `${world.character.energy}%`;
    world.bottlesCount = `${world.level.bottlesCount / 10}x`;
}

/**
 * Resets the number of bottles in the world.
 */
function resetBottles() {
    world.level.bottlesCount = 100;
}

/**
 * Resets the game state to allow for a retry.
 */
function retry() {
    let chickensStartPosition = 2000;
    resetCharacter();
    resetCoins();
    resetBottles();
    resetStatusBars();
    hideGameOverImg();
    resetEnemies(chickensStartPosition);
    enableChickensMoveParameter();
    world.audios[0].play();
    showControlButtons();
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('Congratulations').style.display = 'none';
    document.getElementById('continue-btn').style.display = 'flex';
    if(world.level == level2){
        adaptChickensY(280);
    }
    if(detectDevice() == 'Mobile'){
        document.getElementById('bottom-bar').style.display = 'flex';
    }
}

/**
 * Advances to the next level.
 */
function nextLevel() {
    let chickensStartPosition = 2000;
    world.level = level2;
    world.audios[0].play();
    world.character.damage = 20;
    coinsCounterStartValue = world.character.coins;
    resetCoins();
    hideGameOverImg();
    prepareCharacterforLevel2();
    enableChickensMoveParameter();
    statusbarsGetreadyForNextLevel();
    showControlButtons();
    resetEnemies(chickensStartPosition);
    adaptChickensY(280);
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('continue-btn').style.display = 'flex';
    world.character.gameOverAnimated = false;
    if(detectDevice() == 'Mobile'){
        document.getElementById('bottom-bar').style.display = 'flex';
    }
}

/**
 * Mutes all game sounds.
 */
function soundOff() {
    world.audios.forEach((audio) => {
        audio.muted = true;
    });
}

/**
 * Unmutes all game sounds.
 */
function soundOn() {
    world.audios.forEach((audio) => {
        audio.muted = false;
    });
}

/**
 * Toggles the sound on and off.
 */
function muteAll() {
    if (!audiosMuted) {
        soundOff();
        audiosMuted = true;
        localStorage.setItem("audiosMuted", 0);
        document.getElementById('sound-on-off-img').src = "./img/soundOff.png";
    } else {
        soundOn();
        audiosMuted = false;
        localStorage.setItem("audiosMuted", 1);
        document.getElementById('sound-on-off-img').src = "./img/soundOn.png";
    }
}

/**
 * Pauses the game, disables chicken movement, and updates UI.
 */
function pause() {
    disableChickensMoveParameter();
    world.audios[0].pause();
    document.getElementById('bottom-bar').style.display = 'none';
    document.getElementById('upper-bar').style.display = 'none';
    document.getElementById('menu').style.justifyContent = 'center';
    document.getElementById('game-restart-container').style.display = 'flex';
}

/**
 * Resumes the game and enables chicken movement.
 */
function gameContinue() {
    enableChickensMoveParameter();
    world.audios[0].play();
    showControlButtons();
    if(detectDevice() == 'Mobile'){
        document.getElementById('bottom-bar').style.display = 'flex';
    }
}

/**
 * Exits the game, hides canvas and menu, and restores starting screen.
 */
function exit() {
    let elem = document.getElementById("content");
    let menu = document.getElementById('menu-overlayer');
    let startImg = document.getElementById('start-img');
    let h1 = document.getElementById('h1');
    document.getElementById('impressum-link').style.display = 'flex';
    canvas.style.display = 'none';
    menu.style.display = 'none';
    startImg.style.display = 'flex';
    h1.style.display = 'flex';
    if (screenSize == 'max') {
        closeFullscreen(elem);
    }
}

/**
 * Displays the game UI and menu after starting.
 */
function show() {
    let menu = document.getElementById('menu-overlayer');
    let startImg = document.getElementById('start-img');
    let h1 = document.getElementById('h1');
    canvas.style.display = 'block';
    menu.style.display = 'flex';
    startImg.style.display = 'none';
    h1.style.display = 'none';
    document.getElementById('impressum-link').style.display = 'none';
    if(detectDevice() == 'Mobile'){
        updateFullscreen();
        document.getElementById('bottom-bar').style.display = 'flex';
    }
}

/**
 * Opens the 'How to Play' instructions overlay.
 */
function openHowToPlay() {
    document.getElementById('how-to-play-overlayer').style.display = 'flex';
}

/**
 * Closes the 'How to Play' instructions overlay.
 */
function closeHowToPlay() {
    document.getElementById('how-to-play-overlayer').style.display = 'none';
}
