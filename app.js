var Cylon = require('cylon');

Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/cu.usbserial-AH00ZVME' }
  },

  devices: {
    M1_1: { driver: 'led', pin: 8 },
    M1_2: { driver: 'led', pin: 9 },
    M2_1: { driver: 'led', pin: 10 },
    M2_2: { driver: 'led', pin: 11 }
    // button: { driver: 'button', pin: 2 }
  },

  work: function(my) {
    // my.button.on('push', function() {
    //   my.led.toggle()
    // });
    every((1).second(), my.M1_1.toggle);
    every((1).second(), my.M2_1.toggle);
  }
}).start();