
export function calculateImc(weight, height){
    return Number((weight / ((height / 100) ** 2)).toFixed(1))
}

export const showImc = {
    messageImc: document.querySelector('#resultImc')
}

export const resultStatusImc = {
    messageStats: document.querySelector('#statusImc')
}