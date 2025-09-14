function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskInput.value}</span>
        <button onclick="removeTask(this)">❌</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}

function toggleTask(task) {
    task.parentElement.classList.toggle("completed");
}

