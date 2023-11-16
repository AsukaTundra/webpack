let page = document.querySelector('.page')
let header = document.querySelector('.header')

// feedback modal block
let modalF = document.querySelector('.modalF')
let pageButtonF = page.querySelector('.feedback')
let headerButtonF = header.querySelector('.feedback')
let modalButtonCloseF = modalF.querySelector('.modal__close')
let modalBlurF = modalF.querySelector('.modal__blur')

pageButtonF.addEventListener('click', function () {
  modalF.classList.add('modalActive')
})

headerButtonF.addEventListener('click', function () {
  modalF.classList.add('modalActive')
})

modalBlurF.addEventListener('click', function () {
  modalF.classList.remove('modalActive')
})

modalButtonCloseF.addEventListener('click', function () {
  modalF.classList.remove('modalActive')
})

// status modal block
let modalS = document.querySelector('.modalS')
let pageButtonS = page.querySelector('.status')
let headerButtonS = header.querySelector('.status')
let modalButtonCloseS = modalS.querySelector('.modal__close')
let modalBlurS = modalS.querySelector('.modal__blur')

pageButtonS.addEventListener('click', function () {
  modalS.classList.add('modalActive')
})

headerButtonS.addEventListener('click', function () {
  modalS.classList.add('modalActive')
})

modalBlurS.addEventListener('click', function () {
  modalS.classList.remove('modalActive')
})

modalButtonCloseS.addEventListener('click', function () {
  modalS.classList.remove('modalActive')
})
