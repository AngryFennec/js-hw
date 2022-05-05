const Account = require('./accounting'); // это импорт

const myAccount = new Account("Jeff");
myAccount.credit(150);
console.log(myAccount.describe());
