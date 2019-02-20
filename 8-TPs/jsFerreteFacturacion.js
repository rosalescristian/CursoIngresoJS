/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

	var precioPrimero;
	var precioSegundo;
	var precioTercero;
	var subtotal;

	precioPrimero = PrecioUno.value;
	precioPrimero = parseInt(precioPrimero);
	
	precioSegundo = PrecioDos.value; 
	precioSegundo = parseInt(precioSegundo);
	
	precioTercero = PrecioTres.value;
	precioTercero = parseInt(precioTercero);
	
	

function Sumar () 
{
	subtotal = precioPrimero + precioSegundo + precioTercero;
	subtotal = parseInt(subtotal);
	alert(subtotal);
}

function Promedio () 
{
	//subtotal = (precioPrimero+precioSegundo+precioTercero)/3;
	//alert(subtotal);	
}

function PrecioFinal () 
{
	//subtotal=(precioPrimero+precioSegundo+precioTercero)*1.21;
	//alert(subtotal)	;
}