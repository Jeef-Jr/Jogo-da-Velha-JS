

let number = 1;
let information = document.querySelector(".xo");
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let n3 = document.getElementById("n3");
let n4 = document.getElementById("n4");
let n5 = document.getElementById("n5");
let n6 = document.getElementById("n6");
let n7 = document.getElementById("n7");
let n8 = document.getElementById("n8");
let n9 = document.getElementById("n9");

function registrarXO (n){


    if(number === 1){
        var xo = 'X'
        number = 0;
    }else if(number === 0) {
        var xo = 'O'
        number = 1;
        
    }

    switch(n){
        case "n1": {
            setStates(n1, xo);
            break;
        }case "n2": {
            setStates(n2, xo);
            break;
        } case "n3": {
            setStates(n3, xo);
            break;
        }
        case "n4": {
            setStates(n4, xo);
            break;
        }case "n5": {
            setStates(n5, xo);
            break;
        } case "n6": {
            setStates(n6, xo);
            break;
        }
        case "n7": {
        setStates(n7, xo);
            break;
        }
        case "n8": {
            setStates(n8, xo);
            break;
        }
        case "n9": {
            setStates(n9, xo);
            break;
        }
    }
    
}

function setStates(n, xo){

    if(n.innerHTML == "X"){
        console.log("campo já selecionado")
    }else if(n.innerHTML == "O"){
        console.log("campo já selecionado")
    }else {
        n.innerHTML = xo;
        information.innerHTML = xo;
    }

}


function regraDeNegocio(){

    if(n1.innerHTML == "X" || n2.innerHTML == "X" || n3.innerHTML == "X"){

    }else if(n1.innerHTML == "X" || n4.innerHTML == "X" || n7.innerHTML == "X"){

    }else if(n1.innerHTML == "X" || n5.innerHTML == "X" || n9.innerHTML == "X") {

    }

}


function reiniciar () {
    n1.innerHTML = ''
    n2.innerHTML = ''
    n3.innerHTML = ''
    n4.innerHTML = ''
    n5.innerHTML = ''
    n6.innerHTML = ''
    n7.innerHTML = ''
    n8.innerHTML = ''
    n9.innerHTML = ''
}