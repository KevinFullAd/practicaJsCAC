
document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.card-button input[type="checkbox"]');
    
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            const boxCard = checkbox.closest('.box-card');
            
            checkboxes.forEach(function (otherCheckbox) {
                if (otherCheckbox !== checkbox) {
                    // Desmarca los otros checkboxes
                    otherCheckbox.checked = false;
                    
                    // Remueve la clase 'active' de los otros box-cards
                    const otherBoxCard = otherCheckbox.closest('.box-card');
                    otherBoxCard.classList.remove('active-animation');
                }
            });
            // Verifica si el checkbox está marcado
            if (checkbox.checked) {
                // Agrega la clase 'active' para activar la animación CSS
                boxCard.classList.add('active-animation');
            } else {
                // Remueve la clase 'active' si el checkbox no está marcado
                boxCard.classList.remove('active-animation');
            }
        });
    });


    

});


const calcButton = document.querySelector('.calc');
const ticketPrecio=200; 
const mostrarPrecio = document.querySelector('.totalNro');

calcButton.addEventListener('click', (e) => {
    e.preventDefault();
    let cantidad = document.querySelector('#cant').value;
    // Obtener todos los elementos con la clase .box-card
    const boxCards = document.querySelectorAll('.box-card');

    // Inicializar precioTotal fuera del bucle
    let precioTotal = cantidad * ticketPrecio;

    // Iterar sobre cada elemento
    boxCards.forEach((boxCard) => {
        // Verificar si el elemento está activo
        if (boxCard.classList.contains('active-animation')) {
            // Obtener el descuento del atributo data-descuento
            let descuento = parseFloat(boxCard.getAttribute('data-descuento'));
            // Calcular el precio total
            let subTotal = cantidad * ticketPrecio;
            precioTotal = subTotal * descuento;
        } 
    });


    // Mostrar el precio total después de salir del bucle
    mostrarPrecio.innerHTML = precioTotal;
});


function handleInput(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputContainer = inputField.parentElement;

    // Verificar si el campo está vacío al perder el foco
    inputField.addEventListener('blur', function () {
        if (!inputField.value.trim()) {
            inputContainer.classList.remove('has-content');
        } else {
            inputContainer.classList.add('has-content');
        }
    });

    // Verificar el estado inicial
    if (inputField.value.trim()) {
        inputContainer.classList.add('has-content');
    } else {
        inputContainer.classList.remove('has-content');
    }
}