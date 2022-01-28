let edit = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileDesc = document.querySelector('.profile__description')
let form = document.querySelector('.popup__form');
let inputs = document.querySelectorAll('.popup__input');
let inputName;
let inputDesc;

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

function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputDesc.value = profileDesc.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function submitChanges(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileDesc.textContent = inputDesc.value;
  closePopup();
}

edit.addEventListener('click', openPopup);

popupClose.addEventListener('click', closePopup);

form.addEventListener('submit', submitChanges);

popup.addEventListener('mousedown', function(event) {
  if (event.path[0] === document.querySelector('.popup')) {
    closePopup();
  }
});

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