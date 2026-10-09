document.addEventListener('DOMContentLoaded', () => {
    // Анимация появления карточек
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));

    // Бургер меню
    window.toggleMenu = function() {
        const nav = document.getElementById("mynavigation");
        nav.classList.toggle("responsive");
    };

    // Аккордеон для CV
    window.display_cv = function(element) {
        // Переключаем класс active для заголовка (для стрелочки)
        element.classList.toggle('active');

        // Находим следующий элемент (контент)
        const content = element.nextElementSibling;
        if (content && content.classList.contains('cv-content')) {
            content.classList.toggle('show');
        }
    };

    // Обработка формы
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Проверка на наличие emailjs
            if (typeof emailjs !== 'undefined') {
                emailjs.sendForm(
                    'service_rx4dvc9',
                    'template_wj85rkx',
                    '#contact-form'
                ).then(() => {
                    alert('Повідомлення відправлено успішно!');
                    contactForm.reset();
                }, (error) => {
                    alert('Помилка відправлення: ' + JSON.stringify(error));
                });
            } else {
                alert('Помилка: EmailJS не завантажено.');
            }
        });
    }
});
