// Corrigido de querySelectAll para querySelectorAll
const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", botaoclicado);

    function botaoclicado() {
        console.log("fui clicado");
        let texto = botao.querySelector("span");
        let valorAtual = parseInt(texto.textContent, 10);

        if (!curtiu) {
            texto.textContent = valorAtual + 1;
            curtiu = true;
        } else {
            texto.textContent = valorAtual - 1;
            curtiu = false;
        }
    }
});