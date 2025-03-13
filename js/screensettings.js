/**
 * Detects the device type based on the user agent.
 * @returns {string} Returns "Mobile" if the device is a mobile device, otherwise returns "Desktop".
 */
function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad|ipod|windows phone/i.test(userAgent)) {
        document.getElementById('bottom-bar').style.display = 'flex';
        document.getElementById('min-max-btn').style.display = 'none';
        return "Mobile";
    } else {
        return "Desktop";
    }
}

/**
 * Updates the width and height of the menu and canvas to fixed dimensions (720px by 480px).
 */
function widthUpdateCase1() {
    document.getElementById("menu-overlayer").style.width = '720px';
    document.getElementById('menu-overlayer').style.height = '480px';
    document.getElementById("canvas").style.width = '720px';
    document.getElementById('canvas').style.height = '480px';
}

/**
 * Updates the width and height of the menu and canvas to fit the full width of the viewport while keeping the height fixed (480px).
 */
function widthUpdateCase2() {
    document.getElementById("menu-overlayer").style.width = '100vw';
    document.getElementById('menu-overlayer').style.height = '480px';
    document.getElementById("canvas").style.width = '100vw';
    document.getElementById('canvas').style.height = '480px';
}

/**
 * Updates the width and height of the menu and canvas to fixed dimensions (720px by full height of the viewport).
 */
function widthUpdateCase3() {
    document.getElementById("menu-overlayer").style.width = '720px';
    document.getElementById('menu-overlayer').style.height = '100vh';
    document.getElementById("canvas").style.width = '720px';
    document.getElementById('canvas').style.height = '100vh';
}

/**
 * Updates the width and height of the menu and canvas to fit the full width and height of the viewport.
 */
function widthUpdateCase4() {
    document.getElementById("menu-overlayer").style.width = '100vw';
    document.getElementById('menu-overlayer').style.height = '100vh';
    document.getElementById("canvas").style.width = '100vw';
    document.getElementById('canvas').style.height = '100vh';
}

/**
 * Determines the appropriate screen size adjustment based on the window's inner width and height.
 * Calls specific update functions depending on the dimensions of the window.
 */
function widthUpdate() {
    if(screenSize == 'min'){
        if (window.innerWidth >= 720 && window.innerHeight >= 480) {
            widthUpdateCase1();
        } else if (window.innerWidth <= 720 && window.innerHeight >= 480) {
            widthUpdateCase2();
        } else if (window.innerWidth >= 720 && window.innerHeight <= 480) {
            widthUpdateCase3();
        } else if (window.innerWidth <= 720 && window.innerHeight <= 480) {
            widthUpdateCase4();
        }
    }
    if(window.matchMedia("(orientation: portrait)").matches){
        document.getElementById('rotate-your-device').style.display = 'flex';
        if(world){pause();}
    }else{
        document.getElementById('rotate-your-device').style.display = 'none';
    }
}

/**
 * Enters fullscreen mode for the given element and adjusts the canvas and menu size to cover the entire screen.
 * @param {HTMLElement} elem - The element to display in fullscreen.
 */
function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    document.getElementById("menu-overlayer").style.width = '100%';
    document.getElementById('menu-overlayer').style.height = '100%';
    document.getElementById("canvas").style.width = '100vw';
    document.getElementById('canvas').style.height = '100vh';
    screenSize = 'max';
    document.getElementById('min-max-btn').src = './img/min.png'
}

/**
 * Exits fullscreen mode and resets the canvas and menu size.
 * @param {HTMLElement} elem - The element to exit fullscreen.
 */
function closeFullscreen(elem) {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    screenSize = 'min';
    document.getElementById('min-max-btn').src = './img/max.png'
    widthUpdate();
}

/**
 * Toggles fullscreen mode based on the current screen size state.
 * If the screen is currently in "min" size, it will open fullscreen, otherwise it will close fullscreen.
 */
function updateFullscreen() {
    let elem = document.getElementById("content");
    if (screenSize == 'min') {
        openFullscreen(elem);
    } else if (screenSize == 'max') {
        closeFullscreen(elem);
    }
}
