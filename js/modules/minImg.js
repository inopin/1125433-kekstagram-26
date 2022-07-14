import {renderPicture} from './getBigPicture.js';


const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
// const photoData = posts();
const picturesPart = document.createDocumentFragment();
// const modalElement = document.querySelector('.big-picture');

let photosData = [];

function renderPictures(photos) {
  photosData = photos;
  photosData.forEach(({ id, url, comments, likes }) => {
    const pictureElem = pictureTemplate.cloneNode(true);
    pictureElem.dataset.photoId = id;
    pictureElem.querySelector('.picture__img').src = url;
    pictureElem.querySelector('.picture__comments').textContent = comments.length;
    pictureElem.querySelector('.picture__likes').textContent = likes;
    picturesPart.appendChild(pictureElem);

  });
  pictures.appendChild(picturesPart);
}

pictures.addEventListener('click', (evt) => {
  const eventElement = evt.target.closest('.picture');
  if (eventElement) {
    evt.preventDefault();
    const photoId = eventElement.dataset.photoId;
    const photo = photosData.find((element) => element.id === Number(photoId));
    if (photo) {
      renderPicture(photo);
    }
  }
});

export {renderPictures};
