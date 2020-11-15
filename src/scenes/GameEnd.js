import { SetScale } from "phaser/src/actions";
import { Text } from "phaser/src/gameobjects";

let bgEnd;
let buttonreset;
let buttonreset2;
let MusicEnd;

class GameEnd extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameEnd'
        });
    }

    preload() {
        this.load.image("bgEnd","./images/GameEnd.png");
        this.load.image("buttonreset","./images/reset.png");
        this.load.image("buttonreset2","./images/reset2.png");
        this.load.audio("MusicEnd","./soundtrack/GameEnd.mp3");
    }

    create() {
        bgEnd=this.add.image(400,300,"bgEnd");
        buttonreset=this.add.image(400,550,"buttonreset").setScale(0.15);
        buttonreset2=this.add.image(400,550,"buttonreset2").setScale(0.15);
        MusicEnd=this.sound.add("MusicEnd");
        MusicEnd.play();

        buttonreset.setInteractive();
        buttonreset2.setVisible(false);
        buttonreset.on("pointerover",()=>{
            buttonreset2.setVisible(true);
        });
        buttonreset.on("pointerout",()=>{
            buttonreset2.setVisible(false);
        });
        buttonreset.on("pointerdown",()=>{
            MusicEnd.stop();
            this.scene.start("GameScene");
        });
    }

    update(delta, time) {
    }
}
export default GameEnd