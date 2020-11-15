import { SetScale } from "phaser/src/actions";
import { Text } from "phaser/src/gameobjects";

let bg;
let buttonNew;
let buttonNew2;
let namegame;
let title;
let BgMusic;

class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene'
        })
    }
    preload() {
        this.load.image("bg","./images/stargate-stargate-atlantis-wallpaper-preview.jpg");
        this.load.image("buttonNew","./images/buttonNew.png");
        this.load.image("buttonNew2","./images/buttonNew2.png");
        this.load.image("namegame","./images/Name2.png");
        this.load.image("title","./images/title.png");
        this.load.audio("BgMusic","./soundtrack/horrorsoundMenu.mp3");
    }

    create() {
        bg=this.add.tileSprite(0,0,728,410,"bg").setOrigin(0,-0.001).setScale(1.5);
        namegame=this.add.image(400,170,"namegame").setScale(0.7);
        buttonNew=this.add.image(400,500,"buttonNew").setScale(0.25);
        buttonNew2=this.add.image(400,500,"buttonNew2").setScale(0.25);
        title=this.add.image(400,325,"title").setScale(0.5);

        BgMusic=this.sound.add("BgMusic");
        BgMusic.play();

        buttonNew.setInteractive();
        buttonNew2.setVisible(false);
        title.setVisible(false);
        buttonNew.on("pointerover",()=>{
            buttonNew2.setVisible(true);
            title.setVisible(true);
        })
        buttonNew.on("pointerout",()=>{
            buttonNew2.setVisible(false);
            title.setVisible(false);
        })
        buttonNew.on("pointerdown",()=>{
            BgMusic.stop();
            this.scene.start("Game1");
        });
    }
    update(delta, time) {
      
    }
}
export default GameScene