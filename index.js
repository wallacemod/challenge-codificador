window.onload = carregarElementos;

var equivalentLetters = ["e", "i", "a", "o", "u"];
var equivalentWords = ["enter", "imes", "ai", "ober", "ufat"];
var i = 0;

function carregarElementos(){
    var encodeButton = document.getElementById("encode");
    var decodeButton = document.getElementById("decode");
    eraseButton = document.getElementById("erase-button");

    encodeButton.onclick = encode;
    decodeButton.onclick = decode;
    eraseButton.onclick = erase;   

    mainTextArea = document.getElementById("mainsection-textarea");
    historyTextArea = document.getElementById("side-textarea");

    historyEmptyMessage = document.getElementById("side-content");  

    centralize = document.getElementById("centralize");
    historySection = document.getElementById("side-section");
    historyStoreMessage = historySection.cloneNode(historySection.firstElementChild);
}

function encode(){
    var j = 0;
    for(var i = 0; i < equivalentLetters.length; i++){
        if(mainTextArea.value.toLowerCase().includes(equivalentLetters[i])){
            mainTextArea.value = mainTextArea.value.toLowerCase().replaceAll(equivalentLetters[i], equivalentWords[i]);
            var j = 1;
        }
    }
    if(j == 1){
        writeCryptType("(C)");
        historyMessageEraser();
        j = 0;
    }
}

function decode(){
    var j = 0;
    for(var i = 0; i < equivalentWords.length; i++){
        if(mainTextArea.value.toLowerCase().includes(equivalentWords[i])){
            mainTextArea.value = mainTextArea.value.toLowerCase().replaceAll(equivalentWords[i], equivalentLetters[i]);
            j = 1;
        }
    }
    if(j == 1){
        writeCryptType("(D)");
        historyMessageEraser();
        j = 0;
    }
}

function writeCryptType(cryptType){
    historyTextArea.value += (mainTextArea.value + " " + cryptType + "\n" );
}

function historyMessageEraser(){
    if(i == 0){
        historyEmptyMessage.parentNode.removeChild(historyEmptyMessage);
        i++;
    }
}

function erase(){
    historySection.parentNode.removeChild(historySection);
    historyMessageRewrite();
}

function historyMessageRewrite(){
    centralize.appendChild(historyStoreMessage);
    i = 0;
    carregarElementos();
}