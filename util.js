function checkIfEmailInString(text) {
    var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return re.test(text);
}

//checks if emails is valid form
document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
    $(".check-email3").hide();
    $(".check-mail").hide();
  });
//clicking on forgot passwrod and displays a message
  $(".forgot-pass").click(function(){
      $(".label-pass").hide();

    if($(".email").val() !== "" && checkIfEmailInString($(".email").val())){
        $(".check-mail").hide();
      $(".check-mail").css("display", "flex");
      $(".check-mail").html("Θα αποσταλεί email ").css("color", "green");


    }else if($(".email").val() !== "" && !checkIfEmailInString($(".email").val())){
        $(".check-mail").hide();
        $(".check-mail").css("display", "flex");
        $(".check-mail").html("Δεν είναι σωστή μορφή email").css("color", "red");
    }else{
        $(".check-mail").hide();
        $(".check-mail").css("display", "flex");
        $(".check-mail").html("Εισάγετε ένα email").css("color", "red");

    }





  });

  $(".sign-in-btn").click(function(){
    if($(".email").val() == "" && $(".pass").val()== ""){
      $(".check-mail").hide();
      $(".check-mail").css("display", "flex");
      $(".check-mail").html("Συμπλήρωσε τα στοιχεία σου ").css("color", "red");


    }else if($(".email").val() !== "" && !checkIfEmailInString($(".email").val())){
        $(".check-mail").hide();
        $(".check-mail").css("display", "flex");
        $(".check-mail").html("Δεν είναι σωστή μορφή email").css("color", "red");
    }else if($(".pass").val()== ""){
        $(".check-mail").hide();
        $(".check-mail").css("display", "flex");
        $(".check-mail").html("Εισάγετε τον κωδικό σας.").css("color", "red");

    }else if($(".pass").val()!== "" && $(".email").val() == ""){
        $(".check-mail").hide();
        $(".check-mail").css("display", "flex");
        $(".check-mail").html("Εισάγετε το email σας.").css("color", "red");

    }

});

$(".sign-up-btn").click(function(){
    if($(".email2").val() == "" && $(".check-email2").val()== ""){
        $(".check-email3").hide();
        $(".check-email3").css("display", "flex");
        $(".check-email3").html("Εισάγετε email.").css("color", "red");
}else if(checkIfEmailInString($(".email2").val()) && checkIfEmailInString($(".check-email2").val()) && ($(".email2").val() !== $(".check-email2").val())){
    $(".check-email3").hide();
    $(".check-email3").css("display", "flex");
    $(".check-email3").html("Το email που εισάγατε δεν είναι ίδιο").css("color", "red");
}else if(checkIfEmailInString($(".email2").val()) && checkIfEmailInString($(".check-email2").val()) && ($(".email2").val() == $(".check-email2").val())){
    $(".check-email3").hide();
    $(".check-email3").css("display", "flex");
    $(".check-email3").html("Εγγαφήκατε επιτυχώς").css("color", "green");

}else{
    $(".check-email3").hide();
    $(".check-email3").css("display", "flex");
    $(".check-email3").html("Επιβεβαιώστε το email").css("color", "red");

}

});
