$(document).ready(function() {
    $("#sub").click(function() {
        var user_name = $("#name").val();
        var user_email = $("#email").val();
        var user_pass = $("#pass").val();

        /* $.post("test.php",{name:user_name,email:user_email,pass:user_pass},function(data){
         $("#result").html(data);
         }); */
        $.ajax({
            url: 'test.php',
            data: {name:user_name,email:user_email,pass:user_pass},
            type: 'POST',
            success: function(data) {
                $("#result").html(data);
            }
        });
    });
});