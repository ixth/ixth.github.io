/*
*******************************************************************************/
function Sequence(frames, spriteSheet) {
    this._frame = 0;
    this._frames = frames.map(function (e) {
        return spriteSheet[e];
    });
}

Sequence.prototype = {
    _getFrame: function (frame) {
        return this._frames[frame % this._frames.length];
    },
    flip: function () {
        return this._getFrame(this._frame++);
    }
};


