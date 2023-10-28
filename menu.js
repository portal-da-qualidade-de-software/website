function toggleNav() {
    var menuOculto = document.getElementById("menuOculto");
    var principal = document.getElementById("principal");

    if (menuOculto.style.width === "250px") {
        menuOculto.style.width = "0";
        principal.style.marginLeft = "0";
    } else {
        menuOculto.style.width = "250px";
        principal.style.marginLeft = "250px";
    }
}