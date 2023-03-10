const btnMenu = document.querySelector('[data-btn-menu]'); 
const menuMobile = document.querySelector('[data-ul-mobile]');

btnMenu.onclick = () => {
    menuMobile.classList.toggle('hidden');
    btnMenu.dataset.btnMenu == "fechar" ? btnMenu.dataset.btnMenu = "" : btnMenu.dataset.btnMenu = "fechar";
}


const seta = document.querySelector('[data-arrow]');
const p = document.querySelector('.perguntas__frequentes-resposta')
seta.onclick = () => {
    p.classList.toggle('hidden')
}