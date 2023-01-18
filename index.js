const refs = {
    selectElement1 : document.querySelector('.question-1'),
    selectElement2 : document.querySelector('.question-2'),
    selectElement3 : document.querySelector('.question-3'),
    modalEl : document.querySelector('.js-modalbox'),
    submitButton : document.querySelector('.submit-button'), 
    nameInput: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
  //  modalboxText: document.querySelector('.modalbox__text')
};

refs.selectElement1.addEventListener('change', (event) => {
  document.querySelector('.result1').textContent = `You have ${event.target.placeholder} point`;
});

refs.selectElement2.addEventListener('change', (event) => {
  document.querySelector('.result2').textContent = `You have ${event.target.placeholder} point`;
});


refs.selectElement3.addEventListener('change', (event) => {
  document.querySelector('.result3').textContent = `You have ${event.target.placeholder} point`;
});



// Modal window


refs.submitButton.addEventListener('click', onSubmitButtonClick);

function onSubmitButtonClick(e) {

  e.preventDefault();

  isOpenModal(e);

  onEnterOpener(e);
};

function isOpenModal(e) {
  refs.modalEl.classList.add('is-open');
};

function onEnterOpener(e) {
  console.log(e.key);
  if (e.key !== "Enter") {
    return
  }
  isOpenModal(e);
}

refs.modalEl.addEventListener('click', onOverlayClickCloseModal);

function onOverlayClickCloseModal(e) {
  e.preventDefault();
  refs.modalEl.classList.remove('is-open');

}

// Close modal window with ESC.

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
   refs.modalEl.classList.remove('is-open');
  }
});

// Modalbox text 

refs.nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {
    event.currentTarget.value.trim()
        ? refs.nameLabel.textContent = event.currentTarget.value
        : refs.nameLabel.textContent = 'stranger';
};

// const score = 

// refs.modalboxText = `Hi ${refs.nameInput}! Your total score is ${score}`