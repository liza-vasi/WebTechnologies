// Лабораторная №5. Вариант 19
const list = document.getElementById('timeline-list');
const addButton = document.getElementById('add-event');
const hideButton = document.getElementById('toggle-timeline');
const themeButton = document.getElementById('theme-button');
const timeline = document.querySelector('#timeline');

if (list && addButton && hideButton && themeButton && timeline) {
    let events = JSON.parse(localStorage.getItem('events19')) || [
        { date: '1703 год', name: 'Основание Санкт-Петербурга' }
    ];

    function showEvents() {
        list.innerHTML = '';
        events.forEach((event, index) => {
            const card = document.createElement('article');
            card.className = 'timeline-event';
            const text = document.createElement('p');
            text.textContent = event.date + ' — ' + event.name;
            const button = document.createElement('button');
            button.textContent = 'Удалить';
            button.onclick = () => {
                events.splice(index, 1);
                saveEvents();
            };
            card.append(text, button);
            list.appendChild(card);
        });
    }

    function saveEvents() {
        localStorage.setItem('events19', JSON.stringify(events));
        showEvents();
    }

    addButton.onclick = () => {
        const date = prompt('Дата события:');
        if (!date || !date.trim()) return;
        const name = prompt('Название события:');
        if (!name || !name.trim()) return;
        events.push({ date: date.trim(), name: name.trim() });
        saveEvents();
    };

    hideButton.onclick = () => {
        list.classList.toggle('hidden');
        const hidden = list.classList.contains('hidden');
        hideButton.textContent = hidden ? 'Показать хронологию' : 'Свернуть хронологию';
        localStorage.setItem('timelineHidden', hidden);
    };

    themeButton.onclick = () => {
        document.body.classList.toggle('theme-dark');
        const dark = document.body.classList.contains('theme-dark');
        themeButton.textContent = dark ? 'Светлая тема' : 'Тёмная тема';
        localStorage.setItem('historyTheme', dark ? 'dark' : 'light');
    };

    if (localStorage.getItem('historyTheme') === 'dark') {
        document.body.classList.add('theme-dark');
        themeButton.textContent = 'Светлая тема';
    }
    if (localStorage.getItem('timelineHidden') === 'true') {
        list.classList.add('hidden');
        hideButton.textContent = 'Показать хронологию';
    }
    showEvents();
    console.log('Событий:', document.querySelectorAll('.timeline-event').length);
} else {
    console.error('Не найдены элементы хронологии');
}
