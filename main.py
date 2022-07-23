def 原地右转():
    makerobo.motor_run_dual(makerobo.Motors.LEFT, 150, makerobo.Motors.RIGHT, -150)
def 原地左转():
    makerobo.motor_run_dual(makerobo.Motors.LEFT, -150, makerobo.Motors.RIGHT, 150)
def 右转():
    makerobo.motor_run_dual(makerobo.Motors.LEFT, 150, makerobo.Motors.RIGHT, 0)
def 左转():
    makerobo.motor_run_dual(makerobo.Motors.LEFT, 0, makerobo.Motors.RIGHT, 150)
def 舵机转动(jiaodu: number):
    makerobo.servo(makerobo.Servos.S1, 90 + jiaodu)
def 后退():
    makerobo.motor_run_dual(makerobo.Motors.LEFT, -200, makerobo.Motors.RIGHT, -200)
def 前进():
    makerobo.motor_run_dual(makerobo.Motors.LEFT, 200, makerobo.Motors.RIGHT, 200)
def 停止():
    makerobo.motor_run_dual(makerobo.Motors.LEFT, 0, makerobo.Motors.RIGHT, 0)
basic.show_icon(IconNames.HOUSE)
TM1650.show_number(0)
舵机转动(-20)
for index in range(500):
    makerobo.motor_run_dual(makerobo.Motors.LEFT, 150, makerobo.Motors.RIGHT, 150)
for index2 in range(500):
    makerobo.motor_run_dual(makerobo.Motors.LEFT, -150, makerobo.Motors.RIGHT, -150)
makerobo.motor_stop_all()
舵机转动(20)
basic.show_icon(IconNames.HAPPY)
# 舵机归位
舵机转动(0)

def on_forever():
    if ps2controller.button_pressed(ps2controller.PS2Button.UP) == 1:
        前进()
    elif ps2controller.button_pressed(ps2controller.PS2Button.DOWN) == 1:
        后退()
    elif ps2controller.button_pressed(ps2controller.PS2Button.LEFT) == 1:
        左转()
    elif ps2controller.button_pressed(ps2controller.PS2Button.RIGHT) == 1:
        右转()
    elif ps2controller.button_pressed(ps2controller.PS2Button.TRIANGLE) == 1:
        舵机转动(50)
    elif ps2controller.button_pressed(ps2controller.PS2Button.SQUARE) == 1:
        舵机转动(-50)
    elif ps2controller.button_pressed(ps2controller.PS2Button.SELECT) == 1:
        舵机转动(0)
    else:
        TM1650.show_number(1)
        停止()
        makerobo.motor_run(makerobo.Motors.CENTRE, 0)
basic.forever(on_forever)
