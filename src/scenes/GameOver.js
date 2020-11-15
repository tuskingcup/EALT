let bgOver
let buttonreset;
let buttonreset2;
let oversound

class GameOver extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameOver'
        })
    }
    preload() {
        this.load.image("bgOver","./images/GameOver.png");
        this.load.image("buttonreset","./images/reset.png");
        this.load.image("buttonreset2","./images/reset2.png");
        this.load.audio("oversound","./soundtrack/GameOver.mp3");
    }

    create() {
        this.add.image(400,300,"bgOver");
        buttonreset=this.add.image(700,300,"buttonreset").setScale(0.25);
        buttonreset2=this.add.image(700,300,"buttonreset2").setScale(0.25);
        buttonreset.setInteractive();
        buttonreset2.setVisible(false);
        oversound=this.sound.add("oversound");
        oversound.play();

        buttonreset.on("pointerover",()=>{
            buttonreset2.setVisible(true);
        });
        buttonreset.on("pointerout",()=>{
            buttonreset2.setVisible(false);
        });
        buttonreset.on("pointerdown",()=>{
            oversound.stop();
            this.scene.start("GameScene");
        });
    }
    update(delta, time) {
      
    }
}
export default GameOver