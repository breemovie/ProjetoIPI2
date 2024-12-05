
  // produtos
  const products = [
    {
      name: "The Witcher 3: Wild Hunt",
      category: ["adv", "act", "rpg"],
      classes: ["Aventura","Ação","RPG"],
      price: "R$ 129,99",
      priceBefore: "R$ 259,99",
      image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg?t=1729246272",
      link: "thewitcher3.html"
    },
    {
      name: "The Last Of Us: Part I",
      category: ["adv", "act", "ter"],
      classes: ["Aventura","Ação", "Terror"],
      price: "R$ 249,90",
      priceBefore: "R$ 349,90",
      image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1728603021"
    },
    {
      name: "Uncharted 4: A Thief's End",
      category: ["adv", "act"],
      classes: ["Aventura","Ação", ""],
      price: "R$ 119,99",
      priceBefore: "",
      image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1659420/header_brazilian.jpg?t=1717621447"
    },
    {
      name: "Life Is Strange",
      category: ["adv", "int"],
      classes: ["Aventura","Interativo", ""],
      price: "R$ 39,90",
      priceBefore: "",
      image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/319630/header.jpg?t=1724158918"
    },
    {
      name: "Grand Theft Auto V",
      category: ["adv", "act", "rpg"],
      classes: ["Aventura","Ação","RPG"],
      price: "R$ 159,90",
      priceBefore: "",
      image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg?t=1726606628"
    },
    {
      name: "Hollow Knight",
      category: ["adv", "fan"],
      classes: ["Aventura", "Fantasia", ""],
      price: "R$ 89,90",
      priceBefore: "",
      image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg?t=1695270428"
    },
    {
      name: "The Elder Scrolls V: Skyrim",
      category: ["adv", "act", "rpg"],
      classes: ["Aventura","Ação","RPG"],
      price: "R$ 149,00",
      priceBefore: "R$ 239,90",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg?t=1721923149"
    },
    {
      name: "EA Sports FC™ 25",
      category: ["spt", "sim"],
      classes: ["Sports", "Simulação", ""],
      price: "R$ 299,90",
      priceBefore: "",
      image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2669320/header.jpg?t=1729643957"
    },
    {
      name: "Forza Horizon 4",
      category: ["spt", "sim"],
      classes: ["Sports", "Simulação", ""],
      price: "R$ 49,50",
      priceBefore: "",
      image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1293830/header.jpg?t=1702576030"
    },
    {
      name: "Dead by Daylight",
      category: ["ter"],
      classes: ["Terror", "", ""],
      price: "R$ 29,90",
      priceBefore: "R$ 79,90",
      image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg?t=1729537301"
    },
    {
      name: "Cities: Skylines",
      category: ["sim"],
      classes: ["Simulação", "", ""],
      price: "R$ 19,90",
      priceBefore: "",
      image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/255710/header.jpg?t=1729757220"
    },
    {
      name: "Fallout 4",
      category: ["act", "act", "fps"],
      classes: ["Aventura", "Ação", "FPS"],
      price: "R$ 59,90",
      priceBefore: "",
      image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/377160/header.jpg?t=1726758475"
    },
    {
      name: "God of War: Ragnarök",
      category: ["adv", "act", "rpg"],
      classes: ["Aventura", "Ação", "RPG"],
      price: "R$ 249,90",
      priceBefore: "",
      image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg?t=1728067832"
    },
    {
      name: "Horizon Forbidden West",
      category: ["adv", "act", "rpg"],
      classes: ["Aventura", "Ação", "RPG"],
      price: "R$ 249,90",
      priceBefore: "",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2420110/header.jpg?t=1725653368"
    },
    {
      name: "Red Dead Redemption 2",
      category: ["adv", "act", "rpg"],
      classes: ["Aventura", "Ação", "RPG"],
      price: "R$ 299,90",
      priceBefore: "",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg?t=1720558643"
    },
    {
      name: "Ghost of Tsushima",
      category: ["adv", "act", "rpg"],
      classes: ["Aventura", "Ação", "RPG"],
      price: "R$ 249,90",
      priceBefore: "",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg?t=1717622497"
    },
    {
      name: "Assassin's Creed Valhalla",
      category: ["adv", "act"],
      classes: ["Aventura", "Ação", "RPG"],
      price: "R$ 249,90",
      priceBefore: "",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2208920/header.jpg?t=1732122317"
    },
    {
      name: "Cyberpunk 2077",
      category: ["adv", "act", "rpg"],
      classes: ["Aventura", "Ação", "RPG"],
      price: "R$ 199,90",
      priceBefore: "",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg?t=1730212296"
    },
    {
      name: "Final Fantasy VII Remake",
      category: ["adv", "fan", "rpg"],
      classes: ["Aventura", "Fantasia", "RPG"],
      price: "R$ 179,90",
      priceBefore: "",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1462040/header.jpg?t=1732013233"
    },
    {
      name: "Spider-Man: Miles Morales",
      category: ["act", "adv"],
      classes: ["Aventura", "Ação", ""],
      price: "R$ 199,90",
      priceBefore: "",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817190/header.jpg?t=1729525947"
    },
    {
      name: "Elden Ring",
      category: ["fan", "rpg"],
      classes: ["Fantasia", "RPG", ""],
      price: "R$ 299,90",
      priceBefore: "",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1726158298"
    },
    {
      name: "Rise of the Tomb Raider",
      category: ["adv", "act"],
      classes: ["Aventura", "Ação", ""],
      price: "R$ 129,90",
      priceBefore: "",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/391220/header.jpg?t=1729011444"
    },
    {
      name: "Hogwarts Legacy",
      category: ["adv", "rpg"],
      classes: ["Aventura", "RPG", ""],
      price: "R$ 249,90",
      priceBefore: "R$ 349,90",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg?t=1717689083"
    },
    {
      name: "Detroit: Become Human",
      category: ["adv", "int"],
      classes: ["Aventura", "Interativo", ""],
      price: "R$ 199,90",
      priceBefore: "R$ 299,90",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222140/header.jpg?t=1667468479"
    }
  ];


// categorias : adv(aventura), act(ação), ter(terror), rpg(RPG), fps(FPS), spt(sports), sim(simulação), int(interativo), fan(fantasia).

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
                             
