// Ejericici1.js
// Iliustar conceptos basicos del uso de los simbolos

//Crear un objeto y agregar propiedades normales
// y propiedades de tipo symbol
let usuario = {}

const correo1 = Symbol("correo")
const correo2 = Symbol("correo")

usuario.nombre = "Juan"
usuario.edad = 35

usuario[correo1] = "correo1@correo,com"
usuario[correo2] = "correo2@correo,com"

// Consultar las propiedades normales del objeto (no symbol)
console.log(Object.keys(usuario))
// Consultar solo las propiedades de tipo symbol
console.log(Object.getOwnPropertyNames(usuario))
// Serializar el objeto
console.log(JSON.stringify(usuario))

// Acceder a las propiedades de tipo Symbol en el objeto
console.log(usuario[correo1])
console.log(Object.getOwnPropertySymbols(usuario))