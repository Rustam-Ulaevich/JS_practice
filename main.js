// const tracks = [
//   {title: 'Music', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
//   {title: 'Music2', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'},
// ]

// const tasks = [
//   {title: 'Купить продукты на неделю', isDone: false},
//   {title: 'Полить цветы', isDone: true},
//   {title: 'Сходить на тренировку', isDone: false},
//   ]

// const rootEl = document.getElementById('root')

// const titleH1 = document.createElement("h1")
// titleH1.append('Список дел')
// rootEl.append(titleH1)

// const toDo = document.createElement('ul')

// tasks.forEach( (task) => {
//   console.log(task)

//   const taskEl = document.createElement('li')

//   const taskDiv = document.createElement('div')
//   taskDiv.append(task.title)
//   taskEl.append(taskDiv)

//   const taskStatus = document.createElement('input')
//   taskStatus.type = 'checkbox'
//   taskStatus.checked = task.isDone
//   taskEl.append(taskStatus)

//   toDo.append(taskEl)

// })

// rootEl.append(toDo)


// const numbers = [1, 5, 10, 15, 20]
// const newNumbers = numbers.map( n => n+10)
// console.log(newNumbers) // [11, 15, 20, 25, 30] ⬅️ Итоговый результат

// const names = ["Alice", "Bob", "Charlie", "Diana"]
// const nameInfo = names.map( (n) => {
//   return {
//     name: n,
//     length: n.length
//   }
// })

// console.log(nameInfo)
// ⬇️ Итоговый результат
// [
//   { name: 'Alice', length: 5 },
//   { name: 'Bob', length: 3 },
//   { name: 'Charlie', length: 7 },
//   { name: 'Diana', length: 5 }
// ]

// const products = [
//   { name: 'Laptop', price: 1000},
//   { name: 'Mouse', price: 50},
//   { name: 'Keyboard', price: 80},
// ]

// const productsWithFinalPrice = products.map(
//   (p) => {
//     return {...p, finalPrice: (p.price-(p.price * 0.15))}
//   }
// )

// // console.log(productsWithFinalPrice);

// const employees = [
//   {name: 'Alice', salary: 50000, experience: 3},
//   {name: 'Bob', salary: 60000, experience: 5},
//   {name: 'Charlie', salary: 45000, experience: 2},
// ]

// const employeesWithTotal = employees.map(
//   e => {
//     return {...e, totalSalary: e.salary + (e.salary * (0.05 * e.experience)) }
//   }
// )

// console.log(employeesWithTotal);


// class painmontProssecor


// console.log(a);

// var a = 4

// function rus() {

//   let a = 0
  
//   function amr(){
//     a++
//   }

//   // return amr()

// }

// function createCounter() { 
//   let count = 0; // Добавляем return, чтобы функция не исчезла 
//   return function() { count++; return count; }; 
// }


// let i = rus()

// for (var i=1; i<10; i++) {
//   console.log(i);  
// }

// for (let i = 0; i < 3; i++) { 
//   console.log(i)
//   setTimeout(() => { console.log(i);  }, 100);
// }

// console.log('1'); 

// setTimeout(
//   () => { console.log('2'); }, 0); 

// Promise.resolve().then(
//   () => { console.log('3'); }); 

// console.log('4')

// 1 4 3 2etTimeout(() => { console.log('Timeout 1'); Promise.resolve().then(() => { console.log('Promise inside Timeout'); }); }, 0); setTimeout(() => { console.log('Timeout 2'); }, 0); Promise.resolve().then(() => { console.log('Promise 1'); }); console.log('End');


// async function first() {
//     console.log('9');
//     await second();
//     console.log('10');
// }

// async function second() {
//     console.log('11');
// }

// console.log('1');

// setTimeout(() => console.log('2'), 0);

// first();

// new Promise((res) => {
//     console.log('3');
//     res();
// }).then(() => console.log('4'));

// console.log('5');

// 1 9 11 10 5 3 4 2


// const person = new Object({
//   name: 'Ura',
//   age: 23,
//   greet: function() {
//     console.log('Greet');    
//   }
// }) 

// Object.prototype.rustam = function() {
//   console.log('Rustam');  
// }

// let Diana = new String("sd")

// function ttt() {
//     console.log(this);    
// }

// let person = {
//     name: "FFF",
//     sayHello: ttt
// }

// let person2 = {
//     name: 'Ura',
//     city: 'Ufa',
//     job: 'MVD',
//     func: ttt,
//     logInfo: function() {
//         console.log(`name is ${this.name}`);
//         console.log(`city is ${this.city}`);        
//     }
// }

// let person3 = {
//     name: 'Lena',
//     city: 'Kyiv'
// }

// person2.logInfo.bind(person3)()

// console.log(person3);


function one(){
    console.log('one');
    
}
function two(){
    one()
    console.log('two');
}
function three(){
    two()
    console.log('three');
}

// three()

function factorial(n) {
    if(n<2) {
        return 1
    }
    return console.log(n * factorial(n-1))
}

factorial(50)

console.log('1'); // Sync

setTimeout(() => console.log('2'), 0); // Macrotask

Promise.resolve().then(() => console.log('3')); // Microtask

console.log('4'); // Sync

// Output order: 1, 4, 3, 2
