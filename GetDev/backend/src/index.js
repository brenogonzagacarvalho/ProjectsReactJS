// Métodos Http: express (get,put ,delete ,post)
// Tipos de parâmentros 
//Query Params: request.query(Filtros, ordenação , paginação, ...)
//Route Params: request.params(Identificar um recurso na alteração ou remoção)
// Body : resquest.body(Dados para criação ou alteração de um resgistro)
const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://helpus:42QL0cCmBTFJH8u9@cluster0-tq9rl.mongodb.net/helpus?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors({ origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(routes);    

app.listen(3333);