//1. Obtener un arreglo del cuadrado de cada numero del arreglo numeros		
let cuadrado = numeros.map((numero)=>Math.pow(numero, 2));

//2. Obtener todos los numeros mayores a 20 del arreglo numeros			
let mayores = numeros.filter((numero)=>numero > 20);

//3. Obtener todas las tecnologias diferentes a React				
let difReact = tecnologias.filter((nombre)=>nombre !='React') 

//4. Obtener la o las personas mayores a 25 anios en el areglo personas		
let edadMayor= personas.filter((persona)=>persona.edad > 25);

//5. Sumar todos los valores del arreglo numeros					
let agregar = numeros.reduce((acumulador,numero) => acumulador + numero, 0)

//6. Verificar si todos los elementos del arrelgo numeros son mayores a 0		
let mayorCero = numeros.every(numero => numero > 0)

//7. Sumar todas las edades de las personas del arreglo personas.			
let sumaEdad = personas.reduce((total,persona) => total + persona.edad, 0)

//8. Verificar si todas las edades del arreglo personas son mayores a 18 anios	
let mayorEdad = personas.every(persona => persona.edad > 18)

//9. Duplicar todas las edades en el arreglo personas				
let dobleEdad = personas.map(persona => ({...persona, edad:persona.edad*2}))