const TIMEOUT = 10_000;
const MIN_TIMEOUT = 100;

const MAP_SETTINGS = {
    center: [51.6721, 39.1843],
    zoom: 15,
    controls: []
};
const PLACEMARK_SETTINGS = [
    [51.6721, 39.1843],
    {
        hintContent: 'Пекарня «Янчик-Пеканчик»',
        balloonContent: '<strong>Янчик-Пеканчик</strong><br>ул. Булочная, 1<br>Ежедневно 7:00–21:00<br>+7 (495) 123-45-67'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '/images/icons/pecan-logo.svg',
        iconImageSize: [50, 70],
        iconImageOffset: [-10, -20]
    }
];
const FILTER = 'grayscale(30%) sepia(20%) brightness(105%)'


function clearMap(myMap) {
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('geolocationControl');
}


document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });

    const current = location.pathname.split('/').pop() || '/';
    document.querySelectorAll('nav a, .mobile-menu a').forEach(link => {
        if (link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });
});



function closeMessage() {
    const messageContainer = document.querySelector(".message-container");


    setTimeout(() => {
        messageContainer.style.transition = 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)';
        messageContainer.style.opacity = '0';
        messageContainer.style.transform = 'translateY(-10px)';
    }, MIN_TIMEOUT);

    setTimeout(() => {
        messageContainer.remove()
    }, MIN_TIMEOUT);
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function showMessage(message) {
    const html = `
        <div class="message-container">
            <div class="close-message" onclick="closeMessage()">
                    <svg class="close-button" 
                         fill="none" 
                         stroke="currentColor" 
                         viewBox="0 0 24 24">
                        <path stroke-linecap="round" 
                              stroke-linejoin="round" 
                              stroke-width="2.5" 
                              d="M6 18L18 6M6 6l12 12"/>
                    </svg>
            </div>
            <div class="message-content">${message.trim()}</div>
        </div>
    `;

    document.getElementsByTagName("footer")[0]
        .insertAdjacentHTML("afterend", html);
    const messageContainer = document.querySelector(".message-container");

    setTimeout(() => {
        messageContainer.style.transition = 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)';
        messageContainer.style.opacity = '1';
        messageContainer.style.transform = 'translateY(0)';
    }, MIN_TIMEOUT);
    setTimeout(() => {
        messageContainer.style.transition = 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)';
        messageContainer.style.opacity = '0';
        messageContainer.style.transform = 'translateY(-10px)';
    }, TIMEOUT);
    setTimeout(() => {
        messageContainer.remove()
    }, TIMEOUT + MIN_TIMEOUT);
}
