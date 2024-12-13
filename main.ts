input.onGesture(Gesture.LogoUp, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Chase), music.PlaybackMode.InBackground)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # # # # #
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            . # . # .
            . . . . .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            . # . # .
            . . . . .
            . . # . .
            . # # # .
            `)
        basic.showLeds(`
            # # # # #
            . # . # .
            . # . # .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            # # # # #
            . # . # .
            # . . . #
            # # # # #
            # . . . #
            `)
        basic.showLeds(`
            # # # # #
            # . # . #
            # . . . #
            # . # . #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(520)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello!")
})
