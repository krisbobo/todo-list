// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

const toDoListData = [
  {
    description: 'Commit to GitHub',
    completed: false,
    index: 1,
  },
  {
    description: 'Solve hackerrank challenge',
    completed: true,
    index: 2,
  },
  {
    description: 'Read a novel',
    completed: false,
    index: 3,
  },
  {
    description: 'Check on my friends',
    completed: false,
    index: 4,
  },
];

const info = () => {
  const content = document.querySelector('.list');
  for (let i = 0; i < toDoListData.length; i += 1) {
    const todo = document.createElement('li');
    todo.classList.add('list-info');
    todo.innerHTML = `
       <div class="check">
  <input type="checkbox">
  <h2>${toDoListData[i].description}</h2>
  </div>
  <div class="icon">
  <i class="fa-solid fa-ellipsis-vertical"></i>
  </div>
    `;
    content.appendChild(todo);
  }
};

info();