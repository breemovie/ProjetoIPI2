// carrinho finalizar (no remove item )
document.addEventListener('DOMContentLoaded', function carrinhoFinalizar() {
    const productContainerCarrinhoFinalizar = document.getElementById('carrinho-produtos-container-fnalizar');
    const userId = localStorage.getItem('loggedInUserId'); 
    let userCartFinal = JSON.parse(localStorage.getItem(`cart_${userId}`)) || []; 
  
     userCartFinal.forEach(product => {
        const productDivCarrinhoFinalizar = document.createElement('div');
        productDivCarrinhoFinalizar.classList.add('cartao-finalizar');
            
        productDivCarrinhoFinalizar.innerHTML = `
          <div class="conteudo-cartao">
            <img src="${product.image}" class="imagem-cartao" alt="${product.name}">
            <div class="corpo-cartao">
              <h5 class="titulo-cartao">${product.name}</h5>
              <p class="descricao-cartao">Ano 2024 - edição beta.</p>
              <p class="preco-anterior">${product.priceBefore}</p>
              <p class="preco-atual">R$ ${product.price}</p>                   
            </div>
          </div>
        `;
        productContainerCarrinhoFinalizar.appendChild(productDivCarrinhoFinalizar);
      });

      const gamePriceBeforeCart = document.getElementsByClassName('preco-anterior');
    for (let i = 0; i < gamePriceBeforeCart.length; i++) {
      const textValue = gamePriceBeforeCart[i].textContent || gamePriceBeforeCart[i].innerText;
      if (!textValue.trim()) {
        gamePriceBeforeCart[i].style.display = 'hidden'; 
      } else {
        gamePriceBeforeCart[i].style.display = 'block'; 
      }
    };

    });



  // valor

  //
  let valortotal = parseFloat(localStorage.getItem('valorTotalStored')) || 0;
  let descontoloja = parseFloat(localStorage.getItem('valorDescontoStored')) || 0;
  let valorcupom = parseFloat(localStorage.getItem('valorCupomStored')) || 0;

  document.querySelector('.valorTotal').textContent = 'R$ ' + valortotal.toFixed(2);
  document.querySelector('.descontoLoja').textContent = 'R$ ' + descontoloja.toFixed(2);
  document.querySelector('.valorCupom').textContent = 'R$ ' + valorcupom.toFixed(2);
  // end carrinho finalizar
