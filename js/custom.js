$(document).ready(function () {
  // Counter js
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText.replace('+', '');
      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target.toString().padStart(2, '0');
        if (target > 99) counter.innerText += '+';
      }
    };

    updateCount();
  });
  // partent slider
  const partnerSwiper = new Swiper('.partner-swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 5,
    spaceBetween: 50,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 800,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      }
    }
  });
});
