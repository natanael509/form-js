const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nomecompleto');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroBeneficiario = document.getElementById('numeroconta');
    const valorDeposito = document.getElementById('valor');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta <b>${numeroBeneficiario.value}</b>`;

    formEValido = validaNome(nomeBeneficiario.value);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.mensagemS');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.computedStyleMap.display = 'block';

            nomeBeneficiario.value = ' ';
            numeroBeneficiario.value = ' ';
            valorDeposito.value = ' ';
    } else {
        nomeBeneficiario.style.border ='1px solid red';
        document.querySelector('.error-mensagem').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);
    
    if (!formEValido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-mensagem').style.display = 'block';
    } else{
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-mensagem').style.display = 'none';
    }   
});