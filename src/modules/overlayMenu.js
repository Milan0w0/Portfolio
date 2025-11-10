export default function initOverlayMenu() {
  const root = '[data-js-overlay-menu]'
  const dialog = '[data-js-overlay-menu-dialog]'
  const link = '[data-js-overlay-menu-link]'
  const burgerButton = '[data-js-overlay-menu-burger-button]'

  const isActive = 'is-active'
  const isLock = 'is-lock'

  const rootElement = document.querySelector(root)
  if (!rootElement) {return}

  const dialogElement = rootElement.querySelector(dialog)
  const burgerButtonElement = rootElement.querySelector(burgerButton)
  const linksElements = rootElement.querySelectorAll(link)

  burgerButtonElement.addEventListener('click', (event) => {
    event.preventDefault()

    burgerButtonElement.classList.toggle(isActive)
    const isOpen = dialogElement.open
    dialogElement.open = !isOpen
    document.documentElement.classList.toggle(isLock)
  })

  linksElements.forEach(link => {
   link.addEventListener('click', () => {
     burgerButtonElement.classList.remove(isActive)
     document.documentElement.classList.remove(isLock)
     dialogElement.open = false
     dialogElement.open = !isOpen
    })
  })
}