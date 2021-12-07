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
