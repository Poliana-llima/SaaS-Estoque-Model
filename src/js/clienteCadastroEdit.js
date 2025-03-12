//Função para esconder o sub-menu
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".menu-principal > a").forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            const subMenu = this.nextElementSibling;
            if (subMenu && subMenu.classList.contains("lista-sub-menu")) {
                subMenu.classList.toggle("ativar");
            }
        });
    });
});
