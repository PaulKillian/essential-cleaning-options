// if ('serviceWorker' in navigator) {
// 	window.addEventListener('load', function () {
// 		navigator.serviceWorker.register('/service-worker.js').then(
// 			function (registration) {
// 				console.log('ServiceWorker registration successful with scope: ', registration.scope);
// 			},
// 			function (err) {
// 				console.log('ServiceWorker registration failed: ', err);
// 			}
// 		);
// 	});
// }

// var CACHE_NAME = 'my-site-cache-v1';
// var urlsToCache = ['/', '/reviews', '/estimate', '/auto-detailing', '/contact', '/carpet-gallery', '/upholstrey-gallery',
// 									'/main.js', '/3.main.js', '/0.main.js', '/14.main.js', '/5.main.js', '/10.main.js', '/9.main.js', '/11.main.js'];

// self.addEventListener('fetch', function (event) {
// 	event.respondWith(
// 		caches.match(event.request).then(function (response) {
// 			// Cache hit - return response
// 			if (response) {
// 				return response;
// 			}

// 			return fetch(event.request).then(function (response) {
// 				// Check if we received a valid response
// 				if (!response || response.status !== 200 || response.type !== 'basic') {
// 					return response;
// 				}

// 				// IMPORTANT: Clone the response. A response is a stream
// 				// and because we want the browser to consume the response
// 				// as well as the cache consuming the response, we need
// 				// to clone it so we have two streams.
// 				var responseToCache = response.clone();

// 				caches.open(CACHE_NAME).then(function (cache) {
// 					cache.put(event.request, responseToCache);
// 				});

// 				return response;
// 			});
// 		})
// 	);
// });
