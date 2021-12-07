/* eslint-disable */

if (workbox) {
  workbox.precaching.precacheAndRoute(self.__precacheManifest)
  workbox.routing.registerNavigationRoute("/index.html")
}

self.addEventListener("message", (event) => {
  if (event.data) {
    switch (event.data) {
      case "updatePlease":
        self.skipWaiting();
        break;
      default:
        break;
    }
  }
})


const cacheVersion = "v1";

const staticAssets = [
    "/index.html",
    "/main.js",
    "/favicon.ico",
    "/img/icons/logo-192x192.png",
    "/img/icons/list.png",
    "/views/Users.vue"
];

self.addEventListener("install", (event) => {
    console.log("[service-worker] installation")
    self.skipWaiting()
    event.waitUntil(
        caches.open('static-assets'+cacheVersion)
        .then((cache) => {
            return cache.addAll(staticAssets)
        })
    )
})

self.addEventListener("activate", (event) => {
    console.log("[service-worker] activation")
    event.waitUntil(
        caches.keys().then((keys) => {
            keys.maps((cacheName) => {
                if(cacheName.indexOf(cacheVersion) < 0){
                    return caches.delete(cacheName)
                }
            })
        })
    )
})

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.open('static-assets'+cacheVersion).then((cache) => {
            return caches.match(event.request).then((response) => {
                if(response){
                    return response
                }
                else{
                    return fetch(event.request)
                }
            })
        })
     )
})

self.addEventListener("message", (event) => {
  if (event.data) {
    switch (event.data) {
      case "updatePlease":
        self.skipWaiting();
        break;
      default:
        break;
    }
  }
})