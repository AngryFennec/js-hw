const URL = '/api/countries';
const countryInfo = document.querySelector('#country-info');
const countryBtn = document.querySelector('#country-btn');

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
            countryInfo.textContent = result;
        })
        .catch(err => {
            console.error(err.message);
            countryInfo.textContent = '';
        });
}

countryBtn.addEventListener('click', (evt) => {
    sendData(obj);
})

