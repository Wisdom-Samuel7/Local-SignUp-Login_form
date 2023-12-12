   var mail = document.querySelector('#mail')
   var password = document.querySelector('#pass')
   var submit = document.querySelector('#sbt')
   var checkbox = document.querySelector('#box')

   submit.addEventListener('click',auth)

  async function auth(event) {
   event.preventDefault()

   if(mail.value == "" && password.value == ""){
   alert("Cannot be Empty")

   }
   else{
     alert("User Added")
     const user = {
     mail: mail.value,
     passkey: password.value

     }

     let userfile = await JSON.stringify(user)
     localStorage.setItem('userdata',userfile)

   }

}