const ItemsIcon = [
  'url(../img/brands/acer.png)',
  'url(../img/brands/apple.png)',
  'url(../img/brands/bosch.png)',
  'url(../img/brands/hp.png)',
  'url(../img/brands/lenovo.png)',
  'url(../img/brands/samsung.png',
  'url(../img/brands/sony.png)',
  'url(../img/brands/viewsonic.png)',
  'url(../img/brands/sony.png)',
  'url(../img/brands/acer.png)',
  'url(../img/brands/samsung.png)'
]

const main = document.querySelector('.page__brands')
let BlockItems = main.querySelector('.swiper-wrapper')
let Items = BlockItems.querySelectorAll('.swiper-item')

let AddIconItems = function (Item, Icon) {
  Item.style.backgroundImage = Icon
}

for (let i = 0; i < ItemsIcon.length; i++) {
  AddIconItems(Items[i], ItemsIcon[i])
}
