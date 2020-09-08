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
            //console.log(element.nome);
            //console.log(element.mensagem);
            //console.log(element.imagem);

            var pessoa = new Object;
            pessoa.nome = element.nome;
            pessoa.username = element.username;
            pessoa.mensagem = element.mensagem;
            listaPius.unshift(pessoa);
            console.log(listaPius);
            console.log(listaPius.indexOf(pessoa));
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

            var msg = document.createElement("p");
            msg.classList.add("mensagemPiuwer");
            msg.innerHTML = element.mensagem;
            box.appendChild(msg);
            i++;
        });
        listaPius.forEach(element => {
            document.getElementById(element.username).style.order = listaPius.indexOf(element);
        });
        
    }
    xhr.send();
}