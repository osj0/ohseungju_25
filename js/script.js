  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Swiper 슬라이드 변경 시 애니메이션 실행
  swiper.on('slideChangeTransitionEnd', () => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const fadeEls = activeSlide.querySelectorAll('.fade-slide');
    fadeEls.forEach(el => el.classList.add('show'));

  });

swiper.on('slideChange', () => {
  const menu = document.querySelector('.menu_bx');
  const idx = swiper.activeIndex; // 현재 슬라이드 인덱스 (0부터 시작)

  // 3, 4, 5번째 슬라이드(index 2, 3, 4)에서만 보이게
  if (idx >= 2 && idx <= 4) {
    menu.classList.add('show');
  } else {
    menu.classList.remove('show');
  }
});

// 메뉴 클릭 시 해당 슬라이드로 이동
const menuItems = document.querySelectorAll('.menu_bx li');

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    swiper.slideTo(index + 2, 800); // 800ms 동안 부드럽게 이동 (2,3,4번째 슬라이드)
  });
});
