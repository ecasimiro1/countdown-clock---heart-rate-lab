input.onButtonPressed(Button.A, function () {
    seconds = 30
})
input.onButtonPressed(Button.B, function () {
    if (seconds < 60) {
        seconds += 10
        basic.showNumber(seconds)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    while (seconds > 0) {
        basic.showNumber(seconds)
        basic.pause(2500)
        seconds += 0 - 5
    }
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.No)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
let seconds = 0
seconds = 30
