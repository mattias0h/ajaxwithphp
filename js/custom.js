$(document).ready(function() {
    $("#sub").click(function() {
        var user_name = $("#name").val();
        $.get("test.php",{name:user_name},function(data){
            $("#result").html(data);
        });
    });
});