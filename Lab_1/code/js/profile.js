$(document).ready(function () {
    /*
    * Getting loggedIn User and users list from local storage
    */
    var loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    var users = JSON.parse(localStorage.getItem("users"));

    /*
    * Filtering the user to get the complete user data.
    */
    var user = users.filter(function (el) {
        return (el.name === loggedUser.name && el.password === loggedUser.password)
    });

    /*
    * Loading the user by passing the filtered user.
    */
    loadUser(user[0]);
});

/*
* Building the user.
*/
function loadUser(user) {
    $($(".pusername")[0]).html(user.name);
    $($(".pemail")[0]).val(user.email);
    $($(".pphone")[0]).val(user.phone);
    $($(".ppassword")[0]).val(user.password);
}