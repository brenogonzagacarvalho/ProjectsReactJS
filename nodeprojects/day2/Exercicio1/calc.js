var express = require('express');
var app = express();
var calculando = require('./funcaoaoquadrado')


app.get('/', function (req, res) {
  res.send('Rota principal!');
});
app.get('/aoquadrado', function (req, res) {
    res.send("O resultado da funcao é  " + calculando(8));
 });

 app.get('/paramentros/:id', function (req, res) {
    let retorno = req.params.id 
    res.send(calculando.quadrado(5));
  });
  
app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});