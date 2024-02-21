let app;
let player;
let keys = {};
let keysDiv;

window.onload = function () {
    app = new PIXI.Application({
        width: 800,
        height: 600,
        backgroundColor: 0x1099bb,
        hello: true,
    });

    document.body.appendChild(app.view);

    app.loader.baseUrl = "images";
    app.loader
        .add("sprite01", "bloat01.png")
        .add("sprite02", "bloat02.png")
        .add("sprite03", "bloat03.png")
        .add("sprite04", "bloat04.png")
        .add("sprite05", "bloat05.png")
        .add("sprite06", "bloat06.png")
        .add("sprite07", "bloat07.png")
        .add("sprite08", "bloat08.png")
        .add("sprite09", "bloat09.png")
        .add("sprite10", "bloat10.png")
        .add("player", "player.png");

    app.loader.onProgress.add(showProgress);
    app.loader.onComplete.add(doneLoading);
    app.loader.onError.add(reportError);

    app.loader.load();}

function showProgress(e) {
    console.log(e.progress);
}

function reportError(e) {
    console.error("Error: " + e.message);
}

function doneLoading(e) {
    console.log("Done loading!");

    player = PIXI.Sprite.from(app.loader.resources.player.texture);
    player.x = app.view.width / 2;
    player.y = app.view.height / 2;

    player.anchor.set(0.5);
    app.stage.addChild(player);
}
