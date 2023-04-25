let mainMenu = document.querySelector('.header__list');
let mainBurger = document.querySelector('.header__burger');
let modalBtn = document.querySelector('.contacts__btn');
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.close');
let modalWrapper = document.querySelector('.modal__wrapper')

modalWrapper.addEventListener('click', e => {
  e.stopPropagation()
})

modalBtn.addEventListener('click', () => {
  modal.classList.toggle('modal--active')
})

modalClose.addEventListener('click', () => {
  modal.classList.toggle('modal--active')
})

modal.addEventListener('click', e => {
  modal.classList.toggle('modal--active')
})


mainBurger.addEventListener('click', () => {
  mainMenu.classList.toggle('header__list--active')
  mainBurger.classList.toggle('header__burger--active')
})