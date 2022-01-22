function confereResposta() {
    respostaCerta = "salsichinha"
    const respostaDoUsuario = document.getElementById("inputResposta");
    if (respostaDoUsuario.value === respostaCerta) {
        // redirecionar para página 2
        window.location.href = '/pergunta02.html'
    } else {
        alert("Resposta errada, tente outra vez.");
        respostaDoUsuario.value = "";
        respostaDoUsuario.focus();
    }    
}