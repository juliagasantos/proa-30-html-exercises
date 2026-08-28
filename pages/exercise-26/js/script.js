const botao = document.getElementById("btnExemplos");
const exemplos = document.getElementById("exemplos");

botao.addEventListener("click", () => {
    exemplos.classList.toggle("mostrar");

    if (exemplos.classList.contains("mostrar")) {
        botao.textContent = "Ocultar exemplos";
    } else {
        botao.textContent = "Ver exemplos";
    }
});