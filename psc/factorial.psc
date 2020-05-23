// Hallar el factorial de un numero

Algoritmo factorial
	Definir n Como Entero
	Escribir "Ingrese un numero"
	Leer n
	
	factorialFunc(n)
	
FinAlgoritmo

Funcion factorialFunc(a)
	// 5 * 4 * 3 * 2 * 1
	// 5 * 4!
	Definir temp Como Entero
	temp = 1
	
	Para x = 1 Hasta a Hacer
		temp = temp * x
	FinPara
	
	Escribir "Factorial de " a " es " temp
FinFuncion
