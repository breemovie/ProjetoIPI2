// favorites list 
document.addEventListener('DOMContentLoaded', function() {
  const productContainerFavorites = document.getElementById('favoritesContainer');
  const userId = localStorage.getItem('loggedInUserId'); 
  let userFavorites = JSON.parse(localStorage.getItem(`favorites_${userId}`)) || [];
 
  if (userFavorites.length === 0) {
    productContainerFavorites.innerHTML = '<div class="empty-favlist-span">Sua lista está vazia.</div>';
  } 
  else {
    userFavorites.forEach(product => {
      const productDivFav = document.createElement('div');
      productDivFav.classList.add('fav-game-card');
      productDivFav.innerHTML = `
            <div class="game-fav-card-name">${product.name}</div>         
            <div><a href="${product.link}"><img src="${product.image}" class="game-fav-card-poster"></a></div>
            <div class="game-card-line"></div>
            <div class="price-add-fav-card"> 
              <div class="price-game-card">R$ ${product.price}</div>
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
const userIdRemoveFav = localStorage.getItem('loggedInUserId'); 
let userFavRemove = JSON.parse(localStorage.getItem(`favorites_${userIdRemoveFav}`)) || []; 
  removeFavs.forEach(function(removeFav, index) {  
            removeFav.addEventListener('click', function() {  
              const product = userFavRemove[index]; 
            
              userFavRemove = userFavRemove.filter(item => item.id != product.id); 
              localStorage.setItem(`favorites_${userIdRemoveFav}`, JSON.stringify(userFavRemove));
              removeFav.closest('.fav-game-card').remove();   
               
              if (userFavRemove.length === 0) {
                productContainerFavorites.innerHTML = '<div class="empty-favlist-span">Sua lista está vazia.</div>';
              } 
        });
    });
//
// add prod to card
const addIcons = document.querySelectorAll('.add-icon');
let userCartFavs = JSON.parse(localStorage.getItem(`cart_${userId}`)) || []; 
const userIdCartFavs = localStorage.getItem('loggedInUserId'); 

  addIcons.forEach((addIcon, index) => {
    addIcon.addEventListener('click', function() {
      const product = userFavorites[index];
               
            if (!userCartFavs.some(item => item.id === product.id)) {
              userCartFavs.push(product);
              localStorage.setItem(`cart_${userIdCartFavs}`, JSON.stringify(userCartFavs));
  
            } else {
              alert("Você já adicionou esse produto!");
            }

        });
    });
//

});
// end favorites list 

// user info card
document.addEventListener('DOMContentLoaded', function() {
  const storedFirstName = localStorage.getItem('loggedInUserFistName');
  const storedLastName = localStorage.getItem('loggedInUserLastName');

  document.querySelector('.firstname-div').textContent = storedFirstName;
  document.querySelector('.lastname-div').textContent = storedLastName;
 
});
//

 
