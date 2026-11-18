

const CACHE_NAME = 'history-v2';

const FILES = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/script.js',
    '/manifest.json',
    '/img/photo.jpg',
    '/img/images1.jpg',
    '/img/images2.jpg',
    '/img/images3.jpg',
    '/img/images4.jpg',
    '/img/images5.jpg',
    '/img/images6.jpg',
    '/img/images7.jpg'
];


self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(FILES);
        })
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
