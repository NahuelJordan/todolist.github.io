let mas = document.getElementById("mas");
let secUno = document.getElementById("sec-uno");
let secDos = document.getElementById("sec-dos");
let form = document.getElementById("form");
let soyinput = document.getElementById("soyinput");
let soyselect = document.getElementById("soyselect");
let soyoption = document.getElementById("soyoption");
/*botones*/
let agregar = document.getElementById("agregar");
let cancelar = document.getElementById("cancelar");


mas.addEventListener("click", ()=> {
    secUno.style.display = "none";
    secDos.style.display = "block"
})


agregar.addEventListener ("click", ()=>{

    let valor = soyinput.value;
    resultado = valor+=soyoption;
    // soyselect = `<option>${resultado}</option>`;

    // return soyselect
    
})




// let caja = () => {

//     let valor = soyinput.value;
//     valor+=soyoption.value
// }

// caja();