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
const popupElement = elements.querySelector('.element__popup');



function closePopup(aim) {
  aim.classList.add('popup_opened')
}

function openPopup(aim) {
  aim.classList.remove('popup_opened')
}

profileEditButton.addEventListener('click', () => openPopup(popupProfileEdit));
popupCloseButton.addEventListener('click', () => closePopup(popupProfileEdit));


function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupContainerName.value;
  profileSubtitle.textContent = popupContainerDesc.value;
  popupProfileEdit.classList.toggle('popup_opened')
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
popupCloseButtonCardAdd.addEventListener('click', () => closePopup(popupCardAdd));

function addElement(elementName, elementImage) {
  const elementsTemplate = document.querySelector('.elements-template').content;
  const element = elementsTemplate.querySelector('.element').cloneNode(true);

  element.querySelector('.element__line-title').textContent = elementName;
  element.querySelector('.element__image').setAttribute('src', elementImage);

  const likeButton = element.querySelector('.element__line-heart');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('element__line-heart_active');
  })

  const deleteButton = element.querySelector('.element__delete-button')
  deleteButton.addEventListener('click', function () {
    element.remove();
  });

  const imgButton = element.querySelector('.element__image')
  imgButton.addEventListener('click', function () {
    popupElement.classList.remove('element__popup_opened');
  });

  elements.append(element);
}


initialCards.forEach(function(item, index) {
  addElement(initialCards[index].name, initialCards[index].link)
})

function addCardFormSubmit(evt) {
  evt.preventDefault();
  const elementsTemplate = document.querySelector('.elements-template').content;
  const element = elementsTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__line-title').textContent = popupContainerNameCardAdd.value;
  element.querySelector('.element__image').setAttribute('src', popupContainerPictureSrc.value);
  popupCardAdd.classList.toggle('popup_opened')

  const likeButton = element.querySelector('.element__line-heart');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('element__line-heart_active');
  })

  const deleteButton = element.querySelector('.element__delete-button')
  deleteButton.addEventListener('click', function () {
    element.remove();
  });

  const imgButton = element.querySelector('.element__image')
  imgButton.addEventListener('click', function () {
    popupElement.classList.remove('element__popup_opened');
  });

  elements.prepend(element);
}

popupCardAdd.addEventListener('submit', addCardFormSubmit);


