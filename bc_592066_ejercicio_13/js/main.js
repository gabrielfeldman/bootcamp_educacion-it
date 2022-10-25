
console.log('Bootcamp 592066 - Gabriel Feldman')


const nuevoValor = '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>';


window.addEventListener('DOMContentLoaded', () => {
    console.log('Contenido del DOM cargado');
    

    // Seleccionar <textarea> de origen
    const textarea = document.querySelector('textarea');
   
    // Seleccionar <input> superiores
    const btnReemplazar = document.querySelector('#btn-reemplazar');
    const btnAgregar = document.querySelector('input[value="Agregar"]');
    const btnAgregarCinco = document.querySelector('input[value="Agregar 5 veces"]');
    const btnAgregarDiez = document.querySelector('input[value="Agregar 10 veces"]');
    const btnAgregarPrompt = document.querySelector('input[value="Agregar n veces"]');
    
    // Seleccionar <input> y <button> inferiores
    const btnVaciar = document.querySelector('.btn-vaciar');
    const btnMayus = document.querySelector('.btn-convertir-a-mayusculas');
    const btnMinus = document.querySelector('button');
    
    // Seleccionar <div> de destino
    const destino = document.querySelector('#destino');
    
    // Cambiar 'value' del <textarea>
    textarea.value = nuevoValor;

    // Función botón Reemplazar
    function reemplazar() {
        btnReemplazar.addEventListener('click', () => {
            destino.innerHTML = textarea.value;
        })
    }   

    // Función botones Agregar

    function agregar(btn, n) {
        btn.addEventListener('click', () => {
            const contenido = `${textarea.value} `;
            const contenidoAgregado = contenido.repeat(n);
            destino.innerHTML = contenidoAgregado;
        })
    }

    function agregarPromp() {
        btnAgregarPrompt.addEventListener('click', () => {
            let mensajePrompt = prompt('Elegí la cantidad de veces que querés agregar el texto', 2)
            const contenido = `${textarea.value} `;
            const contenidoAgregado = contenido.repeat(mensajePrompt);
            destino.innerHTML = contenidoAgregado;
        })
    }

    
    // Botones inferiores

    function vaciar() {
        btnVaciar.addEventListener('click', () => {
           destino.innerHTML = '';
        })
    }

    function mayusculas() {
        btnMayus.addEventListener('click', () => {
            destino.innerHTML = destino.innerHTML.toUpperCase();
        })
    }

    function minusculas() {
        btnMinus.addEventListener('click', () => {
            destino.innerHTML = destino.innerHTML.toLowerCase();
        })
    }


    // Función para inicializar todas las funciones y agregar texto a los <li></li>

    function init(){
        reemplazar();
        agregar(btnAgregar, 1);
        agregar(btnAgregarCinco, 5);
        agregar(btnAgregarDiez, 10);
        agregarPromp()
        vaciar()
        mayusculas()
        minusculas()

        // Agregar contenido 'Ok' al inicio de los <li>

        const items = document.querySelectorAll('li');
        items.forEach(li => { //recorre todos los li
            li.textContent = `[Ok] ${li.textContent}` 
        });
    }

    textarea.addEventListener('input', () =>{
        allInputs = document.querySelectorAll('input'); // selecciono todos los input
        allInputs.forEach(input => { //recorre todos los input y cambia el valor de 'disabled'
            input.disabled = false; 
        });
        btnMinus.disabled = false;  
    });

    init()
  
});






