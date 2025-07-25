import LoaderCallback from './loader/awaitloader/AwaitLoaderCallback.js';

export default LoaderCallback;

declare module 'phaser' {
    namespace Loader {
        interface LoaderPlugin {
            rexAwait: typeof LoaderCallback,
        }
    }
}