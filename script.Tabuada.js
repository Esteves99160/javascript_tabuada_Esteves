let calculo = document.querySelector("#calcular");
calcular.addEventListener("click", somatoria);

function somatoria(){
    let tn1 = document.querySelector("#txtn1");

    let n1 = Number(tn1.value);

    let resultado = document.querySelector("#resultado");

    for (let i = 1; i<= 10; i++) {
        resultado.innerText += `${n1} X ${i} = ${n1 * i} \n`;
    }
}
