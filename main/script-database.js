
// produtos
const products = [
  {
    id: 1,
    name: "The Witcher 3: Wild Hunt",
    category: ["adv", "act", "rpg"],
    classes: ["Aventura", "Ação", "RPG"],
    price: "129.99",
    priceBefore: "259.99",
    image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg?t=1729246272",
    link: "thewitcher3.html"
  },
  {
    id: 2,
    name: "The Last Of Us: Part I",
    category: ["adv", "act", "ter"],
    classes: ["Aventura", "Ação", "Terror"],
    price: "249.90",
    priceBefore: "349.90",
    image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1728603021"
  },
  {
    id: 3,
    name: "Uncharted 4: A Thief's End",
    category: ["adv", "act"],
    classes: ["Aventura", "Ação", ""],
    price: "119.99",
    priceBefore: "",
    image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1659420/header_brazilian.jpg?t=1717621447"
  },
  {
    id: 4,
    name: "Life Is Strange",
    category: ["adv", "int"],
    classes: ["Aventura", "Interativo", ""],
    price: "39.90",
    priceBefore: "",
    image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/319630/header.jpg?t=1724158918"
  },
  {
    id: 5,
    name: "Grand Theft Auto V",
    category: ["adv", "act", "rpg"],
    classes: ["Aventura", "Ação", "RPG"],
    price: "159.90",
    priceBefore: "",
    image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg?t=1726606628"
  },
  {
    id: 6,
    name: "Hollow Knight",
    category: ["adv", "fan"],
    classes: ["Aventura", "Fantasia", ""],
    price: "89.90",
    priceBefore: "",
    image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg?t=1695270428"
  },
  {
    id: 7,
    name: "The Elder Scrolls V: Skyrim",
    category: ["adv", "act", "rpg"],
    classes: ["Aventura", "Ação", "RPG"],
    price: "149.00",
    priceBefore: "239.90",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg?t=1721923149"
  },
  {
    id: 8,
    name: "EA Sports FC™ 25",
    category: ["spt", "sim"],
    classes: ["Sports", "Simulação", ""],
    price: "299.90",
    priceBefore: "",
    image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2669320/header.jpg?t=1729643957"
  },
  {
    id: 9,
    name: "Forza Horizon 4",
    category: ["spt", "sim"],
    classes: ["Sports", "Simulação", ""],
    price: "49.50",
    priceBefore: "",
    image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1293830/header.jpg?t=1702576030"
  },
  {
    id: 10,
    name: "Dead by Daylight",
    category: ["ter"],
    classes: ["Terror", "", ""],
    price: "29.90",
    priceBefore: "79.90",
    image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg?t=1729537301"
  },
  {
    id: 11,
    name: "Cities: Skylines",
    category: ["sim"],
    classes: ["Simulação", "", ""],
    price: "19.90",
    priceBefore: "",
    image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/255710/header.jpg?t=1729757220"
  },
  {
    id: 12,
    name: "Fallout 4",
    category: ["act", "act", "fps"],
    classes: ["Aventura", "Ação", "FPS"],
    price: "59.90",
    priceBefore: "",
    image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/377160/header.jpg?t=1726758475"
  },
  {
    id: 13,
    name: "God of War: Ragnarök",
    category: ["adv", "act", "rpg"],
    classes: ["Aventura", "Ação", "RPG"],
    price: "249.90",
    priceBefore: "",
    image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg?t=1728067832"
  },
  {
    id: 14,
    name: "Horizon Forbidden West",
    category: ["adv", "act", "rpg"],
    classes: ["Aventura", "Ação", "RPG"],
    price: "249.90",
    priceBefore: "",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2420110/header.jpg?t=1725653368"
  },
  {
    id: 15,
    name: "Red Dead Redemption 2",
    category: ["adv", "act", "rpg"],
    classes: ["Aventura", "Ação", "RPG"],
    price: "299.90",
    priceBefore: "",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg?t=1720558643"
  },
  {
    id: 16,
    name: "Ghost of Tsushima",
    category: ["adv", "act", "rpg"],
    classes: ["Aventura", "Ação", "RPG"],
    price: "249.90",
    priceBefore: "",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg?t=1717622497"
  },
  {
    id: 17,
    name: "Assassin's Creed Valhalla",
    category: ["adv", "act"],
    classes: ["Aventura", "Ação", "RPG"],
    price: "249.90",
    priceBefore: "",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2208920/header.jpg?t=1732122317"
  },
  {
    id: 18,
    name: "Cyberpunk 2077",
    category: ["adv", "act", "rpg"],
    classes: ["Aventura", "Ação", "RPG"],
    price: "199.90",
    priceBefore: "",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg?t=1730212296"
  },
  {
    id: 19,
    name: "Final Fantasy VII Remake",
    category: ["adv", "fan", "rpg"],
    classes: ["Aventura", "Fantasia", "RPG"],
    price: "179.90",
    priceBefore: "",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1462040/header.jpg?t=1732013233"
  },
  {
    id: 20,
    name: "Spider-Man: Miles Morales",
    category: ["act", "adv"],
    classes: ["Aventura", "Ação", ""],
    price: "199.90",
    priceBefore: "",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817190/header.jpg?t=1729525947"
  },
  {
    id: 21,
    name: "Elden Ring",
    category: ["fan", "rpg"],
    classes: ["Fantasia", "RPG", ""],
    price: "299.90",
    priceBefore: "",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1726158298"
  },
  {
    id: 22,
    name: "Rise of the Tomb Raider",
    category: ["adv", "act"],
    classes: ["Aventura", "Ação", ""],
    price: "129.90",
    priceBefore: "",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/391220/header.jpg?t=1729011444"
  },
  {
    id: 23,
    name: "Hogwarts Legacy",
    category: ["adv", "rpg"],
    classes: ["Aventura", "RPG", ""],
    price: "249.90",
    priceBefore: "349.90",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg?t=1717689083"
  },
  {
    id: 24,
    name: "Detroit: Become Human",
    category: ["adv", "int"],
    classes: ["Aventura", "Interativo", ""],
    price: "199.90",
    priceBefore: "299.90",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222140/header.jpg?t=1667468479"
  }
];

//

// categorias : adv(aventura), act(ação), ter(terror), rpg(RPG), fps(FPS), spt(sports), sim(simulação), int(interativo), fan(fantasia).

                           
// users
const users = [

  {
    id: 'usuario1',
    firstname: "User",
    lastname: "1",
    email: "user1@teste.com",
    password: "imuser1"
  },
  {
    id: 'usuario2',
    firstname: "User",
    lastname: "2",
    email: "user2@teste.com",
    password: "imuser2"
  },

  {
    id: 'usuario3',
    firstname: "User",
    lastname: "3",
    email: "user3@teste.com",
    password: "imuser3"
  },

  {
    id: 'usuario4',
    firstname: "User",
    lastname: "4",
    email: "user4@teste.com",
    password: "im1user4"
  },

  {
    id: 'usuario5',
    firstname: "User",
    lastname: "5",
    email: "user5@teste.com",
    password: "imuser5"
  }

];
//

// cupons
const cupons = [
  {
    cupomCode: "CUPOM10",
    cupomValor: "10"
   
  },
  {
    cupomCode: "CUPOM20",
    cupomValor: "20"
   
  },
  {
    cupomCode: "CUPOM30",
    cupomValor: "30"
   
  },
  {
    cupomCode: "CUPOM50",
    cupomValor: "50"
   
  },
  {
    cupomCode: "CUPOM100",
    cupomValor: "100"
   
  }
];
//

// login 
document.addEventListener('DOMContentLoaded', function login() {
  const loginForm = document.getElementById('loginForm');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const userEmail = document.getElementById('emailId').value;
      const userSenha = document.getElementById('senhaId').value;
      let foundUser = null;
      console.log("Checking login for:", userEmail, userSenha); 

        for (let i = 0; i < users.length; i++) {
          const user = users[i];
          console.log("Checking user:", user.email);

          if (user.email === userEmail) { 
            if (user.password === userSenha) {
              foundUser = user;  
              break;
            } else {
              alert("Senha incorreta!");
              return;
            }
          }
        }

        if (foundUser) {
          localStorage.setItem('userloggedIn', 'true');
          localStorage.setItem('loggedInUserId', foundUser.id);
          localStorage.setItem('loggedInUserFistName', foundUser.firstname);
          localStorage.setItem('loggedInUserLastName', foundUser.lastname);
          console.log('Login status set to true');
          checkLoginStatus();
          window.location.href = 'telainicial.html'; 
              if (!localStorage.getItem(`favorites_${foundUser.id}`)) {
                localStorage.setItem(`favorites_${foundUser.id}`, JSON.stringify([])); 
              }
              if (!localStorage.getItem(`cart_${foundUser.id}`)) {
                localStorage.setItem(`cart_${foundUser.id}`, JSON.stringify([]));
              }
             
        } 
        else {
          alert("E-mail incorreto!");
        }
    });
 }
});
//

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
};

// logout
function logout() {
  localStorage.setItem('userloggedIn', 'false');
  console.log('Login status set to false');
  checkLoginStatus();
};
//
window.onload = checkLoginStatus;