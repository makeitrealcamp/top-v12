## Preguntas teóricas

1. What is the difference between == and === operators

_R/ Cuando validamos con == estamos comparando el valor y con === comparamos el valor y el tipo '2' == 2 -> true '2' === 2 -> false_

2. What is a higher order function

_R/ Es una función de orden superior que bien toma una función como parámetro o bien retorna una función_

```
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true

```

3. What is the difference between let and var

_R/ Cuando asignamos variables con let tienen un scope local mientras que var tiene un lexical scrope global, adicionalmente var sufre de hoisting._

4. What is the difference between a callback vs promise

_R/ Con un callback tenemos una función que recibe como parámetro otra función. Cuando el resultado esté disponible, invocará a esa función pasándole como parámetro el resultado. Esta forma hace en muchas ocasiones el código ilegible ,esto se conoce como Callback Hell.
Promesa es un objeto y podemos acceder a sus métodos para obtener los estados, con .then() podemos pasar una función y cuando la promesa sea resuelta devolvera la función._

5. What is an event loop

_R/ Cuando corremos código en Javascript tenemos un solo hilo de compilación por lo que si llenamos el callstack excedemos el limite y entramos en un error, con el event Loop podemos hacer llamados asincronos que ocurren con un evento, un setTimeout, onClick, onHover
[event loop](https://medium.com/@ubykuo/event-loop-la-naturaleza-asincr%C3%B3nica-de-javascript-78d0a9a3e03d)_

6. What is the difference between Real DOM and Virtual DOM (React)

_R/ El virtual DOM es una representación del Real DOM en la memoria que está constantemente indicandole al Real DOM que quiero que renderice y cual es su estado
[React Docs](https://es.reactjs.org/docs/faq-internals.html)._

## Uso de clousure y recursión

```
/**
 * Crear una función que pueda recibir múltiples funciones y devuelve el valor de la suma de sus parámetros,
 * teniendo en cuenta que pueden llegar a ser n funciones anidadas.
 * sum(3)(4)(5).............(n)
 * keywords function composition & recursion
 */
function sum(param) {
	// Magic hapens here
}

// Solución 1
function sum(param) {
  // Magic hapens here
// Creamos una función en la que vamos a recibir el otro parametro
 function add(otherParam) {
 // Validamos que ese parametro no sea undefined para evitar errores
    if (otherParam !== undefined) {
      param = sum(param + otherParam)
      return param
    }
    return param
  }

  return add
}

// Solución 2
function sum(param1) {
  // Magic hapens here
  return function(param2) {
    return param2 ? sum(param1+param2) : param1;
  }
}

// Solución 3
function sum(param) {
  // Magic hapens here
  let acum = 0
  acum = acum + param
  function add (num) {
    if(num) {
      acum = sum(acum + num)
      return acum
    }
      return acum
  }
  return add
}

console.log(sum(4)(5)()) // 9
console.log(sum(4)(5)(3)()) // 12
```
