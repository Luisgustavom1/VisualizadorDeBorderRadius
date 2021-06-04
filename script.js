const TopLeft = document.querySelector('#TopLeft')
const TopRight = document.querySelector('#TopRight')
const BottomRight = document.querySelector('#BottomRight')
const BottomLeft = document.querySelector('#BottomLeft')

const box = document.querySelector('.box')
const showBorder = document.querySelector('.showBorder')

TopLeft.addEventListener('input', function(e){ 
    box.style.borderTopLeftRadius = e.target.value + 'px';
    TopLeft.value = e.target.value
    showCSS()
})

TopRight.addEventListener('input', function(e){
    box.style.borderTopRightRadius = e.target.value + 'px'
    TopRight.value = e.target.value
    showCSS()
})

BottomRight.addEventListener('input', function(e){
    box.style. borderBottomRightRadius = e.target.value + 'px'
    BottomRight.value = e.target.value
    showCSS()
})

BottomLeft.addEventListener('input', function(e){
    box.style. borderBottomLeftRadius = e.target.value + 'px',
    BottomLeft.value = e.target.value, 
    showCSS()
})

function showCSS(){
    const showBorderInput = document.querySelector('#showBorderInput')
    showBorderInput.innerHTML = `border: ${TopLeft.value} ${TopRight.value} ${BottomRight.value} ${BottomLeft.value};`
}

function copy(){
    
    showBorderInput.select()
    showBorderInput.setSelectionRange(0, 99999)

    document.execCommand("copy")

    alert('Texto copiado')
}
const button = document.querySelector('button')
button.addEventListener('click', copy)





