import java.util.Scanner;

public class ejercicios {

	public static void main(String[] args) {
		/*-------------------- Ejercicio Uno---------------------
		Scanner scanner = new Scanner(System.in);
		System.out.println("Ingrese los 3 angulos de un triangulo");
		System.out.println("Angulo N°-1");
		int angulo1 = scanner.nextInt();
		
		System.out.println("Angulo N°-2");
		int angulo2 = scanner.nextInt();
		
		System.out.println("Angulo N°-3");
		int angulo3 = scanner.nextInt();
		String resultado = (angulo1 + angulo2 + angulo3) == 180 ? "Valido" : "No valido";
		
		System.out.println("Los angulos ingresados forman un triangulo " + resultado + ".");*/

		/*-------------------- Ejercicio Dos---------------------
		 
		String myString = "";
		Scanner cadena = new Scanner(System.in);
		System.out.println("Escribe una cadena de caracteres:");
		// Probar nextInt()
		myString = cadena.nextLine();
		
		char myChar = myString.charAt(0);
		if (myChar == '1'||myChar == '2'||myChar == '3'||myChar == '4'||myChar == '5'||myChar == '6'
				||myChar == '7'||myChar == '8'||myChar == '9'||myChar == '0') {
			System.out.println("El primer caracter es un numero");
		}else {
			System.out.println("El primer caracter es una letra");
		}*/
		// Metodo Character.isDigital Investigar

		/*-------------------- Ejercicio Tres---------------------
		
		int numero1 = 0;
		int numero2 = 0;
		int suma=0; 
		
		Scanner cadena = new Scanner(System.in);
		System.out.println("Escribe un numero:");
		numero1 = cadena.nextInt();
		Scanner cadena2 = new Scanner(System.in);
		System.out.println("Escribe otro numero:");
		numero2 = cadena2.nextInt();
		
		for(int i=numero1; i<numero2+1; i++) {
			suma+=i;
		}
		System.out.println("res: " + suma);*/

		/*
		 * --------------------- Ejercicio Cuatro---------------------
		 * 
		 * Scanner scanner = new Scanner(System.in);
		 * System.out.println("Ingrese un numero"); int n = scanner.nextInt(); int suma
		 * = 0; for (int i = 1; i < n; i++) { if (n % i == 0) { suma += i; } }
		 * System.out.println((n == suma) ? "Numerop perfecto" :
		 * "El numero no es perfecto");
		 */

		/*-------------------- Ejercicio Cinco---------------------
		
		int numero = 0;
		String resultado2="";
		
		Scanner cadena = new Scanner(System.in);
		System.out.println("Escribe un numero:");
		numero = cadena.nextInt();
		
		for(int i=0; i<numero; i++) {
			String resultado="";
			
			if(i%2==0) {
				for(int j=0; j<numero; j++) {
					resultado+="*";
				}
			}
			if(i%2==1) {
				for(int j=0; j<numero-1; j++) {
					resultado+="*";
				}
			}
			//Se puede evitar el doble for si uso ternario en ********
			resultado2+=resultado + "\n";
		}
		
		System.out.println(resultado2);*/

	}

}
