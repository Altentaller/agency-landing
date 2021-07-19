AOS.init({
    once: true
});


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
  