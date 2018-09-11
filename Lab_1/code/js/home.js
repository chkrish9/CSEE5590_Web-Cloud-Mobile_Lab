$(document).ready(function(){
    $("#btnLogin").click(function () {
        $("#loginForm").removeClass("hidden");
        $("#registerForm").addClass("hidden")
    });
    $("#btnRegister").click(function () {
        $("#loginForm").addClass("hidden");
        $("#registerForm").removeClass("hidden")
    });
});