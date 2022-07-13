let styleSheet = document.querySelector('#styleSheet');

const defaultCss = `css/estilos.css`;
const retroCss = `css/estilos-retro.css`;
const urbanCss = `css/estilos-urbano.css`;

function defaultStyle() {
    styleSheet.setAttribute("href", defaultCss);
}

function retroStyle() {
    styleSheet.setAttribute("href", retroCss);
}


function urbanStyle() {
    styleSheet.setAttribute("href", urbanCss);
}

function removeStyle () {
    styleSheet.setAttribute("href", null);
}


const styleBtn = document.querySelector('#styleBtn');

//Botón para seleccionar entre los tres estilos en forma secuencial
// De CSS 1 = defaultCss a > CSS 2 = retroCss  a > CSS 3 = urbanCSS a > CSS1 

//VERSIÓN MEJORADA

styleBtn.addEventListener("click", () => {
    if( styleSheet.attributes[2].nodeValue === defaultCss) {
        retroStyle();
        console.log(`Estás en la hoja de estilo RETRO: ${styleSheet.attributes[2].nodeValue}`);
    } else if (styleSheet.attributes[2].nodeValue === retroCss) {
        urbanStyle();
        console.log(`Estás en la hoja de estilo URBANO: ${styleSheet.attributes[2].nodeValue}`);
    } else {
        defaultStyle();
        console.log(`Estás en la hoja de estilo por defecto: ${styleSheet.attributes[2].nodeValue}`);
    }
});


/* PRIMERA VERSIÓN
styleBtn.addEventListener("click", () => {
    if( styleSheet.attributes[2].nodeValue === defaultCss) {
        styleSheet.attributes[2].nodeValue = retroCss;
        console.log(`Estás en la hoja de estilo RETRO: ${styleSheet.attributes[2].nodeValue}`);
    } else if (styleSheet.attributes[2].nodeValue === retroCss) {
        styleSheet.attributes[2].nodeValue = urbanCss;
        console.log(`Estás en la hoja de estilo URBANO: ${styleSheet.attributes[2].nodeValue}`);
    } else {
        styleSheet.attributes[2].nodeValue = defaultCss;
        console.log(`Estás en la hoja de estilo por defecto: ${styleSheet.attributes[2].nodeValue}`);
    }
});
*/

//Botón para seleccionar estilos aleatoriamente entre CSS 1, CSS 2, CSS 3 y sin estilo.

const shuffleBtn = document.querySelector('#shuffleBtn');

shuffleBtn.addEventListener('click', getShuffle);

/*PRIMERA VERSIÓN
function getShuffle () {
const cssArray = [defaultCss, retroCss, urbanCss, null];
let shuffle = cssArray[Math.floor(Math.random() * cssArray.length)];
styleSheet.attributes[2].nodeValue = shuffle;
console.log(`Eligió una hoja de estilo en forma aleatoria. O tal vez le sacó el estilo... la suerte es loca. 
${styleSheet.attributes[2].nodeValue}`);
} */   


//VERSIÓB MEJORADA
function getShuffle () {
    const cssArray = [defaultCss, retroCss, urbanCss, null];
    let shuffle = cssArray[Math.floor(Math.random() * cssArray.length)];
    styleSheet.setAttribute("href", shuffle);
    console.log(`Eligió una hoja de estilo en forma aleatoria. O tal vez le sacó el estilo... la suerte es loca.`);
    }



//Selector de estilos con <select></select>
let styleSelect = document.querySelector('#styleSelect');

styleSelect.addEventListener('change', selectCss);

function selectCss () {
    if(styleSelect.value === 'default') {
        defaultStyle();
    } else if (styleSelect.value === 'retro') {
        retroStyle();
    } else if (styleSelect.value === 'urban') {
       urbanStyle();
    } else if (styleSelect.value === 'rmCss') {
       removeStyle();
    }    
}

//Selector de de estilos con <input type=radio>

let defaultStyleRadio = document.querySelector('#defaultStyleRadio');
let retroStyleRadio = document.querySelector('#retroStyleRadio');
let urabantStyleRadio = document.querySelector('#urbanStyleRadio');

defaultStyleRadio.addEventListener('click', defaultStyle);
retroStyleRadio.addEventListener('click', retroStyle);
urabantStyleRadio.addEventListener('click', urbanStyle);



