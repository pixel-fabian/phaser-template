import 'phaser';
import SCENES from '../constants/SceneKeys';
import TEXTURES from '../constants/TextureKeys';

export default class SceneMenu extends Phaser.Scene {
  constructor() {
    super({
      key: SCENES.MENU,
    });
  }

  //////////////////////////////////////////////////
  // LIFECYCLE (init, preload, create, update)    //
  //////////////////////////////////////////////////

  init(): void {}

  preload(): void {}

  create(): void {
    const buttonPlay = this._createButton(TEXTURES.BUTTON, SCENES.GAME);
  }

  update(): void {}

  //////////////////////////////////////////////////
  // Private methods                              //
  //////////////////////////////////////////////////

  _createButton(sTextureKey: TEXTURES, sStartScene: SCENES) {
    const button = this.add.sprite(100, 100, sTextureKey, 0);
    button.setScale(3);
    const pressAnimKey = `press${sTextureKey}`;
    this.anims.create({
      key: pressAnimKey,
      frames: this.anims.generateFrameNumbers(sTextureKey, {
        start: 0,
        end: 2,
      }),
      frameRate: 12,
      repeat: 0,
    });
    button.setInteractive();
    button.on('pointerdown', () => {
      button.play(pressAnimKey);
    });
    button.on(
      'animationcomplete',
      (animation) => {
        switch (animation.key) {
          case pressAnimKey:
            this.scene.start(sStartScene)
            break;
        }
      },
      this,
    );

    return button;
  }
}
