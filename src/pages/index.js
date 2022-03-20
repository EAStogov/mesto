import Card from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import { FormValidator, args } from "../scripts/components/FormValidator.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";
import * as constant from "../scripts/utils/constants.js";
import './index.css';

const russia = new URL('../images/Russia.jpg', import.meta.url);
const croatia = new URL('../images/Croatia.jpg', import.meta.url);
const germany = new URL('../images/Germany.jpg', import.meta.url);
const turkey = new URL('../images/Turkey.jpg', import.meta.url);
const vietnam = new URL('../images/Vietnam.jpg', import.meta.url);
const japan = new URL('../images/Japan.jpg', import.meta.url);
const initialCards = [
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

const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.elements__card', () => {
      popupWithImage.link = item.link;
      popupWithImage.place = item.place;
      popupWithImage.open();
    });
    card.createCard();
    cardSection.addItem(card.cardElement);
  }
}, '.elements__list');

cardSection.items.forEach(item => {
  cardSection.rendererItems(item);
})

const userInfo = new UserInfo({ name: '.profile__name', desc: '.profile__description' });
let userData = userInfo.getUserInfo();

const popupWithImage = new PopupWithImage(initialCards.link, initialCards.name, constant.imagePopup);

const popupWithEditForm = new PopupWithForm('#edit-popup', () => {
  userInfo.setUserInfo(popupWithEditForm.inputValues);
  popupWithEditForm.close();
});

const popupWithAddForm = new PopupWithForm('#add-popup', () => {
  cardSection.rendererItems({
    place: constant.inputPlace.value, 
    link: constant.inputLink.value
  })
  popupWithAddForm.close();
  constant.submitButtonAddPopup.setAttribute('disabled', 'disabled');
  constant.submitButtonAddPopup.classList.add('popup__submit_disabled');
});

constant.editProfileButton.addEventListener('click', () => {
  userData = userInfo.getUserInfo();
  constant.inputName.value = userData.name;
  constant.inputDesc.value = userData.desc;
  popupWithEditForm.open();
});
constant.addCardButton.addEventListener('click', () => {
  popupWithAddForm.open();

});

popupWithAddForm.setEventListeners();
popupWithEditForm.setEventListeners();
popupWithImage.setEventListeners();

new FormValidator(args, constant.editForm).enableValidation();
new FormValidator(args, constant.addForm).enableValidation();