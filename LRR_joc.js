function inputUser(){
    let inputUser = Math.floor(prompt("Entra un numero: [1,2,3].", "Exemple: 3"));

    if(inputUser === 1){
        //CRIDEM FUNCIO JOC
        jocInit();
        console.log("aqui el joc");
    }
    else if(inputUser === 2){
        //CRIDEM FUNCIO ESTADISTICA
        dadesEstadistiques();
        console.log("estadistiques");
    }
    else if(inputUser === 3){
        //EXIT   
        console.log("exit");
    }
    else{
        console.log("Valor incorrecte. Només pots introduir 1, 2 o 3.");

    }
}

/* APARTAT JOC */

function jocInit(){

}

/* APARTAT ESTADISTICA */

function dadesEstadistiques(){

}

/* APARTAT EXIT GAME */

function exitGame(){

}
