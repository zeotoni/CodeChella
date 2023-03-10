const btnMenu = document.querySelector('[data-btn-menu]'); 
const menuMobile = document.querySelector('[data-ul-mobile]');

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


// const seta = document.querySelectorAll('#accordion');
// seta.forEach(item => item.onclick = () => {
//     let p = document.querySelectorAll('.perguntas__frequentes-resposta');
//     if (p.style.maxHeight) {
//         p.style.maxHeight = null;
//       } else {
//         p.style.maxHeight = p.scrollHeight + "px";
//       } 
   
// })

let acc = document.querySelectorAll("#accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = "0 16px";
      this.lastChild.style.transform = "rotate(0)"
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.padding = "16px";
      this.lastChild.style.transform = "rotate(180deg)"
    } 
  });
}