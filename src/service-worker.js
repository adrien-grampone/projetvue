/* eslint-disable */

if (workbox) {
  workbox.precaching.precacheAndRoute(self.__precacheManifest)
  workbox.routing.registerNavigationRoute("/index.html")
  workbox.routing.registerRoute(
    ({ url }) => url.origin == "https://random-data-api.com" && url.pathname.startsWith("/api/user"),
    new workbox.strategies.NetworkFirst({cacheName: "cache-api-call"})
  )
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
