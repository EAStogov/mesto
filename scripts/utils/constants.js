export const initialCards = [
  {
    place: 'Россия',
    link: './images/Russia.jpg'
  },
  {
    place: 'Хорватия',
    link: './images/Croatia.jpg'
  },
  {
    place: 'Германия',
    link: './images/Germany.jpg'
  },
  {
    place: 'Турция',
    link: './images/Turkey.jpg'
  },
  {
    place: 'Вьетнам',
    link: './images/Vietnam.jpg'
  },
  {
    place: 'Япония',
    link: './images/Japan.jpg'
  }
  ];

export const elementsList = document.querySelector('.elements__list');
export const popups = document.querySelectorAll('.popup');
export const addPopup = document.querySelector('#add-popup');
export const submitButtonAddPopup = addPopup.querySelector('.popup__submit');
export const imagePopup = '#image-popup';
export const editProfileButton = document.querySelector('.profile__edit-button');
export const addCardButton = document.querySelector('.profile__add-button');
export const editForm = document.querySelector('.popup__form_fill_edit');
export const addForm = document.querySelector('.popup__form_fill_add');
export const inputName = document.querySelector('.popup__input_value_name');
export const inputDesc = document.querySelector('.popup__input_value_description');
export const inputPlace = document.querySelector('.popup__input_value_place');
export const inputLink = document.querySelector('.popup__input_value_link');
export const popupImage = document.querySelector('.popup__image');
export const popupDesc = document.querySelector('#image-description');