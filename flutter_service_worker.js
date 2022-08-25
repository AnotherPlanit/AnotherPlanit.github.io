'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "26cc56b79f9ff2ce50611d995141ebb0",
"index.html": "a370b3be7dbdf3bde5a2811113ceda21",
"/": "a370b3be7dbdf3bde5a2811113ceda21",
"CNAME": "a25ad781f0aaeccf85300703a750adfd",
"main.dart.js": "8e777e7fc3abf731cf1af2a69f259e4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "874f65e374d25cd14068382db92469b2",
".git/ORIG_HEAD": "3fcdbcd3db46df12533ccf4c24d284af",
".git/config": "5bc81538c13d3328663efc5510c5b9be",
".git/objects/61/6a1706953e0c32d065bc0b9aee009ae60f19d7": "2453acfa423696e1326d01efc5c8012b",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/68/1934b4826eee10533cf4c65d0b426203052cd9": "aa8a2b21b290c64c6dc81697fe3ef54d",
".git/objects/68/7043e1ab0acd8094147c29ebd6e74c1ff205c6": "4c8d80587caa389e7941cee5b817fd31",
".git/objects/57/bc51a4ec95140be87052d43766d165038ef0aa": "77eb9987c32ac83b4540bf5719e52a90",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/53f66062aff6b101e5fa5b5540b7b227f8926b": "a5a1a9b0577223c93eaa198275349b65",
".git/objects/04/cbb3e93d6130828949cfb35a8ace1d68b8a984": "ed13dd97b79ad7a01999035183c61325",
".git/objects/04/c42dc09e427f96e18f20e23c126c95434f795f": "27e3a9fd0e9aee1eafe813758e8b2ffb",
".git/objects/35/ee3b95546249d767a4c95885733c484f7926e0": "32c17b6f3228bf1a8eb446c949cf0260",
".git/objects/3d/6f60f17f85ebb5cfc1b9ad36da3dd855e46dee": "6dfb7ccf3008f2473990e03bab5746ba",
".git/objects/67/564b8217a8832a12c7e55c12af1bc37b4f579f": "687571738d7855f8b29a61412853c40e",
".git/objects/67/84894aa955927524911b3907ac5e09d27dd29f": "2c6d1aff8c8e6e145a8028644ae2b912",
".git/objects/94/9d13b73ee969bb2c98516196e5406bf05067f7": "fde5c0c1cc0059188f4256e81fad8ffb",
".git/objects/60/f27937740e5664f033bfd671616de4ff84e652": "9d7901fcce5e0add014ac4df0c81318c",
".git/objects/60/4b858a2ca7172e760095d352ad1e3530cde1e0": "ccf13c68d62e24aaeeaf1b58e0dfd325",
".git/objects/05/e4891a6358f1b919fe842639720c45da3e02b9": "791727507b921bf7bc860c7e899fe2d4",
".git/objects/9d/e93392947ac3d2c45889f200bd58d155055951": "7f04f567a87645134f2fdb7c52c4ba81",
".git/objects/9c/720ab339ade5d9423b2aaf2d0ca5a93af6e0a1": "457ccc191c4a7897992d5a7da5d39c4b",
".git/objects/9c/0586f6d63a50571d94021799ea507d427c6a45": "331bb1c6e00da657187298cf1b226ca1",
".git/objects/9c/0644a174de44c4385d120ff963bd4fbc3bb48f": "74584cc426afdfa0a8bdc9817b59ef22",
".git/objects/a4/d203eb149f6db90761ccf8fa394064c33021b6": "ff7dd78512ec2db4de225d44af78d5a9",
".git/objects/a3/7c96db885676d1b79b4aabd3bcd08375392c9a": "d109ee1d4b78ce4e2a8f177efe3f017e",
".git/objects/b5/3252c51db5bb4627eb76d30a3f96d48f7699c1": "902d67f0fd000d32a621814df673f5fc",
".git/objects/b5/56a664dbe52a7c11a1bbeee5f1a559dd42d6f9": "0e46e4856a77ffcd559fc08fab2ad79e",
".git/objects/b5/a8a14b1b46dcb3254d36f1efe7906829b55747": "7d7fe94630e6df33b24bf98e7fc5d36b",
".git/objects/d9/86032167bd63b1961ff86b3256959b973db6bf": "236d994fa31b693584ede0c5107f6a52",
".git/objects/ac/698a4206da0c0b0e46993e2bad8d8afd71ef5a": "b3634be7b73341c1795fe461ac2e0999",
".git/objects/bb/5b792899b5a6de12c97f94b48ea28c23f34be0": "e050920b3be03310b3dea1d9e780366c",
".git/objects/df/6c01cd5c8cc8bcacf46b4e86b0cb2ddc4696bc": "c5393d59ceaef50b6242f1dbf31affbe",
".git/objects/df/28432ff8a4ea52d74afb64ee3aea7a66b822bd": "c0740953db2dd0944fef2e7dbd119dde",
".git/objects/da/e98eca2d8b0a667a404090691002b188203af7": "04367810a2ad1ac0f5ef305b830c0dfd",
".git/objects/b4/aaab7ac048b4c6ff6b9f071b02eba17f40d382": "1249b0ad4caf1f8ce0db36eefd61fbc3",
".git/objects/bd/7fc0bec088ff8c6e7fb951674b78c4fbd36e90": "6d34b55bdd6eafba5e3f9c20fb08f64d",
".git/objects/d1/e0cba9c1b14e5c3d6a250df1330d6b01dc7b2d": "28cc9cd9b4b6d20f73c069aaaeb50d1c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/64c4b9124b0371621d70fb987d7f4de35cf5fd": "f54001b59953a49fcd5c0b61fed91357",
".git/objects/d8/d18ab62f9ffca4c5818eb589f5cc2b2db5d4a7": "4ddbdc1926663b84461d29a56aa61eae",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/46dbe12716c18a249b524345da724347225909": "61ca7d2d7156cb0970ac208842bceb67",
".git/objects/e2/4d10b1497f84c48a4206300c287b4d8c132085": "c8faeb8726b36b78b4dd6fc566993750",
".git/objects/e2/51f65f5410f7eda097ab9e07ee2f28d73f2064": "80054b7fadce4b9a24fbb3781558f369",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ac083b4360c56f6d06cc310ace2258f82f9554": "9bc25e3a9e349486a0a0ba91634d391e",
".git/objects/eb/af836711160678b9fd35a487c886604a67ea23": "f24a4b36a0e7276da1ee7b3fb3919a14",
".git/objects/c7/1382100a60a795a7bdc90408b76589a75192f0": "775f8a8a9b771d1c66a8beadbd10f59a",
".git/objects/f2/002c318b5763aead6850ad56cd85cf114da7bf": "0780248337892df029d0775f09d37010",
".git/objects/f2/32f5073682d7f47d6c783275a32019692a26ef": "092e695a6aac3d2703bbb66de948a6cb",
".git/objects/f5/354edac78d9f5e4a3a04261ca42e9fc1b19673": "0e928c3a22a20bf61420d2f373ec664e",
".git/objects/e3/f65fb395c3c34f2c2efcddfaa10d1b3bb0a7a8": "73869cdfd776acb9323af2db813a721b",
".git/objects/cf/d7541ad4679b09afff10dea12fadf494c9a0a7": "18312b9c53b1f1d35447ca2162632864",
".git/objects/e4/1937a41dc82ee9c74291f27e4e1e606432f8f6": "12e0eb48ac856b8ee4871b73b79b21c3",
".git/objects/ed/82b7ddbfb1b61523172e3200339da6dedf0b09": "66f74800ed6dc7ded97ab2010a9dc316",
".git/objects/c1/72bbddd0f82372730f6deb69702a7094389617": "aafa833fb944ea93300939e59a1e5c02",
".git/objects/ec/e515cf5bc2e3faa85095e6b72f72f1d934fb84": "4f37ab14805998278970663049e8c9ee",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/18/55a82658aa50d239470d135a8ca4e02d596d07": "8e507568a42be10080cf9f7527e1a0fc",
".git/objects/27/d42a92bc0f3cd3b675a95610a6e23504c70837": "fb56894d40545f3806795ac25671fab8",
".git/objects/27/cfacf131106664c90c97a8b4e8561bcc70bd19": "9de0a379797a444e062bacf3ca4833b4",
".git/objects/4b/3e016b4d666a0f57bc46f0584fe77e629932d2": "4eeb50fbd97220654fa17e2be25be632",
".git/objects/4b/f8ca4e57c3e5f0cc662f69fd067548e298684d": "7c17b06d02b945142201d38a87d06dbe",
".git/objects/7d/4fd4cc99816e791b97aeb297f65180ac90ffcc": "58e7b3992d8eda75a485a1b4d8626fa8",
".git/objects/29/759f15b843d0b7f11ed9cee9ba5fe604a202f1": "cbb2045f052efbf7c80f1996b38e3c40",
".git/objects/29/040dd8b5f42b3c676051f208eff45d16ecf38c": "7dbf8db163aa2fbc1840c7c25d38d920",
".git/objects/7c/1f5e606a2d7377648b299de1583fd6596ae6f1": "8b1671f12b051c22115c65e3e6425772",
".git/objects/89/6ce03f51eb5e73ce17682d57a8bf756f68cb1a": "97e62e257a9fe7950bb0532695b0110e",
".git/objects/1f/42b664a6bf23ddc655a7dbd45f469080b733b5": "992da5b4609f52f96fe4f97e2d1e6ab8",
".git/objects/1f/affd30ff33818a9e4e820f29f7183abac89ef1": "9249a4db99e3acb03007f4b61e8407c7",
".git/objects/1f/4a21276d2419219206e8926c333cd08ff40e22": "997a8a46edb45c5e3845fcdd394e1460",
".git/objects/80/8f967ff0eea3883ad6d6d5117dbecee8791854": "638d2cba27e924a06cd780b29d5b0ff0",
".git/objects/74/19d0b06692bb0a5db1844e509ef3bac49cc493": "7fb0334d058d76d2da56d997a9023d00",
".git/objects/1a/7884a889831349ea3e0c43d7a6d39bc2b83ca2": "dc7550a82fa8641383d2356b587dd311",
".git/objects/28/f116537ff08a81231bbe0355015185e5b385e4": "6cd4cf35e18ac34bc747961bc9e20477",
".git/objects/17/adcf3712190bb48c266936598e483b8327419c": "fd958a224c8543bf85f82db3f074c98b",
".git/objects/7b/4c460508fc33708fb923d62e51ed6cdca0f82f": "a31efea413fd441f3cbe50909bd3133d",
".git/objects/7b/74ff544bbde004dfde604bbad379268703aa59": "5b4bba768e0a44e78c222d070d0a9059",
".git/objects/8f/a8a9f0fe7d4b6767525a149fafb3aac08083a1": "dbda17187c32505f4e408a2cf672592b",
".git/objects/8a/f411e9978389d74fc325a0a3fde144f223cb0e": "cc63c5f828dbe3b7fc679e600d4a788a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/4e37047fcff27cdc0773eb6af2b15b767619fa": "65196fa302b5a39d2c737c7d52eca571",
".git/objects/19/c75ab23d27789e69174be0a1d7399c51609e3f": "196885f7f9ff2bc6e71a929129abd322",
".git/objects/81/922fb0bac3f901ec6da3a7fbded9e09606605f": "7fb838a38873ac15991270981d44c388",
".git/objects/86/8b1ae58b3b7820ceb21c3ee4c37d13c28ea2e4": "4e69dafa633484593d98c8fca7395e25",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/e70c4a07e9d23eefc0938c6ce233acf3678ee4": "3f813408d7c5f763178d6b0ce73a45d7",
".git/objects/00/f68d49dbc3e1e53de64227d4bbb043efb17afc": "0dce4bf5e92a97c09a0adf83e253ee0e",
".git/objects/00/9391c5d93376fcb07574b7357ab53d1f9d4627": "015223ac7ce597ac06465fce124e123b",
".git/objects/6e/e62c4782fa808a28d4d56cc073dd15c009651c": "0c56fc98671fb97c8e090caa9f9f1dc8",
".git/objects/9a/8cb6e0714cf58574411638db513369d078e0ad": "d53b96ccdd49cd82d5272e412ec0fc51",
".git/objects/09/0900117d44ed4a8a1e7069ed7f2a2f391a5129": "6f484be3aae8f947552df2f38f56865f",
".git/objects/5d/f3ce8b5659371faba7070691172e9c3ff09c3d": "454c561b15afe1d497d225666015cac5",
".git/objects/31/7333eab14116fd8fffa6c003a9da59e4b12abd": "e750cf3b7b6f019c0a529c14f6e8369c",
".git/objects/31/f3d503521027d61a6c057b1862d01512b5203c": "4deb2bf5ea828d4928ff3063d09943ce",
".git/objects/65/50431ae097a6191fc6c71a11091b32cd4656e0": "212ee86691fa04c4ad18783df6af1f38",
".git/objects/62/28e101780cff55bc8f578ec82b7fb38e344a98": "88165edf829977e64fbecf51b0ebc85f",
".git/objects/96/4adb29f886215969353505e7e3e0452ad88fab": "de053e5930222d38e961d090df7a521d",
".git/objects/96/ffe9fa21c7a40b401fd731b1c99107d8d0d73e": "1919daf1d07161bbfb0e96458953446b",
".git/objects/3a/9a6d5806b5981c1aaf3443c49a5c0d03e10f55": "fdcf3f4d527dc94525976770453fc05f",
".git/objects/54/c4a1de7e0451263a09ed27b2bf387ade3418e0": "1d5e21299c0d77325f4ebfc56ad843e8",
".git/objects/53/e3a5a56d9ab1a965291c7927a6adf799ac5d43": "abade2a504da42befd8497fb376c52cf",
".git/objects/53/14dfe81ad2c21426e264100e2cb73ef5b7762f": "cfc30fc971c8ba9008978c4419caed5a",
".git/objects/3f/6f923d8c47445d21e7e096022fce7408591315": "90f250ece52db1199b0cf97029cb39a5",
".git/objects/30/ee8823908b96d31d6a58f52bbf5190a708264e": "95644a8065d5c4493af4f134e2e9dad4",
".git/objects/5b/72c7611da219841f2c51a2e62691e4f09001c1": "ee926e5f7402b76437bac6453c2f02af",
".git/objects/37/ee65ab8865f72ab36c0232121e4aaeb4ad8b89": "0baa02012be5a0ee03de1498e6b11e70",
".git/objects/37/6a82278b6ccc3c19b50def79641a4c85af2fc5": "351e43bd5a0e4ae42737ead4bac81168",
".git/objects/08/5d52d9f981a4d69b6cef47a6211aea4a57ab37": "89b07c3ac79af2c654d91f70b0a5eb64",
".git/objects/6d/c0e8f92e4091beeeb46a9d58a30816df0f143d": "de7dccbb26a825fb720147b13d965d4d",
".git/objects/39/1ef342213414a755d3002dd08970542b66fadf": "3ef9f977a6a7a2bbaa8f969887331f02",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/97/28f1397d2ddc96f8ae4aba942bf72a3f48165c": "0dd3a7cef65b731ba6b33e09288147d9",
".git/objects/63/5af8918cfce7a56f3d10db5bdbd5eb3106e794": "001574c7acc38e37a7479596d656d20e",
".git/objects/0f/a85c524648738f63ff86e037a0ca5b422c8274": "a9c92ca870ee3cb32b34da93080b7c3a",
".git/objects/0f/09fa72f4964995513281a6afc3308d28c6028b": "de153e6f0eed8945658c0703dbab43cc",
".git/objects/0f/0b86024a6b2033ee47a1e1ed39be2eb0b2dc46": "46d15d7f1a747ab323f13af2deca7c10",
".git/objects/0a/c5024e71cd05c24bd61a2b88de33c1ca425982": "f8956ac6a13883b657286b667d9be609",
".git/objects/90/38ee5bdf58cd009d9c16def5b72b8f0b806ce6": "150b6a905334d13be23df597fa545708",
".git/objects/bf/e161e9a08b3c9b25f3abfdb5a3452d0bd0df30": "44bc2aedd65624c789390cfaceee29b8",
".git/objects/bf/dd97f94152f4edc19ffbe531026d038c181d96": "b19eaeaaac7796d9efd0cb2de0eb21cf",
".git/objects/d3/a36ddd61f974e6655fe941155488cbe22f61b5": "0bf52f0d6ecd6e5991a6fced22abcb92",
".git/objects/d4/e986eec26be50e72c24a503eb8a5dd09cfcd1a": "c7ccd17f956e7de4b0844ec6d5ba0097",
".git/objects/a0/35bf2e68b0fd74f6f6c8cae1d486bf4376488c": "d62a9b8f10f2575c9dba4d373502bc2d",
".git/objects/b8/0f0321b7d33fc0eb21caad941374a696d5de9a": "48df0185034a7bbe191537040ce6dce7",
".git/objects/b6/b6a198bc0fffb67b051e9543a4f486f10c3ef3": "52aaa75b5b45767b0b44dfcf717a7743",
".git/objects/a9/b28ca0258bdc9c1a579aa7c7a7573afe6e1795": "818fefcc6616cc0edcce2b3a6a6cd51c",
".git/objects/d5/31620f56e98035b2866ce21186a240a2ec8b69": "5c965c856fbab1c3b34fdc3b7ec54d61",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/f2e443691d9b209daebb5bf000435d31a4e5ba": "42855d8770fd7ab544aa73308baaecd2",
".git/objects/de/fa5344179f8539a45edb24ffb02a0ca2f0bb26": "392c3ba0eaccc1b7cbfa333eebe7a4a9",
".git/objects/b0/eeea1d46489f0a58b946739def854f7813c0fa": "cffa2c2410fe6ebd99058714d5bf6b55",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/fca3ce19cebf2e8194ce6cd25e3122e35ef7ee": "1a9c1e4f018ba3ae0d7f1a0ebbe9c3c2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/ea/784339f3ebb2ef24b969cece3d2229b79aaae6": "5ea8c032367a69c31ba5be3511f3b676",
".git/objects/cd/7afb1fe5b5cbc9a21b25974561a3d3a4a7e94a": "c73042a4a3d4ef6a884a1e4a89f93314",
".git/objects/cd/0ce49f57ee48cc5703141212b7d6c810a2fc33": "72b6a853cd94cbf05f6c6ffe3c3285c2",
".git/objects/e6/13bbb769ed958ac9fda7638db006c7d60a7e32": "e8de3d8378bcb7dc7bb21b8be722f9e6",
".git/objects/e6/36e43ece7ae3cbbf1a4f028a469a923584c615": "8e821dce601abd1fc263b48a63368d2f",
".git/objects/f0/269651540d23bcfa20a34f31d714fd851940b1": "9cfd4e6e866d1ec2d1c356ff9a88e025",
".git/objects/f0/14697b945455f3343301549a22d7376b1b3a3f": "8e18ae46a7a8e9a659f15b781e9688d5",
".git/objects/e8/a0d787a5ff49191236f39f49065e193bcfafca": "3e4153cb8007ab9e84ea41585574d4ec",
".git/objects/e8/fbdedd81e809a4513d4cce7c8e6fcc655d03ec": "4e4a559c9322a383a59b4f1701a77b26",
".git/objects/e8/1ff6b43310d4fcf6b8a2b858baec09832341f7": "11ce3ce7188ca80916586b263c2052df",
".git/objects/fa/1eeb10c1089e701c2656e68555d064d2d66844": "8048025d76992a696fed917cd9a9fff7",
".git/objects/f6/7ee001d4aed2456110a4cb3a5d6e89c30f67b9": "1d34d9adc1970501f7d700fd7243363c",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/10216fd9529e9e793831cf5d529af695896ccc": "d26a4fe86a5d711497b8bea689cb06a2",
".git/objects/f1/07cd561ba843d0ddbe44fda0e51404fa118a51": "a46959f2507270b809cb37e971e39bce",
".git/objects/cb/e2346fd2ae9da6c35d3a6f7f03d6780834d944": "a8bb4e6be1fbf59efb541e074106693f",
".git/objects/f8/c396c7af76012fb706e058cfae371c0f9b3ccf": "dfe7ac1c1d7bc209f78748ac4845106f",
".git/objects/ce/726a5487ad98653231e814d082f4346d1ec08b": "c049bc580139c2a5522d3a0cebfea70e",
".git/objects/ce/fbc7831bf2a538d7d960e31b0e3f9305d58bc5": "43d951dfb9296edc22c873b91f6bbd42",
".git/objects/ce/2c0417b88e58772edfb5520661f09917d36ad7": "608515af43c8eeedebac8bc3c91032be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/2d14b9a87e9c2a64fdebe44470e300ec678bec": "234fd4bbadeee29c7d7005791efc6f4a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/83/cd9d69a01f1e0ccdab889d52e80d25b21d5f94": "b6a086d8a89741dbc7cebf31c20608a5",
".git/objects/77/701aa4238abb315c47331b63e1827426ccf85f": "a4d53e6f3cac825953cd4014bfea88d1",
".git/objects/77/6ad22b4a545e72130154e9b05522d33fbbb0dd": "d771cdb41d31cf78aeaf24e8edd2a2ce",
".git/objects/48/ec40af698477bbcab77c7540794051c844964c": "52372d4675f0589081d8dbaf19201ed3",
".git/objects/48/5174cd48dfc1e5f1cfc08f5e45064d5df275ba": "f8424b0fdd825a115ca1d303358a1da5",
".git/objects/1e/2ed41ee6f9fc8bbb8299f527636d30a6605c74": "c04a4361a2a0095d7865b6169653b37e",
".git/objects/1e/8169c15a47cba7ef446b3b95e22b121acadb0c": "9247024c4175ecc80bb25e6208296c04",
".git/objects/4a/a88b09848d6ad99be84b77a2a800a911e2f714": "bf571cec6ef93f5e3a998942b282e3fe",
".git/objects/4a/d8ea0f2ea71d78de21cf31c847832d2bdce633": "575494ae9f18f7b4d9a0e72fc91d0cab",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/313f76cf94da64613083c6895cdb12a7bae510": "6133e55de74e9af88b632d93d157177c",
".git/objects/23/cad562aaccbe845aebf4eeeae518584dd02309": "0e5ab88930130b3b52b28eb200d7b3a4",
".git/objects/8d/b122f1ea9de9218035512b5c0bfc90fbfaa4a7": "fd3027f9c1261cecce2a6024b2ea98ca",
".git/objects/8c/70e54467c7a912936f96c348514b03d2235ca0": "02dc45bfa7068f9d0e9ac1b12d633fb3",
".git/objects/1d/1857b60cbc140284bcc443606e0763461442c1": "e4b5450fe32854bb11179f69d0562206",
".git/objects/76/14fc5aa2415c09719f363e9848c805fc991c6b": "1d320792878995dd951db9ad9eefa2ce",
".git/objects/76/62224f63592f83c8d4008c37fd9a3d97bdef1d": "9090149797aad948d738b0d7ec8e62ab",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/962b751abd0f91fea634980ae1fe26b5d25eb6": "7e0bdb2c6edabb7c17c8a4d6b9b1029e",
".git/objects/40/db87456bbfc00d24614438d97beeee6d7386b3": "393dc9afd4ff082cea46bc54bd6d7e6c",
".git/objects/47/1ec98a427eb1d0d3d8a6aee6fa46f9251ee556": "3833b604c32cc5e0ea5742a1ed66fed7",
".git/objects/78/8a8bbc08bbbeef30c82b927274005108dad851": "70da3a46414f516bb457ff93c579ad97",
".git/objects/8b/bf1ac24cb14b0250f27941ff452fc94d18c8c3": "1ab165c2fb8320249f1595fd43deeab9",
".git/objects/8b/7ae14183b0d8db71252fb45b956f61277a25d7": "d9da647dc2e3c333959e32578a7ad1a3",
".git/objects/8b/28a1d46012a4f91043eb452be321b31a3477c4": "a9d1fdc9d46826d785d3fe85ff6af5ec",
".git/objects/22/fd450938cc62941c021c4947ca892e0775cbb7": "81e80abf779be90b4f59cd800298bd05",
".git/objects/25/ec259c66d47da5e3ead0fd66ef5b44eb4eaffb": "4c0ded696da4e9baf2662ea168a3e4ee",
".git/objects/25/227b282a1dde869813ca98fe682d103e209323": "c90dc131119b401e192c9da7c4a1f78c",
".git/objects/25/a87a366d9300ac4f2aaef84a8cd5d3a4163145": "754c776dedd0425f6b2401562726b5fe",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7eeb8d60e263530e149f1acd28eac2e9",
".git/logs/refs/heads/master": "7eeb8d60e263530e149f1acd28eac2e9",
".git/logs/refs/remotes/origin/master": "fb1943f95d0d34fb3cccf965fca9ca79",
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
".git/refs/heads/master": "3c966303d588ba49e9abbbf9298bc71a",
".git/refs/remotes/origin/master": "3c966303d588ba49e9abbbf9298bc71a",
".git/index": "26a3f19d4c5e90c3059d9fb7cda635b6",
".git/COMMIT_EDITMSG": "36d6dedeab08bbf3da047cf58ad66e79",
".git/FETCH_HEAD": "d417e0b1cfd2e4e67858b988f2a9c846",
"assets/images/planit_logo_title3.png": "2572fd16a4d2a2b136104775be33f161",
"assets/images/planit_logo_title.png": "689dde328d5791c64938e2d45b129485",
"assets/images/planit_logo_title2.png": "b65f7fefd6b5d4bcfa31a1df1aa3902a",
"assets/images/welcome_graphic_brownpink.png": "958949ba0fe18a940398a8931e21e054",
"assets/images/goals.PNG": "907c68ba3c756d9e6eecd1fce934376f",
"assets/images/goals.jpg": "7ca883e6ef2d09e3cafb3c736e7298de",
"assets/images/another-planit-banner.png": "3dec2bb39debee381961ae68721a06ee",
"assets/images/Another-planit-banner.jpg": "562a49cc71c51de3246564bbf6e7c736",
"assets/images/backlog.PNG": "e166709d9b3b981e9dfa0764abaa82ef",
"assets/images/backlog.jpg": "15f3ad4645fa1f3d52ee1efc502802d0",
"assets/images/home-screen.PNG": "4ddbf4fb1b2b0c495dd2bc824c11b04d",
"assets/images/home-screen.jpg": "271439b397542dd13f9df8ce729d97b1",
"assets/images/another-planit-blurb.png": "daecebb910aa86278352e3226527b181",
"assets/images/login_screens_background.png": "b92d4c1cb38ca67ba3cde7a8af01153c",
"assets/images/stories.PNG": "9c2892c4ab15195e087bf83fb3261ede",
"assets/images/stories.jpg": "3d52e9aa165d99db286c7ae5883d825f",
"assets/images/cover.jpg": "673839c0ffa2440ca085d9e57bcb2f85",
"assets/images/profile.jpg": "32705359a43cb11196d9c84fe75ec10b",
"assets/images/profile.PNG": "a5cc37935b30795b8ff7d0c484e66157",
"assets/images/cover.PNG": "0d0c12f7489234402f6c14bcacc815ea",
"assets/images/black_stars_background.jpeg": "f7e5566d77833415bbf349f1915804dd",
"assets/images/another_planit_name_logo.png": "cd937d030d4d48431683b29bbf65272b",
"assets/images/planit_logo.png": "67f812855fb24d4dcd138f76ad0d968a",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "c554bd0a4792d5ca28d5e06fbd3c1139",
"assets/videos/another-planit-preview-new.mp4": "574902b076774db2171189fabcd863a2",
"assets/videos/stars-video.mp4": "9a67aee3451bee1ca6d450e57115526c",
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
