Створи простий веб-сервер на базі Express.js, який буде виконувати такі вимоги:

1.  **Ініціалізація проєкту та встановлення Express.js**

-   Ініціалізуй новий проєкт командою `npm init -y`.
-   Встанови Express.js за допомогою `npm install express`.

1.  **Запуск сервера**

-   Створи файл `app.js` і налаштуй сервер так, щоб він слухав на порту 3000.

1.  **Реалізація маршрутів**
2.  **GET /**

-   Повертає текст: `Привіт з Express.js!`

1.  **GET /user/:id**

-   Повертає текст із підставленим `:id` (наприклад, "Користувач з ID: 123" при зверненні на `/user/123`).

1.  **POST /submit**

-   Використовуй `express.json()` для парсингу JSON-тіла запиту.
-   Отримай з тіла запиту (`req.body`) значення `name` та `email`.
-   Поверни відповідь у форматі: `"Отримано дані: Ім'я - NAME, Електронна пошта - EMAIL"`, підставивши відповідні значення.

1.  **Обробка помилок (middleware)**

-   Додай middleware, який виводить у консоль метод та URL кожного запиту.
-   Додай обробник помилок 404 (Not Found), щоб при зверненні до неіснуючого маршруту повертало відповідь `"Сторінка не знайдена"`.

1.  **Перевір роботу**

-   Запусти сервер командою `node app.js`.
-   У браузері чи через Postman перевір маршрути `GET /`, `GET /user/:id` та `POST /submit`.