$(document).ready(function () {
    var slider = $(".price-slider");
    var output = $(".slider-value");
    output.html(slider.val());
    /*
    * On slider move we are updating the value.
    */
    slider.on("input", function () {
        output.html(this.value);
    });

    /*
    * on selecting the product we are storing in local storage and navigating to item.html page.
    */
    $(document).on('click', '[data-product]', function() {
        localStorage.setItem("selectedProduct", $(this).data("product"));
        if (location.href.indexOf("index.html") > 0)
            location.href = "html/item.html";
        else
            location.href = "item.html";
    });

    /*
    * Getting selected category from local storage.
    */
    var selectedCatName = localStorage.getItem("selectedCatName");
    var products = {};

    /*
    * Getting product details by calling getProductsByCatName method.
    */
    products["items"] = getProductsByCatName(selectedCatName);

    /*
    * Based on the selected category name we filling some additional details to the products details.
    */
    switch (selectedCatName) {
        case "phones":
            products["catName"] = "Phones";
            products["minPrice"] = "100";
            products["maxPrice"] = "1000";
            break;
        case "laptops":
            products["catName"] = "Laptops";
            products["minPrice"] = "100";
            products["maxPrice"] = "1000";
            break;
        case "tablets":
            products["catName"] = "Tablets";
            products["minPrice"] = "100";
            products["maxPrice"] = "500";
            break;
        case "mens_clothing":
            products["catName"] = "Men's clothing";
            products["minPrice"] = "100";
            products["maxPrice"] = "1000";
            break;
        case "women_clothing":
            products["catName"] = "women's clothing";
            products["minPrice"] = "100";
            products["maxPrice"] = "1000";
            break;
        case "furniture":
            products["catName"] = "Furniture";
            products["minPrice"] = "100";
            products["maxPrice"] = "1000";
            break;

    }

    /*
    * loading the products based on selected category.
    */
    loadProducts(products);
});

/*
* Building the products.
*/
function loadProducts(products) {
    $(".product-cat").html(products.catName);
    $(".price-slider").attr("min", products.minPrice);
    $(".price-slider").attr("max", products.maxPrice);
    for (var i = 0; i < products.items.length; i++) {
        var item = '<div class="col-sm-3 margin-top-10px">'
            +'<div class="thumbnail" data-product = "'+products.items[i].itemName+'">'
            +'<img src="'+ products.items[i].itemImg+'">'
            +'<div class="caption text-center">'
            +'<p class="text-ellipsis"><strong>'+products.items[i].itemName+'</strong></p>'
            +'<p>$ '+products.items[i].itemPrice+'</p>'
            +'</div>'
            +'</div>'
            +'</div>';
        $(".product-list").append(item);
    }
    $(".product-list").append('<div class="col-sm-12 text-center margin-10px"><label>No More Products</label></div>');
}

/*
* Getting the products based on product category name.
*/
function getProductsByCatName(itemCat) {
    var products = JSON.parse(localStorage.getItem("products"));
    return products.filter(function (el) {
        return el.ItemCat === itemCat;
    });
}