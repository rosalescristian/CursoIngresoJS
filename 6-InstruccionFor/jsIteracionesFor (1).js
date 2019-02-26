function mostrar()
{
	//for (CREAMOS VARIABLE;COMPARACION LOGICA;ACCION){}
	//for ( ; ; ){}
	// cada termino del FOR es independiente; no estan relacionados uno con el otro, solo el segundo
	//es el q me da la logica es la del medio y una vez q paso la primera vez vuelve al tercer termino.
/*	
	var contador;
	contador = 0;
	while(contador <10)
	{
		contador=contador+1;
	}
*/
// el FOR es igual que WHILE solo que en 1 linea

	var contador;
	contador = 0;
	
	for(;contador<10;)
	{
		contador++;
		console.log(contador);
	}


}