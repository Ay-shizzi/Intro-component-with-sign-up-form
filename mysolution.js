const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.getElementById('btn')

let firstNameError = document.getElementById('first-name_error');
let lastNameError = document.getElementById('last-name_error');
let emailError = document.getElementById('email_error');
let passwordError = document.getElementById('password_error');
let mailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

btn.addEventListener("click", function(event){
    event.preventDefault()
  });
btn.addEventListener('click', value)

function value(){
    if(firstName.value == ''){
        firstNameError.style.display = 'block'
    }else{
        firstNameError.style.display = 'none'
    }
    if(lastName.value == ''){
        lastNameError.style.display = 'block'
    }else{
        lastNameError.style.display = 'none'
    }
    if(password.value == ''){
        passwordError.style.display = 'block'
    }else{
        passwordError.style.display = 'none'
    }
    if(email.value.match(mailValid)){
        emailError.style.display = 'none'
    }else{
        emailError.style.display = 'block'
    }
}