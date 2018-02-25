var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var competenciasController = require('./controladores/competenciasController');
var datosController = require('./controladores/datosController');

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/competencias', competenciasController.obtenerCompetencias);
app.get('/competencias/:id', competenciasController.obtenerCompetencia);
app.get('/competencias/:id/peliculas', competenciasController.obtenerOpciones);
app.delete('/competencias/:id', competenciasController.borrarCompetencia);

app.post('/competencias', competenciasController.crearCompetencia);

app.get('/generos', datosController.cargarGeneros);
app.get('/directores', datosController.cargarDirectores);
app.get('/actores', datosController.cargarActores);


var puerto = '8080';

app.listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});