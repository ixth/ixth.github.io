Crafty.defineScene('Balrog', function() {
    Crafty.background('url(./i/tile.png) repeat');

    Crafty.e('Floor, 2D, DOM')
        .attr({ x: 0, y: 600, w: 800, h: 4 });

    Crafty.e('Floor, 2D, DOM')
        .attr({ x: -1, y: 0, w: 1, h: 600 });

    Crafty.e('Floor, 2D, DOM')
        .attr({ x: 800, y: 0, w: 1, h: 600 });

    Crafty.e('Balrog')
        .attr({ x: 320 });
});
