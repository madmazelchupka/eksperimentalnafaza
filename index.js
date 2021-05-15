
//LOGIN
//var loginAttempts = 3;

document.getElementById("submit-btn-login").addEventListener("click", function loginValidation() {
  var email = document.getElementById("floatingEmail").value;
  var password = document.getElementById("floatingPassword").value;

  if(email == "mali@gmail.com" && password == "mali123"){
    window.open("user-page.html");
    document.getElementById("floatingEmail").value = "";
    document.getElementById("floatingPassword").value = "";
    return false;
  } else {
    //loginAttempts--;
    alert("Pogrešno ste uneli email ili šifru. Pokušajte ponovo.");
    document.getElementById("floatingEmail").value = "";
    document.getElementById("floatingPassword").value = "";

    // if(loginAttempts == 0){
    //   function sendEmailToUser(){
    //     Email.send({
    //       Host: "smtp.gmail.com",
    //       Username: "Your mail adress",
    //       Password: "Your passsword",
    //       To: "dragan@gmail.com",
    //       From: "pronadjimicu@gmail.com",
    //       Subject: "Da li ste Vi pokušali da se ulogujete?!",
    //       Body: "Poštovani, Da li ste Vi pokušali da se ulogujete na Vaš nalog na sajtu Pronađi Miću? Ukoliko niste, prijavite na ovaj mejl pronadjimicu@gmail.com";
        // });
        //   .then(
        //     message => alert("mail sent successfully");
        //   });
    //   }
    return false;
    }
  });
