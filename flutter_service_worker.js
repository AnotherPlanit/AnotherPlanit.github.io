'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "26cc56b79f9ff2ce50611d995141ebb0",
"index.html": "287f588f0bdd0a836714aac66294d9c5",
"/": "287f588f0bdd0a836714aac66294d9c5",
"CNAME": "a25ad781f0aaeccf85300703a750adfd",
"main.dart.js": "c01a8bc0c9a8e415d00f890b8efd3a55",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "874f65e374d25cd14068382db92469b2",
".git/ORIG_HEAD": "3fcdbcd3db46df12533ccf4c24d284af",
".git/config": "5bc81538c13d3328663efc5510c5b9be",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/68/1934b4826eee10533cf4c65d0b426203052cd9": "aa8a2b21b290c64c6dc81697fe3ef54d",
".git/objects/68/7043e1ab0acd8094147c29ebd6e74c1ff205c6": "4c8d80587caa389e7941cee5b817fd31",
".git/objects/57/bc51a4ec95140be87052d43766d165038ef0aa": "77eb9987c32ac83b4540bf5719e52a90",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/cbb3e93d6130828949cfb35a8ace1d68b8a984": "ed13dd97b79ad7a01999035183c61325",
".git/objects/67/564b8217a8832a12c7e55c12af1bc37b4f579f": "687571738d7855f8b29a61412853c40e",
".git/objects/60/4b858a2ca7172e760095d352ad1e3530cde1e0": "ccf13c68d62e24aaeeaf1b58e0dfd325",
".git/objects/05/e4891a6358f1b919fe842639720c45da3e02b9": "791727507b921bf7bc860c7e899fe2d4",
".git/objects/9c/720ab339ade5d9423b2aaf2d0ca5a93af6e0a1": "457ccc191c4a7897992d5a7da5d39c4b",
".git/objects/9c/0586f6d63a50571d94021799ea507d427c6a45": "331bb1c6e00da657187298cf1b226ca1",
".git/objects/a3/7c96db885676d1b79b4aabd3bcd08375392c9a": "d109ee1d4b78ce4e2a8f177efe3f017e",
".git/objects/b5/3252c51db5bb4627eb76d30a3f96d48f7699c1": "902d67f0fd000d32a621814df673f5fc",
".git/objects/bb/5b792899b5a6de12c97f94b48ea28c23f34be0": "e050920b3be03310b3dea1d9e780366c",
".git/objects/df/6c01cd5c8cc8bcacf46b4e86b0cb2ddc4696bc": "c5393d59ceaef50b6242f1dbf31affbe",
".git/objects/bd/7fc0bec088ff8c6e7fb951674b78c4fbd36e90": "6d34b55bdd6eafba5e3f9c20fb08f64d",
".git/objects/d1/e0cba9c1b14e5c3d6a250df1330d6b01dc7b2d": "28cc9cd9b4b6d20f73c069aaaeb50d1c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/4d10b1497f84c48a4206300c287b4d8c132085": "c8faeb8726b36b78b4dd6fc566993750",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ac083b4360c56f6d06cc310ace2258f82f9554": "9bc25e3a9e349486a0a0ba91634d391e",
".git/objects/f2/002c318b5763aead6850ad56cd85cf114da7bf": "0780248337892df029d0775f09d37010",
".git/objects/f5/354edac78d9f5e4a3a04261ca42e9fc1b19673": "0e928c3a22a20bf61420d2f373ec664e",
".git/objects/cf/d7541ad4679b09afff10dea12fadf494c9a0a7": "18312b9c53b1f1d35447ca2162632864",
".git/objects/e4/1937a41dc82ee9c74291f27e4e1e606432f8f6": "12e0eb48ac856b8ee4871b73b79b21c3",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/18/55a82658aa50d239470d135a8ca4e02d596d07": "8e507568a42be10080cf9f7527e1a0fc",
".git/objects/27/cfacf131106664c90c97a8b4e8561bcc70bd19": "9de0a379797a444e062bacf3ca4833b4",
".git/objects/4b/3e016b4d666a0f57bc46f0584fe77e629932d2": "4eeb50fbd97220654fa17e2be25be632",
".git/objects/4b/f8ca4e57c3e5f0cc662f69fd067548e298684d": "7c17b06d02b945142201d38a87d06dbe",
".git/objects/7d/4fd4cc99816e791b97aeb297f65180ac90ffcc": "58e7b3992d8eda75a485a1b4d8626fa8",
".git/objects/29/040dd8b5f42b3c676051f208eff45d16ecf38c": "7dbf8db163aa2fbc1840c7c25d38d920",
".git/objects/7c/1f5e606a2d7377648b299de1583fd6596ae6f1": "8b1671f12b051c22115c65e3e6425772",
".git/objects/1f/42b664a6bf23ddc655a7dbd45f469080b733b5": "992da5b4609f52f96fe4f97e2d1e6ab8",
".git/objects/1f/4a21276d2419219206e8926c333cd08ff40e22": "997a8a46edb45c5e3845fcdd394e1460",
".git/objects/74/19d0b06692bb0a5db1844e509ef3bac49cc493": "7fb0334d058d76d2da56d997a9023d00",
".git/objects/7b/4c460508fc33708fb923d62e51ed6cdca0f82f": "a31efea413fd441f3cbe50909bd3133d",
".git/objects/7b/74ff544bbde004dfde604bbad379268703aa59": "5b4bba768e0a44e78c222d070d0a9059",
".git/objects/8f/a8a9f0fe7d4b6767525a149fafb3aac08083a1": "dbda17187c32505f4e408a2cf672592b",
".git/objects/8a/f411e9978389d74fc325a0a3fde144f223cb0e": "cc63c5f828dbe3b7fc679e600d4a788a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/4e37047fcff27cdc0773eb6af2b15b767619fa": "65196fa302b5a39d2c737c7d52eca571",
".git/objects/19/c75ab23d27789e69174be0a1d7399c51609e3f": "196885f7f9ff2bc6e71a929129abd322",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/f68d49dbc3e1e53de64227d4bbb043efb17afc": "0dce4bf5e92a97c09a0adf83e253ee0e",
".git/objects/9a/8cb6e0714cf58574411638db513369d078e0ad": "d53b96ccdd49cd82d5272e412ec0fc51",
".git/objects/31/7333eab14116fd8fffa6c003a9da59e4b12abd": "e750cf3b7b6f019c0a529c14f6e8369c",
".git/objects/96/ffe9fa21c7a40b401fd731b1c99107d8d0d73e": "1919daf1d07161bbfb0e96458953446b",
".git/objects/53/e3a5a56d9ab1a965291c7927a6adf799ac5d43": "abade2a504da42befd8497fb376c52cf",
".git/objects/3f/6f923d8c47445d21e7e096022fce7408591315": "90f250ece52db1199b0cf97029cb39a5",
".git/objects/5b/72c7611da219841f2c51a2e62691e4f09001c1": "ee926e5f7402b76437bac6453c2f02af",
".git/objects/08/5d52d9f981a4d69b6cef47a6211aea4a57ab37": "89b07c3ac79af2c654d91f70b0a5eb64",
".git/objects/39/1ef342213414a755d3002dd08970542b66fadf": "3ef9f977a6a7a2bbaa8f969887331f02",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/97/28f1397d2ddc96f8ae4aba942bf72a3f48165c": "0dd3a7cef65b731ba6b33e09288147d9",
".git/objects/63/5af8918cfce7a56f3d10db5bdbd5eb3106e794": "001574c7acc38e37a7479596d656d20e",
".git/objects/0f/a85c524648738f63ff86e037a0ca5b422c8274": "a9c92ca870ee3cb32b34da93080b7c3a",
".git/objects/0f/09fa72f4964995513281a6afc3308d28c6028b": "de153e6f0eed8945658c0703dbab43cc",
".git/objects/0a/c5024e71cd05c24bd61a2b88de33c1ca425982": "f8956ac6a13883b657286b667d9be609",
".git/objects/bf/dd97f94152f4edc19ffbe531026d038c181d96": "b19eaeaaac7796d9efd0cb2de0eb21cf",
".git/objects/b6/b6a198bc0fffb67b051e9543a4f486f10c3ef3": "52aaa75b5b45767b0b44dfcf717a7743",
".git/objects/a9/b28ca0258bdc9c1a579aa7c7a7573afe6e1795": "818fefcc6616cc0edcce2b3a6a6cd51c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/f2e443691d9b209daebb5bf000435d31a4e5ba": "42855d8770fd7ab544aa73308baaecd2",
".git/objects/de/fa5344179f8539a45edb24ffb02a0ca2f0bb26": "392c3ba0eaccc1b7cbfa333eebe7a4a9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/cd/7afb1fe5b5cbc9a21b25974561a3d3a4a7e94a": "c73042a4a3d4ef6a884a1e4a89f93314",
".git/objects/cd/0ce49f57ee48cc5703141212b7d6c810a2fc33": "72b6a853cd94cbf05f6c6ffe3c3285c2",
".git/objects/f0/269651540d23bcfa20a34f31d714fd851940b1": "9cfd4e6e866d1ec2d1c356ff9a88e025",
".git/objects/e8/a0d787a5ff49191236f39f49065e193bcfafca": "3e4153cb8007ab9e84ea41585574d4ec",
".git/objects/fa/1eeb10c1089e701c2656e68555d064d2d66844": "8048025d76992a696fed917cd9a9fff7",
".git/objects/f6/7ee001d4aed2456110a4cb3a5d6e89c30f67b9": "1d34d9adc1970501f7d700fd7243363c",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f1/07cd561ba843d0ddbe44fda0e51404fa118a51": "a46959f2507270b809cb37e971e39bce",
".git/objects/f8/c396c7af76012fb706e058cfae371c0f9b3ccf": "dfe7ac1c1d7bc209f78748ac4845106f",
".git/objects/ce/2c0417b88e58772edfb5520661f09917d36ad7": "608515af43c8eeedebac8bc3c91032be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/1e/2ed41ee6f9fc8bbb8299f527636d30a6605c74": "c04a4361a2a0095d7865b6169653b37e",
".git/objects/1e/8169c15a47cba7ef446b3b95e22b121acadb0c": "9247024c4175ecc80bb25e6208296c04",
".git/objects/4a/a88b09848d6ad99be84b77a2a800a911e2f714": "bf571cec6ef93f5e3a998942b282e3fe",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/313f76cf94da64613083c6895cdb12a7bae510": "6133e55de74e9af88b632d93d157177c",
".git/objects/8d/b122f1ea9de9218035512b5c0bfc90fbfaa4a7": "fd3027f9c1261cecce2a6024b2ea98ca",
".git/objects/8c/70e54467c7a912936f96c348514b03d2235ca0": "02dc45bfa7068f9d0e9ac1b12d633fb3",
".git/objects/76/62224f63592f83c8d4008c37fd9a3d97bdef1d": "9090149797aad948d738b0d7ec8e62ab",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/47/1ec98a427eb1d0d3d8a6aee6fa46f9251ee556": "3833b604c32cc5e0ea5742a1ed66fed7",
".git/objects/78/8a8bbc08bbbeef30c82b927274005108dad851": "70da3a46414f516bb457ff93c579ad97",
".git/objects/8b/bf1ac24cb14b0250f27941ff452fc94d18c8c3": "1ab165c2fb8320249f1595fd43deeab9",
".git/objects/22/fd450938cc62941c021c4947ca892e0775cbb7": "81e80abf779be90b4f59cd800298bd05",
".git/objects/25/ec259c66d47da5e3ead0fd66ef5b44eb4eaffb": "4c0ded696da4e9baf2662ea168a3e4ee",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2524ad75d06172247beedb315e9dc529",
".git/logs/refs/heads/master": "2524ad75d06172247beedb315e9dc529",
".git/logs/refs/remotes/origin/master": "edcccc304d929adb549fe28bf6d14008",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "97c1b78eccdfe5508b535fa0f8965618",
".git/refs/remotes/origin/master": "97c1b78eccdfe5508b535fa0f8965618",
".git/index": "484f95d59f25f0bf4dca04cd59f0d9f3",
".git/COMMIT_EDITMSG": "4e3b0863d95505ab1c0613be3f2c8a96",
".git/FETCH_HEAD": "d417e0b1cfd2e4e67858b988f2a9c846",
"assets/images/planit_logo_title3.png": "2572fd16a4d2a2b136104775be33f161",
"assets/images/planit_logo_title.png": "689dde328d5791c64938e2d45b129485",
"assets/images/planit_logo_title2.png": "b65f7fefd6b5d4bcfa31a1df1aa3902a",
"assets/images/welcome_graphic_brownpink.png": "958949ba0fe18a940398a8931e21e054",
"assets/images/login_screens_background.png": "b92d4c1cb38ca67ba3cde7a8af01153c",
"assets/images/black_stars_background.jpeg": "f7e5566d77833415bbf349f1915804dd",
"assets/images/another_planit_name_logo.png": "cd937d030d4d48431683b29bbf65272b",
"assets/images/planit_logo.png": "67f812855fb24d4dcd138f76ad0d968a",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "73b541dd28c91ddf8be782b11da43df7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
