// const tracks = [
//   {title: 'Music', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
//   {title: 'Music2', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'},
// ]

const tasks = [
  {title: 'Купить продукты на неделю', isDone: false},
  {title: 'Полить цветы', isDone: true},
  {title: 'Сходить на тренировку', isDone: false},
  ]

const rootEl = document.getElementById('root')

const titleH1 = document.createElement("h1")
titleH1.append('Список дел')
rootEl.append(titleH1)

const toDo = document.createElement('ul')

tasks.forEach( (task) => {
  console.log(task)

  const taskEl = document.createElement('li')

  const taskDiv = document.createElement('div')
  taskDiv.append(task.title)
  taskEl.append(taskDiv)

  const taskStatus = document.createElement('input')
  taskStatus.type = 'checkbox'
  taskStatus.checked = task.isDone
  taskEl.append(taskStatus)

  toDo.append(taskEl)

})

rootEl.append(toDo)
