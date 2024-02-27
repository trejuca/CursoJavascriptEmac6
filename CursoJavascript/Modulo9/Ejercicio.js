const Triangulo = require('./Triangulo')
const Circulo = require('./Circulo')
const Cuadrado = require('./Cuadrado')
const Figura = require('./Figura')

// Crear objetos de tipo Circulo, Cuadrado  y Triangulo
const triangulo1 = new Triangulo(3.0, 12.0)
console.log("Area triangulo: " + triangulo1.calcularArea())
console.log("Perimetro triangulo: " + triangulo1.calcularPerimetro())

const circulo1 = new Circulo(4.0)
console.log("Area circulo1: " + circulo1.calcularArea())
console.log("Perimetro circulo1: " + circulo1.calcularPerimetro())

const cuadrado1 = new Cuadrado(14.0)
console.log("Area cuadrado1: " + cuadrado1.calcularArea())
console.log("Perimetro cuadrado1: " + cuadrado1.calcularPerimetro())

const figura = new Figura()
console.log("Area figura: " + figura.calcularArea())
console.log("Perimetro figura: " + figura.calcularPerimetro())