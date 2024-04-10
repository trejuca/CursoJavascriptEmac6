// Circulo.js
// Clase que extiende de FiguraBidimensional en ls jerarquia de clases

// Importar la clase 
const FiguraBidimensional = require('./FiguraBidimensional')

class Circulo extends FiguraBidimensional {
	
	// Constructor de la clase que reibe 4 parametros con valores predeterminados
	constructor(radio = 0.0, circunferencia = 0.0, area = 0.0, perimetro = 0.0) {
		//Mandar a llamar al sontructor padre
		super(area, perimetro)
		//Setear valores locales
		this._radio = radio
		this._circunferencia = circunferencia
	}
	
	/**
		Lines 21 - 43 Metodos setter and getter
	 */
	calcularArea() {
		return Math.PI * Math.pow(this._radio,2)
	}
	
	calcularPerimetro() {
		return 2 * Math.PI * this._radio
	}
	
	set radio(radio) {
		this._radio = radio
	}
	
	get radio() {
		return this._radio
	}
	
	set circunferencia(circunferencia) {
		this._circunferenciao = circunferencia
	}
	
	get circunferencia() {
		return this._circunferencia
	}
}
// Exportar la clase
module.exports = Circulo