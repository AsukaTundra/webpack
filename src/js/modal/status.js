let modal = document.querySelector('.modalS')
let page = document.querySelector('.page')
let pageButtonS = page.querySelector('.status')
let header = document.querySelector('.header')
let headerButtonS = header.querySelector('.status')
let modalButtonClose = modal.querySelector('.modal__close')
let modalBlur = modal.querySelector('.modal__blur')

pageButtonS.addEventListener('click', function () {
  modal.classList.add('modalActive')
})

headerButtonS.addEventListener('click', function () {
  modal.classList.add('modalActive')
})

modalBlur.addEventListener('click', function () {
  modal.classList.remove('modalActive')
})

modalButtonClose.addEventListener('click', function () {
  modal.classList.remove('modalActive')
})
