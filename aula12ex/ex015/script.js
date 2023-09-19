function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       if(fsex[0].checked){
        genero = 'Homem' 
        if(idade >=0 && idade <10){
            //criança
            img.setAttribute('src', 'bebe masculino.jpg')
        }else if(idade <21){
            //jovem
            img.setAttribute('src', 'jovem masculino.jpg')
        }else if(idade <50){
             //adulto
             img.setAttribute('src', 'homem adulto.jpg')
        }else{
            //idoso
            img.setAttribute('src', 'homem velho.jpg')
        } 
       } else {
        genero = 'Mulher'
        if(idade >=0 && idade <10){
            //criança
            img.setAttribute('src', 'bebe feminino.jpg')
        }else if(idade <21){
            //jovem
            img.setAttribute('src', 'jovem feminina.jpg')
        }else if(idade <50){
             //adulto
             img.setAttribute('src', 'mulher adulta.jpg')
        }else{
            //idoso
            img.setAttribute('src', 'mulher velha.jpg') 
        }
       }
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}
