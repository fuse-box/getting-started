const {FuseBox, CSSPlugin, SassPlugin, WebIndexPlugin, Sparky} = require("fuse-box");

const fuse = FuseBox.init({
    homeDir: "src",
    output: "dist/$name.js",
    plugins: [
        [SassPlugin(), CSSPlugin()],
        CSSPlugin(),
        WebIndexPlugin()]
});

fuse.dev();

fuse.bundle("app")
    .instructions("> index.ts")
    .watch()
    .hmr();

Sparky.task("clean", () => {
    return Sparky.src("dist").clean("dist");
});

Sparky.task("watch:images", () => {
    return Sparky.watch("**/*.+(svg|png|jpg|gif)", {base: "./src"})
        .dest("./dist");
});

Sparky.task("default", ["clean", "watch:images"], () => {
    fuse.run();
});