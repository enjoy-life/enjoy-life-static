var seaport = require('seaport-bridge');

var domain = '223.4.15.141';

seaport.connect(function dataHandler(data) {

  console.log('receive data:' + data);

}, function(bridge) {
  

})

