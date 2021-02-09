
let clickicon = document.getElementById("icon-hamburguer");
clickicon.addEventListener("click", () => {
    
    //Obtener todo el nav
    let nav = document.getElementById("nav");
    nav.style.visibility = "visible";
    nav.style.transition = "visibility 0.5s"
    nav.style.transitionTimingFunction = "visibility ease-in-out"
    nav.style.width = "100%"
    nav.style.transition = "width 2.5s"
    nav.style.transitionTimingFunction = "width ease"
    
    
    
    
    //Obtener el icono hamburguer y desaparecerlo luego de abrir el nav
    let iconhamburguer = document.getElementById("icon-hamburguer");
    iconhamburguer.style.visibility = "hidden";
    iconhamburguer.style.transition = "visibility 0.3s"
    iconhamburguer.style.transitionTimingFunction = "visibility ease-in-out"

    //Obtener icono return y aparecerlo
    let iconreturn = document.getElementById("icon-return");
    iconreturn.style.visibility = "visible";
    iconreturn.style.transition = "visibility 1s"
    iconreturn.style.transitionTimingFunction = "visibility ease-in-out"
    
    //Retornar el estado del menu, al inicio
    iconreturn.addEventListener("click", () => {
        nav.style.width = "0%"
        nav.style.trasition = "width 1.5s"
        nav.style.transitionTimingFunction = "width ease"
        iconhamburguer.style.visibility = "visible";
        iconreturn.style.visibility = "hidden";

    })
})