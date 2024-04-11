// ejercicio2.js 
// Prueba del metodo fetch / async-await

// Metodo fetch

const URL = "https://jsonplaceholder.typicode.com/albums"

const consultarApi = () => {
	
	fetch(URL)
		.then(response => response.json())
		.then(data => {
			console.log(data)
		})
}

// FETCH - ASYNC/AWAIT
const consultarApi2 = async () => {
	
	const respuesta = await fetch(URL)
	const resultado = await respuesta.json()
	console.log(resultado)
	resultado.forEach(valor => {
		console.log(valor)
	})
}

consultarApi2()