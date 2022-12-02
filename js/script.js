import { calculateImc, showImc, resultStatusImc, verifyInputIsNotNumber, verifyInputIsEmpty} from "./utils.js";
import { alertError } from "./alertError.js";

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = (event) => {
    event.preventDefault()
    
    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    const inputNotNumber  = verifyInputIsNotNumber(weight) || verifyInputIsNotNumber(height)
    const inputIsEmpty = verifyInputIsEmpty(weight) || verifyInputIsEmpty(height)

    if (inputNotNumber){
        alertError.messageAlert.innerText = 'Digite somente números'
        alertError.open()
        form.reset()
        return
    }

    if(inputIsEmpty){
        alertError.messageAlert.innerText = 'Campos vazios! Preencha os campos'
        alertError.open()
        return
    }

    const valueImc = calculateImc(weight, height);

    showImc.messageImc.innerText = `${valueImc}`;
    
    let messageStatusImc


    function verifyImc(){
        if (valueImc < 18.5 ){
            showImc.messageImc.style.color = '#8A0829'
            resultStatusImc.messageAlertImc.innerText = 'Você está abaixo do peso'
        } else if (valueImc > 18.5 && valueImc <= 24.9){
            showImc.messageImc.style.color = '#31B404'
            resultStatusImc.messageAlertImc.innerText = 'Você está com o peso normal'
        }else if (valueImc >= 25 && valueImc <= 29.9){
            showImc.messageImc.style.color = '#ffc92ecc'
            resultStatusImc.messageAlertImc.innerText = 'Você está com sobrepeso' 
        } else if(valueImc >= 30 && valueImc <= 34.9 ){
            showImc.messageImc.style.color = '#FF8000'
            resultStatusImc.messageAlertImc.innerText = 'Você está com Obesidade Grau I'
        }
         else if(valueImc >= 35 && valueImc <= 39.9){
            showImc.messageImc.style.color = '#FF4000'
            resultStatusImc.messageAlertImc.innerText = 'Você está com Obesidade Grau II'
        }
         else{
            showImc.messageImc.style.color = '#B40404'
            resultStatusImc.messageAlertImc.innerText = 'Você está com Obesidade Grau III ou Mórbida'
        }
    }

    verifyImc()
   
    
   form.reset()
}

