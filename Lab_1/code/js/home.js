$(document).ready(function () {

    /*
    * when login button is clicked in the Login & Sign up pop up, it will hide register page and show login page.
    */
    $("#btnLogin").click(function () {
        $("#loginForm").removeClass("hidden");
        $("#registerForm").addClass("hidden");
    });

    /*
    * when register button is clicked in the Login & Sign up pop up, it will hide login page and show register page.
    */
    $("#btnRegister").click(function () {
        $("#loginForm").addClass("hidden");
        $("#registerForm").removeClass("hidden");
    });

    /*
    * when user click on categories like phones, laptops etc., it will set the selected category in local storage
    * and redirect to products.html page.
    */
    $("[data-cat]").click(function () {
        localStorage.setItem("selectedCatName", $(this).data("cat"));
        if (location.href.indexOf("index.html") > 0)
            location.href = "html/products.html";
        else
            location.href = "products.html";
    });

    /*
    * when user click on login button, first we will get the existing users from local storage and if user exist then we will store thr logged in user
    * else it will throw error.
    */
    $("#btnLoginForm").click(function () {
        var users = JSON.parse(localStorage.getItem("users"));
        var username = $($(".username")[0]).val();
        var password = $($(".password")[0]).val();
        var user = users.filter(function (el) {
            return (el.name === username && el.password === password)
        });
        if (user.length > 0) {
            localStorage.setItem("loggedInUser", JSON.stringify(user[0]));
            $($(".error")[0]).parents(".row").addClass("hidden");
            $(".lg-signup").addClass("hidden")
            $(".myaccount").removeClass("hidden");
            $('.loginModal').modal('hide');
            location.reload();
        }
        else {
            $($(".error")[0]).parents(".row").removeClass("hidden");
            $($(".error")[0]).html("Invalid Username/Password");
            $(".lg-signup").removeClass("hidden")
            $(".myaccount").addClass("hidden");
        }
    });

    /*
    * when user click on register button , it will check the validation and then get existing users from local storage,
    * then add the new user and set to local storage.
    */
    $("#btnRegisterForm").click(function () {
        var user = {};
        user["name"] = $($(".rusername")[0]).val();
        user["email"] = $($(".remail")[0]).val();
        user["password"] = $($(".rpassword")[0]).val();
        user["orders"] = [];
        var confirmPass = $($(".rconfirmPassword")[0]).val();
        if (user["name"] === "" || user["email"] === "" || user["password"] === "" || confirmPass === "") {
            $($(".error")[0]).parents(".row").removeClass("hidden");
            $($(".error")[0]).html("Please fill all the details.");
        }
        else if (user["password"] !== confirmPass) {
            $($(".error")[0]).parents(".row").removeClass("hidden");
            $($(".error")[0]).html("Password mismatch");
        }
        else {
            $($(".error")[0]).parents(".row").addClass("hidden");
            var users = JSON.parse(localStorage.getItem("users"));
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            $("#loginForm").removeClass("hidden");
            $("#registerForm").addClass("hidden");
        }
    });

    /*
    * when user click on logout button it will remove the loggedInUser from local storage.
    */
    $(".logout").click(function () {
        localStorage.removeItem("loggedInUser");
        if (location.href.indexOf("index.html") > 0)
            location.href = "index.html";
        else
            location.href = "../index.html";
    });

    /*
    * Loading the Initial data. If condition is for execute this method only once.
    */
    if (localStorage.getItem("users") === null)
        loadInitialData();
    /*
    * Checking the user already logged in or not
    */
    if(localStorage.getItem("loggedInUser") !== null)
        loadloggedInUser();
});

/*
* If user already logged in this will show my account links
*/
function loadloggedInUser () {
    $(".lg-signup").addClass("hidden")
    $(".myaccount").removeClass("hidden");
}

/*
* Loading initial data
*/
function loadInitialData() {
    var products = [
        {
            "ItemCat": "phones",
            "itemImg": "../images/phones/item-1.jpg",
            "itemName": "Samsung Galaxy S8",
            "itemPrice": "489.00",
            "itemDesc": "Infinity Display: a bezel-less, full-frontal, edge-to-edge screen. Default resolution is Full HD+ and can be changed to Quad HD+ (WQHD+) in Settings<br/>"
                + "Camera resolution - Front: 8 MP AF, Rear: 12 MP OIS AF.<br/>"
                + "Memory: Internal Memory 64 GB, RAM 4GB.<br/>"
                + "International model phone, will work with Most.<br/>"
                + "GSM SIM cards in U.S. and world Including AT&T, T-Mobile, MetroPCS,Etc. Does not have US warranty. Will NOT work with CDMA Carriers such as Verizon, Sprint, etc."
        },
        {
            "ItemCat": "phones",
            "itemImg": "../images/phones/item-2.jpg",
            "itemName": "Samsung Galaxy S7",
            "itemPrice": "229.00",
            "itemDesc": "Verified Clean ESN for use on the Verizon network (No SIM card included)<br/>"
                + "Chipset: Qualcomm Snapdragon 820 MSM8996, Processor: Quad-Core (Dual-Core 2.15 GHz Kryo & Dual-Core 1.6 GHz Kryo), GPU: Adreno 530, Battery: 3000Mah.<br/>"
                + "A Certified Refurbished product has been tested and certified to work and look like new, with minimal to no signs of wear, by a manufacturer or specialized third-party seller approved by Amazon. All products are backed by a minimum 90-day warranty.<br/>"
                + "32GB Internal Memory and compatible with a microSD card so you can expand memory up to 200GB.<br/>"
                + "DO NOT include Samsung Retail Box, Headphones, and SIM Eject tool"
        },
        {
            "ItemCat": "phones",
            "itemImg": "../images/phones/item-3.jpg",
            "itemName": "Apple iPhone X",
            "itemPrice": "1,129.77",
            "itemDesc": "Verified Clean ESN for use on the Verizon network (No SIM card included)<br/>"
                + "Chipset: Qualcomm Snapdragon 820 MSM8996, Processor: Quad-Core (Dual-Core 2.15 GHz Kryo & Dual-Core 1.6 GHz Kryo), GPU: Adreno 530, Battery: 3000Mah.<br/>"
                + "A Certified Refurbished product has been tested and certified to work and look like new, with minimal to no signs of wear, by a manufacturer or specialized third-party seller approved by Amazon. All products are backed by a minimum 90-day warranty.<br/>"
                + "32GB Internal Memory and compatible with a microSD card so you can expand memory up to 200GB.<br/>"
                + "DO NOT include Samsung Retail Box, Headphones, and SIM Eject tool"
        },
        {
            "ItemCat": "phones",
            "itemImg": "../images/phones/item-4.jpg",
            "itemName": "Apple iPhone 8",
            "itemPrice": "699.00",
            "itemDesc": "Verified Clean ESN for use on the Verizon network (No SIM card included)<br/>"
                + "Chipset: Qualcomm Snapdragon 820 MSM8996, Processor: Quad-Core (Dual-Core 2.15 GHz Kryo & Dual-Core 1.6 GHz Kryo), GPU: Adreno 530, Battery: 3000Mah.<br/>"
                + "A Certified Refurbished product has been tested and certified to work and look like new, with minimal to no signs of wear, by a manufacturer or specialized third-party seller approved by Amazon. All products are backed by a minimum 90-day warranty.<br/>"
                + "32GB Internal Memory and compatible with a microSD card so you can expand memory up to 200GB.<br/>"
        },
        {
            "ItemCat": "phones",
            "itemImg": "../images/phones/item-5.jpg",
            "itemName": "Xiaomi Mi Mix 2S",
            "itemPrice": "485.00",
            "itemDesc": "Verified Clean ESN for use on the Verizon network (No SIM card included)<br/>"
                + "Chipset: Qualcomm Snapdragon 820 MSM8996, Processor: Quad-Core (Dual-Core 2.15 GHz Kryo & Dual-Core 1.6 GHz Kryo), GPU: Adreno 530, Battery: 3000Mah.<br/>"
                + "A Certified Refurbished product has been tested and certified to work and look like new, with minimal to no signs of wear, by a manufacturer or specialized third-party seller approved by Amazon. All products are backed by a minimum 90-day warranty.<br/>"
                + "32GB Internal Memory and compatible with a microSD card so you can expand memory up to 200GB.<br/>"
        },
        {
            "ItemCat": "laptops",
            "itemImg": "../images/laptops/item-1.jpg",
            "itemName": "ASUS Chromebook",
            "itemPrice": "218.99",
            "itemDesc": "Ready for drops and spills with rugged construction with reinforced rubber guards, easy grip handles, and a spill resistant keyboard.<br/>"
                + "Lightweight 2.65 pound body and rugged construction that can be dropped from 3.9 feet* so you can take it anywhere without disruption.<br/>"
                + "Powered by the Intel Celeron N3060 Processor (2M Cache, up to 2.48 GHz) for fast and snappy performance.<br/>"
                + "32GB Internal Memory and compatible with a microSD card so you can expand memory up to 200GB.<br/>"
        },
        {
            "ItemCat": "laptops",
            "itemImg": "../images/laptops/item-2.jpg",
            "itemName": "Dell Inspiron 15 7000 ",
            "itemPrice": "649.00",
            "itemDesc": "Ready for drops and spills with rugged construction with reinforced rubber guards, easy grip handles, and a spill resistant keyboard.<br/>"
                + "Lightweight 2.65 pound body and rugged construction that can be dropped from 3.9 feet* so you can take it anywhere without disruption.<br/>"
                + "Powered by the Intel Celeron N3060 Processor (2M Cache, up to 2.48 GHz) for fast and snappy performance.<br/>"
                + "32GB Internal Memory and compatible with a microSD card so you can expand memory up to 200GB.<br/>"
        },
        {
            "ItemCat": "laptops",
            "itemImg": "../images/laptops/item-3.jpg",
            "itemName": "Apple MacBook Air",
            "itemPrice": "644.98",
            "itemDesc": "Ready for drops and spills with rugged construction with reinforced rubber guards, easy grip handles, and a spill resistant keyboard.<br/>"
                + "Lightweight 2.65 pound body and rugged construction that can be dropped from 3.9 feet* so you can take it anywhere without disruption.<br/>"
                + "Powered by the Intel Celeron N3060 Processor (2M Cache, up to 2.48 GHz) for fast and snappy performance.<br/>"
                + "32GB Internal Memory and compatible with a microSD card so you can expand memory up to 200GB.<br/>"
        },
        {
            "ItemCat": "laptops",
            "itemImg": "../images/laptops/item-4.jpg",
            "itemName": "ASUS ZenBook 13",
            "itemPrice": "749.00",
            "itemDesc": "Ready for drops and spills with rugged construction with reinforced rubber guards, easy grip handles, and a spill resistant keyboard.<br/>"
                + "Lightweight 2.65 pound body and rugged construction that can be dropped from 3.9 feet* so you can take it anywhere without disruption.<br/>"
                + "Powered by the Intel Celeron N3060 Processor (2M Cache, up to 2.48 GHz) for fast and snappy performance.<br/>"
                + "32GB Internal Memory and compatible with a microSD card so you can expand memory up to 200GB.<br/>"
        },
        {
            "ItemCat": "tablets",
            "itemImg": "../images/tablets/item-1.jpg",
            "itemName": "Fire HD 8 Tablet",
            "itemPrice": "79.99",
            "itemDesc": "Up to 10 hours of battery life, a vibrant 8 HD display, a 1.3 GHz quad-core processor, 1.5 GB of RAM, and Dolby Audio. 2x as durable as the iPad Mini 4..<br/>"
                + "Use Alexa hands-free mode to pause videos, play music, open apps, show sports scores, display the weather, and more—just ask.<br/>"
                + "Enjoy millions of movies, TV shows, songs, Kindle eBooks, apps and games - including Netflix, Facebook, HBO, Spotify and more. Say “Alexa, play The Marvelous Mrs. Maisel”, “Alexa, show me my books”, or “Alexa, launch Candy Crush Saga” to access the entertainment you love..<br/>"
                + "With Show Mode you can transform your tablet to an immersive, full-screen Alexa experience optimized for visibility across the room. Just ask Alexa to show trending news, timers and alarms, movie showtimes, weather, and more..<br/>"
        },
        {
            "ItemCat": "mens_clothing",
            "itemImg": "../images/mens_clothing/item-1.jpg",
            "itemName": "Tommy Hilfiger Mens Dress",
            "itemPrice": "35.41",
            "itemDesc": "100% Cotton.<br/>"
                + "Imported.<br/>"
                + "Button closure.<br/>"
                + "Machine Wash.<br/>"
        },
        {
            "ItemCat": "mens_clothing",
            "itemImg": "../images/mens_clothing/item-2.jpg",
            "itemName": "NIKE Men's Epic Knit Pants",
            "itemPrice": "22.49",
            "itemDesc": "100% Cotton.<br/>"
                + "Imported.<br/>"
                + "Button closure.<br/>"
                + "Machine Wash.<br/>"
        },
        {
            "ItemCat": "mens_clothing",
            "itemImg": "../images/mens_clothing/item-3.jpg",
            "itemName": "PUMA Men's Archive Life T-Shirt",
            "itemPrice": "14.99",
            "itemDesc": "100% Cotton.<br/>"
                + "Imported.<br/>"
                + "Button closure.<br/>"
                + "Machine Wash.<br/>"
        },
        {
            "ItemCat": "mens_clothing",
            "itemImg": "../images/mens_clothing/item-4.jpg",
            "itemName": "Adidas Men's Go",
            "itemPrice": "22.49",
            "itemDesc": "100% Cotton.<br/>"
                + "Imported.<br/>"
                + "Button closure.<br/>"
                + "Machine Wash.<br/>"
        },
        {
            "ItemCat": "mens_clothing",
            "itemImg": "../images/mens_clothing/item-5.jpg",
            "itemName": "Adidas Originals",
            "itemPrice": "26.00",
            "itemDesc": "100% Cotton.<br/>"
                + "Imported.<br/>"
                + "Button closure.<br/>"
                + "Machine Wash.<br/>"
        },
        {
            "ItemCat": "women_clothing",
            "itemImg": "../images/women_clothing/item-1.jpg",
            "itemName": "DEARCASE Women's Casual",
            "itemPrice": "16.65",
            "itemDesc": "Material: 95% Rayon , 5% Spandex.Stretchy,soft and comfy..<br/>"
                + "Pull On closure.<br/>"
                + "Features: casual style,short length,short sleeve,O-neck,super soft..<br/>"
                + "Machine Wash.<br/>"
        },
        {
            "ItemCat": "women_clothing",
            "itemImg": "../images/women_clothing/item-2.jpg",
            "itemName": "GRECERELLE Women's Casual",
            "itemPrice": "9.99",
            "itemDesc": "Material: 95% Rayon , 5% Spandex.Stretchy,soft and comfy..<br/>"
                + "Pull On closure.<br/>"
                + "Features: casual style,short length,short sleeve,O-neck,super soft..<br/>"
                + "Machine Wash.<br/>"
        },
        {
            "ItemCat": "women_clothing",
            "itemImg": "../images/women_clothing/item-3.jpg",
            "itemName": "MOLERANI Women's Casual",
            "itemPrice": "12.98",
            "itemDesc": "Material: 95% Rayon , 5% Spandex.Stretchy,soft and comfy..<br/>"
                + "Pull On closure.<br/>"
                + "Features: casual style,short length,short sleeve,O-neck,super soft..<br/>"
                + "Machine Wash.<br/>"
        },
        {
            "ItemCat": "furniture",
            "itemImg": "../images/furniture/item-1.jpg",
            "itemName": "NFL Bean Bag Chair Denver Broncos",
            "itemPrice": "88.24",
            "itemDesc": "100% Polyester.<br/>"
                + "Imported.<br/>"
                + "Dimensions: 21W x 21D x 21H in.<br/>"
                + "NFL bean bag chair.<br/>"
        }
    ]
    var users = [
        {
            "name": "Guest",
            "email": "",
            "phone": "",
            "password": "guest",
            "orders": []
        }
    ]
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("users", JSON.stringify(users));
}

