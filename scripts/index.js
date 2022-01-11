let edit = document.querySelector('.profile__edit-button');
let submit = document.querySelector('.popup__submit');
let popupClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileDesc = document.querySelector('.profile__description')
let inputName = document.querySelector('.popup__name');
let inputDesc = document.querySelector('.popup__description');

inputName.value = profileName.textContent;
inputDesc.value = profileDesc.textContent;

function openPopup() {
  popup.classList.add('popup__opened');
}

function closePopup() {
  popup.classList.remove('popup__opened');
}

function submitChanges() {
  profileName.textContent = document.querySelector('.popup__name').value;
  profileDesc.textContent = document.querySelector('.popup__description').value;
}

edit.addEventListener('click', openPopup);

popupClose.addEventListener('click', closePopup);

popup.addEventListener('click', function(event) {
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
    submitChanges();
    closePopup();
  }
})

submit.addEventListener('click', function() {
  submitChanges();
  closePopup();
})