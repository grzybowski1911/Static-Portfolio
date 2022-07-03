const fadeLogo = () => {
    var pos = window.scrollY;
    var hero = document.getElementById('hero').getBoundingClientRect().height;
    var logo = document.getElementById('banner-logo');
    if(pos <= hero) {
        var op = 1 - pos / hero; 
        } else {
            op = 0;
        }
    logo.style.opacity = op;
}
window.addEventListener('scroll', fadeLogo);
