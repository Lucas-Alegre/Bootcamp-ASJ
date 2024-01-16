import java.util.Scanner;

public class Estructuras {
	private static Scanner lectura = new Scanner(System.in);

	public static void main(String[] args) {
		//Promedio resuelto con for--------------------------------------!
		String myString = "";
		String myString2 = "";

		System.out.println("Escribe cuantas notas desea ingresar:");
		myString = lectura.nextLine();

		int cantidad = Integer.parseInt(myString);
		String[] notas = new String[cantidad];

		for (int i = 0; i < cantidad; i++) {
			Scanner lectura2 = new Scanner(System.in);
			System.out.println("Escribe cuantas notas desea ingresar:");
			//Probar nextInt()
			myString2 = lectura2.nextLine();
			notas[i] = myString2;
		}
		
		int promedio = 0;
		for (int i = 0; i < notas.length; i++) {
			promedio += Integer.parseInt(notas[i]);
		}
		System.out.println("promedio = "+ promedio/notas.length);
		//---------------------------------------------------------------
	}

}
