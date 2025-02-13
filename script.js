const urlSearchParams = new URLSearchParams(window.location.search)
const messageCustom = urlSearchParams.get('message')

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

// Obtiene los botones y elementos necesarios
const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')
const backgroundMusic = document.querySelector('#backgroundMusic')

btnCloseElement.disabled = true

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(() => {
    coverElement.style.zIndex = -1
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    // Animación del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'

    // Reproduce la música
    backgroundMusic.play().catch(error => console.log("Error al reproducir audio:", error))

  }, 500)
})

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')

  setTimeout(() => {
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // Animación del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'

    // Detiene la música
    backgroundMusic.pause()
    backgroundMusic.currentTime = 0

  }, 500)
})
