// Pedimos al usuario que ingrese los dos números
let numero1 = parseInt(prompt("Ingresa el primer número: "));
let numero2 = parseInt(prompt("Ingresa el segundo número: "));

// Creamos una función que encuentra los números impares entre los dos números ingresados
function encontrarImpares(num1, num2) {
  let impares = [];
  // Verificamos si num1 es impar, si es así lo agregamos al arreglo
  if (num1 % 2 !== 0) {
    impares.push(num1);
  }
  // Recorremos los números entre num1 y num2, verificando si cada uno es impar y lo agregamos al arreglo
  for (let i = num1 + 1; i < num2; i++) {
    if (i % 2 !== 0) {
      impares.push(i);
    }
  }
  // Verificamos si num2 es impar, si es así lo agregamos al arreglo
  if (num2 % 2 !== 0) {
    impares.push(num2);
  }
  // Retornamos el arreglo de impares
  return impares;
}

// Llamamos a la función para encontrar los impares y los mostramos en la consola
console.log("Los números impares entre " + numero1 + " y " + numero2 + " son: " + encontrarImpares(numero1, numero2));
