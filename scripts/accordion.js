export const accordion = () => {
    
    const pergunta = document.querySelectorAll('#accordion');

    pergunta.forEach(elemento => {
        const resposta = elemento.nextElementSibling;

        elemento.onclick = () => {
            if (resposta.style.maxHeight) {
                resposta.style.maxHeight = null;
                resposta.style.padding = "0 16px";
                elemento.lastChild.style.transform = "rotate(0)"
              } else {
                resposta.style.maxHeight = resposta.scrollHeight + "px";
                resposta.style.padding = "16px";
                elemento.lastChild.style.transform = "rotate(180deg)"
              } 
        }
    })
}



// export function accordion() {

//     const acc = document.querySelectorAll("#accordion");
//     let i;
    
//     for (i = 0; i < acc.length; i++) {
//       acc[i].addEventListener("click", function() {
//         const panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//           panel.style.maxHeight = null;
//           panel.style.padding = "0 16px";
//           this.lastChild.style.transform = "rotate(0)"
//         } else {
//           panel.style.maxHeight = panel.scrollHeight + "px";
//           panel.style.padding = "16px";
//           this.lastChild.style.transform = "rotate(180deg)"
//         } 
//       });
//     }
// }