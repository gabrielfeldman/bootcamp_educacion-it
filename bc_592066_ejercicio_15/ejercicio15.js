function obtenerMayor(x, y) {
    // "x" e "y" son números enteros (int).
    // Devuelve el número más grande
    // Si son iguales, devuelve cualquiera de los dos
    // Tu código:
    let num1 = parseInt(x);
    let num2 = parseInt(y);
    let resultado = '';

    num1 >= num2 ? resultado = num1 : resultado = num2;
    return resultado
  }

  function mayoriaDeEdad(edad) {
    //Determinar si la persona según su edad puede ingresar a un evento.
    //Si tiene 18 años ó más, devolver --> "Allowed"
    //Si es menor, devolver --> "Not allowed"
    let mensaje = '';

    edad >= 18 ? mensaje = 'Allowed' : mensaje = 'Not allowed';
    return mensaje
  }

    
  function conection(status) {
    //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
    //Cuando el estado es igual a 1, el usuario está "Online"
    //Cuando el estado es igual a 2, el usuario está "Away"
    //De lo contrario, presumimos que el usuario está "Offline"
    //Devolver el estado de conexión de usuario en cada uno de los casos.
    let readyState = '';
    if(status === 1) {
      readyState = 'Online';
    } else if (status === 2) {
      readyState = 'Away';
    } else {
      readyState = 'Offline';
    }
    return readyState
  }
  

  function saludo(idioma) {
    // Devuelve un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!"
    // Si "idioma" es "mandarin", devuelve "Ni Hao!"
    // Si "idioma" es "ingles", devuelve "Hello!"
    // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
    // Tu código:
    
    switch (idioma) {
      case 'aleman':
	      saludo = 'Guten Tag!'
      break;
      case 'mandarin':
	      saludo = 'Ni Hao!';
	    break;
      case 'ingles':
	      saludo = 'Hello!';
	      break;
    default:
        saludo = 'Hola!'    
    }

    return saludo
  } 



  function colors(color) {
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuleve --> "This is blue"
    //En caso que el color recibido sea "red", devuleve --> "This is red"
    //En caso que el color recibido sea "green", devuleve --> "This is green"
    //En caso que el color recibido sea "orange", devuleve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.

    switch (color) {
      case 'blue':
	      mensaje = 'This is blue'
      break;
      case 'red':
	      mensaje = 'This is red';
	    break;
      case 'green':
	      mensaje = 'This is green';
	    break;
      case 'orange':
	      mensaje = 'This is orange';
	    break;
    default:
	      mensaje = 'Color not found';
    }

    return mensaje
  }
   

  function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    
    let equal = '';
    numero == 10 || numero == 5 ? equal = true : equal = false;
    return equal;
  }

  function estaEnRango(numero) {
    // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    // De lo contrario, devuelve "false"
    // Tu código:
    let equal = '';
    numero < 50 && numero > 20 ? equal = true : equal = false;
    return equal;
  }
  

  function esEntero(numero) {
    // Devuelve "true" si "numero" es un entero (int/integer)
    // Ejemplo: 0.8 -> false
    // Ejemplo: 1 -> true
    // Ejemplo: -10 -> true
    // De lo contrario, devuelve "false"
    // Pista: Puedes resolver esto usando `Math.floor`
    // Tu código:    

    resultado = '';
     
    // usando `Math.floor`
    /*
    if(Math.floor(numero) === 0) {
      resultado = true;
    } else {
      resultado = false
    }
    */

    // usando Number.IsInterger
    Number.isInteger(numero) ? resultado = true : resultado = false;
    return resultado
  }
  



  function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero

    
    if(numero % 15 === 0){
      return 'fizzbuzz';
    } else if (numero % 3 === 0){
      return 'fizz';
    } else if (numero % 5 === 0){
      return 'buzz'; 
    } else {
      return numero;
    }
    
  }
  

  function operadoresLogicos(num1, num2, num3) {
    //La función recibe tres números distintos. 
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
    //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
    

    if (num1 < 0 || num2 < 0 || num3 < 0) {
    return 'Hay negativos';
    } else if (num1 === 0 || num2 === 0 || num3 === 0) {
      return 'Error'; 
    } else if(num1 > num2 && num1 > num3 && num1 > 0) {
      return 'Número 1 es mayor y positivo';
    } else if (num3 > num1 && num3 > num2) {
      num3++;
      return `El nuevo valor de 'num3' es: ${num3}`;
    } else {
      let resultado = false;
      return resultado;
    }

  }

 
  function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
    
    let primo;
   
  
    for (var i = 2; i <= numero-1; i++) {
        if (numero % i == 0) {
          primo = true
        } return primo;
    }

  }
  
  console.log(esPrimo(7))

  function esVerdadero(valor){
    //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
    //si su valor es true y “Soy falso” si su valor es false.
    //Escribe tu código aquí
    let resultado = ''
    !valor === false  ? resultado = 'Soy Verdadero' : resultado = 'Soy falso';
    return resultado
  }

  
  function tablaDelSeis(){
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
    //Escribe tu código aquí  
    
    arrayTabla = []
    
    for (let i = 0; i <= 10; i++) {
      multiplicacion = i * 6;
      arrayTabla.push(multiplicacion);
      
    }
    return arrayTabla
  }

  
  function tieneTresDigitos(numero){
    //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
    //Escribe tu código aquí
    
    
    let text = numero.toString(); //convertir numero a string para poder usar .length
    resultado = '';

    
    if(text.includes('.')){ // Si tiene un '.' no es entero
      resultado = 'Ingrese un número entero';
    } else {
    if(text.includes('-') && text.length === 4) { // si el numero es negativo, el string suma el '-' como caracter
        resultado = true;   
      } else if (!text.includes('-') && text.length === 3) {
        resultado = true;
      } else {
        resultado = false;
      }
    }
    return resultado
  }

  
  function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.

    let vueltas = 0
    do {
      numero = numero + 5;
      vueltas++;
    } while (vueltas < 8);
    return numero

  }




