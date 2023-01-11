// Sidebar
const sideNav = document.querySelectorAll('.sidenav')
M.Sidenav.init(sideNav); 

// Slider
const slider = document.querySelectorAll('.slider')
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    duration: 300,
    interval: 3000
});

// Parallax
const paralax = document.querySelectorAll('.parallax')
M.Parallax.init(paralax)


// Portfolio
const materialBox = document.querySelectorAll('.materialboxed')
M.Materialbox.init(materialBox)

// ScrollSpy

const scroll = document.querySelectorAll('.scrollspy')
M.ScrollSpy.init(scroll, {
    scrollOffset: 60,
    throttle: 100
})