var express = require('express');
var app = express();
var router = express.Router();
  
var path = __dirname + '/views/';
  
app.use('/',router);
app.use('/assets',express.static('assets'));
  
router.get('/',function(req, res){
  res.sendFile(path + 'index.html');
});
  
router.get('/home',function(req, res){
  res.sendFile(path + 'dashboard.html');});
  
router.get('/about',function(req, res){
  res.sendFile(path + 'about.html');
});
  
app.use('*',function(req, res){
  res.send('Error 404: Not Found!');
});
  
app.listen(3000,function(){
  console.log("Server running at Port 3000");
});