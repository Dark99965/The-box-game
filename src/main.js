/** @type {HTMLCanvasElement} */
let canvas = document.querySelector("#Game");
let game = canvas.getContext("2d");
game.fillStyle = "Red";
        // vars for player
let player = {
    posx: 0,
    posy: 0
}
game.fillRect(player.posx, player.posy, 50, 50)
window.addEventListener("keydown", (e) => {
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
        game.strokeRect()
    }
    game.clearRect(0,0, canvas.width, canvas.height)
    game.fillRect(player.posx, player.posy, 50, 50)
})