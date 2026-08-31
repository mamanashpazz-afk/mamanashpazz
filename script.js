// ==========================================
// 🍳 طعم خونه - SCRIPT.JS
// نسخه کامل و هماهنگ با index.html
// ==========================================


// ==========================================
// DATABASE - دستور غذاها
// ==========================================

const recipes = {

    ghormeh: {
        name: "قورمه سبزی",
        emoji: "🍛",
        ingredients: [
            "۵۰۰ گرم گوشت خورشتی",
            "۵۰۰ گرم سبزی قورمه سرخ‌شده",
            "۱ پیمانه لوبیا قرمز",
            "۲ عدد لیمو عمانی",
            "۱ عدد پیاز بزرگ",
            "روغن",
            "نمک، فلفل و زردچوبه"
        ],
        steps: [
            "لوبیا قرمز را از چند ساعت قبل خیس کنید. پیاز را نگینی خرد کرده و با ۳ تا ۴ قاشق غذاخوری روغن روی حرارت متوسط حدود ۵ تا ۷ دقیقه تفت دهید تا طلایی شود.",
            "زردچوبه و کمی فلفل اضافه کنید. گوشت خورشتی را داخل قابلمه بریزید و روی حرارت متوسط حدود ۸ تا ۱۰ دقیقه تفت دهید تا رنگ گوشت تغییر کند.",
            "سبزی قورمه سرخ‌شده و لوبیای خیس‌خورده را اضافه کنید و حدود ۲ دقیقه با گوشت مخلوط کنید.",
            "حدود ۴ تا ۵ پیمانه آب جوش اضافه کنید. حرارت را زیاد کنید تا خورشت به جوش بیاید، سپس حرارت را کم کنید.",
            "لیمو عمانی‌ها را سوراخ کرده و بعد از حدود ۱ ساعت به خورشت اضافه کنید. در قابلمه را نیمه‌باز بگذارید.",
            "خورشت را حدود ۲ تا ۳ ساعت روی حرارت کم بپزید تا گوشت و لوبیا کاملاً نرم شوند. نمک را در نیم ساعت آخر اضافه کنید. وقتی خورشت جا افتاد سرو کنید."
        ]
    },


    zereshk: {
        name: "زرشک پلو با مرغ",
        emoji: "🍗",
        ingredients: [
            "۴ تکه مرغ",
            "۳ پیمانه برنج",
            "۱ پیمانه زرشک",
            "زعفران دم‌کرده",
            "۲ عدد پیاز",
            "رب گوجه‌فرنگی",
            "کره",
            "نمک، فلفل و زردچوبه"
        ],
        steps: [
            "پیاز را خلالی خرد کنید و با کمی روغن روی حرارت متوسط حدود ۵ دقیقه تفت دهید تا نرم و طلایی شود.",
            "زردچوبه و فلفل را اضافه کنید. تکه‌های مرغ را داخل قابلمه قرار دهید و هر طرف آن‌ها را حدود ۴ تا ۵ دقیقه سرخ کنید.",
            "یک قاشق رب گوجه‌فرنگی را اضافه کرده و حدود ۲ دقیقه تفت دهید تا رنگ خامی رب گرفته شود. سپس حدود ۲ پیمانه آب جوش اضافه کنید.",
            "درب قابلمه را بگذارید و مرغ را حدود ۴۵ تا ۶۰ دقیقه روی حرارت کم بپزید تا کاملاً نرم شود. در ۱۵ دقیقه آخر مقداری زعفران دم‌کرده اضافه کنید.",
            "برنج را بشویید و در آب جوش و نمک حدود ۷ تا ۱۰ دقیقه بجوشانید تا اطراف دانه نرم و مغز آن کمی سفت باشد. سپس آبکش کنید و حدود ۴۰ تا ۵۰ دقیقه روی حرارت کم دم بگذارید.",
            "زرشک را با کمی کره و مقدار کمی شکر روی حرارت کم فقط ۱ تا ۲ دقیقه تفت دهید. برنج زعفرانی، زرشک و مرغ را کنار هم سرو کنید."
        ]
    },


    kabab: {
        name: "کباب کوبیده",
        emoji: "🥩",
        ingredients: [
            "۱ کیلوگرم گوشت چرخ‌کرده",
            "۲ عدد پیاز متوسط",
            "نمک",
            "فلفل سیاه",
            "زعفران دم‌کرده"
        ],
        steps: [
            "پیازها را ریز رنده کنید و آب اضافی آن‌ها را کاملاً بگیرید. باقی ماندن آب زیاد باعث جدا شدن گوشت از سیخ می‌شود.",
            "گوشت چرخ‌کرده، پیاز، نمک و فلفل را با دست حدود ۸ تا ۱۰ دقیقه خوب ورز دهید تا مواد کاملاً یکدست و چسبنده شوند.",
            "مواد را حداقل ۳۰ دقیقه در یخچال استراحت دهید تا منسجم‌تر شوند.",
            "گوشت را به اندازه مناسب بردارید و روی سیخ پهن کنید. با انگشت شیارهای منظم ایجاد کنید.",
            "منقل باید کاملاً داغ باشد و زغال‌ها شعله مستقیم نداشته باشند. در ابتدای پخت سیخ‌ها را سریع بچرخانید تا گوشت خودش را بگیرد.",
            "کباب را حدود ۸ تا ۱۲ دقیقه روی حرارت متوسط زغال بپزید و مرتب بچرخانید تا دو طرف آن کاملاً پخته و طلایی شود."
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
            "سس گوجه یا سس پیتزا",
            "آویشن"
        ],
        steps: [
            "فر را از قبل روی دمای ۲۰۰ درجه سانتی‌گراد روشن کنید تا کاملاً گرم شود. اگر فر شما قوی است، ۱۹۰ درجه هم مناسب است.",
            "خمیر پیتزا را داخل قالب قرار دهید و با چنگال چند سوراخ کوچک روی آن ایجاد کنید تا هنگام پخت بیش از حد پف نکند.",
            "یک لایه نازک سس پیتزا روی خمیر پخش کنید و مقداری پنیر پیتزا روی سس بریزید.",
            "مواد دلخواه مانند مرغ پخته، قارچ و فلفل دلمه‌ای را روی پیتزا قرار دهید. مواد را بیش از حد زیاد نریزید.",
            "بقیه پنیر پیتزا و کمی آویشن روی مواد بریزید.",
            "پیتزا را حدود ۱۵ تا ۲۵ دقیقه در فر با دمای ۲۰۰ درجه بپزید تا پنیر کاملاً ذوب و لبه‌های خمیر طلایی شوند."
        ]
    },


    pasta: {
        name: "پاستا آلفردو",
        emoji: "🍝",
        ingredients: [
            "۳۰۰ گرم پاستا",
            "۲۵۰ گرم سینه مرغ",
            "۲۰۰ گرم قارچ",
            "۲۰۰ میلی‌لیتر خامه",
            "پنیر پارمزان یا پنیر مناسب",
            "کره",
            "نمک و فلفل"
        ],
        steps: [
            "یک قابلمه آب را روی حرارت زیاد قرار دهید. پس از جوش آمدن، نمک اضافه کنید و پاستا را طبق زمان نوشته‌شده روی بسته، معمولاً ۸ تا ۱۲ دقیقه بپزید.",
            "مرغ را به قطعات کوچک برش دهید و با کمی روغن یا کره روی حرارت متوسط رو به زیاد حدود ۷ تا ۱۰ دقیقه تفت دهید تا کاملاً بپزد.",
            "قارچ را اضافه کنید و روی حرارت نسبتاً زیاد حدود ۴ تا ۵ دقیقه تفت دهید تا آب نیندازد.",
            "حرارت را کم کنید. خامه و مقداری کره را اضافه کرده و مواد را آرام مخلوط کنید. اجازه ندهید سس با حرارت زیاد بجوشد.",
            "پنیر، نمک و فلفل را اضافه کنید و حدود ۳ تا ۵ دقیقه روی حرارت کم هم بزنید تا سس یکدست شود.",
            "پاستای آبکش‌شده را به سس اضافه کنید و حدود ۲ دقیقه مخلوط کنید تا همه پاستا به سس آغشته شود. بلافاصله سرو کنید."
        ]
    },


    burger: {
        name: "برگر خانگی",
        emoji: "🍔",
        ingredients: [
            "۵۰۰ گرم گوشت چرخ‌کرده",
            "نان برگر",
            "پنیر ورقه‌ای",
            "گوجه‌فرنگی",
            "کاهو",
            "پیاز",
            "نمک و فلفل",
            "سس دلخواه"
        ],
        steps: [
            "گوشت چرخ‌کرده را با نمک و فلفل مخلوط کنید. مواد را بیش از حد ورز ندهید تا برگر سفت نشود.",
            "گوشت را به شکل برگر با ضخامت حدود ۱ تا ۲ سانتی‌متر درآورید و وسط آن را کمی گود کنید.",
            "تابه گریل را روی حرارت متوسط رو به زیاد گرم کنید و مقدار کمی روغن اضافه کنید.",
            "هر طرف برگر را حدود ۴ تا ۶ دقیقه بپزید. برای برگر ضخیم‌تر ممکن است زمان بیشتری لازم باشد.",
            "در ۱ دقیقه آخر پنیر را روی برگر قرار دهید و در تابه را بگذارید تا پنیر ذوب شود.",
            "نان برگر را کمی گرم کنید، سپس کاهو، برگر، گوجه، پیاز و سس را داخل آن قرار دهید و سرو کنید."
        ]
    },


    fesenjan: {
        name: "فسنجان",
        emoji: "🥘",
        ingredients: [
            "۴۰۰ گرم گردوی آسیاب‌شده",
            "۴ تکه مرغ",
            "رب انار",
            "۱ عدد پیاز",
            "نمک و فلفل",
            "کمی شکر در صورت نیاز"
        ],
        steps: [
            "گردوها را کاملاً آسیاب کنید. آن‌ها را در قابلمه خشک روی حرارت کم حدود ۳ تا ۵ دقیقه تفت دهید تا عطر گردو خارج شود، اما نسوزند.",
            "حدود ۴ پیمانه آب سرد به گردو اضافه کنید. حرارت را متوسط کنید تا به جوش برسد، سپس حرارت را کم کنید.",
            "گردو باید حدود ۲ تا ۳ ساعت روی حرارت کم آرام بجوشد. هر از گاهی غذا را هم بزنید و در صورت نیاز آب اضافه کنید.",
            "مرغ را با پیاز خردشده، زردچوبه و فلفل روی حرارت متوسط حدود ۱۰ دقیقه تفت دهید تا سطح مرغ کمی طلایی شود.",
            "مرغ و رب انار را به قابلمه گردو اضافه کنید. رب انار را کم‌کم اضافه کنید و طعم خورشت را تنظیم کنید.",
            "خورشت را حدود ۱ تا ۱.۵ ساعت دیگر روی حرارت بسیار کم بپزید تا روغن گردو خارج شود و خورشت کاملاً جا بیفتد."
        ]
    },


    cake: {
        name: "کیک شکلاتی",
        emoji: "🍰",
        ingredients: [
            "۲ پیمانه آرد",
            "۳ عدد تخم‌مرغ",
            "۱ پیمانه شکر",
            "نصف پیمانه پودر کاکائو",
            "۱ پیمانه شیر",
            "نصف پیمانه روغن",
            "۱ قاشق غذاخوری بکینگ‌پودر"
        ],
        steps: [
            "فر را از ۱۵ دقیقه قبل روی دمای ۱۸۰ درجه سانتی‌گراد گرم کنید. قالب را چرب کرده و کمی آردپاشی کنید.",
            "تخم‌مرغ و شکر را حدود ۵ تا ۷ دقیقه با همزن بزنید تا رنگ آن روشن و حجم مواد بیشتر شود.",
            "روغن و شیر را اضافه کنید و حدود ۳۰ ثانیه با دور کم مخلوط کنید.",
            "آرد، پودر کاکائو و بکینگ‌پودر را الک کنید و در چند مرحله به مواد اضافه کنید.",
            "مواد را با لیسک به‌آرامی مخلوط کنید تا آرد کاملاً ترکیب شود. بیش از حد هم نزنید.",
            "مواد را داخل قالب بریزید و حدود ۳۵ تا ۴۵ دقیقه در فر ۱۸۰ درجه بپزید. پس از ۳۵ دقیقه با خلال دندان پخت کیک را بررسی کنید."
        ]
    },


    gheimeh: {
        name: "قیمه",
        emoji: "🍲",
        ingredients: [
            "۳۰۰ گرم گوشت خورشتی",
            "۱ پیمانه لپه",
            "۲ عدد پیاز",
            "۲ تا ۳ قاشق غذاخوری رب گوجه‌فرنگی",
            "۲ عدد لیمو عمانی",
            "سیب‌زمینی",
            "دارچین",
            "زردچوبه، نمک و فلفل"
        ],
        steps: [
            "لپه را حداقل ۲ ساعت خیس کنید. پیاز را نگینی خرد کرده و با روغن روی حرارت متوسط حدود ۵ دقیقه تفت دهید.",
            "زردچوبه و فلفل را اضافه کنید. گوشت خورشتی را داخل قابلمه بریزید و حدود ۸ دقیقه روی حرارت متوسط تفت دهید تا رنگ آن تغییر کند.",
            "لپه خیس‌خورده را اضافه کنید و حدود ۲ دقیقه با گوشت تفت دهید.",
            "رب گوجه‌فرنگی را اضافه کرده و حدود ۲ دقیقه تفت دهید تا خامی آن گرفته شود. سپس حدود ۳ تا ۴ پیمانه آب جوش اضافه کنید.",
            "خورشت را حدود ۱.۵ تا ۲ ساعت روی حرارت کم بپزید. لیمو عمانی و مقدار کمی دارچین را در حدود ۴۵ دقیقه پایانی اضافه کنید.",
            "سیب‌زمینی را خلالی کنید و روی حرارت متوسط رو به زیاد سرخ کنید. وقتی خورشت جا افتاد، روی آن سیب‌زمینی بریزید و سرو کنید."
        ]
    },


    ash: {
        name: "آش رشته",
        emoji: "🍜",
        ingredients: [
            "نخود و لوبیا",
            "عدس",
            "سبزی آش",
            "رشته آش",
            "پیاز",
            "کشک",
            "نعناع خشک",
            "نمک و زردچوبه"
        ],
        steps: [
            "نخود و لوبیا را از شب قبل خیس کنید. سپس با آب روی حرارت متوسط حدود ۱.۵ تا ۲ ساعت بپزید تا نرم شوند.",
            "عدس را اضافه کنید و حدود ۳۰ دقیقه دیگر اجازه دهید بپزد.",
            "سبزی آش را اضافه کنید و روی حرارت متوسط حدود ۳۰ دقیقه بپزید تا کاملاً نرم شود.",
            "رشته آش را کم‌کم اضافه کنید و مرتب هم بزنید تا رشته‌ها به هم نچسبند.",
            "حرارت را کم کنید و حدود ۲۰ تا ۳۰ دقیقه دیگر آش را بپزید تا رشته‌ها نرم شوند و آش جا بیفتد.",
            "کشک، پیازداغ و نعناع‌داغ را هنگام سرو به آش اضافه کنید."
        ]
    },


    mirza: {
        name: "میرزا قاسمی",
        emoji: "🍆",
        ingredients: [
            "۵ عدد بادمجان",
            "۳ عدد تخم‌مرغ",
            "۴ حبه سیر",
            "۲ عدد گوجه‌فرنگی",
            "رب گوجه‌فرنگی",
            "نمک، فلفل و زردچوبه"
        ],
        steps: [
            "بادمجان‌ها را روی شعله مستقیم، گریل یا داخل فر کباب کنید تا پوست آن‌ها کاملاً بسوزد و داخلشان نرم شود.",
            "بادمجان‌های کبابی را پوست بگیرید و با چاقو یا گوشت‌کوب له کنید.",
            "سیر خردشده را با کمی روغن روی حرارت کم حدود ۱ دقیقه تفت دهید. سپس زردچوبه را اضافه کنید.",
            "گوجه خردشده یا رب گوجه را اضافه کرده و حدود ۵ دقیقه روی حرارت متوسط بپزید تا آب اضافی آن کم شود.",
            "بادمجان له‌شده را اضافه کنید و حدود ۱۰ تا ۱۵ دقیقه روی حرارت متوسط رو به کم بپزید و مرتب هم بزنید.",
            "تخم‌مرغ‌ها را اضافه کنید و هم بزنید تا کاملاً بپزند. نمک و فلفل را تنظیم کرده و غذا را سرو کنید."
        ]
    },


    hotdog: {
        name: "هات داگ",
        emoji: "🌭",
        ingredients: [
            "هات داگ",
            "نان ساندویچی",
            "پیاز",
            "فلفل دلمه‌ای",
            "پنیر",
            "سس دلخواه"
        ],
        steps: [
            "هات داگ‌ها را با چند برش سطحی آماده کنید تا هنگام پخت بهتر گرم شوند.",
            "تابه را روی حرارت متوسط گرم کرده و مقدار کمی روغن اضافه کنید.",
            "هات داگ‌ها را حدود ۶ تا ۸ دقیقه بچرخانید تا همه طرف آن‌ها طلایی و گرم شود.",
            "در صورت تمایل پیاز و فلفل دلمه‌ای را جداگانه روی حرارت متوسط حدود ۵ دقیقه تفت دهید.",
            "هات داگ را داخل نان قرار دهید و پنیر را اضافه کنید.",
            "ساندویچ را ۲ تا ۳ دقیقه روی حرارت کم یا داخل دستگاه ساندویچ‌ساز گرم کنید تا پنیر ذوب شود."
        ]
    },


    fries: {
        name: "سیب‌زمینی سرخ‌کرده",
        emoji: "🍟",
        ingredients: [
            "سیب‌زمینی",
            "روغن سرخ‌کردنی",
            "نمک",
            "فلفل یا ادویه دلخواه"
        ],
        steps: [
            "سیب‌زمینی‌ها را پوست بگیرید و به شکل خلال‌های تقریباً یکسان برش دهید.",
            "خلال‌ها را حدود ۲۰ دقیقه در آب سرد قرار دهید تا مقداری از نشاسته اضافی خارج شود.",
            "سیب‌زمینی‌ها را کاملاً خشک کنید. وجود آب باعث پاشیدن روغن می‌شود.",
            "روغن را روی حرارت متوسط رو به زیاد گرم کنید.",
            "سیب‌زمینی‌ها را در چند مرحله حدود ۵ تا ۷ دقیقه سرخ کنید تا نیم‌پز شوند، سپس خارج کنید.",
            "برای ترد شدن، دوباره حدود ۲ تا ۴ دقیقه در روغن داغ سرخ کنید تا طلایی شوند. بعد از خارج کردن، نمک اضافه کنید."
        ]
    },


    lasagna: {
        name: "لازانیا",
        emoji: "🧀",
        ingredients: [
            "ورق لازانیا",
            "گوشت چرخ‌کرده",
            "پیاز",
            "قارچ",
            "سس گوجه",
            "سس بشامل",
            "پنیر پیتزا"
        ],
        steps: [
            "فر را از قبل روی ۱۸۰ درجه سانتی‌گراد گرم کنید.",
            "پیاز و گوشت چرخ‌کرده را روی حرارت متوسط حدود ۸ تا ۱۰ دقیقه تفت دهید تا گوشت کاملاً تغییر رنگ دهد.",
            "قارچ و سس گوجه را اضافه کنید و حدود ۱۰ دقیقه روی حرارت متوسط بپزید تا مواد غلیظ شوند.",
            "در صورت نیاز ورق‌های لازانیا را طبق دستور بسته در آب جوش نیم‌پز کنید.",
            "داخل ظرف یک لایه سس، ورق لازانیا، مواد گوشتی، سس بشامل و پنیر بریزید و این لایه‌ها را تکرار کنید.",
            "ظرف را با فویل حدود ۳۰ دقیقه در فر ۱۸۰ درجه قرار دهید. سپس فویل را بردارید و ۱۰ تا ۱۵ دقیقه دیگر بپزید تا پنیر طلایی شود."
        ]
    },


    bolognese: {
        name: "اسپاگتی بلونز",
        emoji: "🍝",
        ingredients: [
            "اسپاگتی",
            "گوشت چرخ‌کرده",
            "پیاز",
            "گوجه‌فرنگی یا سس گوجه",
            "قارچ در صورت دلخواه",
            "نمک و فلفل"
        ],
        steps: [
            "اسپاگتی را در آب جوش و نمک طبق زمان روی بسته، معمولاً ۸ تا ۱۲ دقیقه بپزید و سپس آبکش کنید.",
            "پیاز را روی حرارت متوسط حدود ۵ دقیقه تفت دهید تا نرم شود.",
            "گوشت چرخ‌کرده را اضافه کنید و حدود ۸ دقیقه تفت دهید تا کاملاً پخته شود.",
            "سس گوجه، نمک و فلفل را اضافه کنید و حدود ۱۵ تا ۲۰ دقیقه روی حرارت کم اجازه دهید سس جا بیفتد.",
            "در صورت نیاز کمی از آب پاستا به سس اضافه کنید تا غلظت آن مناسب شود.",
            "اسپاگتی را با سس مخلوط کنید یا سس را روی آن بریزید و گرم سرو کنید."
        ]
    },


    tiramisu: {
        name: "تیرامیسو",
        emoji: "🍰",
        ingredients: [
            "بیسکویت لیدی فینگر",
            "پنیر ماسکارپونه",
            "خامه",
            "قهوه سرد",
            "شکر",
            "پودر کاکائو"
        ],
        steps: [
            "قهوه را آماده کنید و اجازه دهید کاملاً خنک شود.",
            "خامه و شکر را با همزن بزنید تا بافت آن نسبتاً سفت شود.",
            "پنیر ماسکارپونه را به‌آرامی اضافه کرده و مواد را مخلوط کنید تا کرم یکدست شود.",
            "بیسکویت‌ها را خیلی سریع داخل قهوه سرد بزنید. نباید مدت زیادی داخل قهوه بمانند.",
            "یک لایه بیسکویت و یک لایه کرم داخل ظرف بریزید و لایه‌ها را تکرار کنید.",
            "روی دسر پودر کاکائو الک کنید و حداقل ۴ تا ۶ ساعت داخل یخچال قرار دهید."
        ]
    },


    cheesecake: {
        name: "چیز کیک",
        emoji: "🍰",
        ingredients: [
            "بیسکویت",
            "کره",
            "پنیر خامه‌ای",
            "خامه",
            "شکر",
            "ژلاتین یا مواد مناسب چیزکیک"
        ],
        steps: [
            "بیسکویت‌ها را کاملاً پودر کنید و با کره ذوب‌شده مخلوط کنید.",
            "مواد را کف قالب فشار دهید و قالب را حداقل ۳۰ دقیقه داخل یخچال قرار دهید.",
            "پنیر خامه‌ای و شکر را روی حرارت محیط با هم مخلوط کنید تا کاملاً نرم شوند.",
            "خامه و ژلاتین آماده‌شده را طبق دستور به مواد اضافه کنید و مخلوط کنید.",
            "مواد پنیری را روی پایه بیسکویتی بریزید و سطح آن را صاف کنید.",
            "چیزکیک را حداقل ۶ ساعت، ترجیحاً یک شب، در یخچال قرار دهید تا کاملاً خودش را بگیرد."
        ]
    },


    icecream: {
        name: "بستنی وانیلی",
        emoji: "🍨",
        ingredients: [
            "شیر",
            "خامه",
            "شکر",
            "وانیل"
        ],
        steps: [
            "شیر و شکر را روی حرارت کم گرم کنید و هم بزنید تا شکر حل شود. اجازه ندهید مواد بجوشند.",
            "وانیل را اضافه کنید و مواد را از روی حرارت بردارید.",
            "بعد از خنک شدن کامل، خامه را اضافه کرده و مخلوط کنید.",
            "مواد را داخل فریزر قرار دهید.",
            "هر ۳۰ تا ۴۵ دقیقه یک‌بار مواد را هم بزنید تا کریستال‌های یخ کمتر شوند.",
            "این کار را چند بار تکرار کنید تا بستنی کاملاً سفت و آماده سرو شود."
        ]
    },


    mousse: {
        name: "موس شکلاتی",
        emoji: "🍫",
        ingredients: [
            "شکلات تلخ",
            "خامه",
            "شکر در صورت نیاز",
            "تخم‌مرغ یا مواد مناسب موس"
        ],
        steps: [
            "شکلات را به روش بن‌ماری روی حرارت بسیار کم ذوب کنید و اجازه ندهید آب وارد شکلات شود.",
            "پس از ذوب شدن شکلات، آن را از حرارت بردارید و چند دقیقه اجازه دهید کمی خنک شود.",
            "خامه را جداگانه هم بزنید تا سبک و حجیم شود.",
            "شکلات خنک‌شده را کم‌کم به خامه اضافه کنید و به‌آرامی مخلوط کنید.",
            "مواد را داخل ظرف‌های سرو بریزید و سطح آن را صاف کنید.",
            "موس را حداقل ۳ تا ۴ ساعت داخل یخچال قرار دهید تا کاملاً خودش را بگیرد."
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
    favorites = JSON.parse(localStorage.getItem("favorites")) || [];
} catch (error) {
    favorites = [];
}


function saveFavorites() {
    localStorage.setItem("favorites", JSON.stringify(favorites));
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

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2500);

}


// ==========================================
// GET RECIPE
// ==========================================

function getRecipeFromCard(card) {

    if (!card) return null;

    const button = card.querySelector(".view-recipe");

    if (!button) return null;

    const recipeId = button.dataset.recipe;
    const recipe = recipes[recipeId];

    if (!recipe) return null;

    return {
        id: recipeId,
        name: recipe.name,
        emoji: recipe.emoji,
        ingredients: recipe.ingredients,
        steps: recipe.steps
    };

}


// ==========================================
// RENDER RECIPE
// ==========================================

function renderRecipe(recipe) {

    if (!recipe || !modalContent) return;

    const ingredientsHTML = recipe.ingredients
        .map(function (item) {
            return "<li>" + item + "</li>";
        })
        .join("");


    const stepsHTML = recipe.steps
        .map(function (step) {
            return "<li>" + step + "</li>";
        })
        .join("");


    modalContent.innerHTML = `
        <div class="recipe-modal-content">

            <div class="recipe-modal-emoji">
                ${recipe.emoji}
            </div>

            <h2>${recipe.name}</h2>

            <h3>🛒 مواد لازم</h3>

            <ul>
                ${ingredientsHTML}
            </ul>

            <h3>👨‍🍳 طرز تهیه کامل</h3>

            <ol>
                ${stepsHTML}
            </ol>

        </div>
    `;

}


// ==========================================
// OPEN RECIPE
// ==========================================

function openRecipe(recipe) {

    if (!recipeModal || !recipe) return;

    renderRecipe(recipe);

    recipeModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


// ==========================================
// VIEW RECIPE BUTTONS
// ==========================================

viewButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const recipeId = button.dataset.recipe;

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

        const recipeId = button.dataset.recipe;

        if (!recipeId || !recipes[recipeId]) return;


        if (favorites.includes(recipeId)) {

            favorites = favorites.filter(function (id) {
                return id !== recipeId;
            });

            showToast("از علاقه‌مندی‌ها حذف شد 💔");

        } else {

            favorites.push(recipeId);

            showToast("به علاقه‌مندی‌ها اضافه شد ❤️");

        }


        saveFavorites();
        updateFavoriteCount();
        updateFavoriteButtons();

    });

});


// ==========================================
// FAVORITES MODAL
// ==========================================

function renderFavorites() {

    if (!favoritesList) return;


    if (favorites.length === 0) {

        favoritesList.innerHTML =
            "<p style='text-align:center;padding:25px;'>هنوز غذایی به علاقه‌مندی‌ها اضافه نکردی ❤️</p>";

        return;
    }


    let html = "";


    favorites.forEach(function (id) {

        if (!recipes[id]) return;

        html += `
            <div class="favorite-item">

                <span>
                    ${recipes[id].emoji}
                    ${recipes[id].name}
                </span>

                <button
                    class="view-favorite-recipe"
                    data-id="${id}"
                    type="button"
                >
                    مشاهده دستور
                </button>

            </div>
        `;

    });


    favoritesList.innerHTML = html;


    document.querySelectorAll(".view-favorite-recipe")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                const id = button.dataset.id;

                if (!recipes[id]) return;

                favoritesModal.classList.remove("show");

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

    favoritesButton.addEventListener("click", function () {

        renderFavorites();

        favoritesModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

}


// ==========================================
// CLOSE MODALS
// ==========================================

function closeAllModals() {

    if (recipeModal) {
        recipeModal.classList.remove("show");
    }

    if (favoritesModal) {
        favoritesModal.classList.remove("show");
    }

    document.body.style.overflow = "auto";

}


if (closeModal) {
    closeModal.addEventListener("click", closeAllModals);
}


if (closeFavorites) {
    closeFavorites.addEventListener("click", closeAllModals);
}


document.querySelectorAll(".modal-overlay")
    .forEach(function (overlay) {

        overlay.addEventListener("click", closeAllModals);

    });


// ==========================================
// FILTERS
// ==========================================

filters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        filters.forEach(function (item) {
            item.classList.remove("active");
        });

        filter.classList.add("active");

        const category = filter.dataset.category;

        let visibleCount = 0;


        cards.forEach(function (card) {

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


        if (noResults) {
            noResults.style.display =
                visibleCount === 0 ? "block" : "none";
        }

    });

});


// ==========================================
// SEARCH
// ==========================================

function searchRecipes() {

    if (!searchInput) return;

    const searchText = searchInput.value
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

            card.classList.remove("hidden");
            visibleCount++;

        } else {

            card.classList.add("hidden");

        }

    });


    if (noResults) {
        noResults.style.display =
            visibleCount === 0 ? "block" : "none";
    }

}


if (searchButton) {

    searchButton.addEventListener("click", function () {

        searchRecipes();

        const recipesSection =
            document.getElementById("recipes");

        if (recipesSection) {
            recipesSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

}


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

    button.addEventListener("click", function () {

        if (!searchInput) return;

        searchInput.value =
            button.dataset.search || "";

        searchRecipes();

        document
            .getElementById("recipes")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


// ==========================================
// RANDOM FOOD
// ==========================================

function showRandomFood() {

    const availableRecipes =
        Object.keys(recipes);

    if (availableRecipes.length === 0) return;


    const randomId =
        availableRecipes[
            Math.floor(
                Math.random() *
                availableRecipes.length
            )
        ];


    const recipe = recipes[randomId];

    openRecipe({
        id: randomId,
        name: recipe.name,
        emoji: recipe.emoji,
        ingredients: recipe.ingredients,
        steps: recipe.steps
    });

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
        darkModeButton.textContent = "☀️";
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

                darkModeButton.textContent = "☀️";

            } else {

                localStorage.setItem(
                    "theme",
                    "light"
                );

                darkModeButton.textContent = "🌙";

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


    mobileMenu
        .querySelectorAll("a")
        .forEach(function (link) {

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
            closeAllModals();
        }

    }
);


// ==========================================
// INITIALIZE
// ==========================================

updateFavoriteCount();

updateFavoriteButtons();

if (noResults) {
    noResults.style.display = "none";
}


console.log(
    "🍳 طعم خونه با موفقیت آماده شد!"
);
