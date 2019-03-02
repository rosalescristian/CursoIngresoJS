
function mostrar()
{

	var ancho;
	var largo;
	var perimetro;

	ancho = prompt("Ingrese el ancho del rectangulo en nros");
	ancho = parseInt(ancho);

	largo = prompt("Ingrese el largo del rectangulo.");
	largo = parseInt(largo);

	perimetro = (ancho+largo)*2;
	perimetro = parseInt(perimetro);

	alert("El perimetro del rectangulo es "+perimetro);


}
