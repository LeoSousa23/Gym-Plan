const accord = document.querySelector('.accord');
const accordList = document.querySelector('.accord-list');

// Seleciona todos os elementos com a classe 'accord'
const accordItems = document.querySelectorAll('.accord');

// Itera sobre cada elemento 'accord'
accordItems.forEach((accord) => {
  // Adiciona um ouvinte de clique a cada elemento 'accord'
  accord.addEventListener('click', () => {
    // Encontra o elemento 'accord-list' associado a este 'accord'
    const accordList = accord.querySelector('.accord-list');

    // Adiciona ou remove a classe 'hide' no 'accord-list' para mostrar/ocultar o conteúdo
    accordList.classList.toggle('hide');
  });
});
