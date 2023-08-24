export const popup = document.querySelectorAll('.popup');
export const popupCardAdd = document.querySelector('.popup_card-add');
export const elements = document.querySelector('.elements');
export const profileTitle = document.querySelector('.profile-person__title');
export const profileSubtitle = document.querySelector('.profile-person__subtitle');
export const popupContainer = document.querySelector('.popup-container_profile-edit');
export const profileEditButton = document.querySelector('.profile-person__edit-button');
export const cardAddButton = document.querySelector('.profile__add-button');
export const popupPhoto = document.querySelector('.popup_photo');
export const popupPhotoCloseButton = document.querySelector('.popup-container__close-icon_photo');
export const closeButtons = document.querySelectorAll('.popup-container__close-icon');
export const popupProfileEdit = document.querySelector('.popup_profile-edit');
export const popupCloseButton = popupContainer.querySelector('.popup-container__close-icon_profile-edit');
export const popupSaveButton = popupProfileEdit.querySelector('.popup__button');
export const popupContainerCardAdd = popupCardAdd.querySelector('.popup-container_card-add');
export const popupCloseButtonCardAdd = popupCardAdd.querySelector('.popup-container__close-icon_card-add');
export const popupPhotoImg = popupPhoto.querySelector('.popup-container__img');
export const popupPhotoCaption = popupPhoto.querySelector('.popup-container__caption');
export const popupContainerName = popupContainer.querySelector('.popup-container__name_profile-edit');
export const popupContainerDesc = popupContainer.querySelector('.popup-container__description_profile-edit');
export const popupContainerNameCardAdd = popupCardAdd.querySelector('.popup-container__name_card-add');
export const popupContainerPictureSrc =  popupCardAdd.querySelector('.popup-container__src');
import './pages/index.css';

const config = {
  formSelector: '.popup-container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_dsbld',
  inputErrorClass: 'popup__input_type_error'
}

import {
  closePopup, openPopup,
  handleFormSubmit, addCardFormSubmit
} from './components/modal.js'

import {
  enableValidation
} from './components/validate.js'

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

popupProfileEdit.addEventListener('submit', handleFormSubmit);

cardAddButton.addEventListener('click', () => openPopup(popupCardAdd));

popupCardAdd.addEventListener('submit', addCardFormSubmit);

profileEditButton.addEventListener('click', () => {
  popupContainerName.value = profileTitle.textContent;
  popupContainerDesc.value = profileSubtitle.textContent;
  openPopup(popupProfileEdit)
});

enableValidation(config);

[...popup].forEach((popupElement) => {
  popupElement.addEventListener('keydown', function(evt) {
      if (evt.key === 'Escape') {
        closePopup(evt)
    }
  })
})