1. Встановити Node.js
Завдання: Переконайтеся, що на вашому комп’ютері встановлена актуальна версія Node.js. Якщо ні – встановіть її з офіційного сайту Node.js.
Результат: Після встановлення Node.js у командному рядку (Terminal/Command Prompt) має коректно працювати команда:
Copy code
bash
Copy code
node -v
яка виведе версію Node.js, а також команда:
Copy code
bash
Copy code
npm -v
яка виведе версію npm (Node Package Manager).
2. Створити простий Node.js скрипт
Створити нову теку (папку) для вашого проєкту (наприклад, node-basics).
Ініціалізувати npm у цій теці за допомогою команди:
Copy code
bash
Copy code
npm init -y
Це створить файл package.json з початковими налаштуваннями.
Створити файл app.js із простим кодом на Node.js, наприклад:
Copy code
js
Copy code
console.log("Привіт з Node.js!");
Запустити файл app.js командою:
Copy code
bash
Copy code
node app.js
Переконатися, що в консолі виводиться текст:
Copy code
Copy code
Привіт з Node.js!


3. Використати модуль fs для читання файлу (додаткове завдання)
Створити файл data.txt та написати в ньому будь-який текст українською мовою.
Відредагувати app.js так, щоб він за допомогою вбудованого модуля fs прочитав файл data.txt і вивів його вміст у консоль.
Copy code
js
Copy code
const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Помилка читання файлу:", err);
    return;
  }
  console.log("Вміст файлу data.txt:", data);
});
Запустити:
Copy code
bash
Copy code
node app.js
і перевірити, чи з’являється вміст файлу data.txt у консолі.

4. Зберегти проєкт на GitHub 
Створити новий репозиторій на GitHub.
Завантажити туди свій локальний проєкт (файли package.json, app.js, data.txt та .gitignore, якщо він потрібен).
Перевірити, що репозиторій містить усі необхідні файли.
