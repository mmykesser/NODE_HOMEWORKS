## **🔹 Завдання 1: Налаштування MongoDB**

1.  **Запусти MongoDB Compass та створіть базу** `**shopDB**`**.**
2.  **Створи колекцію** `**products**`**.**
3.  **Додай вручну 3 товари** у вигляді JSON-документів:



        Copy code
      

      `json CopyEdit {   "name": "iPhone 15",   "price": 1200,   "category": "electronics",   "stock": 10 }`


> **Формат здачі:** скріншот створеної бази даних у Compass.

## **🔹 Завдання 2: Створення Node.js API з MongoDB**

Створи **Node.js API** для роботи з товарами (`products`), яке дозволяє виконувати **CRUD**\-операції.

### **📌 Вимоги:**

✅ **Окремі файли** для:

-   Підключення до **MongoDB** (`config/db.js`)
-   **Моделі товару** (`models/productModel.js`)
-   **CRUD-контролера** (`controllers/productController.js`)
-   **Маршрутів** (`routes/productRoutes.js`)
-   **Серверу Express** (`server.js`)

✅ **Операції API:**

1.  🔹 `GET /api/products` – отримати всі товари
2.  🔹 `GET /api/products/:id` – отримати один товар
3.  🔹 `POST /api/products` – створити товар
4.  🔹 `PUT /api/products/:id` – оновити товар
5.  🔹 `DELETE /api/products/:id` – видалити товар

✅ **Використовувати:**

-   **Express.js** для створення сервера
-   **Mongoose** для роботи з MongoDB
-   **dotenv** для збереження URI підключення
