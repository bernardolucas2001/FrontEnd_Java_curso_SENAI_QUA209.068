function calcularIMC(){
    const peso = parseFloat(document.getElementById('peso').value)
    const altura = parseFloat(document.getElementById('altura').value)
    
    if(!isNaN(peso) && !isNaN(altura) && altura > 0){
        const imc = peso / (altura*altura)
        document.getElementById('resultado').textContent = imc.toFixed(2)

        if(imc<18.5){
            document.getElementById('mensagem').textContent = 'Você está abaixo do peso ideal. Para sua altura, o peso idela seria' + (24.9*(altura*altura)).toFixed(2)+' KG'
        } else if(imc >= 18.5 && imc <= 24.9){
            document.getElementById('mensagem').textContent = "Você está no peso ideal"
        }else if(imc > 24.9 && imc < 29.9){
            document.getElementById('mensagem').textContent = "Você está com sobrepeso. Para sua altura, o peso idela seria" + (24.9*(altura*altura)).toFixed(2)+' KG'
        } else if(imc > 29.9 && imc <= 39.9){
            document.getElementById('mensagem').textContent = "Você está com obesidade. Para sua altura, o peso idela seria" + (24.9*(altura*altura)).toFixed(2)+' KG'
        } else {
            document.getElementById('mensagem').textContent = "Você está com obesidade grave. Para sua altura, o peso idela seria" + (24.9*(altura*altura)).toFixed(2)+' KG'
        }

        }
        else {
            document.getElementById('resultado').textContent = "Informe um valor válido!"
            document.getElementById('mensagem').textContent = ''
        }
    }
    