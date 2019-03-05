function mostrar()
{

	var marca;
	var peso;
	var temperaturaAlmacenamiento;
	var respuesta = "si";
	var contadorMarca;
	var pesoMaximo = 100;
	var pesoMinimo = 1;
	var temperaturaMinimo = -30;
	var temperaturaMaxima = 30;
	var contadorTemperaturasPares = 0;
	var contadorTemperaturasImpares = 0;
	var contadorAlmacenamientoMenosCero = 0;
	var acumuladorPeso = 0;
	var promediopesos;


	isNaN()

	for(contadorMarca = 0 ; respuesta == "si" ; contadorMarca++)
	{
		marca = prompt("Ingrese la marca del producto.");

		peso = prompt("Ingrese el peso del producto.(Entre 0 y 100)");
			while(isNaN(peso) || peso < pesoMinimo || peso > pesoMaximo)
			{
				peso=prompt("Ha ingresado un peso invalido. Reingrese un peso entre 0 y 100");
			}
		peso=parseInt(peso);
		acumuladorPeso = acumuladorPeso + peso;

		temperaturaAlmacenamiento = prompt("Ingrese la temperatura de almacenamiento.");
			while(isNaN(temperaturaAlmacenamiento) || temperaturaAlmacenamiento < temperaturaMinimo || temperaturaAlmacenamiento > temperaturaMaxima)
			{
				temperaturaAlmacenamiento = prompt("La temperatura es invalida, por favor reingrese.");
			}
		temperaturaAlmacenamiento = parseInt(temperaturaAlmacenamiento);

		if(temperaturaAlmacenamiento%2==0)
		{
			contadorTemperaturasPares++;
		}
		else
		{
			contadorTemperaturasImpares++;
		}

		if(contadorMarca == 0)
		{
			pesoMaximo = peso;
			marcaPesoMax = marca;
			pesoMinimo = peso;
			marcaPesoMin = marca;
		}
		else
		{
			if(peso>pesoMaximo)
			{
				pesoMaximo = peso;
				marcaPesoMax = marca;
			}
			else
			{
				pesoMinimo = peso;
				marcaPesoMin = marca;
			}
		}

		if(temperaturaAlmacenamiento<0)
		{
			contadorAlmacenamientoMenosCero++;
		}

		respuesta = prompt("¿Desea seguir?");

	}

	promediopesos = acumuladorPeso/contadorMarca;

	//alert(contadorTemperaturasPares+" "+marcaPesoMax+" "+contadorAlmacenamientoMenosCero+" "+promediopesos+" "+pesoMaximo+" "+pesoMinimo);
	alert("Nada");

}
