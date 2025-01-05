self.addEventListener('install', function(event) {
     event.waitUntil(
       caches.open('my-cache').then(function(cache) {
         return cache.addAll([
           '/',
           '/index.html',
           '/styles.css',
           '/script.js'
         ]);
       })
     );
   });

   self.addEventListener('fetch', function(event) {
     event.respondWith(
       caches.match(event.request).then(function(response) {
         return response || fetch(event.request);
       })
     );
   });
   
   self.addEventListener('install', function(event) {
   console.log('Service Worker installed');
   });
   
   self.addEventListener('activate', function(event) {
   console.log('Service Worker activated');
   });
   
   self.addEventListener('sync', function(event) {
   if (event.tag === 'send-notification') {
   event.waitUntil(
   sendNotification()
   );
   }
   });
   
   function sendNotification() {
   return self.registration.showNotification('اتصال إنترنت متاح', {
   body: 'تـم تحـديــث السـرفرات !',
   icon: 'protocolx.png',
   badge: '942472.png'
   });
   }