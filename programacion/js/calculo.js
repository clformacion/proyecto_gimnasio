function oferta(){
    const inscripcion=50;
    let regalo;

    regalo= prompt("cuantas personas deseas inscribirses : ");
    //window.location.href = "contacto.html";
    let participantes= (regalo*inscripcion); //100
    let descuento= participantes*0.20; //20
    let oferta= Number(participantes)-Number(descuento); //80
    document.getElementById("demo").innerHTML=participantes;
    document.getElementById('demo2').innerHTML=inscripcion;
    document.getElementById('demo3').innerHTML=descuento;
    document.getElementById('demo4').innerHTML=regalo;

    
    
}



