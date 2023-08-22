import {
  popupPhoto, elements,
  popupPhotoImg, popupPhotoCaption
} from '../index.js';


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export function createCard(elementName, elementImage) {
  const elementsTemplate = document.querySelector('.elements-template').content;
  const cardElement = elementsTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__line-title').textContent = elementName;
  cardElement.querySelector('.element__image').setAttribute('src', elementImage);

  const likeButton = cardElement.querySelector('.element__line-heart');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('element__line-heart_active');
  })

  const deleteButton = cardElement.querySelector('.element__delete-button')
  deleteButton.addEventListener('click', function () {
    cardElement.remove();
  });

  const imgButton = cardElement.querySelector('.element__image');
  imgButton.addEventListener('click', function () {
    popupPhotoImg.setAttribute('src', elementImage);
    popupPhotoImg.setAttribute('alt', elementName);
    popupPhotoCaption.textContent = elementName;
    openPopup(popupPhoto);
  });

  return cardElement
}

initialCards.forEach(function(item, index) {
  elements.prepend(createCard(initialCards[index].name, initialCards[index].link))
})