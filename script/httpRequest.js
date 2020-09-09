var listaPius = [];

function fazerRequest(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://next.json-generator.com/api/json/get/EkyZfHLU_');

    xhr.onload = function(){
        var divFeed = document.querySelector("#divFeed");
        const data = JSON.parse(xhr.response);
        console.log(data);
        var i = 2;
        data.forEach(element => {


            var pessoa = new Object;
            pessoa.nome = element.nome;
            pessoa.username = element.username;
            pessoa.mensagem = element.mensagem;
            listaPius.unshift(pessoa);
           
            var box = document.createElement("div");
            box.classList.add("piu");
            box.id = element.username;
            box.style.order = i;
            divFeed.appendChild(box);


            var img = document.createElement("img");
            img.classList.add("fotoPiuwer");
            img.setAttribute("src",element.imagem);
            box.appendChild(img);

            var nome = document.createElement("p");
            nome.classList.add("nomePiuwer");
            nome.innerHTML = element.nome;
            box.appendChild(nome);

            var usernameSpan = document.createElement("span");
            usernameSpan.classList.add("usernameSpan");
            usernameSpan.innerHTML = " " + element.username;
            nome.appendChild(usernameSpan);

            var msg = document.createElement("p");
            msg.classList.add("mensagemPiuwer");
            msg.innerHTML = element.mensagem;
            box.appendChild(msg);
            i++;

            var divInteracoes = document.createElement("div");
            divInteracoes.classList.add("divInteracoes");
            box.appendChild(divInteracoes);

            var likeBtn = document.createElement("img");
            likeBtn.classList.add("likeBtn");
            likeBtn.id = "likeBtn" + element.username;
            likeBtn.setAttribute("src","../img/CoracaoVazio.svg");
            divInteracoes.appendChild(likeBtn);

            pessoa.liked = false;

            var contadorLike = document.createElement("span");
            pessoa.numLikes = 0;
            contadorLike.classList.add("contadorLike");
            contadorLike.id = "contadorLike" + element.username;
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
            pinBtn.id = "pinBtn" + element.username;
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
        });
        listaPius.forEach(element => {
            document.getElementById(element.username).style.order = listaPius.indexOf(element);
        });
        
    }
    xhr.send();
}