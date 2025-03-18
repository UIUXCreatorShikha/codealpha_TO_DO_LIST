function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <span class="edit" onclick="editTask(this)">Edit</span>
            <span class="delete" onclick="deleteTask(this)">Delete</span>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function deleteTask(element) {
    element.parentElement.parentElement.remove();
}

function editTask(element) {
    let newText = prompt("Edit your task:", element.parentElement.parentElement.firstChild.textContent);
    if (newText !== null && newText.trim() !== "") {
        element.parentElement.parentElement.firstChild.textContent = newText;
    }
}
