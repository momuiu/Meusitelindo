// Função para carregar as tarefas salvas no localStorage
window.onload = function() {
    loadTasks();
}

// Função para adicionar uma nova tarefa
function addTask() {
    const input = document.getElementById('inputText');
    const task = input.value.trim();

    if (task !== "") {
        const taskList = getTasks();
        taskList.push(task);
        saveTasks(taskList);
        input.value = '';
        renderTasks();
    } else {
        alert('Por favor, insira uma tarefa.');
    }
}

// Função para salvar as tarefas no localStorage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Função para obter as tarefas do localStorage
function getTasks() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

// Função para carregar as tarefas e renderizá-las na lista
function loadTasks() {
    renderTasks();
}

// Função para renderizar as tarefas na lista
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    const tasks = getTasks();

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = task;
        li.appendChild(createDeleteButton(index));
        taskList.appendChild(li);
    });
}

// Função para criar um botão de deletar tarefa
function createDeleteButton(index) {
    const button = document.createElement('button');
    button.className = 'btn btn-danger btn-sm';
    button.textContent = 'Excluir';
    button.onclick = function() {
        deleteTask(index);
    };
    return button;
}

// Função para deletar uma tarefa
function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks();
}