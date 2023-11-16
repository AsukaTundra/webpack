let navBlock = document.querySelector('.nav')
let navContainer = document.querySelector('.nav__block')
let navBlur = document.querySelector('.nav__blur')
let navButton = document.querySelector('.left__button')
let navButtonClose = document.querySelector('.button--burger')

navButton.addEventListener('click', function () {
  navBlock.classList.add('navMobile')
  navContainer.classList.add('navCont')
  navBlur.classList.add('navBlur')

  navBlur.addEventListener('click', function () {
    navBlock.classList.remove('navMobile')
    navContainer.classList.remove('navCont')
    navBlur.classList.remove('navBlur')
  })
})

navButtonClose.addEventListener('click', function () {
  navBlock.classList.remove('navMobile')
  navContainer.classList.remove('navCont')
  navBlur.classList.remove('navBlur')
})

window.addEventListener('resize', function () {
  const currentWidth = window.innerWidth
  if (currentWidth > 1440) {
    navBlock.classList.remove('navMobile')
    navContainer.classList.remove('navCont')
    navBlur.classList.remove('navBlur')
  }
})
