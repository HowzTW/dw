if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const a=e=>n(e,r),f={module:{uri:r},exports:o,require:a};i[r]=Promise.all(c.map((e=>f[e]||a(e)))).then((e=>(s(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DK36LRBj.css",revision:null},{url:"assets/index-Ho47cDh5.js",revision:null},{url:"data/favicon_OLD.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"favicon.ico",revision:"e08dd2c54d2ed02e037e31c228eba0d0"},{url:"images/icon-128.png",revision:"a786d468f45068cfb5ee13739cccc756"},{url:"images/icon-144.png",revision:"34b7d2fcb373649530b69eefc27a4891"},{url:"images/icon-152.png",revision:"dff2ef082753add3e21aaf5c1ea328e7"},{url:"images/icon-192.png",revision:"9426678bff84bbfc62d29f8c23c66651"},{url:"images/icon-256.png",revision:"766d7b278f54a04f9ef4a8310eb92b94"},{url:"images/icon-512.png",revision:"6304970306a831cb8fa5ea821929cc33"},{url:"index.html",revision:"02c46a02111524490c5c4d7943b335e0"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"images/icon-128.png",revision:"a786d468f45068cfb5ee13739cccc756"},{url:"images/icon-144.png",revision:"34b7d2fcb373649530b69eefc27a4891"},{url:"images/icon-152.png",revision:"dff2ef082753add3e21aaf5c1ea328e7"},{url:"images/icon-192.png",revision:"9426678bff84bbfc62d29f8c23c66651"},{url:"images/icon-256.png",revision:"766d7b278f54a04f9ef4a8310eb92b94"},{url:"images/icon-512.png",revision:"6304970306a831cb8fa5ea821929cc33"},{url:"manifest.webmanifest",revision:"4acd34656c90200a7fe5103975cda95e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
