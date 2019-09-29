const breakpoints = Object.freeze({
  XS: 600,
  SM: 1024,
})

function isMobile (windowWidth = -1) {
  const width = windowWidth && windowWidth >= 0
    ? windowWidth
    : window.innerWidth

  return width <= breakpoints.XS
}

function isIos () {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
}

export { isMobile, isIos, breakpoints }
