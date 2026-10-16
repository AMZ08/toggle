const body = document.querySelector("button");
const texto = document.querySelector("h2");

body.addEventListener("click", function(){
    document.body.classList.toggle("escuro");
    if (document.body.classList.contains("escuro")) {
        body.textContent = "☠️";
        texto.textContent = "31 DE OUTUBRO";
      
    } else {
        body.textContent = "🐈‍⬛";
        texto.textContent = "30 DE OUTUBRO";
    }
});

