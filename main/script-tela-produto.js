// scprit da div de produtos(search) da tela de produto
document.addEventListener('DOMContentLoaded', function() {
    const prodScreenContainer = document.getElementById ('containertag-prod');
        products.forEach(product => {
        const prodDiv = document.createElement('div');
        prodDiv.classList.add('coltag-produto');
          prodDiv.innerHTML = `
              <a href="thewitcher3.html" class="coltag-produto-link-div-a">
                <img src="${product.image}" class="img-poster-tag" alt="${product.name}">
                <div class="div-gameprice-tag">
                <div class="gamename-tag">${product.name}</div>
                <div class="price-tag">R$ ${product.price}</div> 
                </div> 
              </a>                   
          `
          prodScreenContainer.appendChild(prodDiv);
        });
    });
// end scprit da div de produtos(search) da tela de produto


// scroll com button (slide trailer) tela de produto
const scrollContent = document.getElementById('slide-teasers');
const scrollLeft = document.getElementById('scroll-left');
const scrollRight = document.getElementById('scroll-right');

const scrollAmount = 220; 


scrollLeft.addEventListener('click', () => {
    scrollContent.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});


scrollRight.addEventListener('click', () => {
    scrollContent.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

//

// slide trailer tela produto
   function changeSlide(imageSrc) {
    const mainImage = document.getElementById('mainSlide');
    if (imageSrc === "") {
        mainImage.innerHTML = `<video width="450" height="255" controls class="trailer" id="mainSlideVideo">
            <source src="https://video.fastly.steamstatic.com/store_trailers/256927226/movie480_vp9.webm?t=1674829926" type="video/webm">
            <source src="https://video.fastly.steamstatic.com/store_trailers/256927226/movie480.mp4?t=1674829926" type="video/mp4">
        </video>`;
    } else {
        mainImage.innerHTML = `<img src="${imageSrc}" width="450" height="255" alt="Teaser Image">`;
    }
}
// end slide trailer tela produto

// search filter tela produto
function prodSearch() {
    document.getElementById("prodscreenfilt").style.display = "block";
    const input = document.getElementById('search-prodscreen');
    const filter = input.value.toLowerCase().trim();
    const items = document.getElementById('containertag-prod').getElementsByClassName('coltag-produto');
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
  }
  
  window.addEventListener('click', function(event) {
    const filterContainer = document.getElementById('prodscreenfilt');
    const searchInput = document.getElementById('search-prodscreen');
  
    
    if (!filterContainer.contains(event.target) && !searchInput.contains(event.target)) {
        filterContainer.style.display = 'none';  
    }
  });
  //

// add prod to card 
document.addEventListener('DOMContentLoaded', function() {
  const addIcons = document.querySelectorAll('.add-icon');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  addIcons.forEach((addIcon, index) => {
    addIcon.addEventListener('click', function() {
      const product = products[index];
      
            
            if (!cart.some(item => item.id === product.id)) {
              cart.push(product);
              localStorage.setItem('cart', JSON.stringify(cart));
  
            } else {
              alert("Você já adicionou esse produto!");
            }

        });
    });
  });
//

// add prod to favorites 
document.addEventListener('DOMContentLoaded', function AddToFavorite() {
  const favIcons = document.querySelectorAll('.fav-icon');
  const userId = localStorage.getItem('loggedInUserId');
  let favoritesList = JSON.parse(localStorage.getItem(`favorites_${userId}`)) || [];
  const userIsLogged = localStorage.getItem('userloggedIn') === 'true';
 
  console.log("User logged in status: ", userIsLogged);
  
  favIcons.forEach((favIcon, index) => {   
      const product = products[index];

      if (userIsLogged) {
                if (favoritesList.some(item => item.id === product.id)) {
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

              favIcon.addEventListener('click', function() {     
                  if (favIcon.classList.contains('material-symbols-outlined')){
                    favIcon.classList.remove('material-symbols-outlined');
                    favIcon.classList.add('material-icons');
                    favIcon.classList.remove('outlined');
                    favIcon.classList.add('filled');

                  if (!favoritesList.some(item => item.id === product.id)) {
                      favoritesList.push(product);
                      localStorage.setItem('favorites', JSON.stringify(favoritesList)); 
                  }

                  } else {
                    favoritesList = favoritesList.filter(item => item.id !== product.id); 
                    localStorage.setItem('favorites', JSON.stringify(favoritesList)); 
                    favIcon.classList.remove('material-icons');
                    favIcon.classList.add('material-symbols-outlined');
                    favIcon.classList.remove('filled');
                    favIcon.classList.add('outlined'); 
                  }       
             }); 
              
            }
            else {
              favIcon.addEventListener('click', function() {
                alert("Você precisa estar logado!");
              });
              favIcon.classList.remove('material-icons');
              favIcon.classList.add('material-symbols-outlined');
              favIcon.classList.remove('filled');
              favIcon.classList.add('outlined');
            }
    });
  });
//