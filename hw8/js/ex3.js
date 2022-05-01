const URL = 'https://thejsway-server.herokuapp.com/api/countries';

function sendData(obj) {
  fetch(URL, {
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj),
  })
    .then(response => response.text())
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.error(err.message);
    });
}

const obj = {
  name: 'My name',
  countries: [
    {
      name: 'Sweden',
      year: 1999,
    },
    {
      name: 'Finland',
      year: 2009,
    },
    {
      name: 'Norway',
      year: 2019,
    },
  ]
};

sendData(obj);
