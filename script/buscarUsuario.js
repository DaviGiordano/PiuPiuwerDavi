buscarInput = document.getElementById("buscar");
seuFeed = document.getElementById("seuFeed");
buscarInput.addEventListener("input", function(){
    if(buscarInput.value != ""){
        seuFeed.innerHTML = "Resultados da busca";
        listaPius.forEach(objetos => {
            
            if(objetos.username.indexOf(buscarInput.value) > -1){
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

