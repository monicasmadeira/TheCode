var numeroSecreto = parseInt(Math.random() * 4000);
var cont = 0;

console.log(numeroSecreto);
var elementoResultado = document.getElementById("resultado");

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Cofre aberto!";
    document.getElementById("cofre").src = "assets/COFRE-ABERTO.png"
  } else {
    elementoResultado.innerHTML =
      "SENHA ERRADA";
      
    Blow();

  }
}

function Blow() {
  if (resultado != numeroSecreto) {
    cont = cont + 1;
    if (cont == 3) {
        document.getElementById("cofre").src = "assets/explosion.gif"
        elementoResultado.innerHTML =
      " ";
      setTimeout(function(){
        window.location.reload(1);
     }, 2000);

    }
    console.log(cont);

  }
}