const fadeLogo = () => {
    let pos = window.scrollY;
    let hero = document.getElementById('hero').getBoundingClientRect().height;
    let logo = document.getElementById('banner-logo');
    //let downArrow = document.getElementById('down-arrow');

    let windowBottom = $(this).scrollTop() + $(this).height();
    let elementTop = $(".scroll-content").offset().top;
    let pixel = (windowBottom - elementTop);

    if(logo) {
        if(pos <= hero) {
            var op = 1 - pos / hero; 
            } else {
                op = 0;
            }
        logo.style.opacity = op;
        if(elementTop > pixel) {
            logo.style.marginBottom=pixel+'px';
        }
        //if(downArrow) {
        //    downArrow.style.opacity = op;   
        //}
    }

}

$(document).ready(function() {
    window.addEventListener('scroll', fadeLogo);
});


//slide down nav

(function($) {
    $( document ).ready(function() {
        let menu = $('#nav-menu-scroll');
        document.addEventListener('scroll', () => {
            if(window.scrollY > 200) {
                menu.addClass('fixed');
            } else {
                menu.removeClass('fixed');
            }
        });
    });	
})( jQuery );

//tooltips

let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// hamburger nav-imation
let mobileNav = $("[data=hamburger-menu]");
let bar1 = mobileNav.find("b:nth-child(1)");
let bar2 = mobileNav.find("b:nth-child(2)");
let bar3 = mobileNav.find("b:nth-child(3)");



mobileNav.click( function() {
  $(this).toggleClass("active");
    if (mobileNav.hasClass("active")) {
        bar1.velocity({ top: "50%" }, {duration: 200, easing: "ease-in-out"});
        bar3.velocity({ top: "50%" }, {duration: 200, easing: "ease-in-out"}).velocity({transform: ["rotateZ(90deg)", "rotateZ(0deg)"]},{duration: 400, easing: "ease-in-out"});
        mobileNav.velocity({transform: ["rotateZ(135deg)", "rotateZ(0deg)"]},{delay: 600, duration: 400, easing: "ease-in-out"});
    } else {
        mobileNav.velocity({transform: ["rotateZ(0deg)", "rotateZ(135deg)"]},{duration: 400, easing: "ease-in-out"});
        bar3.velocity({transform: ["rotateZ(0deg)", "rotateZ(90deg)"]},{duration: 400, easing: "ease-in-out"}).velocity({ top: "100%" }, {duration: 200, easing: "ease-in-out"});
        bar1.velocity("reverse", {delay: 200});
    }
});

// iframe hacks 


