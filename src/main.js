/** @type {HTMLCanvasElement} */
// intalse
let canvas = document.querySelector("#Game");
let game = canvas.getContext("2d");
game.fillStyle = "Red";
// vars for player

let player = {
    posx: 0,
    posy: 0
}

let coins = []

// Random func

function randomr(min, max) {
    let cmin = Math.ceil(min)
    let fmax = Math.floor(max)
    return Math.floor(Math.random() * (fmax - cmin) + cmin)
}

game.fillRect(player.posx, player.posy, 50, 50)

// MAIN
window.addEventListener("keydown", (e) => {
    // Movement
    if (e.key === "w") {
        player.posy -= 5
    }

    if (e.key === "s") {
        player.posy += 5
    }

    if (e.key === "d") {
        player.posx += 5
    }

    if (e.key === "a") {
        player.posx -= 5
    }

    if (e.key === " ") {
        coins.push({
            x: randomr(0, canvas.height),
            y: randomr(0, canvas.width)
        })
    }

    game.clearRect(0, 0, canvas.width, canvas.height)
    game.strokeStyle = "yellow"
    coins.forEach(coin => {
        game.rect(coin.x, coin.y, 50, 50)
        game.stroke()
    })
    game.fillRect(player.posx, player.posy, 50, 50)

})