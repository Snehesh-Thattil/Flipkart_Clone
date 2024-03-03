function butRight() {
    console.log('what the fuck .....?')
}

const buttonRight = document.getElementById('right-arrow-btn')
const buttonLeft = document.getElementById('left-arrow-btn')

buttonRight.onclick = function () {
    console.log('clicked')
    document.getElementById('container').scrollLeft += 20
}
buttonLeft.onclick = function () {
    console.log('clicked')
    document.getElementById('container').scrollLeft -= 20
}