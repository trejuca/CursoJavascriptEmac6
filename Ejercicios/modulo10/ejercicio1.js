// Productor
function fetchData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = "Datos correctos"
			if (data) {
				resolve(data)
			} else {
				reject("error al obhtener los datos")
			}
		}, 2000)
	})
}

const promise = fetchData()
// Consumidor
promise
	.then((response) => {
		console.log(response)
	})
	.catch((error) => {
		console.log(error)
	})