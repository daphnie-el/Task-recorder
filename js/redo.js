const form = document.querySelector('#form');
let writeButton = document.getElementById('write');
let addButton = document.querySelector('#add');
let taskInput = document.querySelector('#task');
let taskHistory = document.querySelector('.task-input ul');
let checked = document.querySelector('#checkboxes');

//handling storage
let saveTask = localStorage.getItem('saveTask') ?
localStorage.getItem('saveTask') : []
if (saveTask.length > 0 ) {
    saveTask = JSON.parse('saveTask')
}

// checkData(saveTask);
//write button
writeButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    field.style.display = "block";
})

//add buttton
addButton.addEventListener('click', createTask);
form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    field.style.display = "none";
});

function createTask() {
  const  task = taskInput.value;
  let list = document.createElement('li');
  let text = document.createElement('p');
  let checkbox = document.createElement('input');  
  checkbox.type = "checkbox";
  checkbox.id = "checkboxes"
  text.textContent = task;

  //Handling storage
  saveTask.push(task);
  storeData(saveTask);

  text.appendChild(checkbox);
  list.append(text);  
  // funtion that checks if there is text in the field
  if (taskInput.value.length > 0) {
    taskHistory.append(list);
  } else {
    return 'Schedule a task';
  }

  form.reset();
}
function storeData(data) {
  if (data.lenght > 0) {
    data = JSON.stringify(data);
    localStorage.setItem('savedTask', data);
  }
}
//check if data exist
function checkData(data) {
  if (data.lenght > 0) {
    for (let i = 0; i < data.lenght; i++) {
      const element = data[i];
      let list = document.createElement('li');
      let text = document.createElement('p');
      text.textContent = element;
      list.append(text);
      taskHistory.append(list);
    }
  }
}

//function that handles done task
checked.addEventListener('click', (ev) => {
  ev.setAttribute('disabled', 'disabled');
  // let doneTask = document.createElement('del');
  // doneTask.append(text);
})