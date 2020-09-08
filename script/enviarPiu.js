//função para enviar piu
var caixaTexto = document.querySelector("#digitarPiu");
var enviarPiu = document.querySelector("#enviarPiu");
var divInserirPiu = document.querySelector("#divInserirPiu")
var avisoCampoVazio = document.querySelector("#avisoCampoVazio");
var divFeed = document.querySelector("#divFeed");
var contador = document.querySelector("#contador");
var numMensagens = 0;
enviarPiu.addEventListener("click", function(){
    var digitado = caixaTexto.value;
    if(digitado.length == 0){
       avisoCampoVazio.style.display = "flex";
       contador.style.display = "none";
    }
    else{
        numMensagens += 1;
        var pessoa = new Object;
        pessoa.nome = "Alan Schnauser";
        pessoa.username = "@alanCrocodile"+numMensagens;
        pessoa.mensagem = digitado;
        listaPius.unshift(pessoa);
        var box = document.createElement("div");
        box.classList.add("piu");
        box.id = "@alanCrocodile"+numMensagens;
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

        listaPius.forEach(element => {
            document.getElementById(element.username).style.order = listaPius.indexOf(element);
        });
    }
    console.log(digitado.length);
    
});
//caso o usuário comece a digitar após tentar enviar o campo vazio
caixaTexto.addEventListener("input", function(){
    avisoCampoVazio.style.display = "none";
    contador.style.display = "flex";

});