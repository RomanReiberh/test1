document.addEventListener("DOMContentLoaded", async () => {
    var container = document.getElementById("container");
    var form = document.getElementById("form");
    var input = document.getElementById("input");


    async function fetchTodos() {
        try {
            const response = await fetch("https://dummyjson.com/todos");
            const data = await response.json();

            data.todos.forEach(todo => {
                createTodoElement(todo.todo, todo.completed);
            });
        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
        }
    }


    function createTodoElement(text, completed = false) {
        const div = document.createElement("div");
        div.classList.add("todo");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = completed;
        checkbox.addEventListener("change", () => {
            label.classList.toggle("todo__label--done", checkbox.checked);
        });

        const label = document.createElement("label");
        label.textContent = text;
        label.classList.add("todo__label");

        if (completed) {
            label.classList.add("todo__label--done");
        }

        div.appendChild(checkbox);
        div.appendChild(label);
        container.appendChild(div);
    }

  
    async function addTodo(text) {
        try {
            const response = await fetch("https://dummyjson.com/todos/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ todo: text, completed: false, userId: 1 })
            });

            if (!response.ok) {
                throw new Error("Ошибка при добавлении задачи!");
            }

            const newTodo = await response.json();
            createTodoElement(newTodo.todo, newTodo.completed);
        } catch (error) {
            console.error("Ошибка при добавлении задачи:", error);
        }
    }


    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const text = input.value.trim();
        if (text) {
            await addTodo(text);
            input.value = ""; 
        }
    });


    fetchTodos();
});




