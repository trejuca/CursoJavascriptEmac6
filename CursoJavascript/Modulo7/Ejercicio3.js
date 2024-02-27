const objetoIterable = {
	clave1: "valor1",
	clave2: "valor2",
	clave3: "valor3",
	[Symbol.iterator]: function() {
		const keys = Object.keys(this);
		let index = 0;
		return {
			next: () => {
				if (index < keys.length) {
					const key = keys[index++]
					return {
						value: [key, this[key]],
						done: false
					};
				} else {
					return { done: true };
				}
			},
		};
	},
	forEach: function(callback) {
		for (const elemento of this) {
			callback(elemento)
		}
	}
};

// 1a Forma. Iterar sobre un objeto con un for..of
//for (const elemento of objetoIterable) {
//	console.log(elemento)
//}
//
////2a Forma. Iterar sobre un objeto con while
//const iterador = objetoIterable[Symbol.iterator]()
//let resultado = iterador.next()
//while(!resultado.done) {
//	console.log(resultado.value)
//	resultado = iterador.next()
//}

// 3a Forma. Iterar sobre un objeto con un forEach
objetoIterable.forEach(elemento => {
	console.log(elemento)
})


