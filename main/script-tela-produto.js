  // logged in - not logged in layout
  function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('userloggedIn') === 'true';
    const loggedInElements = document.getElementsByClassName('logged-in');
    const notLoggedElements = document.getElementsByClassName('not-logged');
  
    
    if (isLoggedIn) {
      for (let element of loggedInElements) {
        element.style.display = 'block';
      }
      for (let element of notLoggedElements) {
        element.style.display = 'none';
      }

    } else {
      for (let element of notLoggedElements) {
        element.style.display = 'block';
      }
      for (let element of loggedInElements) {
        element.style.display = 'none';
      }
    }
  }

  window.onload = checkLoginStatus;
//

// logout
function logout() {
  localStorage.removeItem('userloggedIn');
  checkLoginStatus();
}
//

// add fav
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
//

// scroll com button 
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




