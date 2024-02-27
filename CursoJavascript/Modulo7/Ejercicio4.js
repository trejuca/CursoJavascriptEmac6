function* recorrerDom(palabraDeBusqueda, nodo) {
	
	//console.log([nodo].length)
	const nodosPorVisitar = [nodo]
	
	while(nodosPorVisitar.length > 0) {
		const nodoActual = nodosPorVisitar.shift()
		//console.log(nodoActual)
		if (nodoActual.textContent.includes(palabraDeBusqueda)) {
			yield {tipo:"Aviso", nodo: nodoActual}
		} else {
			yield {tipo:"Nodo", nodo: nodoActual}
			nodosPorVisitar.push(...nodoActual.children)
		}
	}

}

const nodoRaiz = document.documentElement
const palabraBusqueda = "Parrafo"


for (const resultado of recorrerDom(palabraBusqueda, nodoRaiz)) {
	console.log(resultado.tipo)
}