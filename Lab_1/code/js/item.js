$(document).ready(function () {

    /*
    * Getting selectedProduct from local storage.
    */
    var selectedProduct = localStorage.getItem("selectedProduct");

    /*
    * Getting details of the selected product.
    */
    var item = getItemDetails(selectedProduct);

    /*
    * On click on Buy button we can  navigate to transaction page.
    */
    $(".btn-buy").click(function () {
        location.href = "transaction.html";
    });

    /*
    * Load the item details.
    */
    loadItem(item[0]);
});

/*
* Building the item details.
*/
function loadItem(item) {
    localStorage.setItem("selectedItem",JSON.stringify(item));
    $($(".item-img")[0]).attr("src",item.itemImg);
    $($(".item-name")[0]).text(item.itemName);
    $($(".item-price")[0]).text("$"+item.itemPrice);
    $($(".item-description")[0]).html(item.itemDesc);
}

/*
* Getting the item details from products.
*/
function getItemDetails(item) {
    var products = JSON.parse(localStorage.getItem("products"));
    return products.filter(function (el) {
        return el.itemName === item;
    });
}