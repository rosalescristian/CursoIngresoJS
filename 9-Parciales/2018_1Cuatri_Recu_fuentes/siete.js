function mostrar()
{

	var nota;
	var sexo;
	var contador = 0;
	var acumulador=0;
	var promedio;
	var min=0;
	var max=0;

	isNaN();
	
	while(contador<5)
	{
		nota = prompt("Ingrese su nota (entre 0 y 10)");
		nota = parseInt(nota);

			while(isNaN(nota) || nota <0 || nota > 10)
			{
				nota=prompt("Nota Erronea, ingrese un nro entre 0 y 10");
				nota = parseInt(nota);
				acumulador = nota + acumulador;
				acumulador = parseInt(acumulador);
			}
		acumulador = nota + acumulador;	
		acumulador = parseInt(acumulador);

		sexo = prompt("Ingrese su sexo; F o M");
	
			while(isNaN(sexo)==false || sexo != "f" && sexo !="m")
			{
				sexo = prompt("Sexo erroneo, ingrese su sexo; F o M");
			}
		contador = contador+1;				

		if(contador==1)
			{
				max=nota;
				sexomax=sexo;
			}
			else{
				if(nota>max)
				{
					max=nota;
					sexomax=sexo;
				}



/*
			}
			if(max<nota || max == 0)
			{
				max = nota;
				max	= parseInt(max);
			}	
			if(min>nota || min == 0)
			{
				min = nota;
				min = parseInt(min);
	}
*/
	}

	promedio = acumulador / 5;
	promedio = parseInt(promedio);
	
	alert("El promedio de las notas es "+promedio);
	alert("La nota mas alta es "+max);
	alert("La nota mas baja es "+min);
	

	//console.log(nota);
	//console.log(sexo);

}
