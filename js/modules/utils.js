function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
const getRandomArrayElement = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

function checkStringLength(string, length) {
  return string.length <= length;
}
const EscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('alert');

  const alertMessage = document.createElement('p');
  alertMessage.classList.add('alert__message');
  alertMessage.textContent = message;

  alertContainer.append(alertMessage);
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

export {getRandomArrayElement, getRandomPositiveInteger, EscapeKey, checkStringLength, showAlert};
