let popups = document.querySelectorAll('.popup');
let profileButtons = document.querySelector('.profile').querySelectorAll('button');
let profileName = document.querySelector('.profile__name');
let profileDesc = document.querySelector('.profile__description')
let forms = document.querySelectorAll('.popup__form');
let inputs = document.querySelectorAll('.popup__input');
let inputName;
let inputDesc;
let inputPlace;
let inputLink;
let popupImage = document.querySelector('.popup__image');
let popupDesc = document.querySelector('#image-description');

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

function addCard(place, link, isAppend) {
  const templateCard = document.querySelector('#card-template').content;
  const elementsList = document.querySelector('.elements__list');
  const newCard = templateCard.querySelector('.elements__card').cloneNode(true);
  const cardImage = newCard.querySelector('.elements__image');
  
  newCard.querySelector('.elements__place').textContent = place;
  cardImage.setAttribute('src', link);
  cardImage.setAttribute('alt', place);

  if (isAppend) {
    elementsList.append(newCard);
  } else {
    elementsList.prepend(newCard);
  }
  
  newCard.querySelector('.elements__trash').addEventListener('click', (evt) => {newCard.remove()});
  newCard.querySelector('.elements__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__like_active');
  });
  newCard.querySelector('.elements__image').addEventListener('click', (evt) => {
    openPopup('image');
    popupImage.setAttribute('src', link);
    popupImage.setAttribute('alt', place);
    popupDesc.textContent = place;
  })
}

initialCards.forEach(card => {addCard(card.name, card.link, true)});

inputs.forEach(element => {
  if (element.getAttribute('name') === 'name') {
    inputName = element;
  } else if (element.getAttribute('name') === 'description') {
    inputDesc = element;
  } else if (element.getAttribute('name') === 'place') {
    inputPlace = element;
  } else if (element.getAttribute('name') === 'link') {
    inputLink = element;
  }
})

function findPopupById(id) {
  let findedPopup;
  popups.forEach(popup => {
    if (popup.getAttribute('id') === id) {
      findedPopup = popup;
    }
  })
  return findedPopup;
}

function openPopup(id) {
  if (id === 'edit') {
    findPopupById('edit-popup').classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputDesc.value = profileDesc.textContent;
  } else if (id === 'add') {
    findPopupById('add-popup').classList.add('popup_opened');
  } else {
    findPopupById('image-popup').classList.add('popup_opened');
  }
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function submitChanges(event) {
  event.preventDefault();
  const popup = event.target.closest('.popup');
  if (event.target.getAttribute('name') === 'popup__form-edit') {
    profileName.textContent = inputName.value;
    profileDesc.textContent = inputDesc.value;
  } else {
    addCard(inputPlace.value, inputLink.value, false);
  }
  closePopup(popup);
}

profileButtons.forEach(button => {
  button.addEventListener('click', (evt) => {openPopup(evt.target.getAttribute('id'))});
});

popups.forEach(popup => {
  popup.querySelector('.popup__close').addEventListener('click', (evt) => {closePopup(popup)});
  popup.addEventListener('mousedown', (event) => {
    if(event.path[0] === popup) {
      closePopup(popup);
    }
  })
})

forms.forEach(form => {
  form.addEventListener('submit', submitChanges);
})

document.addEventListener('keydown', function(event) {
  if (event.code === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
})

document.addEventListener('keydown', function(event) {
  if (event.code === 'Enter') {
    submitChanges;
  }
})