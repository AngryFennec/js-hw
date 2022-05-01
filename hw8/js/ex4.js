//const CHECKBOX_KEY = 'promotion';

const form = document.querySelector('form');
const table = document.querySelector('#information');


form.addEventListener('submit', function(e) {
  e.preventDefault();
  table.innerHTML = '';
  const thr = document.createElement('tr');
  const th1 = document.createElement('th');
  const th2 = document.createElement('th');

  th1.textContent = 'Key';
  th2.textContent = 'Value';
  thr.append(th1);
  thr.append(th2);
  table.append(thr);

  const formData = new FormData(form);
  for (const [key, value] of formData.entries()) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.textContent = key;
    // if (key === CHECKBOX_KEY) {
    //   td2.textContent = 'on';
    // } else {
    //   td2.textContent = value;
    // }
    td2.textContent = value;
    tr.append(td1);
    tr.append(td2);
    table.append(tr);
  }
})
