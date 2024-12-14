// carrinho principal
document.addEventListener('DOMContentLoaded', function carrinho() {
    const productContainerCarrinho = document.getElementById('carrinho-produtos-container');
    const userId = localStorage.getItem('loggedInUserId'); 
    let userCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || []; 
  
    if (userCart.length === 0) {
      productContainerCarrinho.innerHTML = '<div class="empty-card-span">Seu carrinho está vazio.</div>';
    } 
    else {
      userCart.forEach(product => {
        const productDivCarrinho = document.createElement('div');
        productDivCarrinho.classList.add('cartao');
            
        productDivCarrinho.innerHTML = `
          <div class="conteudo-cartao">
            <img src="${product.image}" class="imagem-cartao" alt="${product.name}">
            <div class="corpo-cartao">
              <h5 class="titulo-cartao">${product.name}</h5>
              <p class="descricao-cartao">Ano 2024 - edição beta.</p>
              <p class="preco-anterior">${product.priceBefore}</p>
              <p class="preco-atual">R$ ${product.price}</p>                   
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
  const userIdRemoveCart = localStorage.getItem('loggedInUserId'); 
  let userCartRemove = JSON.parse(localStorage.getItem(`cart_${userIdRemoveCart}`)) || []; 
  removeItems.forEach(function(removeItem, index) {
    removeItem.addEventListener('click', function() {
      const product = userCartRemove[index];
    
          userCartRemove = userCartRemove.filter(item => item.id != product.id); 
          localStorage.setItem(`cart_${userIdRemoveCart}`, JSON.stringify(userCartRemove));
          removeItem.closest('.cartao').remove();
          recalculateTotals();

          if (userCartRemove.length === 0) {
            productContainerCarrinho.innerHTML = '<p class="empty-card-span">Seu carrinho está vazio.</p>';
          } 

        });        
    });
//

// valores
function recalculateTotals() {
  let valortotal = 0;
  let descontoloja = 0;
  let valorcupom = parseFloat(localStorage.getItem('valorCupomStored')) || 0;

  if (userCart.length === 0) {
    valortotal = 0;
    valorcupom = 0; 
    localStorage.removeItem('valorCupomStored'); 
  }
   else {
  userCart.forEach(item => {
    const itemPriceBefore = parseFloat(item.priceBefore) || 0; 
    const itemPrice = parseFloat(item.price) || 0; 

    let itemDiscount = 0;
    if (!isNaN(itemPriceBefore) && itemPriceBefore > 0) {
      itemDiscount = itemPriceBefore - itemPrice;
      descontoloja += itemDiscount;
    }
    valortotal += itemPrice;
  });
}

  valortotal -= valorcupom;

  localStorage.setItem('valorTotalStored', valortotal);
  localStorage.setItem('valorDescontoStored', descontoloja);

  document.querySelector('.valorTotal').textContent = 'R$ ' + valortotal.toFixed(2);
  document.querySelector('.descontoLoja').textContent = 'R$ ' + descontoloja.toFixed(2);
  document.querySelector('.valorCupom').textContent = 'R$ ' + valorcupom.toFixed(2);
  

}


const cupomForm = document.getElementById('cupomForm');
cupomForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const itemCupom = document.getElementById('addCupom').value.trim().toUpperCase();

  const cupom = cupons.find(c => c.cupomCode === itemCupom);

  let valorcupom = 0;
  if (cupom) {
    valorcupom = cupom.cupomValor;
    let valortotal = parseFloat(localStorage.getItem('valorTotalStored')) || 0;
    valortotal -= valorcupom; 

    localStorage.setItem('valorCupomStored', valorcupom);
    localStorage.setItem('valorTotalStored', valortotal);
    
  } else {
    alert("Cupom inválido");
    localStorage.removeItem('valorCupomStored');
  }

  recalculateTotals();
});



recalculateTotals();
// end valores

});
// end carrinho principal


