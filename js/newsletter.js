const submitBtn = document.querySelector(".subscribe-btn");
const dismissBtn = document.querySelector(".dismiss-btn");
const formContainer = document.querySelector(".form_container");
const successMsg = document.querySelector(".success-message");
const inputElement = document.querySelector(".input")




// Checking if input is empty or occupied
submitBtn.addEventListener('click', ()=>{
  if (inputElement.value != '') {
formContainer.classList.add('hide')
successMsg.classList.remove('hide')
document.querySelector('.error p').innerHTML = ''
 } else{
  document.querySelector('.error p').innerHTML = 'Valid Email Required'

  // To show to color when there is an error

  inputElement.classList.add('active')
 }
})

dismissBtn.addEventListener('click', ()=>{
  formContainer.classList.remove('hide')
successMsg.classList.add('hide')
inputElement.value = ''
inputElement.classList.remove('active')
})