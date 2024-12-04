
  // produtos
  const products = [
    { name: "The Witcher 3: Wild Hunt", category: "adv", class1: "Aventura", class2: "Ação", class3: "RPG" , price: "R$ 129,99", priceBefore: "R$ 259,99", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg?t=1729246272", link:"thewitcher3.html" },
    { name: "The Last Of Us: Part I", category: "adv", class1: "Aventura", class2: "Ação", class3: "", price: "R$ 249,90", priceBefore: "R$ 349,90", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1728603021" },
    { name: "Uncharted 4: A Thief's End", category: "adv", class1: "Aventura", class2: "Ação", class3: "", price: "R$ 119,99", priceBefore: "", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1659420/header_brazilian.jpg?t=1717621447" },
    { name: "Life Is Strange", category: "adv", class1: "Aventura", class2: "Interativo", class3: "", price: "R$ 39,90 ", priceBefore: "", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/319630/header.jpg?t=1724158918" },
    { name: "Grand Theft Auto V", category: "adv", class1: "Aventura", class2: "Ação", class3: "RPG", price: "R$ 159,90 ", priceBefore: "", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg?t=1726606628" },
    { name: "Hollow Knight", category: "adv", class1: "Aventura", class2: "", class3: "", price: "R$ 89,90 ", priceBefore: "", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg?t=1695270428" },
    { name: "EA Sports FC™ 25", category: "spt", class1: "Sports", class2: "", class3: "", price: "R$ 299,90 ", priceBefore: "", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2669320/header.jpg?t=1729643957" },
    { name: "Forza Horizon 4", category: "spt", class1: "Sports", class2: "Racing", class3: "", price: "R$ 49,50 ", priceBefore: "", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1293830/header.jpg?t=1702576030" },
    { name: "Dead by Daylight", category: "ter", class1: "Terror", class2: "", class3: "", price: "R$ 29,90 ", priceBefore: "R$ 79,90", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg?t=1729537301" },
    { name: "Cities: Skylines", category: "adv", class1: "Simulador", class2: "", class3: "", price: "R$ 19,90 ", priceBefore: "", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/255710/header.jpg?t=1729757220" },
    { name: "Fallout 4", category: "act", class1: "Aventura", class2: "Ação", class3: "", price: "R$ 59,90 ", priceBefore: "",  image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/377160/header.jpg?t=1726758475" },
    { name: "God of War: Ragnarök", category: "adv", class1: "Aventura", class2: "", class3: "", price: "R$ 249,90 ", priceBefore: "", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg?t=1728067832" }
  ];
  

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

// logout
function logout() {
localStorage.removeItem('userloggedIn');
checkLoginStatus();
}

//
                             
