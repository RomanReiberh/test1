async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error("Ошибка загрузки пользователей");

        const users = await response.json();

     
        renderUsers(users);
    } catch (error) {
        console.error("Ошибка:", error);
        document.getElementById('user-list').innerHTML = "<p>Не удалось загрузить пользователей</p>";
    }
}

function renderUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = "";

    users.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>${user.username} (ID: ${user.id})</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Город:</strong> ${user.address.city}</p>
            <p><strong>Телефон:</strong> ${user.phone}</p>
            <p><strong>Компания:</strong> ${user.company.name}</p>
        `;
        userList.appendChild(card);
    });
}
fetchUsers();
