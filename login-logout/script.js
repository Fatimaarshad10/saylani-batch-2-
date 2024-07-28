const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit-btn");
const login = document.getElementById("login");
const logout = document.getElementById("logout");

function submitInput() {
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
}

const isLoggedIn = localStorage.getItem("email") || localStorage.getItem("password");

if (login && logout) {
  login.style.display = isLoggedIn ? "none" : "block";
  logout.style.display = isLoggedIn ? "block" : "none";
}


function logout_fun(){
  localStorage.removeItem('email')
  localStorage.removeItem('password')
  window.location.href = './form.html'

}