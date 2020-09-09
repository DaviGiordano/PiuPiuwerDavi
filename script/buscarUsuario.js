buscarInput = document.getElementById("buscar");

buscarInput.addEventListener("input", function(){
    if(buscarInput.value != ""){
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
        listaPius.forEach(objetos => {
            document.getElementById(objetos.username).style.display = "block";
            document.getElementById(objetos.username).style.border = "none";
        });
    }
});

