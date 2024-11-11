let preButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

// Função para atualizar o slider
function setSlider() {
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active'); // Remove a classe 'active' do item anterior

    let dotsOld = indicator.querySelector('ul li.active');
    dotsOld.classList.remove('active'); // Remove a classe 'active' do ponto anterior

    dots[active].classList.add('active'); // Adiciona 'active' ao ponto correspondente ao item ativo
    indicator.querySelector('.number').innerHTML = '0' + (active + 1); // Atualiza o número indicador
}

// Evento para o botão "Próximo"
nextButton.onclick = () => {
    list.style.setProperty('--calculation', -1); // Define a direção para o próximo item

    active = active + 1 > lastPosition ? 0 : active + 1; // Se o último item for alcançado, volta ao primeiro
    setSlider();
    items[active].classList.add('active'); // Adiciona 'active' ao novo item
};

// Evento para o botão "Anterior"
preButton.onclick = () => {
    list.style.setProperty('--calculation', 1); // Define a direção para o item anterior

    active = active - 1 < firstPosition ? lastPosition : active - 1; // Se o primeiro item for alcançado, vai para o último
    setSlider();
    items[active].classList.add('active'); // Adiciona 'active' ao novo item
};
