$(document).ready(function () {
    var loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    var users = JSON.parse(localStorage.getItem("users"));
    var user = users.filter(function (el) {
        return (el.name === loggedUser.name && el.password === loggedUser.password)
    });
    loadUser(user[0]);
});

function loadUser(user) {
    $($(".pusername")[0]).html(user.name);
    $($(".pemail")[0]).val(user.email);
    $($(".pphone")[0]).val(user.phone);
    $($(".ppassword")[0]).val(user.password);
}