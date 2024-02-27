
const Empleado = require('./Empleado')
const EmpleadoAsalariado = require('./EmpleadoAsalariado')
const EmpleadoPorHoras = require('./EmpleadoPorHoras')
const EmpleadoPorComision = require('./EmpleadoPorComision')
const EmpleadoBaseMasComision = require('./EmpleadoBaseMasComision')

const empleadoAsalariado = 
	new EmpleadoAsalariado(12.7, "Pablo", "Luna")
const empleadoPorHoras =
	new EmpleadoPorHoras(7879.00,40,"Laura","Peña")
const empleadoPorComision =
	new EmpleadoPorComision(4321.00, 0.25, "Lorena", "Hernandez")
const empleadoMasComision = 
	new EmpleadoBaseMasComision(123.45, 1234.00, 0.25, "Juan", "Trejo")

const empleados = [
	empleadoAsalariado,
	empleadoPorHoras,
	empleadoPorComision,
	empleadoMasComision
]

empleados.forEach(empleado => {
	console.log(`Nombre: ${empleado.primerNombre}, sueldo: ${empleado.calcularSueldo()}`)
})




