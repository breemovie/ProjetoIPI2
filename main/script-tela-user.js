// favorites list 
document.addEventListener('DOMContentLoaded', function() {
  const productContainerFavorites = document.getElementById('favoritesContainer');
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
 
  if (favorites.length === 0) {
    productContainerFavorites.innerHTML = '<div class="empty-favlist-span">Sua lista está vazia.</div>';
  } 
  else {
    favorites.forEach(product => {
      const productDivFav = document.createElement('div');
      productDivFav.classList.add('fav-game-card');
      productDivFav.innerHTML = `
            <div class="game-fav-card-name">${product.name}</div>         
            <div><a href="${product.link}"><img src="${product.image}" class="game-fav-card-poster"></a></div>
            <div class="game-card-line"></div>
            <div class="price-add-fav-card"> 
              <div class="price-game-card">${product.price}</div>
                 <div class="add-fav-card">
                   <div><span class="material-icons fav-icon">favorite</span></div>
                  <div><span class="material-icons add-icon">add_shopping_cart</span></div>
                 </div>         
      `;
      productContainerFavorites.appendChild(productDivFav);
    });
  };
// remove fav
const removeFavs = document.querySelectorAll('.fav-icon');
  removeFavs.forEach(function(removeFav, index) {  
            removeFav.addEventListener('click', function() {  
              const product = favorites[index]; 
            
              favorites = favorites.filter(item => item.id != product.id); 
              localStorage.setItem('favorites', JSON.stringify(favorites));
              removeFav.closest('.fav-game-card').remove();   
              
              if (favorites.length === 0) {
                productContainerFavorites.innerHTML = '<div class="empty-favlist-span">Sua lista está vazia.</div>';
              } 
        });
    });
//
// add prod to card
const addIcons = document.querySelectorAll('.add-icon');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  addIcons.forEach((addIcon, index) => {
    addIcon.addEventListener('click', function() {
      const product = favorites[index];
               
            if (!cart.some(item => item.id === product.id)) {
              cart.push(product);
              localStorage.setItem('cart', JSON.stringify(cart));
  
            } else {
              alert("Você já adicionou esse produto!");
            }

        });
    });
//

});
// end favorites list 



 
