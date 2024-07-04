window.addEventListener("load", function(){
    let nombreVacio = true;
    let nombreCorto = true;
    let apellidoCorto = true;
    let apellidoVacio = true;
    let usuarioCorto = true;
    let usuarioVacio = true;
    let mailInvalido = true;
    let mailVacio = true;
    let passCorto = true;
    let passVacio = true;

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

    this.document.querySelector(".register").addEventListener("submit", function(e){
        if (nombreCorto || nombreVacio || apellidoVacio || apellidoCorto || usuarioVacio || usuarioCorto){
            e.preventDefault();
        }

    })
});