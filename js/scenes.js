Crafty.defineScene('Balrog', function() {
    Crafty.background('url(/i/tile.png) repeat');

    Crafty.e('Floor, 2D, DOM, Color')
        .attr({ x: 0, y: 600, w: 800, h: 4 })
        .color('rgb(204, 204, 204)');

    Crafty.e('Balrog')
        .attr({ x: 320 });
});
