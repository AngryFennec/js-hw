const results = [
    {
        name: 'A', // имя
        distance: [10, 20, 30, 40], // какие забеги пробежал
        isFinishedMarathon: false, // финишировал ли марафон
        averageSpeed: 8.7, // средняя скорость
        rating: 20, // рейтинг
    },
    {
        name: 'B',
        distance: [10, 10, 15, 20],
        isFinishedMarathon: false,
        averageSpeed: 4.7,
        rating: 5,
    },
    {
        name: 'C',
        distance: [30, 40, 50, 50, 50],
        isFinishedMarathon: true,
        averageSpeed: 9.7,
        rating: 40,
    },
    {
        name: 'D',
        distance: [10, 10, 30, 30],
        isFinishedMarathon: false,
        averageSpeed: 8.2,
        rating: 15,
    },
    {
        name: 'E',
        distance: [20, 35, 45, 45, 55],
        isFinishedMarathon: true,
        averageSpeed: 10.1,
        rating: 45,
    }
]

// Math.max - взятие максимального из последовательности
// ... (деструктуризация)- превращение массива в последовательность [1, 2, 3] ->  1, 2, 3, иначе Math.max не обработает
// map - делает из всех элементов массива что-то в соответствии с функцией
// (item) => {что-то делает с элементом и возвращает результат}
const maxAverageSpeed = Math.max(...(results.map(item => item.averageSpeed)));
const av = results.map(item => item.averageSpeed);
console.log('map', av);
console.log('destruct', ...av);
console.log('max', maxAverageSpeed);

// sum - аккумулятор
// для каждого элемента массива делаем с sum какое-то действие (складываем)
// 0 - начальное значение аккумулятора
// считаем кол-во забегов по всем бегунам
const numberOfRuns = results.reduce((sum, item) => sum + item.distance.length, 0);
console.log(numberOfRuns);
// то же самое через цикл:
// let sum = 0;
// for (let i = 0; i < results.length; i++) {
//     sum += results[i].distance.length;
// }

const marathonFinishers = results.filter(item => item.isFinishedMarathon);
console.log(marathonFinishers);

// добавить в объекты поле maxDistance и записать в него максимальную дистанцию каждого бегуна
results.forEach(obj => {
    // добавим дистанцию
    obj.distance.push(5);
    const dist = Math.max(...obj.distance);
    obj.maxDistance = dist; // новое поле

    // изменяем рейтинг
    obj.rating += 5;
})

console.log(results);
