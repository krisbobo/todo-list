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