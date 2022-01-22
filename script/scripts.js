function confereResposta() {
    respostaCerta = "salsichinha"
    const respostaDoUsuario = document.getElementById("inputResposta");
    // uso do método toLowerCase para fazer a resposta ser case insentive
    if (respostaDoUsuario.value.toLowerCase() === respostaCerta.toLowerCase()) {
        // redirecionar para página 2
        window.location.href = '/pergunta02.html'
    } else {
        alert("Resposta errada, tente outra vez.");
        respostaDoUsuario.value = "";
        respostaDoUsuario.focus();
    }    
}

