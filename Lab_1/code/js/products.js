$(document).ready(function () {
    var slider = $(".price-slider");
    var output = $(".slider-value");
    output.html(slider.val());

    slider.on("input", function () {
        output.html(this.value);
    });

    $(document).on('click', '[data-product]', function() {
        localStorage.setItem("selectedProduct", $(this).data("product"));
        if (location.href.indexOf("index.html") > 0)
            location.href = "html/item.html";
        else
            location.href = "item.html";
    });


    var selectedCatName = localStorage.getItem("selectedCatName");
    var products = {};
    products["items"] = getProductsByCatName(selectedCatName);

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
    loadProducts(products);
});

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
            +'<p>'+products.items[i].itemPrice+'</p>'
            +'</div>'
            +'</div>'
            +'</div>';
        $(".product-list").append(item);
    }
    $(".product-list").append('<div class="col-sm-12 text-center margin-10px"><label>No More Products</label></div>');
}
function getProductsByCatName(itemCat) {
    var products = JSON.parse(localStorage.getItem("products"));
    return products.filter(function (el) {
        return el.ItemCat === itemCat;
    });
}