const profileEditButton = document.querySelector('.profile-person__edit-button');
const popupProfileEdit = document.querySelector('.popup_profile-edit');
const popupContainer = document.querySelector('.popup-container_profile-edit');
const popupCloseButton = popupContainer.querySelector('.popup-container__close-icon_profile-edit');
const profileTitle = document.querySelector('.profile-person__title');
const profileSubtitle = document.querySelector('.profile-person__subtitle');
const popupContainerName = popupContainer.querySelector('.popup-container__name_profile-edit');
const popupContainerDesc = popupContainer.querySelector('.popup-container__description_profile-edit');
const popupSaveButton = popupProfileEdit.querySelector('.popup__button');
const popupCardAdd = document.querySelector('.popup_card-add');
const popupContainerCardAdd = popupCardAdd.querySelector('.popup-container_card-add');
const popupCloseButtonCardAdd = popupCardAdd.querySelector('.popup-container__close-icon_card-add');
const popupContainerNameCardAdd = popupCardAdd.querySelector('.popup-container__name_card-add');
const popupContainerPictureSrc =  popupCardAdd.querySelector('.popup-container__src');
const cardAddButton = document.querySelector('.profile__add-button');
const elements = document.querySelector('.elements');
const popupPhoto = document.querySelector('.popup_photo');
const popupPhotoCloseButton = document.querySelector('.popup-container__close-icon_photo');
const closeButtons = document.querySelectorAll('.popup-container__close-icon');
const popupPhotoImg = popupPhoto.querySelector('.popup-container__img');
const popupPhotoCaption = popupPhoto.querySelector('.popup-container__caption');


function closePopup(aim) {
  aim.classList.add('popup_opened')
}

function openPopup(aim) {
  aim.classList.remove('popup_opened')
}

profileEditButton.addEventListener('click', () => {
  popupContainerName.value = profileTitle.textContent;
  popupContainerDesc.value = profileSubtitle.textContent;
  openPopup(popupProfileEdit)
});

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});


function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupContainerName.value;
  profileSubtitle.textContent = popupContainerDesc.value;
  closePopup(popupProfileEdit);
}

popupProfileEdit.addEventListener('submit', handleFormSubmit);

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


cardAddButton.addEventListener('click', () => openPopup(popupCardAdd));

function createCard(elementName, elementImage) {
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

function addCardFormSubmit(evt) {
  evt.preventDefault();
  elements.prepend(createCard(popupContainerNameCardAdd.value, popupContainerPictureSrc.value))
  evt.target.reset();
  closePopup(popupCardAdd)
}

popupCardAdd.addEventListener('submit', addCardFormSubmit);

console.log(popupContainerNameCardAdd)