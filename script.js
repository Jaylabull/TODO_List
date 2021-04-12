const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

// Checking Local Storage
const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {

    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) =>{

    e.preventDefault()

    addTodo()
}) 

// Dom Functionality
function addTodo(todo) {

    let todoInput = input.value

    if(todo) {
        todoInput = todo.text
    }
   
    if (todoInput) {

        const todoEle = document.createElement('li')

        if (todo && todo.completed){

            todoEle.classList.add('completed')
        }
        todoEle.innerText = todoInput

        todoEle.addEventListener('click', () => {

            todoEle.classList.toggle('completed')

            updateLS()
        })

        todoEle.addEventListener('contextmenu', (e) => {

            e.preventDefault()

            todoEle.remove()

            updateLS()
        })

        todosUL.appendChild(todoEle)

        input.value = ''

        updateLS()
    }
}

function updateLS() {

    todosEle = document.querySelectorAll('li')

    const todos = []

    todosEle.forEach(todoEl => {

        todos.push({

            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}