const {FuseBox, CSSPlugin, SassPlugin, WebIndexPlugin} = require("fuse-box");

const fuse = FuseBox.init({
    homeDir: "src",
    output: "dist/$name.js",
    plugins: [
        [SassPlugin(), CSSPlugin()],
        CSSPlugin(),
        WebIndexPlugin({path: "."})]
});

fuse.dev();

fuse.bundle("app")
    .instructions("> index.ts")
    .watch()
    .hmr();

fuse.run();