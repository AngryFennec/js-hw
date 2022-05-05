const URL = '/ex3';
const form = document.querySelector('#articles');
const information = document.querySelector('#articles-info');

function sendData(obj) {
  fetch(URL, {
    method: 'POST',
    body: obj,
  })
    .then(response => response.text())
    .then(result => {
      information.textContent = result;
    })
    .catch(err => {
      console.error(err.message);
      information.textContent = '';
    });
}


form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  sendData(formData);
})

