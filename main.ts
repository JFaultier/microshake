basic.showString("Shake 1.0 by JFaultier")
basic.showString("Make the moves on the display with your MicroBit.")
basic.showLeds(`
    . . # . .
    . . # . .
    # . # . #
    . # # # .
    . . # . .
    `)
input.onGesture(Gesture.Shake, function() {
    basic.showString("Good!")
})