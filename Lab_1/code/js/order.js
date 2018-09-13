$(document).ready(function () {
    /*
    * Getting the loggedInUser from local storage.
    */
    var user = JSON.parse(localStorage.getItem("loggedInUser"));

    /*
    * Loading the orders.
    */
    loadOrders(user);
});

/*
* Building the orders.
*/
function loadOrders(user) {
    if(user.orders.length > 0) {
        $(".order-list").html("");
        for (var i = 0; i < user.orders.length; i++) {
            var item = '<div class="panel panel-default">'
                + '<div class="panel-heading">'
                + '<h3 class="panel-title">Order Id : ' + user.orders[i].orderid + '</h3>'
                + '</div>'
                + '<div class="panel-body">'
                + '<label>Item Name : ' + user.orders[i].itemName + '</label><br/>'
                + '<label>Item Cost : $ ' + user.orders[i].itemPrice + '</label><br/>'
                + '<label>Date of Purchase : ' + user.orders[i].purchaseDate + '</label>'
                + '</div>'
                + '</div>';
            $(".order-list").append(item);
        }
    }
    else
    {
        $(".order-list").html("<div class='text-center'><h1>You didn't order any thing...:)</h1></div>");
    }
}