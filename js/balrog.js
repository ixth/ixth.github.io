function Balrog(elem) {
    Sprite.call(this, elem);

    var frames = [];
    for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 8; col++) {
            frames.push(new Frame(col * 160, row * 96));
        }
    }

    this.sequences = {
        'walk': new Sequence([24, 8, 25, 8], frames)
    };
}

Balrog.prototype = Object.create(Sprite.prototype);
Balrog.constructor = Balrog;

var balrog = new Balrog(document.querySelector('.b-balrog'));
balrog.setSequence('walk');

setInterval(function () {
    balrog.draw();
}, 200);
