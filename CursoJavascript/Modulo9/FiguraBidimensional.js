const Figura = require('./Figura')

class FiguraBidimensional extends Figura {

	constructor(area, perimetro) {
		
		if (new.target === FiguraBidimensional) {
			throw new Error("No se puede instanciar desde la clase FiguraBidimensional")
		}
		
		super(area, perimetro)
	}
}

module.exports = FiguraBidimensional