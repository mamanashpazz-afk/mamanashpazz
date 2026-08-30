// ===============================
// FOOD DATABASE
// ===============================

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
            "پیاز را خرد و با کمی روغن سرخ کنید.",
            "گوشت را اضافه کنید و تفت دهید.",
            "سبزی سرخ شده را اضافه کنید.",
            "لوبیا و آب را اضافه کنید.",
            "لیمو عمانی‌ها را اضافه کنید.",
            "اجازه دهید خورشت حدود ۲ ساعت آرام بپزد."
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
            "نمک و ادویه اضافه کنید.",
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
            "نمک",
            "کمی شکر در صورت دلخواه"
        ],
        steps: [
            "گردو را آسیاب کنید.",
            "گردو را با آب روی حرارت قرار دهید.",
            "مرغ را جداگانه تفت دهید.",
            "رب انار را اضافه کنید.",
            "مرغ را داخل خورشت قرار دهید.",
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
            "داخل قالب بریزید.",
            "در فر بپزید."
        ]
    }

};


// ===============================
// GET ELEMENTS
// ===============================

const recipeModal =
    document.getElementById("recipeModal");

const modalContent =
    document.getElementById("modalContent");

const closeModal =
    document.getElementById("closeModal");


const favoritesModal =
    document.getElementById("favoritesModal");

const favoritesButton =
    document.getElementById("favoritesButton");

const closeFavorites =
    document.getElementById("closeFavorites");

const favoritesList =
    document.getElementById("favoritesList");

const favoriteCount =
    document.getElementById("favoriteCount");


const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const noResults =
    document.getElementById("noResults");


const darkModeButton =
    document.getElementById("darkModeButton");


const toast =
    document.getElementById("toast");


// ===============================
// FAVORITES
// ===============================

let favorites =
    JSON.parse(
        localStorage.getItem("favorites")
    ) || [];


function saveFavorites() {

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

}


function updateFavoriteCount() {

    favoriteCount.textContent =
        favorites.length;

}


function showToast(message) {

    toast.textContent =
        message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


// ===============================
// VIEW RECIPE
// ===============================

const viewButtons =
    document.querySelectorAll(".view-recipe");


viewButtons.forEach(button => {

    button.addEventListener("click", () => {

        const recipeId =
            button.dataset.recipe;

        const recipe =
            recipes[recipeId];


        if (!recipe) {

            showToast(
                "دستور غذا پیدا نشد 😔"
            );

            return;

        }


        modalContent.innerHTML = `

            <div class="recipe-modal-content">

                <div class="recipe-modal-emoji">

                    ${recipe.emoji}

                </div>


                <h2>

                    ${recipe.name}

                </h2>


                <h3>

                    🛒 مواد لازم

                </h3>


                <ul>

                    ${recipe.ingredients.map(item => `
                        <li>${item}</li>
                    `).join("")}

                </ul>


                <h3>

                    👩‍🍳 مراحل پخت

                </h3>


                <ol>

                    ${recipe.steps.map(step => `
                        <li>${step}</li>
                    `).join("")}

                </ol>


            </div>

        `;


        recipeModal.classList.add("show");

        document.body.style.overflow =
            "hidden";

    });

});


// ===============================
// CLOSE RECIPE MODAL
// ===============================

closeModal.addEventListener("click", () => {

    recipeModal.classList.remove("show");

    document.body.style.overflow =
        "auto";

});


recipeModal.querySelector(".modal-overlay")
    .addEventListener("click", () => {

        recipeModal.classList.remove("show");

        document.body.style.overflow =
            "auto";

    });


// ===============================
// FAVORITE BUTTONS
// ===============================

const favoriteButtons =
    document.querySelectorAll(".favorite");


favoriteButtons.forEach(button => {

    const recipeId =
        button.dataset.recipe;


    if (
        favorites.includes(recipeId)
    ) {

        button.classList.add("active");

    }


    button.addEventListener("click", () => {


        if (
            favorites.includes(recipeId)
        ) {

            favorites =
                favorites.filter(
                    item => item !== recipeId
                );


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


// ===============================
// FAVORITES MODAL
// ===============================

favoritesButton.addEventListener("click", () => {

    if (
        favorites.length === 0
    ) {

        favoritesList.innerHTML = `

            <p style="text-align:center; color: var(--light-text);">

                هنوز غذایی به علاقه‌مندی‌ها اضافه نکردی ❤️

            </p>

        `;

    } else {

        favoritesList.innerHTML =
            favorites.map(id => {

                const recipe =
                    recipes[id];


                return `

                    <div class="favorite-item">

                        <span>

                            ${recipe.emoji}
                            ${recipe.name}

                        </span>


                        <button
                            class="view-favorite-recipe"
                            data-id="${id}"
                        >

                            مشاهده

                        </button>

                    </div>

                `;

            }).join("");

    }


    favoritesModal.classList.add("show");

    document.body.style.overflow =
        "hidden";


    const favoriteRecipeButtons =
        document.querySelectorAll(
            ".view-favorite-recipe"
        );


    favoriteRecipeButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const id =
                    button.dataset.id;

                const recipe =
                    recipes[id];


                favoritesModal.classList.remove(
                    "show"
                );


                modalContent.innerHTML = `

                    <div class="recipe-modal-content">

                        <div class="recipe-modal-emoji">

                            ${recipe.emoji}

                        </div>


                        <h2>

                            ${recipe.name}

                        </h2>


                        <h3>

                            🛒 مواد لازم

                        </h3>


                        <ul>

                            ${recipe.ingredients.map(
                                item => `
                                    <li>${item}</li>
                                `
                            ).join("")}

                        </ul>


                        <h3>

                            👩‍🍳 مراحل پخت

                        </h3>


                        <ol>

                            ${recipe.steps.map(
                                step => `
                                    <li>${step}</li>
                                `
                            ).join("")}

                        </ol>


                    </div>

                `;


                recipeModal.classList.add(
                    "show"
                );

            }
        );

    });

});


// ===============================
// CLOSE FAVORITES
// ===============================

closeFavorites.addEventListener("click", () => {

    favoritesModal.classList.remove(
        "show"
    );

    document.body.style.overflow =
        "auto";

});


favoritesModal
    .querySelector(".modal-overlay")
    .addEventListener("click", () => {

        favoritesModal.classList.remove(
            "show"
        );

        document.body.style.overflow =
            "auto";

    });


// ===============================
// FILTERS
// ===============================

const filters =
    document.querySelectorAll(".filter");

const cards =
    document.querySelectorAll(".recipe-card");


filters.forEach(filter => {

    filter.addEventListener("click", () => {


        filters.forEach(item => {

            item.classList.remove("active");

        });


        filter.classList.add("active");


        const category =
            filter.dataset.category;


        let visibleCount = 0;


        cards.forEach(card => {


            if (
                category === "all" ||
                card.dataset.category === category
            ) {

                card.classList.remove("hidden");

                visibleCount++;

            } else {

                card.classList.add("hidden");

            }

        });


        noResults.style.display =
            visibleCount === 0
                ? "block"
                : "none";


        document.getElementById("recipes")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


// ===============================
// SEARCH
// ===============================

function searchRecipes() {

    const searchText =
        searchInput.value
            .trim()
            .toLowerCase();


    let visibleCount = 0;


    cards.forEach(card => {

        const name =
            card.dataset.name
                .toLowerCase();

        const category =
            card.dataset.category
                .toLowerCase();


        if (
            name.includes(searchText) ||
            category.includes(searchText)
        ) {

            card.classList.remove("hidden");

            visibleCount++;

        } else {

            card.classList.add("hidden");

        }

    });


    noResults.style.display =
        visibleCount === 0
            ? "block"
            : "none";

}


searchButton.addEventListener(
    "click",
    searchRecipes
);


searchInput.addEventListener(
    "input",
    searchRecipes
);


searchInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            searchRecipes();

        }

    }
);


// ===============================
// QUICK SEARCH
// ===============================

const quickSearches =
    document.querySelectorAll(
        ".quick-search"
    );


quickSearches.forEach(button => {

    button.addEventListener("click", () => {

        searchInput.value =
            button.dataset.search;

        searchRecipes();


        document
            .getElementById("recipes")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


// ===============================
// RANDOM FOOD
// ===============================

function showRandomFood() {

    const recipeKeys =
        Object.keys(recipes);


    const randomId =
        recipeKeys[
            Math.floor(
                Math.random() *
                recipeKeys.length
            )
        ];


    const recipe =
        recipes[randomId];


    modalContent.innerHTML = `

        <div class="recipe-modal-content">

            <div class="recipe-modal-emoji">

                🎲

            </div>


            <h2>

                پیشنهاد امروز ما

            </h2>


            <div class="recipe-modal-emoji">

                ${recipe.emoji}

            </div>


            <h2>

                ${recipe.name}

            </h2>


            <p style="text-align:center; color: var(--light-text);">

                امروز این غذا را امتحان کن! 😋

            </p>


            <h3>

                🛒 مواد لازم

            </h3>


            <ul>

                ${recipe.ingredients.map(item => `
                    <li>${item}</li>
                `).join("")}

            </ul>


        </div>

    `;


    recipeModal.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


document
    .getElementById("randomFoodButton")
    .addEventListener(
        "click",
        showRandomFood
    );


document
    .getElementById("randomFoodButtonTwo")
    .addEventListener(
        "click",
        showRandomFood
    );


// ===============================
// DARK MODE
// ===============================

const savedTheme =
    localStorage.getItem("theme");


if (
    savedTheme === "dark"
) {

    document.body.classList.add(
        "dark-mode"
    );

    darkModeButton.textContent =
        "☀️";

}


darkModeButton.addEventListener(
    "click",
    () => {

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


// ===============================
// MOBILE MENU
// ===============================

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );


const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


mobileMenuButton.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle(
            "show"
        );

    }
);


const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            mobileMenu.classList.remove(
                "show"
            );

        }
    );

});


// ===============================
// ESC KEY
// ===============================

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            recipeModal.classList.remove(
                "show"
            );

            favoritesModal.classList.remove(
                "show"
            );

            document.body.style.overflow =
                "auto";

        }

    }
);


// ===============================
// INITIALIZE
// ===============================

updateFavoriteCount();


console.log(
    "🍳 سایت طعم خونه با موفقیت اجرا شد!"
);