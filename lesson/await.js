async function fetchTodo() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        if (!response.ok) {
            throw new Error("Ошибка загрузки данных");
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

fetchTodo();










async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");

        if (!response.ok) {
            throw new Error("Ошибка загрузки данных");
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

fetchPosts();