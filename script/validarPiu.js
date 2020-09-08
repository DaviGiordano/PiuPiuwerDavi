//Função para validar envio de novo post

var caixaTexto = document.querySelector("#digitarPiu");
var botaoEnviar = document.querySelector("#enviarPiu");
var contador = document.querySelector("#contador");
caixaTexto.addEventListener("input",function(){
    var texto = caixaTexto.value;
    contador.innerHTML = texto.length + "/140";
    if(texto.length>140){
        botaoEnviar.style.color = "black";
        botaoEnviar.style.background = "none";
        botaoEnviar.setAttribute("disabled","disabled");
        contador.style.color = "red";

    }
    else{
        botaoEnviar.style.color = "#FFFFFF";
        botaoEnviar.style.background = "#003F88";
        botaoEnviar.removeAttribute("disabled");
        contador.style.color = "black";

    }
});