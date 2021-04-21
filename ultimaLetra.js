var btn_procesar = document.getElementById("procesar");
var btn_regresar = document.getElementById("regresar");
var nombreUser;
var lastLetter;

btn_procesar.onclick = function () {
  nombreUser = document.getElementById("nombre").value;
  getLastLetter(nombreUser);
  document.getElementById("text_ul").innerText = lastLetter.toUpperCase();

  document.getElementById("containerA").style.display = "none";
  document.getElementById("containerB").style.display = "flex";
};

btn_regresar.onclick = function () {
  document.getElementById("containerA").style.display = "flex";
  document.getElementById("containerB").style.display = "none";
};

function getLastLetter(nombreUser) {
  let lengthNombre = nombreUser.length;
  console.log(lengthNombre)
  lastLetter = nombreUser.substr(lengthNombre-1,1)
  console.log(lastLetter)
}
