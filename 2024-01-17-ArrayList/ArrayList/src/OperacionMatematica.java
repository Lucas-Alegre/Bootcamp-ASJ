
public class OperacionMatematica {
	private int numero1 = 0;
	private int numero2 = 0;

	public OperacionMatematica(int numerador1, int numerador2) {
		this.numero1 = numerador1;
		this.numero2 = numerador2;
	}

	public int getNumero1() {
		return numero1;
	}

	public void setNumero1(int numero1) {
		this.numero1 = numero1;
	}

	public int getNumero2() {
		return numero2;
	}

	public void setNumero2(int numero2) {
		this.numero2 = numero2;
	}

	public int sumar() {
        return this.numero1+this.numero2;
	}

	public int restar() {
		 return this.numero1-this.numero2;
	}

	public int multiplicar() {
		 return this.numero1*this.numero2;
	}

	public int dividir() {
		 return this.numero1/this.numero2;
	}

	@Override
	public String toString() {

		return "[numero1]: ("+this.numero1+")  [numero2]: ("+this.numero2+")";
	}

}
