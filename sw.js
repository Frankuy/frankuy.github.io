const cacheName = "cache-v1"
const resourcesToPrecache = [
    '/',
    'index.html',
    'styles/main.css',
    'scripts/main.js',
    'images/icon.svg',
]


self.addEventListener('install', event => {
    console.log("Install event")
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(resourcesToPrecache)
            })
    )
})

self.addEventListener('activate', event => {
    console.log('Activate event')
})

self.addEventListener('fetch', event => {
    console.log("Fetch event")
    event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            return cachedResponse || fetch(event.request)
        })
    )
})