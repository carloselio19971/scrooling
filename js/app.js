let elmentonuevo=document.createElement('p');
let visibilidad=document.querySelector("#ubicacion");


window.addEventListener('scroll',()=>{
    const cajaazul=document.querySelector("#caja-azul");
    const ubicacion=cajaazul.getBoundingClientRect();
    
    console.log(cajaazul);
    let mensaje;

    if(ubicacion.top<100){
       // console.log("El elemento esta visible");
        mensaje="El elemento esta visible";
        elmentonuevo.textContent=mensaje;
        console.log(elmentonuevo.textContent);
        
    }
    else {
        //console.log("El elmento aun no esta visible da mas scroll");
        mensaje="El elemento no esta visible";
        elmentonuevo.textContent=mensaje;
        console.log(elmentonuevo.textContent);
    }
    
    visibilidad.appendChild(elmentonuevo);

});
