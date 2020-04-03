var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

var recebeRandom = require('./randomnum')
//ROUTE 1
app.get('/parimpa/:num', function (req, res) {  
  let verNum = req.params.num
  if(verNum%2 == 0 ){
    res.send("Numero par!")
  }else{
    res.send("Numero impa!")
  } 
});
//ROUTE 2
app.get('/randomNum', function (req, res) {
    res.send("O numero aleatorio do seu intervalo é :" + (recebeRandom.randomnum(1,100)));
 });
//ROUTE 3
 app.get('/mostrarnum/:num', function (req, res) {
  let retorno = req.params.num 
   var retornoNum = parseInt(retorno)
  if (retorno < 5){
      res.render('pagina', {retorno})
    }else{
      res.send(retorno)
    }       
  });
  //ROUTE 4
  app.get('/loop', function (req, res) {  
      var lista = [45, 4, 9, 16, 25, 12, 16, 3, 1, 0];
      res.render('lista', {lista})
  
  });
app.listen(3050, function () {
  console.log('Example app listening on port 3050!');
});