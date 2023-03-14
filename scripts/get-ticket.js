import { valida } from "./valida-form.js";

const inputNome = document.querySelector('[data-tipo="nome"]');
const inputEmail = document.querySelector('[data-tipo="email"]');
const inputData = document.querySelector('[data-tipo="data"]');
const inputDataEvento = document.querySelector('[data-tipo="dataEvento"]')
const inputTipoIngresso = document.querySelector('[data-tipo="tipoIngresso"]');
const form = document.querySelector('[data-form-ingresso]')

export const getTicket = () => {

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
            dataEvento: inputDataEvento.value,
            ingresso: inputTipoIngresso.value

        }

        console.log(formValues);
    })
}