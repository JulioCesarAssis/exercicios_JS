function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    //hora = 15
    
    //msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`   

    if(hora >=0 && hora < 12) {
        //dia
        msg.innerHTML = `Bom dia, agora são ${hora} horas e ${minutos} minutos.`
        img.src = 'img/dia_circular.png'        
        document.body.style.background = '#e2cd9f'
    } else if(hora >=12 && hora < 18) {
        //tarde
        msg.innerHTML = `Bom tarde, agora são ${hora} horas e ${minutos} minutos.`
        img.src = 'img/tarde_circular.png'
        document.body.style.background = '#b9846f'
    }  else {
        //noite
        msg.innerHTML = `Bom noite, agora são ${hora} horas e ${minutos} minutos.`
        img.src = 'img/noite_circular.png'
        document.body.style.background = '#515154'
    }    

}

