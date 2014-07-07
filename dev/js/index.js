var seaport = require('seaport-bridge');
$ = require('zepto-browserify').$
var fastclick = require('fastclick');
var slider=require('simple-slider');

var bannerSlider = new slider($('.banner-area')[0]);

fastclick(document.body);

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


