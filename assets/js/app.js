// Tabs
// ****************
const tabsBtn = document.querySelectorAll('.catalog__tabs-btn');
const tabsItems = document.querySelectorAll('.catalog__tabs-content');
const tabsItemsMob = document.querySelectorAll('.catalog__tabs-content--mobile');

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let tabIdMob = currentBtn.getAttribute("data-tabmob");
        let currentTab = document.querySelector(tabId);
        let currentTabMob = document.querySelector(tabIdMob);

        if(! currentBtn.classList.contains('catalog__tabs-btn--active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('catalog__tabs-btn--active');
            });

            tabsItems.forEach(function(item) {
                item.classList.remove('catalog__tabs-content--active');
            });

            tabsItemsMob.forEach(function(item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('catalog__tabs-btn--active');
            currentTab.classList.add('catalog__tabs-content--active')
            currentTabMob.classList.add('active')
        }
    });
}

document.querySelector('.catalog__tabs-btn').click();



// Clients Slider (swiper js https://swiperjs.com/ )
// ****************
const clientsSlider = new Swiper('.clients__slider ', {
    speed: 800,
    touchRatio: 2,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    mousewheel: {
        invert: true,
        sensitivity: 4,
    },
    navigation: {
        nextEl: '.slider-btn--next',
        prevEl: '.slider-btn--prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            slidesPerGroup: 4,
            grid: {
                rows: 2,
            },
        },

        414: {
            loop: true,
            slidesPerView: 'auto',
            slidesPerGroup: 2,
            grid: {
                rows: 1,
            },
        },
    }
});



// Сatalog-item-modal
// ****************
let modal = document.querySelector('.catalog-item-modal');
let modalWrapper = document.querySelector('.catalog-item-modal__wrapper');
let openModalBtn = document.querySelectorAll('.catalog-item__btn');
let closeModalBtn = document.querySelector('.catalog-item-modal__close');
let bodyNoScroll = document.querySelector('body');

openModalBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('catalog-item-modal--active');
        modalWrapper.classList.add('catalog-item-modal__wrapper--active');
        bodyNoScroll.classList.add('scroll-off');
    });
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('catalog-item-modal--active');
    modalWrapper.classList.remove('catalog-item-modal__wrapper--active');
    bodyNoScroll.classList.remove('scroll-off');
});

document.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.classList.remove('catalog-item-modal--active');
        modalWrapper.classList.remove('catalog-item-modal__wrapper--active');
        bodyNoScroll.classList.remove('scroll-off');
    };
});