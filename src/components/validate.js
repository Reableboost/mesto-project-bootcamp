function disableButton(buttonElement, config) {
  buttonElement.disabled = true;
  buttonElement.classList.add(config.inactiveButtonClass);
}

function enableButton(buttonElement, config) {
  buttonElement.disabled = false;
  buttonElement.classList.remove(config.inactiveButtonClass);
}

function toggleButtonState(buttonElement, isActive, config) {
  if (isActive) {
    enableButton(buttonElement, config);
  } else {
    disableButton(buttonElement, config);
  }
}

function showError(inputElement, errorElement, config) {
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass);
}

function hideError(inputElement, errorElement, config) {
  errorElement.textContent = '';
  inputElement.classList.remove(config.inputErrorClass);
}

function checkInputValidity(inputElement, formElement, config) {
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  if (!isInputValid) {
    showError(inputElement, errorElement, config)
  } else {
    hideError(inputElement, errorElement, config)
  }
}

function setEventListener(formElement, config) {
  const inputList = formElement.querySelectorAll(config.inputSelector);
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(buttonElement, formElement.checkValidity(), config);
  [...inputList].forEach(function(inputElement) {
    inputElement.addEventListener('input', () => {
      toggleButtonState(buttonElement, formElement.checkValidity(), config);
      checkInputValidity(inputElement, formElement, config);
    })
  })

  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault()
  })
}

export function enableValidation(config) {
  const formList = document.querySelectorAll(config.formSelector);

  [...formList].forEach((formElement) => {
    setEventListener(formElement, config)
  });

}