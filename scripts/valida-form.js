export const valida = (input) => {
    const tipoDeInput = input.dataset.tipo;

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container__invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';
        input.nextElementSibling.style.padding = 0;
    } else {
        input.parentElement.classList.add('input-container__invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMsgErro(tipoDeInput, input);
        input.nextElementSibling.style.padding = '10px';
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
        valueMissing: 'O campo nome não pode estar vazio.',
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
    tipoIngresso:input => validaSelect(input)
}

const validaSelect = (input) => {
    let msg = '';

    if(input.value === 'Tipo de ingresso') {
        msg = 'É necessário selecionar um tipo de ingresso.'
    }

    input.setCustomValidity(msg)
}

const validaDataNascimento = (input) => {
    const dataRecebida = new Date(input.value);

    let msg = '';

    if(!maiorQue10(dataRecebida)) {
        msg = 'Menores de 10 anos não são permitidos no festival.'
    }

    if(maiorQue10(dataRecebida) && menorQue16(dataRecebida)) {
        msg = 'Você só poderá entrar acompanhado de um adulto!'
    }

    mensagemDeErro.data.customError = msg
    input.setCustomValidity(msg)
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


