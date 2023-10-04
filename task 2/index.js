const input = document.getElementById('input_task');
const taskText = input.value;

const addButton = document.getElementsByClassName('btn__add');
const clearButton = document.getElementsByClassName('btn__clear');

const list = document.getElementsByClassName('list');
const listTask = document.getElementsByClassName('list__task');

function makeTask() {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    listTask.append(newTask);
    taskText = "";
}
document.querySelector('.btn__add').addEventListener('click', makeTask);