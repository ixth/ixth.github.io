/*
*******************************************************************************/
function Frame(x, y) {
    this.x = x;
    this.y = y;
}

Frame.prototype.toString = function() {
    return -this.x + 'px ' + -this.y + 'px';
};


