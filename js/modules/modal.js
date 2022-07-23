import{EscapeKey} from './utils.js';
import {resetForm, pristine} from './loadForm.js';
import { clearCommentsListCounter} from './getBigPicture.js';
import {resetImageScale} from './scale.js';
import {resetEffect} from './effect.js';

const body = document.body;
let targetElement;


const modalEscKeydownHandler = (evt) => {
  if (EscapeKey(evt)) {
    if (evt.target.matches('.text__hashtags') || evt.target.matches('.text__description')) {
      return;
    }
    if (document.querySelector('.error')) {
      return;
    }
    evt.preventDefault();
    closeModal();
  }
};

const openModal = (item) => {
  targetElement = item;
  body.classList.add('modal-open');
  targetElement.classList.remove('hidden');
  document.addEventListener('keydown', modalEscKeydownHandler);
};

function closeModal() {
  body.classList.remove('modal-open');
  targetElement.classList.add('hidden');
  document.removeEventListener('keydown', modalEscKeydownHandler);
  if (targetElement.classList.contains('img-upload__overlay')) {
    pristine.reset();
    resetForm();
    resetImageScale();
    resetEffect();
  }

  if (targetElement.classList.contains('big-picture')) {
    clearCommentsListCounter();
  }
}

export { openModal, closeModal };


