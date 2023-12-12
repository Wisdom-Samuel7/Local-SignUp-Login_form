  var mail = document.querySelector('#mail')
  var password = document.querySelector('#pass')
  var submit = document.querySelector('#sbt')

  submit.addEventListener('click', validate)

  function validate(event) {
  event.preventDefault()
  var userlogindata = localStorage.getItem('userdata')
  var loginData = JSON.parse(userlogindata)

  if(loginData.mail == mail.value && loginData.passkey == password.value){

  location.href = 'demo.html'

  }else if(
  loginData.mail != mail && loginData.passkey != password.value
  ){

  alert('No Such User')

  }else{

  alert('Cannot be empty')

  }

  }