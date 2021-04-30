import "phaser";
import {SceneGame} from "./modules/SceneGame";

const config: GameConfig = {
    type   : Phaser.AUTO, // WebGL if available
    title: "Blueprint",
    width: 800,
    height: 600,
    parent: "game",
    scene: [SceneGame],
};

window.onload = () => {
    let game = new Phaser.Game(config);
};