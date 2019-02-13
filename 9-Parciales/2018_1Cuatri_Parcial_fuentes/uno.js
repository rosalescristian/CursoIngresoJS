
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = parseInt(ancho);
	largo = parseInt(largo);
	perimetro = parseInt(perimetro);

	ancho = prompt("Ingrese el ancho del rectángulo.");
	largo = prompt("Ingrese el largo del rectángulo.");

	perimetro = (2*ancho+2*largo);

	alert("El perímetro del rectángulo es: "+perimetro);
	//alert(ancho);
	//alert(largo);

}
