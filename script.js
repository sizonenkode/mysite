document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Создаем элемент уведомления
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = 'Бронирование успешно выполнено!';
    
    // Добавляем уведомление на страницу
    document.body.appendChild(notification);

    // Убираем уведомление через 3 секунды
    setTimeout(() => {
        notification.remove();
    }, 3000);
});
