import { russia, croatia, germany, turkey, vietnam, japan } from '../../index.js';

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