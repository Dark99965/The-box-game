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

// Random func

function randomr(min, max) {
    let min = Math.ceil(min)
    let max = Math.floor(max)
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
        game.strokeStyle
        game.strokeRect(50, 50, 50, 50)
    }

    game.clearRect(0,0, canvas.width, canvas.height)

    game.fillRect(player.posx, player.posy, 50, 50)

})