// prueba_figura.js
// Archivo para probrar la jerarqui de clases Figura

// Importar las clases
const Triangulo = require('./Triangulo')
const Circulo = require('./Circulo')
const Cuadrado = require('./Cuadrado')
const Figura = require('./Figura')

// Crear un objeto Triangulo y settear valores
const triangulo = new Triangulo(3.0, 12.0, 89.0, 67.09)
triangulo.base = 25.26
triangulo.altura = 89.63
console.log("Area del triangulo: " + triangulo.calcularArea())
console.log("Perimetro del triangulo: "  + triangulo.calcularPerimetro())
console.log("Base del triangulo: "  + triangulo.base)
console.log("Altura del triangulo: "  + triangulo.altura)

// Crear un objeto Circulo y settear valores
const circulo = new Circulo(30.0, 22.0, 1.0, 23.23)
console.log("Area del circulo: " + circulo.calcularArea())
console.log("Perimetro del circulo: "  + circulo.calcularPerimetro())

// Crear un objeto Cuadrado y settear valores
const cuadrado = new Cuadrado(31.0, 120.0, 11.13)
console.log("Area del cuadrado: " + cuadrado.calcularArea())
console.log("Perimetro del cuadrado: "  + cuadrado.calcularPerimetro())

//const figura = new Figura()