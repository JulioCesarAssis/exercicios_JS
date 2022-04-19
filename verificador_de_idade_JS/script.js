function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtAno')
    var resultado = document.getElementById('res')

    if(formularioAno.value.length == 0 || Number(formularioAno.value) > ano || Number(formularioAno.value) < 1850) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var formularioSexo = document.getElementsByName('radSexo')
        var idade = ano - Number(formularioAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        //img.setAttribute('height','200')
        //img.setAttribute('width','200')
        if(formularioSexo[0].checked) { //verifico se a 1ª opção da input rádio está marcada
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','img/crianca_homem.png')
            } else if(idade >= 10 && idade < 21){
                //adolescente
                img.setAttribute('src','img/adolescente_homem.png')
            } else if(idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src','img/homem_adulto.png')
            } else {
                //idoso
                img.setAttribute('src','img/idoso_homem.png')
            }
        } else if(formularioSexo[1].checked) { //verifico se a 2ª opção da input rádio está marcada
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','img/crianca_mulher.png')
            } else if(idade >= 10 && idade < 21){
                //adolescente
                img.setAttribute('src','img/adolescente_mulher.png')
            } else if(idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src','img/mulher_adulta.png')
            } else {
                //idoso
                img.setAttribute('src','img/idosa_mulher.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}

