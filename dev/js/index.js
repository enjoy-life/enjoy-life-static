var seaport = require('seaport-bridge');
$ = require('zepto-browserify').$
var fastclick = require('fastclick');

fastclick(document.body);

var domain = '223.4.15.141';

seaport.connect(function dataHandler(data) {

  console.log('receive data:' + data);

}, function(bridge) {
  
  $('.category').on('click',function(){
    bridge.data.send({
      segue:'category',
      data:$(this).text()
    })
  })

  $('.info').on('click',function(){
    bridge.data.send({
      segue:'category',
      data:$(this).text()
    })
  })


})


