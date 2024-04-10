// prueba_empleado.js
// Archivo para probar la jerarquia de clases de Empleado

//Importar las clases de la jerarquia de clases de emepleado
const EmpleadoAsalariado = require('./EmpleadoAsalariado')
const EmpleadoPorHoras = require('./EmpleadoPorHoras')
const EmpleadoPorComision = require('./EmpleadoPorComision')
const EmpleadoBaseMasComision = require('./EmpleadoBaseMasComision')

// Crear un arreglo con diferentes tipos de Empleados
const empleados = [
	new EmpleadoAsalariado(12.7, "Pablo", "Luna"),
	new EmpleadoPorHoras(7879.00,40,"Laura","Peña"),
	new EmpleadoPorComision(4321.00, 0.25, "Lorena", "Hernandez"),
	new EmpleadoBaseMasComision(123.45, 1234.00, 0.25, "Juan", "Trejo")
]

// Iterar sobre el arreglo polimorfico y calcular el sueldo
empleados.forEach(empleado => {
	console.log(`Nombre: ${empleado.primerNombre}, sueldo: ${empleado.calcularSueldo()}`)
})




