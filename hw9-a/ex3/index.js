const moment = require("moment");
// не нужно запоминать команды библиотеки
// смотрим документацию https://momentjs.com/

const oldDate = moment([1976, 10, 26]); // месяцы нумеруются с 0
const now = moment();

console.log(now.format("dddd, MMMM Do YYYY"));
console.log(oldDate.from(now));
