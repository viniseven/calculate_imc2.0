import { calculateImc, showImc, resultStatusImc } from "./utils.js";

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = (event) => {
    event.preventDefault()
    
    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    const valueImc = calculateImc(weight, height);

    showImc.messageImc.innerText = `${valueImc}`;
    
    let messageStatusImc


    function verifyImc(){
        if (valueImc < 18.5 ){
            showImc.messageImc.style.color = '#8A0829'
            resultStatusImc.messageStats.innerText = 'Você está abaixo do peso'
        } else if (valueImc > 18.5 && valueImc <= 24.9){
            showImc.messageImc.style.color = '#31B404'
            resultStatusImc.messageStats.innerText = 'Você está com o peso normal'
        }else if (valueImc >= 25 && valueImc <= 29.9){
            showImc.messageImc.style.color = '#ffc92ecc'
            resultStatusImc.messageStatusImc = 'Você está com sobrepeso' 
        } else if(valueImc >= 30 && valueImc <= 34.9 ){
            showImc.messageImc.style.color = '#FF8000'
            resultStatusImc.messageStatusImc = 'Você está com Obesidade Grau I'
        }
         else if(valueImc >= 35 && valueImc <= 39.9){
            showImc.messageImc.style.color = '#FF4000'
            resultStatusImc.messageStatusImc = 'Você está com Obesidade Grau II'
        }
         else{
            showImc.messageImc.style.color = '#B40404'
            resultStatusImc.messageStatusImc = 'Você está com Obesidade Grau III ou Mórbida'
        }
    }

    verifyImc()
   
    
   form.reset()
}

