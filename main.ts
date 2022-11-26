function 高速前进 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    250,
    makerobo.Motors.Right,
    250
    )
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    TM1650.off()
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.No)
})
function 原地右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    -150
    )
}
function 慢速右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    20,
    makerobo.Motors.Right,
    0
    )
}
function 慢速前进 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    20,
    makerobo.Motors.Right,
    20
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
function 高速原地左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -255,
    makerobo.Motors.Right,
    255
    )
}
function 高速后退 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -250,
    makerobo.Motors.Right,
    -250
    )
}
input.onButtonPressed(Button.A, function () {
    TM1650.showNumber(44)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Yes)
})
function 高速右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    255,
    makerobo.Motors.Right,
    0
    )
}
function 后退 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -255,
    makerobo.Motors.Right,
    -255
    )
}
function 高速左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0,
    makerobo.Motors.Right,
    255
    )
}
function 高速原地右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    255,
    makerobo.Motors.Right,
    -255
    )
}
function 前进 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    255,
    makerobo.Motors.Right,
    255
    )
}
function 慢速左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0,
    makerobo.Motors.Right,
    20
    )
}
input.onButtonPressed(Button.B, function () {
    TM1650.on()
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Square)
})
function 慢速后退 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -20,
    makerobo.Motors.Right,
    -20
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
music.playTone(262, music.beat(BeatFraction.Whole))
TM1650.showNumber(0)
basic.showIcon(IconNames.House)
舵机转动(-20)
for (let index = 0; index < 500; index++) {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    255,
    makerobo.Motors.Right,
    255
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
basic.showIcon(IconNames.EigthNote)
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
        // 舵机回正
        舵机转动(0)
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Circle) == 1) {
        basic.showLeds(`
            . # # . .
            # . . # .
            # . . . .
            # . . # .
            . # # . .
            `)
        原地右转()
        basic.pause(5000)
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Cross) == 1) {
        basic.showIcon(IconNames.No)
        原地左转()
        basic.pause(5000)
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Start) == 1) {
        舵机转动(90)
        basic.pause(350)
        舵机转动(-90)
        basic.pause(350)
        舵机转动(0)
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.L1) == 1 && ps2controller.button_pressed(ps2controller.PS2Button.Up) == 1) {
        basic.showLeds(`
            . . # . .
            # . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        高速前进()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.L1) == 1 && ps2controller.button_pressed(ps2controller.PS2Button.Down) == 1) {
        高速后退()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.L1) == 1 && ps2controller.button_pressed(ps2controller.PS2Button.Left) == 1) {
        高速左转()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.L1) == 1 && ps2controller.button_pressed(ps2controller.PS2Button.Right) == 1) {
        高速右转()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.L1) == 1 && ps2controller.button_pressed(ps2controller.PS2Button.Cross) == 1) {
        高速原地左转()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.L1) == 1 && ps2controller.button_pressed(ps2controller.PS2Button.Circle) == 1) {
        高速原地右转()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.L2) == 1 && ps2controller.button_pressed(ps2controller.PS2Button.Up) == 1) {
        慢速前进()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.L2) == 1 && ps2controller.button_pressed(ps2controller.PS2Button.Down) == 1) {
        慢速后退()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.L2) == 1 && ps2controller.button_pressed(ps2controller.PS2Button.Right) == 1) {
        慢速右转()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.L2) == 1 && ps2controller.button_pressed(ps2controller.PS2Button.Left) == 1) {
        慢速左转()
    } else {
        TM1650.showNumber(1)
        停止()
    }
})
