$(document).ready(function () {
    var selectedItem = JSON.parse(localStorage.getItem("selectedItem"));
    $(".btn-pay").click(function () {
        var user = JSON.parse(localStorage.getItem("loggedInUser"));

        selectedItem["orderid"] = Math.floor(Math.random()*90000) + 10000;
        var todayDate = new Date();
        selectedItem["purchaseDate"] = todayDate.getMonth() +" - "+todayDate.getDate() +" - "+todayDate.getFullYear();

        user.orders.push(selectedItem);
        localStorage.setItem("loggedInUser",JSON.stringify(user));

        var users = JSON.parse(localStorage.getItem("users"));
        var fuser = users.filter(function (el) {
            return (el.name === user.name && el.password === user.password)
        });
        fuser[0].orders.push(selectedItem);
        localStorage.setItem("users",JSON.stringify(users));

        location.href = "order.html";
    });
    FillOrderDetails(selectedItem);
});

function FillOrderDetails(item) {
    $($(".item-name")[0]).text(item.itemName);
    $($(".item-price")[0]).text("$"+item.itemPrice);
    var deliveryDate = new Date(new Date().getTime() + 2*24*60*60*1000);
    $($(".item-purchaseDate")[0]).html("Delivered by : "+deliveryDate.getMonth() +" - "+ deliveryDate.getDate() +" - "+ deliveryDate.getFullYear());
}