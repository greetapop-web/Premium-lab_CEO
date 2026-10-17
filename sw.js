// service worker ขั้นต่ำ (ให้ติดตั้งเป็นแอปได้บน Android) - ไม่เก็บข้อมูลแคช ข้อมูลโหลดสดทุกครั้ง
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
