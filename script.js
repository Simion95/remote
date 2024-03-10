let addTaskButton = document.querySelector('.add-task-button');
let tasksContainer = document.querySelector('.tasks-container');
let input = document.querySelector('.task-input');
let requiredField = document.querySelector('.required-field');
let clearTasksButton = document.querySelector('.clear-tasks-button')


let addTaskFunction = () => {

    requiredField.style.display = 'none';

    if (input.value === '') {
        requiredField.style.display = 'block';
        return;
    };

    let newTask = document.createElement('li');
    newTask.style = "cursor: pointer;";

    let p = document.createElement('p');
    p.innerText = input.value;

    newTask.addEventListener("click", () => { 
        p.style.textDecoration = "line-through";
    });
    

    let img = document.createElement('img');
    img.setAttribute('src', './images/delete.svg');

    img.addEventListener('click', () => {
       tasksContainer.removeChild(newTask);
       comutaClearTasksButton();
    });

    newTask.appendChild(p);
    newTask.appendChild(img);

    tasksContainer.appendChild(newTask);
    comutaClearTasksButton();

    // newTask.innerHTML = `
    //     <p> ${input.value} </p>
    //     <img src="./images/delete.svg" />
    // `;

    input.value = '';
};

let clearTasksFunction = () => {
    tasksContainer.innerHTML = '';
    comutaClearTasksButton();
};

let comutaClearTasksButton = () => {
    clearTasksButton.style.display = tasksContainer.children.length > 1 ? 'block' : 'none';
};

addTaskButton.addEventListener('click', addTaskFunction);
clearTasksButton.addEventListener('click', clearTasksFunction);