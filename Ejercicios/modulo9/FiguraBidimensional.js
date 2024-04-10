// FiguraBidimensional.js
// Clase que extiende de Figura en la jerarquia de clases

// Importar la clase 
const Figura = require('./Figura')


class FiguraBidimensional extends Figura {
	
	// Constructor de la clase que reibe 2 parametros con valores predeterminados
	constructor(area = 0.0, perimetro = 0.0) {
		super(area, perimetro)
	}
}
// Exportar la clase
module.exports = FiguraBidimensional