function mostrar()
{

	var precio;
	var porcentajeDescuento;
	var precioFinal;

	precio=prompt("Ingrese el precio del item.");
	precio=parseInt(precio);

	porcentajeDescuento=prompt("Ingrese el dto");
	porcentajeDescuento=parseInt(porcentajeDescuento);

	precioFinal = precio*(1-(porcentajeDescuento/100));
	precioFinal = parseInt(precioFinal)

	elPrecioFinal.value=precioFinal;

}
