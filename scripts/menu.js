const btnMenu = document.querySelector('[data-btn-menu]'); 
const menuMobile = document.querySelector('[data-ul-mobile]');

btnMenu.onclick = () => {
    menuMobile.classList.toggle('hidden');
    btnMenu.dataset.btnMenu == "fechar" ? btnMenu.dataset.btnMenu = "" : btnMenu.dataset.btnMenu = "fechar";
}