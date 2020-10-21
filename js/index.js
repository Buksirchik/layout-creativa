$(document).ready(function () {
  // main-slider
  $(".slids-wrap").slick({
    nextArrow: ".slider__right-arrow",
    prevArrow: ".slider__left-arrow",
  });

  // portfolio slider
  let btnArr = ["all", "Illustration", "Digital Art", "Web design"];
  $(".slider-container").slick({
    arrows: false,
    appendDots: ".control-block-wrap",
    dotsClass: "control-block",
    dots: true,
    customPaging: function (slider, index) {
      return '<button class="control__btn">' + btnArr[index] + "</button>";
    },
  });

  // clients slider

  $(".clients-slider-container").slick({
    arrows: false,
    dots: true,
    appendDots: ".clients-slider .slider-control-wrap",
    dotsClass: "clients-slider__control",
    customPaging: function () {
      return '<button class="clients-slider__btn"></button>';
    },
  });

  // tabs

  const tabs = document.querySelector(".tabs");
  tabs.addEventListener("click", toggleTab);

  function toggleTab(e) {
    const tabHeader = e.target.closest(".tab__header");

    if (!tabHeader) return;

    tabHeader.classList.toggle("active-tab");
  }

  // load news
  
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector;
  }
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (Element.prototype.matches.call(el, s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }

  const btn = document.querySelector(".load-more");
  const container = document.querySelector(".blog-content");
  const blogs = document.querySelectorAll(".blog-item");

  btn.onclick = function () {
    for (let i = 0; i < blogs.length; i++) {
      const cloneItem = blogs[i].cloneNode(true);
      container.appendChild(cloneItem);
    }
  };
});
