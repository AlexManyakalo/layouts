/*================ VARIABLES =================*/

// Burger-menu
const burgerBtn = document.querySelector(".hamburger__menu");
const burgerBtns = document.querySelectorAll(".hamburger__menu span");
const burgerMenu = document.querySelector(".hamburger__menu-list");
const body = document.querySelector(".body");

// Timer
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// Best gifts
const giftsList = document.querySelector(".gifts__list");
const giftCards = [
    {
        src: "./assets/images/gift-for-work.png",
        category: "For work",
        alt: 'gift for work',
        text: "Console.log Guru",
    },
    {
        src: "./assets/images/gift-for-work.png",
        category: "For work",
        alt: 'gift for work',
        text: "Bug Magnet",
    },
    {
        src: "./assets/images/gift-for-work.png",
        category: "For work",
        alt: 'gift for work',
        text: "Shortcut Cheater",
    },
    {
        src: "./assets/images/gift-for-work.png",
        category: "For work",
        alt: 'gift for work',
        text: "Merge Master",
    },
    {
        src: "./assets/images/gift-for-health.png",
        category: "For health",
        alt: 'gift for health',
        text: "Step Master",
    },
    {
        src: "./assets/images/gift-for-health.png",
        category: "For health",
        alt: 'gift for health',
        text: "Posture Levitation",
    },
    {
        src: "./assets/images/gift-for-health.png",
        category: "For health",
        alt: 'gift for health',
        text: "Snack Resister",
    },
    {
        src: "./assets/images/gift-for-health.png",
        category: "For health",
        alt: 'gift for health',
        text: "Hydration Bot",
    },
    {
        src: "./assets/images/gift-for-harmony.png",
        category: "For harmony",
        alt: 'gift for harmony',
        text: "Bug Acceptance Guru",
    },
    {
        src: "./assets/images/gift-for-harmony.png",
        category: "For harmony",
        alt: 'gift for harmony',
        text: "Error Laugher",
    },
    {
        src: "./assets/images/gift-for-harmony.png",
        category: "For harmony",
        alt: 'gift for harmony',
        text: "Joy Charger",
    },
    {
        src: "./assets/images/gift-for-harmony.png",
        category: "For harmony",
        alt: 'gift for harmony',
        text: "Spontaneous Coding Philosopher",
    },
];

/*================ EVENTS =================*/

// Burger-menu
window.addEventListener("resize", burgerClose);

burgerBtn.addEventListener("click", burgerToggle);

burgerMenu.addEventListener("click", (event) => {
    const element = event.target;
    if (element.classList.contains("hamburger__menu-link")) burgerToggle();
});

// Timer
let date = new Date("Jan 1 2025 00:00:00");
timerUpdate();
setInterval(timerUpdate, 1000);

// Best gifts
randomGifts();

/*================ FUNCTIONS ===================*/

// Burger-menu
function burgerToggle() {
    burgerBtn.classList.toggle("is-open");
    burgerBtns[0].classList.toggle("is-open-first");
    burgerBtns[1].classList.toggle("is-open-second");
    burgerMenu.classList.toggle("is-open");
    body.classList.toggle("is-open");
}

function burgerClose() {
    if (window.innerWidth > 768) {
        burgerBtn.classList.remove("is-open");
        burgerBtns[0].classList.remove("is-open-first");
        burgerBtns[1].classList.remove("is-open-second");
        burgerMenu.classList.remove("is-open");
        body.classList.remove("is-open");
    }
}

// Timer
function timerUpdate() {
    let now = new Date();
    let gap = date - now;

    let day = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hour = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minute = Math.floor(gap / 1000 / 60) % 60;
    let second = Math.floor(gap / 1000) % 60;

    days.innerText = day;
    hours.innerText = hour;
    minutes.innerText = minute;
    seconds.innerText = second;
}

// Best gifts
function randomGifts() {
    giftsList.innerHTML = '';
    const countCards = 4;
    for (let i = 0; i < countCards; i++) {
        const index = Math.floor(Math.random() * giftCards.length);
        const item = giftCards[index];
        giftsList.innerHTML += `<li class="gifts__item">
                                    <img class="gifts__item-image" src="${item.src}" alt="${item.alt}">
                                    <div class="gifts__item-under">
                                        <h4 class="gifts__item-title gifts__item-title--${item.category.substring(4, item.category.length)}">${item.category}</h4>
                                        <p class="gifts__item-paragraph">${item.text}</p>
                                    </div>
                                </li>`;
    }
}

/*================ RESULTS ===================*/
console.log(
    `1. [+] Implementation of the burger menu on both pages: +22
2. [-] Implementation of the Slider on the home page: 0
3. [+] Implementation of the Timer on the home page: +8
4. [+] When both opening or refreshing the page, 4 random cards are displayed in the block Best Gifts on the home page: +4
5. [] Implementation of the Category switching for products on the gifts page: +8
6. [] Implementation of the Scroll-to-Top button on the gifts page: +12
7. [] Implementation of the Modal for selected gift on both pages: +18`
);
