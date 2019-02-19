/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
function CalcularPrecio () 
{
 	
	var cantidadLamparas;
	var precioUnitario;
	var descuento;
	var fabricante;
	var subtotal;
	var iibb;
	var total;

	precioUnitario = 35;
	cantidadLamparas = Cantidad.value;
	descuento = parseInt(descuento);
	fabricante = Marca.value;
	subtotal = parseInt(subtotal);
	iibb = parseInt(iibb);
	total = parseInt(total)

	if (cantidadLamparas > 5)
		{
			descuento = 0.5;
		}
	else
		{ 
			if (cantidadLamparas == 5 && fabricante == "ArgentinaLuz")
			{
				descuento = 0.4;
			}
				else
				{
					descuento = 0.3;
				}
			if (cantidadLamparas == 4)
			{
				if (fabricante == "ArgentinaLuz" || fabricante == "FelipeLamparas")
				{
					descuento = 0.25;
				}
				else
				{
					descuento = 0.2;
				}
			}
			if (cantidadLamparas == 3)
			{
				if (fabricante == "ArgentinaLuz")
				{
					descuento = 0.15;
				}
				else
				{
					if (fabricante == "FelipeLamparas")
					{
						descuento = 0.1;
					}
					else
					{
						descuento = 0.05;
					}
				}
			}
			

		}
	

//		alert("prueba");
//		}
//alert((precioUnitario*cantidadLamparas)*(1-descuento));
subtotal = (cantidadLamparas*precioUnitario)*(1-descuento);
//alert(subtotal);
	if (subtotal > 120)
	{
		iibb = subtotal * 0.1;
		total = subtotal * 1.1;
		alert("El total a pagar es $"+total+". Usted pagó $"+iibb+" de IIBB.")
	}
	else
	 {
		alert("El total a pagar es $"+subtotal);
	 }
} // Aca termina la funcion CalcularPrecio