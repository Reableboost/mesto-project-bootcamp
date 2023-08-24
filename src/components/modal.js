
import {
  popupContainerName,popupContainerDesc, profileTitle,
  profileSubtitle, elements,
  popupContainerNameCardAdd, popupContainerPictureSrc,
  popupProfileEdit, popupCardAdd
} from '../index.js'

import {
  createCard
} from '../components/card.js'

export function closePopup(aim) {
  aim.classList.add('popup_opened')
}

export function openPopup(aim) {
  aim.classList.remove('popup_opened')
}


export function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupContainerName.value;
  profileSubtitle.textContent = popupContainerDesc.value;
  closePopup(popupProfileEdit);
}

export function addCardFormSubmit(evt) {
  evt.preventDefault();
  elements.prepend(createCard(popupContainerNameCardAdd.value, popupContainerPictureSrc.value))
  evt.target.reset();
  closePopup(popupCardAdd)
}
