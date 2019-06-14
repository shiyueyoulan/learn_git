var http = require('http');
var fs = require('fs');
// 后端路由  http server /api ajax传数据

http.createServer(function(req, res){
  var filepath = '.' + req.url;
  if( filepath === './') {
    filepath = './index.html';
  }
  readFile(filepath,res);
}).listen(3000);

function readFile(path,res) {
  fs.readFile(path,'utf-8', function(err,data){
    if(err) {
      readFile('./index.html', res);
      // throw new Error('出错了');
    }else{
      res.write(data);
      res.end();
    }
  })
}