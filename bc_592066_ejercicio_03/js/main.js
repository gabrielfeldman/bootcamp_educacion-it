console.log('Bootcamp 592066 - Grupo 10: Facuendo Elias - Gabriel Feldman');
let userAge = prompt('Por favor, ingrese su edad');
userAge = parseInt(userAge);

if(userAge <= 0) {
    alert('¡Muy gracioso!');
    console.log(`La edad de la persona usuaria es ${userAge}... lo dudo`);
}else if(userAge < 18){
    alert('Sos menor de edad, vuelve con un mayor para hacer una reserva.');
    console.log(`La edad de la persona usuaria es ${userAge}`);
}else if(userAge >= 18 && userAge <= 30) {
    alert('¡Cómo estás! Tenemos las mejores opciones para tu viaje.');
    console.log(`La edad del usuario es ${userAge}`);
}else{
    alert('Bienenivo a nuestro sitio, gracias por elegirnos.');
    console.log(`La edad del usuario es ${userAge}`);
}

