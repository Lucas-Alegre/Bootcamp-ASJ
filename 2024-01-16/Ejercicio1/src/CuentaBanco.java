import java.util.Scanner;
import java.util.Set;
import java.util.Arrays;
import java.util.HashSet;

public class CuentaBanco {
	// -----------ejercicio-1---------------------
	/*
	 * public static void main(String[] args) { // TODO Auto-generated method stub
	 * System.out.println(cajero()); }
	 * 
	 * public static int dineroInicial = 10000; public static String
	 * ultimosMovimientos = "";
	 * 
	 * public static String cajero() { opciones(); Scanner input = new
	 * Scanner(System.in); int valor = input.nextInt();
	 * 
	 * while (valor != 0) { switch (valor) { case 1: extraer(); break; case 2:
	 * depositar(); break;
	 * 
	 * case 3: System.out.println("Su saldo actual es de: " + consultarSaldo());
	 * break; case 4: System.out.println(getUltimosMovimientos()); break; default:
	 * System.out.
	 * println("Su opción es incorrecta, por favor ingrese una opción valida");
	 * 
	 * } opciones(); valor = input.nextInt(); } return
	 * "¡Hasta luego, los esperamos pronto!"; }
	 * 
	 * public static void opciones() { System.out.println("Ingrese una opción");
	 * System.out.println("------------------"); System.out.println("1- EXTRAER");
	 * System.out.println("2- DEPOSITAR"); System.out.println("3- CONSULTAR SALDO");
	 * System.out.println("4- VER ÚLTIMOS MOVIMIENTOS");
	 * System.out.println("0- SALIR"); System.out.println("------------------"); }
	 * 
	 * public static void extraer() {
	 * System.out.println("Ingrese el monto a extraer"); Scanner inputExtraer = new
	 * Scanner(System.in); int montoExtraer = inputExtraer.nextInt(); if
	 * (montoExtraer <= dineroInicial) { dineroInicial -= montoExtraer;
	 * ultimosMovimientos += "Extraido: $" + montoExtraer + "\n"; } }
	 * 
	 * public static void depositar() {
	 * System.out.println("Ingrese el monto a depositar"); Scanner inputDepositar =
	 * new Scanner(System.in); int montoDepositar = inputDepositar.nextInt();
	 * dineroInicial += montoDepositar; ultimosMovimientos += "Depositado: $" +
	 * montoDepositar + "\n"; }
	 * 
	 * public static int consultarSaldo() { ultimosMovimientos +=
	 * "Consultado saldo: $" + dineroInicial + "\n"; return dineroInicial; }
	 * 
	 * public static String getUltimosMovimientos() { return ultimosMovimientos; }
	 */

	// -----------ejercicio-2---------------------
	/*
	 * public static void main(String[] args) { // TODO Auto-generated method stub
	 * alterarArray(); }
	 * 
	 * public static void alterarArray() { int[] arrayNumeros = new int[15]; int i =
	 * 0; Scanner input = new Scanner(System.in);
	 * 
	 * //Solicito los numeros while (i < 15) {
	 * System.out.println("Ingrese un Numero"); int valor = input.nextInt();
	 * arrayNumeros[i] = valor; i++; } //Altero el array int[] arrayAux = new
	 * int[15]; for (int j = 0; j < arrayNumeros.length; j++) { if (j == 14) {
	 * arrayAux[0] = arrayNumeros[j]; }else { arrayAux[j + 1] = arrayNumeros[j]; } }
	 * //Imprimo el nuevo resultado for(int k = 0; k < arrayAux.length; k++) {
	 * System.out.println("Elemento: "+ k+" === "+arrayAux[k]); } }
	 */

	/*
	 * --------EJERCICIO3---------------------------- public static void
	 * main(String[] args) { // TODO Auto-generated method stub arrayAlterado(); }
	 * 
	 * public static void arrayAlterado() { String numerosPares = ""; String
	 * numerosImpares = ""; int i = 0; int numero = 0; int[] arrayNumeros = new
	 * int[20];
	 * 
	 * //Se ingresaan 20 numeros aleatorios while (i < 20) { numero = (int)
	 * (Math.random() * 100 + 1); arrayNumeros[i] = numero; i++; }
	 * 
	 * //Se separan los numeros pares y los impares for (int j = 0; j <
	 * arrayNumeros.length; j++) { if (arrayNumeros[j] % 2 == 0) { numerosPares +=
	 * arrayNumeros[j] + "-"; } else { numerosImpares += arrayNumeros[j] + "-"; } }
	 * String[] par = numerosPares.split("-"); String[] impar =
	 * numerosImpares.split("-");
	 * 
	 * int[] valoresPar = new int[par.length]; int[] valoresImpar = new
	 * int[impar.length]; for (int k = 0; k < valoresPar.length; k++) {
	 * valoresPar[k] = Integer.parseInt(par[k]); } for (int k = 0; k <
	 * valoresImpar.length; k++) { valoresImpar[k] = Integer.parseInt(impar[k]); }
	 * 
	 * //Se concatenan los array par e impar int[] res = new int[valoresPar.length +
	 * valoresImpar.length]; int l = 0; for (l = 0; l < valoresPar.length; l++) {
	 * res[l] = valoresPar[l];
	 * 
	 * } for (int a = 0; a < valoresImpar.length; a++) { res[l] = valoresImpar[a];
	 * l++; }
	 * 
	 * //Se imprime el array for (int k = 0; k < res.length; k++) {
	 * System.out.println("posicion " + k + "  ===   " + res[k]); } }
	 */

	/*
	 * --------EJERCICIO4---------------------------- public static void
	 * main(String[] args) { // TODO Auto-generated method stub crearMatriz(); }
	 * 
	 * public static void crearMatriz() { int[] numToInssert = new int[9];
	 * 
	 * int numeros[] = new int[9]; int i = 0; int num = 0; while (i <
	 * numeros.length) {
	 * 
	 * boolean repetido; do { repetido = false; num = generaNumeroAleatorio();
	 * 
	 * for (int j = 0; j < numeros.length && !repetido; j++) { if (numeros[j] ==
	 * num) { repetido = true; } } } while (repetido);
	 * 
	 * numeros[i] = num; i++; }
	 * 
	 * int [][] matriz = {{numeros[0],numeros[1],numeros[2]},{numeros[3],
	 * numeros[4], numeros[5]}, {numeros[6],numeros[7],numeros[8]}};
	 * 
	 * for (int p = 0; p< matriz.length; p++) { for (int j = 0; j< matriz[0].length;
	 * j++) { System.out.print(matriz[p][j]+" "); } System.out.println(""); } }
	 * 
	 * public static int generaNumeroAleatorio() { int numero = (int) (Math.random()
	 * * 100 + 1); return numero; }
	 */

	/* -----------EJEMPLO5-----------------------

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		crearMatriz();
	}

	public static void crearMatriz() {
		int[] numToInssert = new int[9];

		int numeros[] = new int[9];
		int i = 0;
		int num = 0;
		while (i < numeros.length) {

			boolean repetido;
			do {
				repetido = false;
				num = generaNumeroAleatorio();

				for (int j = 0; j < numeros.length && !repetido; j++) {
					if (numeros[j] == num) {
						repetido = true;
					}
				}
			} while (repetido);

			numeros[i] = num;
			i++;
		}

		int[][] matriz = { { numeros[0], numeros[1], numeros[2] }, { numeros[3], numeros[4], numeros[5] },
				{ numeros[6], numeros[7], numeros[8] } };

		for (int p = 0; p < matriz.length; p++) {
			for (int j = 0; j < matriz[0].length; j++) {
				System.out.print(matriz[p][j] + " ");
			}
			System.out.println("");
		}
		opciones();
		Scanner input= new Scanner(System.in);
		int numInput=input.nextInt();
		switch(numInput) {
		case 1:
			opcionesFilas();
			numInput=input.nextInt();
			switch(numInput) {
			case 1:
				System.out.println("Sumar fila1: "+ (matriz[0][0] + matriz[0][1] +matriz[0][2]) );
				break;
			case 2:
				System.out.println("Sumar fila2: "+ (matriz[1][0] + matriz[1][1] +matriz[1][2]));
				break;
			case 3:
				System.out.println("Sumar fila3: "+ (matriz[2][0] + matriz[2][1] +matriz[2][2]));
				break;
			}
			break;
		case 2:
			opcionesColumnas();
			numInput=input.nextInt();
			switch(numInput) {
			case 1:
				System.out.println("Sumar Columna1: "+ (matriz[0][0] + matriz[1][0] +matriz[2][0]));
				break;
			case 2:
				System.out.println("Sumar Columna2: "+ (matriz[0][1] + matriz[1][1] +matriz[2][1]));
				break;
			case 3:
				System.out.println("Sumar Columna3: "+ (matriz[0][2] + matriz[1][2] +matriz[2][2]));
				break;
			}
			break;
		}
	}

	public static int generaNumeroAleatorio() {
		int numero = (int) (Math.random() * 100 + 1);
		return numero;
	}

	public static void opciones() {
		System.out.println("INGRESE UNA OPCION");
		System.out.println("-1 Filas");
		System.out.println("2- Columnas");
	}

	public static void opcionesFilas() {
		System.out.println("INGRESE UNA OPCION");
		System.out.println("-1 Fila 1");
		System.out.println("-2 Fila 2");
		System.out.println("-3 Fila 3");
	}

	public static void opcionesColumnas() {
		System.out.println("INGRESE UNA OPCION");
		System.out.println("-1 Columna 1");
		System.out.println("-2 Columna 2");
		System.out.println("-3 Columna 3");
	}*/
	
}
