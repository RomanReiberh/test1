async function fetchUserPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/postss?userId=1");

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log("Посты пользователя:", data);
    } catch (error) {
        console.error("Произошла ошибка при получении данных:", error.message);
    }
}

fetchUserPosts();







function safeDivide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Деление на ноль невозможно!");
        }
        return a / b;
    } catch (error) {
        console.error("Ошибка:", error.message);
        return null;
    }
}

console.log(safeDivide(8, 2));
console.log(safeDivide(8, 0)); 
console.log(safeDivide(18, 3));