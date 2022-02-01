async function buscaCharada(faseAtual) {
    let resp = await axios.get('../charadas.json');
    let arrayDeCharadas = resp.data;
    return arrayDeCharadas.filter(function (e) {
        return e.fase == faseAtual;
    })[0]
}
function atualizarPagina(charada) {
    console.log(charada)
    AtualizaImagem(charada.imagem, charada.alt);
    AtualizaTexto(charada.titulo, charada.texto, charada.dica);
    adicionarListeners(charada);
}
function LimpaResposta() {
    let inputDeRespostaDoUsuario = document.getElementById('inputResposta')
    inputDeRespostaDoUsuario.value = "";
    inputDeRespostaDoUsuario.focus();
}
function AtualizaImagem(source, txtAlt) {
    let img = document.getElementById('imagem');
    img.setAttribute('src', source);
    img.setAttribute('alt', txtAlt);
}
function AtualizaTexto(txtTitulo, txtPergunta, txtdica) {
    let perguntaDaFase = document.getElementById('texto');
    let tituloDaFase = document.getElementById('titulo')
    let dicaDaFase = document.getElementById('dica');

    tituloDaFase.innerHTML = txtTitulo;
    perguntaDaFase.innerHTML = txtPergunta
    dicaDaFase.innerHTML = txtdica;
}
function adicionarListeners(charada) {
    document.getElementById("inputResposta")
        .addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                conferirResposta(charada);
            }
        })

    document.getElementById("botao-confirmar")
        .addEventListener("click", (e) => {
            conferirResposta(charada);
        })
}
async function conferirResposta(charada) {
    resposta = document.getElementById('inputResposta').value;
    if (resposta.toLowerCase() === charada.resposta.toLowerCase()) {
        let novaCharada = await buscaCharada(charada.proximaFase)
        atualizarPagina(novaCharada);
        localStorage.setItem('faseAtual', novaCharada.fase);
    } else {
        alert("Resposta errada, tente outra vez.");
    }
}

console.log(localStorage);
if (!localStorage.faseAtual)
    localStorage.setItem('faseAtual', 1);

buscaCharada(localStorage.faseAtual)
    .then((charada) => {
        atualizarPagina(charada);
    })