// ejercicio3.js
// Ilustraer concepto de simbolos globales

// Crear un primer simbolo. Este quedara registrado para su uso posterior
const simbolo1 = Symbol.for("simbolo1")
// Obtener el simbolo creado previamente
const simbolo2 = Symbol.for("simbolo1")
// Comparar ambos simbolos para verificar si ambos son el mismo
console.log(simbolo1 === simbolo2)