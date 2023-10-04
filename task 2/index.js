const input = document.getElementById('input_task');
const taskText = input.value;

const addButton = document.getElementsByClassName('btn__add');
const clearButton = document.getElementsByClassName('btn__clear');

const listTask = document.getElementsByClassName('list__task');

function makeTask() {
    let newTask = document.createElement('li');
    newTask.textContent = input.value;
    listTask.append(newTask)
    input.value = "";
}
document.querySelector('.btn__add').addEventListener('click', makeTask);