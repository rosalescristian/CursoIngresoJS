function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;
//alert (mesDelAño);

switch(mesDelAño)
	{
		case "Febrero":
			mensaje = "Este mes tiene 28 dias.";
			break;
		case "Noviembre":
		case "Abril":
		case "Junio":
		case "Septiembre":
			mensaje = "Este mes tiene 30 días";
			break;
		default:
			mensaje = "Este mes tiene 31 dias";
			break;
	}

alert(mensaje);

}//FIN DE LA FUNCIÓN