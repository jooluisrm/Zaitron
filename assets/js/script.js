var menuHome = document.querySelector('.right-opt ul li .home');
var menuShop = document.querySelector('.right-opt ul li .shop');

var home = document.querySelector('.home-2');
var shop = document.querySelector('.shop-2');

menuHome.addEventListener('mouseover', hoverNoneHome);
menuHome.addEventListener('mouseout', hideHome);

menuShop.addEventListener('mouseover', hoverNoneShop);
menuShop.addEventListener('mouseout', hideShop);

home.addEventListener('mouseout', hideHome);
shop.addEventListener('mouseout', hideShop);

function hoverNoneHome() {
    home.style.display = 'block';
}

function hideHome(event) {
    // Verifica se o mouse saiu tanto do menu quanto do elemento home
    if (!menuHome.contains(event.relatedTarget) && !home.contains(event.relatedTarget)) {
        home.style.display = 'none';
    }
}

function hoverNoneShop() {
    shop.style.display = 'flex';
}

function hideShop(event) {
    // Verifica se o mouse saiu tanto do menu quanto do elemento shop
    if (!menuShop.contains(event.relatedTarget) && !shop.contains(event.relatedTarget)) {
        shop.style.display = 'none';
    }
}


// Para revelar o menu CATEGORIAS

var ctgClick = document.querySelector('.left-opt');
var ctgNone = document.querySelector('.categoriasNone');

ctgClick.addEventListener('click', abriFecharCtg);

function abriFecharCtg() {
    if (ctgNone.style.display === 'none' || ctgNone.style.display === '') {
        ctgNone.style.display = 'block';
    } else {
        ctgNone.style.display = 'none';
    }
}

//Revelar carrinho de compraas

var carrinhoClick = document.querySelector('.Card img');
var carrinhoNone = document.querySelector('.cart-fundo-opact');
var carrinhoX = document.querySelector('.cart-fundo-opact .cart-container .heder-cart button');
carrinhoClick.addEventListener('click', abriFecharCarrinho);

function abriFecharCarrinho() {
    if (carrinhoNone.style.display === 'none' || carrinhoNone.style.display === '') {
        carrinhoNone.style.display = 'block';
    } else {
        carrinhoNone.style.display = 'none';
    }
}

carrinhoX.addEventListener('click', fecharCarrinho);
function fecharCarrinho() {
    carrinhoNone.style.display = 'none';
}

// add items no carrinho

var addCartButtons = document.querySelectorAll('.item-conteudo button');

// Itera sobre todos os botões selecionados
addCartButtons.forEach(function(button) {
    // Adiciona um ouvinte de evento de clique a cada botão
    button.addEventListener('click', function() {
        ItemAdicionado();
    });
});

function ItemAdicionado() {
    abriFecharCarrinho();
    
    // Encontre o elemento existente com a classe '.item-conteudo' e pegue o texto do elemento h2
    var nomeItemSelecionado = document.querySelector('.item-conteudo h2').textContent;
    var preçoItemSelecionado = document.querySelector('.item-conteudo .price span').textContent;
    var imgProdutoSelecionado = document.querySelector('.item-conteudo img').src;
    // Encontre o elemento existente com a classe '.main-cart'
    var mainCart = document.querySelector('.main-cart');

    // Crie um novo elemento <div>
    var newDiv = document.createElement('div');

    // Adicione a classe 'left-cart' ao novo elemento <div>
    newDiv.classList.add('left-cart');

    // Defina o conteúdo HTML do novo elemento <div> com o nome do item selecionado
    newDiv.innerHTML = 
    `
    <img src="${imgProdutoSelecionado}" alt="">
    <div class="text-card">
        <h2>${nomeItemSelecionado}</h2>
        <p>${preçoItemSelecionado}</p>
        <button>Remover</button>
    </div>
    <input type="number">
    `;
    var qntdade = document.querySelector('.main-cart input');
    qntdade.value = 1;
    // Adicione o novo elemento como um filho do elemento 'mainCart'
    mainCart.appendChild(newDiv);
}

// remove items no carrinho

var removeCartButtons = document.querySelector('.left-cart .text-card button');

removeCartButtons.addEventListener('click', removerProduto);

function removerProduto() {
    mainCart.removeChild(newDiv);
    
}

    
    
    

















//Scroll Revel
ScrollReveal({reset: true});
ScrollReveal().reveal('.oferta-pai01 .oferta01', {duration: 1000});
ScrollReveal().reveal('.oferta-pai01 .oferta02', {duration: 1000});
ScrollReveal().reveal('.categorias-titulos h1 ', {duration: 1000});
ScrollReveal().reveal('.categorias-titulos h2 ', {duration: 3000});
ScrollReveal().reveal('.oferta-pai02', {duration: 1000});
ScrollReveal().reveal('.grid-categorias', {duration: 2000});
ScrollReveal().reveal('.product-grid' , {duration: 2000});
ScrollReveal().reveal('.product-titulo' , {duration: 2000});

