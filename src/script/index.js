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
})

