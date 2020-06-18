import { RefObject, useEffect } from 'react'

function useWave(
  ref: RefObject<HTMLElement>,
  insertExtraNode: Boolean = false
) {
  isInsertExtraNode = insertExtraNode
  useEffect(() => {
    const node = ref.current
    bindAnimationEvent(node)
  }, [ref])
}

let isInsertExtraNode: Boolean
let extraNode: HTMLElement | null
let styleForPesudo: HTMLStyleElement | null
let clickWaveTimeoutId: NodeJS.Timeout
let resetEffectTimeoutId: NodeJS.Timeout

function isHidden(element: HTMLElement) {
  if (process.env.NODE_ENV === 'test') {
    return false
  }
  return !element || element.offsetParent === null
}

function getAttributeName() {
  return isInsertExtraNode
    ? 'spirit-click-animating'
    : 'spirit-click-animating-without-extra-node'
}

function isNotGrey(color: string) {
  // eslint-disable-next-line no-useless-escape
  const match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/)
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3])
  }
  return true
}

const onClick = (node: HTMLElement, waveColor: string) => {
  if (resetEffectTimeoutId) clearTimeout(resetEffectTimeoutId)
  resetEffect(node)
  if (!node || isHidden(node) || node.className.indexOf('-leave') >= 0) {
    return
  }
  extraNode = document.createElement('div')
  extraNode.className = 'spirit-click-animating-node'
  const attributeName = getAttributeName()
  node.setAttribute(attributeName, 'true')
  styleForPesudo = styleForPesudo || document.createElement('style')
  if (
    waveColor &&
    waveColor !== '#ffffff' &&
    waveColor !== 'rgb(255, 255, 255)' &&
    isNotGrey(waveColor) &&
    !/rgba\((?:\d*, ){3}0\)/.test(waveColor) && // any transparent rgba color
    waveColor !== 'transparent'
  ) {
    extraNode.style.borderColor = waveColor
    styleForPesudo.innerHTML = `
    [spirit-click-animating-without-extra-node='true']::after, .spirit-click-animating-node {
      --spirit-wave-shadow-color: ${waveColor};
    }`
    if (!document.body.contains(styleForPesudo)) {
      document.body.appendChild(styleForPesudo)
    }
  }
  if (isInsertExtraNode) {
    node.appendChild(extraNode)
  }

  resetEffectTimeoutId = setTimeout(() => {
    resetEffect(node)
  }, 1000)
}

const resetEffect = (node: HTMLElement) => {
  if (!node || node === extraNode || !(node instanceof Element)) {
    return
  }

  const attributeName = getAttributeName()
  node.setAttribute(attributeName, 'false')

  if (styleForPesudo) {
    styleForPesudo.innerHTML = ''
  }

  if (isInsertExtraNode && extraNode && node.contains(extraNode)) {
    node.removeChild(extraNode)
  }
}

const bindAnimationEvent = (node: HTMLElement | null) => {
  if (!node) return
  const listener = (event: MouseEvent) => {
    const waveColor =
      getComputedStyle(node).getPropertyValue('border-color') ||
      getComputedStyle(node).getPropertyValue('background-color')
    clickWaveTimeoutId = setTimeout(() => onClick(node, waveColor), 0)
  }
  node.addEventListener('click', listener)
  return () => {
    node.removeEventListener('click', listener)
    clearTimeout(clickWaveTimeoutId)
  }
}

export default useWave
