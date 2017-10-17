$(function() {
	$("#tabs").tabs(); 

	function validateEmail(email) {
      var expr = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return expr.test(email);
    }


    $("#submit").click(function () {
        if (!validateEmail($("#email").val())) {
            alert("Introduzca un email valido");
            return false;
        }
    });
}); 