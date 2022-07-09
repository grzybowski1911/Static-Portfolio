const fadeLogo = () => {
    var pos = window.scrollY;
    var hero = document.getElementById('hero').getBoundingClientRect().height;
    var logo = document.getElementById('banner-logo');
    var downArrow = document.getElementById('down-arrow');

    if(logo) {
        if(pos <= hero) {
            var op = 1 - pos / hero; 
            } else {
                op = 0;
            }
        logo.style.opacity = op;
        if(downArrow) {
            downArrow.style.opacity = op;   
        }
    }
}
window.addEventListener('scroll', fadeLogo);


//slide down nav

(function($) {
    $( document ).ready(function() {
        let menu = $('#nav-menu-scroll');
        document.addEventListener('scroll', () => {
            if(window.scrollY > 300) {
                menu.addClass('fixed');
            } else {
                menu.removeClass('fixed');
            }
        });
    });	
})( jQuery );

//tooltips

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// 
