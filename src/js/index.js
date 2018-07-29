var PIXI = require('pixi.js');
import balrogPromise from './balrog';

const app = new PIXI.Application();
document.body.appendChild(app.view);

const getCenter = () => ({
    x: app.screen.width / 2,
    y: app.screen.height / 2
});

PIXI.loader.load((resources) => {
    app.stage.addChild(new PIXI.extras.TilingSprite(
        PIXI.Texture.fromImage('assets/tile.png'),
        app.screen.width,
        app.screen.height
    ));

    balrogPromise().then((Balrog) => {
        const balrog = new Balrog();
        Object.assign(balrog, getCenter());
        app.stage.addChild(balrog);
        balrog.play();
    });
});
