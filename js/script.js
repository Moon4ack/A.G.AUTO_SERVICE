document.addEventListener('DOMContentLoaded', () => {

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight &&
            rect.bottom >= 0
        );
    }

    window.addEventListener('scroll', function () {
        const animateBlocks = document.querySelectorAll('.animate-block');
        animateBlocks.forEach((block) => {
            if (isInViewport(block)) {
                block.classList.add('active');
            } else {
                block.classList.remove('active'); // Удаление класса 'active'
            }
        });
    });


    function setCarouselHeight() {
        const headerHeight = document.querySelector('header').offsetHeight;
        const windowHeight = window.innerHeight;
        const newHeight = windowHeight - headerHeight;

        const carouselItems = document.querySelectorAll('.carousel-item');

        carouselItems.forEach((item) => {
            item.style.height = `${newHeight}px`;
        });
    }

    const form = document.getElementById("request-form");

    form.addEventListener("submit", function(event) {
       const phoneInput = document.getElementById("phone");
       const phoneRegex = /^(\+380)[0-9]{9}$/;
 
       if (!phoneRegex.test(phoneInput.value)) {
          alert("Будь ласка, введіть дійсний український номер телефону (+380XXXXXXXXX).");
          event.preventDefault(); // Отмена отправки формы
       }
    });

    // Устанавливаем высоту при загрузке страницы
    window.addEventListener('load', setCarouselHeight);

    // Обновляем высоту при изменении размера окна
    window.addEventListener('resize', setCarouselHeight);

});