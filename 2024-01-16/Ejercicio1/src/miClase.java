import java.util.Scanner;

public class miClase {
	private static Scanner lectura = new Scanner(System.in);
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*System.out.println("Hi world");
		System.out.println("Integer "+ Integer.MIN_VALUE+" -------- "+Integer.MAX_VALUE);
		System.out.println("Double "+ Double.MIN_VALUE+" -------- "+Double.MAX_VALUE);
		System.out.println("Short"+ Short.MIN_VALUE+" -------- "+Short.MAX_VALUE);
		System.out.println("Long " + Long.MIN_VALUE+" -------- "+Long.MAX_VALUE);*/
		
		
		//Ejercitación String to Ascii
		 String myString="";
         
	        // Mostramos un mensaje por pantalla
	        System.out.println("Escribe una palabra:");
	       
	        // Guardo el dato en la variable miNombre.
	        myString=lectura.nextLine();

		
        
		//String myString = "Hola";
		String resultado="";
		
		for(var i = 0; i<myString.length(); i++) {
			char myChar = myString.charAt(i);
			int asci = (int)myChar;	
			resultado += asci + " ";
		}
		
		System.out.println(resultado);
	    
	}

}
