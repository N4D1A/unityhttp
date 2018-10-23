"use strict"

var express = require('express'); //
var app = express(); //
var bodyParser = require('body-parser'); //
var fs = require('fs');

app.listen(process.env.PORT || 5000, function () {
    console.log('Server listening');
});

app.use(bodyParser.json()); //
app.use(bodyParser.urlencoded({ extended: true })); //

// var obj = JSON.parse(fs.readFileSync('info.json', 'utf8'));

app.get('/', function(req, res){ // 사용자가 홈페이지 홈(/)으로 접속하면, 실행될 콜백함수 지정. 요청에 대한 객체, 응답에 대한 객체 전달
  res.send('Hello, This is AR Docent Webserver'); // send()의 인자로 전달된 값을 응답하게 됨
});

app.get('/data', function(req, res){
  fs.readFile('info.json', {encoding:'utf8'}, function(err, data){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.send(data);
  })
});
