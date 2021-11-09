var text = document.getElementById("text");
var button = document.getElementById("button")
var myfinances = document.getElementById("myfinances")
var final = document.getElementById("final")
var num = 0;


function next() {
  num += 1;
  if (num == 1) {
    text.style.animation = "blinkCursor 800ms steps(40) infinite normal, typing2 4s steps(40) 500ms normal both";
    text.innerHTML = "Prazer em conheçe-lo, quero que veja oque posso fazer";
  } else if (num == 2) {
    text.style.animation = "blinkCursor 800ms steps(40) infinite normal, typing3 5s steps(50) 500ms normal both";
    text.innerHTML = "Talvez esse programa não seja tão dificil de fazer como voce imagina!";
  } else if (num == 3) {
    text.style.animation = "blinkCursor 800ms steps(40) infinite normal, typing4 4s steps(40) 500ms normal both";
    text.innerHTML = "Posso te apresentar meu projeto?";
  } else if (num == 4) {
    text.style.display = "none";
    myfinances.style.display = 'block';
  } else if (num == 5) {
    myfinances.style.display = 'none';
    final.style.display = 'block';
  } else if (num == 6) {
    location.reload();
  }

}