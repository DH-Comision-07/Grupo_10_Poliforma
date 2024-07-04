let inputNombre = document.getElementById('nombre');
let inputApellido = document.getElementById("apellido");
let inputUsuario = document.getElementById("usuario");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let inputRePassword = document.getElementById("repassword");
let imagenInput = document.getElementById('imagenUsuario');
let inputTelefono = document.getElementById('telefono');
let inputNacimiento = document.getElementById('birthday');


 
let notValid = false

//validacion nombre

inputNombre.addEventListener("blur", function () {
    if (inputNombre.value.trim() === '') {
        notValid = true;
        document.querySelector(".nombreVacio").style.display = "block"
    } else {
        document.querySelector(".nombreVacio").style.display = "none"
    }
})
inputNombre.addEventListener("blur", function () {
    if (inputNombre.value.length < 2) {
        notValid = true;
        document.querySelector(".nombreCorto").style.display = "block"
    } else {
        document.querySelector(".nombreCorto").style.display = "none"
    }
})

//validacion apellido

inputApellido.addEventListener("blur", function () {
    if (inputApellido.value == "") {
        notValid = true;
        document.querySelector(".apellidoVacio").style.display = "block"
    } else {
        document.querySelector(".apellidoVacio").style.display = "none"
    }
})
inputApellido.addEventListener("blur", function () {
    if (inputApellido.value.length < 2) {
        notValid = true;
        document.querySelector(".apellidoCorto").style.display = "block"
    } else {
        document.querySelector(".apellidoCorto").style.display = "none"
    }
})

//validacion usuario

inputUsuario.addEventListener("blur", function () {
    if (inputUsuario.value == "") {
        notValid = true;
        document.querySelector(".usuarioVacio").style.display = "block"
    } else {
        document.querySelector(".usuarioVacio").style.display = "none"
    }
})
inputUsuario.addEventListener("blur", function () {
    if (inputUsuario.value.length < 2) {
        notValid = true;
        document.querySelector(".usuarioCorto").style.display = "block"
    } else {
        document.querySelector(".usuarioCorto").style.display = "none"
    }
})

//validacion email

inputEmail.addEventListener("blur", function () {
    if (inputEmail.value == "") {
        notValid = true;
        document.querySelector(".emailVacio").style.display = "block"
    } else {
        document.querySelector(".emailVacio").style.display = "none"
    }
})
inputEmail.addEventListener("blur", function () {
    if (validator.isEmail(inputEmail.value)) {
        document.querySelector(".emailInvalido").style.display = "none"
    } else {
        notValid = true;
        document.querySelector(".emailInvalido").style.display = "block"
    }
})

//validacion password

inputPassword.addEventListener("blur", function () {
    if (inputPassword.value == "") {
        notValid = true;
        document.querySelector(".passwordVacio").style.display = "block"
    } else {
        document.querySelector(".passwordVacio").style.display = "none"
    }
})
inputPassword.addEventListener("blur", function () {
    if (inputPassword.value.length < 8) {
        notValid = true;
        document.querySelector(".passwordCorto").style.display = "block"
    } else {
        document.querySelector(".passwordCorto").style.display = "none"
    }
    if (inputPassword.value != inputRePassword.value) {
        notValid = true;
        document.querySelector(".passwordDistinto").style.display = "block"
    } else {
        document.querySelector(".passwordDistinto").style.display = "none"
    }

})
inputRePassword.addEventListener("blur", function () {
    if (inputPassword.value != inputRePassword.value) {
        notValid = true;
        document.querySelector(".passwordDistinto").style.display = "block"
    } else {
        document.querySelector(".passwordDistinto").style.display = "none"
    }
})

//validacion submit

document.querySelector(".register").addEventListener("submit", function (e) {

    //validacion nombre

    if (inputNombre.value.trim() === '') {
        notValid = true;
        document.querySelector(".nombreVacio").style.display = "block"
    } else {
        document.querySelector(".nombreVacio").style.display = "none"
    }

    if (inputNombre.value.length < 2) {
        notValid = true;
        document.querySelector(".nombreCorto").style.display = "block"
    } else {
        document.querySelector(".nombreCorto").style.display = "none"
    }

    //validacion apellido

    if (inputApellido.value == "") {
        notValid = true;
        document.querySelector(".apellidoVacio").style.display = "block"
    } else {
        document.querySelector(".apellidoVacio").style.display = "none"
    }

    if (inputApellido.value.length < 2) {
        notValid = true;
        document.querySelector(".apellidoCorto").style.display = "block"
    } else {
        document.querySelector(".apellidoCorto").style.display = "none"
    }

    //validacion user

    if (inputUsuario.value == "") {
        notValid = true;
        document.querySelector(".usuarioVacio").style.display = "block"
    } else {
        document.querySelector(".usuarioVacio").style.display = "none"
    }
    if (inputUsuario.value.length < 2) {
        notValid = true;
        document.querySelector(".usuarioCorto").style.display = "block"
    } else {
        document.querySelector(".usuarioCorto").style.display = "none"
    }

    //validacion email

    if (inputEmail.value == "") {
        notValid = true;
        document.querySelector(".emailVacio").style.display = "block"
    } else {
        document.querySelector(".emailVacio").style.display = "none"
    }

    if (validator.isEmail(inputEmail.value)) {
        document.querySelector(".emailInvalido").style.display = "none"
    } else {
        notValid = true;
        document.querySelector(".emailInvalido").style.display = "block"
    }

    //validacion contrasenia

    if (inputPassword.value == "") {
        notValid = true;
        document.querySelector(".passwordVacio").style.display = "block"
    } else {
        document.querySelector(".passwordVacio").style.display = "none"
    }

    if (inputPassword.value.length < 8) {
        notValid = true;
        document.querySelector(".passwordCorto").style.display = "block"
    } else {
        document.querySelector(".passwordCorto").style.display = "none"
    }
    if (inputPassword.value != inputRePassword.value) {
        notValid = true;
        document.querySelector(".passwordDistinto").style.display = "block"
    } else {
        document.querySelector(".passwordDistinto").style.display = "none"
    }

    if (inputPassword.value != inputRePassword.value) {
        notValid = true;
        document.querySelector(".passwordDistinto").style.display = "block"
    } else {
        document.querySelector(".passwordDistinto").style.display = "none"
    }

    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const fileExtension = imagenInput.value.split('.').pop().toLowerCase();

    if (fileExtension) {
        if (!allowedExtensions.includes(fileExtension)) {
            document.querySelector('.foto_invalida').style.display = 'block';
            isValid = false;
        } else {
            formatoInvalidoError.style.display = 'none';
        }
    }


    if (inputTelefono.value.trim() === '') {
        notValid = true;
        document.querySelector(".telefono_obligatorio").style.display = "block"
    } else {
        document.querySelector(".telefono_obligatorio").style.display = "none"
    }

    if (inputNacimiento.value.trim() === '') {
        notValid = true;
        document.querySelector(".nacimiento_obligatorio").style.display = "block"
    } else {
        document.querySelector(".nacimiento_obligatorio").style.display = "none"
    }

    if (notValid) {
        console.log(e);
        e.preventDefault();
    }

})