let edit = document.querySelector('.profile__edit-button');
let add = document.querySelector('.profile__add-button');
let popupClose = document.querySelector('.popup__close');
let popups = document.querySelectorAll('.popup');
let profileButtons = document.querySelector('.profile').querySelectorAll('button');
let profileName = document.querySelector('.profile__name');
let profileDesc = document.querySelector('.profile__description')
let form = document.querySelector('.popup__form');
let inputs = document.querySelectorAll('.popup__input');
let inputName;
let inputDesc;

let buttonOnPage = document.querySelectorAll('.page__button');
let popupActive = popups[1];
const initialCards = [
  {
    name: 'Россия',
    link: './images/Russia.jpg'
  },
  {
    name: 'Хорватия',
    link: './images/Croatia.jpg'
  },
  {
    name: 'Германия',
    link: './images/Germany.jpg'
  },
  {
    name: 'Турция',
    link: './images/Turkey.jpg'
  },
  {
    name: 'Вьетнам',
    link: './images/Vietnam.jpg'
  },
  {
    name: 'Япония',
    link: './images/Japan.jpg'
  }
];

function addCard(place, link) {
  const templateCard = document.querySelector('#card-template').content;
  const elementsList = document.querySelector('.elements__list');
  const newCard = templateCard.querySelector('.elements__card').cloneNode(true);

  newCard.querySelector('.elements__place').textContent = place;
  newCard.querySelector('.elements__image').setAttribute('src', link);

  elementsList.append(newCard);
};

initialCards.forEach(card => {addCard(card.name, card.link)});

inputs.forEach(element => {
  if (element.getAttribute('name') === 'name') {
    inputName = element;
  } else if (element.getAttribute('name') === 'description') {
    inputDesc = element;
  }
})

function findPopupById(id) {
  let findedPopup;
  popups.forEach(popup => {
    if (popup.getAttribute('id') === id) {
      findedPopup = popup;
      return findedPopup;
    }
  })
  return findedPopup;
}

function openPopup(id) {
  popupActive = findPopupById(id);
  popupActive.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputDesc.value = profileDesc.textContent;
  console.log(popupActive);
}

function closePopup(id) {
  popupActive.classList.remove('popup_opened');
}

function submitChanges(evt) {
  evt.preventDefault();
  if (evt.target.getAttribute('id') === 'edit') {
    profileName.textContent = inputName.value;
    profileDesc.textContent = inputDesc.value;
  } else {

  }
  
  closePopup(evt.target.getAttribute('id'));
}

profileButtons.forEach(button => {
  console.log(button);
  button.addEventListener('click', (evt) => {openPopup(evt.target.getAttribute('id'))});
});

popups.forEach(popup => {
  popup.querySelector('.popup__close').addEventListener('click', closePopup);
})

form.addEventListener('submit', submitChanges);

// popups.addEventListener('mousedown', function(event) {
//   if (event.path[0] === popupActive) {
//     closePopup();
//   }
// });

document.addEventListener('keydown', function(event) {
  if (event.code === 'Escape') {
    closePopup();
  }
})

document.addEventListener('keydown', function(event) {
  if (event.code === 'Enter') {
    submitChanges;
  }
})