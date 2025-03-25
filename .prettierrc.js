// Конфигурация Prettier
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
  endOfLine: 'lf', // Линукс-стиль переноса строк (\n)
};