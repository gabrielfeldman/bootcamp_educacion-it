console.log('Bootcamp 592066 - Gabriel Feldman');

let userName = prompt('Ingrese su nombre');
let userGender = prompt('¿Con qué género se identifica? ¿Masculino, Femenino, No binario?');


//Si se identifica como masculino (escrito en mayúsculas o minúsculas)
if(userGender == 'masculino' || userGender == 'Masculino' || userGender == 'MASCULINO') {
    let message = `¡Bievenido a nuestra tienda ${userName}!`;
    console.log(`El nombre de la persona usuaria es ${userName} y se identifica como ${userGender}.`);
    console.log(message);
    alert(message);
} //Si se identifica como femenino (escrito en mayúsculas o minúsculas)
else if(userGender == 'femenino' || userGender == 'Femenino' || userGender == 'FEMENINO') {
    let message = `¡Bievenida a nuestra tienda ${userName}!`;
    console.log(`El nombre de la persona usuaria es ${userName} y se identifica como ${userGender},`);
    console.log(message);
    alert(message);
    //Si se identifica como no binario (escrito en mayúsculas o minúsculas)
} else if(userGender == 'No binario' || userGender == 'no binario' || userGender == 'No Binario' || userGender == 'NO BINARIO') {
    let message = `¡Bievenide a nuestra tienda ${userName}!`;
    console.log(`El nombre de la persona usuaria es ${userName} y se identifica como ${userGender}.`);
    console.log(message);
    alert(message);
    //Si no pone nada, queda este saludo
} else {
    let message = `¡Hola ${userName}, gracias por su visita!`;
    console.log(`El nombre de la persona usuaria es ${userName} y no aclaro el género con el que se identifica.`);
    console.log(message);
    alert(message);
}


