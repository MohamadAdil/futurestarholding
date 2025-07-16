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

  // Partner slider
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
        slidesPerView: 1,
        spaceBetween: 0,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 0,
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

  // Hero slider
  var swiper = new Swiper(".heroSwiper", {
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Header scroll effect
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".site-header");
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  const toggleBtn = document.querySelector(".search-toggle");
  const mobileSearch = document.querySelector(".mobile-search");
  const icon = toggleBtn.querySelector("i");

  if (toggleBtn && mobileSearch && icon) {
    toggleBtn.addEventListener("click", function (e) {
      e.preventDefault();

      mobileSearch.classList.toggle("show");

      // Toggle icon class
      if (mobileSearch.classList.contains("show")) {
        icon.classList.remove("fa-search");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-search");
      }
    });
  }
  // 
  $('.navbar-toggler').on('click', function () {
    const $icon = $(this).find('i');

    // Use a small delay to ensure Bootstrap toggles the class first
    setTimeout(() => {
      if ($(this).hasClass('collapsed')) {
        $icon.removeClass('fa-xmark').addClass('fa-bars'); // Menu is closed
      } else {
        $icon.removeClass('fa-bars').addClass('fa-xmark'); // Menu is open
      }
    }, 10);
  });
});
