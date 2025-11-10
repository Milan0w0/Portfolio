import getAttrNameFromSelector from '@/utils/getAttrNameFromSelector'
import IMask from 'imask'

export default function initInputMask() {
  const root = '[data-js-input-mask]'
  const inputElements = document.querySelectorAll(root)

  if (!inputElements.length) {return}

  inputElements.forEach(input => {
    const mask = input.getAttribute(getAttrNameFromSelector(root))
    if (!mask) {return}

    IMask(input, { mask })
  })
}