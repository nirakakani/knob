basic.forever(function () {
    pins.servoWritePin(AnalogPin.P1, Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 180))
})
