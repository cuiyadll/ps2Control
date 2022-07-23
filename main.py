basic.show_icon(IconNames.HEART)

def on_forever():
    makerobo.motor_run_dual(makerobo.Motors.LEFT, 150, makerobo.Motors.LEFT, -150)
basic.forever(on_forever)
