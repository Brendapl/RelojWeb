//Definición del módulo express
var express = require('express');

//Comenzar nueva aplicación express
var app = express();

app.use(express.static('public'));

/*
Especificamos el Puerto donde vamos
a levantar la pagina web, este será
el Puerto 3030.
*/
app.listen(3000, function(){
    console.log('servidor iniciado');

});
