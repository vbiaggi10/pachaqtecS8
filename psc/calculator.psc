// Realizar un programa  en el que se pueda ingresar 2 numeros y ejecutar la operacion que se deba realizar

Algoritmo calculadora
	Definir n1 Como Entero
	Definir n2 Como Entero
	Definir operacion Como Caracter
	Definir continuar Como Caracter
	continuar = "s"
	
	Repetir
		Escribir  "Ingrese el primer numero"
		Leer n1
		Escribir "Ingrese el segundo numero"
		Leer n2
		Escribir "Ingrese que operacion desea realizar (suma/resta/multiplicacion/division)"
		Leer operacion
		
		Segun operacion Hacer
			"suma":
				Escribir "La suma de " n1 "+" n2 " es " n1+n2
			"resta":
				Escribir "La resta de " n1 "-" n2 " es " n1-n2
			"multiplicacion":
				Escribir "La multiplicacion de " n1 "*" n2 " es " n1*n2
			"division":
				Escribir "La division de " n1 "/" n2 " es " n1/n2
		FinSegun
		
		Escribir "Desea continuar? (s/n)"
		Leer continuar
	Hasta Que continuar <> "s"
	
FinAlgoritmo
