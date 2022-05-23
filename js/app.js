new WOW().init();
// alert(1)
$(window).scroll(function() {
    var nav = $('.bg-scroll');
    var top = 20;
    if ($(window).scrollTop() >= top) {
        nav.addClass('bg-black');

    } else {
        // nav.css('top', '0px')
        nav.removeClass('bg-black');
    }
});
$(".banner__slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    // autoplayspeed: 2000
});

$('.banner__slider').on('init', function(slick) {
    console.log('fired!');
    $('.banner__slider').fadeIn(3000);
});




$(".scrolltop").hide();
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scrolltop').fadeIn();
    } else {
        $('.scrolltop').fadeOut();
    }
});
$('.scrolltop').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
});


//search result
$(".search").click(() => {
    $(".search-wrap").fadeIn('fast')
})

$(".close-click").click(() => {
    $(".search-wrap").hide()
})

$(".search-click").click(() => {
    alert(1)
})


//mega menu
const menu = document.querySelector('.menu');
const menuSection = menu.querySelector('.menu-section');
const menuArrow = menu.querySelector('.menu-mobile-arrow');
const menuClosed = menu.querySelector('.menu-mobile-close');
const menuToggle = document.querySelector('.menu-mobile-toggle');
const menuOverlay = document.querySelector('.overlay');
let subMenu;

menuSection.addEventListener('click', (e) => {
    if (!menu.classList.contains('active')) {
        return;
    }
    if (e.target.closest('.menu-item-has-children')) {
        const hasChildren = e.target.closest('.menu-item-has-children');
        showSubMenu(hasChildren);
    }
});

menuArrow.addEventListener('click', () => {
    hideSubMenu();
});

menuToggle.addEventListener('click', () => {
    toggleMenu();
});

menuClosed.addEventListener('click', () => {
    toggleMenu();
});

menuOverlay.addEventListener('click', () => {
    toggleMenu();
});

// Show & Hide Toggle Menu Function
function toggleMenu() {
    menu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
}

// Show the Mobile Side Menu Function
function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector('.menu-subs');
    subMenu.classList.add('active');
    subMenu.style.animation = 'slideLeft 0.5s ease forwards';
    const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
    menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
    menu.querySelector('.menu-mobile-header').classList.add('active');
}

// Hide the Mobile Side Menu Function
function hideSubMenu() {
    subMenu.style.animation = 'slideRight 0.5s ease forwards';
    setTimeout(() => {
        subMenu.classList.remove('active');
    }, 300);

    menu.querySelector('.menu-mobile-title').innerHTML = '';
    menu.querySelector('.menu-mobile-header').classList.remove('active');
}

// Windows Screen Resizes Function
window.onresize = function() {
    if (this.innerWidth > 991) {
        if (menu.classList.contains('active')) {
            toggleMenu();
        }
    }
};