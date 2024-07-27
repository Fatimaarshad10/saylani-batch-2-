const email = document.getElementById('email')
const password = document.getElementById('password')
const submit = document.getElementById('submit-btn')
const login = document.getElementById('login')
const logout = document.getElementById('logout')


submit.addEventListener('click' , ()=>{
   localStorage.setItem('email' , email.value)
   localStorage.setItem('password' , password.value)
})
// console.log(localStorage.getItem('email'))
// if(localStorage.getItem('email') || localStorage.getItem('password')){
//     login.style.display = 'none'
//     logout.style.display = 'block'
// }else{
//      login.style.display = 'block'
//     logout.style.display = 'none'
// }