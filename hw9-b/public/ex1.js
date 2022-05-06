const URL = '/ex1';
const form = document.querySelector('#form');

const information = document.querySelector('#form-information');

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
