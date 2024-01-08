let p1 = 0
let p2 = 0
input.onButtonPressed(Button.A, function () {
    p1 += 1
    basic.showNumber(p1)
})
input.onButtonPressed(Button.B, function () {
    p2 += 1
    basic.showNumber(p2)
})
input.onGesture(Gesture.Shake, function () {
    if (randint(0, p1 + p2 - 1 + 1) + 1 <= p1) {
        basic.showString("A")
    } else {
        basic.showString("B")
    }
})
