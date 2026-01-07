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


const numbers = [1, 5, 10, 15, 20]
const newNumbers = numbers.map( n => n+10)
// console.log(newNumbers) // [11, 15, 20, 25, 30] ⬅️ Итоговый результат

const names = ["Alice", "Bob", "Charlie", "Diana"]
const nameInfo = names.map( (n) => {
   return {
    name: n,
    length: n.length
  }
}
 
)
// console.log(nameInfo)
// ⬇️ Итоговый результат
// [
//   { name: 'Alice', length: 5 },
//   { name: 'Bob', length: 3 },
//   { name: 'Charlie', length: 7 },
//   { name: 'Diana', length: 5 }
// ]

const products = [
  { name: 'Laptop', price: 1000},
  { name: 'Mouse', price: 50},
  { name: 'Keyboard', price: 80},
]

const productsWithFinalPrice = products.map(
  (p) => {
    return {...p, finalPrice: (p.price-(p.price * 0.15))}
  }
)

// console.log(productsWithFinalPrice);

const employees = [
  {name: 'Alice', salary: 50000, experience: 3},
  {name: 'Bob', salary: 60000, experience: 5},
  {name: 'Charlie', salary: 45000, experience: 2},
]

const employeesWithTotal = employees.map(
  e => {
    return {...e, totalSalary: e.salary + (e.salary * (0.05 * e.experience)) }
  }
)

console.log(employeesWithTotal);

