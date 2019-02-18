function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje = "";

switch(mesDelAño)
{
	case "Enero":
		mensaje = "Que comiences bien el año!!!";
		break;
	case "Marzo":
		mensaje = "a clases!!!.";
		break;
	case "Julio":
		mensaje = "Se vienen las vacaciones!!!.";
		break;
	case "Diciembre":
		mensaje = "Felices Fiestas!!!";
		break;
//La version del profe es sin el default
//	default:
//		mensaje = "Otro mes del año";
//		break;

}
//Mi primera solucion y funciona ok
//alert(mensaje);
//La version del profe
if (mensaje != "")
{
	alert(mensaje);
}

}//FIN DE LA FUNCIÓN