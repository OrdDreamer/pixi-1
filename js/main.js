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

    // Player object
    player = new PIXI.Sprite.from("images/player.png");
    player.anchor.set(0.5);
    player.x = app.view.width / 2;
    player.y = app.view.height / 2;

    app.stage.addChild(player);
    // app.addChild(player);

    // Mouse interaction
    app.stage.interactive = true;
    app.stage.on("pointermove", movePlayer);

    window.addEventListener("keydown", keysDown);
    window.addEventListener("keyup", keysUp);

    app.ticker.add(gameLoop);

    keysDiv = document.querySelector("#keys");
}

function movePlayer(e) {
    let pos  = e.data.global;

    player.x = pos.x;
    player.y = pos.y;
}

function keysDown(e) {
    console.log(e.keyCode);
    keys[e.keyCode] = true;
}
function keysUp(e) {
    console.log(e.keyCode);
    keys[e.keyCode] = false;
}

function gameLoop() {
    keysDiv.innerHTML = JSON.stringify(keys, null, 2);

    if (keys[87]) {
        player.y -= 4;
    }
    if (keys[83]) {
        player.y += 4;
    }
    if (keys[65]) {
        player.x -= 4;
    }
    if (keys[68]) {
        player.x += 4;
    }
}
