
const tablaComponent = {
	tabla: null,
	nombreColumnas: {},
	construirTabla: function({id, columnas}) {
		
		let tablaTemp = document.getElementById(id)
		
		if (!tablaTemp) {
			this.tabla = tablaTemp
			this.tabla = document.createElement("table")
			this.tabla.id = id
			
			const encabezado = this.tabla.createTHead().insertRow()
			this.nombreColumnas = columnas
			
			Object.keys(columnas).forEach(function(key, index) {
				encabezado.insertCell(index).innerHTML = 
					`<b>${columnas[key]}</b>`
			})
			encabezado.insertCell(
				Object.keys(columnas).length).innerHTML = "<b>Acciones</b>"
				
			document.body.appendChild(this.tabla)
		}
		
	},
	construirFila: function() {
		
		if (Object.keys(this.nombreColumnas).length === 0) {
			return {}
		}
		
		const fila = this.tabla.insertRow()
		const celdas = {}
		
		
		Object.keys(this.nombreColumnas).forEach(function(elemento, index) {
			celdas[elemento] = fila.insertCell(index)
		})
		celdas['acciones'] = fila.insertCell(
			Object.keys(this.nombreColumnas).length)
		
		return {
			fila,
			celdas
		}
	},
	actualizarTabla: function(usuario) {
		
		const datosTabla = this.construirFila()
		
		Object.keys(datosTabla.celdas).forEach(function(elemento, index) {
			datosTabla.celdas[elemento].innerHTML = (usuario[elemento] !== undefined)
				? usuario[elemento]
				: ""
		})
		datosTabla.celdas['acciones'].appendChild(function() {
			
			// Definir elementos agregar
			const linkEliminar = document.createElement("a")
			const linkActualizar = document.createElement("a")
			
			// Personalizar cada link
			linkEliminar.innerText = "Eliminar"
			linkEliminar.setAttribute("href", "")
			linkEliminar.addEventListener("click", function(e) {
				e.preventDefault()
				
				if (localStorage.getItem(usuario['id']) !== null) {
					localStorage.removeItem(usuario['id'])
				}
			})
			
			linkActualizar.innerText = "Actualizar"
			linkActualizar.setAttribute("href", "")
			linkActualizar.addEventListener("click", function(e) {
				e.preventDefault()
				cargarUsuario(usuario) 
			})
			
			const div = document.createElement("div")
			div.appendChild(linkEliminar)
			div.appendChild(linkActualizar)	

			return div
		}())
	}
}





