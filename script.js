
const inputs = document.querySelector('input')
const TopLeft = document.querySelector('#TopLeft')
const $TopRight = document.querySelector('#TopRight')
const $BottomRight = document.querySelector('#BottomRight')
const $BottomLeft = document.querySelector('#BottomLeft')

const $box = document.querySelector('.box')

function makeBorder(TopLeft){
        $box.style.borderTopLeftRadius = TopLeft.target.value + 'px';
        console.log(TopLeft)
    }

inputs.oninput = makeBorder

// mostrar o css pronto
// botao de copiar
