async function fetchData() {
    try {
        console.log("Запрос 1: Получение пользователей");
        const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await usersResponse.json();
        console.log("Пользователи получены:", users);

        console.log("Запрос 2: Получение постов первого пользователя");
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);
        const posts = await postsResponse.json();
        console.log("Посты первого пользователя:", posts);

        console.log("Запрос 3: Получение комментариев к первому посту");
        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`);
        const comments = await commentsResponse.json();
        console.log("Комментарии к первому посту:", comments);

    } catch (error) {
        console.error("Ошибка при выполнении:", error);
    }
}

fetchData();






async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error("Ошибка", error)
    }
}

fetchTodo();








async function createPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error("Ошибка", error);
    }
}

createPost();





async function fetchUrls(urls) {
    try {
        const requests = urls.map(url => fetch(url).then(response => response.json()));

        const results = await Promise.all(requests);

        return results;
    } catch (error) {
        console.error("Ошибка", error);
        return [];
    }
}

const urls = [
    "https://jsonplaceholder.typicode.com/todos",
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/users",
];

fetchUrls(urls).then(results => console.log(results));





async function fetchSequentially(urls) {
    const results = [];

    for (const url of urls) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            results.push(data);
        } catch (error) {
            console.error(`Ошибка ${url}:`, error);
            results.push(null);
        }
    }

    return results;
}


const urls = [
    "https://jsonplaceholder.typicode.com/todos",
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/users",
];

fetchSequentially(urls).then(results => console.log(results));








async function fetchWithInterval(urls, maxAttempts = 10, interval = 5000) {
    let attempt = 0;

    const fetchData = async () => {
        attempt++;
        console.log(`Попытка ${attempt}...`);

        try {
            const responses = await Promise.all(urls.map(url => fetch(url)));
            const data = await Promise.all(responses.map(res => res.json()));

            console.log("Данные получены:", data);
            return data;
        } catch (error) {
            console.error("Ошибка", error);
            return null;
        }
    };

    const intervalId = setInterval(async () => {
        const result = await fetchData();

        if (!result || attempt >= maxAttempts) {
            console.log("Остановить");
            clearInterval(intervalId);
        }
    }, interval);
}

const urls = [
    "https://jsonplaceholder.typicode.com/todos",
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/users",
];

fetchWithInterval(urls);






async function fetchFastest(urls) {
    try {
        const response = await Promise.race(urls.map(url => fetch(url)));
        const data = await response.json();

        console.log("Первый ответ", data);
        return data;
    } catch (error) {
        console.error("Ошибка", error);
        return null;
    }
};

const urls = [
    "https://jsonplaceholder.typicode.com/todos",
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/users",
];

fetchFastest(urls);