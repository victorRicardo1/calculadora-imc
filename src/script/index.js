const alturaInp = document.getElementById('altura');
const pesoInp = document.getElementById('peso');

const calcBtn = document.getElementById('calcBtn');
const imcResultEl = document.querySelector('.imcResult');
const concResult = document.querySelector('.conclusao');

let imc = 0;

calcBtn.addEventListener('click', ()=>{ 
    const alturaValue = parseFloat(alturaInp.value);
    const pesoValue = parseFloat(pesoInp.value);
    imc = pesoValue / (alturaValue) ** 2;
    imcResultEl.textContent = imc.toFixed(2);
    if(alturaInp == 'null' && pesoInp == 'null'){
        imcResultEl.textContent = '0'
    }

    if(imc < 18.5){
        concResult.textContent = 'Você está abaixo do peso!';
    }else if(imc >= 18.6 && imc <= 24.9){
        concResult.textContent = 'Você está no peso ideal, parabéns!';
    }else if(imc >= 25 && imc <= 29.9){
        concResult.textContent = 'Você está levemente acima do peso';
    }else if(imc >= 30 && imc <= 34.9){
        concResult.textContent = 'Você está com obesidade grau 1';
    }else if(imc >= 35 && imc <= 39.9){
        concResult.textContent = 'Você está com obesidade severa';
    }else if(imc >= 40){
        concResult.textContent = 'Você está com obesidade mórbida';
    }
})

