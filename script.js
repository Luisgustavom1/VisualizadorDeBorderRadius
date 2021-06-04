const TopLeft = document.querySelector('#TopLeft')
const TopRight = document.querySelector('#TopRight')
const BottomRight = document.querySelector('#BottomRight')
const BottomLeft = document.querySelector('#BottomLeft')

const box = document.querySelector('.box')
const showBorder = document.querySelector('.showBorder')

TopLeft.addEventListener('input', e => box.style. borderTopLeftRadius = e.target.value + 'px',  
)


TopRight.addEventListener('input', e => box.style. borderTopRightRadius = e.target.value + 'px'  
)

BottomRight.addEventListener('input', e => box.style. borderBottomRightRadius = e.target.value + 'px'  
)

BottomLeft.addEventListener('input', e => box.style. borderBottomLeftRadius = e.target.value + 'px'  
)

function showCSS(){
    showBorder.innerHTML = `border: ${TopLeft.value} ${TopRight} ${BottomRight} ${BottomLeft};`
}
console.log(TopLeft.value)
// botao de copiar




