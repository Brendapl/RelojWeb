/*
Función para obtener Hora Remota
*/

function horaServidor(){
	try {
		//Creamos un nuevo objeto XMLHttpRequest
		var solicitud = new XMLHttpRequest();
	}

	catch (errorUno) {
		try {
			//Activa y devuelve una referencia de un objeto
			solicitud = new ActiveXObject('Msxml2.XMLHTTP');
		}
		catch (errorDos) {
			try {
				//Activa y devuelve una referencia de un objeto
				solicitud = new ActiveXObject('Microsoft.XMLHTTP');
			}
			catch (errortres) {
				//AJAX no es compatible, por lo tanto se muestra la hora local
				alert("AJAX no es compatible");
			}
		}
	}
	//inicializamos la solicitud
	solicitud.open('HEAD',window.location.href.toString(),false);
	//Enviamos con un encabezado definido por el nombre del html y valor
	solicitud.setRequestHeader("index", "text/html");
	solicitud.send('');
	//regresamos el texto de acuerdo al encabezado
	return solicitud.getResponseHeader("Date");
}

var timepoServidor = horaServidor();
var date = new Date(timepoServidor);
