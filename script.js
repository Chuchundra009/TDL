const writeText = document.querySelector('#writeText');
const pressBtn = document.querySelector('#pressBtn');
const ul = document.querySelector('.div__list-ul');

function createTask() {
    const taskText = writeText.value;
    const newLi = document.createElement('li');
    newLi.textContent = taskText;
    ul.append(newLi);
    writeText.value = '';
}

function checkTask(evt) {
    if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('active');
    }
}

pressBtn.addEventListener("click", createTask);

ul.addEventListener("click", checkTask);

