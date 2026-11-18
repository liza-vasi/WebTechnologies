
# WebTechnologies

# 932321.Vasilyeva.Elizaveta.lab6

Вариант 19 — Генератор Lorem Ipsum

## Описание

Лабораторная работа №6. Создание сервера на Node.js и Express.

## Реализованные функции

- Запуск сайта через Express.
- Маршруты `/`, `/about`, `/api/status`.
- Генератор текста `/api/lorem`.
- Параметры `words` и `paragraphs`.
- Проверка введённых параметров.
- `manifest.json` и Service Worker.
- Работа сайта без интернета.

## Запуск

1. Установить Node.js.
2. Выполнить `npm install`.
3. Запустить сервер командой `node server.js`.
4. Открыть http://localhost:3000.

## Пример запроса

http://localhost:3000/api/lorem?words=10&paragraphs=2
