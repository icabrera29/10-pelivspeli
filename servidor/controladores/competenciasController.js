var con = require('../lib/conexionbd');

function obtenerCompetencias(req, res){
  var sql = "SELECT * FROM competencias";
  con.query(sql, function(error, resultado, fields){
		if(error){
			console.log("Hubo un error en la consulta", error.message);
			return res.status(404).send("Hubo un error en la consulta");
		}
		var data = {
			'competencias': resultado
		}
		res.json(data);
	});
}

function obtenerCompetencia(req, res){
	var id = req.params.id;
	var sql = "SELECT c.id, c.nombre_competencia, g.id as genero_id, g.nombre as genero_nombre,d.id as director_id, d.nombre as director_nombre, a.id as actor_id, a.nombre as actor_nombre FROM competencias AS c LEFT JOIN genero AS g ON c.genero_id = g.id LEFT JOIN director AS d ON c.director_id = d.id LEFT JOIN actor as a ON a.id = c.actor_id WHERE c.id =" + id;
  con.query(sql, function(error, resultado, fields){
		if(error){
			console.log("Hubo un error en la consulta", error.message);
			return res.status(404).send("Hubo un error en la consulta");
		}
		if(resultado[0]){
			var data = resultado[0];
			//console.log(data);
			res.json(data);
		}else{
			var data = {
				"message": "No hay peliculas con este id"
			}
			res.json(data);
		}
		
	});
}

function obtenerOpciones(req, res){
	var id = req.params.id;
	var sql = "select * from competencias c, pelicula where c.id = " + id + " order by rand() limit 2;";
	
	con.query(sql, function(error, resultado, fields){
		if(error){
			console.log("Hubo un error en la consulta", error.message);
			return res.status(404).send("Hubo un error en la consulta");
		}
		var data = {
			'peliculas': resultado
		}
		res.json(data);
	});	

}

function crearCompetencia(req, res){
	var nombre = req.body.nombre;
	var genero = req.body.genero;
	var director = req.body.director;
	var actor = req.body.actor;

	if(nombre.length < 5){
		return res.status(422).json('El nombre debe tener al menos 5 caracteres')
	}
	
  var sql = "INSERT INTO competencias (nombre_competencia, genero_id, director_id, actor_id) VALUES ('"+ nombre +"', '"+ genero +"', '"+ director +"', '" + actor + "')";
	
	con.query(sql, function(error, resultado, fields){
		if(error){
			console.log("Hubo un error en la consulta", error.message);
			return res.status(404).send("Hubo un error en la consulta");
		}
		var data = {
			'resultado': resultado
		}
		res.json(data);
	});
}

function editarCompetencia(req, res){
	var id = req.params.id;
	var nombre = req.body.nombre;

	var sql = "UPDATE competencias SET nombre_competencia = '"+ nombre +"' WHERE id=" + id;

	con.query(sql, function (error, resultado, fields){
		if(error){
			console.log("Hubo un error en la consulta", error.message);
			return res.status(404).send("Hubo un error en la consulta");
		}

		var data = {
			'resultado': 'Competencia actualizada'
		}
		res.json(data);
		
	});
}
function borrarCompetencia(req, res){
	var id = req.params.id;
	var sql = "DELETE FROM competencias WHERE id = " + id;

	con.query(sql, function(error, resultado, fields){
		if(error){
			console.log("Hubo un error en la consulta", error.message);
			return res.status(404).send("Hubo un error en la consulta");
		}
		var data = {
			'resultado': 'Competencia Eliminada'
		}
		res.json(data);

	});
}


module.exports = {
	obtenerCompetencias: obtenerCompetencias,
	obtenerCompetencia: obtenerCompetencia,
	obtenerOpciones: obtenerOpciones,
	crearCompetencia: crearCompetencia,
	editarCompetencia: editarCompetencia,
	borrarCompetencia: borrarCompetencia
}