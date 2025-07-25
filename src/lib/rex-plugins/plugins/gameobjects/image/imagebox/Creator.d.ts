import ImageBox from './ImageBox';
import ImageBoxBase from './ImageBoxBase';

export default Creator;

declare namespace Creator {
    interface IConfig extends Phaser.Types.GameObjects.GameObjectConfig {
        width?: number, height?: number,
        key?: string, frame?: string,

        scaleUp?: boolean,
        background?: ImageBoxBase.IRectangle | Phaser.GameObjects.GameObject,
        image?: Phaser.GameObjects.GameObject,
    }
}

declare function Creator(
    config?: Creator.IConfig,
    addToScene?: boolean,
): ImageBox;