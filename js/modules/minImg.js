// import {posts} from './data.js';
import {openModal} from './modal.js';
import {renderPicture} from './getBigPicture.js';


const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
// const photoData = posts();
const picturesPart = document.createDocumentFragment();
const modalElement = document.querySelector('.big-picture');

function renderPictures(photos) { 
  photos.forEach((photo) => {
    const pictureElem = pictureTemplate.cloneNode(true);
    pictureElem.querySelector('.picture__img').src = photo.url;
    pictureElem.querySelector('.picture__comments').textContent = photo.comments.length;
    pictureElem.querySelector('.picture__likes').textContent = photo.likes;
    pictureElem.addEventListener('click', (evt) => {
      evt.preventDefault();
      openModal(modalElement);
      renderPicture(photo);
    });
    picturesPart.appendChild(pictureElem);

  });
  pictures.appendChild(picturesPart);
}

export {renderPictures};
