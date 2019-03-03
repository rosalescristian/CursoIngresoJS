function mostrar()
{
	
/*	var precio;
	var descuento;
	var preciofinal;

	precio=prompt("Ingrese el precio.");
	descuento=prompt("Ingrese el descuento en números (%).");

	precio=parseInt(precio);
	descuento=parseInt(descuento);
	preciofinal=parseInt(preciofinal);
	
	preciofinal=precio-((descuento/100)*precio);
	
	//preciofinal = elPrecioFinal.value

	//elalert("El precio final es "+preciofinal);
	//preciofinal = elPrecioFinal.value
	document.getElementById(elPrecioFinal.value=preciofinal);
	//alert(preciofinal);

*/
	var precio;
	var porcentaje;
	var descuento;
	var preciofinal;

	precio=prompt("Ingrese el precio del item.");
	porcentaje=prompt("Ingrese el descuento del item.");
	descuento=precio*(porcentaje/100);
	preciofinal = precio-descuento;

	elPrecioFinal.value=preciofinal;
	
	
}

/*
100-20%
100-(20/100)*100
100-(0,2)*100
100-20
80


precio - descuento = precio final
precio - precio*10% = precio final
precio - precio*10/100 = precio final
precio - precio*0,10 = precio final*/


