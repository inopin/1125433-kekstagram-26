const getData = (onSuccess, onError) => {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((posts) => {
      onSuccess(posts);
    })
    .catch(() => {
      onError('Ошибка загрузки данных. Попробуйте обновить страницу');
    });
};

const sendData = (onSuccess, onError, body) => {
  fetch('https://26.javascript.pages.academy/kekstagram', {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return;
      }

      onError();
    })
    .catch(() => {
      onError();
    });
};

export { getData, sendData };
