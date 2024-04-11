// ejercicio3.js
// Hacer varias peticiones al mismo tiempo

const URL_ALBUMS = "https://jsonplaceholder.typicode.com/albums"
const URL_USERS = "https://jsonplaceholder.typicode.com/users"


// Primera forma. Varias peticiones una tras otra
// Forma no recomendada
const consultarApi = async () => {
	
	//console.log("Iniciando primera consulta ..")
	
	const inicio = performance.now()
	
	const respuesta = await fetch(URL_ALBUMS)
	const resultado = await respuesta.json()
	
	//console.log("Iniciando segunda consulta ..")
	
	const respuesta2 = await fetch(URL_USERS)
	const resultado2 = await respuesta2.json()
	
	const fin = performance.now()
	
	console.log(`Tiempo de ejecucion: ${fin - inicio}`)
	
}

// Segunda forma. Peticiones asincronas
const consultarApi2 = async () => {
	
	console.log("Iniciando consultas..")
	
	const inicio = performance.now()
	
	const [promesa1, promesa2] = await Promise.all([
		fetch(URL_ALBUMS),
		fetch(URL_USERS)
	])
	
	const data1 = await promesa1.json()
	const data2 = await promesa2.json()
	
	const fin = performance.now()
	console.log(`Tiempo de ejecucion: ${fin - inicio}`)
}

consultarApi()

