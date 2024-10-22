const addTaskBtn = document.getElementById("add-task-btn");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

// Function to add new tasks
function addTask() {
    const taskText = taskInput.value;

    if (taskText !== "") {
        // Create a new list item (li)
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div>
                <input type="checkbox" class="complete-checkbox">
                <span class="task-text">${taskText}</span>
            </div>
            <button class="delete-btn">Delete</button>
        `;

        // Append the new task to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";

        // Add event listener for the delete button with confirmation
        const deleteBtn = listItem.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            const confirmDelete = confirm("Are you sure you want to delete this task?");
            if (confirmDelete) {
                taskList.removeChild(listItem);
            }
        });

        // Add event listener for the checkbox (mark task as complete)
        const checkbox = listItem.querySelector(".complete-checkbox");
        const taskTextSpan = listItem.querySelector(".task-text");

        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                taskTextSpan.classList.add("completed");
            } else {
                taskTextSpan.classList.remove("completed");
            }
        });
    } else {
        alert("Please enter a task!");
    }
}

// Event listener for Add Task button
addTaskBtn.addEventListener("click", addTask);

// Optional: Press Enter to add a task
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
