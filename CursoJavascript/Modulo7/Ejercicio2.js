const crearIterable = function(data) {
	return {
		data: data,
		index: 0,
		[Symbol.iterator]() {
			return {
				next: () => {
					if (this.index < this.data.legth) {
						return {
							value: this.data[this.index++],
							done: false
						}
					} else {
						return { done: true }
					}
				}
			}
		}
	}
}

const iterable1 = crearIterable([1,2,3,4])
console.log(iterable1)
for (const elemento of iterable1.data) {
	console.log(elemento)
}