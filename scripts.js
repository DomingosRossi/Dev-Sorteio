function generateNumber() {

const min = Math.ceil(document.querySelector(".input-min").value)
const max = Math.floor(document.querySelector(".input-max").value)
let p = document.querySelector("p")

if ( min > max) {
    alert ("Não pode o valor mínimo tem que ser maior que o valor máximo!")
}

else {
const result = Math.floor(Math.random() * (max - min + 1)) + min; {
    p.innerHTML = `${result}`
}


}
}