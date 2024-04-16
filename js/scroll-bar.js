const progressBar = document.querySelector('.scrollbar');

let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {

  let progress = (document.documentElement.scrollTop / totalHeight) * 100;
  progressBar.style.height = `${progress}%`;
  progressBar.style.opacity = `${progress}%`;


})

const progressBarClick = document.querySelector('.clickScrollbar');

progressBarClick.addEventListener('click', (e) => {

  let newPageScroll = e.clientY / progressBarClick.offsetHeight * totalHeight;
  window.scrollTo({
    top: newPageScroll,
    behavior: 'smooth'
  })

})

// pour gérer le resize, vu que la hauteur du site change.
let debounceResize;
window.addEventListener("resize", () => {
  clearTimeout(debounceResize);
  debounceResize = setTimeout(() => {
    totalHeight = document.body.scrollHeight - window.innerHeight;
  }, 250);
});