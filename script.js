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

const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", MudaParaoModoEscuro);

function MudaParaoModoEscuro() {
    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
    } else {
        corpoPagina.classList.add("tema-escuro");
    }
}