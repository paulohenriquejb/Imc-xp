function start(){
    var buttonCalculateIMc = document.querySelector('#button-calculate-imc')
    buttonCalculateIMc.addEventListener('click', handleButtonClick);

    handleButtonClick();



   
}

function calculateImc(weigth, heigth){
    return weigth / (heigth*heigth)
}

function handleButtonClick(){
    var inputweight = document.querySelector('#input-weigth');
    var inputheight = document.querySelector('#input-heigth');
    var imcResult = document.querySelector('#imc-result');
   

    var weigth =Number(inputweight.value)
    var heigth =Number(inputheight.value)

  
    var imc = calculateImc(weigth, heigth)
    var imcformatado = imc.toFixed(2)
    
    imcResult.textContent = imcformatado;

    var p = document.getElementById("resultado")
    if (imcformatado >= 16 && imcformatado <=16.9){
        p.textContent ="Muito abaixo do peso"
    }else  if (imcformatado >16.9 && imcformatado <=18.4){
        p.textContent ="Abaixo do peso"
    } else  if (imcformatado >18.4 && imcformatado <=24.9){
        p.textContent ="Peso normal"
    }else  if (imcformatado >24.9 && imcformatado <=29.9){
        p.textContent ="Acima do peso"
    }else  if (imcformatado >29.9 && imcformatado <=34.9){
        p.textContent ="Obesidade grau I"
    }else  if (imcformatado >34.9 && imcformatado <=40){
        p.textContent ="Obesidade grau II"
    }else  if (imcformatado >40){
        p.textContent ="Obesidade grau III"
    }
    else {
        p.textContent =""
    }
   


    
   }

    
    



start()