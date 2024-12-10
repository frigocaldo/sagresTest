document.getElementById("bottoneReset").addEventListener("click", azzeraModulo);
document
  .getElementById("bottoneAiuto")
  .addEventListener("click", finestraAiuto);

function calcolaTotale(index) {
  var qta = parseFloat(document.getElementById("qta" + index).value) || 0;

  if (qta < 0 || qta > 20) {
    alert("Errore: La quantità deve essere compresa tra 0 e 20.");
    document.getElementById("qta" + index).value = "";
    document.getElementById("totale" + index).textContent = "0€";
    calcolaTotaleOrdine();
    return;
  }

  var prezzi = [16, 25, 350, 200];

  var totale = qta * prezzi[index - 1];

  document.getElementById("totale" + index).textContent = totale + "€";

  calcolaTotaleOrdine();
}

function calcolaTotaleOrdine() {
  var totaleOrdine = 0;

  for (var i = 1; i <= 4; i++) {
    var totaleParziale = parseFloat(
      document.getElementById("totale" + i).textContent.replace("€", "") || 0
    );
    totaleOrdine += totaleParziale;
  }

  document.getElementById("totaleOrdine").textContent = totaleOrdine + "€";
}

function azzeraModulo() {
  let flag = confirm("Vuoi azzerare il modulo?");
  if (flag) {
    var elementi = document.querySelectorAll("input");
    elementi.forEach((element) => {
      element.value = null;
    });
    document.getElementById("totale1").textContent = "0€";
    document.getElementById("totale2").textContent = "0€";
    document.getElementById("totale3").textContent = "0€";
    document.getElementById("totale4").textContent = "0€";
    document.getElementById("totaleOrdine").textContent = "0€";
  }
}
function finestraAiuto() {
  alert(
    "Cliccare nei riquadri con scritto 'Inserisci numero' e digitare una quantità compresa tra 0 e 20. \n Il tasto 'Azzera' resetta i riquadri."
  );
}

window.onload = function () {
  let flag = confirm("Vuoi azzerare il modulo?");
  if (flag) {
    var elementi = document.querySelectorAll("input");
    elementi.forEach((element) => {
      element.value = null;
    });
    document.getElementById("totale1").textContent = "0€";
    document.getElementById("totale2").textContent = "0€";
    document.getElementById("totale3").textContent = "0€";
    document.getElementById("totale4").textContent = "0€";
    document.getElementById("totaleOrdine").textContent = "0€";
  } else {
    window.window.stop();
  }
};
