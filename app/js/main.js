// ---------------------JQuery-------------------------
$(function () {
  $(".reviews__slider").slick({
    autoplay: true,
    centerMode: true,
    centerPadding: "0px",
    adaptiveHeight: true,
    dots: true,
  });
});

$(function () {
  $(".slider__big").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    fade: true,
    autoplay: true,
    adaptiveHeight: true,
    asNavFor: ".slider__mini",
  });
  $(".slider__mini").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider__big",
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    vertical: true,
  });
});

// ---------------------JS Native----------------------
const S = (select) => document.querySelector(select);

S(".menu__list").onclick = () => {
  let name = S(".header__bottom").className;
  let btn = S(".menu__btn").className;
  console.log(name);
  if (name.includes("header__bottom_active")) {
    S(".header__bottom").classList.remove("header__bottom_active");
  }
  if (btn.includes("menu__btn_active")) {
    S(".menu__btn").classList.remove("menu__btn_active");
  }
};

S(".menu__btn").onclick = () => {
  S(".menu__btn").classList.toggle("menu__btn_active");
  S(".header__bottom").classList.toggle("header__bottom_active");
};

S(".social__btn").onclick = () => {
  S(".header__top__social").classList.toggle("social_active");
};

if (window.innerWidth > 1024) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      S(".header").style.background = "#000";
      S(".header").style.top = "-54px";
      S(".header").style.borderBottom = "1px solid #ff9900";
    } else {
      S(".header").style.background = "none";
      S(".header").style.top = "0";
      S(".header").style.borderBottom = "none";
    }
  });
}
