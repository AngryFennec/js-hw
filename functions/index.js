// result = prompt('Input number');
// console.log(result);

foo();
//bar();

// function declaration - hoisting
function foo(a, b) {
    console.log('foo');
}

// function expression - no hoisting
const bar = function(a) {
    console.log('bar');
}

// arrow function - no hoisting
// no context
const s = (a, b) => {
    console.log(this);
}

s();

/*
const e = (a) => a;
[].forEach(item => {});
[].filter(item => {});

*/

const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
const brr = [];
console.log(brr.length);
brr[5] = 3;
console.log(brr.length);
console.log(brr);

brr.push(4);
console.log(brr);

arr.forEach((item, i) => {console.log(item, i);});

const obj = [
    {
        a: 1,
        b: 'sdf',
    },
    {
        a: 2,
        b: 'adf',
    },
    {
        a: 3,
        b: 'sdfdf',
    }
];


const newArr = arr.map(item => item*3);
console.log(newArr);

const filtered = arr.filter(item => item % 2 === 0);
console.log(filtered);

console.log(arr.join(','));
console.log('sdfsdfdf'.split('s'));

// скопировать массив
console.log(arr.slice());

console.log(arr.slice(0, 2));
