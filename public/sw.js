// sw.js

const CACHE_NAME = "my-app-cache-v1"
const OFFLINE_PAGE = "/offline.html"

const ASSETS_TO_CACHE = [
	"/",
	"/index.html",
	OFFLINE_PAGE,
	"/favicon.ico",
	"/manifest.json",
]

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(ASSETS_TO_CACHE)
		}),
	)
	self.skipWaiting()
})

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) =>
				Promise.all(
					keys
						.filter((key) => key !== CACHE_NAME)
						.map((key) => caches.delete(key)),
				),
			),
	)
	self.clients.claim()
})

self.addEventListener("fetch", (event) => {
	const request = event.request

	if (request.method !== "GET") return

	// Handle page navigation
	if (request.mode === "navigate") {
		event.respondWith(fetch(request).catch(() => caches.match("/offline.html")))
		return
	}

	// Handle assets (favicon, css, js, images)
	event.respondWith(
		caches.match(request).then((cachedResponse) => {
			if (cachedResponse) return cachedResponse

			return fetch(request).then((networkResponse) => {
				return caches.open(CACHE_NAME).then((cache) => {
					cache.put(request, networkResponse.clone())
					return networkResponse
				})
			})
		}),
	)
})
