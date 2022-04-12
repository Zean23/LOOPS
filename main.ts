input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            sprite.move(0)
            sprite.change(LedSpriteProperty.X, -1)
            basic.pause(200)
        }
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.X, 1)
            sprite.change(LedSpriteProperty.Y, 0)
            basic.pause(200)
        }
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(4, 0)
basic.forever(function () {
	
})
