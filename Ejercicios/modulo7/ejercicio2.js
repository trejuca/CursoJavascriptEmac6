// ejercicio2.js
// Combinsr propiedades normales de un objeto
// con propiedades de tipo simbolo

// Se crea el objeto y se agregab porpiedades
let usuario = {
	nombre: 'juan',
	edad: 35
}
// Se agregan propiedades de tipo symbol al objeto usuario
usuario[Symbol("correo")]= 'correo1@correo,com',
usuario[Symbol("correo")]= 'correo2@correo,com'

// Se itera sobre las prpiedades de tipo symbol del objeto
// y se convierten en propiedades normales y se elimina
// la propiedad de simbolos
Object.getOwnPropertySymbols(usuario).forEach(simbolo => {
	usuario[simbolo.description + Math.random()] = usuario[simbolo]
	delete usuario[simbolo]
})

// Se serializa el objeto
console.log(JSON.stringify(usuario))
