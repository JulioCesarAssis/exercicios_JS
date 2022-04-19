function contar() {
   var inicio = document.getElementById('txtInicio')
   var fim = document.getElementById('txtFim')
   var passo = document.getElementById('txtPasso')
   var resposta = document.querySelector('div#res')  
 
   if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.legth == 0) {  
      resposta.innerHTML = `Impossível contar pois tem campo(s) vazio(s) ou o valor do passo!`   
   } else {
      resposta.innerHTML = 'Contando ... </br>'
      inicio = Number(inicio.value)
      passo = Number(passo.value)      
      fim = Number(fim.value)
      
      if (passo == 0) {
         alert('Impossível contar! Considerando passo igual a 1')
         passo = 1
      }
      if (inicio < fim) { //Contagem crescente
         for(inicio;fim >= inicio;inicio += passo ) {
            resposta.innerHTML += `${inicio} \u{1F449}`
         }
            resposta.innerHTML += `&#9872;`
      } else { //Contagem decrescente
         for(inicio;inicio >= fim;inicio -= passo ) {
            resposta.innerHTML += `${inicio} \u{1F449}`
         }
      }
   }
   
   
}

