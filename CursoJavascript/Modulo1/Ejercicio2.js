

// Serializar un Mapa a una cadena con formato JSON
function replacer(clave, valor) {
	if (valor instanceof Map) {
		return {
			dataType: 'Map',
			value: Array.from(valor.entries())
		}
	} else {
		return valor;
	}
}

const nuevoMapa = new Map()
nuevoMapa.set([],30)
nuevoMapa.set(function() {}, "calle 1 colonia 1")
nuevoMapa.set({},30)

let mapaCadena = JSON.stringify(nuevoMapa, replacer)
console.log(mapaCadena)


// Desserializar una caden con formato JSON a un Mapa
function reviver(clave, valor) {
	//console.log(valor, typeof valor)
	if (typeof valor === 'object' && valor !== null) {
		if (valor.dataType === 'Map') {
			return new Map(valor.value)
		}
	}
	return valor
}

console.log(JSON.parse(mapaCadena, reviver))








