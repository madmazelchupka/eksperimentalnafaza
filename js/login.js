
//LOGIN

document.getElementById("submit-btn-login").addEventListener("click", function loginValidation() {
  var email = document.getElementById("floatingEmail").value;
  var password = document.getElementById("floatingPassword").value;

  if(email == "user@gmail.com" && password == "user123"){
    window.open("user-page.html");
    document.getElementById("floatingEmail").value = "";
    document.getElementById("floatingPassword").value = "";
    return false;
  } else {
    //loginAttempts--;
    alert("Pogrešno ste uneli email ili šifru. Pokušajte ponovo.");
    document.getElementById("floatingEmail").value = "";
    document.getElementById("floatingPassword").value = "";
    return false;
    }
  });
