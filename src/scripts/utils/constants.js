const russia = new URL('../../images/Russia.jpg', import.meta.url);
const croatia = new URL('../../images/Croatia.jpg', import.meta.url);
const germany = new URL('../../images/Germany.jpg', import.meta.url);
const turkey = new URL('../../images/Turkey.jpg', import.meta.url);
const vietnam = new URL('../../images/Vietnam.jpg', import.meta.url);
const japan = new URL('../../images/Japan.jpg', import.meta.url);

export const initialCards = [
  {
    place: 'Россия',
    link: russia
  },
  {
    place: 'Хорватия',
    link: croatia
  },
  {
    place: 'Германия',
    link: germany
  },
  {
    place: 'Турция',
    link: turkey
  },
  {
    place: 'Вьетнам',
    link: vietnam
  },
  {
    place: 'Япония',
    link: japan
  }
];

export const validationArgs = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export const elementsList = document.querySelector('.elements__list');
export const popups = document.querySelectorAll('.popup');
export const addPopup = document.querySelector('#add-popup');
export const submitButtonAddPopup = addPopup.querySelector('.popup__submit');
export const imagePopup = '#image-popup';
export const editProfileButton = document.querySelector('.profile__button_type_edit');
export const addCardButton = document.querySelector('.profile__button_type_add');
export const addAvatarButton = document.querySelector('.profile__button_type_avatar');
export const editForm = document.querySelector('.popup__form_fill_edit');
export const addForm = document.querySelector('.popup__form_fill_add');
export const inputName = document.querySelector('.popup__input_value_name');
export const inputDesc = document.querySelector('.popup__input_value_description');
export const inputPlace = document.querySelector('.popup__input_value_place');
export const inputLink = document.querySelector('.popup__input_value_link');