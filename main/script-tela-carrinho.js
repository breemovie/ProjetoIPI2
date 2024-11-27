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