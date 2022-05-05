const BASE_URL = 'https://api.github.com';

function drawData(json) {
  const imageContainer = document.querySelector('#avatar');
  imageContainer.innerHTML = ''; // очищаем содержимое тега p
  const avatar = document.createElement('img');
  avatar.src = json.avatar_url;
  avatar.alt = 'User avatar';
  imageContainer.append(avatar);

  const tableName = document.querySelector('#information-name');
  const tableBlog = document.querySelector('#information-blog');
  const tableDate = document.querySelector('#information-date');
  tableName.textContent = json.name;
  tableBlog.textContent = json.blog;
  tableDate.textContent = json.created_at;
}

function getData(username) {
  fetch(`${BASE_URL}/users/${username}`)
    .then(response => response.json())
    .then(json => {
      drawData(json)
    })
    .catch(err => {
      console.error(err.message);
    });
}

const form = document.querySelector('form');
const input = document.querySelector('#login');
form.addEventListener('submit', function(e) {
  e.preventDefault(); // отмена стандартного поведения
  const inputValue = input.value;
  getData(inputValue);
});


