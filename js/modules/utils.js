const REMOVE_ALERT = 5000;
function checkStringLength(string, length) {
  return string.length <= length;
}
const isEscapeKey = (evt) => evt.key === 'Escape';

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
  }, REMOVE_ALERT);
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { isEscapeKey, checkStringLength, showAlert, debounce};
