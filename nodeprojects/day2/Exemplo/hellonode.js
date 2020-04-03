var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Rota principal!');
});
app.get('/contatos', function (req, res) {
   res.send('Vc esta nos contatos!');
 });
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});