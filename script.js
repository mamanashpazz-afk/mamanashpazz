// ==========================================
// طعم خونه - SCRIPT.JS
// نسخه ساده و سازگار با HTML فعلی
// ==========================================


// ==========================================
// DATABASE
// ==========================================

const recipes = {
    ghormeh: {
        name: "قورمه سبزی",
        emoji: "🍛",
        ingredients: [
            "۵۰۰ گرم گوشت خورشتی",
            "سبزی قورمه سبزی",
            "لوبیا قرمز",
            "لیمو عمانی",
            "پیاز",
            "نمک و فلفل"
        ],
        steps: [
            "پیاز را خرد کرده و با روغن تفت دهید.",
            "گوشت را اضافه کرده و کمی سرخ کنید.",
            "سبزی سرخ شده را اضافه کنید.",
            "لوبیا و آب را اضافه کنید.",
            "لیمو عمانی‌ها را به خورشت اضافه کنید.",
            "اجازه دهید حدود دو ساعت آرام بپزد."
        ]
    },

    zereshk: {
        name: "زرشک پلو با مرغ",
        emoji: "🍗",
        ingredients: [
            "مرغ",
            "برنج",
            "زرشک",
            "زعفران",
            "پیاز",
            "نمک و ادویه"
        ],
        steps: [
            "مرغ را با پیاز و ادویه تفت دهید.",
            "کمی آب اضافه کنید تا مرغ بپزد.",
            "برنج را آماده کنید.",
            "زعفران را دم کنید.",
            "زرشک را با کمی کره تفت دهید.",
            "برنج، مرغ و زرشک را سرو کنید."
        ]
    },

    kabab: {
        name: "کباب کوبیده",
        emoji: "🥩",
        ingredients: [
            "گوشت چرخ کرده",
            "پیاز",
            "نمک",
            "فلفل",
            "زعفران"
        ],
        steps: [
            "پیاز را رنده کنید.",
            "آب اضافی پیاز را بگیرید.",
            "گوشت و پیاز را کاملاً مخلوط کنید.",
            "نمک و ادویه را اضافه کنید.",
            "مواد را به سیخ بکشید.",
            "روی حرارت مناسب کباب کنید."
        ]
    },

    pizza: {
        name: "پیتزا خانگی",
        emoji: "🍕",
        ingredients: [
            "خمیر پیتزا",
            "پنیر پیتزا",
            "قارچ",
            "فلفل دلمه‌ای",
            "مرغ یا گوشت",
            "سس گوجه"
        ],
        steps: [
            "خمیر را داخل قالب قرار دهید.",
            "روی آن سس گوجه بریزید.",
            "مواد دلخواه را اضافه کنید.",
            "پنیر پیتزا اضافه کنید.",
            "در فر قرار دهید.",
            "بعد از طلایی شدن پنیر سرو کنید."
        ]
    },

    pasta: {
        name: "پاستا آلفردو",
        emoji: "🍝",
        ingredients: [
            "پاستا",
            "مرغ",
            "قارچ",
            "خامه",
            "پنیر",
            "نمک و فلفل"
        ],
        steps: [
            "پاستا را در آب جوش بپزید.",
            "مرغ را تفت دهید.",
            "قارچ را اضافه کنید.",
            "خامه را اضافه کنید.",
            "پنیر و ادویه اضافه کنید.",
            "پاستا را با سس مخلوط کنید."
        ]
    },

    burger: {
        name: "برگر خانگی",
        emoji: "🍔",
        ingredients: [
            "گوشت چرخ کرده",
            "نان برگر",
            "پنیر",
            "گوجه",
            "کاهو",
            "سس"
        ],
        steps: [
            "گوشت را با ادویه مخلوط کنید.",
            "گوشت را به شکل برگر دربیاورید.",
            "برگر را روی تابه گریل کنید.",
            "پنیر را اضافه کنید.",
            "مواد را داخل نان قرار دهید.",
            "با سس دلخواه سرو کنید."
        ]
    },

    fesenjan: {
        name: "فسنجان",
        emoji: "🥘",
        ingredients: [
            "گردوی آسیاب شده",
            "رب انار",
            "مرغ",
            "پیاز",
            "نمک"
        ],
        steps: [
            "گردو را آسیاب کنید.",
            "گردو را با آب روی حرارت قرار دهید.",
            "مرغ را با پیاز تفت دهید.",
            "رب انار را اضافه کنید.",
            "مرغ را به خورشت اضافه کنید.",
            "اجازه دهید خورشت آرام بپزد."
        ]
    },

    cake: {
        name: "کیک شکلاتی",
        emoji: "🍰",
        ingredients: [
            "آرد",
            "تخم مرغ",
            "شکر",
            "پودر کاکائو",
            "شیر",
            "بکینگ پودر"
        ],
        steps: [
            "تخم مرغ و شکر را مخلوط کنید.",
            "شیر و مواد مایع را اضافه کنید.",
            "آرد و پودر کاکائو را اضافه کنید.",
            "مواد را خوب مخلوط کنید.",
            "مواد را داخل قالب بریزید.",
            "در فر بپزید."
        ]
    }
};


// ==========================================
// ELEMENTS
// ==========================================

const recipeModal = document.getElementById("recipeModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

const favoritesModal = document.getElementById("favoritesModal");
const favoritesButton = document.getElementById("favoritesButton");
const closeFavorites = document.getElementById("closeFavorites");
const favoritesList = document.getElementById("favoritesList");
const favoriteCount = document.getElementById("favoriteCount");

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const noResults = document.getElementById("noResults");

const darkModeButton = document.getElementById("darkModeButton");
const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");

const randomFoodButton = document.getElementById("randomFoodButton");
const randomFoodButtonTwo = document.getElementById("randomFoodButtonTwo");

const newsletterButton = document.getElementById("newsletterButton");

const toast = document.getElementById("toast");

const cards = document.querySelectorAll(".recipe-card");
const filters = document.querySelectorAll(".filter");
const quickSearches = document.querySelectorAll(".quick-search");
const viewButtons = document.querySelectorAll(".view-recipe");
const favoriteButtons = document.querySelectorAll(".favorite");


// ==========================================
// FAVORITES
// ==========================================

let favorites = [];

try {
    favorites = JSON.parse(
        localStorage.getItem("favorites")
    ) || [];
} catch (error) {
    favorites = [];
}


function saveFavorites() {
    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );
}


function updateFavoriteCount() {
    if (favoriteCount) {
        favoriteCount.textContent = favorites.length;
    }
}


function updateFavoriteButtons() {

    favoriteButtons.forEach(function (button) {

        const recipeId = button.dataset.recipe;

        if (favorites.includes(recipeId)) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }

    });

}


// ==========================================
// TOAST
// ==========================================

function showToast(message) {

    if (!toast) {
        return;
    }

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);

}


// ==========================================
// GET RECIPE FROM CARD
// ==========================================

function getCardRecipe(card) {

    const button =
        card.querySelector(".view-recipe");

    if (!button) {
        return null;
    }

    const recipeId =
        button.dataset.recipe;

    const cardName =
        card.dataset.name;

    const foodImage =
        card.querySelector(".food-image");

    const emoji =
        foodImage
            ? foodImage.textContent.trim()
            : "🍽️";


    if (recipes[recipeId]) {

        return {
            id: recipeId,
            name: cardName || recipes[recipeId].name,
            emoji: emoji || recipes[recipeId].emoji,
            ingredients: recipes[recipeId].ingredients,
            steps: recipes[recipeId].steps
        };

    }


    return {
        id: recipeId,
        name: cardName,
        emoji: emoji,

        ingredients: [
            "مواد اولیه مناسب برای " + cardName,
            "مواد تازه",
            "نمک و فلفل",
            "ادویه مناسب",
            "روغن یا کره"
        ],

        steps: [
            "مواد لازم را آماده کنید.",
            "مواد را خرد و آماده کنید.",
            "مواد را با روش مناسب بپزید.",
            "نمک و ادویه اضافه کنید.",
            "اجازه دهید غذا کامل آماده شود.",
            cardName + " را سرو کنید. نوش جان 😋"
        ]
    };

}


// ==========================================
// RENDER RECIPE
// ==========================================

function renderRecipe(recipe) {

    if (!modalContent || !recipe) {
        return;
    }


    let ingredientsHTML = "";

    recipe.ingredients.forEach(function (item) {

        ingredientsHTML +=
            "<li>" +
            item +
            "</li>";

    });


    let stepsHTML = "";

    recipe.steps.forEach(function (step) {

        stepsHTML +=
            "<li>" +
            step +
            "</li>";

    });


    modalContent.innerHTML =

        '<div class="recipe-modal-content">' +

        '<div class="recipe-modal-emoji">' +
        recipe.emoji +
        '</div>' +

        '<h2>' +
        recipe.name +
        '</h2>' +

        '<h3>🛒 مواد لازم</h3>' +

        '<ul>' +
        ingredientsHTML +
        '</ul>' +

        '<h3>👩‍🍳 مراحل پخت</h3>' +

        '<ol>' +
        stepsHTML +
        '</ol>' +

        '</div>';

}


// ==========================================
// OPEN RECIPE
// ==========================================

function openRecipe(recipe) {

    if (!recipeModal) {
        return;
    }

    renderRecipe(recipe);

    recipeModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


// ==========================================
// VIEW RECIPE BUTTONS
// ==========================================

viewButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card =
            button.closest(".recipe-card");


        if (card) {

            const recipe =
                getCardRecipe(card);

            if (recipe) {
                openRecipe(recipe);
            }

            return;
        }


        const recipeId =
            button.dataset.recipe;


        if (recipes[recipeId]) {

            openRecipe({
                id: recipeId,
                name: recipes[recipeId].name,
                emoji: recipes[recipeId].emoji,
                ingredients: recipes[recipeId].ingredients,
                steps: recipes[recipeId].steps
            });

        }

    });

});


// ==========================================
// FAVORITE BUTTONS
// ==========================================

favoriteButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const recipeId =
            button.dataset.recipe;


        if (!recipeId) {
            return;
        }


        if (favorites.includes(recipeId)) {

            favorites =
                favorites.filter(function (id) {

                    return id !== recipeId;

                });


            button.classList.remove("active");

            showToast(
                "از علاقه‌مندی‌ها حذف شد 💔"
            );

        } else {

            favorites.push(recipeId);

            button.classList.add("active");

            showToast(
                "به علاقه‌مندی‌ها اضافه شد ❤️"
            );

        }


        saveFavorites();

        updateFavoriteCount();

    });

});


// ==========================================
// OPEN FAVORITES
// ==========================================

function renderFavorites() {

    if (!favoritesList) {
        return;
    }


    if (favorites.length === 0) {

        favoritesList.innerHTML =
            "<p style='text-align:center; padding:20px;'>" +
            "هنوز غذایی به علاقه‌مندی‌ها اضافه نکردی ❤️" +
            "</p>";

        return;
    }


    let html = "";


    favorites.forEach(function (id) {

        if (!recipes[id]) {
            return;
        }


        html +=

            '<div class="favorite-item">' +

            '<span>' +
            recipes[id].emoji +
            " " +
            recipes[id].name +
            '</span>' +

            '<button class="view-favorite-recipe" data-id="' +
            id +
            '" type="button">' +
            'مشاهده دستور' +
            '</button>' +

            '</div>';

    });


    favoritesList.innerHTML = html;


    const favoriteRecipeButtons =
        document.querySelectorAll(
            ".view-favorite-recipe"
        );


    favoriteRecipeButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const id =
                button.dataset.id;


            if (!recipes[id]) {
                return;
            }


            if (favoritesModal) {
                favoritesModal.classList.remove("show");
            }


            openRecipe({
                id: id,
                name: recipes[id].name,
                emoji: recipes[id].emoji,
                ingredients: recipes[id].ingredients,
                steps: recipes[id].steps
            });

        });

    });

}


if (favoritesButton) {

    favoritesButton.addEventListener(
        "click",
        function () {

            renderFavorites();


            if (favoritesModal) {

                favoritesModal.classList.add("show");

                document.body.style.overflow =
                    "hidden";

            }

        }
    );

}


// ==========================================
// CLOSE MODALS
// ==========================================

if (closeModal) {

    closeModal.addEventListener(
        "click",
        function () {

            recipeModal.classList.remove("show");

            document.body.style.overflow =
                "auto";

        }
    );

}


if (closeFavorites) {

    closeFavorites.addEventListener(
        "click",
        function () {

            favoritesModal.classList.remove(
                "show"
            );

            document.body.style.overflow =
                "auto";

        }
    );

}


// ==========================================
// MODAL OVERLAYS
// ==========================================

if (recipeModal) {

    const overlay =
        recipeModal.querySelector(
            ".modal-overlay"
        );


    if (overlay) {

        overlay.addEventListener(
            "click",
            function () {

                recipeModal.classList.remove(
                    "show"
                );

                document.body.style.overflow =
                    "auto";

            }
        );

    }

}


if (favoritesModal) {

    const overlay =
        favoritesModal.querySelector(
            ".modal-overlay"
        );


    if (overlay) {

        overlay.addEventListener(
            "click",
            function () {

                favoritesModal.classList.remove(
                    "show"
                );

                document.body.style.overflow =
                    "auto";

            }
        );

    }

}


// ==========================================
// FILTERS
// ==========================================

filters.forEach(function (filter) {

    filter.addEventListener(
        "click",
        function () {

            filters.forEach(function (item) {

                item.classList.remove(
                    "active"
                );

            });


            filter.classList.add(
                "active"
            );


            const category =
                filter.dataset.category;


            let visibleCount = 0;


            cards.forEach(function (card) {

                if (
                    category === "all" ||
                    card.dataset.category === category
                ) {

                    card.classList.remove(
                        "hidden"
                    );

                    visibleCount++;

                } else {

                    card.classList.add(
                        "hidden"
                    );

                }

            });


            if (noResults) {

                if (visibleCount === 0) {
                    noResults.style.display =
                        "block";
                } else {
                    noResults.style.display =
                        "none";
                }

            }

        }
    );

});


// ==========================================
// SEARCH
// ==========================================

function searchRecipes() {

    if (!searchInput) {
        return;
    }


    const searchText =
        searchInput.value
            .trim()
            .toLowerCase();


    let visibleCount = 0;


    cards.forEach(function (card) {

        const name =
            (card.dataset.name || "")
                .toLowerCase();


        const category =
            (card.dataset.category || "")
                .toLowerCase();


        if (
            searchText === "" ||
            name.includes(searchText) ||
            category.includes(searchText)
        ) {

            card.classList.remove(
                "hidden"
            );

            visibleCount++;

        } else {

            card.classList.add(
                "hidden"
            );

        }

    });


    if (noResults) {

        if (visibleCount === 0) {
            noResults.style.display =
                "block";
        } else {
            noResults.style.display =
                "none";
        }

    }

}


// ==========================================
// SEARCH BUTTON
// ==========================================

if (searchButton) {

    searchButton.addEventListener(
        "click",
        function () {

            searchRecipes();


            const recipesSection =
                document.getElementById(
                    "recipes"
                );


            if (recipesSection) {

                recipesSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


// ==========================================
// SEARCH INPUT
// ==========================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        searchRecipes
    );


    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                searchRecipes();

            }

        }
    );

}


// ==========================================
// QUICK SEARCH
// ==========================================

quickSearches.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            if (!searchInput) {
                return;
            }


            searchInput.value =
                button.dataset.search || "";


            searchRecipes();


            const recipesSection =
                document.getElementById(
                    "recipes"
                );


            if (recipesSection) {

                recipesSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});


// ==========================================
// RANDOM FOOD
// ==========================================

function showRandomFood() {

    const allCards =
        Array.from(cards);


    if (allCards.length === 0) {
        return;
    }


    const randomIndex =
        Math.floor(
            Math.random() *
            allCards.length
        );


    const randomCard =
        allCards[randomIndex];


    const recipe =
        getCardRecipe(randomCard);


    if (recipe) {

        openRecipe(recipe);

    }

}


if (randomFoodButton) {

    randomFoodButton.addEventListener(
        "click",
        showRandomFood
    );

}


if (randomFoodButtonTwo) {

    randomFoodButtonTwo.addEventListener(
        "click",
        showRandomFood
    );

}


// ==========================================
// DARK MODE
// ==========================================

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark-mode"
    );


    if (darkModeButton) {

        darkModeButton.textContent =
            "☀️";

    }

}


if (darkModeButton) {

    darkModeButton.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );


            if (
                document.body.classList.contains(
                    "dark-mode"
                )
            ) {

                localStorage.setItem(
                    "theme",
                    "dark"
                );

                darkModeButton.textContent =
                    "☀️";

            } else {

                localStorage.setItem(
                    "theme",
                    "light"
                );

                darkModeButton.textContent =
                    "🌙";

            }

        }
    );

}


// ==========================================
// MOBILE MENU
// ==========================================

if (
    mobileMenuButton &&
    mobileMenu
) {

    mobileMenuButton.addEventListener(
        "click",
        function () {

            mobileMenu.classList.toggle(
                "show"
            );

        }
    );


    const mobileLinks =
        mobileMenu.querySelectorAll(
            "a"
        );


    mobileLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                mobileMenu.classList.remove(
                    "show"
                );

            }
        );

    });

}


// ==========================================
// NEWSLETTER
// بدون ایمیل و بدون ثبت نام
// ==========================================

if (newsletterButton) {

    newsletterButton.addEventListener(
        "click",
        function () {

            showToast(
                "❤️ ممنون که همراه طعم خونه هستی!"
            );

        }
    );

}


// ==========================================
// ESC KEY
// ==========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            if (recipeModal) {

                recipeModal.classList.remove(
                    "show"
                );

            }


            if (favoritesModal) {

                favoritesModal.classList.remove(
                    "show"
                );

            }


            document.body.style.overflow =
                "auto";

        }

    }
);


// ==========================================
// INITIALIZE
// ==========================================

updateFavoriteCount();

updateFavoriteButtons();

if (noResults) {

    noResults.style.display =
        "none";

}

console.log(
    "🍳 طعم خونه آماده است!"
);
