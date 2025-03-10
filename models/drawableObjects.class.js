/**
 * Class representing a DrawableObject.
 * This class is responsible for handling objects that can be drawn on a canvas,
 * including loading images, drawing images, and displaying the object's frame.
 * It also includes properties for the position, size, and offsets of the object.
 */
class DrawableObjects {
    
    /**
     * The x-coordinate of the object.
     * @type {number}
     */
    x;

    /**
     * The y-coordinate of the object.
     * @type {number}
     */
    y;

    /**
     * The height of the object.
     * @type {number}
     */
    height;

    /**
     * The width of the object.
     * @type {number}
     */
    width;

    /**
     * The image associated with the object.
     * @type {HTMLImageElement}
     */
    img;

    /**
     * The left offset of the object.
     * @type {number}
     */
    offsetLeft = 0;

    /**
     * The right offset of the object.
     * @type {number}
     */
    offsetRight = 0;

    /**
     * The top offset of the object.
     * @type {number}
     */
    offsetTop = 0;

    /**
     * The bottom offset of the object.
     * @type {number}
     */
    offsetBottom = 0;

    /**
     * Draws the image of the object on the given canvas context.
     * 
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context on which to draw the image.
     */
    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Loads an image from a given path and assigns it to the object.
     * 
     * @param {string} path - The path to the image file.
     */
    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Loads an array of images and caches them for later use.
     * 
     * @param {string[]} arr - An array of image file paths.
     */
    loadimages(arr){
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * Draws the frame around the object, including its hitbox and offsets, for debugging purposes.
     * The first rectangle is the object's outer boundary, and the second is the inner area considering offsets.
     * 
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw the frames.
     */
    drawFrame(ctx){
        // Draw outer boundary
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();

        // Draw inner area with offsets
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "red";
        ctx.rect(this.x + this.offsetLeft, this.y + this.offsetTop, this.width - this.offsetRight, this.height - this.offsetTop - this.offsetBottom);
        ctx.stroke();
    }
}
