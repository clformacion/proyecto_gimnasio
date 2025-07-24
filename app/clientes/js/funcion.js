function control(){
 let clientes;

 clientes=prompt("cliente que desea consultar");

switch(clientes){

    case'001':
      alert("el cliente carlos lopez esta solvente");
      break;
    case'002':
      alert('el cliente maria gonzales esta solvente');
      break;
    case '003':
        alert('el cliente felipe garcia esta insolvente');
    if (confirm('desea notificarle al cliente')){
        window.location.href='notificacion.html';   
    }else{
        alert("hasta otro momento");
    } 
    
    default:("no se encontro el codigo")
}

}

function plan(){
let atleta;
let peso;
let altura;
let imc;

atleta=prompt("nombre del atleta");
peso=prompt("peso de su atleta");
altura=prompt("altura de su atleta");
imc=peso/(altura*altura);
alert("el IMC de su cliente es: " + imc);
if(imc<18){
  alert("su atleta es ectomorfo");
  window.location.href="plan/plan1/ectomorfo.html";

}else
     if(imc>=18.5 && imc <= 24.9)
      {
  alert("su atleta es mesomorfo");
  window.location.href="plan/plan1/mesomorfo.html";      
      }
  else{
    alert("su cliente es endomorfo");
      window.location.href="plan/plan1/endomorfo.html";      

  }

 
}


