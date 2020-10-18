let btnMenu = document.getElementById("btn-menu");
let lateralMenu = document.getElementById("lateral-menu");
let fondoOpaco = document.getElementById("fondo-opaco");
btnMenu.addEventListener("click",mostrarOcultarMenu );
fondoOpaco.addEventListener("click",mostrarOcultarMenu);

function mostrarOcultarMenu(){

    lateralMenu.classList.toggle('show-navegacion');
    fondoOpaco.classList.toggle('mostrar-fondo-opaco');
    //solo para mostrar
    // lateralMenu.style.width = "400px"
    // lateralMenu.style.transform = "translateX(0)";
}