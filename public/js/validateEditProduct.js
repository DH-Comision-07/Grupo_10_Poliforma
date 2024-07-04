const nombreInput = document.getElementById('NombreProducto');
const descripcionInput = document.getElementById('descripcion');
const imagenInput = document.getElementById('imagenProducto');
const categoriaSelect = document.getElementById('categoria');
const stockInput = document.getElementById('stock');
const precioInput = document.getElementById('precio');

const nombreVacioError = document.querySelector('.nombreVacio');
const nombreCortoError = document.querySelector('.nombreCorto');
const descripcionCortoError = document.querySelector('.descripcion_corta');
const formatoInvalidoError = document.querySelector('.formato_invalido');
const fotoObligatoriaError = document.querySelector('.foto_obligatoria')
const categoriaVaciaError = document.querySelector('.categoria_vacia');
const stockVacioError = document.querySelector('.stock_vacia');
const precioVacioError = document.querySelector('.precio_vacia');

let isValid = true;
const form = document.querySelector('.edit-form');
form.addEventListener('submit', (event) => {

    // Validacion nombre
    if (nombreInput.value.trim() === '') {
        nombreVacioError.style.display = 'block';
        isValid = false;
    } else if (nombreInput.value.length < 5) {
        nombreCortoError.style.display = 'block';
        isValid = false;
    } else {
        nombreVacioError.style.display = 'none';
        nombreCortoError.style.display = 'none';
    }

    // Validacion descripción
    if (descripcionInput.value.length < 20) {
        descripcionCortoError.style.display = 'block';
        isValid = false;
    } else {
        descripcionCortoError.style.display = 'none';
    }

    // Validacion imagen

    const allowedExtensions = ['jpg', 'jpeg', 'png' , 'gif'];
    const fileExtension = imagenInput.value.split('.').pop().toLowerCase();
  
    if (fileExtension) {
      if (!allowedExtensions.includes(fileExtension)) {
        isValid = false;
        formatoInvalidoError.style.display = 'block';
      } else {
        formatoInvalidoError.style.display = 'none';
      }
    }

    // Validacion la categoría
    if (categoriaSelect.value === '') {
        categoriaVaciaError.style.display = 'block';
        isValid = false;
    } else {
        categoriaVaciaError.style.display = 'none';
    }

    // Validacion el stock
    if (stockInput.value === '') {
        stockVacioError.style.display = 'block';
        isValid = false;
    } else {
        stockVacioError.style.display = 'none';
    }

    // Validacion el precio
    if (precioInput.value === '') {
        precioVacioError.style.display = 'block';
        isValid = false;
    } else {
        precioVacioError.style.display = 'none';
    }

    console.log(isValid);

    if (!isValid) {
        event.preventDefault();
    }
});

// blur inputs

nombreInput.addEventListener('blur', function () {
    if (nombreInput.value.trim() === '') {
        nombreVacioError.style.display = 'block';
    } else if (nombreInput.value.length < 5) {
        nombreCortoError.style.display = 'block';
    } else {
        nombreVacioError.style.display = 'none';
        nombreCortoError.style.display = 'none';
    }
});

descripcionInput.addEventListener('blur', function () {
    if (descripcionInput.value.length < 20) {
        descripcionCortoError.style.display = 'block';
    } else {
        descripcionCortoError.style.display = 'none';
    }
});

imagenInput.addEventListener('change', function () {
    const allowedExtensions = ['jpg', 'jpeg', '', 'gif'];
    const fileExtension = imagenInput.value.split('.').toLowerCase();

        if (!allowedExtensions.includes(fileExtension)) {
            formatoInvalidoError.style.display = 'block';
            fotoObligatoriaError.style.display = 'none';
        } else {
            formatoInvalidoError.style.display = 'none';
            fotoObligatoriaError.style.display = 'none';
        }
});

categoriaSelect.addEventListener('change', function () {
    if (categoriaSelect.value === '') {
        categoriaVaciaError.style.display = 'block';
    } else {
        categoriaVaciaError.style.display = 'none';
    }
});
stockInput.addEventListener('blur', function () {
    if (stockInput.value === '') {
        stockVacioError.style.display = 'block';
    } else {
        stockVacioError.style.display = 'none';
    }
});

precioInput.addEventListener('blur', function () {
    if (precioInput.value === '') {
        precioVacioError.style.display = 'block';
    } else {
        precioVacioError.style.display = 'none';
    }
});