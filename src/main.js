import 'phaser';
import { Game } from 'phaser';
import GameScene from './scenes/GameScene';
import Game1 from "./scenes/Game1";
import Game2 from "./scenes/Game2";
import Game3 from "./scenes/Game3";
import GameEnd from "./scenes/GameEnd";
import GameOver from "./scenes/GameOver";
const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {y:0}
        }
    },
    scene: [
        GameScene,
        Game1,
        Game2,
        Game3,
        GameEnd,
        GameOver,
    ]
};

const game = new Phaser.Game(config);