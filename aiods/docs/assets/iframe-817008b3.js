import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const E="modulepreload",O=function(i,_){return new URL(i,_).href},a={},e=function(_,n,c){if(!n||n.length===0)return _();const r=document.getElementsByTagName("link");return Promise.all(n.map(t=>{if(t=O(t,c),t in a)return;a[t]=!0;const o=t.endsWith(".css"),d=o?'[rel="stylesheet"]':"";if(!!c)for(let m=r.length-1;m>=0;m--){const u=r[m];if(u.href===t&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${d}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":E,o||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),o)return new Promise((m,u)=>{s.addEventListener("load",m),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>_()).catch(t=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,l=p({page:"preview"});R.setChannel(l);window.__STORYBOOK_ADDONS_CHANNEL__=l;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=l);const f={"./src/stories/Introduction.mdx":async()=>e(()=>import("./Introduction-1e15dab6.js"),["./Introduction-1e15dab6.js","./jsx-runtime-ffb262ed.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./index-c180c5b8.js","./index-d475d2ea.js","./index-d37d4223.js","./index-b67253cd.js","./index-356e4a49.js","./index-a1cf9e47.js"],import.meta.url),"./src/stories/Configure.mdx":async()=>e(()=>import("./Configure-a5996a43.js"),["./Configure-a5996a43.js","./jsx-runtime-ffb262ed.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./index-c180c5b8.js","./index-d475d2ea.js","./index-d37d4223.js","./index-b67253cd.js","./index-356e4a49.js","./index-a1cf9e47.js"],import.meta.url),"./src/stories/Changelog.mdx":async()=>e(()=>import("./Changelog-2023817d.js"),["./Changelog-2023817d.js","./jsx-runtime-ffb262ed.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./chunk-S4VUQJ4A-1e35f614.js","./index-c180c5b8.js","./index-d475d2ea.js","./index-d37d4223.js","./index-b67253cd.js","./index-356e4a49.js","./index-a1cf9e47.js"],import.meta.url),"./src/stories/Crud/Service.mdx":async()=>e(()=>import("./Service-5262a43a.js"),["./Service-5262a43a.js","./jsx-runtime-ffb262ed.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./chunk-S4VUQJ4A-1e35f614.js","./index-c180c5b8.js","./index-d475d2ea.js","./index-d37d4223.js","./index-b67253cd.js","./index-356e4a49.js","./index-a1cf9e47.js"],import.meta.url),"./src/stories/Crud/Introduction.mdx":async()=>e(()=>import("./Introduction-6200766c.js"),["./Introduction-6200766c.js","./jsx-runtime-ffb262ed.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./chunk-S4VUQJ4A-1e35f614.js","./index-c180c5b8.js","./index-d475d2ea.js","./index-d37d4223.js","./index-b67253cd.js","./index-356e4a49.js","./index-a1cf9e47.js"],import.meta.url),"./src/stories/Crud/Controller.mdx":async()=>e(()=>import("./Controller-e4878ebe.js"),["./Controller-e4878ebe.js","./jsx-runtime-ffb262ed.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./chunk-S4VUQJ4A-1e35f614.js","./index-c180c5b8.js","./index-d475d2ea.js","./index-d37d4223.js","./index-b67253cd.js","./index-356e4a49.js","./index-a1cf9e47.js"],import.meta.url),"./src/stories/Crud/ApiController.mdx":async()=>e(()=>import("./ApiController-d55d9863.js"),["./ApiController-d55d9863.js","./jsx-runtime-ffb262ed.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./chunk-S4VUQJ4A-1e35f614.js","./index-c180c5b8.js","./index-d475d2ea.js","./index-d37d4223.js","./index-b67253cd.js","./index-356e4a49.js","./index-a1cf9e47.js"],import.meta.url),"./src/stories/Changelog/3_0_0.mdx":async()=>e(()=>import("./3_0_0-3a2afdcc.js"),["./3_0_0-3a2afdcc.js","./jsx-runtime-ffb262ed.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./index-a1cf9e47.js"],import.meta.url),"./src/stories/Page.stories.js":async()=>e(()=>import("./Page.stories-31d6d614.js"),["./Page.stories-31d6d614.js","./_commonjsHelpers-de833af9.js","./index-356e4a49.js","./Header-5caaa898.js","./Button-78a5861d.js","./vue.esm-bundler-15c7cf7a.js","./Button-bc1a867b.css","./Header-a6911580.css","./Page.stories-ece1482a.css"],import.meta.url),"./src/stories/Header.stories.js":async()=>e(()=>import("./Header.stories-1f456663.js"),["./Header.stories-1f456663.js","./Header-5caaa898.js","./Button-78a5861d.js","./vue.esm-bundler-15c7cf7a.js","./Button-bc1a867b.css","./Header-a6911580.css"],import.meta.url),"./src/stories/Button.stories.js":async()=>e(()=>import("./Button.stories-85ba5de8.js"),["./Button.stories-85ba5de8.js","./Button-78a5861d.js","./vue.esm-bundler-15c7cf7a.js","./Button-bc1a867b.css"],import.meta.url)};async function P(i){return f[i]()}const{composeConfigs:T,PreviewWeb:L,ClientApi:w}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const i=await Promise.all([e(()=>import("./config-132eb13c.js"),["./config-132eb13c.js","./vue.esm-bundler-15c7cf7a.js","./index-b67253cd.js","./_commonjsHelpers-de833af9.js"],import.meta.url),e(()=>import("./preview-5ef354f3.js"),["./preview-5ef354f3.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),e(()=>import("./preview-c6f86508.js"),[],import.meta.url),e(()=>import("./preview-a60aa466.js"),[],import.meta.url),e(()=>import("./preview-770cc08b.js"),["./preview-770cc08b.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),e(()=>import("./preview-25cb0eda.js"),["./preview-25cb0eda.js","./index-d475d2ea.js"],import.meta.url),e(()=>import("./preview-d8c963a4.js"),["./preview-d8c963a4.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),e(()=>import("./preview-b79ea209.js"),["./preview-b79ea209.js","./index-d475d2ea.js"],import.meta.url),e(()=>import("./preview-d06fc6bf.js"),["./preview-d06fc6bf.js","./index-d475d2ea.js","./_commonjsHelpers-de833af9.js"],import.meta.url),e(()=>import("./preview-ef3ac039.js"),[],import.meta.url)]);return T(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new w({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:P,getProjectAnnotations:I});export{e as _};
//# sourceMappingURL=iframe-817008b3.js.map
