AOS.init({
    once: true
});

/* Mob nav Show/Hide */
const mobNavBtn = document.querySelector('.header__mobnav'); 
mobNavBtn.onclick = function() {
    const nav = document.querySelector('.header__mobnav__box');
    const icon = document.querySelector('.icon');  
    if (nav.style.display !== 'none') {
      nav.style.display = 'none';
      icon.classList.remove("change");
    }
    else {
      nav.style.display = 'block';
      icon.classList.add("change");
    }
};

/* Scroll to links */
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
  

/* Filter for Works block */
function worksFilter() {
    const buttons = document.querySelectorAll(".btn_filter");
    const cards = document.querySelectorAll(".works__item");
  
    function filter(category, items) {
      items.forEach((item) => {
        const isItemFiltered = !item.classList.contains(category);
        const isShowAll = category.toLowerCase() === "all";

        if (isItemFiltered && !isShowAll) {
          item.classList.add("hide"); 
        } else {
          item.classList.remove("hide");
        }
      });
    }
  
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        
        buttons.forEach(el=>{ 
          el.classList.remove('works__filter-active'); 
        });

        const currentCategory = button.dataset.filter;
        filter(currentCategory, cards); 

        button.classList.add('works__filter-active')
      });
    });
}
worksFilter();

/* Scroll to Top */
function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
}

function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
}

const goTopBtn = document.querySelector('.back_to_top');
window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);




