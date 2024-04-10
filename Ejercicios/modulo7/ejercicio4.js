// ejercicio4.js
// Ilustrar el uso de un iterador de un objeto Array

const arreglo = ["unos", "dos", "tres"]
// Obtener el iterador predeterminado del objeto
let iterador = arreglo[Symbol.iterator]()
// Mover el iterador a la primera posicion
let resultado = iterador.next()

// Si la propiedad es false se itera
while(!resultado.done) {
	// Se obtiene el valor sobre el que se itera
	// sobre el cual se encuentra el iterador
	console.log(resultado.value)
	resultado = iterador.next()
}
