const tecnologias = [
	"Java",
	"Javascript",
	"Python",
	"React"
]
const personas = [
	{nombre:"Juan",edad:30},
	{nombre:"Maria",edad:25},
	{nombre:"Carlos",edad:20},
	{nombre:"Ana",edad:35},
]

const numeros = [10, 20, 30, 40]

// 1. Obtener un arreglo del cuadrado de cada numero
// del arreglo numeros
function elevarCuadrado(numero) {
	return numero ** 2
}
const cuadrados = numeros.map(elevarCuadrado)
//console.log(cuadrados)

// 2. Obtener todos los numeros mayores a 20 del
// arreglo numeros
const mayoresA20 = numeros.filter(function(numero) {
	return numero > 20
})
//console.log(mayoresA20)

// 3. Obtener todas las tecnologias diferentes a React
const techs = tecnologias.filter((tecnologia) => tecnologia !== "React");
//console.log(techs)

// 4. Obtener la o las personas mayores a 25 anios en el 
// areglo personas
const personasMayores25 = personas.find(persona => persona.edad === 20)
//console.log(personasMayores25)

// 5. Obtener la o las personas mayores a 25 anios en el 
// areglo personas
const personasIgualA20 = personas.findIndex(persona => persona.edad === 35)
//console.log(personasIgualA20)

// 6. Obtener un valor entre las entradas del arreglo
const seIncluye = tecnologias.includes("Javascript")
//console.log(seIncluye)

// 7. Determinar si al menos uno de los elementos coincide con 
// la condicion proporcionada
const coindiceAlmenosUno = numeros.some(numero => numero < 0)
console.log(coindiceAlmenosUno)

// 8.  Determinar si todos los elementos del arreglo
// cumplen con la condicion
const coindicenTodos = numeros.every(numero => numero > 30)
console.log(coindicenTodos)

// 9. 
const todos = numeros.reduce((total, numero) => numero + total, 0)
console.log(todos)