'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "56ecf40cda365a26c09ec6e3fd8c823a",
".git/config": "d43133ab6091f183cd50899fe22853bf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "11f55df444df039a3db655196fbc5178",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a6cbc181b28afe60c584ea7317e69f48",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0163c69b2bcac6c65696135edaaf3145",
".git/logs/refs/heads/master": "0163c69b2bcac6c65696135edaaf3145",
".git/logs/refs/remotes/origin/master": "93d2935079fe5448f0e0461b64a500da",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/7856707b9b867863a9b48b127f756ee25fe109": "614a81cd1b1a3fecab1984a7112bc50a",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/25/30c4d9a4adb5f4d865dd9021e4cf305b9db980": "35db438d81dba1db7031ac62b9b0ea5c",
".git/objects/29/b74155f82698eb0401242f2f8d0bc9f206da0b": "a951a527f932ec4310794c72ad23522e",
".git/objects/29/bfd35a2bfdd92b6e8b4ec2970f4d1eebf49357": "7a3021e789f7e98c6a0ecc90a27556e3",
".git/objects/2c/2605bcd8758f270e5cc997c8c2a088ea92b051": "85fab11c2ceaf81b4b339330a7a36cb8",
".git/objects/30/7207ce906d3e4f5dc34069fd255ff0776fe13a": "dc46629a8cb3c1333cf144cdb11f6f43",
".git/objects/30/d1d69321ec6b1dede605451b33578e8134be52": "8f48dcba7942954078fa4c758f212591",
".git/objects/36/9b9f1bd39702f0455bfeba570894bbf4a3f987": "2e16959e3b53e068ffcdefb0a9981791",
".git/objects/3e/4eed0c88056e8c866a44d9309277093b5aedc8": "dbcf322bac0023f0cc4fce353302bdff",
".git/objects/46/9d3d1accc27071bddc719136cf4facec95f876": "f327a0b8e3fb0d61a97a2a8f77932a46",
".git/objects/46/a5985b6b7fa9ba10e6077ec5b61ba873ef13d6": "30b56576d586112176d40d26e464113b",
".git/objects/50/23d6b23390e58fbb20c6a0a019f9596a98e48d": "aed174f1e104a21baa631b516bfb0878",
".git/objects/51/e6ec836f3b1e1ac4de11f45cdc13fba1f12985": "254ea0fde7d2e0f1916566ebf01d75a3",
".git/objects/54/e7059cf36359cb5a3860085714a95306af0dea": "84d83371b8598214017b309f9a987865",
".git/objects/58/7c42d4c36b69d5a664264aa1a0b55f27d7b741": "cd878ef9ff8e79274d1b6ceedb2ff1fd",
".git/objects/59/d81589dbea8322b0caf2ce0af4e08cea9a60fc": "44f940c27b092afb271070f490bd5f66",
".git/objects/5c/0924e230bd0a3617203efc542b5f652e207d35": "824e858969c507dfabfd35400ebcc7fc",
".git/objects/5d/9f99fdb822e888ba4b6b3b6b2238d722717329": "542724d391948934619a936a93c753c8",
".git/objects/5e/a7818d3f338668844ef413f67e467ed2a400be": "b71c07a0eb9ea4b349b4d9ecf4226d5c",
".git/objects/5f/fde35ffc8e98647f318f879a63bcd0235a67fc": "5036e2ce2265ff2805389b17c2678461",
".git/objects/6f/ca145a742cc9bcf4e89d06d3f408a9b38d56d9": "479a142a762e89380a60efd0750522cf",
".git/objects/74/2b650372867d7451011a320ec8c656a88ad289": "b9186e671c1aeb3d1f7605acff258f0b",
".git/objects/7f/dd6d775e45187ec83bec671b6cf1f975b9d652": "02df3d45b229081dc568834f7b14a3c7",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/8d/8d82f84d5bb79fea15c4b127e39b087dc406c9": "2b6c1994cfe1089a9ca1430f502ed482",
".git/objects/95/39d35515f7710ccf63aa18f23f9e74912fb149": "e20d78229a54568765665896fa7027b3",
".git/objects/9c/83e165e1b63cced18189d8527c02c388c5aa1e": "792f96f84c1fd110be80c0bbed21c94b",
".git/objects/9f/409a8306f8345dc63aa74fc173d7c84763c67f": "b442d6b5769c30354d53a7efba237023",
".git/objects/a0/0bd1349e461b88d6f1b0ee2fb5b2076aa4f57e": "18e6b1f0a51ffed502958ba92ca03d1c",
".git/objects/a6/754cf33cd2aea1c4414f87115998dd79c05e7a": "676f1d1bbfc33a5b35794d0381849339",
".git/objects/a7/813472ad7571e4546dee9136f509e5f49e603b": "bfd8303264f0bf85f4a8ab3ae3432c0e",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/1d4d9cd005ef3eca726b22ef954ca0358635ff": "9fe659c82e293e022c76fe65b5f91f48",
".git/objects/b0/3afa052f52caa21333a860e8ba1436bc5e1c2e": "aebee5508b0332df7893fec28c475e75",
".git/objects/b3/44a997a4ca99dd0e7d33b4cc1a2f8a21219958": "883dc178e02d83791fbc69ea25383c51",
".git/objects/bb/e87d28823af047009582e5e838a43a24831ea2": "4228472cf50bfd18c0a83fa79d2d6556",
".git/objects/d0/5206b58409d3268d6ebe8568be2457ed06c9fa": "d29fdc582b54909691b64529bc8dd92b",
".git/objects/d1/7a6d78f9ba05d0e296eb5a03dd75930f12c4b3": "40e5333c786eae412d1bea412e557cd7",
".git/objects/d9/5a59b41b86a2ae8cf074971455a742be978001": "fb4744987b69b95824fe9e30cda1c9c3",
".git/objects/d9/95c8c8a5c2c3c6e12905c29376888d77bddff0": "2ab52bcab33e64eba964a5ea65857743",
".git/objects/eb/f20cf269c45397306ff0282d2d841850d89a7a": "f5e6977fc622f38c8f32dbb2290e8cbb",
".git/objects/ef/d881240e2102ef617fe51451dde0fea0b48caa": "1fc65bd8f3f6a27e07a1ab62c9cf6796",
".git/objects/ef/dd5e84a0397ecada7b9cfde51db87db08766bd": "ad7d8c09a50d25e6b1fd7275b39a3dbe",
".git/objects/f3/fc727ee0197f6d910e1540ecbbb2c04da46972": "cacc0693e6d3f3d356bef489b0bd1f76",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/ORIG_HEAD": "b2f02b73c11684be1a62a9624f983af3",
".git/refs/heads/master": "04ff2a609771715c19c37b90e4855f55",
".git/refs/remotes/origin/master": "04ff2a609771715c19c37b90e4855f55",
"assets/AssetManifest.json": "cf125be3af87037ed5aec2fbb40b8df7",
"assets/assets/icon.png": "3e519ece2a5f65ee0a879f1d3c5dbfe5",
"assets/assets/titol.png": "78fa26942ce4fbab5390b53db82f6271",
"assets/FontManifest.json": "7986d5c49155dbaa1b5f5a3e78de6a2b",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/fonts/OpenSans-Italic.ttf": "f6238deb7f40a7a03134c11fb63ad387",
"assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/fonts/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/NOTICES": "a4fc19c297f050c1d20b21c53924d046",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "3e519ece2a5f65ee0a879f1d3c5dbfe5",
"icons/Icon-192.png": "3e519ece2a5f65ee0a879f1d3c5dbfe5",
"icons/Icon-512.png": "3e519ece2a5f65ee0a879f1d3c5dbfe5",
"index.html": "337ae8d2e20b41efb4d7467f86ff69be",
"/": "337ae8d2e20b41efb4d7467f86ff69be",
"main.dart.js": "91b8e43db827a05706dd3480d2993f84",
"manifest.json": "bc8b955aaaa27e157a33e637ac6e3e01",
"version.json": "0259672b1cf5903e8a8b22d1d9a06ed0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
