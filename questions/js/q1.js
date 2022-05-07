const isYearLeap = (year) => (year % 400 === 0) || (year % 100 !== 0) && (year % 4 == 0);

const calcQuantityLeapYears = (start, finish) => {
    let qnt = 0;
    for (let year = start; year <= finish; year++) {
        if (isYearLeap(year))  {
            qnt++;
        }
    }
    return qnt;
}

const infoTag = document.querySelector('#input-log');
const yearTable = document.querySelector('#year-table');
const n = prompt('Input min year');
const m = prompt('Input max year');
console.log(n, m);
const first = Number(n); // +n, parseInt(n, 10)
const second = Number(m);
console.log(first, second); //boolean = true, false ~ 1, 0
const isValid = !isNaN(first) && first > 0 && Number.isInteger(first) && !isNaN(second) && second > 0 && Number.isInteger(second);
if (!isValid) {  // isNaN(s) - true, если s = NaN, false иначе
    infoTag.textContent = `You must enter positive integers! You entered ${n} and ${m}. Refresh to try again`;
} else {
    let i = 1; // счетчик строк таблицы
    for (let year = first; year <= second; year++) { // в обратную сторону:     for (let year = second; year >= first; year--)
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.textContent = i;
        td2.textContent = year;
        tr.append(td1);
        tr.append(td2);
        if (isYearLeap(year)) {
            tr.classList.add('leap'); // добавляем класс к строке, чтобы раскрасить ее
        }
        i++;
        yearTable.append(tr);
    }
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.textContent = 'QNT';
    td2.textContent = calcQuantityLeapYears(first, second);
    tr.append(td1);
    tr.append(td2);
    tr.classList.add('head');
    yearTable.append(tr);
}
