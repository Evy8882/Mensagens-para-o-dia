

function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos...`
    if (hora >= 5 && hora < 8){
        img.src = "001.png"
        msg.innerHTML+="<p>tenha uma boa manhã :)</p>"
        document.body.style.background = "#eaebae"
        document.body.style.color = 'black'
    }else if(hora >= 8 && hora < 12){
        img.src = '002.png'
        msg.innerHTML+="<p>tenha um bom dia :)</p>"
        document.body.style.background = "#eba577"
        document.body.style.color = 'black'
    }else if(hora >= 12 && hora < 16){
        msg.innerHTML+="<p>tenha uma boa tarde :)</p>"
        img.src = '003.png'
        document.body.style.background = "#6a7c8e"
        document.body.style.color = 'black'
    }else if(hora >= 16 && hora < 18){
        img.src = '004.png'
        msg.innerHTML+="<p>já deve estar escurecendo :)</p>"
        document.body.style.background = "#4f494c"
        document.body.style.color = 'white'
    }else if(hora >= 18 && hora < 20){
        img.src = '005.png'
        msg.innerHTML+="<p>tenha uma boa noite :)</p>"
        document.body.style.background = "#3b304d"
        document.body.style.color = 'white'
    }else{
        img.src = '006.png'
        msg.innerHTML+="<p>tenha um bom descanso :)</p>"
        document.body.style.background = "#1b2134"
        document.body.style.color = 'white'
    }
}