let botaoCalcular = document.getElementById('btnCalcular');

function calculandoIMC() {
  let peso = document.getElementById('peso').value;
  let altura = document.getElementById('altura').value / 100;
  let resultado = document.getElementById("resultadoheading");

  if (altura !== "" && peso !== "") {
    let imc = (peso / (altura * altura)).toFixed(1);
    let mensagem = "";

    if (imc < 18.5) {
      mensagem = "Abaixo do peso.";
      resultado.textContent = `Seu IMC: ${imc}. ${mensagem}`;
    } else if (imc < 25) {
      mensagem = "Peso ideal.";
      resultado.textContent = `Seu IMC: ${imc}. ${mensagem}`;
    } else if (imc < 30) {
      mensagem = "Levemente acima do peso";
      resultado.textContent = `Seu IMC: ${imc}. ${mensagem}`;
    } else if (imc < 35) {
      mensagem = "Obesidade grau I";
      resultado.textContent = `Seu IMC: ${imc}. ${mensagem}`;
    } else if (imc < 40) {
      mensagem = "Obesidade grau II";
      resultado.textContent = `Seu IMC: ${imc}. ${mensagem}`;
    } else if (imc > 40) {
      mensagem = "Obesidade grau III";
      resultado.textContent = `Seu IMC: ${imc}. ${mensagem}`;
    } else {
      mensagem = "Preencha os dados corretamente."
      resultado.textContent = `${mensagem}`;
    }
      
  } else {
    resultado.textContent = "Preencha todos os campos.";
  }

}

botaoCalcular.addEventListener('click', calculandoIMC)