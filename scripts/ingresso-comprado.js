import { mostraMenu } from "./menu.js";

const divIngresso = document.querySelector('[data-info-ingresso]');

const exibeIngresso = () => {
    const dados = JSON.parse(localStorage.getItem('dados'))
    divIngresso.innerHTML = `
    <h2 class="ingresso__card-info-nome">${dados.nome}</h2>
    <p class="ingresso__card-info-tipo-ingresso">Tipo de entrada: ${dados.ingresso}</p>
    <p class="ingresso__card-info-tipo-ingresso">Setor: ${dados.setor}</p>
    <p class="ingresso__card-info-data">Data: ${dados.dataEvento}</p>
    <p class="ingresso__card-info-local">Local: São Paulo-SP</p>
    `
}

mostraMenu();
exibeIngresso();