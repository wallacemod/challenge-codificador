window.onload = carregarElementos;

var letrasEquivalentes = ["e", "i", "a", "o", "u"];
var palavrasEquivalentes = ["enter", "imes", "ai", "ober", "ufat"];
var i = 0;

function carregarElementos(){
    var criptografarButton = document.getElementById("criptografar");
    var descriptografarButton = document.getElementById("descriptografar");
    criptografarButton.onclick = criptografar;
    descriptografarButton.onclick = descriptografar;

    botaoLimpar = document.getElementById("button-limpar");
    botaoLimpar.onclick = limpar;   
    
    input = document.getElementById("campoTexto");
    historicoCampoTexto = document.getElementById("campoTextoLateral");
    historicoVazio = document.getElementById("historico-vazio");  
}

function criptografar(){
    var j = 0;
    for(var i = 0; i < letrasEquivalentes.length; i++){
        if(input.value.toLowerCase().includes(letrasEquivalentes[i])){
            input.value = input.value.toLowerCase().replaceAll(letrasEquivalentes[i], palavrasEquivalentes[i]);
            var j = 1;
        }
    }
    if(j == 1){
        escreve("(C)");
        conteudoDivLateral();
        j = 0;
    }
}

function descriptografar(){
    var j = 0;
    for(var i = 0; i < palavrasEquivalentes.length; i++){
        if(input.value.toLowerCase().includes(palavrasEquivalentes[i])){
            input.value = input.value.toLowerCase().replaceAll(palavrasEquivalentes[i], letrasEquivalentes[i]);
            j = 1;
        }
    }
    if(j == 1){
        escreve("(D)");
        conteudoDivLateral();
        j = 0;
    }
}

function escreve(tipoCriptografia){
    historicoCampoTexto.value += (input.value + " " + tipoCriptografia + "\n" );
}

function limpar(){
    historicoCampoTexto.value = "";
}

function conteudoDivLateral(){
    if(i == 0){
        historicoVazio.parentNode.removeChild(historicoVazio);
        i++;
    }
}