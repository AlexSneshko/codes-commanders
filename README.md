# codes-commanders: React Redux Toolkit TypeScript Project

## Запуск проекта

### Локальный запуск

1. Клонируйте репозиторий:
```bash
git clone https://github.com/AlexSneshko/codes-commanders.git
```

2. Перейдите в директорию проекта:
```bash
cd codes-commanders
```

3. Установите зависимости:
```bash
npm install
```

4. Запустите локальный сервер разработки:
```bash
npm start
```

Приложение будет доступно по адресу http://localhost:3000.

### Запуск с использованием Docker

1. Соберите Docker-образ:
```bash
docker build -t codes-commanders .
```

2. Запустите контейнер Docker:
```bash
docker run -p 3000:3000 codes-commanders
```

Приложение будет доступно по адресу http://localhost:3000.