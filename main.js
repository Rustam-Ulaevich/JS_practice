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


// function one(){
//     console.log('one');
    
// }
// function two(){
//     one()
//     console.log('two');
// }
// function three(){
//     two()
//     console.log('three');
// }

// // three()

// function factorial(n) {
//     if(n<2) {
//         return 1
//     }
//     return console.log(n * factorial(n-1))
// }

// factorial(50)

// console.log('1'); // Sync

// setTimeout(() => console.log('2'), 0); // Macrotask

// Promise.resolve().then(() => console.log('3')); // Microtask

// console.log('4'); // Sync

// // Output order: 1, 4, 3, 2


// let car = { model: "Toyota" };
// car = { model: "Honda" };
// let bike = car;
// bike = 

// // car = { model: "Honda" };
// // car.model = "Honda" 

// console.log(bike.model);

// function changeArray(arr) {
//   arr.push(100);  // [10, 20, 100]
  
//   3]; // [1, 2, 3, 200]
//   arr.push(200);
//   console.log(arr);
  
// }

// const numbers = [10, 20];
// changeArray(numbers);
// console.log(numbers);


// const obj1 = { value: 5 };
// const obj2 = { value: 5 };
// const obj3 = obj1;    //  { value: 5 };

// console.log(obj1 === obj2);  // false
// console.log(obj1 === obj3);  // true


// const original = {
//   name: "Kate",
//   address: { city: "Moscow" }
// };

// // const copy = original;
// const copy = {...original};
// copy.name = "Gulnara";
// copy.address.city = "SPB";

// console.log(original.name); //"Kate"
// console.log(original.address.city); // "SPB"



// let x = { count: 1 };

// function increment(obj) {
//   obj.count++;    //2
//   obj = { count: 10 };
//   obj.count++;  //11
// }

// increment(x);
// console.log(x.count);   //2

// let a = 5;
// let b = a;
// a = 6;


// let a = [1]; 
// let b = a; 
// a.push(2);

// let objects = [{ x: 1 }, { x: 2 }];

// for (let obj of objects) {
//   obj = { x: 999 };
//   console.log();
  
// }

// console.log(objects);


// let objects = [{ x: 1 }, { x: 2 }];

// for (let i = 0; i < objects.length; i++) {
//   objects[i] = { x: 999 };
// }

// console.log(objects);

// const a = { n: NaN };
// const b = { n: NaN };

// console.log(isNaN('u'))

// console.log(a.n === b.n); //true
// console.log(a === b); //false

// let str1 = "hello";
// let str2 = new String("hello");

// console.log(str1 === str2);
// console.log(str1 == str2);
// console.log(str1);
// console.log(str2);

// function createCounter() {
//   let obj = { count: 0 };
//   return function() {
//     obj.count++; //{ count: 1 }
//     return obj; //{ count: 1 }
//   };
// }

// const inc1 = createCounter();
// const inc2 = createCounter();

// console.log(inc1() === inc1());
// console.log(inc1() === inc2());
// console.log(inc1())
// console.log(inc2())

// let x = 5;
// let y = 10;
// [x, y] = [y, x];
// console.log(x, y); //10 5


// task 41

// function analyze(...items) {
//     const [first, ...rest] = items;   //first = {id: 42, name: 'Item'}, rest=['a', 'b']
//     const {length} = [...rest, 'bonus']; //length=3
//     const result = {
//         ...first,         //id: 42, name: 'Item'
//         count: length,    // count: 3
//     };

//     console.log(result);
// }

// console.log(analyze({id: 42, name: 'Item'}, 'a', 'b'));


// task 42

// let x = 5;
// let result = typeof (x + '10')

// console.log(result);


// task 43

// function createCounter() {
//     let count = 0;

//     return {
//         increment(){
//             count++;
//             return count;
//         },
//         decrement(){
//             count--;
//             return count;
//         },
//         getValue(){
//             return count;
//         }
//     };
// }

// const counter1 = createCounter();
// const counter2 = createCounter();

// counter1.increment(); // count = 1
// counter1.increment(); // count = 2
// counter2.increment(); // count = 1
// counter1.increment(); // count = 3

// console.log(counter1.getValue() + counter2.getValue());  // 3 + 1 = 4


// task 44

// function highlight(strings, ...values) {
//     return strings.reduce((result, str, i) => {
//         const value = values[i] ? `<span>${values[i]}</span>` : '';
//         return result + str + value;
//     }, '');
// }

// const language = 'JavaScript';
// const years = 10;

// const result = highlight`I have been coding in ${language} for ${years} years` ;

// console.log(result); //I have been coding in <span>JavaScript</span> for <span>10</span> years


// task 45

// setTimeout(() => console.log('Timeout 1'), 100);

// setTimeout(() => {
//     console.log('Timeout 2');
//     Promise.resolve().then(() => console.log('Promise in Timeout 2'));
// }, 50);

// Promise.resolve().then(() => console.log('Promise 1'));

// setTimeout(() => console.log('Timeout 3'), 150);

// console.log('Sync')          

// // 'Sync'  'Promise 1' 'Timeout 2' 'Promise in Timeout 2' 'Timeout 1' 'Timeout 3'


// task 46

// function factorial(n) {
//     let result = 1;
//     for (let i=n; i>1; i--){
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(111));


// task 47

// console.log('1');

// setTimeout(() => {
//     console.log('setTimeout 1');
//     Promise.resolve().then(() => {
//         console.log('promise setTimeout');        
//     })
    
// }, 0)

// setTimeout( () => {
//     console.log(('setTimeout 2'));    
// }, 0)

// Promise.resolve().then(() => {
//     console.log('promise 1');
// })

// Promise.resolve().then(() => {
//     console.log('promise 2');
// })

// console.log('4');

// //'1'  '4' 'promise 1' 'promise 2' 'setTimeout 1' 'promise setTimeout' 'setTimeout 2'


// task 48

// function processData(data) {
//     try {
//         if(!data) {
//             throw new TypeError('Data is required');
//         }
//         if (data.status === 'error') {
//             throw new Error('Invalid status');
//         }

//         return data.value.toUpperCase();
//     } catch (err) {
//         if (err instanceof TypeError) {
//             return 'TypeError';
//         }
//         return err.message;
//     }
// }

// console.log(processData({ status: 'error', value: 'test'}))
// console.log(processData(null))
 

// task 49

// const memoryLeak = () => {
//     const cache = new Map();
//     const weakCache = new WeakMap();

//     const objKey = {id: 123};
//     const data = {name: 'User data', value: 42};

//     const result = { 
//         map: cache.has(objKey),
//         weakMap: weakCache.has(objKey)
//     }

//     return result
// }

// console.log(memoryLeak());


// task 50

// const user = {
//   name: "John",
//   meta: { score: 100 }   // 999
// };
// const copy = Object.assign({}, user); 
// copy.meta.score = 999;       
// copy.name = "Bob";
// console.log(user.meta.score);   //999
// console.log(user.name);         //Jhon


// task 51

// function update(obj) {
//   obj.value = 42;
//   obj = { value: 100 };  
//   obj.value = 200;
// }
// const data = { value: 1 };
// update(data);
// console.log(data.value);  //42


// task 52

// let objects = [{ x: 1 }, { x: 2 }];
// for (let i = 0; i < objects.length; i++) {
//   objects[i] = { x: 999 };
// }
// console.log(objects);


// task 53

// const obj = Object.freeze({ value: 1 });
// const obj2 = obj;
// obj2.value = 2;
// console.log(obj.value);


// task 54

// const users = [ 
//     { name: "John", age: 25, active: true }, 
//     { name: "Jane", age: 17, active: false }, 
//     { name: "Bob", age: 30, active: true }, 
//     { name: "Alice", age: 16, active: true } 
// ];

// const old = users.filter( el => el.age >= 20 )
// console.log(old);

// const userPush = users.push({name: "Jocccchn", age: 225, active: false})

// console.log(userPush, 'userPush');
// console.log(users);

// const old2 = users.reduce( (acc, user ) => {
//     if(user.age >= 20 ){
//        acc.push(user) 
//     }
//     return acc
// }, [])


// task 55

const words = [
  'javascript', 'react', 'javascript', 'html', 
  'css', 'react', 'javascript', 'node', 'css'
];

const upWords = words.reduce( (acc, el) => {
  const copy = [...acc]
  copy.push(el.toUpperCase())
  return copy
}, [])

const longWORDS = words.reduce((acc, word) => {
  // Создаем новый массив: копируем старый и пишем в конец новое измененное слово
  const nextAcc = [...acc, word.toUpperCase()]; 
  return nextAcc;
}, [])


// const redObj = words.reduce( (acc, el) => {
//   acc[el] = (acc[el] || 0) + 1
 
//   return acc
// }, {})


const obj = {
  javascript: 3,
  react: 2,
  html: 1,
  css: 2,
  node: 1
}


console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const formData = {
  name: "Иван",
  email: "",
  phone: undefined,
  city: "Москва"
};

const cleanData = Object.fromEntries(
  Object.entries(formData).filter(([key, value]) => !value )
);

console.log(cleanData);

const formData = {
  name: "Иван",
  email: "",
  phone: undefined,
  city: "Москва"
};


const user = {
  id: 101,
  name: 'Иван',
  age: null, // это поле надо удалить
  role: 'admin',
  email: undefined // это поле тоже надо удалить
};

// Превращаем в массив пар, фильтруем через reduce и собираем обратно в объект
const cleanUser = Object.entries(user).reduce((acc, [key, value]) => {
  if (value !== null && value !== undefined) {
    acc[key] = value; // Наполняем чистый объект
  }
  return acc;
}, {});

console.log(1 && 5);
// Вывод: { id: 101, name: 'Иван', role: 'admin' }

const pricesInUSD = { apple: 2, banana: 1.5, orange: 3 };
const EXCHANGE_RATE = 90;

const pricesInRUB = Object.entries(pricesInUSD).reduce((acc, [fruit, price]) => {
  acc[fruit] = price * EXCHANGE_RATE;
  return acc;
}, {});

console.log(pricesInRUB);
// Вывод: { apple: 180, banana: 135, orange: 270 }
const stock = {
  notebooks: 5,
  pens: 120,
  pencils: 80,
  erasers: 15
};

const totalItems = Object.values(stock).reduce((acc, count) => acc + count, 0);

console.log(totalItems); // Вывод: 220
const serversArr = [
  { id: 'srv-1', ip: '192.168.1.1', status: 'online' },
  { id: 'srv-2', ip: '192.168.1.2', status: 'offline' }
];

const serversMap = serversArr.reduce((acc, server) => {
  acc[server.id] = server;
  return acc;
}, {});

console.log(serversMap['srv-1']); 
// Вывод: { id: 'srv-1', ip: '192.168.1.1', status: 'online' } (нашли мгновен