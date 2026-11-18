
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.send('Лабораторная работа №6. Вариант 19. Генератор Lorem Ipsum.');
});

app.get('/api/status', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Сервер работает'
    });
});

const loremWords = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet',
    'consectetur', 'adipiscing', 'elit', 'sed',
    'do', 'eiusmod', 'tempor', 'incididunt',
    'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua'
];

app.get('/api/lorem', (req, res) => {
    const words = Number(req.query.words);
    const paragraphs = Number(req.query.paragraphs);

    if (!Number.isInteger(words) || !Number.isInteger(paragraphs) ||
        words < 1 || paragraphs < 1 || words > 500 || paragraphs > 20) {
        return res.status(400).json({
            error: 'Укажите words от 1 до 500 и paragraphs от 1 до 20'
        });
    }

    const result = [];

    for (let i = 0; i < paragraphs; i++) {
        const paragraph = [];

        for (let j = 0; j < words; j++) {
            const index = Math.floor(Math.random() * loremWords.length);
            paragraph.push(loremWords[index]);
        }

        result.push(paragraph.join(' '));
    }

    res.json({ paragraphs: result });
});

app.listen(PORT, () => {
    console.log('Сервер запущен: http://localhost:3000');
});
