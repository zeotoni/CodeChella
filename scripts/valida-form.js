export const valida = (input) => {

    const tipoDeInput = input.dataset.tipo;

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container__invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';
    } else {
        input.parentElement.classList.add('input-container__invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMsgErro(tipoDeInput, input);
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError',
    'tooShort'
]

const mensagemDeErro = {
    nome: {
        valueMissing: 'O campo de nome não pode estar vazio.',
        tooShort: 'O nome precisa ter no mínimo, 12 caracteres.'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    tipoIngresso: {
        customError: 'É necessário selecionar um tipo de ingresso.'
    },
    data: {
        valueMissing: 'O campo de data não pode estar vazio.',
        customError: ''
    },
    dataEvento: {
        customError: 'É necessário escolher uma data para o evento'
    },
    setor: {
        customError: 'É necessário selecionar um setor.'
    }
}

const mostraMsgErro = (tipoDeInput, input) => {
    let msg = '';

    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            msg = mensagemDeErro[tipoDeInput][erro]
        }
    });

    return msg;
}

const validadores = {
    data:input => validaDataNascimento(input),
    tipoIngresso:input => validaSelect(input),
    dataEvento:input => validaSelect(input),
    setor:input => validaSelect(input)
}

const validaSelect = (input) => {
    let msg = '';

    if(input.value === 'Tipo de ingresso') {
        msg = 'É necessário selecionar um tipo de ingresso.'
    }

    if(input.value === 'Escolha uma data') {
        msg = 'É necessário escolher uma data para o evento.'
    }

    if(input.value === 'Escolha um setor') {
        msg = 'É necessário selecionar um setor.'
    }

    input.setCustomValidity(msg)
}

const validaDataNascimento = (input) => {

    const dataRecebida = new Date(input.value);
    let msg = "";

    if(!maiorQue10(dataRecebida)) {
        msg = 'Menores de 10 anos não são permitidos no festival.'
    }
    
    if(maiorQue10(dataRecebida) && menorQue16(dataRecebida)) {

        const box = input.parentElement;

        const div = document.createElement('div');
        div.className = 'modal';
        div.id = 'modal';
        div.innerHTML =  '<p class="modal__msg">Atenção!!! Devido à sua idade, você só poderá entrar acompanhado de um adulto!!</p>';

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'modal__btn btn';
        btn.innerHTML = 'Entendi';

        btn.addEventListener('click', () => modalClose(div.id))
        div.appendChild(btn)
       
        box.insertBefore(div, box.firstChild)
    }   

    mensagemDeErro.data.customError = msg;
    input.setCustomValidity(msg);
}

const maiorQue10 = (data) => {
    const dataAtual = new Date();
    const dataMais10 = new Date(data.getUTCFullYear() + 10, data.getUTCMonth(), data.getUTCDate());

    return dataMais10 <= dataAtual;
}

const menorQue16 = (data) => {
    const dataAtual = new Date();
    const dataMenos16 = new Date(data.getUTCFullYear() + 16, data.getUTCMonth(), data.getUTCDate());

    return dataMenos16 >= dataAtual;
}

const modalClose = (modal) => {
    const elementoModal = document.getElementById(modal);
    elementoModal.style.display = 'none';
}





