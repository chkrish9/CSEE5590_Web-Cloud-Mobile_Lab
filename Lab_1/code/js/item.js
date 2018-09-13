$(document).ready(function () {
    var selectedProduct = localStorage.getItem("selectedProduct");
    var item = getItemDetails(selectedProduct);

    $(".btn-buy").click(function () {
        location.href = "transaction.html";
    });

    loadItem(item[0]);
});

function loadItem(item) {
    localStorage.setItem("selectedItem",JSON.stringify(item));
    $($(".item-img")[0]).attr("src",item.itemImg);
    $($(".item-name")[0]).text(item.itemName);
    $($(".item-price")[0]).text("$"+item.itemPrice);
    $($(".item-description")[0]).html(item.itemDesc);
}

function getItemDetails(item) {
    var products = JSON.parse(localStorage.getItem("products"));
    return products.filter(function (el) {
        return el.itemName === item;
    });
}