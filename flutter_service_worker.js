'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "633a26612a2b890d124715808890ef44",
"assets/AssetManifest.json": "ad589b0f6ecc561c1352b2dbcf331c68",
"assets/assets/account.svg": "c38555d012979b9250e077129dd6eb8d",
"assets/assets/account_2.svg": "9da16f710d161f3b4b029aac11ba6b8c",
"assets/assets/cn.svg": "896129aca3c7e4a523e38f1028762e02",
"assets/assets/favorite.svg": "f6ef00f3f7ca804f97f61ecdfb12eee5",
"assets/assets/favorite_2.svg": "2d06da6b1168569c8f6b6e6a960e6dbf",
"assets/assets/firebase.png": "f6547fdc86e9c7dea0b873eb11ea9dc8",
"assets/assets/home.svg": "fd7246ec92b80d64338129c3f4e5efca",
"assets/assets/home_2.svg": "0d17073908f6c2a3c63f58ccfdb21be1",
"assets/assets/new.svg": "e766fbae5422cf4b7a8fae29ac8cb43d",
"assets/assets/office.png": "c9326110016f566fbc06a2d5042f5968",
"assets/assets/search.svg": "4e9ee888deff9adf7653dd33289cb347",
"assets/assets/search_2.svg": "39dfb5099ad4fc8684dda11f4e14de7e",
"assets/assets/tn.svg": "ad7ac57ea9000112753af27d3e06bf88",
"assets/assets/ve.jpg": "7a88815b0a3b347edd12e9bf79b20fa3",
"assets/assets/yt.svg": "aea50350269d6d8ce9448d1bcaa4b769",
"assets/FontManifest.json": "9cfce70c59ddf4f8372ed142e844ec05",
"assets/fonts/MaterialIcons-Regular.otf": "d1d80159178a725f12104734d6ade548",
"assets/images/anh1.jpg": "f2b8516e6c0c89639162e112decc7543",
"assets/images/anh10.jpg": "c22a072207a1f75b00ca69596f29feea",
"assets/images/anh2.jpg": "9b2e72781e6857d07c5f089ec83ad08d",
"assets/images/anh3.jpg": "2499a27d3c30e316735b2cacf50f628e",
"assets/images/anh4.jpg": "538a133d023eaa9a596283d124cf2602",
"assets/images/anh5.jpg": "6a3a62c862c873d017bbda7a765282ee",
"assets/images/anh6.jpg": "af20f68de751557082add12e8aa10647",
"assets/images/anh7.jpg": "693c09ede858d9460a067639c3072ccf",
"assets/images/anh8.jpg": "d597d1a7f04291400180f08e30207afb",
"assets/images/anh9.jpg": "494ca776fb93d3bb7fbd446021487ff9",
"assets/images/block-user.png": "0793d7d9cc567649e5fee827d5de0913",
"assets/images/google.png": "ff629c02385f2f3a199b7e0b3065d077",
"assets/images/lap1.png": "ebb92566ea9bb7186eb60f4b90805f54",
"assets/images/lap2.png": "29dfbd231b33ae3e77014f45dcc2fd6e",
"assets/images/locked.png": "31c2af7b1f4611f04fc514850a24ad1b",
"assets/images/mn1.png": "d0e50e8f61dc03ce261c1ad4e94ae9fc",
"assets/NOTICES": "d57008756617e6c5fbbeb04689fd5603",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/unicons/icons/UniconsLine.ttf": "9e91f67b470d70332db97056f4074ac3",
"assets/packages/unicons/icons/UniconsSolid.ttf": "4d93206a45f31601d12c705d70d33464",
"assets/packages/unicons/icons/UniconsThinline.ttf": "a986c57934b947d0235ae8bf8875367f",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5c8b547d6021483b9fd5c1d6cb436127",
"/": "5c8b547d6021483b9fd5c1d6cb436127",
"main.dart.js": "8e9eaa6bfc9f5dd1697203208ae163fc",
"manifest.json": "f038aee411e22c5ca4d79df85e14e953",
"version.json": "9a96f2c8d96074f7c205a976343c501a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
