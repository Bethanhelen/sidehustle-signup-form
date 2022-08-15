const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e) =>{
  let messages = []
  if (password.value.length <=6){
    messages.push('password do not match')
  }
  if (messages.length > 0){
  e.preventDefault()
  errorElement.innerText = messages.join(', ')
})