const popups = document.querySelectorAll('.popup');
const editPopup = document.querySelector('#edit-popup');
const addPopup = document.querySelector('#add-popup');
const submitButtonAddPopup = addPopup.querySelector('.popup__submit');
const imagePopup = document.querySelector('#image-popup');
const editProfileButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileDesc = document.querySelector('.profile__description')
const editForm = document.querySelector('.popup__form_fill_edit');
const addForm = document.querySelector('.popup__form_fill_add');
const inputName = document.querySelector('.popup__input_value_name');
const inputDesc = document.querySelector('.popup__input_value_description');
const inputPlace = document.querySelector('.popup__input_value_place');
const inputLink = document.querySelector('.popup__input_value_link');
const popupImage = document.querySelector('.popup__image');
const popupDesc = document.querySelector('#image-description');
const elementsList = document.querySelector('.elements__list');

let openedPopup;

function createCard(place, link) {
  const templateCard = document.querySelector('#card-template').content;
  const newCard = templateCard.querySelector('.elements__card').cloneNode(true);
  const cardImage = newCard.querySelector('.elements__image');
  
  newCard.querySelector('.elements__place').textContent = place;
  cardImage.setAttribute('src', link);
  cardImage.setAttribute('alt', place);
  
  newCard.querySelector('.elements__trash').addEventListener('click', () => {newCard.remove()});
  newCard.querySelector('.elements__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__like_active');
  });
  newCard.querySelector('.elements__image').addEventListener('click', () => {
    openPopup(imagePopup);
    popupImage.setAttribute('src', link);
    popupImage.setAttribute('alt', place);
    popupDesc.textContent = place;
  })

  return newCard;
}

function addCard(newCard, isAppend) {
  if (isAppend) {
    elementsList.append(newCard);
  } else {
    elementsList.prepend(newCard);
  }
}

initialCards.forEach(card => {addCard(createCard(card.name, card.link), true)});

function openPopup(popup) {
  popup.classList.add('popup_opened');
  openedPopup = popup;
  document.addEventListener('keydown', closePopupWithEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWithEsc);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDesc.textContent = inputDesc.value;
  closePopup(editPopup);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  addCard(createCard(inputPlace.value, inputLink.value), false);
  inputPlace.value = '';
  inputLink.value = '';
  submitButtonAddPopup.setAttribute('disabled', 'disabled');
  submitButtonAddPopup.classList.add('popup__submit_disabled');
  closePopup(addPopup);
}

function closePopupWithEsc(evt) {
  console.log('evt.key');
  if (evt.key === 'Escape') {
    closePopup(openedPopup);
  }
}

popups.forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === popup) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  })
})

editProfileButton.addEventListener('click', () => {
  openPopup(editPopup);
  inputName.value = profileName.textContent;
  inputDesc.value = profileDesc.textContent;
});
addCardButton.addEventListener('click', () => {openPopup(addPopup)});

editForm.addEventListener('submit', handleProfileFormSubmit);
addForm.addEventListener('submit', handleCardFormSubmit);