document.addEventListener('DOMContentLoaded', function () {
    const penButton = document.querySelector('.pen');
    const popup = document.getElementById('popup');
    const popupContent = document.querySelector('.popup-content');
    const cancelButton = document.getElementById('cancel-task');
    const addButton = document.getElementById('add-task');
    const taskNameInput = document.getElementById('task-name');
    const taskDateInput = document.getElementById('task-date');
    const taskReminderInput = document.getElementById('task-reminder');
    const eventsContainer = document.querySelector('.events');
    const searchInput = document.querySelector('.search input');

    const allButton = document.getElementById('but1');
    const activeButton = document.getElementById('but2');
    const completedButton = document.getElementById('but3');

    loadTasks();

    penButton.addEventListener('click', function () {
        popup.style.display = 'flex';
        setTimeout(() => {
            popupContent.style.transform = 'translateY(0)';
        }, 10);
    });

    cancelButton.addEventListener('click', function () {
        popupContent.style.transform = 'translateY(100%)';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    });

    addButton.addEventListener('click', function () {
        const taskName = taskNameInput.value.trim();
        const taskDate = taskDateInput.value;
        const reminder = taskReminderInput.checked;

        if (taskName && taskDate) {
            const taskObj = {
                id: Date.now(),
                name: taskName,
                date: taskDate,
                reminder: reminder,
                completed: false
            };

            saveTask(taskObj);
            renderTasks();

            taskNameInput.value = '';
            taskDateInput.value = '';
            taskReminderInput.checked = false;

            popupContent.style.transform = 'translateY(100%)';
            setTimeout(() => {
                popup.style.display = 'none';
            }, 300);
        }
    });

    searchInput.addEventListener('input', function () {
        const searchText = searchInput.value.toLowerCase();
        filterTasksBySearch(searchText);
    });

    function filterTasksBySearch(query) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(query));
        renderTasks("all", filteredTasks);
    }

    function saveTask(task) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        renderTasks();
    }

    function renderTasks(filter = "all", customTasks = null) {
        eventsContainer.innerHTML = '';
        const tasks = customTasks || JSON.parse(localStorage.getItem('tasks')) || [];

        tasks.forEach(task => {
            if (filter === "active" && task.completed) return;
            if (filter === "completed" && !task.completed) return;

            const eventElement = document.createElement('div');
            eventElement.classList.add('event');
            eventElement.dataset.id = task.id;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('input-date');
            checkbox.checked = task.completed;

            checkbox.addEventListener('change', function () {
                updateTaskStatus(task.id, checkbox.checked);
                renderTasks(filter);
            });

            const eventDetails = document.createElement('div');
            eventDetails.classList.add('event-details');

            const dateElement = document.createElement('strong');
            dateElement.classList.add('text-date');
            dateElement.textContent = `${task.date} ${task.reminder ? '(С напоминанием)' : ''}`;

            const taskElement = document.createElement('strong');
            taskElement.classList.add('text-date');
            taskElement.textContent = task.name;

          
            if (task.completed) {
                taskElement.style.textDecoration = "line-through";
                taskElement.style.opacity = "0.6";
                dateElement.style.textDecoration = "line-through";
                dateElement.style.opacity = "0.6";
            }

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-btn');
            deleteButton.textContent = '✖';
            deleteButton.addEventListener('click', function () {
                deleteTask(task.id);
                renderTasks(filter);
            });

            eventDetails.appendChild(dateElement);
            eventDetails.appendChild(taskElement);
            eventElement.appendChild(checkbox);
            eventElement.appendChild(eventDetails);
            eventElement.appendChild(deleteButton);

            eventsContainer.appendChild(eventElement);
        });

        updateButtonStyles(filter);
    }

    function updateTaskStatus(id, completed) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = completed;
            }
            return task;
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function deleteTask(id) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task.id !== id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function updateButtonStyles(activeFilter) {
        const buttons = [allButton, activeButton, completedButton];
        buttons.forEach(button => {
            if (button.id === `but${activeFilter === "all" ? 1 : activeFilter === "active" ? 2 : 3}`) {
                button.style.backgroundColor = "rgb(248, 215, 248)";
                button.textContent = `✔ ${button.textContent.replace("✔ ", "")}`;
            } else {
                button.style.backgroundColor = "";
                button.textContent = button.textContent.replace("✔ ", "");
            }
        });
    }

    allButton.addEventListener('click', () => renderTasks("all"));
    activeButton.addEventListener('click', () => renderTasks("active"));
    completedButton.addEventListener('click', () => renderTasks("completed"));
});