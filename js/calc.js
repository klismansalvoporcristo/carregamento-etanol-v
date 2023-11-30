function calcula () {
var lEtn = document.getElementById("litrosEtn").value;
var lCor = document.getElementById("litrosCor").value;

var total = (lCor/lEtn)*1000000;
var correcao = total/15;
var correcaoL = (lCor*1000)/15;

if (total >= 16 || total <= 14){
    document.getElementById("res").innerText=total.toFixed(3)+" Ml de corante por metro cubico foram utilizados, daria pra carregar "+correcao.toFixed(1)+"metros cubicos. Com "+lCor+" litros de corante daria pra carregar "+correcaoL/1000+" mil metros cubicos ("+correcaoL/1000+" milhões de litros)."
} else{
    document.getElementById("res").innerText=total.toFixed(3)+" Ml de corante por metro cubico foram utilizados, dosagem feita corretamente."
}

}