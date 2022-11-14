var LEFT = -1;
var RIGHT = 1;
var UP = -1;
var DOWN = 1;
var NONE = 0;

Crafty.c('Actor', {
    init: function () {
        this.addComponent('2D, DOM, Twoway, Gravity, SpriteAnimation, Delay')
            .twoway(24 * 6)
            .gravity('Floor')
            .addDirectionHandler();

        this.idleHandler = this.idleHandler.bind(this);
    },

    idleActions: [
        function (next) {
            this.animate('Blink' + this.getSuffix());
            this.one('AnimationEnd', next);
        },
        function (next) {
            this.animate('Amaze' + this.getSuffix());
            this.one('AnimationEnd', next);
        },
        function (next) {
            this.animate('Smile' + this.getSuffix());
            this.one('AnimationEnd', next);
        }
    ],

    nextIdleAction: function () {
        this.nextIdleAction = function () {
            return Crafty.math.randomElementOfArray(this.idleActions);
        };

        return this.idleActions[0];
    },

    callIdleAction: function (action) {
        var oldReelId = this.reel();
        action.call(this, function () {
            this.delay(this.idleHandler, 3000 + Math.random() * 1000);
            this.animate(oldReelId);
        }.bind(this));
    },

    idleHandler: function () {
        this.callIdleAction(this.nextIdleAction());
    },

    setIdleHandler: function () {
        this.delay(this.idleHandler, 1000);
    },

    cancelIdleHandler: function () {
        this.cancelDelay(this.idleHandler);
    },

    getSuffix: function () {
        return this.face === LEFT ? 'Left' : 'Right';
    },

    addDirectionHandler: function () {
        this.face = NONE;

        this.bind('NewDirection', function (e) {
            if (e.x !== NONE) {
                this.face = e.x;
            }

            this.cancelIdleHandler();
            if (this.ground) {
                if (this.isPlaying('Landing' + this.getSuffix())) {
                    this.one('AnimationEnd', function () {
                        this.trigger('NewDirection', e);
                    });
                    return;
                }
                if (e.x === NONE) {
                    this.animate('Standing' + this.getSuffix());
                    this.setIdleHandler();
                } else {
                    this.animate('Running' + this.getSuffix(), -1);
                }
            } else {
                this.animate('Falling' + this.getSuffix());
            }
        });

        this.bind('LiftedOffGround', function () {
            this.animate('Jumping' + this.getSuffix());
        });

        this.bind('LandedOnGround', function () {
            this.animate('Landing' + this.getSuffix());
        });

        return this;
    }
});

Crafty.c('Balrog', {
    init: function() {
        this
            .addComponent('Actor')
            .initSprite();
    },

    initSprite: function() {
        Crafty.sprite(160, 96, '/i/balrog.png', {
            BalrogSprite: [0, 0]
        });

        this
            .addComponent('BalrogSprite')
            .reel('JumpingLeft', 400, [[2, 0], [3, 0]])
            .reel('JumpingRight', 400, [[2, 1], [3, 1]])
            .reel('FallingLeft', 1000, [[3, 0]])
            .reel('FallingRight', 1000, [[3, 1]])
            .reel('LandingLeft', 400, [[2, 0], [0, 0]])
            .reel('LandingRight', 400, [[2, 1], [0, 1]])
            .reel('StandingLeft', 1000, [[0, 0]])
            .reel('StandingRight', 1000, [[0, 1]])
            .reel('FlyingLeft', 500, [[4, 2], [5, 2]])
            .reel('FlyingRight', 500, [[4, 3], [5, 3]])
            .reel('RunningLeft', 1000, [[0, 2], [0, 0], [1, 2], [0, 0]])
            .reel('RunningRight', 1000, [[0, 3], [0, 1], [1, 3], [0, 1]])
            .reel('BlinkLeft', 300, [[4, 0]])
            .reel('BlinkRight', 300, [[4, 1]])
            .reel('AmazeLeft', 3000, [[7, 0]])
            .reel('AmazeRight', 3000, [[7, 1]])
            .reel('SmileLeft', 4000, [[6, 0]])
            .reel('SmileRight', 4000, [[6, 1]]);

        return this;
    }
});
