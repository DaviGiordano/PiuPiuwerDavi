//função para enviar piu
var caixaTexto = document.querySelector("#digitarPiu");
var enviarPiu = document.querySelector("#enviarPiu");
var divInserirPiu = document.querySelector("#divInserirPiu")
var avisoCampoVazio = document.querySelector("#avisoCampoVazio");
var divFeed = document.querySelector("#divFeed");
var contador = document.querySelector("#contador");

enviarPiu.addEventListener("click", function(){
    var digitado = caixaTexto.value;
    if(digitado.length == 0){
       avisoCampoVazio.style.display = "flex";
       contador.style.display = "none";
    }
    else{
        var box = document.createElement("div");
        box.classList.add("piu");
        box.style.order = 1;
        //isso funciona por enquanto, mas as orders tao sempre ficando == 1
        divFeed.appendChild(box);

        var img = document.createElement("img");
        img.classList.add("fotoPiuwer");
        img.setAttribute("src","img/emmanuel-gido.jpg");
        box.appendChild(img);

        var nome = document.createElement("p");
        nome.classList.add("nomePiuwer");
        nome.innerHTML = "Alan Schnauser";
        box.appendChild(nome);

        var msg = document.createElement("p");
        msg.classList.add("mensagemPiuwer");
        msg.innerHTML = digitado;
        msg.style.wordWrap ="wrap";
        box.appendChild(msg);

        caixaTexto.value = "";
        contador.innerHTML = "0/140";
    }
    console.log(digitado.length);
    
});
//caso o usuário comece a digitar após tentar enviar o campo vazio
caixaTexto.addEventListener("input", function(){
    avisoCampoVazio.style.display = "none";
    contador.style.display = "flex";

});