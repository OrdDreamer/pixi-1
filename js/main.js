let app;
let player;
let bullets = [];
let bulletSpeed = 10;

window.onload = function () {
    app = new PIXI.Application({
        width: 800,
        height: 600,
        backgroundColor: 0x1099bb,
        hello: true,
    });

    document.querySelector("#gameDiv")?.appendChild(app.view);
    document.querySelector("#gameDiv")?.addEventListener("pointerdown", fireBullet);

    // Player object
    player = new PIXI.Sprite.from("images/player.png");
    player.anchor.set(0.5);
    player.x = app.view.width / 2;
    player.y = app.view.height / 2;

    app.stage.addChild(player);

    app.ticker.add(gameLoop);
}

function fireBullet(e) {
    console.log("Fire!")

    let bullet = createBullet();
    bullets.push(bullet);
}

function createBullet() {
    let bullet = PIXI.Sprite.from("images/bullet.png");
    bullet.anchor.set(0.5);
    bullet.x = player.x;
    bullet.y = player.y;
    bullet.speed = bulletSpeed;
    app.stage.addChild(bullet);

    return bullet;
}

function updateBullets(delta) {
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].position.y -= bullets[i].speed;

        if (bullets[i].position.y < 0) {
            bullets[i].dead = true;
        }
    }

    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i].dead) {
            app.stage.removeChild(bullets[i]);
            bullets.splice(i, 1);
        }
    }
}

function gameLoop(delta) {
    updateBullets(delta);
}


