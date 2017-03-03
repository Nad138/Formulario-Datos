function traducir(){
var titulo = document.getElementById('form-signin-heading') ;
var email = document.getElementById('inputEmail');
var contrasena = document.getElementById('inputPassword');
var recordar = document.getElementsByTagName('span')[0];
var enviar = document.getElementsByClassName('btn')[0];

titulo.innerHTML = "Por favor, inicia tu sesión";
email.placeholder = "Ingresa tu correo electrónico";
contrasena.placeholder = "Contraseña";
recordar.innerHTML = "Recordar datos";
enviar.innerHTML = "Iniciar Sesión";

}
console.log(traducir());

function mostrar(){
  document.getElementById('datos').innerHTML = "<h2>Datos de Formulario</h2>" +
                                               "El correo electrónico ingresado es:<br>" +
                                               document.getElementById('inputEmail').value +
                                               "<br>La clave ingresada es: <br>" +
                                               document.getElementById('inputPassword').value;
}
