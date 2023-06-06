const cacheName = "cache-v1";
const resourcesToPrecache = [
  "/",
  "index.html",
  "styles/main.css",
  "scripts/main.js",
  "images/icon.svg",
  "fonts/Poppins/1.woff2",
  "fonts/Poppins/2.woff2",
  "fonts/Poppins/3.woff2",
  "fonts/Poppins/4.woff2",
  "fonts/Poppins/5.woff2",
  "fonts/Poppins/6.woff2",
  "fonts/Poppins/7.woff2",
  "fonts/Poppins/8.woff2",
  "fonts/Poppins/9.woff2",
  "fonts/Poppins/10.woff2",
  "fonts/Poppins/11.woff2",
  "fonts/Poppins/12.woff2",
];

self.addEventListener("install", (event) => {
  console.log("Install event");
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(resourcesToPrecache);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Activate event");
});

self.addEventListener("fetch", (event) => {
  console.log("Fetch event");
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
