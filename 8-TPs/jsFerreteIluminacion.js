//ESTE NO ESTA TERMINADO NO ANDA

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
 	var precioLampara = 35;
 	var marcaLampara;
 	var cantidadLamparas;
 	var descuento;
 	var precioBruto;
 	var preciofinal;

 	cantidadLamparas = Cantidad.value;
 	cantidadLamparas = parseInt(cantidadLamparas);

 	descuento = precioDescuento.value;
 	precioDescuento = parseInt(descuento);

 	preciobruto = precioLampara*descuento;
 	preciobruto = parseInt(preciobruto);
	
	marcaLampara = Marca.value;

	switch(marcaLampara);
	{
		case 5:
			if (marcaLampara == "ArgentinaLuz")
			{
				descuento = 0.6;
			}
			else
			{
				descuento = 0.7;
			}
		break;
		case 4:

			switch(marcaLampara)
			{
				case "ArgentinaLuz":
				case "FelipeLamparas":
					descuento = 0.75;
					break;
				default:
			}

	}
*/
 	if(cantidadLamparas > 5)
 	{
 		descuento = 0.5;
 	}
 	else
 	{
 		if(cantidadLamparas == 5)
 		{
 			if(marcaLampara == "ArgentinaLuz")
 			{
 				descuento = 0.6;
 			}
 			else	
 			{
 				descuento = 0.3;
 			{
 		}
 		if(cantidadLamparas == 4)
 		{
 			if(marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas")
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
 			if(marcaLampara == "FelipeLamparas")
 			{
 				descuento = 0.1;
 			}
 			else
 			{
 				descuento = 0.05;
 			}
 		}

 	preciofinal=(precioLampara*cantidadLamparas)*1+descuento;
 	alert(preciofinal);

 	}

}

