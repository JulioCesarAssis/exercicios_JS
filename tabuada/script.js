function gerarTabuada() {
   
   var numTabuada = document.querySelector('input#txtNumero')
   var areaTabuada = document.getElementById('selTab')   

   if (numTabuada.value.length == 0) {
      alert('Por favor, digite um número!')      
   } else {
      areaTabuada.innerHTML = ''
      var n = Number(numTabuada.value)
      for (var c=1; c <= 10; c++) {
         let item = document.createElement('option')         
         item.text = `${n} x ${c} = ${n*c}`
         item.value = `tab${c}`
         areaTabuada.appendChild(item)
      }
   }

}

