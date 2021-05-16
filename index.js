const menu = [
    {
        id: 1,
        title: "Mantı",
        category: "Turkey",
        price: 14.99,
        img:
          "https://cdn.yemek.com/mnresize/940/940/uploads/2020/08/manti-tarifi-guncelleme-son.jpg",
        desc: `Spiced meat (lamb or ground beef), Yogurt, Garlic.`,
      },
      {
        id: 2,
        title: "Croque Madame",
        category: "France",
        price: 7.99,
        img:
          "https://img.cuisineaz.com/660x660/2013-12-20/i106546-croque-madame.jpeg",
        desc: `Bread, Whipped Eggs, Butter, Boiled Ham, Cheese (typically Emmental), Pepper, Salt.`,
      },
      {
        id: 3,
        title: "Khao Phat Kung",
        category: "Thailand",
        price: 8.99,
        img:
          "http://www.thailandforfarang.com/assets/khao-phad-kung.jpg",
        desc: `Fried Rice, Shrimp, Onion, Carrot, Broccoli Leaves.`,
      },
      {
        id: 4,
        title: "Lasagne",
        category: "Italy",
        price: 9.99,
        img:
          "https://hips.hearstapps.com/vidthumb/images/180820-bookazine-delish-01280-1536610916.jpg?crop=1.00xw:0.752xh;0,0.250xh&resize=640:*",
        desc: `Durum Wheat, Ground Meat, Cheese.`,
      },
      {
        id: 5,
        title: "Tempura",
        category: "Japan",
        price: 7.99,
        img:
          "https://cdn.yemek.com/mnresize/940/940/uploads/2018/06/tempura-tarifi.jpg",
        desc: `Bread, Seafood, Vegetables, Mushrooms.`,
      },
      {
        id: 6,
        title: "Pad Thai",
        category: "Thailand",
        price: 12.99,
        img:
          "https://www.lemonblossoms.com/wp-content/uploads/2020/01/Pad-Thai-S1.jpg",
        desc: `Rice Noodles, Eggs, Tofu, Tamarind Juice, Palm Sugar, Fish Sauce, Fresh Shrimp, Dried Shrimp, Bean Sprouts, Garlic, Red Chili Pepper, Lime, Peanuts.`,
      },
      {
        id: 7,
        title: "Onigiri",
        category: "Japan",
        price: 5.99,
        img:
          "https://allwaysdelicious.com/wp-content/uploads/2012/12/onigiri-hero-1-720x540.jpg",
        desc: `Dried Seaweed, Sushi Rice, Japanese Plum, Shrimp, Chicken, Salmon.`,
      },
      {
        id: 8,
        title: "Croissant",
        category: "France",
        price: 3.99,
        img:
          "https://i.lezzet.com.tr/images-xxlarge-recipe/kruvasan-cad97ccc-9a81-4d67-a90a-7b9561865adc.jpg",
        desc: `Yeast-Leavened Dough, Butter.`,
      },
      {
        id: 9,
        title: "Karnıyarık",
        category: "Turkey",
        price: 11.99,
        img:
          "https://i4.hurimg.com/i/hurriyet/75/750x422/5c00fa25c03c0e2544c7486d.jpg",
        desc: `Eggplant, Onions, Garlic, Black Pepper, Tomatoes, Parsley, Ground Meat.`,
      },
      {
        id: 10,
        title: "Fettuccine",
        category: "Italy",
        price: 5.99,
        img:
          "https://i4.hurimg.com/i/hurriyet/75/750x422/5cc9affe0f254407e8627626.jpg",
        desc: `Flour, Eggs.`,
      },
];

var selectedCategory = "All";

function getMenu(menuList) {
    var menuRowElement = document.querySelector(".menu .row");

    menuList.forEach((item) => {
        var col6Element = document.createElement("div");
        col6Element.classList.add("col-md-6");
        col6Element.classList.add("mb-4");
        
        var htmlText = '<div class="card bg-dark text-white border-0" data-category="' + item.category + '">\
                            <img src="' + item.img + '" class="card-img food-img" alt="' + item.title + '" width="100%" height="270">\
                            <div class="card-img-overlay">\
                            <h3 class="card-title fst-italic food-name-category">' + item.title + ' - <b>' + item.category + '</b></h3>\
                            <p class="card-text food-desc mt-3">' + item.desc + '</p>\
                            <p class="card-text food-price fs-5">' + item.price + ' €</p>\
                            </div>\
                        </div>';
        col6Element.innerHTML = htmlText;
        menuRowElement.appendChild(col6Element);
    });
}

function getCategories() {
    var categories = ["All"];

    menu.forEach((item) => {
        if (!categories.includes(item.category)) categories.push(item.category);
    });

    return categories;
}

function getCategoryButtons() {
    var categories = getCategories();

    var categoryRowElement = document.querySelector(".categories .row");

    var col12Element = document.createElement("div");
    col12Element.classList.add("col-md-12");

    var htmlText = categories.map((item) => {
        return '<button type="button" class="btn btn-outline-dark" data-category="' + item + '">' + item + '</button>';
    }).join("");

    col12Element.innerHTML = htmlText;
    categoryRowElement.appendChild(col12Element);

    document.querySelector(".categories .row .btn[data-category='All']").classList.add("active");

    document.querySelectorAll(".categories .row .btn").forEach((element) => {
        element.addEventListener("click", (event) => {
            var selected = event.currentTarget.dataset.category;

            document.querySelector(".categories .row .btn.active").classList.remove("active");
            event.currentTarget.classList.add("active");

            menuFilter(selected);
        });
    });
}

function menuFilter(category) {
    document.querySelectorAll(".menu .card[data-category]").forEach((item) => {
        item.parentElement.classList.remove("d-none");
    });
    
    if (category != "All") {
        document.querySelectorAll(".menu .card[data-category]:not([data-category='" + category + "'])").forEach((item) => {
            item.parentElement.classList.add("d-none");
        });
    }
}

getMenu(menu);
getCategoryButtons();