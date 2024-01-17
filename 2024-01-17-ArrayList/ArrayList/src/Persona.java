import java.util.Random;

public class Persona {
	private String nombre;
	private int edad;
	private int dni = 0;
	private char sexo;
	private int peso;
	private int altura;

	public Persona() {
		this.nombre = "";
		this.edad = 0;
		this.sexo = ' ';
		this.peso = 0;
		this.altura = 0;
		this.dni= generarDNI();
	}

	public Persona(String nombre, int edad, char sexo) {
		this.nombre = nombre;
		this.edad = edad;
		this.sexo = sexo;
	}

	public Persona(String nombre, int edad, int dni, char sexo, int peso, int altura) {
		this.nombre = nombre;
		this.edad = edad;
		this.dni = dni;
		this.sexo = sexo;
		this.peso = peso;
		this.altura = altura;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public int getDni() {
		return dni;
	}

	public void setDni(int dni) {
		this.dni = dni;
	}

	public char getSexo() {
		return sexo;
	}

	public void setSexo(char sexo) {
		this.sexo = sexo;
	}

	public int getPeso() {
		return peso;
	}

	public void setPeso(int peso) {
		this.peso = peso;
	}

	public int getAltura() {
		return altura;
	}

	public void setAltura(int altura) {
		this.altura = altura;
	}

	@Override
	public String toString() {
		return "Persona [nombre=" + nombre + ", edad=" + edad + ", dni=" + dni + ", sexo=" + sexo + ", peso=" + peso
				+ ", altura=" + altura + "]";
	}

	public void calcularMC() {

	}

	public boolean esMayorDeEdad() {
		return this.edad >= 18;

	}

	public String comprobarSexo(char sexo) {
		if (sexo == 'H' || sexo == 'M') {
			if (sexo == this.sexo) {
				return "Se comprobo que es correct0";
			}
			return "Se comprobo que es incorrecta";
		}
		sexo = 'H';
		return "";

	}

	public int generarDNI() {
		Random random = new Random();
		int numeroAleatorio = 10000000 + random.nextInt(90000000);
		return numeroAleatorio;
	}

}
