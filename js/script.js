import { calculateImc, showImc, showStats } from "./utils.js";

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = (event) => {
    event.preventDefault()
    
    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    const resultImc = calculateImc(weight, height);

    const messageImc = `${resultImc}`

    showImc.messageImc.innerText = messageImc;
   
   let messageStatusImc


    if (resultImc < 18.5 ){
        messageStatusImc = 'Você está abaixo do peso'
        showImc.messageImc.style.color = '#8A0829'
    } else if (resultImc > 18.5 && resultImc <= 24.9){
        messageStatusImc = 'Você está com o peso normal'
        showImc.messageImc.style.color = '#31B404'
    }else if (resultImc >= 25 && resultImc <= 29.9){
        messageStatusImc = 'Você está com sobrepeso'
        showImc.messageImc.style.color = '#ffc92ecc'
      
    } else if(resultImc >= 30 && resultImc <= 34.9 ){
        messageStatusImc = 'Você está com Obesidade Grau I'
        showImc.messageImc.style.color = '#FF8000'
    }
     else if(resultImc >= 35 && resultImc <= 39.9){
        messageStatusImc = 'Você está com Obesidade Grau II'
        showImc.messageImc.style.color = '#FF4000'
    }
     else{
        messageStatusImc = 'Você está com Obesidade Grau III ou Mórbida'
        showImc.messageImc.style.color = '#B40404'
    }

    showStats.messageStats.innerText = messageStatusImc;
}

