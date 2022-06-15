let password = prompt("Ingrese su Password");

if (password == "12345") {
  alert("Password correcto")
  window.location.href = "info-personal.html";
} else {
  alert("Password incorrecto")
  window.location.href = "denegacion.html";
}
