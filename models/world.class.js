class World {
    character = new Character();
    staturbar_healt = new Statusbar('health', 100, 20, -10);
    staturbar_coins = new Statusbar('coin', 0, 20, 30);
    staturbar_botlle = new Statusbar('bottle', 100, 20, 70);
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    throwableObject = [];

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
    }

    setWorld(){
        this.character.world = this;
    }

    run(){
        setInterval(()=>{
            this.checkThrowObjects();
            this.checkCollisions();
        }, 50);
    }

    checkThrowObjects(){
        if(this.keyboard.D && this.level.bottlesCount){
            let bottle = new SalsaBottle(this.character.x, this.character.y);
            this.throwableObject.push(bottle);
            this.keyboard.D = false;
            this.level.bottlesCount--;
            this.updateBottleStatusbar();
        }
    }

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

    checkCollisions(){
        this.level.enemies.forEach((enemy)=>{
            if(this.character.isIncolliding(enemy)){
                this.character.hit();
                if(!(this.character.energy % 20)){
                    this.staturbar_healt.loadNewImage(this.character.energy);
                }
            }
        });

        this.level.coins.forEach((coin, index)=>{
            if(this.character.isIncolliding(coin)){
                console.log(index);
                this.level.coins.splice(index, 1);
                this.character.coins += 20;
                if(!(this.character.coins % 20) && this.character.coins <= 100){
                    this.staturbar_coins.loadNewImage(this.character.coins);

                }
            }
        });
        this.level.enemies.forEach((enemy, indexEnemy)=>{
            this.throwableObject.forEach((bottle,indexBottle)=>{
                if(enemy.isIncolliding(bottle)){
                    console.log('wayeeeeeeh');
                    this.level.enemies.splice(indexEnemy, 1)
                    
                }
        
            });
        
        });
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.clouds);
        this.addToMap(this.staturbar_healt);
        this.addToMap(this.staturbar_coins);
        this.addToMap(this.staturbar_botlle);
        this.addObjectToMap(this.level.coins);
        this.addToMap(this.character);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.throwableObject);
        this.ctx.translate(-this.camera_x, 0);
        
        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    }

    addObjectToMap(objects){
        for (let index = 0; index < objects.length; index++) {
            let element = objects[index];
            this.addToMap(element);
        }
    }

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

    flipImage(element) {
        this.ctx.save();
        this.ctx.translate(element.width, 0);
        this.ctx.scale(-1, 1);
        element.x = element.x * -1;
    }

    flipImageBack(element) {
        this.ctx.restore();
        element.x = element.x * -1;
    }
}