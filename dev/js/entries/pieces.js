var seaport = require('seaport-bridge');
var $ = require('zepto');
var fastclick = require('fastclick');

fastclick(document.body);

var domain = '223.4.15.141';

seaport.connect(function dataHandler(data) {

  console.log('receive data:' + data);

}, function(bridge) {
  
  var http=bridge.http;

  http.get({
    domain:'huixiang.im',
    path:'/api/pieces'
  },function(data){
    alert(data.length)
  })
 


})


