var con = require('../lib/conexionbd');



function cargarGeneros(req, res){
  var sql = "SELECT * FROM genero";
  con.query(sql, function(error, resultado, fields){
		if(error){
			console.log("Hubo un error en la consulta", error.message);
			return res.status(404).send("Hubo un error en la consulta");
		}
		var data = resultado;
    res.send(JSON.stringify(data));
  });
}

function cargarDirectores(req, res){
  var sql = "SELECT * FROM director";
  con.query(sql, function(error, resultado, fields){
		if(error){
			console.log("Hubo un error en la consulta", error.message);
			return res.status(404).send("Hubo un error en la consulta");
		}
		var data = resultado;
		
    res.send(JSON.stringify(data));
  });
}

function cargarActores(req, res){
  var sql = "SELECT * FROM actor";
  con.query(sql, function(error, resultado, fields){
		if(error){
			console.log("Hubo un error en la consulta", error.message);
			return res.status(404).send("Hubo un error en la consulta");
		}
		var data = resultado;
    res.send(JSON.stringify(data));
  });
}


module.exports = {
  cargarGeneros: cargarGeneros,
  cargarDirectores: cargarDirectores,
  cargarActores: cargarActores
}