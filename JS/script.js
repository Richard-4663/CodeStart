AOS.init({
  once:true
}); //chamando o AOS (animações)

//#region - Chamar o modal

const exampleModal = document.getElementById('exampleModal');
const modal = new bootstrap.Modal(exampleModal);

function showModal() {
modal.show();
}
//#endregion

//#region - Validação do formulário

//definição de variáveis
var nomeInput = document.getElementById('nome');
var emailInput = document.getElementById('email');
var telefoneInput = document.getElementById('telefone');
var errorMessage = document.getElementById('error-message');
var loadingSpinner = document.getElementById('loading-spinner');
var alertaInscricaoSucesso = document.getElementById('alertaInscricaoSucesso');

//definição da função
function validateForm() {
  if (nomeInput.value === '' || emailInput.value === '' || telefoneInput.value === '') { //caso os inputs estejam vazios, exiba o erro e force o preechimento
    errorMessage.style.display = 'block';
    errorMessage.style.animation = 'shake 0.5s';
    setTimeout(function() {
      errorMessage.style.animation = '';
    }, 500);
    return false;
  }
  else { //senão, toque a animação de carregamento e mostre a mensagem de inscrição concluida
    errorMessage.style.display = 'none';
    loadingSpinner.style.display = 'flex';

    setTimeout(function() {
      loadingSpinner.style.display = 'none';
      modal.hide();
      alertaInscricaoSucesso.style.display = 'block';

      setTimeout(function() {
        alertaInscricaoSucesso.style.animation = 'fadeOut 1s forwards';
        setTimeout(function() {
          alertaInscricaoSucesso.style.display = 'none';
          alertaInscricaoSucesso.style.animation = '';
        }, 1000);
      }, 3000);
    }, 2000);
  }
}

//#endregion


//#region - formatação do campo "telefone", isso faz com que ele mostre o numero digitado na formatação (XX) XXXXX-XXXX

const inputTel = document.getElementById('telefone');

inputTel.addEventListener('input', () => {
  let valor = inputTel.value.replace(/\D/g, ''); // remove tudo que não for número

  if (valor.length > 11) valor = valor.slice(0, 11);

  // aplica a formatação (XX) XXXXX-XXXX
  if (valor.length > 6) {
    valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  } else if (valor.length > 2) {
    valor = valor.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
  } else {
    valor = valor.replace(/^(\d*)/, '($1');
  }

  inputTel.value = valor;
});
//#endregion

//#region - Troca de modo (dark e light)
const html = document.getElementById("htmlPage");
const checkbox = document.getElementById("checkbox");


checkbox.addEventListener("change", () => {
  if(checkbox.checked){
    html.setAttribute("data-bs-theme", "dark");
    html.style.setProperty('--cor-gradient', '#212529');
  }else{
    html.setAttribute("data-bs-theme", "light");
    html.style.setProperty('--cor-gradient', '#ffffffff');
  }
})


//#endregion

//#region - Pausar a animação da seção de depoimentos ao passar o mouse por cima
const container = document.querySelector('.depoimentos-container');
const cards = document.querySelectorAll('.carrosel-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    container.style.animationPlayState = 'paused';
  });
  card.addEventListener('mouseleave', () => {
    container.style.animationPlayState = 'running';
  });
});
//#endregion

//#region definindo a largura do span na seção "planos"

const divRecomendado = document.getElementById("div-recomendado");
const elementRecomendado = document.getElementById("recomendado");

const largura = getComputedStyle(divRecomendado).width;

elementRecomendado.style.width = largura;
//#endregion
