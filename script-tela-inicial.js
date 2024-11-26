// slide prod
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
})

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


// search filter  tela inicial 
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
//

// filter categorias
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("coluna-produto");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// still working on it
var btnContainer = document.getElementsById("filter-container");
var btns = btnContainer.getElementsByClassName("filterButton");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//


