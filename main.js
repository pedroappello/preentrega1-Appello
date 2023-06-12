let invitacion = prompt("¿quisieras donar a la fundacion?")

if (invitacion == "si") {
 alert("Gracias por colaborar");  
 do {
   invitacion = donar()
 } while (invitacion == "si");
 alert ("Gracias por proteger los derechos de los niños")
}

function donar () {
    let colaborar = prompt("Con cuanto te gustaria sumarte")
    console.log(colaborar)
 invitacion = prompt ("desea seguir colaborando") 
 return invitacion;
}
