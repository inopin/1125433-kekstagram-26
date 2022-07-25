
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

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { EscapeKey, checkStringLength, showAlert, debounce};
