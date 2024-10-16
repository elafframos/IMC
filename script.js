let peso = document.querySelector('.peso')
let altura = document.querySelector('.altura')
let res = document.querySelector('p')

function imc(){
    let hr = document.createElement('hr')
    if(peso.value.length == 0){
        peso.focus()
    }else if(altura.value.length == 0){
        altura.focus()
    } else {
        let pesos = Number(peso.value)
        let alturas = Number(altura.value)
        let calculo = (pesos / (alturas * alturas))
        res.appendChild(hr)
        res.innerHTML = '<br>O seu IMC é: '+ parseFloat(calculo).toFixed(2); //Diminuiur números depois da virgula
    }
}