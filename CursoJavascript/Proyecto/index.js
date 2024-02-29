const API_USUARIO = "users"
const URL_USUARIOS = `https://jsonplaceholder.typicode.com/${API_USUARIO}`
const TABLES_PREFIX = "table_"

/**
	Consultar la API de usuarios
	
	@param {id} 	id del usuario a buscar
 */
const consultarUsuario = async (id) => {
	
	try {
		const usuario = await fetch(`${URL_USUARIOS}/${id}`)
		
		if (!usuario.ok) {
			throw new Error(`No se econtro el id: ${id}`)	
		}
		
		const usuarioJson = await usuario.json()
		
		cargarUsuario(usuarioJson)	
		
	} catch (error) {
		alert(error.message)
	}
}

/**
	Leer el id del usuario del formulario de busqueda
 */
const leerUsuarioId = () => {
	const usuarioId = document.querySelector("#busqueda").value
	consultarUsuario(usuarioId)
}

/**
	Carga el usuario en el formulario
 */
const cargarUsuario = (usuario) => {
	Object.keys(usuario).forEach((llave) => {
		let nodo = document.querySelector(`#${llave}`)
		
		if (nodo !== null) {
			nodo.value = usuario[llave]
		}
	})
}

/**
	Guardar el usuario en localstorage
 */
const guardarUsuario = () => {
	
	const datosDeInicializacion = inicializarAplicacion()
	tablaComponent.actualizarTabla(datosDeInicializacion.usuario)

	localStorage.setItem(
		datosDeInicializacion.usuario.id, 
		JSON.stringify(datosDeInicializacion.usuario))
}

const leerRegistros = () => {
	
	inicializarAplicacion()
	
	for (let index = 0; index < localStorage.length; index++) {
		const usuario = JSON.parse(localStorage.getItem(localStorage.key(index)))
		tablaComponent.actualizarTabla(usuario)
	}
}

const inicializarAplicacion = () => {
	
	const usuario = {}
	const nombreColumnas = {}
	
	document.querySelectorAll(".usuario-form").forEach(nodo => {
		nombreColumnas[nodo.id] = nodo.getAttribute("data-nombre-columna")
		usuario[nodo.id] = nodo.value
		nodo.value = ""
	})
	
	tablaComponent.construirTabla(
		{
			id: `${TABLES_PREFIX}${API_USUARIO}`,
			columnas: nombreColumnas
		}
	)
	
	return {
		usuario,
		nombreColumnas
	}
}








