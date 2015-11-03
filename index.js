var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('从亚马逊，京东等图书网站获取书目信息，并整理给买书者以参考，比价购买。');
});

app.get('/books/:isbn', function(req, res){
  var rtv = {
    code: 200,
    msg: 'Successful',
    data: null
  };

  res.send(rtv);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Aragorn listening at http://%s:%s', host, port);
});
