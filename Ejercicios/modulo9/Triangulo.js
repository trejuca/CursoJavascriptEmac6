// Triangulo.js
// Clase que extiende de FiguraBidimensional en ls jerarquia de clases

// Importar la clase 
const FiguraBidimensional = require('./FiguraBidimensional')

class Triangulo extends FiguraBidimensional {
	
	// Constructor de la clase que reibe 4 parametros con valores predeterminados
	constructor(base = 0.0, altura  = 0.0, area = 0.0, perimetro = 0.0) {
		super(area, perimetro)
		this._base = base
		this._altura = altura
	}
	
	/**
		Lines 19 - 41 Metodos setter and getter
	 */
	set base(base) {
		this._base = base
	}
	
	get base() {
		return this._base
	}
	
	set altura(altura) {
		this._altura = altura
	}
	
	get altura() {
		return this._altura
	}
	
	calcularArea() {
		return (this._base * this._altura) / 2
	}
	
	calcularPerimetro() {
		return 3 * this._base
	}
}

// Exportar la clase
module.exports = Triangulo