function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un  array (pasado por parametro)
    // Tu código:
    primerElemento = array[0];

    return console.log(primerElemento);
  }
  
  
  function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    ultimoElemento = array.pop(); // tomo el último elemento del array y lo guardo en una variable
    array.push(ultimoElemento); // lo vuelvo a agregar al array
    return ultimoElemento
  }
  
  
  function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    let longitud = array.length;
    console.log(`El largo del array es: ${longitud}`)
    return longitud
  }
  
  

  
  function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    let aumentoArray = array.map(x => x + 1);
    return aumentoArray;
  }
  
  
  function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array.push(elemento);
    return array;
  }
    
  function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    array.unshift(elemento);
    return array
  }
  
   
  function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hola', 'mundo!'] -> 'Hello mundo!'
    // Tu código:
    phrase = palabras.join(' ')
    return phrase
  }
  
  
  function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    let includes;
    array.includes(elemento) ? includes = true : includes = false;
    return includes
  }
  
    
  function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    let sum = 0;
    numeros.forEach(e => {
      if (Number.isInteger(e)) {
        sum += e;
      } else {
        console.warn(`El array debe contener únicamente valores enteros`)
      }
    });
    return `La suma de los números enteros es igual a ${sum}`
  }
  

  function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    let sum = 0;
    let average = 0;

    resultadosTest.forEach(e => {
      if (Number.isInteger(e)) {
        sum += e;
        average = sum / resultadosTest.length
      } else {
        console.warn(`El array debe contener únicamente valores enteros`)
      }
    });
    return `El promedio es igual a ${average}`
  }
   
  
  function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    let largest
     numeros.forEach(e => {
      if (Number.isInteger(e)) {
        largest = Math.max(...numeros);
      } else {
        console.warn(`El array debe contener únicamente valores enteros`)
      }
    });
    return `El número más grande es ${largest}`
  }
  
  
  
  function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:

    multiplicar = 1;
    if (arguments.length === 0) {
      return arguments.length;
    } else { 
      for (let i = 0; i < arguments.length; i++) {
        //console.log(arguments[i])
        multiplicar = multiplicar * arguments[i];
      }
      return multiplicar;
    }

 
}

  
  function cuentoElementos(arreglo){
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
      let elements = arreglo.filter(arreglo => arreglo > 18);
      return `Son ${elements.length} elementos mayor a '18': ${elements.join(', ')}`
     
    }
   
  
  function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí   
  
    if (numeroDeDia > 0 && numeroDeDia <= 7) {
      switch (numeroDeDia) {
        case 1:
          console.log('Es fin de semana');
          break;
        case 7:
          console.log('Es fin de semana');
          break;
        default: 
          return console.log('Es dia laboral')
      } 
    } else {
      console.error('Ingrese un valor válido')
    }
}
  
  function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
    const nine = '9';
    const firstNumber = n.toString().charAt(0);
    const negativeFirstNumber = n.toString().charAt(1);

    if(firstNumber === '-' && negativeFirstNumber === nine ) result = true;
    else if (firstNumber === nine) result = true;
    else result = false
    
    return console.log(`¿Empieza con 9...? ${result}`);
  }
  
  
  function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí  
    let equal

    for (let i = 0; i < arreglo.length; i++) {
      const element = arreglo[i];
      //console.log(element)
      for (let j = 0; j < arreglo.length; j++) {
        const elementTwo = arreglo[j];
        // console.log(elementTwo)
        (element-elementTwo === 0) ? equal = true : equal = false;
       //console.log(equal) 
      }
      return equal
     }
    
  } 

  
  function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:

    let monthsArray 
    const condition = array.includes('Enero') && array.includes('Marzo') && array.includes('Noviembre');

      if(!condition) {
        console.log("No se encontraron los meses pedidos");
      } else if (condition) {
        monthsArray = array.filter(array => array === 'Enero' || array === 'Marzo' || array === 'Noviembre');
        console.log(monthsArray)
      }
               
   
  }
  
  
  function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:

    result = array.filter(array => array > 100 && array <= 200)

    
    return result
  }
  

  function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:

    let number = numero;
    let iteration = 0;
    let array = [];

    do {
      number = number + 2;
      iteration++;
      if (number === iteration) {
        console.log('Se interrumpió la ejecución');
        break;
      }
      array.push(number);
    } while (iteration < 10);

    return array
  
  }
  
  
  function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:

    let number = numero;
    let iteration = 0;
    let array = [];

    do {
      number = number + 2;
      iteration++;
      if (iteration === 5) {
        //console.log(iteration)
        continue
      }
      //console.log('El numero es', number)
      array.push(number);
    } while (iteration < 10);

    return array
  }

  

