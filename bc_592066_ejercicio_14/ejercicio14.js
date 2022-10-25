function devolverString(str) {
    // "Return" la string provista: str
    // Tu código:
    let resultado = console.log(str);
    return resultado;
  }

  
  function suma(x, y) {
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
    let resultadoSuma = x + y;
    console.log(`El resultado de la suma es: ${resultadoSuma}`)
    return resultadoSuma
  }
  
  function resta(x, y) {
    // Resta "y" de "x" y devuelve el valor
    // Tu código:
    let resultadoResta = x + y;
    console.log(`El resultado de la suma es: ${resultadoResta}`)
    return resultadoResta;
  }
  
  function multiplica(x, y) {
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
    let resultadoMulti = x * y;
    console.log(`El resultado de la suma es: ${resultadoMulti}`)
    return resultadoMulti;
    
  }
  
  function divide(x, y) {
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
    let resultadoDivide = x / y;
    console.log(`El resultado de la suma es: ${resultadoDivide}`)
    return resultadoDivide;
    
  }
  
  function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
      let equal = '';
      if(x === y) {
        equal = true;
        console.log(`${equal}. Los datos ingresados "${x}" y "${y}" son iguales`);
      }else {
        equal = false;
        console.log(`${equal}. Los datos ingresados "${x}" y "${y}" NO son iguales`)
      }
    return equal;
  }

  function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    const length1 = str1.length;
    const length2 = str2.length;
    let equal = '';
    if(length1 === length2) {
      equal = true;
      console.log(`${equal}. Los datos ingresados "${str1}" y "${str2}" tienen la misma longitud`);
    }else {
      equal = false;
      console.log(`${equal}. Los datos ingresados "${str1}" y "${str2}" NO tienen la misma longitud`)
    }
  return equal;
  }

  function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    let resultado = '';
    num < 90 ? resultado = true : resultado = false;
    console.log(`¿El número ${num} es menor a 90? ${resultado}`);
    return resultado;
  }

  
  function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    let resultado = '';
    num > 50 ? resultado = true : resultado = false;
    console.log(`¿El número ${num} es mayor a 50? ${resultado}`);
    return resultado;
    
  }
  
  function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    let resto = x % y;
    console.log(resto);
    return resto;
    
  }
  
  function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    let par = num % 2;
    let resultado = '';
    par === 0 ? resultado = true : resultado = false;
    console.log(`¿El número ${num} es par? ${resultado}`);
    return resultado;
  }

 
  function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    let par = num % 2;
    let resultado = '';
    par === 0 ? resultado = false : resultado = true;
    console.log(`¿El número ${num} es impar? ${resultado}`);
    return resultado;
  }
  
  function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    let alCuadrado = Math.pow(num,2); // método para multiplicar un argumento por n veces 
    console.log(alCuadrado);
    return alCuadrado;
  }
  
  function elevarAlCubo(num) {
    // Devuelve el valor de "num" elevado al cubo
    // Tu código:
    let alCubo = Math.pow(num,3); // método para multiplicar un argumento por n veces 
    console.log(alCubo);
    return alCubo;   
  }
  
  function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    let resultado = Math.pow(num,exponent); // método para multiplicar un argumento por n veces 
    console.log(resultado);
    return resultado;      
  }

  function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
    redondeo = parseInt(num);
    console.log(redondeo);
    return redondeo;
  }
  
  function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
    redondeo = Math.ceil(num);
    console.log(redondeo);
    return redondeo;
  }

  
  function numeroRandom() {
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
      let numero = Math.random();
      return numero;
  }
  
  console.log(numeroRandom())
  
  function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    numero = parseInt(numero);
    const mensajePositivo = 'Es positivo';
    const mensajeNegativo = 'Es negativo';
    let mensaje = '';
    numero < 0  ? mensaje = mensajeNegativo : mensaje = mensajePositivo;
    if(numero === 0)  mensaje = false; 
    console.log(mensaje);
    return mensaje; 
  }

  
  function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hola mundo" pasaría a ser "hola mundo!"
    // Tu código:
    const mensajeConSigno = `${str}!`
    console.log(mensajeConSigno);
    return mensajeConSigno;
  }
  
  function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Maxi" -> "Soy Maxi"
    // Tu código:
    const mensaje = `${nombre} ${apellido}`
    console.log(mensaje);
    return mensaje;    
  }
  
  function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Maxi" -> "Hola Maxi!"
    // Tu código:
    const mensaje = `Hola ${nombre}!`
    console.log(mensaje);
    return mensaje; 
  }
  
  function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un rectángulo teniendo su altura y ancho
    // Tu código:
    let area = alto * ancho;
    console.log(`El área es igual a: ${area}`);
    return area;
  }
  

  function retornarPerimetro(lado){
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
    let perimetro = lado * 4;
    console.log(`El perímetro es igual a: ${perimetro}`);
    return perimetro
  }
  
  function areaDelTriangulo(base, altura){
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    let area = base * altura / 2;
    console.log(`El área es igual a: ${area}`);
    return area;
  }
  
  
  function deEuroAdolar(euro){
    //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
    //como parámetro un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    const cotizacionDolar = 1.20;
    let resultado = euro * cotizacionDolar;
    console.log(`${euro}€ equivalen a ${resultado}usd`);
    return resultado;
  }
  
  
  function esVocal(letra){
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    // Si no es vocal, tambien debe devolver "Dato incorrecto".
    //Escribe tu código aquí

    const vocales = /[aeiou]/
    mensaje = '';

    if(letra.length > 1){
      mensaje = 'Dato incorrecto. Ingrese solo una letra';
    } else if (letra.match(vocales)) {
      mensaje = 'Es vocal'
    } else {
      mensaje = 'Dato incorrecto. No es vocal'
    }

    console.log(mensaje);
    return mensaje;
  }


  
