const level1 = new Level(100, 8000,
    [
        new Chicken(2000, 360),
        new Chicken(2400, 360),
        new Chicken(2800, 360),
        new Chicken(3200, 360),
        new Chicken(3600, 360),
        new Chicken(4000, 360),
        new Chicken(4400, 360),
        new Chicken(4800, 360),
        new Chicken(5200, 360),
        new Chicken(5600, 360),
        new Chicken(6000, 360),
        new Chicken(6400, 360),
        new Chicken(6800, 360),
        new Chicken(7200, 360),
        new Chicken(7600, 360),

        new Chicken(8000, 360),
        new Chicken(8400, 360),
        new Chicken(8800, 360),
        new Chicken(9200, 360),
        new Chicken(9600, 360),

        new Chicken(10000, 360),
        new Chicken(10400, 360),
        new Chicken(10800, 360),
        new Chicken(11200, 360),
        new Chicken(11600, 360),

        new Chicken(12000, 360),
        new Chicken(12400, 360),
        new Chicken(12800, 360),
        new Chicken(13200, 360),
        new Chicken(13600, 360),

        new Chicken(14000, 360),
        new Chicken(14400, 360),
        new Chicken(14800, 360),
        new Chicken(15200, 360),
        new Chicken(15600, 360),

        new Endboss(8000)
    ],
    [
        new Coin(500, 120),
        new Coin(500 + 50, 120),
        new Coin(500 + 100, 120),
    
        new Coin(500 + 500, 120),
        new Coin(500 + 550, 120),
        new Coin(500 + 600, 120),

        new Coin(500 + 900, 320),
        new Coin(500 + 950, 270),
        new Coin(500 + 1000, 220),
        new Coin(500 + 1050, 190),
        new Coin(500 + 1100, 160),
        new Coin(500 + 1150, 160),
        new Coin(500 + 1200, 160),

        new Coin(500 + 1250, 180),
        new Coin(500 + 1300, 210),
        new Coin(500 + 1350, 240),
        new Coin(500 + 1400, 270),
        new Coin(500 + 1450, 320),
    
        new Coin(500 + 1900, 320),
        new Coin(500 + 1950, 320),
        new Coin(500 + 2000, 320),

        new Coin(3000, 120),
        new Coin(3000 + 50, 120),
        new Coin(3000 + 100, 120),
    
        new Coin(3000 + 500, 120),
        new Coin(3000 + 550, 120),
        new Coin(3000 + 600, 120),

        new Coin(3000 + 900, 320),
        new Coin(3000 + 950, 270),
        new Coin(3000 + 1000, 220),
        new Coin(3000 + 1050, 190),
        new Coin(3000 + 1100, 160),
        new Coin(3000 + 1150, 160),
        new Coin(3000 + 1200, 160),

        new Coin(3000 + 1250, 180),
        new Coin(3000 + 1300, 210),
        new Coin(3000 + 1350, 240),
        new Coin(3000 + 1400, 270),
        new Coin(3000 + 1450, 320),
    
        new Coin(3000 + 1900, 320),
        new Coin(3000 + 1950, 320),
        new Coin(3000 + 2000, 320),

        new Coin(5500, 120),
        new Coin(5500 + 50, 120),
        new Coin(5500 + 100, 120),
    
        new Coin(5500 + 500, 120),
        new Coin(5500 + 550, 120),
        new Coin(5500 + 600, 120),

        new Coin(5500 + 900, 320),
        new Coin(5500 + 950, 270),
        new Coin(5500 + 1000, 220),
        new Coin(5500 + 1050, 190),
        new Coin(5500 + 1100, 160),
        new Coin(5500 + 1150, 160),
        new Coin(5500 + 1200, 160),

        new Coin(5500 + 1250, 180),
        new Coin(5500 + 1300, 210),
        new Coin(5500 + 1350, 240),
        new Coin(5500 + 1400, 270),
        new Coin(5500 + 1450, 320),
    
        new Coin(5500 + 1900, 320),
        new Coin(5500 + 1950, 320),
        new Coin(5500 + 2000, 320),

        new Coin(8000, 120),
        new Coin(8000 + 50, 120),
        new Coin(8000 + 100, 120),
    
        new Coin(8000 + 500, 120),
        new Coin(8000 + 550, 120),
        new Coin(8000 + 600, 120),

        new Coin(8000 + 900, 320),
        new Coin(8000 + 950, 270),
        new Coin(8000 + 1000, 220),
        new Coin(8000 + 1050, 190),
        new Coin(8000 + 1100, 160),
        new Coin(8000 + 1150, 160),
        new Coin(8000 + 1200, 160),

        new Coin(8000 + 1250, 180),
        new Coin(8000 + 1300, 210),
        new Coin(8000 + 1350, 240),
        new Coin(8000 + 1400, 270),
        new Coin(8000 + 1450, 320),
    
        new Coin(8000 + 1900, 320),
        new Coin(8000 + 1950, 320),
        new Coin(8000 + 2000, 320),

        new Coin(10500, 120),
        new Coin(10500 + 50, 120),
        new Coin(10500 + 100, 120),
    
        new Coin(10500 + 500, 120),
        new Coin(10500 + 550, 120),
        new Coin(10500 + 600, 120),

        new Coin(10500 + 900, 320),
        new Coin(10500 + 950, 270),
        new Coin(10500 + 1000, 220),
        new Coin(10500 + 1050, 190),
        new Coin(10500 + 1100, 160),
        new Coin(10500 + 1150, 160),
        new Coin(10500 + 1200, 160),

        new Coin(10500 + 1250, 180),
        new Coin(10500 + 1300, 210),
        new Coin(10500 + 1350, 240),
        new Coin(10500 + 1400, 270),
        new Coin(10500 + 1450, 320),
    
        new Coin(10500 + 1900, 320),
        new Coin(10500 + 1950, 320),
        new Coin(10500 + 2000, 320),

        new Coin(13000, 120),
        new Coin(13000 + 50, 120),
        new Coin(13000 + 100, 120),
    
        new Coin(13000 + 500, 120),
        new Coin(13000 + 550, 120),
        new Coin(13000 + 600, 120),

        new Coin(13000 + 900, 320),
        new Coin(13000 + 950, 270),
        new Coin(13000 + 1000, 220),
        new Coin(13000 + 1050, 190),
        new Coin(13000 + 1100, 160),
        new Coin(13000 + 1150, 160),
        new Coin(13000 + 1200, 160),

        new Coin(13000 + 1250, 180),
        new Coin(13000 + 1300, 210),
        new Coin(13000 + 1350, 240),
        new Coin(13000 + 1400, 270),
        new Coin(13000 + 1450, 320),
    
        new Coin(13000 + 1900, 320),
        new Coin(13000 + 1950, 320),
        new Coin(13000 + 2000, 320),

        new Coin(15500, 120),
        new Coin(15500 + 50, 120),
        new Coin(15500 + 100, 120),
    
        new Coin(15500 + 500, 120),
        new Coin(15500 + 550, 120),
        new Coin(15500 + 600, 120),

        new Coin(15500 + 900, 320),
        new Coin(15500 + 950, 270),
        new Coin(15500 + 1000, 220),
        new Coin(15500 + 1050, 190),
        new Coin(15500 + 1100, 160),
        new Coin(15500 + 1150, 160),
        new Coin(15500 + 1200, 160),

        new Coin(15500 + 1250, 180),
        new Coin(15500 + 1300, 210),
        new Coin(15500 + 1350, 240),
        new Coin(15500 + 1400, 270),
        new Coin(15500 + 1450, 320),
    
        new Coin(15500 + 1900, 320),
        new Coin(15500 + 1950, 320),
        new Coin(15500 + 2000, 320),

        new Coin(18000, 120),
        new Coin(18000 + 50, 120),
        new Coin(18000 + 100, 120),
    
        new Coin(18000 + 500, 120),
        new Coin(18000 + 550, 120),
        new Coin(18000 + 600, 120),

        new Coin(18000 + 900, 320),
        new Coin(18000 + 950, 270),
        new Coin(18000 + 1000, 220),
        new Coin(18000 + 1050, 190),
        new Coin(18000 + 1100, 160),
        new Coin(18000 + 1150, 160),
        new Coin(18000 + 1200, 160),

        new Coin(18000 + 1250, 180),
        new Coin(18000 + 1300, 210),
        new Coin(18000 + 1350, 240),
        new Coin(18000 + 1400, 270),
        new Coin(18000 + 1450, 320),
    
        new Coin(18000 + 1900, 320),
        new Coin(18000 + 1950, 320),
        new Coin(18000 + 2000, 320),

        new Coin(20500, 120),
        new Coin(20500 + 50, 120),
        new Coin(20500 + 100, 120),
    
        new Coin(20500 + 500, 120),
        new Coin(20500 + 550, 120),
        new Coin(20500 + 600, 120),

        new Coin(20500 + 900, 320),
        new Coin(20500 + 950, 270),
        new Coin(20500 + 1000, 220),
        new Coin(20500 + 1050, 190),
        new Coin(20500 + 1100, 160),
        new Coin(20500 + 1150, 160),
        new Coin(20500 + 1200, 160),

        new Coin(20500 + 1250, 180),
        new Coin(20500 + 1300, 210),
        new Coin(20500 + 1350, 240),
        new Coin(20500 + 1400, 270),
        new Coin(20500 + 1450, 320),
    
        new Coin(20500 + 1900, 320),
        new Coin(20500 + 1950, 320),
        new Coin(20500 + 2000, 320),

        new Coin(23000, 120),
        new Coin(23000 + 50, 120),
        new Coin(23000 + 100, 120),
    
        new Coin(23000 + 500, 120),
        new Coin(23000 + 550, 120),
        new Coin(23000 + 600, 120),

        new Coin(23000 + 900, 320),
        new Coin(23000 + 950, 270),
        new Coin(23000 + 1000, 220),
        new Coin(23000 + 1050, 190),
        new Coin(23000 + 1100, 160),
        new Coin(23000 + 1150, 160),
        new Coin(23000 + 1200, 160),

        new Coin(23000 + 1250, 180),
        new Coin(23000 + 1300, 210),
        new Coin(23000 + 1350, 240),
        new Coin(23000 + 1400, 270),
        new Coin(23000 + 1450, 320),
    
        new Coin(23000 + 1900, 320),
        new Coin(23000 + 1950, 320),
        new Coin(23000 + 2000, 320)
    ],

    [
        new Cloud(300),
        new Cloud(800),
        new Cloud(1300),
        new Cloud(1800),
        new Cloud(2300),
        new Cloud(2800),
        new Cloud(3300),
        new Cloud(2800),
        new Cloud(4300),
        new Cloud(4800),
        new Cloud(5300),
        new Cloud(5800)
    ],

    [
        new BackgroundObject('./img/5_background/layers/air.png', -719),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('./img/5_background/layers/air.png', 0),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('./img/5_background/layers/air.png', 719),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('./img/5_background/layers/air.png', 2*719),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 2*719),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 2*719),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 2*719),

        new BackgroundObject('./img/5_background/layers/air.png', 3*719),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 3*719),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 3*719),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 3*719),

        new BackgroundObject('./img/5_background/layers/air.png', 4*719),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 4*719),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 4*719),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 4*719),

        new BackgroundObject('./img/5_background/layers/air.png', 5*719),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 5*719),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 5*719),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 5*719),

        new BackgroundObject('./img/5_background/layers/air.png', 6*719),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 6*719),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 6*719),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 6*719),

        new BackgroundObject('./img/5_background/layers/air.png', 7*719),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 7*719),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 7*719),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 7*719),

        new BackgroundObject('./img/5_background/layers/air.png', 8*719),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 8*719),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 8*719),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 8*719),

        new BackgroundObject('./img/5_background/layers/air.png', 9*719),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 9*719),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 9*719),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 9*719),

        new BackgroundObject('./img/5_background/layers/air.png', 10*719),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 10*719),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 10*719),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 10*719),

        new BackgroundObject('./img/5_background/layers/air.png', 11*719),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 11*719),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 11*719),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 11*719),

        new BackgroundObject('./img/5_background/layers/air.png', 12*719),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 12*719),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 12*719),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 12*719),
    ]
    
);