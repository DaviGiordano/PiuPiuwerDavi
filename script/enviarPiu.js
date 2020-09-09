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
        //acho que copiei muito o código da entrada dos pius pelo Request e por um novo;
        //eu podia ter criado uma função com o objetivo de criar um piu...
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

        var usernameSpan = document.createElement("span");
        usernameSpan.classList.add("usernameSpan");
        usernameSpan.innerHTML = " " + "@alanCrocodile";
        nome.appendChild(usernameSpan);

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
        
        var divInteracoes = document.createElement("div");
        divInteracoes.classList.add("divInteracoes");
        box.appendChild(divInteracoes);

        var likeBtn = document.createElement("img");
            likeBtn.classList.add("likeBtn");
            likeBtn.id = "likeBtn" + "@alanCrocodile";
            likeBtn.setAttribute("src","../img/CoracaoVazio.svg");
            divInteracoes.appendChild(likeBtn);

            pessoa.liked = false;

            var contadorLike = document.createElement("span");
            pessoa.numLikes = 0;
            contadorLike.classList.add("contadorLike");
            contadorLike.id = "contadorLike" + "@alanCrocodile";
            contadorLike.innerHTML = pessoa.numLikes;
            divInteracoes.appendChild(contadorLike);

            likeBtn.addEventListener("click",function(){
                if(pessoa.liked==false){
                    pessoa.numLikes++;
                    contadorLike.innerHTML = pessoa.numLikes;
                    likeBtn.setAttribute("src","../img/CoracaoCheio.svg");
                    pessoa.liked=true;
                }
                else if(pessoa.liked==true){
                    pessoa.numLikes--;
                    contadorLike.innerHTML = pessoa.numLikes;
                    likeBtn.setAttribute("src","../img/CoracaoVazio.svg");
                    pessoa.liked=false;
                }
                

            });
            var pinBtn = document.createElement("img");
            pinBtn.classList.add("pinBtn");
            pinBtn.id = "pinBtn" + "likeBtn" + "@alanCrocodile";
            pinBtn.setAttribute("src","../img/AlfineteVazio.svg");
            divInteracoes.appendChild(pinBtn);
            pessoa.pinned = false;

            pinBtn.addEventListener("click",function(){
                if(pessoa.pinned==false){
                    
                    pinBtn.setAttribute("src","../img/AlfineteCheio.svg");
                    pessoa.pinned=true;
                    listaPius.forEach(element => {
                        document.getElementById(element.username).style.display = "none";
                    });
                    document.getElementById(pessoa.username).style.display = "block";
                    document.getElementById(pessoa.username).style.border = "2px solid #003F88";
                }
                else if(pessoa.pinned==true){

                    pinBtn.setAttribute("src","../img/AlfineteVazio.svg");
                    pessoa.pinned=false;
                    document.getElementById(pessoa.username).style.display = "none";
                    document.getElementById(pessoa.username).style.border = "none";

                    listaPius.forEach(element => {
                        document.getElementById(element.username).style.display = "block";
                    });
                }
                

            });
    }
    console.log(digitado.length);
    
});
//caso o usuário comece a digitar após tentar enviar o campo vazio
caixaTexto.addEventListener("input", function(){
    avisoCampoVazio.style.display = "none";
    contador.style.display = "flex";

});