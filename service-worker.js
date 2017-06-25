"use strict";function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}var precacheConfig=[["index.html","5dd8082677c05bd215a485b4a663c569"],["static/css/main.42d93b6b.css","59fa5372a4940ee6b29d24a85d0fe919"],["static/js/main.635bd574.js","3266053eae0bc41735f18514d797b43e"],["static/media/0.089c50ad.jpg","089c50ada15a283d2fa260633fdeff29"],["static/media/0.1532062c.jpg","1532062c5e7b5bed9beedb37899c4079"],["static/media/0.1ee17a7b.jpg","1ee17a7bf265f70bb66532c442ab5aa2"],["static/media/0.31c84f5a.jpg","31c84f5aa99d2584086f7ee49546f396"],["static/media/0.3745a115.jpg","3745a115b96a6a83179c6dc3c061f2bd"],["static/media/0.5f124762.jpg","5f124762f76d2325e1cab4f550553ec6"],["static/media/0.76756d83.jpg","76756d83cbb57b487e2efa413fddcbcf"],["static/media/0.e56dc475.jpg","e56dc47573017e3ac5fe3cd1c4bd2126"],["static/media/0.e6d2af36.jpg","e6d2af36e7181457e26aee4fc2735fdd"],["static/media/0.e78341ec.jpg","e78341ec1ba44221e46664048e46a564"],["static/media/1.2a0f52f6.jpg","2a0f52f65ca9d094b6efdc8d41983e36"],["static/media/1.3794ef2f.jpg","3794ef2f3550253b818fd8a893cba06e"],["static/media/1.5d18c0ec.jpg","5d18c0ec787c4a6dc1b3b1a58b753708"],["static/media/1.829a1fab.jpg","829a1fab286caf5123091f2745b80804"],["static/media/1.8f2a4aac.jpg","8f2a4aaca917f9d27b26c6c4333da2b1"],["static/media/1.c1c8f1b4.jpg","c1c8f1b487a7df99346a887e9ba67365"],["static/media/1.c55dd09d.jpg","c55dd09df72c804ae38d637970e12f4e"],["static/media/1.cd2df78d.jpg","cd2df78dc0c35d49616765ea3de5fa33"],["static/media/1.d44a7786.jpg","d44a77868cc56272cc876d0645b147c2"],["static/media/1.f9e00315.jpg","f9e003153b239161ab024303a506d472"],["static/media/2.0e57181a.jpg","0e57181a90a68614f0f2792fd9a81ebb"],["static/media/2.1c33f6bf.jpg","1c33f6bf0a7b6ceb36719a51bbc69313"],["static/media/2.46ddadf6.jpg","46ddadf6009cc182c3aeda76f473d863"],["static/media/2.8312eb1d.jpg","8312eb1d90a518ec511e463de1362b46"],["static/media/2.a60b24d7.jpg","a60b24d7f634e79380eeca2ed4c6ad1b"],["static/media/2.cb283567.jpg","cb283567cc6c51502b9eed97ce771a20"],["static/media/2.eae2ed96.jpg","eae2ed96a179eb5e7d0567f1b88fdede"],["static/media/2.f030a6cc.jpg","f030a6ccdd21cf37b9732a12ded3ec08"],["static/media/2.ff5881d9.jpg","ff5881d9a849af5ac4cc94d53fd0fcf9"],["static/media/3.19268b83.jpg","19268b8314ec5038dbad831c583ff31a"],["static/media/3.329fb33a.jpg","329fb33a0709c8ea73ea6faf7b2eef56"],["static/media/3.3e2cb1b0.jpg","3e2cb1b0900be6b26ba189f908db8b8d"],["static/media/3.49c3a00c.jpg","49c3a00cfa455a0a31748bb4a46b68c7"],["static/media/3.6460093e.jpg","6460093ec0cb8557a05d90789e8f2d89"],["static/media/3.6ae9c8e4.jpg","6ae9c8e4de3758d264fcd75f43637799"],["static/media/3.6d9c3b9c.jpg","6d9c3b9c3f48cb749fd2bdd9e9b33f64"],["static/media/3.782453ad.jpg","782453ada2ebd536a700a3c5cdeca4ef"],["static/media/3.cbb858d4.jpg","cbb858d48782aa831f791389a1e0b27b"],["static/media/3.dd755a99.jpg","dd755a99431c1de82670db371f199509"],["static/media/4.18966a8f.jpg","18966a8f460c5b5808b659e35d24a7dd"],["static/media/4.3b54e453.jpg","3b54e453d65c1afdfb8d0038bb588b9a"],["static/media/4.60cd67e5.jpg","60cd67e54416e536d68646b7ea80975b"],["static/media/4.6bfed013.jpg","6bfed0137aaa7d0e138afff0a6e5545c"],["static/media/4.8dd8542b.jpg","8dd8542be538cdde310f83f6f02565aa"],["static/media/4.9d9bd001.jpg","9d9bd0018ef21d1ca50506c3050242c9"],["static/media/4.c9bcf4d7.jpg","c9bcf4d78a24ea12e14f238115371ee5"],["static/media/4.d6df2881.jpg","d6df2881e06bbae6cefe54c42cb8d1ed"],["static/media/4.d701343b.jpg","d701343b24e53abbca4a8cc6c10a615c"],["static/media/4.e9ebb04a.jpg","e9ebb04a53d41094a805ca8391cbc11e"],["static/media/5.2b9088ae.jpg","2b9088ae4d964971f65ad3d9b6a56d62"],["static/media/5.5426bbfc.jpg","5426bbfcbdc5488678f5c995b5d3e054"],["static/media/5.71e8efb1.jpg","71e8efb1810b982edb2adeec85d0e670"],["static/media/5.a568579c.jpg","a568579c68ea3fdde7449127821bd96a"],["static/media/5.a887c586.jpg","a887c586776c0cfda2e7b77179760522"],["static/media/5.b734280e.jpg","b734280e6c44289d7c799f1fbc3a6ed3"],["static/media/5.c0d8d006.jpg","c0d8d006d6f01167ff12a8f69a143395"],["static/media/5.dbfe9bf9.jpg","dbfe9bf95030fc02448d7133e88bddd0"],["static/media/5.e8a74791.jpg","e8a74791de394658850c103122c30798"],["static/media/5.eba6a73a.jpg","eba6a73a721725fd3d1d721ad2b6cdc3"],["static/media/6.12fe5714.jpg","12fe57140cd6eb234b8f61a26cb74816"],["static/media/6.182505a4.jpg","182505a428e5bfb53135b2fdb2bb7b3d"],["static/media/6.23e4d12d.jpg","23e4d12d9ae18217c4afc944e12b6e2a"],["static/media/6.39a5e5e5.jpg","39a5e5e523cb6f0265a8f50cc54b7e46"],["static/media/6.3f6c7808.jpg","3f6c7808eeac90b478079bdbc9cd0904"],["static/media/6.424ec9f4.jpg","424ec9f4974fd2b7343f9d35cf6b8063"],["static/media/6.76e18089.jpg","76e180894388251e598f073e21a5b601"],["static/media/6.aa3a0c75.jpg","aa3a0c75f9ef4e663f77057c3aa85f49"],["static/media/6.b63d6191.jpg","b63d6191c6eedfce17bbb6b3a718eb8a"],["static/media/7.198047c6.jpg","198047c628ce1d4890b34bc4749a47ee"],["static/media/7.56920032.jpg","56920032bff1d4f7a22a28b2d8e33ca9"],["static/media/7.5af3a175.jpg","5af3a175e9776b2bbf4e369af75d7426"],["static/media/7.5d656fa4.jpg","5d656fa41ac386b1fb199d36ea88e832"],["static/media/7.6793ba57.jpg","6793ba57e96f1b131c44528c663469d9"],["static/media/7.82bf35a4.jpg","82bf35a43e9f46558507458eaaaceb2c"],["static/media/7.8e7e372f.jpg","8e7e372f1737f74ea302f332602752b0"],["static/media/7.bd3c1900.jpg","bd3c1900e97f94d4e5aed9c234c3171a"],["static/media/7.bff6eea9.jpg","bff6eea94fc8f3ba373033b36f8ea8a0"],["static/media/7.f5a377b8.jpg","f5a377b816565e8c855dbaa8fe5c2fc0"],["static/media/8.277d0969.jpg","277d0969a6d63f6ab2e04b6ba768b8f6"],["static/media/8.649c3fd4.jpg","649c3fd4927a4f5d488aa5da7ca275ca"],["static/media/8.64ae9680.jpg","64ae9680101612dbb1268901e6801b63"],["static/media/8.672121e1.jpg","672121e1f3f396c4a818a7ba71d8569a"],["static/media/8.81decd90.jpg","81decd9070aa57ad0d224e6440629f46"],["static/media/8.a7cdec4b.jpg","a7cdec4b0c4596f80fad5d012483fcb2"],["static/media/8.a85f2fe6.jpg","a85f2fe6c464065d2a58c28df28225e9"],["static/media/8.bc45b28c.jpg","bc45b28c3bd8609c1945a81ab01837e3"],["static/media/8.cc89b5c2.jpg","cc89b5c2d966898e1f9171f79c874fd1"],["static/media/8.cd7fc392.jpg","cd7fc392f39015726e8be2b3d3a12545"],["static/media/9.20d65c5b.jpg","20d65c5baf975ed6d44db34e8f12fd6f"],["static/media/9.2bcb5a84.jpg","2bcb5a84a0b833143cb2ab6bb7581786"],["static/media/9.3aa6ad20.jpg","3aa6ad2086c6eb945bb4ca5399973d67"],["static/media/9.5beba3c9.jpg","5beba3c939e3124d5d707287729e8823"],["static/media/9.82b03cc2.jpg","82b03cc29d9082c06de5e296dff3b771"],["static/media/9.9f019a9d.jpg","9f019a9d9d64d51164a2172bca54f7a6"],["static/media/9.a08cca63.jpg","a08cca63c06bf12df4fe6902cf2c0270"],["static/media/9.a1f4b936.jpg","a1f4b936526f73348176c27a3de7dd25"],["static/media/9.cce71e10.jpg","cce71e10e31eaf0213d9e93b014456bd"],["static/media/9.f1890d45.jpg","f1890d4548ebda26dcc56587313ffe8e"],["static/media/casumo.85889828.png","85889828508d3fd88dd40e54b157098c"],["static/media/female.72a7e13b.svg","72a7e13bc9e82a3574d76a69b5fef932"],["static/media/fontello.01c05585.ttf","01c0558557402aa2b4e7dfa548d071d9"],["static/media/fontello.2b2386b8.eot","2b2386b85dbbdfe628746d66211bb061"],["static/media/fontello.8f3dbe17.svg","8f3dbe17cdf2825babada326a5dc15b2"],["static/media/fontello.c3604677.woff2","c3604677d872b62a684d4b05c0fc8bc0"],["static/media/fontello.eb826860.woff","eb826860906ead5dcd9750be3a7c48f8"],["static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["static/media/lineto-circular-black.1293414b.woff","1293414bdbd3a265e505d71385635591"],["static/media/lineto-circular-black.751e867e.svg","751e867eafdc97496a5395431da88d3b"],["static/media/lineto-circular-black.8d03ecb5.eot","8d03ecb57a8cfc5f66275656b81d4c28"],["static/media/lineto-circular-black.c02c9945.ttf","c02c9945974e30b10bee47cb9116e7e6"],["static/media/lineto-circular-pro-bold.04660651.woff","04660651b29c359b7f0ee0017a6ef625"],["static/media/lineto-circular-pro-bold.2d9d03c5.eot","2d9d03c55a1d271a7e0577e14bb667c8"],["static/media/lineto-circular-pro-bold.a3d08e81.ttf","a3d08e81922d542d0b9ced75c665de3d"],["static/media/lineto-circular-pro-bold.b4e7f2d7.svg","b4e7f2d76f5299324a7815994db4367c"],["static/media/lineto-circular-pro-book.335fbbc0.eot","335fbbc07d9db688047c480235e5750b"],["static/media/lineto-circular-pro-book.8fefaf3b.svg","8fefaf3b475120d35cafed31814480f0"],["static/media/lineto-circular-pro-book.9d1891cc.ttf","9d1891ccb5d7184f7c99396a8e224d05"],["static/media/lineto-circular-pro-book.c011b1a3.woff","c011b1a3b4fc612b07a5a541384c0980"],["static/media/lineto-circular-pro-bookItalic.43c21b2d.ttf","43c21b2d5feda3fdc916933a4b66682a"],["static/media/lineto-circular-pro-bookItalic.88709250.svg","88709250082025f7de08f4f48393de5b"],["static/media/lineto-circular-pro-bookItalic.dc208c24.eot","dc208c24d520f140037a4b4f1a67a4a4"],["static/media/lineto-circular-pro-bookItalic.e8836378.woff","e8836378a00fbc063f75e9861a3ec015"],["static/media/lineto-circular-pro-medium.152f0275.woff","152f027545dac5e43466e7f9b2acc69a"],["static/media/lineto-circular-pro-medium.23b18a4e.svg","23b18a4ee04f7d00cf4d2f6246c9bd44"],["static/media/lineto-circular-pro-medium.35c46319.ttf","35c463195d16df774fcad28fe78c2283"],["static/media/lineto-circular-pro-medium.48c9ffed.eot","48c9ffedc4a445b6de456637778248fe"],["static/media/male.ce65d9da.svg","ce65d9da69d67d8776757d1ddcdb8c63"],["static/media/non-binary.92e7cf88.svg","92e7cf88fd505f4f789cc678f3d1e832"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var c=new URL(a);return"/"===c.pathname.slice(-1)&&(c.pathname+=e),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(a,e,c,d){var t=new URL(a);return d&&t.pathname.match(d)||(t.search+=(t.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(c)),t.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var c=new URL(e).pathname;return a.some(function(a){return c.match(a)})},stripIgnoredUrlParameters=function(a,e){var c=new URL(a);return c.hash="",c.search=c.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return e.every(function(e){return!e.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],c=a[1],d=new URL(e,self.location),t=createCacheKey(d,hashParamName,c,/\.\w{8}\./);return[d.toString(),t]}));self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(e){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!e.has(c)){var d=new Request(c,{credentials:"same-origin"});return fetch(d).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var e=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(c){return Promise.all(c.map(function(c){if(!e.has(c.url))return a.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching);e=urlsToCacheKeys.has(c);e||(c=addDirectoryIndex(c,"index.html"),e=urlsToCacheKeys.has(c));!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL("/tech-test-books-ui/index.html",self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(c)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});