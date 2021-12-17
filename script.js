$(document).ready( () => {

    // Animação do abre-fecha da mochila
    $('#mochila').mouseover(function(){
        $(this).attr("src", "img/mochila_aberta.png")
    })
    $('#mochila').mouseout(function(){
        $(this).attr("src", "img/mochila_fechada.png")
    })


    //$("#faca").hide()
})






// Sistema da Mochila
var item_faca = 'Faca';
var item_bussola = 'Bussola';
var item_mapa = 'Mapa';
var item_relogio = 'Relogio';
// var item_ = '';

const out = [item_faca, item_bussola, item_mapa, item_relogio]
const bag = []

function putIn(item){
    var found_out = false;

    for(var i = 0; i < out.length; i++){

        if(out[i] === item){
          out.splice(i, 1)
          found_out = true;
        }

    }

    if(found_out === true){
        console.log('Item '+item+' colocado na mochila')
        bag.push(item)

        console.log(out)
        console.log(bag)

    }
    else{
        console.log('Não há esse item ae')
    }
}

function takeOut(item){
    var found_bag = false;

    for(var i = 0; i < bag.length; i++){

        if(bag[i] === item){
            bag.splice(i, 1)
            found_bag = true;
        }

    }

    if(found_bag === true){
        console.log('Item '+item+' tirado da mochila')
        out.push(item)

        console.log(out)
        console.log(bag)
    }
    else{
        console.log('Não há esse item ae')
    }
}








// Tornando as imagens arrastáveis
var item_arrastado = null;

function onDragStart(event, item){
    event.dataTransfer.setData('text/plain', event.target.id)

    item_arrastado = item;
}

function onDragOver(event){
    event.preventDefault();
}

function onDrop(){
    putIn(item_arrastado);
    $('#' + item_arrastado).hide()
    $('#' + item_arrastado + '_na_mochila').show()
}

function tirarDaMochila(item){
    takeOut(item)
    $('#' + item + '_na_mochila').hide()
    $('#' + item).show()
}