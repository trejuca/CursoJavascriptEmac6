/**
Convertir un Mapa a Objeto
y vicesversa

 */

// Objeto a Mapa
const objeto = {
	nombre: "Juan",
	apellido: "Trejo"
}
const mapa = new Map(
	Object.entries(objeto)
)
console.log(mapa)

// Mapa a Objeto
const nuevoMapa = new Map()
nuevoMapa.set("edad",30)
nuevoMapa.set("direccion", "calle 1 colonia 1")

const nuevoObjeto = Object.fromEntries(nuevoMapa)
console.log(nuevoObjeto)
console.log(JSON.stringify(nuevoObjeto))