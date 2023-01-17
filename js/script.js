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

// Form Contact To Google Spreedsheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbzjeUosfCOwYKRKAIdJrmIQeHzobE3E4VlYPPUDIV51JZ2Mhia8w90fr0RPmVuhWrsA/exec'
const form = document.forms['submit-to-google-sheet']
const tombolKirim = document.querySelector('.tombol-kirim')
const tombolLoading = document.querySelector('.tombol-loading')
const alert = document.querySelector('.alert')

form.addEventListener('submit', e => {
  e.preventDefault()
    // Ketika tombol sumbti diklik
    // Tampilkan tombol loading hilangkan tombol submit
    tombolLoading.classList.toggle('hide')
    tombolKirim.classList.toggle('hide')
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
    // Tampilkan tombol kirim hilangkan tombol loading
    tombolLoading.classList.toggle('hide')
    tombolKirim.classList.toggle('hide')
    // Reset Form
    form.reset();
    console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})