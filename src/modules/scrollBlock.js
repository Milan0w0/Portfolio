export default function scrollBlockInit() {
  const scrollBlock = document.querySelector(['data-js-scroll-block'])

  scrollBlock.addEventListener('mouseenter', () => {
    document.body.classList.add('no-scroll')
  })

  scrollBlock.addEventListener('mouseleave', () => {
    document.body.classList.remove('no-scroll')
  })
}
