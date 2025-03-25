const fs = require('fs');
const path = require('path');

const editorConfigContent = `
# EditorConfig помогает разработчикам поддерживать единый стиль кода
# между разными редакторами и IDE. Документация: https://editorconfig.org

root = true # Применять настройки ко всем файлам в проекте и его поддиректориях

[*] # Настройки для всех файлов
indent_style = space # Использовать пробелы вместо табов
indent_size = 2 # Размер отступа - 2 пробела
end_of_line = lf # Линукс-стиль переноса строк (LF)
charset = utf-8 # Кодировка файлов
trim_trailing_whitespace = true # Удалять пробелы в конце строк
insert_final_newline = true # Добавлять пустую строку в конце файла

[*.md] # Особые настройки для Markdown-файлов
trim_trailing_whitespace = false # Не удалять пробелы в конце строк (важно для Markdown)
`;

const prettierJsConfigContent = `// Конфигурация Prettier
// Документация: https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 80, // Максимальная длина строки перед переносом
  tabWidth: 2, // Размер отступа в пробелах
  useTabs: false, // false = пробелы, true = табы
  semi: true, // Точки с запятой в конце выражений
  singleQuote: true, // Одинарные кавычки вместо двойных
  trailingComma: 'all', // Запятые после последнего элемента (в объектах/массивах)
  bracketSpacing: true, // Пробелы между скобками и содержимым: { foo: bar }
  arrowParens: 'always', // Всегда оборачивать аргументы стрелочных функций в скобки
  endOfLine: 'lf', // Линукс-стиль переноса строк (\\n)
};
`;

// Функция для создания файла
function createConfigFile(filename, content) {
  const filePath = path.join(process.cwd(), filename);

  fs.writeFile(filePath, content.trim(), (err) => {
    if (err) {
      console.error(`Ошибка при создании файла ${filename}:`, err);
    } else {
      console.log(`Файл ${filename} успешно создан`);
    }
  });
}

// Создаем файлы
createConfigFile('.editorconfig', editorConfigContent);
createConfigFile('.prettierrc.js', prettierJsConfigContent);
