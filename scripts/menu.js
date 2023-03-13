const btnMenu = document.querySelector('[data-btn-menu]'); 
const menuMobile = document.querySelector('[data-ul-mobile]');

export function mostraMenu() {
    btnMenu.onclick = () => {
        if (menuMobile.style.maxWidth) {
          menuMobile.style.maxWidth = null;
          menuMobile.style.padding = 0;
        } else {
          menuMobile.style.maxWidth = "155px";
          menuMobile.style.padding = "24px 16px"
        } 
        
        btnMenu.dataset.btnMenu == "fechar" ? btnMenu.dataset.btnMenu = "" : btnMenu.dataset.btnMenu = "fechar";
    }
}


