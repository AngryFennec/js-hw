const URL = 'https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json';

function drawTable(data) {
  const table = document.querySelector('#paintings');
  data.forEach(item => {
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(item)) {
      const td = document.createElement("td");
      td.textContent = value;
      tr.append(td);
    }

    table.append(tr);
  });
}

function getData() {
  fetch(URL)
    .then(response => response.json())
    .then(result => {
      drawTable(result)
    })
    .catch(err => {
      console.error(err.message);
    });
}

getData();
