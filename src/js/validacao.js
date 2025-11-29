function mostrarErro(input, mensagem) {
    input.classList.add('erro');
    const mensagemErro = input.parentElement.querySelector('.mensagemErro');
    if (mensagemErro) {
        mensagemErro.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> ' + mensagem;
        mensagemErro.style.display = 'block';
    }
}

function validarFormulario() {
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const dataInput = document.getElementById('data');
    const especialidadeInput = document.getElementById('especialidade');
    const telefoneInput = document.getElementById('telefone');

    if (!nomeInput || !emailInput || !dataInput || !especialidadeInput || !telefoneInput) {
        return false;
    }

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const data = dataInput.value.trim();
    const especialidade = especialidadeInput.value.trim();
    const telefone = telefoneInput.value.trim();

    let temErro = false;

    [nomeInput, emailInput, dataInput, especialidadeInput, telefoneInput].forEach(function (input) {
        input.classList.remove('erro');

        const mensagemErro = input.parentElement.querySelector('.mensagemErro');

        if (mensagemErro) {
            mensagemErro.style.display = 'none';
            mensagemErro.innerHTML = '';
        }
    });

    if (nome === '') {
        mostrarErro(nomeInput, 'O campo Nome é obrigatório.');
        temErro = true;
    } else if (nome.split(' ').length < 2) {
        mostrarErro(nomeInput, 'Por favor digite seu nome completo (Nome e sobrenome).');
        temErro = true;
    }

    if (email === '') {
        mostrarErro(emailInput, 'O campo E-mail é obrigatório.');
        temErro = true;
    } else {
        const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!reEmail.test(email)) {
            mostrarErro(emailInput, 'Informe um endereço de e-mail válido.');
            temErro = true;
        }
    }

    if (data === '') {
        mostrarErro(dataInput, 'O campo Data é obrigatório.');
        temErro = true;
    } else {
        const selecionada = new Date(data + 'T00:00:00');
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        
        if (isNaN(selecionada.getTime())) {
            mostrarErro(dataInput, 'Formato de data inválido.');
            temErro = true;
        } else if (selecionada < hoje) {
            mostrarErro(dataInput, 'A data do agendamento não pode ser no passado.');
            temErro = true;
        }
    }

    if (!especialidade) {
        mostrarErro(especialidadeInput, 'Selecione uma especialidade.');
        temErro = true;
    }

    if (temErro) {
        const primeiroErro = document.querySelector('.erro');
        if (primeiroErro) primeiroErro.focus();
        return false;
    }

    return true;
}

function validarEEnviar() {
    if (validarFormulario()) {
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const data = document.getElementById('data').value.trim();
        const especialidade = document.getElementById('especialidade').value.trim();

        localStorage.setItem('agendamento', JSON.stringify({
            nome: nome,
            email: email,
            telefone: telefone,
            data: data,
            especialidade: especialidade
        }));

        window.location.href = '../pages/confirmacao-agendamento.html';
    }
    return false;
}
