document.addEventListener('DOMContentLoaded', function() {
    var menuOculto = document.getElementById("menuOculto");
    var principal = document.getElementById("btn_menu");

    var menuItems = document.querySelectorAll('#menuOculto a');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });

    document.addEventListener('click', function(event) {
        if (event.target.id === 'menuToggle') {
            if (menuOculto.style.width === "250px") {
                menuOculto.style.width = "0";
                principal.style.marginLeft = "0";
            } else {
                menuOculto.style.width = "250px";
                principal.style.marginLeft = "250px";
            }
        } else {
            if (menuOculto.style.width === "250px") {
                menuOculto.style.width = "0";
                principal.style.marginLeft = "0";
            }
        }
    });
});
