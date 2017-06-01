const {FuseBox} = require("fuse-box");

const fuse = FuseBox.init({
    homeDir: "src",
    output: "dist/$name.js"
});

fuse.dev();

fuse.bundle("app")
    .instructions("> index.ts")
    .watch()
    .hmr();

fuse.run();
fuse.bundle("app").test("[**/**.test.ts]");