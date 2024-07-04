const emailInput = document.getElementById('email');
const emailErrorEmpty = document.querySelector('.email_vacio');
const emailErrorInvalid = document.querySelector('.email_invalido');
const passwordInput = document.getElementById('contraseña');
const passwordErrorEmpty = document.querySelector('.contrasenia_obligatoria');
const loginForm = document.getElementById('loginForm');

emailInput.addEventListener('blur', () => {
    const email = emailInput.value.trim();
    if (email === '') {
        emailErrorEmpty.style.display = 'block';
        emailErrorInvalid.style.display = 'none';
    } else if (!validator.isEmail(email)) {
        emailErrorEmpty.style.display = 'none';
        emailErrorInvalid.style.display = 'block';
    } else {
        emailErrorEmpty.style.display = 'none';
        emailErrorInvalid.style.display = 'none';
    }
});

passwordInput.addEventListener('blur', () => {
    const password = passwordInput.value.trim();
    if (password === '') {
        passwordErrorEmpty.style.display = 'block';
    } else {
        passwordErrorEmpty.style.display = 'none';
    }
});

loginForm.addEventListener('submit', (event) => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    let isValid = true;

    if (email === '') {
        emailErrorEmpty.style.display = 'block';
        isValid = false;
    } else if (!validator.isEmail(email)) {
        emailErrorEmpty.style.display = 'none';
        emailErrorInvalid.style.display = 'block';
        isValid = false;
    } else {
        emailErrorEmpty.style.display = 'none';
        emailErrorInvalid.style.display = 'none';
    }

    if (password === '') {
        passwordErrorEmpty.style.display = 'block';
        isValid = false;
    } else {
        passwordErrorEmpty.style.display = 'none';
    }

    if (!isValid) {
        event.preventDefault();
    }
});