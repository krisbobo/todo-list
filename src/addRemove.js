const task = document.querySelector('.input-container');
const handleTask = document.querySelector('.todo-input');
const userInterface = document.querySelector('list');

let todos = JSON.parse(localStorage.getItem('todo-list'));
const showToDo = () => {
  let li = '';
  if (todos) {
    todos.forEach((todo, id) => {
      li += `<li class="items">
      <div class="check">
        <label for="${id}">
          <input type="checkbox" id="${id}" />
          <p>${todo.description}</p>
        </label>
      </div>
      <div class="icon">
      <i class="fa-solid fa-trash" id="${todo.index}"></i>
      </div>
    </li>`;
    });
  }
  userInterface.innerHTML = li;
};
showToDo();

task.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInput = handleTask.value.trim();
  handleTask.value = '';
  if (!userInput) return;
  if (!todos) {
    todos = [];
  }
  const userTask = {
    description: userInput,
    completed: false,
    index: todos.length,
  };
  todos.push(userTask);
  localStorage.setItem('todo-list', JSON.stringify(todos));
  showToDo();
});

const taskRemoval = (index) => {
  const newArr = todos.filter((element) => element.index !== index);
  todos.length = 0;
  let i = 0;
  newArr.forEach((element) => {
    element.index = i;
    i += 1;
  });

  todos.push(...newArr);
  localStorage.setItem('todo-list', JSON.stringify(todos));
  showToDo();
};

userInterface.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-solid')) {
    const index = parseInt(e.target.getAttribute('id'), 10);
    taskRemoval(index);
  }
});