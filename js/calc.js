function calcula () {
var lEtn = document.getElementById("litrosEtn").value;
var lCor = document.getElementById("litrosCor").value;

var total = (lCor/lEtn)*1000000;

console.log(total)

document.getElementById("res").innerText=total.toFixed(3)+" Ml de corante por metros cubicos foram utilizados"
}