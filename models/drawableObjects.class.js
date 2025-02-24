class DrawableObjects{
    x;
    y;
    height;
    width;
    img;
    offsetLeft = 0;
    offsetRight = 0;
    offsetTop = 0;
    offsetBottom = 0;
    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadimages(arr){
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    drawFrame(ctx){
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "red";
        ctx.rect(this.x + this.offsetLeft, 
            this.y + this.offsetTop,
             this.width - this.offsetRight, 
             this.height - this.offsetTop - this.offsetBottom);
        ctx.stroke();
    }
}