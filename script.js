var text = document.getElementById("text");
var button = document.getElementById("button")
var num = 0;


function next() {
  num += 1;

  if (num == 1) {
    text.style.animation = "blinkCursor 800ms steps(40) infinite normal";
    setTimeout(() => text.style.animation = "blinkCursor 800ms steps(40) infinite normal, typing2 4s steps(40) 1s normal both", 5);
    text.innerHTML = "Prazer em conheçe-lo, quero que veja oque posso fazer";
  } else if (num == 2) {
    text.style.animation = "blinkCursor 800ms steps(40) infinite normal";
    setTimeout(() => text.style.animation = "blinkCursor 800ms steps(40) infinite normal, typing3 5s steps(40) 1s normal both", 5);
    text.innerHTML = "Talvez esse programa não seja tão dificil de fazer como voce imagina!";
  } else if (num == 3) {
    text.style.animation = "blinkCursor 800ms steps(40) infinite normal";
    setTimeout(() => text.style.animation = "blinkCursor 800ms steps(40) infinite normal, typing4 4s steps(40) 1s normal both", 5);
    text.innerHTML = "Posso te apresentar meu projeto?";
  } else if (num == 4) {
    text.className = "animate__animated animate__fadeIn";
    text.style = '';
    text.innerHTML = "<p style='color: white;'>Esse é meu projeto chamado My Finances</p> <br><img src='myfinances.png' height='700' width='1200' border='1px'>";
  }
  if (num > 4) {
    text.innerHTML = "Olá, meu nome é Alexandre";
    num = 0;
  }
}