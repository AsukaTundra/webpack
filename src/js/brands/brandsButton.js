let Table = document.querySelector('.brands__swiper')

let MobileTableElements = Table.querySelectorAll('.OffMobile')
let DescktopTableElements = Table.querySelectorAll('.OffDescktop')

let TableButtonOff = Table.querySelector('.btnof')
let TableButtonOn = Table.querySelector('.btnon')

let button = function (tableElement, ClassElements, buttonOff, buttonOn) {
  buttonOff.addEventListener('click', function () {
    for (let i = 0; i < tableElement.length; i++) {
      tableElement[i].classList.remove(ClassElements)
      tableElement[i].classList.add('target')
    }
    buttonOff.classList.add('dspl--none')
    buttonOn.classList.remove('dspl--none')
  })
  buttonOn.addEventListener('click', function () {
    for (let i = 0; i < tableElement.length; i++) {
      tableElement[i].classList.remove('target')
      tableElement[i].classList.add(ClassElements)
    }
    buttonOn.classList.add('dspl--none')
    buttonOff.classList.remove('dspl--none')
  })
}

button(MobileTableElements, 'OffMobile', TableButtonOff, TableButtonOn)
button(DescktopTableElements, 'OffDescktop', TableButtonOff, TableButtonOn)
