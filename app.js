

let singup =()=>{
    let email = document.getElementById("email")
    let password = document.getElementById("password")
   
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
   .then((result) =>{
      alert(result)
   })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        alert(errorMessage)
        
      });
}


let login =() =>{
    let email = document.getElementById("login-email")
    let password = document.getElementById("login-password")

    firebase.auth().signInWithEmailAndPassword(email .value, password.value)
   .then((result)=>{
       alert("Sussicfully")
       console.log(result)
   })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      
      });
      
}
