import 'phaser';
import SCENES from '../constants/SceneKeys';
import TEXTURES from '../constants/TextureKeys';
export default class LoadScene extends Phaser.Scene {
  constructor() {
    super({
      key: SCENES.LOAD,
    });
  }

  //////////////////////////////////////////////////
  // LIFECYCLE (init, preload, create, update)    //
  //////////////////////////////////////////////////

  init(): void {}

  preload(): void {
    // add text
    this.add.text(360, 225, 'Loading...', {
      fontFamily: 'sans-serif',
      color: '#fff',
    });
    // create loading bar
    const loadingBar = this._createLoadingBar();
    this.load.on('progress', (nPercentage) => {
      loadingBar.fillRect(255, 255, 290 * nPercentage, 20);
    });
    // load all textures
    this.load.spritesheet(TEXTURES.BUTTON_PLAY, 'assets/button_01_play.png', {
      frameWidth: 64,
      frameHeight: 32,
    });
    // load all audio
  }

  create(): void {
    this.scene.start(SCENES.MENU);
  }

  update(): void {}

  //////////////////////////////////////////////////
  // Private methods                              //
  //////////////////////////////////////////////////

  _createLoadingBar() {
    const loadingBg = this.add.graphics({
      fillStyle: {
        color: 0x222222,
      },
    });
    loadingBg.fillRect(250, 250, 300, 30);
    const loadingBar = this.add.graphics({
      fillStyle: {
        color: 0xcccccc,
      },
    });
    return loadingBar;
  }
}
