basic.showLeds(`
    . # # # .
    # # # # #
    # # . # #
    # . . . #
    # # # # #
    `)
basic.forever(function () {
    music.playMelody("C5 E D C5 E C A D ", 120)
})
