/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

	var largoTerreno;
	var anchoTerreno;
	var radioTerreno;
	var rectangulo;
	var perimetro;
	var superficie;

function Rectangulo () 
{
	
	largoTerreno = Largo.value;
	anchoTerreno = Ancho.value;
	radioTerreno = Radio.value;

	largoTerreno = parseInt(largoTerreno);
	anchoTerreno = parseInt(anchoTerreno);
	radioTerreno = parseInt(radioTerreno);
	rectangulo = parseInt(rectangulo);

	rectangulo=(largoTerreno + anchoTerreno)*2;
//	rectangulo =parseInt(rectangulo);
	alert(rectangulo);//(rectangulo);

}
function Circulo () 
{
	
	perimetro = parseInt(perimetro);
	perimetro = radioTerreno*2*3.14;
	alert(perimetro);

}
function Materiales () 
{
	
	/*superficie = parseInt(superficie);
	superficie = 
	*/
	//NO ENTENDI QUE TENGO QUE MOSTRAR ACA;

}