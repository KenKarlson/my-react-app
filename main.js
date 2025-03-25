const fs = require("fs");
const path = require("path");

// Содержимое для .editorconfig
const editorConfigContent = `
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
`;

// Содержимое для .prettierrc.json
const prettierConfigContent = `{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "lf"
}
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
createConfigFile(".editorconfig", editorConfigContent);
createConfigFile(".prettierrc.json", prettierConfigContent);
