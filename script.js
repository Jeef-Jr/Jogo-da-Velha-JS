

let number = 1;

let Xganhou = 0;
let Oganhou = 0;

let XganhouInner =  document.getElementById("gX");
let OganhouInner =  document.getElementById("gO");


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
    }else if(number === 0) {
        var xo = 'O'
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
        number = 0;
    }else if(n.innerHTML == "O"){
        console.log("campo já selecionado")
        number = 1;
    }else if(n.innerHTML != "X" && n.innerHTML != "O") {
        n.innerHTML = xo;
        information.innerHTML = xo;

        if(n.innerHTML == "X"){
            number = 0
        }else {
            number = 1;
        }

        setTimeout(() => {
            regraDeNegocio();
        }, 200);
    }

}


function regraDeNegocio(){

    const x = "X";
    const o = "O";

    if(n1.innerHTML == "X" && n2.innerHTML == "X" && n3.innerHTML == "X"){
        console.log("Entrou 1");
       notify(x);
    }else if(n1.innerHTML == "X" && n4.innerHTML == "X" && n7.innerHTML == "X"){
        console.log("Entrou 2");
        notify(x);
    }else if(n1.innerHTML == "X" && n5.innerHTML == "X" && n9.innerHTML == "X") {
        console.log("Entrou 3");
        notify(x);
    }else if(n2.innerHTML == "X" && n5.innerHTML == "X" && n8.innerHTML == "X"){
        console.log("Entrou 4");
        notify(x);
    }else if(n3.innerHTML == "X" && n6.innerHTML == "X" && n9.innerHTML == "X"){
        console.log("Entrou 5");
        notify(x);
    }else if(n7.innerHTML == "X" && n8.innerHTML == "X" && n9.innerHTML == "X"){
        console.log("Entrou 6");
        notify(x);
    }else if(n4.innerHTML == "X" && n5.innerHTML == "X" && n6.innerHTML == "X"){
        console.log("Entrou 7");
        notify(x);
    }else if(n3.innerHTML == "X" && n5.innerHTML == "X" && n7.innerHTML == "X"){
        console.log("Entrou 8");
        notify(x);
    }else if(n1.innerHTML == "O" && n2.innerHTML == "O" && n3.innerHTML == "O") {
        console.log("Entrou 9");
        notify(o);
    }else if(n1.innerHTML == "O" && n4.innerHTML == "O" && n7.innerHTML == "O"){
        console.log("Entrou 10");
        notify(o);
    }else if(n1.innerHTML == "O" && n5.innerHTML == "O" && n9.innerHTML == "O") {
        console.log("Entrou 11");
        notify(o);
    }else if(n2.innerHTML == "O" && n5.innerHTML == "O" && n8.innerHTML == "O"){
        console.log("Entrou 12");
        notify(o);
    }else if(n3.innerHTML == "O" && n6.innerHTML == "O" && n9.innerHTML == "O"){
        console.log("Entrou 13");
        notify(o);
    }else if(n9.innerHTML == "O" && n8.innerHTML == "O" && n9.innerHTML == "O"){
        console.log("Entrou 14");
        notify(o);
    }else if(n4.innerHTML == "O" && n5.innerHTML == "O" && n6.innerHTML == "O"){
        console.log("Entrou 15");
        notify(o);
    }else if(n3.innerHTML == "O" && n5.innerHTML == "O" && n7.innerHTML == "O"){
        console.log("Entrou 16");
        notify(o);
    }
}

function notify(xo){

    swal(`( ${xo} ) Ganhou!!`, "Vamos jogar novamente?", "success");
    XOResultado(xo);
    reiniciar();
}

function XOResultado(xo){

    if(xo == "X"){
        Xganhou += + 1;
       XganhouInner.innerHTML = Xganhou;

    }else {
        Oganhou += + 1;
        OganhouInner.innerHTML = Oganhou;
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

function zerarPontuacao(){
    Xganhou = 0;
    Oganhou = 0;

    OganhouInner.innerHTML = Oganhou;
    XganhouInner.innerHTML = Xganhou;
}