let btnMudaCor = document.querySelector("#btnMudaCor");

btnMudaCor.addEventListener("click", MudarACorFundo);
function MudarACorFundo(){
    fundo = document.querySelector("body");
    fundo.style.backgroundColor = 'black';

    letras = document.querySelectorAll("label")
    for (var i = 0; i < letras.length; i++) {
        letras[i].style.color = 'white';
    };

    titulo = document.querySelector("h1");
    titulo.style.color = 'white'

    linha = document.querySelector("hr");
    linha.style.color = 'white'

    resut = document.querySelector("#resultado");
    resut.style.color = 'white'

}


let btncalcular = document.querySelector("#btncalcular");

btncalcular.addEventListener("click", Calcular)


function Calcular(){
    altura = Number(document.querySelector("#altura").value);
    let flotAltura = parseFloat(altura);
    peso = Number(document.querySelector("#peso").value);
    let flotpeso = parseFloat(peso);

    let IMCFlot = flotpeso/(flotAltura*2);
    let IMC = IMCFlot.toFixed(2);

    console.log(IMC)
    
    let conteudoDiv = document.querySelector("#resultado");


    if(IMC < 18.05){
        conteudoDiv.innerText =" O seu IMC é " + IMC + " Você está abaixo do peso";
        console.log("entou aqui abaixo do peso")

    }else if(IMC >= 18.05 && IMC < 24.99){
        conteudoDiv.innerText =" O seu IMC é " + IMC + " Você está com o peso normal";
        console.log("entou aqui peso normal")

    }else if(IMC >= 25 && IMC < 29.99){
        conteudoDiv.innerText =" O seu IMC é " + IMC + " Você está com sobrepeso";
        console.log("entou aqui sobrepeso")

    }else if (IMC >= 30){
        conteudoDiv.innerText =" O seu IMC é " + IMC + " Você está com obesidade";
        console.log("entou aqui obesidade")

    }






}