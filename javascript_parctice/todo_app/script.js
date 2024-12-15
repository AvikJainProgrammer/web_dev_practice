document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTask = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    // Function to create a new list item
    function createListItem(task) {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = task;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn btn-danger btn-sm';
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = function() {
            li.remove();
        };

        li.appendChild(removeBtn);
        return li;
    }

    // Event listener for adding a new task
    addTask.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task) {
            taskList.appendChild(createListItem(task));
            taskInput.value = ''; // Clear the input
        }
    });

    // Allow adding tasks with Enter key
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask.click();
        }
    });
});