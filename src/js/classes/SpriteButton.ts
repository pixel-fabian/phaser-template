import SCENES from '../constants/SceneKeys';

export default class TextButton extends Phaser.GameObjects.Sprite {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string | Phaser.Textures.Texture,
    startScene: SCENES,
    frame?: string | number,
  ) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);

    this.on('pointerdown', () => {
      this.scene.scene.start(startScene, {});
    });
  }
}
