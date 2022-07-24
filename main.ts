function 原地右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    -150
    )
}
function 原地左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -150,
    makerobo.Motors.Right,
    150
    )
}
function 右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    0
    )
}
function 左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0,
    makerobo.Motors.Right,
    150
    )
}
function 舵机转动 (jiaodu: number) {
    makerobo.Servo(makerobo.Servos.S1, 90 + jiaodu)
}
function 后退 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -200,
    makerobo.Motors.Right,
    -200
    )
}
function 前进 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    200,
    makerobo.Motors.Right,
    200
    )
}
function 停止 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0,
    makerobo.Motors.Right,
    0
    )
}
basic.showIcon(IconNames.House)
TM1650.showNumber(0)
舵机转动(-20)
for (let index = 0; index < 500; index++) {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    150
    )
}
for (let index = 0; index < 500; index++) {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -150,
    makerobo.Motors.Right,
    -150
    )
}
makerobo.MotorStopAll()
舵机转动(20)
basic.showIcon(IconNames.Happy)
// 舵机归位
舵机转动(0)
basic.forever(function () {
    if (ps2controller.button_pressed(ps2controller.PS2Button.Up) == 1) {
        前进()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Down) == 1) {
        后退()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Left) == 1) {
        左转()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Right) == 1) {
        右转()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Triangle) == 1) {
        舵机转动(50)
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Square) == 1) {
        舵机转动(-50)
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Select) == 1) {
        舵机转动(0)
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Circle) == 1) {
        basic.showLeds(`
            . # # . .
            # . . # .
            # . . # .
            # . . # .
            . # # . .
            `)
        原地右转()
        basic.pause(5000)
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Cross) == 1) {
        basic.showIcon(IconNames.No)
        原地左转()
        basic.pause(5000)
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.L1) == 1 && ps2controller.button_pressed(ps2controller.PS2Button.L2) == 1) {
        左转()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.R1) == 1 && ps2controller.button_pressed(ps2controller.PS2Button.R2) == 1) {
        右转()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Start) == 1) {
        舵机转动(90)
        basic.pause(500)
        舵机转动(-90)
        basic.pause(500)
        舵机转动(0)
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Analog_Right) == 1) {
        前进()
        makerobo.MotorRun(makerobo.Motors.Centre, 255)
    } else {
        TM1650.showNumber(1)
        停止()
        makerobo.MotorRun(makerobo.Motors.Centre, 0)
    }
})
