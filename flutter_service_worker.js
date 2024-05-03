'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3d42d5084be0c33dc87a4eb66186020c",
".git/config": "71d1648a266c1dc5e74e3708f4d4273b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bdecad82203b98640032a08b1692f6ca",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f0bb6353942e39d51038399e79cdd416",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "543c1d0cd0a21c5af52e3541758eb393",
".git/logs/refs/heads/master": "543c1d0cd0a21c5af52e3541758eb393",
".git/logs/refs/remotes/origin/main": "8170076ad834b10ac569a02c1c0c56fb",
".git/logs/refs/remotes/origin/master": "dbd5b6657c30cc255f427d179a569ac7",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/b7b488b483eafb24543fe76926e66459c00264": "144cb386c2c5a0fe5181e8cfc710cbb0",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/16eef3f6b9a499e80fc61ad19b6e8cbdc39af3": "ffa51e543a0f2d0ecbf9bcb018166611",
".git/objects/0c/27a97270ba08a3e48256420c677501089347e7": "bd5f80a13073c9b6a19da977209d2ac1",
".git/objects/0d/cc58f4afd87309afa6d3799dcd1fe0853ed6e5": "82f338a89d2537afb29344265b0be438",
".git/objects/10/4542b79e5d78675f8e33957f84918b37efe9c4": "bcddfa742c5a346935e9817cf0e7e53d",
".git/objects/11/4c26afe0a2ce16a962e3620116ffb4b17b2c88": "890cf0114ca99c6aa636993764ed204d",
".git/objects/13/80513628f28b5834446696c06a32f707516670": "35d2683aa54c0685d63b098d725bd323",
".git/objects/15/3f329e888c6867c0974e27a924eaa8de74d478": "df1b5a1551d996e0ec433e2096adc4bc",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/fed1f2b793868e5dbc8b5545ffe10153b69664": "9b92ef577fa8a96433c08e9db417b57a",
".git/objects/1e/e0a0982588106bdb48d3ae71da861d6a5fa6ce": "77a36c5577b805deffbda894c01c3134",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/383857b1dd90c2af94fa62b3992c248ad10b38": "b50546b343c96c6c7929da1191441b5e",
".git/objects/2e/f92f0808e74e685d9087763ec528a52329c19b": "9c195e2e17de807c06737d1c4d6d3781",
".git/objects/33/69d85fabeedf373bb9c8e0ca51f4e24ab20e6d": "4cba39c79139f035d876d4f76be95110",
".git/objects/33/69e3b553b41417ad163f60277e37971ad4da5a": "72e5dab777c009f30d526dd550138110",
".git/objects/34/3a75d3a3ceb40cfa0c3c4f3088c10aa3193add": "acb305a9e2ffd64ff466eba410f1798e",
".git/objects/36/d06f29caa280465f3e69f108bfb69021b9c369": "9193a598fed267ba4d263577897909b6",
".git/objects/37/d7f23f8adb44bb52d689d3e573ba4cb2fc721c": "0f3ff86e039d49444133823a7d472e74",
".git/objects/37/ef5d075caeb0fc1a8c70239556fe1b4d510fdc": "3dce24fbbd5c9552c7dcf3c76bb5b019",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/b4db6f1609231076d57c01e18403792ab5a2f8": "bcd85d0a6298cc31865d1089991a892a",
".git/objects/40/5dcd547934e0393880b99095bd4b9edc0f7b9e": "b1c76106cbd763a7ae64325833ca810e",
".git/objects/45/d16d80a1a1dad93f08f75b2b52b26114a66137": "f325ebb836dfe3f9b59a912ec8c98072",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4c/5c08c5b9482d9f73cecb0f403ea41477f6bb93": "e61418705598d4855f2d28400d04f9cc",
".git/objects/52/75f5519b45a5a279a05901bdebe3e8addee1f4": "e8bc98812bfd6e6821cdf1987c969dec",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/52/8bc26f40ca8c640a30bcd780e7ac57b7b90fff": "9199b39d5976c93801774cba72d02849",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/526ae8420e5540a31fe2fa6a5244958db145e7": "ffdaf8d12101ba9306fd5d098affbc3b",
".git/objects/59/845ddb2dc6bc87cd297b323074d82ff3f769cc": "78010466f10b88c019213e41cae805e4",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5f/6436d83381cd7a4b8c3f4652566685ba7ef2d9": "e8c2ec4af4018ee666873a09442f17e5",
".git/objects/60/79225c7ae9cfdaf64f628abdd36d88ca163ea8": "8439f8cb476fea67381b7599bd6b2f3b",
".git/objects/64/124e060d33bbe4fd2595a937f3ae7d9729c40d": "a89b0839ae31e134c4bd6f3728fd75b1",
".git/objects/6c/da714da6d71ad0b9736a103a7b69d7d6ff4457": "90f2ba532f22460444bbcbf6e7038c5e",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/763c4b0e8fa4288f619069a698a33fbca97ac8": "ee2077e479050d9bd1393436667f24bd",
".git/objects/71/04676b73e7be94cb6c39629c8c2569adcff984": "3a6d68b3caf5b9c2a635e4d6e46290e4",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7e/b5c231c34599df14e960c1ef43d37e823bf9f5": "8b0299e5d9b284bbae6f4aa6811a703b",
".git/objects/81/cb72ed1597a5c16c0e8eb4df5d8ba10d55d5fb": "7bec09665518dce5991dc04d6481ea0a",
".git/objects/81/ee343ff6097594e4cbeb0ed084ef8cdf3b9c29": "426f0fa7590f2cc4d390e21fa30f0c9f",
".git/objects/84/4e43c5649876af085678e1d69adcf0e0012770": "76b71c28474b16cdfc0678a9b7814d29",
".git/objects/87/2c431c77da4d2f6357d043ab6077a52a3bebff": "5ce13e9beccc92e2973b8c2ccae134cc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/b0ea63fbf418016676c1aaee60c3845f50bd66": "7be5aa573d83ca58c83c34557f469ce5",
".git/objects/90/555b671f7593ee940636c2f0d0bcc6536b9593": "9cd7ede87e96942bce04540225fd33b3",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/99/3fd3b1bc525c152ba954d95141107236199da3": "3aec59e45dfb4364a2eee710671d8137",
".git/objects/99/e34861de2beaec0375e09bc8ca61a30c494f15": "f021c18612bf4df4910f77e7e687caa1",
".git/objects/9b/0bbadc0385830d2cad34bc17dd2e81e4ce54c4": "60bb4350b1cdcf2c35f2b6818f8331a0",
".git/objects/a9/e3fe65375e2009e99e3a59a79f1b1de9860774": "06f5e1159bd13a5441ac7deb90b143df",
".git/objects/ab/b3f8b69a1ca01095ec574052daf5c4bcfc96b3": "45797e6253425b8b820d1b6ae600f0a5",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/e037d3af55a8aa38747f739f8ad521bf42fa17": "80c6cb8e4d08d8b0654f6aa7a315606b",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/18e22e3ba20267460be8d6a6df768378547968": "f33d1b22d834d8b836c52c1fc7d1d6a7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/298a37e43c61675ffcd486be962e7eb3a8397c": "3963d6cac263ed0f6b7a4f1d7ce6d968",
".git/objects/bd/216104e88f11cbaab014c7c40106b2d7936e6f": "935a1bc612d6d80fac8f387851364c5b",
".git/objects/bd/8f4eca4c69da75d5237543bfcce9cc0a9f6e7d": "5aa5ad1240448fc10b1c071f7e4d9f51",
".git/objects/c0/f3c7828af278bd8f9642c8081edf24cc336d59": "71dde733998f702f47a28d74c0ef159d",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/108230076da726e9a264611a04127f50162449": "a2538b41a24449d481cb7061b9aafcba",
".git/objects/c7/237732bb77d64060bee0a2ea498783de42560b": "8daf741b8b99f509fccb9d3747bf8a7f",
".git/objects/c7/410819b6c6dd6726a92a8ec2327e2e382a220e": "dfbf9e0a15cc3597b96780c1e0347f39",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
".git/objects/c9/024b0dfdbd7a2b9d3f42af1da5ffe2e708b482": "260a3bfaa5159ece9c92e1cffa8cc65c",
".git/objects/cd/647477cf646b156fa78edbf40ab3b78a8f99c5": "7a4085a53fff01e1cbc4b473fcc5e845",
".git/objects/ce/eb34504f2142cc4f2276f63a93fb3b1b186984": "5e221e54c5a1deb779600ec0f74d9ebe",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/4742283e4130deb863cb8df7790062ac60a688": "8e85a004c1c182564ebcb5d0097308db",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/0fed03c66e7d16c15c556d7a8a89ab3265a515": "9ad8702a85b630eb78771f8e90ee12ef",
".git/objects/dc/076586b840cb333342924390f2804abb64aa63": "1582be130d7e3e5d951aa16a6a56bceb",
".git/objects/dd/5a74cb5282b5e6c10df4c4d7a5c3486c67f6c4": "8c3d850083e3ab9d5d0815ec6a1c7ab7",
".git/objects/df/f077961ce51a2bedbae0d4e65dc4730c9554ec": "af9e25503b52574eac37d4518f0c1e1b",
".git/objects/e0/9dab44f80f060186403d48d3068d40a3b1eab6": "6b399b54605a07e4a324250d5d04064c",
".git/objects/e0/dff7c1c1493087e21c712f0e2e094907e9e9f9": "2de8dbbeb926d24dcb23da58c8add5fa",
".git/objects/e2/0cf3652d07c5d93894d22ba159f903b4376993": "3a88426c192e81ff3b9156ad3d71c581",
".git/objects/e3/31783d09fcc8db16139da016183dc4904eeb9e": "3cd61c3e0663512774b47e6bf7e87e9e",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/c568ca57cd4d4e6ed1fde4a5c014488ab6d63c": "872d42c06ee674050fd3a217fffbb64d",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/c4c10bb397a501937290283bc82b1d16fe3bb2": "9b193ac5978d958e8b93abdd1253cd10",
".git/objects/e9/4d55c2e93e0776d2b3dcb9ad6c903f066bca5a": "768e7a310970773a46b3c717d97d88f3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/da98dbcc468714f2bb57f1029f381c58dc0379": "867077bb95b6fc6f6c7aa8c382bbe794",
".git/objects/f9/44b41fa5b52a9a1ef52a6e548f64b7069a8274": "7cf8c5a5d7dee6b56fc96841b05b8cbe",
".git/objects/fd/2ccc13f634b0c448548791c7cb569ac99ed110": "8690aad78b5297cbcf21c7ee10fcbe9f",
".git/objects/pack/pack-a3b33a93d1104e1c1742304a20fffb9d95cb981b.idx": "356ddda8ab503e8cdb14192ed1cc888e",
".git/objects/pack/pack-a3b33a93d1104e1c1742304a20fffb9d95cb981b.pack": "892770f54135977bdd0804e8fe4773a8",
".git/objects/pack/pack-a3b33a93d1104e1c1742304a20fffb9d95cb981b.rev": "307890c6255612c3ae11348a30dd7e6a",
".git/refs/heads/master": "d6ddd356831d274dc90af436486b8b42",
".git/refs/remotes/origin/main": "87649b53bf08ff1a3401b59b2ecc074f",
".git/refs/remotes/origin/master": "d6ddd356831d274dc90af436486b8b42",
"assets/AssetManifest.bin": "25683366d611ea75b8dc1d20943e1e8e",
"assets/AssetManifest.bin.json": "f8d86d7c5bd50cfb22df5f678cff3731",
"assets/AssetManifest.json": "9abdd8443300447357e4b4f3c8758c3f",
"assets/assets/images/file.png": "a13f6054ede996dea1aebdf3f5f63bf0",
"assets/assets/images/grafittiLap.jpg": "dadebc7af0be57dd74b3fcb3f35f596f",
"assets/assets/lottie/inprogress.json": "778f8bd133078d43885a885f32ada5f0",
"assets/assets/lottie/lottie1.json": "1f6aeec6c8588033ca0a249f9bbcc831",
"assets/assets/lottie/lottie2.json": "056f203c1fc9b2061d57663a31ab7644",
"assets/assets/lottie/lottie3.json": "b6a331a54f98cd1745bd6a91a2541a48",
"assets/assets/lottie/lottie4.json": "102603edbb786806c531a468ced722fc",
"assets/assets/lottie/lottie5.json": "5624059ab9ac9a15a10793e5cd3834d2",
"assets/assets/lottie/lottieme.json": "bd9e5acabdd6d618c4c3cd466ae1ede8",
"assets/assets/svg/adobe.svg": "637d26c31087f301fca2a9ee0091faf6",
"assets/assets/svg/api.svg": "2c4bd982019a6e5a2d8225a126cd2d6b",
"assets/assets/svg/c.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/svg/contactd.svg": "e92b9f1698ebe1f90959d40262a17789",
"assets/assets/svg/contactl.svg": "8b937de105687abb09ffbfb61027d013",
"assets/assets/svg/css.svg": "45fb055fa6255e74baa94eb317a8abd2",
"assets/assets/svg/dart.svg": "fee3149820a9e475117012acb1cb7426",
"assets/assets/svg/edud.svg": "7d781f2629206fff8a391e90ce070cf2",
"assets/assets/svg/edul.svg": "7780cb2d6cb4d1fc2087fa787aa55c0a",
"assets/assets/svg/figma.svg": "6c75ee30c2fbcaa599cf38d0270c9b77",
"assets/assets/svg/firebase.svg": "9ccad3cf532e7c342a8830129fab9ec7",
"assets/assets/svg/flutter.svg": "f60a3bf9f9f984e00e33af91a3673e7c",
"assets/assets/svg/githubd.svg": "81c20062ac902cb1c429e4da0113bfa7",
"assets/assets/svg/githubl.svg": "e11b9bfc9e20f1bb159b7ed37f5d5310",
"assets/assets/svg/homed.svg": "3ab899870147d1966cf183041d6eca3a",
"assets/assets/svg/homel.svg": "108fd1da90336d51cf053107f5b13604",
"assets/assets/svg/html.svg": "0c9a2130468c0f075fd13caf6eac0d2b",
"assets/assets/svg/Inkscape.svg": "cc3a9a4bdfe1ca4951e3009ad90042fe",
"assets/assets/svg/insta_dark.svg": "5173e615928b3eb0806b02e350af1b6c",
"assets/assets/svg/insta_light.svg": "8cebad884c07a501a0093155c9b91ea1",
"assets/assets/svg/java.svg": "4e8df36231a85c4b577a6046963bc36a",
"assets/assets/svg/javascript.svg": "8902caa99186070eeb5289779445534f",
"assets/assets/svg/linkedin_dark.svg": "49ddb1b82789a0742bf4a95ea8d91731",
"assets/assets/svg/linkedin_light.svg": "e4c99bcb582e1896db88c52128365003",
"assets/assets/svg/maild.svg": "7a90354ccd49bbe6821410fbd302e150",
"assets/assets/svg/maill.svg": "373398c718e5132bdc3be0aec40ecd6f",
"assets/assets/svg/mongodb.svg": "714e2687ae0ac2892891d0bbb82e911f",
"assets/assets/svg/mysql.svg": "dc93b96a581ae78ff213586c0123f205",
"assets/assets/svg/nodejs.svg": "44e4fd46c7ac1e696952cd2ccfca36e9",
"assets/assets/svg/photoshop.svg": "6b704c295213f629d81330e8b794d183",
"assets/assets/svg/projectd.svg": "3a7f0b5059502310d5de700a63f24bf8",
"assets/assets/svg/projectl.svg": "4a3c7162ef04e80895078420660dd1b0",
"assets/assets/svg/python.svg": "c73fc780c848b15821a97098596fb1f1",
"assets/assets/svg/skilld.svg": "a56df33485d6954e0697a51845a67884",
"assets/assets/svg/skilll.svg": "03d1aa481bbc0caf38f3a810b3c2028a",
"assets/assets/svg/whatsapp_dark.svg": "52a45d6025dde6711f78939d4cb78165",
"assets/assets/svg/whatsapp_light.svg": "7178f355e79edc4053aaebf38181a7ad",
"assets/FontManifest.json": "6410a9cee6e4224422b5b5b0ada200f5",
"assets/fonts/MaterialIcons-Regular.otf": "ded7ecd3425be9b77960a4a10a78da36",
"assets/NOTICES": "bdc769dc89e239c01db069206ba06968",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/nb_utils/assets/icons/ic_beautify.png": "a680304f89d7cf2de6ebaabcb05e6947",
"assets/packages/nb_utils/assets/lottie/typing.json": "e5cad2457b51962714dfde13e0931a9d",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "4fe1928e582fd2e3316275954fc92e86",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9833448000bd309561c35257217a798f",
"/": "9833448000bd309561c35257217a798f",
"main.dart.js": "b05aa5026ee48d8fbd1c3b1e940c680a",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
