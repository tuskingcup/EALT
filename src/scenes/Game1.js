import Phaser from "phaser";
import { SetScale } from "phaser/src/actions";
import physics from "phaser/src/physics";
const speedplayer=300;
let playerMain;
let playerMainLeft;
let keyW;
let keyA;
let keyD;
let keyS;
let sceen1;
let gamescene;
let ground
let keyJ;
let text;
let obj;
let obj2;
let bottuninteractive;
let fire1;
let lamp;
let fire2;

class Game1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game1'
        })
    }
    preload() {
        this.load.spritesheet("playerMain","./images/playerMain.png",{
            frameWidth: 450, frameHeight:1080
        });
        this.load.spritesheet("playerMainLeft","./images/playerMainLeft.png",{
            frameWidth: 450, frameHeight:1080
        });
        this.load.spritesheet("fire1","./images/fire.png",{
            frameWidth:492.67, frameHeight:703
        });
        this.load.spritesheet("fire2","./images/fire.png",{
            frameWidth:492.67, frameHeight:703
        });
        this.load.image("lamp","./images/fire_alt.png");
        this.load.image("sceen1","./images/istock_000016110335_large-2.jpg");
        this.load.image("gamescene","./images/sceen1.png");
        this.load.image("ground","./images/Groundatlastis.png");
        this.load.image("obj","./images/Rapid.png");
        this.load.image("obj2","./images/Rapid.png");
        this.load.image("bottuninteractive","./images/interactive.png");
    }
    create() {
        
        sceen1=this.add.image(400,300,"sceen1");
        gamescene=this.add.image(400,300,"gamescene");
        ground=this.physics.add.image(400,560,"ground");
        obj=this.physics.add.image(840,500,"obj");
        text=this.add.text(100,300, 'If the writing of the ancient Greek philosopher Plato had not contained so much truth about \nthe human condition, his name would have been forgotten centuries ago.', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
        bottuninteractive=this.add.image(600,400,"bottuninteractive").setScale(0.3);
        playerMain=this.physics.add.sprite(100,450,"playerMain").setScale(0.15).setSize(500,1100,0,0).setOffset(0,0);
        fire1=this.add.sprite(600,50,"fire1").setScale(0.15);
        this.add.image(605,120,"lamp").setScale(0.15);
        fire2=this.add.sprite(200,50,"fire2").setScale(0.15);
        this.add.image(205,120,"lamp").setScale(0.15);

        this.physics.add.collider(ground,playerMain);

        text.setVisible(false);
        obj.setVisible(false);

        this.physics.add.collider(playerMain,obj,()=>{
            this.scene.start("Game2");
        });
        
        ground.setImmovable();
        playerMain.setCollideWorldBounds(true);

        keyA=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyJ=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);

        this.anims.create({
            key: 'playerMain',
            frames: this.anims.generateFrameNumbers('playerMain', {
                start: 0,
                end: 3

            }),
            frameRate: 5,
            repeat: 1
        });
        this.anims.create({
            key: 'playerMainLeft',
            frames: this.anims.generateFrameNumbers('playerMainLeft', {
                start: 0,
                end: 3

            }),
            frameRate: 5,
            repeat: 1
        });
        
        this.anims.create({
            key: 'fire1',
            frames: this.anims.generateFrameNumbers('fire1', {
                start: 0,
                end: 3

            }),
            frameRate: 5,
            repeat: 1
        });
        this.anims.create({
            key: 'fire2',
            frames: this.anims.generateFrameNumbers('fire2', {
                start: 0,
                end: 3

            }),
            frameRate: 3,
            repeat: 1
        });
    }
    update() {
      if(keyA.isDown){
          playerMain.setVelocityX(-speedplayer);
          playerMain.anims.play("playerMainLeft",true);
      }
      else if(keyD.isDown){
          playerMain.setVelocityX(speedplayer);
          playerMain.anims.play('playerMain', true);
      }
      else{
          playerMain.setVelocityX(0);
          playerMain.anims.play('playerMain', false);
      }
      if(keyJ.isDown){
          text.setVisible(true);
      }
      else{
          text.setVisible(false);
      }
      fire1.anims.play("fire1",true);
      fire2.anims.play("fire2",true)
    }
}
export default Game1