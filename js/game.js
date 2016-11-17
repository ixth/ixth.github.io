var Game = {
    start: function() {
        Crafty.init(800, 600, document.querySelector('.scene'));
        Crafty.enterScene('Balrog');
    }
};

Game.start();