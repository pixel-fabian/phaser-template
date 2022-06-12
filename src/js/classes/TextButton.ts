import SCENES from '../constants/SceneKeys';

export default class TextButton extends Phaser.GameObjects.Text {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    text: string,
    style: Phaser.Types.GameObjects.Text.TextStyle,
    hoverColor: string,
    startScene: SCENES,
  ) {
    const oStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      fontFamily: 'Nunito',
      color: '#fff',
      fontSize: '16px',
      ...style,
    };
    super(scene, x, y, text, oStyle);
    scene.add.existing(this);
    this.setInteractive({ useHandCursor: true });
    this.on('pointerover', () => {
      this.setColor(hoverColor);
    });
    this.on('pointerout', () => {
      this.setColor(this.style.color);
    });
    this.on('pointerdown', () => {
      this.scene.scene.start(startScene, {});
    });
  }
}
