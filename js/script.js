/*
*******************************************************************************/
function Frame(x, y) {
    this.x = x;
    this.y = y;
}

Frame.prototype.toString = function() {
    return -this.x + 'px ' + -this.y + 'px';
};

/*
*******************************************************************************/
function Sequence(frames, spriteSheet) {
    this._frame = 0;
    this._frames = frames.map(function (e) {
        return spriteSheet[e];
    });
}

Sequence.prototype.valueOf = function() {
    return this._frames;
};

Sequence.prototype.getFrame = function() {
    return this._frames[this._frame];
};

Sequence.prototype.getNextFrame = function() {
    return this._frames[this._frame++ % this._frames.length];
};

/*
*******************************************************************************/
var frames = [];

for (var row = 0; row < 4; row++) {
    for (var col = 0; col < 8; col++) {
        frames.push(new Frame(col * 160, row * 96));
    }
}

var sequences = {
    'walk': new Sequence([24, 8, 25, 8], frames)
};

var balrog = document.getElementById('balrog');
var sequence = sequences.walk;
setInterval(function () {
    balrog.style.backgroundPosition = sequence.getNextFrame();
}, 200);