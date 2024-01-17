import java.util.Scanner;

public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		OperacionMatematica operacion=new OperacionMatematica(4,2);
		System.out.println(operacion.sumar());
		System.out.println(operacion.restar());
		System.out.println(operacion.multiplicar());
		System.out.println(operacion.dividir());
		System.out.println(operacion.toString());
		operacion.setNumero1(10);
		operacion.setNumero2(5);
		System.out.println(operacion.sumar());
		System.out.println(operacion.toString());
		
		//--------------EJERCICIO-2--------------------------
		//Persona1-----------------------------
		Persona persona1= new Persona();
		System.out.println(persona1.toString());
		
		//Persona2-----------------------------
		System.out.println("Ingrese un nombre");
		Scanner input = new Scanner(System.in);
		String nombre = input.nextLine();
		
		System.out.println("Ingrese una edad");
		Scanner input2 = new Scanner(System.in);
		int edad= input2.nextInt();
		
		System.out.println("Ingrese un sexo (H | M)");
		Scanner input3 = new Scanner(System.in);
		String sexosTRING= input3.nextLine();
		char sexo= sexosTRING.charAt(0);
		
		System.out.println("Ingrese un peso");
		Scanner input4 = new Scanner(System.in);
		int peso= input4.nextInt();
		
		System.out.println("Ingrese una altura");
		Scanner input5 = new Scanner(System.in);
		int altura= input5.nextInt();
		
		Persona persona2= new Persona(nombre, edad, sexo);
		persona2.setPeso(peso);
		persona2.setAltura(altura);
		
		System.out.println(persona2.toString());
		
		//Persona3-----------------------------
		System.out.println("Ingrese un nombre");
		Scanner entradap3 = new Scanner(System.in);
		String nombrep3 = entradap3.nextLine();
		
		System.out.println("Ingrese una edad");
		Scanner entradaedad = new Scanner(System.in);
		int edadp3= entradaedad.nextInt();
		
		System.out.println("Ingrese un sexo (H | M)");
		Scanner inputsexo = new Scanner(System.in);
		String sexosp3String= inputsexo.nextLine();
		char sexop3= sexosp3String.charAt(0);
		Persona persona3= new Persona(nombrep3, edadp3, sexop3);
		System.out.println(persona3.toString());
	}

}
