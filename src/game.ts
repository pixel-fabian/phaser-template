import "phaser";

const config: GameConfig = {
    type   : Phaser.AUTO, // WebGL if available
    title: "Blueprint",
    width: 800,
    height: 600,
    parent: "game",
};

window.onload = () => {
    let game = new Phaser.Game(config);
};