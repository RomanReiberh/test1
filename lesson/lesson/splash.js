function createNotification(title, message, type) {
   
    const notification = document.createElement('div');
    notification.classList.add('notification', type);

  
    const titleElement = document.createElement('strong');
    titleElement.textContent = title;
    notification.appendChild(titleElement);
    
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    notification.appendChild(messageElement);
    

    document.body.appendChild(notification);

 
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

 
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 5000);
}


createNotification('Успех!', 'Ваш запрос был выполнен успешно.', 'success');
createNotification('Предупреждение!', 'Пожалуйста, проверьте введенные данные.', 'warning');
createNotification('Ошибка!', 'Что-то пошло не так. Попробуйте снова.', 'error');