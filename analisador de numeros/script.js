var txtNumero = document.getElementById('txtNumero')
var selectNumero = document.getElementById('selectNumero')
var resposta = document.querySelector('div#resposta')
var arrayValores = []

function isNumeroValido(numeroDigitado) {
    if(Number(numeroDigitado) >= 1 && Number(numeroDigitado) <= 100){
       return true
    } else {
       return false
    }
}

function inLista(numeroDigitado, arrayAtual) {
   if(arrayAtual.indexOf(Number(numeroDigitado)) != -1) {
      return true
   } else {
      return false
   }
}

function adicionar() {

   if (isNumeroValido(txtNumero.value) && !inLista(txtNumero.value, arrayValores)) {
      arrayValores.push(Number(txtNumero.value))
      var option = document.createElement('option')
      option.text = `Valor ${txtNumero.value} adicionado.`
      selectNumero.appendChild(option)    
      resposta.innerHTML = ''
   } else {
      alert('Valor inválido ou já encontrado na lista!')
   }
   
   txtNumero.value = ''
   txtNumero.focus()
   
}

function finalizar() {
   if(arrayValores.length == 0) {
      alert('Adicione valores antes de finalizar')
   } else {
      let tamanhoDoArray = arrayValores.length
      let maior = arrayValores[0]
      let menor = arrayValores[0]
      let soma = 0
      let media = 0

      for(let pos in arrayValores) {
         if(arrayValores[pos] > maior) {
            maior = arrayValores[pos]
         } 
         if(arrayValores[pos] < menor){
            menor = arrayValores[pos]
         }                      
         soma += arrayValores[pos]         
      }

      media = soma/tamanhoDoArray

      resposta.innerHTML = ''
      resposta.innerHTML += `<p>Ao todo, temos ${tamanhoDoArray} números cadastrados.</p>`
      resposta.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
      resposta.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
      resposta.innerHTML += `<p>A soma foi ${soma} e a média foi ${media}.</p>`
   }
}

console.log(arrayValores)