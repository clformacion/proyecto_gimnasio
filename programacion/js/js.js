
function imc(){
let imc,peso,altura;
peso= prompt("coloque su peso");
altura=prompt("coloque su altura...favor en metros con punto no coma");
imc=peso/(altura*altura);
document.getElementById('demo').innerHTML="Su IMC es "+ imc.toFixed(2);

}

function regalo(){
const costo=50;
let inscripcion;
let precio;
let descuento;
let oferta;
let nombre;
let apellido;

inscripcion=prompt("Numero de participantes que desea inscribir");
nombre=prompt("tu nombre");
apellido=prompt("tu apellido");
precio=inscripcion*costo;
descuento=precio*0.10;
oferta=precio-descuento;
document.getElementById('demo').innerHTML=inscripcion;
document.getElementById('demo2').innerHTML=costo;
document.getElementById('demo3').innerHTML=precio;
document.getElementById('demo4').innerHTML=descuento;
document.getElementById('demo5').innerHTML=oferta;
document.getElementById('demo6').innerHTML=nombre;
document.getElementById('demo7').innerHTML=apellido;



}