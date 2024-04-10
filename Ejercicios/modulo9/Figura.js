// Figura.js
// Clase abstracta padre de toda la jerarqui de clases

class Figura {
	
	// Constructor de la clase que reibe 3 parametros con valores predeterminados
	constructor(area = 0.0, perimetro = 0.0, color = "blanco") {
		
		// Si trata de crear un objeto de tipo Figura de manera explicita
		// se lanza un error
		if (new.target === Figura) {
			throw new Error("Figura es clase abstracta. No se puede instanciar objetos.")	
		}
		// Se inicializan las variables de instancia
		this._area = area
		this._perimetro = perimetro
		this._color = color
	}
	
	/**
		Lines 22 - 52 Metodos setter and getter
	 */
	calcularArea() {
		return -1
	}
	
	calcularPerimetro() {
		return -1
	}
	
	set area(area) {
		this._area = area
	}
	
	get area() {
		return this._area
	}
	
	set perimetro(perimetro) {
		this._perimetro = perimetro
	}
	
	get perimetro() {
		return this._perimetro
	}
	
	set color(color) {
		this._color = color
	}
	
	get color() {
		return this._color
	}	
}

// Exportar la clase
module.exports = Figura