/*
Función para obtener Hora Local
*/

//funcion para poder actualizar la hora, minutos y segundos.
function ActualizarHora(){
  var fecha = new Date();
  var segundos = fecha.getSeconds();
  var minutos = fecha.getMinutes();
  var horas = fecha.getHours();

//Método para obtener hora, minutos y segundos de acuerdo a su id.
  var obtenerHora = document.getElementById("pHora");
  var obtenerMinutos = document.getElementById("pMinutos");
  var obtenerSegundos = document.getElementById("pSegundos");

//Para regresear el varor de hora, minutos y segundos.
  obtenerHora.textContent = horas;
  obtenerMinutos.textContent = minutos;
  obtenerSegundos.textContent = segundos;

}

//método para poder actualiar la hora y se ejecute cada un segundo
setInterval(ActualizarHora,1000);

//Método para mostrar la hora local fija
var horaLocalFija = new Date();
