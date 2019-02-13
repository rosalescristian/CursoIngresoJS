//el precio del producto en efectivo es :$xxxx ,
// con tarjeta tiene un recargo del 10% que eria
//$xx de recargo, costandole final $xxx"

function mostrar()
{

	var precioEfectivo;
	var recargoTC;
	var precioFinal;

	precioEfectivo = prompt("Ingrese el precio del producto.");
	precioEfectivo = parseInt(precioEfectivo);

	recargoTC = precioEfectivo*0.1;
	recargoTC = parseInt(recargoTC);

	precioFinal = precioEfectivo+recargoTC;

	alert("El precio del producto en efectivo es $"+precioEfectivo" con tarjeta tiene un recargo de 10% que sería $"+recargoTC+" de recargo, costandole final $"+precioFinal);

	
}
