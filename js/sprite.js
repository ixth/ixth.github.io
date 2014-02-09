/*
*******************************************************************************/
function Sprite(elem) {
    this.dom = elem;
}

Sprite.prototype = {
    setSequence: function (seq) {
        this.sequence = this.sequences[seq];
    },
    draw: function () {
        this.dom.style.backgroundPosition = this.sequence.flip();
    }
};


