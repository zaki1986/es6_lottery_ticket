!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n(2)},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,n,r,o){var i={};return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}var c,u=new(i((c=function(){function e(){o(this,e)}return r(e,[{key:"time",value:function(){return"2020-01-01"}}]),e}()).prototype,"time",[function(e){return e.writable=!1,e}],Object.getOwnPropertyDescriptor(c.prototype,"time"),c.prototype),c);console.log(u.time());var l,a=void((l=function e(){o(this,e)}).newName="text")||l;console.log("类修改器添加类名",a.newName);var f,p,s,y=function(e){return function(t,n,r){var o=r.value;r.value=function(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];o.apply(t,r),console.log("log "+e)}}},v=new(f=y("show"),p=y("click"),i((s=function(){function e(){o(this,e)}return r(e,[{key:"show",value:function(){console.log("ad is show")}},{key:"click",value:function(){console.log("ad is click")}}]),e}()).prototype,"show",[f],Object.getOwnPropertyDescriptor(s.prototype,"show"),s.prototype),i(s.prototype,"click",[p],Object.getOwnPropertyDescriptor(s.prototype,"click"),s.prototype),s);v.show(),v.click();var b=[1,3,4],d=[3,4,5];console.log(b.concat(d)),Array.prototype.push.apply(b,d),console.log(b)}]);