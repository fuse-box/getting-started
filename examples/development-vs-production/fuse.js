const {FuseBox, CSSPlugin, SassPlugin, WebIndexPlugin, UglifyJSPlugin, Sparky} = require("fuse-box");

let fuse, app, vendor, isProduction = false;

Sparky.task("config", () => {
    fuse = FuseBox.init({
        homeDir: "src",
        output: "dist/$name.js",
        hash: isProduction,
        sourceMaps: !isProduction,
        plugins: [
            [SassPlugin(), CSSPlugin()],
            CSSPlugin(),
            WebIndexPlugin(),
            isProduction && UglifyJSPlugin()
        ]
    });

    // vendor should come first
    vendor = fuse.bundle("vendor")
        .instructions("~ index.ts");

    // out main bundle
    app = fuse.bundle("app")
        .instructions(`!> [index.ts]`);

    if (!isProduction) {
        fuse.dev();
    }
});

// development task "node fuse""
Sparky.task("default", ["config"], () => {
    vendor.hmr().watch();
    app.watch();
    return fuse.run();
});

// Dist task "node fuse dist"
Sparky.task("dist", ["set-production", "config"], () => {
    return fuse.run();
});

Sparky.task("set-production", () => {
    isProduction = true;
    return Sparky.src("dist/").clean("dist/");
});

Sparky.task("test", ["config"], () => {
    return app.test();
});
