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

console.log(fetchData())