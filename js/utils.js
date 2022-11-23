
export function calculateImc(weight, height){
    return Number((weight / ((height / 100) ** 2)).toFixed(1))
}