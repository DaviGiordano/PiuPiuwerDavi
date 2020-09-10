buscarInput = document.getElementById("buscar");
seuFeed = document.getElementById("seuFeed");
buscarInput.addEventListener("input", function(){
    if(buscarInput.value != ""){
        seuFeed.innerHTML = "Resultados da busca";
        listaPius.forEach(objetos => {
            digitado = buscarInput.value;
            console.log(digitado.toUpperCase());
            console.log(objetos.username.toUpperCase());
            if(objetos.username.toUpperCase().indexOf(digitado.toUpperCase()) > -1){
                document.getElementById(objetos.username).style.display = "block";
                document.getElementById(objetos.username).style.border = "2px solid #003F88";
            }else{
                document.getElementById(objetos.username).style.display = "none";
            }
        });  
    }
    
    else if(buscarInput.value == "") {
        seuFeed.innerHTML = "Seu Feed";
       // pinBtn.style.display = "block";

        listaPius.forEach(objetos => {
            document.getElementById(objetos.username).style.display = "block";
            document.getElementById(objetos.username).style.border = "none";
        });
    }
});

