'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2e12c1e444cb76141e197f80fc76b2cc",
"assets/AssetManifest.bin.json": "4246cf8155af01dd0edec0fea5f64709",
"assets/AssetManifest.json": "4c9120aab9f0b244ba0230ef58d2169d",
"assets/assets/audio/ambient/blizzard.wav": "0d31fd9645a8b0b4fc1c466236c19a65",
"assets/assets/audio/ambient/desert.wav": "80699e391f38be78fac54ad91fc615a0",
"assets/assets/audio/ambient/windy.wav": "ba765b7010c97496f899e3d6cfd072fb",
"assets/assets/audio/music/1.mp3": "be44448f5663031030910ee1b6627e91",
"assets/assets/audio/music/10.mp3": "ee681dff8fd6e7b9085db8a375cf0f39",
"assets/assets/audio/music/11.mp3": "4a10e6fd95c58d018ba669cb703b1017",
"assets/assets/audio/music/2.mp3": "ba8f7d6c9818e450e3eeb454f1678a98",
"assets/assets/audio/music/3.mp3": "525ca999a6d4d27917f15551eaa349a9",
"assets/assets/audio/music/4.mp3": "58b05c7ba5e5dc4af00ce2de14e635f9",
"assets/assets/audio/music/5.mp3": "9135909727dde0d8a4fbc2fffffd15e5",
"assets/assets/audio/music/6.mp3": "736256eea16cb06047961e1c7502cf06",
"assets/assets/audio/music/7.mp3": "b9c53f0ddd9c1e4424f1b02ce84ca16f",
"assets/assets/audio/music/8.mp3": "32c427aab6d58cbf69059468d54ac935",
"assets/assets/audio/music/9.mp3": "25f0867b57a48d577f29e9a12f896e0d",
"assets/assets/audio/obstacles/avoid/get_hit.mp3": "27bf7bb14fc9946a8093c7da027cd6e8",
"assets/assets/audio/obstacles/destroy/flesh_1.wav": "07708f75c85b9f876925a572d39be9a0",
"assets/assets/audio/obstacles/destroy/flesh_2.mp3": "ae96543b3b00003c3940bc901eb6c95e",
"assets/assets/audio/obstacles/destroy/flesh_3.wav": "b167416b573ee6413933b0913642dbcc",
"assets/assets/audio/obstacles/destroy/flesh_4.mp3": "9a1b6adce9c6afe41ecb92dbf1f36fd0",
"assets/assets/audio/obstacles/destroy/flesh_5.mp3": "39922e68abfb186d9f544275bac297d5",
"assets/assets/audio/obstacles/destroy/metal_1.wav": "8726a988aad365e7393ee04ae1489561",
"assets/assets/audio/obstacles/destroy/metal_2.wav": "0aa1b756c98811979a1cccb18e8d7e7d",
"assets/assets/audio/obstacles/destroy/metal_3.wav": "bcce95c69684258ff3d679c0c8c856e2",
"assets/assets/audio/obstacles/destroy/metal_4.wav": "e8c3221e4bbe4c04cdca64462ba813da",
"assets/assets/audio/obstacles/destroy/other_1.wav": "25faa9fe163375520fb3f36a8deb4953",
"assets/assets/audio/obstacles/destroy/other_10.wav": "9736a79b5aead2695e39a2410a9bbfdf",
"assets/assets/audio/obstacles/destroy/other_11.wav": "4b874d95a9a05afdc6883fcce9d18c38",
"assets/assets/audio/obstacles/destroy/other_12.wav": "fd6f16cd067780707a864b0e2f8917b0",
"assets/assets/audio/obstacles/destroy/other_13.wav": "8f44f8fa3db78027da7a901b7dc16aa3",
"assets/assets/audio/obstacles/destroy/other_2.wav": "14b4dd549baa94f4c442165bfc382c92",
"assets/assets/audio/obstacles/destroy/other_3.wav": "f223796a1fe141c6822f111a691b7c11",
"assets/assets/audio/obstacles/destroy/other_4.wav": "e16a50cc669c83cb89dacfb417741be0",
"assets/assets/audio/obstacles/destroy/other_5.wav": "a7f143ccc222ecf25a29be0a769b2ecc",
"assets/assets/audio/obstacles/destroy/other_6.wav": "731c8fb5e56dc627a83111f4e4ab5ce7",
"assets/assets/audio/obstacles/destroy/other_7.wav": "4b79edd85c03c02e95f067c38e1a8be0",
"assets/assets/audio/obstacles/destroy/other_8.wav": "1c03ca9ca415c5614792e699bf43d23f",
"assets/assets/audio/obstacles/destroy/other_9.wav": "1713a57bee6bb91d4a53900376a845f7",
"assets/assets/audio/obstacles/portal/1.wav": "907c41c1bf1be04785b2f91001777e0c",
"assets/assets/audio/obstacles/portal/2.wav": "51fab6bd897ed04a818c7ecad4dadb59",
"assets/assets/audio/obstacles.zip": "8b3bfd35c0a95ee41b6494aea983ad8a",
"assets/assets/audio/player/air_strafe.mp3": "dad7595b7484202d7eca5927644416ba",
"assets/assets/audio/player/hit.wav": "2bc8a39872dd75ef8926538c42acad93",
"assets/assets/audio/player/wind_swoosh.wav": "ff341012fc5a78bf22efa0c425440fdf",
"assets/assets/game_config.json": "773f0825c5530b2e4e616857d3e9708f",
"assets/assets/images/asteroid-explode.png": "f8a584ce03aa1fa4f7f0d3a999520f0e",
"assets/assets/images/bomb.png": "f1ac1c1a0b349eef68ce51ea53df2c93",
"assets/assets/images/explosion.png": "399d7b06e79778a152fe05204ac77585",
"assets/assets/images/fastfood/avoid/main/bomb.png": "f1ac1c1a0b349eef68ce51ea53df2c93",
"assets/assets/images/fastfood/avoid/onCollision/explosion.png": "399d7b06e79778a152fe05204ac77585",
"assets/assets/images/fastfood/background/1_1.png": "e79883bf14a069cdb5f0f82fa53de624",
"assets/assets/images/fastfood/boost/main/1.png": "f1ac1c1a0b349eef68ce51ea53df2c93",
"assets/assets/images/fastfood/boost/onCollision/explosion.png": "399d7b06e79778a152fe05204ac77585",
"assets/assets/images/fastfood/destroy/main/10_1.png": "c3ca5852fc7d1452acf943955000e83a",
"assets/assets/images/fastfood/destroy/main/11_1.png": "8a97896bb7038e2a8cde05e7de909f72",
"assets/assets/images/fastfood/destroy/main/1_1.png": "c7e6ccf128f3adff5c63dc7d2735f4ad",
"assets/assets/images/fastfood/destroy/main/2_1.png": "05cdc032aeee1f2ff297c69d533e426d",
"assets/assets/images/fastfood/destroy/main/3_1.png": "acdcf5931f7ad12d5d66a468ee6fae1d",
"assets/assets/images/fastfood/destroy/main/4_1.png": "8820eb5295296eb490d117eead618113",
"assets/assets/images/fastfood/destroy/main/5_1.png": "9c7ad83f55d676af7b0864d0caa5ad6a",
"assets/assets/images/fastfood/destroy/main/6_1.png": "a30da46007d588f2b3484832a6bfc0bd",
"assets/assets/images/fastfood/destroy/main/7_1.png": "c8c83b3695a45560f1cc43b0b10a8fb4",
"assets/assets/images/fastfood/destroy/main/8_1.png": "b37e712f3091a5ca21c29e5a08c2c53b",
"assets/assets/images/fastfood/destroy/main/9_1.png": "a471074dd75813ed06197ee12e636067",
"assets/assets/images/fastfood/destroy/onCollision/explosion.png": "f8a584ce03aa1fa4f7f0d3a999520f0e",
"assets/assets/images/fastfood/portal/main/1.png": "e1699b151d6bf23f012117a8f3da3fb0",
"assets/assets/images/fastfood/portal/onCollision/1.png": "e1699b151d6bf23f012117a8f3da3fb0",
"assets/assets/images/player/1_1.png": "b1df8f845ff5561a4c04aa97cf4fa8d8",
"assets/assets/images/portals/fastfood.png": "d793514a88ffc0fa24084eb25cc3bc4c",
"assets/assets/images/portals/ton.png": "9c5a41dfb51caa79e4748b65d2c5fa43",
"assets/assets/images/portals/toxic.png": "a406b9157c58349a85926c7e5bed2261",
"assets/assets/images/toxic/avoid/main/1_1.png": "994f55e011c881491e032f3dcf3410a5",
"assets/assets/images/toxic/avoid/main/2_1.png": "a223c806019361122bb48e5a64c4c5d5",
"assets/assets/images/toxic/avoid/main/3_1.png": "15b3c351f79bd37127d1339664cdf064",
"assets/assets/images/toxic/avoid/main/4_1.png": "0175b15a8c8226b7bbb35252cce363fa",
"assets/assets/images/toxic/avoid/main/5_1.png": "1cbf029785cd195cc18122c37a505fbf",
"assets/assets/images/toxic/avoid/main/6_1.png": "f05985f49bd502de3a95269d1633f129",
"assets/assets/images/toxic/avoid/main/7_1.png": "36da07d5f0efc8113efb2bd6e96ced5a",
"assets/assets/images/toxic/avoid/main/8_1.png": "5ce985483de9785597cb624ffc56af0b",
"assets/assets/images/toxic/avoid/main/9_1.png": "8d62d3bc13dfa917499e118e835c4fe6",
"assets/assets/images/toxic/avoid/onCollision/explosion.png": "399d7b06e79778a152fe05204ac77585",
"assets/assets/images/toxic/background/1.png": "7204f527c095430641bba8d970ace6d3",
"assets/assets/images/toxic/background/2.png": "b6b7825ea3225a7d7cf0fa924b201a91",
"assets/assets/images/toxic/background/3.png": "12dd77165ad63e1fc5ad8ef6477e3e62",
"assets/assets/images/toxic/background/4.png": "1ea5b09c2f1c87babeabb2cefbe5d9a6",
"assets/assets/images/toxic/destroy/main/10_1.png": "097c9eed6dced6a1462d70a6ac6e8679",
"assets/assets/images/toxic/destroy/main/1_1.png": "27f3a236859afb7dc6505e21b6711933",
"assets/assets/images/toxic/destroy/main/2_1.png": "5bb2ada066b864c1f7acabde40569470",
"assets/assets/images/toxic/destroy/main/3_1.png": "4c0c23e1212da2df6c8dec2c952ac2c4",
"assets/assets/images/toxic/destroy/main/4_1.png": "a496bf50340f65c2f460bdf040fd4e2c",
"assets/assets/images/toxic/destroy/main/5_1.png": "0d25b55f6bacfbfa0c0d60e2ea33810e",
"assets/assets/images/toxic/destroy/main/6_1.png": "0c9b8474b430bb38e39b6b10ff293f28",
"assets/assets/images/toxic/destroy/main/7_1.png": "80fa1c3e8e27b927f2f0b01a3323dbf1",
"assets/assets/images/toxic/destroy/main/8_1.png": "22a2acd5077651391ea615e95841e341",
"assets/assets/images/toxic/destroy/main/9_1.png": "88754b0e633bbbf36ace4bc95a436b3d",
"assets/assets/images/toxic/destroy/onCollision/explosion.png": "399d7b06e79778a152fe05204ac77585",
"assets/assets/images/toxic/portal/main/1.png": "79f65b61242878e40f49417fe1247e29",
"assets/assets/images/toxic/portal/onCollision/1.png": "79f65b61242878e40f49417fe1247e29",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "dc396754433df1a22969855bedeb8ed8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ad1f33adccafa7d9087808556a6d9ef9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c1a45433a60f57563a725f5c3978b635",
"/": "c1a45433a60f57563a725f5c3978b635",
"main.dart.js": "10a3fc2f00ceba1db10b7278043a1806",
"manifest.json": "58ad040eb3de17c99e02a798cdc09305",
"version.json": "80e48bcd8d00dc03ce06eca12dfb22b7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
