// script da div dos produtos tela inicial
document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('allProd');
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('coluna-produto');
      productDiv.setAttribute('data-category', product.category);
        
      productDiv.innerHTML = `
          <h1>${product.name}</h1>
          <a href="${product.link}"><img src="${product.image}" class="img-poster" alt="${product.name}"></a>
          <div class="card-price-before">
            <p class="price-before">${product.priceBefore}</p>
                <div class="game-class">
                  <i class="game-ClassI">${product.classes[0]}</i>
                  <i class="game-ClassI">${product.classes[1]}</i>
                  <i class="game-ClassI">${product.classes[2]}</i>
                </div>
         </div>
          <div class="card-price">
            <p class="price">${product.price}</p>
              <div class="card-add-fav">
                <i class="material-symbols-outlined fav-icon outlined">favorite</i>
                <i class="material-icons add-icon">add_shopping_cart</i>
              </div>
          </div>
      `;
      productContainer.appendChild(productDiv);
    });
    
    const gameClass = document.getElementsByClassName('game-ClassI');
    for (let i = 0; i < gameClass.length; i++) {
      const textValue = gameClass[i].textContent || gameClass[i].innerText;
      if (!textValue.trim()) {
        gameClass[i].style.display = 'none';  
      } else {
        gameClass[i].style.display = 'block';  
      }
    };
    
    const gamePriceBefore = document.getElementsByClassName('price-before');
          for (let i = 0; i < gamePriceBefore.length; i++) {
            const textValue = gamePriceBefore[i].textContent || gamePriceBefore[i].innerText;
            if (!textValue.trim()) {
              gamePriceBefore[i].style.display = 'hidden'; 
            } else {
              gamePriceBefore[i].style.display = 'block'; 
            }
          };
    
    });
// end script da div dos produtos tela inicial

// search filter tela inicial 
function myFunction() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase().trim();
    const items = document.getElementById('allProd').getElementsByClassName('coluna-produto');
    let hasVisibleItems = false;
  
   
    for (let i = 0; i < items.length; i++) {
      const textValue = items[i].textContent || items[i].innerText;
  
      if (textValue.toLowerCase().includes(filter)) {
        items[i].style.display = ''; 
        hasVisibleItems = true;
      } else {
        items[i].style.display = 'none';
      }
     
    }
  
  const noResultsMessage = document.getElementById('nonfound');  
    
  if (hasVisibleItems) {
    noResultsMessage.style.display = 'none';
  } else {
    noResultsMessage.style.display = 'block';
  }
  };
  // end search filter tela inicial 
  
  // filtro por categoria tela inicial
  document.getElementById('filter-container').addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('filterButton')) {
        const selectedCategory = event.target.getAttribute('data-category').trim();          
        const allProducts = document.querySelectorAll('.coluna-produto');
        
        allProducts.forEach(product => {
          const productCategories = product.getAttribute('data-category')  
  
            if (selectedCategory === 'all') {
                product.classList.remove('hidden');
            } else {
                
              if (productCategories.includes(selectedCategory)) {
                    product.classList.remove('hidden');
                } else {
                    product.classList.add('hidden');
                }
            }
        });
     
        const btns = document.querySelectorAll('.filterButton');
        btns.forEach(btn => btn.classList.remove('active'));            
        event.target.classList.add('active');
    }
  });
  // end filtro por categoria 

  // slide tela inicial
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })

  const carousel = document.querySelector("[data-carousel]"); 
const intervalTime = 3500; 

setInterval(() => {
  const nextButton = carousel.querySelector("[data-carousel-button='next']");
  nextButton.click(); 
}, intervalTime);
});

//

// add fav
document.addEventListener('DOMContentLoaded', function() {
  const favIcons = document.querySelectorAll('.fav-icon');
  favIcons.forEach(function(favIcon) {
    favIcon.addEventListener('click', function() {
      if (favIcon.classList.contains('material-symbols-outlined')) {
        favIcon.classList.remove('material-symbols-outlined');
        favIcon.classList.add('material-icons');
        favIcon.classList.remove('outlined');
        favIcon.classList.add('filled');
      } else {
        favIcon.classList.remove('material-icons');
        favIcon.classList.add('material-symbols-outlined');
        favIcon.classList.remove('filled');
        favIcon.classList.add('outlined');
      }
    });
  });
});
//