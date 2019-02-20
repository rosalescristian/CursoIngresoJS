/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

	var precioPrimero;
	var precioSegundo;
	var precioTercero;
	var subtotal;


function Sumar () 
{

	precioPrimero = PrecioUno.value;
	precioSegundo = PrecioDos.value; 
	precioTercero = PrecioTres.value;
	
	precioPrimero = parseInt(precioPrimero);
	precioSegundo = parseInt(precioSegundo);
	precioTercero = parseInt(precioTercero);
	
	subtotal = precioPrimero + precioSegundo + precioTercero;
	subtotal = parseInt(subtotal);
	alert(subtotal);

}

function Promedio () 
{
	
	alert(subtotal/3);
	//subtotal = (precioPrimero+precioSegundo+precioTercero)/3;
	//alert(subtotal);	
}

function PrecioFinal () 
{

	alert(subtotal*1.21);	//subtotal=(precioPrimero+precioSegundo+precioTercero)*1.21;
	//alert(subtotal)	;
}