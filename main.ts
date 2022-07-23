basic.showIcon(IconNames.No)
TM1650.showNumber(78)
for (let index = 0; index < 4; index++) {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    150
    )
}
makerobo.MotorStopAll()
