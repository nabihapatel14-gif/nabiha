function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const actions = document.createElement("div");
    actions.className = "actions";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = function () {
        editTask(span);
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        li.remove();
    };

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function editTask(span) {
    const newTask = prompt("Edit your task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
        span.textContent = newTask;
    }
}