document.addEventListener('DOMContentLoaded', function() {
    const productContainerCarrinho = document.getElementById('carrinho-produtos-container');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    if (cart.length === 0) {
      productContainerCarrinho.innerHTML = '<div class="empty-card-span">Seu carrinho está vazio.</div>';
    } 
    else {
      cart.forEach(product => {
        const productDivCarrinho = document.createElement('div');
        productDivCarrinho.classList.add('cartao');
            
        productDivCarrinho.innerHTML = `
          <div class="conteudo-cartao">
            <img src="${product.image}" class="imagem-cartao" alt="${product.name}">
            <div class="corpo-cartao">
              <h5 class="titulo-cartao">${product.name}</h5>
              <p class="descricao-cartao">Ano 2024 - edição beta.</p>
              <p class="preco-anterior">${product.priceBefore}</p>
              <p class="preco-atual">${product.price}</p>                   
            </div>
          </div>
          <div class="remove-prod-card"> 
              <div class="remove-icon-div"><span class="material-symbols-outlined remove-card-icon">delete</span></div>
          </div>
        `;
        productContainerCarrinho.appendChild(productDivCarrinho);
      });
    };
// hide obj when not set
    const gamePriceBeforeCart = document.getElementsByClassName('preco-anterior');
    for (let i = 0; i < gamePriceBeforeCart.length; i++) {
      const textValue = gamePriceBeforeCart[i].textContent || gamePriceBeforeCart[i].innerText;
      if (!textValue.trim()) {
        gamePriceBeforeCart[i].style.display = 'hidden'; 
      } else {
        gamePriceBeforeCart[i].style.display = 'block'; 
      }
    };
//
// remove item
  const removeItems = document.querySelectorAll('.remove-card-icon');
  removeItems.forEach(function(removeItem, index) {
    removeItem.addEventListener('click', function() {
      const product = cart[index];
    
          cart = cart.filter(item => item.id != product.id); 
          localStorage.setItem('cart', JSON.stringify(cart));
          removeItem.closest('.cartao').remove();

          if (cart.length === 0) {
            productContainerCarrinho.innerHTML = '<p class="empty-card-span">Seu carrinho está vazio.</p>';
          } 

        });        
    });
//
});


