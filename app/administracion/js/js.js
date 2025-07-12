function facturacion(){
let cliente;
let descripcion;
let cantidad;
const precio = 30;
let importe;
let total_neto;
let iva;
let total_general;


cliente=prompt("nombre del cliente: ");
descripcion=prompt("describa el servicio: ");
cantidad=prompt("cantidad: ");
importe=cantidad*precio;
total_neto=importe;
iva=importe*0.21;
total_general=importe+iva;

document.getElementById("demo5").innerHTML=importe;
document.getElementById("demo").innerHTML=cliente;
document.getElementById("demo2").innerHTML=descripcion;
document.getElementById("demo3").innerHTML=cantidad;
document.getElementById("demo4").innerHTML=precio;
document.getElementById("demo6").innerHTML=total_neto;
document.getElementById("demo7").innerHTML=iva;
document.getElementById("demo8").innerHTML=total_general;


}

function printDiv(nombreDiv) {
     var contenido= document.getElementById(nombreDiv).innerHTML;
     var contenidoOriginal= document.body.innerHTML;

     document.body.innerHTML = contenido;

     window.print();

     document.body.innerHTML = contenidoOriginal;
}
