window.addEventListener('load', () => {
  const sections = Array.from(document.querySelectorAll('section'))
  sections.forEach((section, i) => {
    section.id = `q${i}`
  })

  let sectionIndex = parseInt(window.location.hash.replace(/[#q]+/, '')) || 0

  const scroll = (direction) => {
    sectionIndex += direction
    if (sectionIndex < 0) {
      sectionIndex = 0
    } else if (sectionIndex >= sections.length) {
      sectionIndex = sections.length - 1
    }

    const section = sections[sectionIndex]
    section.scrollIntoView()
    window.history.replaceState(null, '', `#${section.id}`)
  }

  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        scroll(-1)
        event.preventDefault()
        break
      case 'ArrowDown':
      case 'ArrowRight':
        scroll(1)
        event.preventDefault()
        break
    }
  })
})
