
class Figura {
	
	constructor(area = 0.0, perimetro = 0.0, color = "blanco") {
		
		if (new.target === Figura) {
			throw new Error("No se puede instanciar desde la clase Figura")
		}
		
		this._area = area
		this._perimetro = perimetro
		this._color = color
	}
	
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

module.exports = Figura


