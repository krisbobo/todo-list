import listClear from './listclearing';

const task = document.querySelector('.input-container');
const handleTask = document.querySelector('.todo-input');
const userInterface = document.querySelector('list');
const clear = document.querySelector('.btn-clear');

let todos = JSON.parse(localStorage.getItem('todo-list'));
const showToDo = () => {
  let li = '';
  if (todos) {
    todos.forEach((todo) => {
      const flagged = todo.completed ? 'checked' : '';
      li += `<li class="items">
      <div class="check">
        <label for="">
          <input type="checkbox" ${flagged} class="check" data-check="${todo.index}">
          <input type="text" class="todo-input style" data-desc="${todo.index}" value="${todo.description}">
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

const update = (e) => {
  const clicked = e.target.closest('.todo-input');
  if (!clicked) return;
  clicked.addEventListener('keyup', () => {
    const task = JSON.parse(localStorage.getItem('todo-list')) || [];
    const targetData = parseInt(clicked.getAttribute('data-desc'), 10);
    const update = task.find((todo) => todo.index === targetData);
    update.description = clicked.value.trim();
    localStorage.setItem('todo-list', JSON.stringify(task));
  });
};

userInterface.addEventListener('click', update);

clear.addEventListener('click', () => {
  const setting = JSON.parse(localStorage.getItem('todo-list')) || [];
  const notCompleted = setting.filter((todo) => !todo.completed);
  todos.length = 0;
  let i = 0;
  notCompleted.forEach((element) => {
    element.index = i;
    i += 1;
  });

  todos.push(...notCompleted);
  localStorage.setItem('todo-list', JSON.stringify(todos));
  showToDo();
});

userInterface.addEventListener('click', listClear);