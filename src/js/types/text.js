const ItemsText = [
  'Ремонт ноутбуков',
  'Ремонт планшетов',
  'Ремонт ПК',
  'Ремонт мониторов',
  'Ремонт смартфонов',
  'Ремонт принтеров'
]

const main = document.querySelector('.page__types')
let BlockItems = main.querySelector('.swiper-wrapper')
let Items = BlockItems.querySelectorAll('.swiper-text')

let AddTextItems = function (Item, Text) {
  Item.innerHTML = Text
}

for (let i = 0; i < ItemsText.length; i++) {
  AddTextItems(Items[i], ItemsText[i])
}
