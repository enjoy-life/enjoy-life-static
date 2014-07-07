var seaport = require('seaport-bridge');
$ = require('zepto-browserify').$
var fastclick = require('fastclick');
var slider = require('simple-slider');
var Spinner = require('spin.js');

var bannerSlider = new slider($('.banner-area')[0]);

fastclick(document.body);


var spinner = new Spinner({
  color: '#111111',
  lines: 10,
  length: 10
});


spinner.spin(document.body);

$('.spinner').css({
  position:'fixed'
});

setTimeout(function() {
  spinner.stop()
}, 5000);

seaport.connect(function dataHandler(data) {

  console.log('receive data:' + data);

}, function(bridge) {

  $('.category').on('click', function() {
    bridge.data.send({
      segue: 'category',
      data: $(this).text()
    })
  })

  $('.info').on('click', function() {
    bridge.data.send({
      segue: 'category',
      data: $(this).text()
    })
  })


})