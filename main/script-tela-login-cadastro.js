// login 

function login() {
  localStorage.setItem('userloggedIn', 'true');
  checkLoginStatus();
}

 //


// form esqueceu senha

function openForm() {
    document.getElementById("esq-senha").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("esq-senha").style.display = "none";
  }
  
  //

