var text = document.getElementById("text");
var button = document.getElementById("button")
var num = 0;


function next() {
  num += 1;

  if (num == 1) {
    text.innerHTML = "Prazer em conheçe-lo, quero que veja oque posso fazer";
    text.style.animation = "blinkCursor 800ms steps(40) infinite normal";
    setTimeout(() => text.style.animation = "blinkCursor 800ms steps(40) infinite normal, typing2 4s steps(40) 1s normal both", 5);
  } else if (num == 2) {
    text.innerHTML = "Talvez esse programa não seja tão dificil de fazer como voce imagina!";
    text.style.animation = "blinkCursor 800ms steps(40) infinite normal";
    setTimeout(() => text.style.animation = "blinkCursor 800ms steps(40) infinite normal, typing3 4s steps(40) 1s normal both", 5);
  } else if (num == 3) {
    text.innerHTML = "Posso te apresentar meu projeto?";
    text.style.animation = "blinkCursor 800ms steps(40) infinite normal";
    setTimeout(() => text.style.animation = "blinkCursor 800ms steps(40) infinite normal, typing4 4s steps(40) 1s normal both", 5);
  }
  if (num > 3) {
    text.innerHTML = "Olá, meu nome é Alexandre";
    num = 0;
  }
}