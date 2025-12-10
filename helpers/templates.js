class Templates {
    static header = `
    <div class="container">
        <a href="/" class="logo">
            <img src="/images/icons/pecan-logo.svg" alt="Янчик-Пеканчик" class="logo-icon">
            <span class="logo-text">Янчик-<br>Пеканчик</span>
        </a>

        <nav class="nav-desktop">
            <ul>
                <li><a href="/about">О нас</a></li>
                <li><a href="/catalog">Каталог</a></li>
                <li><a href="/cart">Корзина</a></li>
                <li><a href="/#contacts">Контакты</a></li>
            </ul>
        </nav>

        <button class="burger" aria-label="Открыть меню">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
    <div class="mobile-menu">
        <ul>
            <li><a href="/about">О нас</a></li>
            <li><a href="/catalog">Каталог</a></li>
            <li><a href="/cart">Корзина</a></li>
            <li><a href="/#contacts">Контакты</a></li>
        </ul>
    </div>
    `;

    static footer = `
    <div class="container">
        <p>&copy; 2025 Пекарня "Янчик-Пеканчик". Все права защищены.</p>
        <div class="footer-links">
            <a href="#contacts">Контакты</a>
            <a href="/catalog">Каталог</a>
        </div>
    </div>`;

}

module.exports = Templates;
