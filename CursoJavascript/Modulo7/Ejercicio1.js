const usuario = {
	nombre: "Juan",
	apellido: "Trejo",
	[Symbol("email")]: "correo@correo.com"
}

const objetoTransformado = {}
Object.getOwnPropertySymbols(usuario).forEach(simbolo => {
	objetoTransformado[simbolo.toString()] = usuario[simbolo]
})

console.log(objetoTransformado)

const objetoFinal = {
	...usuario,
	...objetoTransformado
}

console.log(JSON.stringify(objetoFinal))