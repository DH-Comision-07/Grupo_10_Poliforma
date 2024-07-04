window.addEventListener("load", function(){
    let nombreVacio = true;
    let nombreCorto = true;
    let apellidoCorto = true;
    let apellidoVacio = true;
    let usuarioCorto = true;
    let usuarioVacio = true;
    let emailInvalido = true;
    let emailVacio = true;
    let passwordCorto = true;
    let passwordVacio = true;
    let passwordDistinto = true;

    let inputNombre = this.document.getElementById("nombre");
    inputNombre.addEventListener("blur",function(){
        if (inputNombre.value == ""){
            nombreVacio = true;
            document.querySelector(".nombreVacio").style.display = "block"
        }else{
            nombreVacio = false;
            document.querySelector(".nombreVacio").style.display = "none"
        }
    })
    inputNombre.addEventListener("blur",function(){
        if (inputNombre.value.length < 2){
            nombreCorto = true;
            document.querySelector(".nombreCorto").style.display = "block"
        }else{
            nombreCorto = false;
            document.querySelector(".nombreCorto").style.display = "none"
        }
    })

    let inputApellido = this.document.getElementById("apellido");
    inputApellido.addEventListener("blur",function(){
        if (inputApellido.value == ""){
            apellidoVacio = true;
            document.querySelector(".apellidoVacio").style.display = "block"
        }else{
            apellidoVacio = false;
            document.querySelector(".apellidoVacio").style.display = "none"
        }
    })
    inputApellido.addEventListener("blur",function(){
        if (inputApellido.value.length < 2){
            apellidoCorto = true;
            document.querySelector(".apellidoCorto").style.display = "block"
        }else{
            apellidoCorto = false;
            document.querySelector(".apellidoCorto").style.display = "none"
        }
    })

    let inputUsuario = this.document.getElementById("usuario");
    inputUsuario.addEventListener("blur",function(){
        if (inputUsuario.value == ""){
            usuarioVacio = true;
            document.querySelector(".usuarioVacio").style.display = "block"
        }else{
            usuarioVacio = false;
            document.querySelector(".usuarioVacio").style.display = "none"
        }
    })
    inputUsuario.addEventListener("blur",function(){
        if (inputUsuario.value.length < 2){
            usuarioCorto = true;
            document.querySelector(".usuarioCorto").style.display = "block"
        }else{
            usuarioCorto = false;
            document.querySelector(".usuarioCorto").style.display = "none"
        }
    })

    let inputEmail = this.document.getElementById("email");
    inputEmail.addEventListener("blur",function(){
        if (inputEmail.value == ""){
            emailVacio = true;
            document.querySelector(".emailVacio").style.display = "block"
        }else{
            emailVacio = false;
            document.querySelector(".emailVacio").style.display = "none"
        }
    })
    inputEmail.addEventListener("blur",function(){
        if (validator.isEmail(inputEmail.value)){
            emailInvalido = false;
            document.querySelector(".emailInvalido").style.display = "none"
        }else{
            emailInvalido = true;
            document.querySelector(".emailInvalido").style.display = "block"
        }
    })

    let inputPassword = this.document.getElementById("password");
    let inputRePassword = this.document.getElementById("repassword");
    inputPassword.addEventListener("blur",function(){
        if (inputPassword.value == ""){
            passwordVacio = true;
            document.querySelector(".passwordVacio").style.display = "block"
        }else{
            passwordVacio = false;
            document.querySelector(".passwordVacio").style.display = "none"
        }
    })
    inputPassword.addEventListener("blur",function(){
        if (inputPassword.value.length < 8){
            passwordCorto = true;
            document.querySelector(".passwordCorto").style.display = "block"
        }else{
            passwordCorto = false;
            document.querySelector(".passwordCorto").style.display = "none"
        }
        if (inputPassword.value != inputRePassword.value){
            passwordDistinto = true;
            document.querySelector(".passwordDistinto").style.display = "block"
        }else{
            passwordDistinto = false;
            document.querySelector(".passwordDistinto").style.display = "none"
        }

    })
    inputRePassword.addEventListener("blur",function(){
        if (inputPassword.value != inputRePassword.value){
            passwordDistinto = true;
            document.querySelector(".passwordDistinto").style.display = "block"
        }else{
            passwordDistinto = false;
            document.querySelector(".passwordDistinto").style.display = "none"
        }
    })


    this.document.querySelector(".register").addEventListener("submit", function(e){
        if (nombreCorto || nombreVacio || apellidoVacio || apellidoCorto || usuarioVacio || usuarioCorto || emailVacio || emailInvalido || passwordCorto || passwordDistinto || passwordVacio){
            e.preventDefault();
        }

    })
});