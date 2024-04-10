// ejercicio6.js
// Crear un objeto iterable, agreando el metodo next y el metodo forEach

const objetoIterable = {
	clave1: "valor7",
	clave2: "valor8",
	clave3: "valor9",
	[Symbol.iterator]: function() {
		const keys = Object.keys(this);
		let index = 0;
		return {
			// Sobre escribir el metodo next
			next: () => {
				if (index < keys.length) {
					const key = keys[index++]
					// DEvolver el objeto que contiene los valores del iterador
					return {
						value: [key, this[key]],
						done: false
					};
				} else {
					return { done: true };
				}
			}
		};
	},
	// Sobre escribir la funcion forEach
	forEach: function(callback) {
		for (const valor of this) {
			callback(valor)
		}
	} 
};

//1a Forma. Iterar sobre un objeto con un for.. of
for (const elemento of objetoIterable) {
	console.log(elemento)
}

//2a Forma.  Iterar sobre un objeto con el metodo next
//const iterador = objetoIterable[Symbol.iterator]()
//let resultado = iterador.next()
//while(!resultado.done) {
//	console.log(resultado.value)
//	resultado = iterador.next()
//}

//3a Forma. Iterar sobre un objeto con el metodo forEach
//objetoIterable.forEach(elemento => {
//	console.log(elemento)
//})






