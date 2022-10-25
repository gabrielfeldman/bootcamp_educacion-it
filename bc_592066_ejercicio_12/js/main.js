console.log(document.querySelector('title').innerText);

//Tomar los valores del HTML - Primer integrante
const memberOneName = document.querySelector('#memberOneName');
const memberOneSecondName = document.querySelector('#memberOneSecondName');
const memberOneSurname = document.querySelector('#memberOneSurname');
const memberOneSecondSurname = document.querySelector('#memberOneSecondSurname');

//Tomar los valores del HTML - Segundo integrante
const memberTwoName = document.querySelector('#memberTwoName');
const memberTwoSecondName = document.querySelector('#memberTwoSecondName');
const memberTwoSurname = document.querySelector('#memberTwoSurname');
const memberTwoSecondSurname = document.querySelector('#memberTwoSecondSurname');

//NOMBRE COMPLETO CON FORMATO ESPECIFICADO

const fullOneName = `${memberOneName.innerText} ${memberOneSecondName.innerText}`;
const fullOneSurname = `${memberOneSurname.innerText.toUpperCase()} ${memberOneSecondSurname.innerText.toUpperCase()}`;

const memberOne = `${fullOneName.trim()} ${fullOneSurname.trim()}`;

const fullTwoName = `${memberTwoName.innerText} ${memberTwoSecondName.innerText}`;
const fullTwoSurname = `${memberTwoSurname.innerText.toUpperCase()} ${memberTwoSecondSurname.innerText.toUpperCase()}`;

const memberTwo = `${fullTwoName.trim()} ${fullTwoSurname.trim()}`;



// LEER LOS DATOS CARGADOS EN CONSOLA
function consoleMembers () {
        console.log (
        `
        -----
        Integrante 1: "${memberOne.trim()}"
        Integrante 2: "${memberTwo.trim()}"
        -----    
        `
        )
}

consoleMembers()

/* ============================================================ 

VERIFICAR Y RESALTAR COINCIDENCIAS EN LOS NOMBRES Y APELLIDOS

==============================================================*/

let equal = false;
let messageEqualName = '';

//FUNCIÓN PARA CAMBIAR COLOR Y PESO TIPOGRÁFICO EN LOS DATOS QUE COINCIDAN

function styleName(variable) {
    variable.style = `
    font-weight: 700;
    color: ${messageEqualName};
    `;
}

//FUNCIÓN PARA IMPRIMIR MENSAJE EN PANTALLA Y TOMAR EL COLOR QUE DIGA LA PERSONA USUARIA

function message() {
    messageEqualName = prompt(`Hay coincidencias en los datos ingresados. 
> Ingrese un color para destacarlo.`, 'Red');
    console.log(`El color elegido para resaltar la coincidencia es "${messageEqualName}".`)
}

//FUNCIÓN DE VERIFICACIÓN DE COINCIDENCIAS DE DATOS

function verifyEqual(x, y, z, w) {
    if ( (x.innerText === y.innerText) && (z.innerText === w.innerText) || (x.innerText === w.innerText) && (z.innerText === y.innerText) ) {
        equal = true;
        console.warn(`Coincidencias: ${equal}. Hay coincidencias en los datos ingresados`);
        message()
        styleName(x);
        styleName(y); 
        styleName(z);
        styleName(w); 
    } else if(x.innerText === y.innerText) {
        equal = true;
        console.warn(`Coincidencias: ${equal}. Hay coincidencias en los datos ingresados`);
        message()
        styleName(x);
        styleName(y);
    }else if (x.innerText === w.innerText) {
        equal = true;
        console.warn(`Coincidencias: ${equal}. Hay coincidencias en los datos ingresados`);
        message()
        styleName(x);
        styleName(w);
    } else if ((z.innerText === y.innerText) && (z.innerText !=="")) {
        equal = true;
        console.warn(`Coincidencias: ${equal}. Hay coincidencias en los datos ingresados`);
        message()
        styleName(z);
        styleName(y);
    } else if ((z.innerText !== "") && z.innerText === w.innerText) {
        equal = true;
        console.warn(`Coincidencias: ${equal}. Hay coincidencias en los datos ingresados`);
        message()
        styleName(z);
        styleName(w);
    } else if (y.innerText == "" && w.innerText == "") {
        console.info("Sólo hay un integrante del equipo con los datos cargados.")
    } else {
        console.info('No hay coincidencias en los datos ingresados.');
    }
}

        
//FUNCIÓN PARA VERIFICAR NOMBRES    

function verifyName (x, y, z, w){
 console.info("Verificación de nombres iniciada.");
    verifyEqual(x, y, z, w);
}

//LLAMADA A LA FUNCION DE VERIFICACION DE DATOS PARA VERIFICAR LOS NOMBRES       
//                  x            y               z                   w
verifyName(memberOneName, memberTwoName, memberOneSecondName, memberTwoSecondName)


//FUNCIÓN PARA VERIFICAR APELLIDOS
function verifySurname (x, y, z, w) {
    if((y.innerText !== "" || w.innerText !=="") && window.confirm("¿Desea verificar coincidencias en los apellidos?") ) {
        console.info("Verificación de apellidos iniciada.") 
        verifyEqual(x, y, z, w); // Reutilizo la función de verificación de datos
        if (equal !== true) {
            alert("No hay coincidencias en los apellidos ingresados.")
        }
    } 
} 

//LLAMADO A LA FUNCION DE VERIFICACION DE APELLIDOS
//                  x                    y                  z                       w
verifySurname(memberOneSurname, memberTwoSurname, memberOneSecondSurname, memberTwoSecondSurname);

/*-------------------------------------
EXPERIMENTANDO UN POCO CON CSS DINÁMICO
---------------------------------------*/

/*
>> Si hay un dato cargado se le agrega una "viñeta" como pseudoelemento de decoración. 

>> Si el dato es un string vacio, se agrega el emoji "➖" como pseudoelemento de decoración. 
*/

let arrayData = [memberOneName, memberOneSecondName, memberOneSurname, memberOneSecondSurname, memberTwoName, memberTwoSecondName, memberTwoSurname, memberTwoSecondSurname]

arrayData.forEach((data)=>{
    //console.log(data.innerText);
    if(data.innerText === "") {
        data.classList.add('empty');
    } else {
        data.classList.add('filled');
    }
})


/* 

PRIMERA VERSIÓN - Verificar nombres ingresados

equalName()

function equalName () {
    if ((memberOneName.innerText === memberTwoName.innerText) && (memberOneSecondName.innerText === memberTwoSecondName.innerText) || (memberOneName.innerText === memberTwoSecondName.innerText) && (memberOneSecondName.innerText === memberTwoName.innerText) ) {
        equal = true;
        console.warn(`Condicidencias: ${equal}. Hay coincidencias en los nombres de los integrantes`);
        message()
        console.log(`El color elegido es ${messageEqualName}`)
        styleName(memberOneName);
        styleName(memberTwoName);
        styleName(memberOneSecondName);
        styleName(memberTwoSecondName);
    }  else if(memberOneName.innerText === memberTwoName.innerText) {
        equal = true;
        console.warn(`Condicidencias: ${equal}. Hay coincidencias en los nombres de los integrantes`);
        messageEqualName = prompt('Hay coincidencias en los nombres. Ingrese un color para destacarlos', 'red');      
        styleName(memberOneName);
        styleName(memberTwoName);
    }else if (memberOneName.innerText === memberTwoSecondName.innerText) {
        equal = true;
        console.warn(`Condicidencias: ${equal}. Hay coincidencias en los nombres de los integrantes`);
        messageEqualName = prompt('Hay coincidencias en los nombres. Ingrese un color para destacarlos', 'red');
        styleName(memberOneName);
        styleName(memberTwoSecondName);
        } else if (memberOneSecondName.innerText === memberTwoName.innerText) {
        equal = true;
        console.warn(`Condicidencias: ${equal}. Hay coincidencias en los nombres de los integrantes`);
        messageEqualName = prompt('Hay coincidencias en los nombres. Ingrese un color para destacarlos', 'red');
        styleName(memberOneSecondName);
        styleName(memberTwoName);
    } else if (memberOneSecondName.innerText === memberTwoSecondName.innerText) {
        equal = true;
        console.warn(`Condicidencias: ${equal}. Hay coincidencias en los nombres de los integrantes`);
        messageEqualName = prompt('Hay coincidencias en los nombres. Ingrese un color para destacarlos', 'red'); 
        styleName(memberOneSecondName);
        styleName(memberTwoSecondName);
    } 
}
*/