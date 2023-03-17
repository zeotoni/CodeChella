import { valida } from "./valida-form.js";
import { mostraMenu } from "./menu.js";

const inputNome = document.querySelector('[data-tipo="nome"]');
const inputEmail = document.querySelector('[data-tipo="email"]');
const inputSetor = document.querySelector('[data-tipo="setor"]')
const inputData = document.querySelector('[data-tipo="data"]');
const inputDataEvento = document.querySelector('[data-tipo="dataEvento"]')
const inputTipoIngresso = document.querySelector('[data-tipo="tipoIngresso"]');
const form = document.querySelector('[data-form-ingresso]');
const loader = document.getElementById('loader');
const btnForm = document.getElementById('btn-form');

const getTicket = () => {

    const inputs = document.querySelectorAll('#input');

    inputs.forEach(input => {
        
        input.addEventListener('blur', (e)=> {
            valida(e.target);
        })
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let formValues = {
            nome: inputNome.value,
            email: inputEmail.value,
            data: inputData.value,
            setor: inputSetor.value,
            dataEvento: inputDataEvento.value,
            ingresso: inputTipoIngresso.value

        }

        localStorage.setItem('dados', JSON.stringify(formValues))
        btnForm.style.margin = '20px auto 0'
        loader.style.display = 'block'

        setTimeout(() => {
            window.location.href = './ingresso-comprado.html'
        }, 3000)
    })
}

mostraMenu();
getTicket();


