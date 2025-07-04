
function imc(){
let imc,peso,altura;
peso= prompt("coloque su peso");
altura=prompt("coloque su altura...favor en metros con punto no coma");
imc=peso/(altura*altura);
document.getElementById('demo').innerHTML="Su IMC es "+ imc.toFixed(2);

}