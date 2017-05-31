const {FuseBox, CSSPlugin, SassPlugin, WebIndexPlugin} = require("fuse-box");

const fuse = FuseBox.init({
    homeDir: "src",
    output: "dist/$name.js",
    plugins: [
        [SassPlugin(), CSSPlugin()],
        CSSPlugin(),
        WebIndexPlugin()
    ]
});

fuse.bundle("app")
// .watch() // Enable this to have auto bundling when files change
    .instructions(">index.js");

fuse.run();