/** @type {HTMLCanvasElement} */

// intalse

let canvas = document.querySelector("#Game");

let game = canvas.getContext("2d");

// vars for player

let player = {
  posx: 0,
  posy: 0,
};

let coin = {
  x: 500,
  y: 500,
};

//  scroe

let score = 0;

//  keys

let keys = [];

// Random func

function randomr(min, max) {
  let cmin = Math.ceil(min);

  let fmax = Math.floor(max);

  return Math.floor(Math.random() * (fmax - cmin) + cmin);
}

// movement

window.addEventListener("keydown", (e) => {
  if (e.key === "w") {
    keys["w"] = true;
  }

  if (e.key === "s") {
    keys["s"] = true;
  }

  if (e.key === "d") {
    keys["d"] = true;
  }

  if (e.key === "a") {
    keys["a"] = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key === "w") {
    keys["w"] = false;
  }

  if (e.key === "s") {
    keys["s"] = false;
  }

  if (e.key === "d") {
    keys["d"] = false;
  }

  if (e.key === "a") {
    keys["a"] = false;
  }
});

// starting stuff

game.fillStyle = "Red";

game.fillRect(player.posx, player.posy, 50, 50);

game.font = "30px sans-serif";

coin.x = randomr(0, canvas.width - 50);

coin.y = randomr(0, canvas.height - 50);

game.fillStyle = "blue";

game.fillRect(coin.x, coin.y, 50, 50);

// * GAME LOOP

function gameloop() {
  requestAnimationFrame(gameloop);

  if (keys.w) player.posy -= 5;

  if (keys.s) player.posy += 5;

  if (keys.d) player.posx += 5;

  if (keys.a) player.posx -= 5;

  if (
    player.posx < coin.x + 50 &&
    player.posx + 50 > coin.x &&
    player.posy < coin.y + 50 &&
    player.posy + 50 > coin.y
  ) {
    score++;

    coin.x = randomr(0, canvas.width - 50);

    coin.y = randomr(0, canvas.height - 50);
  }

  game.clearRect(0, 0, canvas.width, canvas.height);

  game.fillStyle = "black";

  game.fillText(String(score), 250, 50);

  game.fillStyle = "blue";

  game.fillRect(coin.x, coin.y, 50, 50);

  game.fillStyle = "Red";

  game.fillRect(player.posx, player.posy, 50, 50);
}

gameloop();
