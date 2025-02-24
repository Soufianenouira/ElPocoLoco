class Level{

    clouds;
    enemies;
    backgroundObjects;
    coins;
    endboss;
    level_end_x = 4000;
    bottlesCount = 100;
    

    constructor(bottlesCount, enemies, coins, clouds, backgroundObjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottlesCount = bottlesCount;
    }
}