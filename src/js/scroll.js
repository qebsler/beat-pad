function initScroll () {
  let scrollStep = 0
  document.addEventListener('scroll', (e) => {
    if (window.scrollY > scrollStep) {
      // ANIMATION DOWN

      scrollStep = window.scrollY
    } else if (window.scrollY < scrollStep) {
      // ANIMATION UP

      scrollStep = window.scrollY
    }
  })
}

export default initScroll
