(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
function ha(a){return a instanceof Array?a:fa(u(a))}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var na={a:!0},oa={};try{oa.__proto__=na;la=oa.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=ka;
function qa(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.D=b.prototype}
function ra(){this.A=!1;this.j=null;this.g=void 0;this.f=1;this.o=this.v=0;this.F=this.i=null}
function sa(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
ra.prototype.B=function(a){this.g=a};
function ta(a,b){a.i={rb:b,Ia:!0};a.f=a.v||a.o}
ra.prototype["return"]=function(a){this.i={"return":a};this.f=this.o};
function w(a,b,c){a.f=c;return{value:b}}
ra.prototype.K=function(a){this.f=a};
function ua(a){a.v=2;a.o=3}
function va(a){a.v=0;a.i=null}
function wa(a){a.F=[a.i];a.v=0;a.o=0}
function xa(a){var b=a.F.splice(0)[0];(b=a.i=a.i||b)?b.Ia?a.f=a.v||a.o:void 0!=b.K&&a.o<b.K?(a.f=b.K,a.i=null):a.f=a.o:a.f=0}
function ya(a){this.f=new ra;this.g=a}
function za(a,b){sa(a.f);var c=a.f.j;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.f.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.A=!1,e;var f=e.value}catch(g){return a.f.j=null,ta(a.f,g),Ba(a)}a.f.j=null;d.call(a.f,f);return Ba(a)}
function Ba(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.A=!1,{value:b.value,done:!1}}catch(c){a.f.g=void 0,ta(a.f,c)}a.f.A=!1;if(a.f.i){b=a.f.i;a.f.i=null;if(b.Ia)throw b.rb;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Ca(a){this.next=function(b){sa(a.f);a.f.j?b=Aa(a,a.f.j.next,b,a.f.B):(a.f.B(b),b=Ba(a));return b};
this["throw"]=function(b){sa(a.f);a.f.j?b=Aa(a,a.f.j["throw"],b,a.f.B):(ta(a.f,b),b=Ba(a));return b};
this["return"]=function(b){return za(a,b)};
this[Symbol.iterator]=function(){return this}}
function Da(a,b){var c=new Ca(new ya(b));pa&&a.prototype&&pa(c,a.prototype);return c}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ja});
t("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
function Ea(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Ea(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n["delete"](k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ea(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&Ea(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&Ea(k,g)&&Ea(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&Ea(k,g)&&Ea(k[g],this.f)?delete k[g][this.f]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.g[l];if(n&&Ea(h.g,l))for(var p=0;p<n.length;p++){var q=n[p];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:n,index:p,H:q}}return{id:l,list:n,index:-1,H:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.H?l.H.value=k:(l.H={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.H),this.f.previous.next=l.H,this.f.previous=l.H,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.H&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.H.previous.next=h.H.next,h.H.next.previous=h.H.previous,h.H.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).H};
e.prototype.get=function(h){return(h=d(this,h).H)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Fa(a,b){a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d}
t("Array.prototype.keys",function(a){return a?a:function(){return Fa(this,function(b){return b})}});
function Ga(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Array.prototype.values",function(a){return a?a:function(){return Fa(this,function(b,c){return c})}});
var Ha="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ea(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ha});
t("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.f=[];var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.i(function(){h.o()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.j(l)}}}this.f=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.j=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.O),reject:g(this.o)}};
b.prototype.O=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ca(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.F(g):this.v(g)}};
b.prototype.F=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.la(h,g):this.v(g)};
b.prototype.o=function(g){this.A(2,g)};
b.prototype.v=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;this.B()};
b.prototype.B=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.ca=function(g){var h=this.j();g.ea(h.resolve,h.reject)};
b.prototype.la=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,r){return"function"==typeof q?function(v){try{l(q(v))}catch(B){n(B)}}:r}
var l,n,p=new b(function(q,r){l=q;n=r});
this.ea(k(g,l),k(h,n));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.ea=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).ea(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(v){return function(B){q[v]=B;r--;0==r&&l(q)}}
var q=[],r=0;do q.push(void 0),r++,d(k.value).ea(p(q.length-1),n),k=h.next();while(!k.done)})};
return b});
t("Object.setPrototypeOf",function(a){return a||pa});
t("Array.prototype.entries",function(a){return a?a:function(){return Fa(this,function(b,c){return[b,c]})}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ea(b,d)&&c.push([d,b[d]]);return c}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ga(this,b,"includes").indexOf(b,c||0)}});
var x=this||self;function y(a,b){for(var c=a.split("."),d=b||x,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ia(){}
function Ja(a){a.pa=void 0;a.C=function(){return a.pa?a.pa:a.pa=new a}}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Na(a){return"function"==Ka(a)}
function Oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Pa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function z(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?z=Sa:z=Ta;return z.apply(null,arguments)}
function Ua(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var Va=Date.now;function A(a,b){var c=a.split("."),d=x;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function D(a,b){function c(){}
c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a}
function Wa(a){return a}
function Xa(a){var b=null,c=x.trustedTypes;if(!c||!c.createPolicy)return b;try{b=c.createPolicy(a,{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(d){x.console&&x.console.error(d.message)}return b}
;function Ya(a){this.xa=a}
;function Za(a,b,c){this.j=a;this.g=b;this.f=c||[];this.Y=new Map}
m=Za.prototype;m.Sb=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.Y.set(this.Ea(c),[new Ya(a)])};
m.Da=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];b=this.Ea(b);return this.Y.has(b)?this.Y.get(b):void 0};
m.tb=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return(b=this.Da(b))&&b.length?b[0]:void 0};
m.clear=function(){this.Y.clear()};
m.Ea=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return b?b.join(","):"key"};function $a(a,b){Za.call(this,a,3,b)}
qa($a,Za);$a.prototype.i=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=0;var e=this.tb(c);e&&(d=e.xa);this.Sb(d+a,c)};function ab(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
D(ab,Error);ab.prototype.name="CustomError";var bb;function cb(){this.i=this.i;this.o=this.o}
cb.prototype.i=!1;cb.prototype.ha=function(){return this.i};
cb.prototype.dispose=function(){this.i||(this.i=!0,this.S())};
cb.prototype.S=function(){if(this.o)for(;this.o.length;)this.o.shift()()};
function db(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function eb(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.f=!1}
eb.prototype.stopPropagation=function(){this.f=!0};
eb.prototype.preventDefault=function(){this.defaultPrevented=!0};var fb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},gb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===typeof a?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},hb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},jb=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1};
function kb(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function lb(a,b){return 0<=fb(a,b)}
function mb(a,b){var c=fb(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function nb(a){return Array.prototype.concat.apply([],arguments)}
function ob(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function pb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function qb(a,b,c,d){return Array.prototype.splice.apply(a,rb(arguments,1))}
function rb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function sb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Array.isArray(d))for(var e=0;e<d.length;e+=8192){var f=rb(d,e,e+8192);f=sb.apply(null,f);for(var g=0;g<f.length;g++)b.push(f[g])}else b.push(d)}return b}
;var tb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function ub(a,b){for(var c=0,d=tb(String(a)).split("."),e=tb(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;c=vb(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||vb(0==h[2].length,0==k[2].length)||vb(h[2],k[2]);h=h[3];k=k[3]}while(0==c)}return c}
function vb(a,b){return a<b?-1:a>b?1:0}
;var wb;a:{var xb=x.navigator;if(xb){var yb=xb.userAgent;if(yb){wb=yb;break a}}wb=""}function F(a){return-1!=wb.indexOf(a)}
;function zb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Ab(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Bb(a){var b=Cb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Db(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Eb(a){var b=Ka(a);if("object"==b||"array"==b){if(Na(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=Eb(a[c]);return b}return a}
var Fb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Fb.length;f++)c=Fb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Hb(){return F("Firefox")||F("FxiOS")}
function Ib(){return F("Safari")&&!(Jb()||F("Coast")||F("Opera")||F("Edge")||F("Edg/")||F("OPR")||Hb()||F("Silk")||F("Android"))}
function Jb(){return(F("Chrome")||F("CriOS"))&&!F("Edge")}
function Kb(){return F("Android")&&!(Jb()||Hb()||F("Opera")||F("Silk"))}
;function Lb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Mb;function Nb(a,b){this.f=a===Ob&&b||"";this.g=Pb}
Nb.prototype.oa=!0;Nb.prototype.na=function(){return this.f.toString()};
var Rb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Pb={},Ob={};function Sb(){this.f="";this.g=Tb}
Sb.prototype.oa=!0;Sb.prototype.na=function(){return this.f.toString()};
function Ub(a){if(a instanceof Sb&&a.constructor===Sb&&a.g===Tb)return a.f;Ka(a);return"type_error:SafeHtml"}
var Tb={},Vb=new Sb;Vb.f=x.trustedTypes&&x.trustedTypes.emptyHTML?x.trustedTypes.emptyHTML:"";var Wb=Lb(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Ub(Vb);return!b.parentElement});
function Xb(a,b){if(Wb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Ub(b)}
;function Yb(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function Zb(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;function $b(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
function ac(){return $b()||F("iPad")||F("iPod")}
;function bc(a){bc[" "](a);return a}
bc[" "]=Ia;function cc(a,b){try{return bc(a[b]),!0}catch(c){}return!1}
function dc(a,b,c,d){d=d?d(b):b;return Object.prototype.hasOwnProperty.call(a,d)?a[d]:a[d]=c(b)}
;var ec=F("Opera"),G=F("Trident")||F("MSIE"),fc=F("Edge"),gc=fc||G,hc=F("Gecko")&&!(-1!=wb.toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),ic=-1!=wb.toLowerCase().indexOf("webkit")&&!F("Edge"),jc=F("Macintosh"),kc=F("Windows"),lc=F("Android"),mc=$b(),nc=F("iPad"),oc=F("iPod"),pc=ac();function qc(){var a=x.document;return a?a.documentMode:void 0}
var rc;a:{var sc="",tc=function(){var a=wb;if(hc)return/rv:([^\);]+)(\)|;)/.exec(a);if(fc)return/Edge\/([\d\.]+)/.exec(a);if(G)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ic)return/WebKit\/(\S+)/.exec(a);if(ec)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
tc&&(sc=tc?tc[1]:"");if(G){var uc=qc();if(null!=uc&&uc>parseFloat(sc)){rc=String(uc);break a}}rc=sc}var vc=rc,wc={};function xc(a){return dc(wc,a,function(){return 0<=ub(vc,a)})}
var yc;if(x.document&&G){var zc=qc();yc=zc?zc:parseInt(vc,10)||void 0}else yc=void 0;var Ac=yc;function Bc(a){var b=y("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Cc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Dc[c])c=Dc[c];else{c=String(c);if(!Dc[c]){var f=/function\s+([^\(]+)/m.exec(c);Dc[c]=f?f[1]:"[Anonymous]"}c=Dc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function Cc(a,b){b||(b={});b[Ec(a)]=!0;var c=a.stack||"",d=a.pc;d&&!b[Ec(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=Cc(d,b));return c}
function Ec(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Dc={};var Fc=!G||9<=Number(Ac),Gc=G&&!xc("9"),Hc=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{x.addEventListener("test",Ia,b),x.removeEventListener("test",Ia,b)}catch(c){}return a}();function Ic(a,b){eb.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)}
D(Ic,eb);var Jc={2:"touch",3:"pen",4:"mouse"};
Ic.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?hc&&(cc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?
a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Jc[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
Ic.prototype.stopPropagation=function(){Ic.D.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
Ic.prototype.preventDefault=function(){Ic.D.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Gc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Kc="closure_listenable_"+(1E6*Math.random()|0),Lc=0;function Mc(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.ga=e;this.key=++Lc;this.Z=this.da=!1}
function Nc(a){a.Z=!0;a.listener=null;a.f=null;a.src=null;a.ga=null}
;function Oc(a){this.src=a;this.listeners={};this.f=0}
Oc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=Pc(a,b,d,e);-1<g?(b=a[g],c||(b.da=!1)):(b=new Mc(b,this.src,f,!!d,e),b.da=c,a.push(b));return b};
Oc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Pc(e,b,c,d);return-1<b?(Nc(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function Qc(a,b){var c=b.type;c in a.listeners&&mb(a.listeners[c],b)&&(Nc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function Pc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Z&&f.listener==b&&f.capture==!!c&&f.ga==d)return e}return-1}
;var Rc="closure_lm_"+(1E6*Math.random()|0),Sc={},Tc=0;function Vc(a,b,c,d,e){if(d&&d.once)Wc(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Vc(a,b[f],c,d,e);else c=Xc(c),a&&a[Kc]?a.f.add(String(b),c,!1,Oa(d)?!!d.capture:!!d,e):Yc(a,b,c,!1,d,e)}
function Yc(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,h=Zc(a);h||(a[Rc]=h=new Oc(a));c=h.add(b,c,d,g,f);if(!c.f){d=$c();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)Hc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ad(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Tc++}}
function $c(){var a=bd,b=Fc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Wc(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Wc(a,b[f],c,d,e);else c=Xc(c),a&&a[Kc]?a.f.add(String(b),c,!0,Oa(d)?!!d.capture:!!d,e):Yc(a,b,c,!0,d,e)}
function cd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)cd(a,b[f],c,d,e);else(d=Oa(d)?!!d.capture:!!d,c=Xc(c),a&&a[Kc])?a.f.remove(String(b),c,d,e):a&&(a=Zc(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Pc(b,c,d,e)),(c=-1<a?b[a]:null)&&dd(c))}
function dd(a){if("number"!==typeof a&&a&&!a.Z){var b=a.src;if(b&&b[Kc])Qc(b.f,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ad(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Tc--;(c=Zc(b))?(Qc(c,a),0==c.f&&(c.src=null,b[Rc]=null)):Nc(a)}}}
function ad(a){return a in Sc?Sc[a]:Sc[a]="on"+a}
function ed(a,b,c,d){var e=!0;if(a=Zc(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Z&&(f=fd(f,d),e=e&&!1!==f)}return e}
function fd(a,b){var c=a.listener,d=a.ga||a.src;a.da&&dd(a);return c.call(d,b)}
function bd(a,b){if(a.Z)return!0;if(!Fc){var c=b||y("window.event"),d=new Ic(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.f&&0<=g;g--){d.currentTarget=c[g];var h=ed(c[g],f,!0,d);e=e&&h}for(g=0;!d.f&&g<c.length;g++)d.currentTarget=c[g],h=ed(c[g],f,!1,d),e=e&&h}return e}return fd(a,new Ic(b,this))}
function Zc(a){a=a[Rc];return a instanceof Oc?a:null}
var gd="__closure_events_fn_"+(1E9*Math.random()>>>0);function Xc(a){if(Na(a))return a;a[gd]||(a[gd]=function(b){return a.handleEvent(b)});
return a[gd]}
;function hd(){cb.call(this);this.f=new Oc(this);this.F=this;this.v=null}
D(hd,cb);hd.prototype[Kc]=!0;hd.prototype.addEventListener=function(a,b,c,d){Vc(this,a,b,c,d)};
hd.prototype.removeEventListener=function(a,b,c,d){cd(this,a,b,c,d)};
hd.prototype.dispatchEvent=function(a){var b=this.v;if(b){var c=[];for(var d=1;b;b=b.v)c.push(b),++d}b=this.F;d=a.type||a;if("string"===typeof a)a=new eb(a,b);else if(a instanceof eb)a.target=a.target||b;else{var e=a;a=new eb(d,b);Gb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.f&&0<=f;f--){var g=a.currentTarget=c[f];e=id(g,d,!0,a)&&e}a.f||(g=a.currentTarget=b,e=id(g,d,!0,a)&&e,a.f||(e=id(g,d,!1,a)&&e));if(c)for(f=0;!a.f&&f<c.length;f++)g=a.currentTarget=c[f],e=id(g,d,!1,a)&&e;return e};
hd.prototype.S=function(){hd.D.S.call(this);if(this.f){var a=this.f,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Nc(d[e]);delete a.listeners[c];a.f--}}this.v=null};
function id(a,b,c,d){b=a.f.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Z&&g.capture==c){var h=g.listener,k=g.ga||g.src;g.da&&Qc(a.f,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function jd(a,b){this.i=a;this.j=b;this.g=0;this.f=null}
jd.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.i();return a};
function kd(a,b){a.j(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;var ld=!hc&&!G||G&&9<=Number(Ac)||hc&&xc("1.9.1"),md=G&&!xc("9");function H(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=H.prototype;m.clone=function(){return new H(this.x,this.y)};
m.equals=function(a){return a instanceof H&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function nd(a,b){return new H(a.x-b.x,a.y-b.y)}
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function od(a,b){this.width=a;this.height=b}
m=od.prototype;m.clone=function(){return new od(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function pd(a){return a?new qd(rd(a)):bb||(bb=new qd)}
function I(a){return"string"===typeof a?document.getElementById(a):a}
function sd(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):td(document,"*",a,b)}
function J(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):td(c,"*",a,b)[0]||null}return c||null}
function td(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&lb(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function ud(a,b){zb(b,function(c,d){c&&"object"==typeof c&&c.oa&&(c=c.na());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:vd.hasOwnProperty(d)?a.setAttribute(vd[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var vd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function wd(a){a=a.document;a=xd(a)?a.documentElement:a.body;return new od(a.clientWidth,a.clientHeight)}
function yd(a){var b=zd(a);a=Ad(a);return G&&xc("10")&&a.pageYOffset!=b.scrollTop?new H(b.scrollLeft,b.scrollTop):new H(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function zd(a){return a.scrollingElement?a.scrollingElement:!ic&&xd(a)?a.documentElement:a.body||a.documentElement}
function Ad(a){return a.parentWindow||a.defaultView}
function Bd(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function xd(a){return"CSS1Compat"==a.compatMode}
function Cd(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Dd(a){return ld&&void 0!=a.children?a.children:gb(a.childNodes,function(b){return 1==b.nodeType})}
function Ed(a){return Oa(a)&&1==a.nodeType}
function Fd(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function rd(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Gd(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);c=rd(a);a.appendChild(c.createTextNode(String(b)))}}
function Hd(a,b){var c=[];return Id(a,b,c,!0)?c[0]:void 0}
function Id(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Id(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Jd={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Kd={IMG:" ",BR:"\n"};function Ld(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Md(a)||Nd(a)):Md(a)&&Nd(a))&&G){var c;!Na(a.getBoundingClientRect)||G&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Md(a){return G&&!xc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Nd(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a}
function Od(a){if(md&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Pd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");md||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Pd(a,b,c){if(!(a.nodeName in Jd))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Kd)b.push(Kd[a.nodeName]);else for(a=a.firstChild;a;)Pd(a,b,c),a=a.nextSibling}
function Qd(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Rd(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&lb(f.className.split(/\s+/),c))},!0,d)}
function K(a,b){return Qd(a,null,b,void 0)}
function Rd(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function qd(a){this.f=a||x.document||document}
qd.prototype.getElementsByTagName=function(a,b){return(b||this.f).getElementsByTagName(String(a))};
qd.prototype.createElement=function(a){return Bd(this.f,a)};
qd.prototype.appendChild=function(a,b){a.appendChild(b)};
qd.prototype.isElement=Ed;function Sd(a){x.setTimeout(function(){throw a;},0)}
var Td;
function Ud(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Bd(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=z(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.wa;c.wa=null;e()}};
return function(e){d.next={wa:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function Vd(){this.g=this.f=null}
var Yd=new jd(function(){return new Xd},function(a){a.reset()});
Vd.prototype.add=function(a,b){var c=Yd.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Vd.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Xd(){this.next=this.scope=this.f=null}
Xd.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Xd.prototype.reset=function(){this.next=this.scope=this.f=null};function Zd(a,b){$d||ae();be||($d(),be=!0);ce.add(a,b)}
var $d;function ae(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);$d=function(){a.then(de)}}else $d=function(){var b=de;
!Na(x.setImmediate)||x.Window&&x.Window.prototype&&!F("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(Td||(Td=Ud()),Td(b)):x.setImmediate(b)}}
var be=!1,ce=new Vd;function de(){for(var a;a=ce.remove();){try{a.f.call(a.scope)}catch(b){Sd(b)}kd(Yd,a)}be=!1}
;function ee(a){this.f=0;this.A=void 0;this.j=this.g=this.i=null;this.o=this.v=!1;if(a!=Ia)try{var b=this;a.call(void 0,function(c){fe(b,2,c)},function(c){fe(b,3,c)})}catch(c){fe(this,3,c)}}
function ge(){this.next=this.context=this.onRejected=this.i=this.f=null;this.g=!1}
ge.prototype.reset=function(){this.context=this.onRejected=this.i=this.f=null;this.g=!1};
var he=new jd(function(){return new ge},function(a){a.reset()});
function ie(a,b,c){var d=he.get();d.i=a;d.onRejected=b;d.context=c;return d}
function je(a){if(a instanceof ee)return a;var b=new ee(Ia);fe(b,2,a);return b}
function ke(a){return new ee(function(b,c){c(a)})}
ee.prototype.then=function(a,b,c){return le(this,Na(a)?a:null,Na(b)?b:null,c)};
ee.prototype.$goog_Thenable=!0;function me(a,b){var c=ie(b,b,void 0);c.g=!0;ne(a,c)}
function oe(a,b){return le(a,null,b,void 0)}
ee.prototype.cancel=function(a){if(0==this.f){var b=new pe(a);Zd(function(){qe(this,b)},this)}};
function qe(a,b){if(0==a.f)if(a.i){var c=a.i;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.g||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?qe(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):re(c),se(c,e,3,b)))}a.i=null}else fe(a,3,b)}
function ne(a,b){a.g||2!=a.f&&3!=a.f||te(a);a.j?a.j.next=b:a.g=b;a.j=b}
function le(a,b,c,d){var e=ie(null,null,null);e.f=new ee(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof pe?g(h):f(k)}catch(l){g(l)}}:g});
e.f.i=a;ne(a,e);return e.f}
ee.prototype.F=function(a){this.f=0;fe(this,2,a)};
ee.prototype.O=function(a){this.f=0;fe(this,3,a)};
function fe(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.F,f=a.O;if(d instanceof ee){ne(d,ie(e||Ia,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Oa(d))try{var k=d.then;if(Na(k)){ue(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.A=c,a.f=b,a.i=null,te(a),3!=b||c instanceof pe||ve(a,c))}}
function ue(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function te(a){a.v||(a.v=!0,Zd(a.B,a))}
function re(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.j=null);return b}
ee.prototype.B=function(){for(var a;a=re(this);)se(this,a,this.f,this.A);this.v=!1};
function se(a,b,c,d){if(3==c&&b.onRejected&&!b.g)for(;a&&a.o;a=a.i)a.o=!1;if(b.f)b.f.i=null,we(b,c,d);else try{b.g?b.i.call(b.context):we(b,c,d)}catch(e){xe.call(null,e)}kd(he,b)}
function we(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function ve(a,b){a.o=!0;Zd(function(){a.o&&xe.call(null,b)})}
var xe=Sd;function pe(a){ab.call(this,a)}
D(pe,ab);pe.prototype.name="cancel";function ye(a,b){hd.call(this);this.j=a||1;this.g=b||x;this.A=z(this.Ub,this);this.B=Va()}
D(ye,hd);m=ye.prototype;m.enabled=!1;m.L=null;m.setInterval=function(a){this.j=a;this.L&&this.enabled?(this.stop(),this.start()):this.L&&this.stop()};
m.Ub=function(){if(this.enabled){var a=Va()-this.B;0<a&&a<.8*this.j?this.L=this.g.setTimeout(this.A,this.j-a):(this.L&&(this.g.clearTimeout(this.L),this.L=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.L||(this.L=this.g.setTimeout(this.A,this.j),this.B=Va())};
m.stop=function(){this.enabled=!1;this.L&&(this.g.clearTimeout(this.L),this.L=null)};
m.S=function(){ye.D.S.call(this);this.stop();delete this.g};function ze(){this.O=new Ae;this.i=new Map;this.B=new Set;this.o=0;this.v=100;this.flushInterval=3E4;this.f=new ye(this.flushInterval);this.f.f.add("tick",this.A,!1,!1,this)}
ze.prototype.A=function(){var a=this.i.values();a=[].concat(ha(a)).filter(function(b){return b.Y.size});
a.length&&this.O.flush(a);Be(a);this.o=0;this.f.enabled&&this.f.stop()};
ze.prototype.g=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.i.has(a)||this.i.set(a,new $a(a,c))};
ze.prototype.j=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.F.apply(this,[a,1].concat(ha(c)))};
ze.prototype.F=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];(e=this.B.has(a)?void 0:this.i.get(a))&&e instanceof $a&&(e.i(b,d),this.f.enabled||this.f.start(),this.o++,this.o>=this.v&&this.A())};
function Be(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Ce(){this.f=De();this.f.g("/client_streamz/youtube/web/network/one_platform_requests",{U:3,T:"request_url"})}
function Ee(){this.f=De();this.f.g("/client_streamz/youtube/web/network/one_platform_redirects",{U:2,T:"response_code"},{U:3,T:"request_url"},{U:3,T:"response_url"})}
function Fe(a,b,c,d){a.f.j("/client_streamz/youtube/web/network/one_platform_redirects",b,c,d)}
function Ge(){this.f=De();this.f.g("/client_streamz/youtube/web/network/one_platform_request_success",{U:3,T:"request_url"})}
function He(){this.f=De();this.f.g("/client_streamz/youtube/web/network/one_platform_request_failed",{U:2,T:"response_code"},{U:3,T:"request_url"})}
;var Ie=0,Je=0;function Ke(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);a>>>=0;b&&(a=~a>>>0,c=(~c>>>0)+1,4294967295<c&&(c=0,a++,4294967295<a&&(a=0)));Ie=c;Je=a}
function Le(a){var b=0>a?1:0;a=b?-a:a;if(0===a)Je=0<1/a?0:2147483648,Ie=0;else if(isNaN(a))Je=2147483647,Ie=4294967295;else if(1.7976931348623157E308<a)Je=(b<<31|2146435072)>>>0,Ie=0;else if(2.2250738585072014E-308>a)a/=Math.pow(2,-1074),Je=(b<<31|a/4294967296)>>>0,Ie=a>>>0;else{var c=a,d=0;if(2<=c)for(;2<=c&&1023>d;)d++,c/=2;else for(;1>c&&-1022<d;)c*=2,d--;a*=Math.pow(2,-d);Je=(b<<31|d+1023<<20|1048576*a&1048575)>>>0;Ie=4503599627370496*a>>>0}}
;function Me(){this.f=[]}
Me.prototype.length=function(){return this.f.length};
Me.prototype.end=function(){var a=this.f;this.f=[];return a};
function Ne(a){for(var b=Ie,c=Je;0<c||127<b;)a.f.push(b&127|128),b=(b>>>7|c<<25)>>>0,c>>>=7;a.f.push(b)}
function Oe(a,b){for(;127<b;)a.f.push(b&127|128),b>>>=7;a.f.push(b)}
function Pe(a,b){if(0<=b)Oe(a,b);else{for(var c=0;9>c;c++)a.f.push(b&127|128),b>>=7;a.f.push(1)}}
function Qe(a,b){a.f.push(b>>>0&255);a.f.push(b>>>8&255);a.f.push(b>>>16&255);a.f.push(b>>>24&255)}
;var Re=Hb(),Se=$b()||F("iPod"),Te=F("iPad"),Ue=Kb(),Ve=Jb(),We=Ib()&&!ac();var Xe={},Ye=null;
function Ze(a,b){La(a);void 0===b&&(b=0);if(!Ye){Ye={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Xe[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Ye[h]&&(Ye[h]=g)}}}c=Xe[b];d=[];for(e=0;e<a.length;e+=3){var k=a[e],l=(f=e+1<a.length)?a[e+1]:0,n=(g=e+2<a.length)?a[e+2]:0;h=k>>2;k=(k&3)<<4|l>>4;l=(l&15)<<2|n>>6;n&=63;g||(n=64,f||(l=64));d.push(c[h],c[k],c[l]||"",c[n]||"")}return d.join("")}
;function $e(){this.i=[];this.g=0;this.f=new Me}
function af(a,b){bf(a,b,2);var c=a.f.end();a.i.push(c);a.g+=c.length;c.push(a.g);return c}
function cf(a,b){var c=b.pop();for(c=a.g+a.f.length()-c;127<c;)b.push(c&127|128),c>>>=7,a.g++;b.push(c);a.g++}
$e.prototype.reset=function(){this.i=[];this.f.end();this.g=0};
function bf(a,b,c){Oe(a.f,8*b+c)}
function df(a,b,c){null!=c&&(bf(a,b,1),a=a.f,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,Ie=b,Je=c,Qe(a,Ie),Qe(a,Je))}
function ef(a,b,c){null!=c&&(bf(a,b,0),a.f.f.push(c?1:0))}
function ff(a,b,c){if(null!=c){b=af(a,b);for(var d=a.f,e=0;e<c.length;e++){var f=c.charCodeAt(e);if(128>f)d.f.push(f);else if(2048>f)d.f.push(f>>6|192),d.f.push(f&63|128);else if(65536>f)if(55296<=f&&56319>=f&&e+1<c.length){var g=c.charCodeAt(e+1);56320<=g&&57343>=g&&(f=1024*(f-55296)+g-56320+65536,d.f.push(f>>18|240),d.f.push(f>>12&63|128),d.f.push(f>>6&63|128),d.f.push(f&63|128),e++)}else d.f.push(f>>12|224),d.f.push(f>>6&63|128),d.f.push(f&63|128)}cf(a,b)}}
function gf(a,b,c,d){null!=c&&(b=af(a,b),d(c,a),cf(a,b))}
function hf(a,b,c,d){if(null!=c)for(var e=0;e<c.length;e++){var f=af(a,b);d(c[e],a);cf(a,f)}}
;function jf(){}
var kf="function"==typeof Uint8Array;function lf(a,b,c,d){a.f=null;b||(b=[]);a.A=void 0;a.j=-1;a.g=b;a:{if(b=a.g.length){--b;var e=a.g[b];if(!(null===e||"object"!=typeof e||Array.isArray(e)||kf&&e instanceof Uint8Array)){a.o=b-a.j;a.i=e;break a}}a.o=Number.MAX_VALUE}a.v={};if(c)for(b=0;b<c.length;b++)e=c[b],e<a.o?(e+=a.j,a.g[e]=a.g[e]||mf):(nf(a),a.i[e]=a.i[e]||mf);if(d&&d.length)for(b=0;b<d.length;b++)of(a,d[b])}
var mf=[];function nf(a){var b=a.o+a.j;a.g[b]||(a.i=a.g[b]={})}
function L(a,b){if(b<a.o){var c=b+a.j,d=a.g[c];return d===mf?a.g[c]=[]:d}if(a.i)return d=a.i[b],d===mf?a.i[b]=[]:d}
function pf(a,b,c){b<a.o?a.g[b+a.j]=c:(nf(a),a.i[b]=c);return a}
function qf(a,b,c,d){(c=of(a,c))&&c!==b&&void 0!==d&&(a.f&&c in a.f&&(a.f[c]=void 0),pf(a,c,void 0));pf(a,b,d)}
function of(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],g=L(a,f);null!=g&&(c=f,d=g,pf(a,f,void 0))}return c?(pf(a,c,d),c):0}
function rf(a,b,c){a.f||(a.f={});if(!a.f[c]){var d=L(a,c);d&&(a.f[c]=new b(d))}return a.f[c]}
function sf(a,b,c){a.f||(a.f={});if(!a.f[c]){for(var d=L(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.f[c]=e}b=a.f[c];b==mf&&(b=a.f[c]=[]);return b}
function tf(a,b,c){a.f||(a.f={});c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=uf(c[e]);a.f[b]=c;pf(a,b,d)}
function vf(a){if(a.f)for(var b in a.f){var c=a.f[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&uf(c[d]);else c&&uf(c)}}
function uf(a){vf(a);return a.g}
jf.prototype.toString=function(){vf(this);return this.g.toString()};
jf.prototype.clone=function(){return new this.constructor(wf(uf(this)))};
function wf(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?wf(d):d)}return b}if(kf&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?wf(d):d);return b}
;var xf=window;function yf(a){this.f=a||{cookie:""}}
m=yf.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Bc;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.La}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Va()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:
"")};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=tb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{La:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=tb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var zf=new yf("undefined"==typeof document?null:document);var Af=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Bf(a){return a?decodeURI(a):a}
function Cf(a,b){return b.match(Af)[a]||null}
function Df(a){return Bf(Cf(3,a))}
function Ef(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function Ff(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ff(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Gf(a,b){for(var c=[],d=b||0;d<a.length;d+=2)Ff(a[d],a[d+1],c);return c.join("&")}
function Hf(a){var b=[],c;for(c in a)Ff(c,a[c],b);return b.join("&")}
function If(a,b){var c=2==arguments.length?Gf(arguments[1],0):Gf(arguments,1);return Ef(a,c)}
function Jf(a,b){var c=Hf(b);return Ef(a,c)}
function Kf(a,b,c){for(;0<=(b=a.indexOf("key",b))&&b<c;){var d=a.charCodeAt(b-1);if(38==d||63==d)if(d=a.charCodeAt(b+3),!d||61==d||38==d||35==d)return b;b+=4}return-1}
var Lf=/#|$/,Mf=/[?&]($|#)/;function Nf(a){for(var b=a.search(Lf),c=0,d,e=[];0<=(d=Kf(a,c,b));)e.push(a.substring(c,d)),c=Math.min(a.indexOf("&",d)+1||b,b);e.push(a.substr(c));return e.join("").replace(Mf,"$1")}
;function Of(a){var b=Pf;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Qf(){var a=[];Of(function(b){a.push(b)});
return a}
var Pf={Yb:"allow-forms",Zb:"allow-modals",ac:"allow-orientation-lock",cc:"allow-pointer-lock",dc:"allow-popups",ec:"allow-popups-to-escape-sandbox",fc:"allow-presentation",hc:"allow-same-origin",ic:"allow-scripts",jc:"allow-top-navigation",kc:"allow-top-navigation-by-user-activation"},Rf=Lb(function(){return Qf()});
function Sf(){var a=Bd(document,"IFRAME"),b={};E(Rf(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Tf(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Uf(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
m=Uf.prototype;m.getHeight=function(){return this.bottom-this.top};
m.clone=function(){return new Uf(this.top,this.right,this.bottom,this.left)};
m.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
m.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
m.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Vf(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
Vf.prototype.clone=function(){return new Vf(this.left,this.top,this.width,this.height)};
Vf.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
Vf.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
Vf.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Wf(a,b,c){if("string"===typeof b)(b=Xf(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Xf(c,d);f&&(c.style[f]=e)}}
var Yf={};function Xf(a,b){var c=Yf[b];if(!c){var d=Yb(b);c=d;void 0===a.style[d]&&(d=(ic?"Webkit":hc?"Moz":G?"ms":ec?"O":null)+Zb(d),void 0!==a.style[d]&&(c=d));Yf[b]=c}return c}
function Zf(a,b){var c=rd(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function $f(a,b){return Zf(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function ag(a){try{return a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}}
function bg(a){if(G&&!(8<=Number(Ac)))return a.offsetParent;var b=rd(a),c=$f(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=$f(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function cg(a){for(var b=new Uf(0,Infinity,Infinity,0),c=pd(a),d=c.f.body,e=c.f.documentElement,f=zd(c.f);a=bg(a);)if(!(G&&0==a.clientWidth||ic&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=$f(a,"overflow")){var g=dg(a),h=new H(a.clientLeft,a.clientTop);g.x+=h.x;g.y+=h.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
wd(Ad(c.f)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function dg(a){var b=rd(a),c=new H(0,0);var d=b?rd(b):document;d=!G||9<=Number(Ac)||xd(pd(d).f)?d.documentElement:d.body;if(a==d)return c;a=ag(a);b=yd(pd(b).f);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function eg(a){a=ag(a);return new H(a.left,a.top)}
function fg(a,b,c){if(b instanceof od)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");a.style.width=gg(b,!0);a.style.height=gg(c,!0)}
function gg(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function hg(a){var b=ig;if("none"!=$f(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function ig(a){var b=a.offsetWidth,c=a.offsetHeight,d=ic&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=ag(a),new od(a.right-a.left,a.bottom-a.top)):new od(b,c)}
function jg(a){var b=dg(a);a=hg(a);return new Vf(b.x,b.y,a.width,a.height)}
function kg(a){return"rtl"==$f(a,"direction")}
function lg(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function mg(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?lg(a,c):0}
var ng={thin:2,medium:4,thick:6};function og(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in ng?ng[c]:lg(a,c)}
;var pg=(new Date).getTime();function qg(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var rg=window,sg=document,tg=rg.location;function ug(){}
var vg=/\[native code\]/;function M(a,b,c){return a[b]=a[b]||c}
function wg(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function xg(){var a;if((a=Object.create)&&vg.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var yg=M(rg,"gapi",{});var N;N=M(rg,"___jsl",xg());M(N,"I",0);M(N,"hel",10);function zg(){var a=tg.href;if(N.dpo)var b=N.h;else{b=N.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Ag(a){var b=M(N,"PQ",[]);N.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Bg(a){return M(M(N,"H",xg()),a,xg())}
;function Cg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var q=g,r=0;64>r;r+=4)q[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=q[r-3]^q[r-8]^q[r-14]^q[r-16],q[r]=(p<<1|p>>>31)&4294967295;p=e[0];var v=e[1],B=e[2],C=e[3],Qb=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var ma=C^v&(B^C);var Ma=1518500249}else ma=v^B^C,Ma=1859775393;else 60>r?(ma=v&B|C&(v|B),Ma=2400959708):(ma=v^B^C,Ma=3395469782);ma=((p<<5|p>>>27)&4294967295)+ma+Qb+Ma+q[r]&4294967295;Qb=C;C=B;B=(v<<30|v>>>2)&4294967295;v=p;p=ma}e[0]=e[0]+p&4294967295;e[1]=e[1]+
v&4294967295;e[2]=e[2]+B&4294967295;e[3]=e[3]+C&4294967295;e[4]=e[4]+Qb&4294967295}
function c(p,q){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],v=0,B=p.length;v<B;++v)r.push(p.charCodeAt(v));p=r}q||(q=p.length);r=0;if(0==l)for(;r+64<q;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<q;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<q;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],q=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=q&255,q>>>=8;b(f);for(r=q=0;5>r;r++)for(var v=24;0<=v;v-=8)p[q++]=e[r]>>v&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,ob:function(){for(var p=d(),q="",r=0;r<p.length;r++)q+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return q}}}
;function Dg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),Eg(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=Eg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Eg(a){var b=Cg();b.update(a);return b.ob().toLowerCase()}
;function Fg(a){var b=qg(String(x.location.href)),c;(c=x.__SAPISID||x.__APISID||x.__OVERRIDE_SID)?c=!0:(c=new yf(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?x.__SAPISID:x.__APISID,c||(c=new yf(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(x.location.href);return d&&c&&b?[b,Dg(qg(d),c,a||null)].join(" "):null}return null}
;var Gg=M(N,"perf",xg());M(Gg,"g",xg());var Hg=M(Gg,"i",xg());M(Gg,"r",[]);xg();xg();function Ig(a,b,c){b&&0<b.length&&(b=Jg(b),c&&0<c.length&&(b+="___"+Jg(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=M(Hg,"_p",xg()),M(b,c,xg())[a]=(new Date).getTime(),b=Gg.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Jg(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var Kg=xg(),Lg=[];function Mg(a){throw Error("Bad hint"+(a?": "+a:""));}
Lg.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?N[b]=M(N,b,[]).concat(c):M(N,b,c)}if(b=a.u)a=M(N,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Ng=/^(\/[a-zA-Z0-9_\-]+)+$/,Og=[/\/amp\//,/\/amp$/,/^\/amp$/],Pg=/^[a-zA-Z0-9\-_\.,!]+$/,Qg=/^gapi\.loaded_[0-9]+$/,Rg=/^[a-zA-Z0-9,._-]+$/;function Sg(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Kg[f],h=null;g?h=g(e,b,c,d):Mg("no hint processor for: "+f);h||Mg("failed to generate load url");b=h;c=b.match(Tg);(d=b.match(Ug))&&1===d.length&&Vg.test(b)&&c&&1===c.length||Mg("failed sanity: "+a);return h}
function Wg(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=Xg(a);Qg.test(c)||Mg("invalid_callback");b=Yg(b);d=d&&d.length?Yg(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ua?"/am="+e(a.ua):"",a.Ya?"/rs="+e(a.Ya):"",a.ib?"/t="+e(a.ib):"","/cb=",e(c)].join("")}
function Xg(a){"/"!==a.charAt(0)&&Mg("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Mg("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Ng.test(b)||Mg("invalid_prefix");c=0;for(d=Og.length;c<d;++c)Og[c].test(b)&&Mg("invalid_prefix");c=Zg(a,
"k",!0);d=Zg(a,"am");e=Zg(a,"rs");a=Zg(a,"t");return{pathPrefix:b,version:c,ua:d,Ya:e,ib:a}}
function Yg(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Rg.test(e)&&b.push(e)}return b.join(",")}
function Zg(a,b,c){a=a[b];!a&&c&&Mg("missing: "+b);if(a){if(Pg.test(a))return a;Mg("invalid: "+b)}return null}
var Vg=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Ug=/\/cb=/g,Tg=/\/\//g;function $g(){var a=zg();if(!a)throw Error("Bad hint");return a}
Kg.m=function(a,b,c,d){(a=a[0])||Mg("missing_hint");return"https://apis.google.com"+Wg(a,b,c,d)};
var ah=decodeURI("%73cript"),bh=/^[-+_0-9\/A-Za-z]+={0,2}$/;function ch(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function dh(){var a=N.nonce;return void 0!==a?a&&a===String(a)&&a.match(bh)?a:N.nonce=null:sg.querySelector?(a=sg.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(bh)?N.nonce=a:N.nonce=null):null:null}
function eh(a){if("loading"!=sg.readyState)fh(a);else{var b=dh(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+ah+' src="'+encodeURI(a)+'"'+c+"></"+ah+">";sg.write(gh?gh.createHTML(a):a)}}
function fh(a){var b=sg.createElement(ah);b.setAttribute("src",gh?gh.createScriptURL(a):a);a=dh();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=sg.getElementsByTagName(ah)[0])?a.parentNode.insertBefore(b,a):(sg.head||sg.body||sg.documentElement).appendChild(b)}
function hh(a,b){var c=b&&b._c;if(c)for(var d=0;d<Lg.length;d++){var e=Lg[d][0],f=Lg[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function ih(a,b,c){jh(function(){var d=b===zg()?M(yg,"_",xg()):xg();d=M(Bg(b),"_",d);a(d)},c)}
function kh(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);hh(a,c);var d=a?a.split(":"):[],e=c.h||$g(),f=M(N,"ah",xg());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split(".");k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e;var l=g.length&&g[g.length-1]||null,n=l;l&&l.hint==k||(n={hint:k,features:[]},g.push(n));n.features.push(h)}var p=g.length;if(1<p){var q=c.callback;q&&(c.callback=function(){0==--p&&q()})}for(;d=g.shift();)lh(d.features,c,d.hint)}else lh(d||[],c,e)}
function lh(a,b,c){function d(ma,Ma){if(p)return 0;rg.clearTimeout(n);q.push.apply(q,v);var Uc=((yg||{}).config||{}).update;Uc?Uc(f):f&&M(N,"cu",[]).push(f);if(Ma){Ig("me0",ma,r);try{ih(Ma,c,l)}finally{Ig("me1",ma,r)}}return 1}
a=wg(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,l=void 0;"function"==typeof k&&(l=k);var n=null,p=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";k=M(Bg(c),"r",[]).sort();var q=M(Bg(c),"L",[]).sort(),r=[].concat(k);0<g&&(n=rg.setTimeout(function(){p=!0;h()},g));
var v=ch(a,q);if(v.length){v=ch(a,k);var B=M(N,"CP",[]),C=B.length;B[C]=function(ma){function Ma(){var Wd=B[C+1];Wd&&Wd()}
function Uc(Wd){B[C]=null;d(v,ma)&&Ag(function(){e&&e();Wd()})}
if(!ma)return 0;Ig("ml1",v,r);0<C&&B[C-1]?B[C]=function(){Uc(Ma)}:Uc(Ma)};
if(v.length){var Qb="loaded_"+N.I++;yg[Qb]=function(ma){B[C](ma);yg[Qb]=null};
a=Sg(c,v,"gapi."+Qb,k);k.push.apply(k,v);Ig("ml0",v,r);b.sync||rg.___gapisync?eh(a):fh(a)}else B[C](ug)}else d(v)&&e&&e()}
var gh=Xa("goog#gapi");function jh(a,b){if(N.hee&&0<N.hel)try{return a()}catch(c){b&&b(c),N.hel--,kh("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
yg.load=function(a,b){return jh(function(){return kh(a,b)})};function mh(){this.g=-1}
;function nh(){this.g=64;this.f=[];this.v=[];this.A=[];this.j=[];this.j[0]=128;for(var a=1;a<this.g;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
D(nh,mh);nh.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.o=this.i=0};
function oh(a,b,c){c||(c=0);var d=a.A;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
nh.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.v,f=this.i;d<b;){if(0==f)for(;d<=c;)oh(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){oh(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){oh(this,e);f=0;break}}this.i=f;this.o+=b}};
nh.prototype.digest=function(){var a=[],b=8*this.o;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.g-(this.i-56));for(var c=this.g-1;56<=c;c--)this.v[c]=b&255,b/=256;oh(this,this.v);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function ph(a){lf(this,a,qh,null)}
D(ph,jf);function rh(a){lf(this,a,null,null)}
D(rh,jf);var qh=[1];function sh(a,b){var c=sf(a,rh,1);0<c.length&&hf(b,1,c,th)}
function th(a,b){var c=L(a,1);if(null!=c&&null!=c){bf(b,1,1);var d=b.f;Le(c);Qe(d,Ie);Qe(d,Je)}c=L(a,2);null!=c&&null!=c&&null!=c&&(bf(b,2,0),d=b.f,Ke(c),Ne(d))}
;function uh(a){lf(this,a,vh,null)}
D(uh,jf);function wh(a){lf(this,a,null,xh)}
D(wh,jf);function yh(a){lf(this,a,null,null)}
D(yh,jf);function zh(a){lf(this,a,null,null)}
D(zh,jf);function Ah(a){lf(this,a,Bh,null)}
D(Ah,jf);function Ch(a){lf(this,a,null,Dh)}
D(Ch,jf);function Eh(a){lf(this,a,null,Fh)}
D(Eh,jf);var vh=[3,6,4],xh=[[1,2]];function Gh(a,b){var c=rf(a,yh,1);null!=c&&gf(b,1,c,Hh);c=rf(a,zh,2);null!=c&&gf(b,2,c,Ih)}
function Hh(a,b){var c=L(a,1);null!=c&&ff(b,1,c);c=L(a,2);null!=c&&ff(b,2,c);c=L(a,3);null!=c&&ef(b,3,c)}
function Ih(a,b){var c=L(a,1);null!=c&&ff(b,1,c);c=L(a,2);null!=c&&ff(b,2,c);c=L(a,3);null!=c&&null!=c&&null!=c&&(bf(b,3,0),Pe(b.f,c));c=L(a,4);null!=c&&ef(b,4,c)}
var Bh=[1];function Jh(a,b){var c=sf(a,Ch,1);0<c.length&&hf(b,1,c,Kh);c=rf(a,Eh,2);null!=c&&gf(b,2,c,Lh)}
var Dh=[[1,2,3]];function Kh(a,b){var c=L(a,1);null!=c&&ff(b,1,c);c=L(a,2);null!=c&&null!=c&&null!=c&&(bf(b,2,0),Pe(b.f,c));c=L(a,3);null!=c&&ef(b,3,c)}
var Fh=[[1,2,3]];function Lh(a,b){var c=L(a,1);if(null!=c&&null!=c&&null!=c){bf(b,1,0);var d=b.f;Ke(c);Ne(d)}c=L(a,2);null!=c&&null!=c&&(bf(b,2,1),d=b.f,Le(c),Qe(d,Ie),Qe(d,Je));c=rf(a,ph,3);null!=c&&gf(b,3,c,sh)}
;function Mh(){this.g=[];this.f=-1}
Mh.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Mh.prototype.get=function(a){return!!this.g[a]};
function Nh(a){-1==a.f&&(a.f=ib(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;var Oh="StopIteration"in x?x.StopIteration:{message:"StopIteration",stack:""};function Ph(){}
Ph.prototype.next=function(){throw Oh;};
Ph.prototype.P=function(){return this};
function Qh(a){if(a instanceof Ph)return a;if("function"==typeof a.P)return a.P(!1);if(La(a)){var b=0,c=new Ph;c.next=function(){for(;;){if(b>=a.length)throw Oh;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Rh(a,b){if(La(a))try{E(a,b,void 0)}catch(c){if(c!==Oh)throw c;}else{a=Qh(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Oh)throw c;}}}
function Sh(a){if(La(a))return ob(a);a=Qh(a);var b=[];Rh(a,function(c){b.push(c)});
return b}
;function Th(a,b){this.i={};this.f=[];this.R=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Th)for(c=Uh(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Uh(a){Vh(a);return a.f.concat()}
m=Th.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Wh;Vh(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Wh(a,b){return a===b}
m.isEmpty=function(){return 0==this.g};
m.clear=function(){this.i={};this.R=this.g=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.g--,this.R++,this.f.length>2*this.g&&Vh(this),!0):!1};
function Vh(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.g++,this.f.push(a),this.R++);this.i[a]=b};
m.forEach=function(a,b){for(var c=Uh(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Th(this)};
m.P=function(a){Vh(this);var b=0,c=this.R,d=this,e=new Ph;e.next=function(){if(c!=d.R)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Oh;var f=d.f[b++];return a?f:d.i[f]};
return e};function Xh(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Yh(a){return a.classList?a.classList:Xh(a).match(/\S+/g)||[]}
function Zh(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function O(a,b){return a.classList?a.classList.contains(b):lb(Yh(a),b)}
function P(a,b){if(a.classList)a.classList.add(b);else if(!O(a,b)){var c=Xh(a);Zh(a,c+(0<c.length?" "+b:b))}}
function $h(a,b){if(a.classList)E(b,function(f){P(a,f)});
else{var c={};E(Yh(a),function(f){c[f]=!0});
E(b,function(f){c[f]=!0});
var d="",e;for(e in c)d+=0<d.length?" "+e:e;Zh(a,d)}}
function ai(a,b){a.classList?a.classList.remove(b):O(a,b)&&Zh(a,gb(Yh(a),function(c){return c!=b}).join(" "))}
function bi(a,b){a.classList?E(b,function(c){ai(a,c)}):Zh(a,gb(Yh(a),function(c){return!lb(b,c)}).join(" "))}
function ci(a,b,c){c?P(a,b):ai(a,b)}
function di(a,b,c){O(a,b)&&(ai(a,b),P(a,c))}
function ei(a,b){var c=!O(a,b);ci(a,b,c)}
;var fi=!G&&!Ib();function gi(a,b){if(/-[a-z]/.test(b))return null;if(fi&&a.dataset){if(Kb()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function hi(a){var b=[];ii(new ji,a,b);return b.join("")}
function ji(){}
function ii(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ii(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),ki(d,c),c.push(":"),ii(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ki(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var li={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},mi=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function ki(a,b){b.push('"',a.replace(mi,function(c){var d=li[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),li[c]=d);return d}),'"')}
;var ni=new WeakMap;function oi(a,b){for(var c=[a],d=b.length-1;0<=d;--d)c.push(typeof b[d],b[d]);return c.join("\x0B")}
;var pi=function(){if(kc){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(wb))?a[1]:"0"}return jc?(a=/10[_.][0-9_.]+/,(a=a.exec(wb))?a[0].replace(/_/g,"."):"10"):lc?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(wb))?a[1]:""):mc||nc||oc?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(wb))?a[1].replace(/_/g,"."):""):""}();function qi(a){return(a=a.exec(wb))?a[1]:""}
var ri=function(){if(Re)return qi(/Firefox\/([0-9.]+)/);if(G||fc||ec)return vc;if(Ve)return ac()?qi(/CriOS\/([0-9.]+)/):qi(/Chrome\/([0-9.]+)/);if(We&&!ac())return qi(/Version\/([0-9.]+)/);if(Se||Te){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(wb);if(a)return a[1]+"."+a[2]}else if(Ue)return(a=qi(/Android\s+([0-9.]+)/))?a:qi(/Version\/([0-9.]+)/);return""}();function si(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var k="HTML"==h.tagName||"BODY"==h.tagName;if(!k||"static"!=$f(h,"position")){var l=dg(h);if(!k){k=kg(h);var n;if(n=k){if(n=We)n=0<=ub(ri,10);var p;if(p=pc)p=0<=ub(pi,10);n=hc||n||p}k=n?-h.scrollLeft:!k||gc&&xc("8")||"visible"==$f(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft;l=nd(l,new H(k,h.scrollTop))}}}h=l||new H;l=jg(a);if(k=cg(a)){var q=new Vf(k.left,k.top,k.right-k.left,k.bottom-k.top);k=Math.max(l.left,q.left);n=
Math.min(l.left+l.width,q.left+q.width);k<=n&&(p=Math.max(l.top,q.top),q=Math.min(l.top+l.height,q.top+q.height),p<=q&&(l.left=k,l.top=p,l.width=n-k,l.height=q-p))}k=pd(a);p=pd(c);if(k.f!=p.f){n=k.f.body;p=Ad(p.f);q=new H(0,0);var r=(r=rd(n))?Ad(r):window;if(cc(r,"parent")){var v=n;do{var B=r==p?dg(v):eg(v);q.x+=B.x;q.y+=B.y}while(r&&r!=p&&r!=r.parent&&(v=r.frameElement)&&(r=r.parent))}n=nd(q,dg(n));!G||9<=Number(Ac)||xd(k.f)||(n=nd(n,yd(k.f)));l.left+=n.x;l.top+=n.y}a=ti(a,b);b=l.left;a&4?b+=l.width:
a&2&&(b+=l.width/2);b=new H(b,l.top+(a&1?l.height:0));b=nd(b,h);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var C;g&&(C=cg(c))&&(C.top-=h.y,C.right-=h.x,C.bottom-=h.y,C.left-=h.x);return ui(b,c,d,f,C,g,void 0)}
function ui(a,b,c,d,e,f,g){a=a.clone();var h=ti(b,c);c=hg(b);g=g?g.clone():c.clone();a=a.clone();g=g.clone();var k=0;if(d||0!=h)h&4?a.x-=g.width+(d?d.right:0):h&2?a.x-=g.width/2:d&&(a.x+=d.left),h&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;h=g;k=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,k|=1);if(f&16){var l=d.x;d.x<e.left&&(d.x=e.left,k|=4);d.x+h.width>e.right&&(h.width=Math.min(e.right-d.x,
l+h.width-e.left),h.width=Math.max(h.width,0),k|=4)}d.x+h.width>e.right&&f&1&&(d.x=Math.max(e.right-h.width,e.left),k|=1);f&2&&(k|=(d.x<e.left?16:0)|(d.x+h.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,k|=2);f&32&&(l=d.y,d.y<e.top&&(d.y=e.top,k|=8),d.y+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.y,l+h.height-e.top),h.height=Math.max(h.height,0),k|=8));d.y+h.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-h.height,e.top),k|=2);f&8&&(k|=(d.y<e.top?64:0)|(d.y+h.height>e.bottom?128:0));e=k}else e=
256;k=e}f=new Vf(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=k;if(e&496)return e;a=new H(f.left,f.top);a instanceof H?(g=a.x,a=a.y):(g=a,a=void 0);b.style.left=gg(g,!1);b.style.top=gg(a,!1);g=new od(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=rd(b),a=xd(pd(g).f),!G||xc("10")||a&&xc("8")?(b=b.style,hc?b.MozBoxSizing="border-box":ic?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,
0)+"px"):(g=b.style,a?(G?(a=mg(b,"paddingLeft"),f=mg(b,"paddingRight"),d=mg(b,"paddingTop"),h=mg(b,"paddingBottom"),a=new Uf(d,f,h,a)):(a=Zf(b,"paddingLeft"),f=Zf(b,"paddingRight"),d=Zf(b,"paddingTop"),h=Zf(b,"paddingBottom"),a=new Uf(parseFloat(d),parseFloat(f),parseFloat(h),parseFloat(a))),!G||9<=Number(Ac)?(f=Zf(b,"borderLeftWidth"),d=Zf(b,"borderRightWidth"),h=Zf(b,"borderTopWidth"),b=Zf(b,"borderBottomWidth"),b=new Uf(parseFloat(h),parseFloat(d),parseFloat(b),parseFloat(f))):(f=og(b,"borderLeft"),
d=og(b,"borderRight"),h=og(b,"borderTop"),b=og(b,"borderBottom"),b=new Uf(h,d,b,f)),g.pixelWidth=c.width-b.left-a.left-a.right-b.right,g.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(g.pixelWidth=c.width,g.pixelHeight=c.height)));return e}
function ti(a,b){return(b&8&&kg(a)?b^4:b)&-9}
;function Q(a){cb.call(this);this.A=1;this.j=[];this.v=0;this.f=[];this.g={};this.B=!!a}
D(Q,cb);m=Q.prototype;m.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.A;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.A=e+3;d.push(e);return e};
function vi(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.aa(d),b.apply(void 0,arguments))},a)}
function wi(a,b,c){if(b=a.g[b]){var d=a.f;(b=kb(b,function(e){return d[e+1]==c&&void 0==d[e+2]}))&&a.aa(b)}}
m.aa=function(a){var b=this.f[a];if(b){var c=this.g[b];0!=this.v?(this.j.push(a),this.f[a+1]=Ia):(c&&mb(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
m.N=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];xi(this.f[g+1],this.f[g+2],d)}else{this.v++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.v--,0<this.j.length&&0==this.v)for(;c=this.j.pop();)this.aa(c)}}return 0!=e}return!1};
function xi(a,b,c){Zd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.g[a];b&&(E(b,this.aa,this),delete this.g[a])}else this.f.length=0,this.g={}};
function yi(a,b){if(b){var c=a.g[b];return c?c.length:0}c=0;for(var d in a.g)c+=yi(a,d);return c}
m.S=function(){Q.D.S.call(this);this.clear();this.j.length=0};function zi(a){this.f=a}
zi.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,hi(b))};
zi.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
zi.prototype.remove=function(a){this.f.remove(a)};function Ai(a){this.f=a}
D(Ai,zi);function Bi(a){this.data=a}
function Ci(a){return void 0===a||a instanceof Bi?a:new Bi(a)}
Ai.prototype.set=function(a,b){Ai.D.set.call(this,a,Ci(b))};
Ai.prototype.g=function(a){a=Ai.D.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ai.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Di(a){this.f=a}
D(Di,Ai);Di.prototype.set=function(a,b,c){if(b=Ci(b)){if(c){if(c<Va()){Di.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Va()}Di.D.set.call(this,a,b)};
Di.prototype.g=function(a){var b=Di.D.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Va()||c&&c>Va())Di.prototype.remove.call(this,a);else return b}};function Ei(){}
;function Fi(){}
D(Fi,Ei);Fi.prototype.clear=function(){var a=Sh(this.P(!0)),b=this;E(a,function(c){b.remove(c)})};function Gi(a){this.f=a}
D(Gi,Fi);m=Gi.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.P=function(a){var b=0,c=this.f,d=new Ph;d.next=function(){if(b>=c.length)throw Oh;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function Hi(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
D(Hi,Gi);function Ii(a,b){this.g=a;this.f=null;if(G&&!(9<=Number(Ac))){Ji||(Ji=new Th);this.f=Ji.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Ji.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
D(Ii,Fi);var Ki={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ji=null;function Li(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ki[b]})}
m=Ii.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(Li(a),b);Mi(this)};
m.get=function(a){a=this.f.getAttribute(Li(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(Li(a));Mi(this)};
m.P=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Ph;d.next=function(){if(b>=c.length)throw Oh;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Mi(this)};
function Mi(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ni(a,b){this.g=a;this.f=b+"::"}
D(Ni,Fi);Ni.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Ni.prototype.get=function(a){return this.g.get(this.f+a)};
Ni.prototype.remove=function(a){this.g.remove(this.f+a)};
Ni.prototype.P=function(a){var b=this.g.P(!0),c=this,d=new Ph;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var Oi=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};A("yt.config_",Oi);function Pi(a){var b=arguments,c=Oi;1<b.length?c[b[0]]=b[1]:1===b.length&&Object.assign(c,b[0])}
function R(a,b){return a in Oi?Oi[a]:b}
;var Qi=[];function Ri(a){Qi.forEach(function(b){return b(a)})}
function Si(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ti(b),Ri(b)}}:a}
function Ti(a){var b=y("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Pi("ERRORS",b))}
function Ui(a){var b=y("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Pi("ERRORS",b))}
;function Vi(a,b){"function"===typeof a&&(a=Si(a));return window.setTimeout(a,b)}
function Wi(a){window.clearTimeout(a)}
;var Xi=x.ytPubsubPubsubInstance||new Q,Yi=x.ytPubsubPubsubSubscribedKeys||{},Zi=x.ytPubsubPubsubTopicToKeys||{},$i=x.ytPubsubPubsubIsSynchronous||{};function aj(a,b,c){var d=bj();if(d){var e=d.subscribe(a,function(){var f=arguments;var g=function(){Yi[e]&&b.apply&&"function"==typeof b.apply&&b.apply(c||window,f)};
try{$i[a]?g():Vi(g,0)}catch(h){Ti(h)}},c);
Yi[e]=!0;Zi[a]||(Zi[a]=[]);Zi[a].push(e);return e}return 0}
function cj(a){var b=bj();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),E(a,function(c){b.unsubscribeByKey(c);delete Yi[c]}))}
function dj(a,b){var c=bj();return c?c.publish.apply(c,arguments):!1}
function ej(a,b){$i[a]=!0;var c=bj();c&&c.publish.apply(c,arguments);$i[a]=!1}
function bj(){return x.ytPubsubPubsubInstance}
Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.aa;Q.prototype.publish=Q.prototype.N;Q.prototype.clear=Q.prototype.clear;A("ytPubsubPubsubInstance",Xi);A("ytPubsubPubsubTopicToKeys",Zi);A("ytPubsubPubsubIsSynchronous",$i);A("ytPubsubPubsubSubscribedKeys",Yi);function fj(a,b,c){a&&(a.dataset?a.dataset[gj(b)]=String(c):a.setAttribute("data-"+b,c))}
function hj(a,b){return a?a.dataset?a.dataset[gj(b)]:a.getAttribute("data-"+b):null}
function ij(a,b){a&&(a.dataset?delete a.dataset[gj(b)]:a.removeAttribute("data-"+b))}
var jj={};function gj(a){return jj[a]||(jj[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function S(a,b){this.version=a;this.args=b}
;function T(a,b){this.topic=a;this.f=b}
T.prototype.toString=function(){return this.topic};function kj(){}
function lj(a,b){return mj(a,0,b)}
function nj(a,b){return mj(a,1,b)}
;function oj(){}
qa(oj,kj);function mj(a,b,c){isNaN(c)&&(c=void 0);var d=y("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Vi(a,c||0)}
oj.prototype.start=function(){var a=y("yt.scheduler.instance.start");a&&a()};
Ja(oj);oj.C();var pj=y("ytPubsub2Pubsub2Instance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.aa;Q.prototype.publish=Q.prototype.N;Q.prototype.clear=Q.prototype.clear;A("ytPubsub2Pubsub2Instance",pj);var qj=y("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",qj);var rj=y("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",rj);var sj=y("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",sj);
A("ytPubsub2Pubsub2SkipSubKey",null);function U(a,b){var c=tj();c&&c.publish.call(c,a.toString(),a,b)}
function uj(a,b,c){var d=tj();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,g){var h=y("ytPubsub2Pubsub2SkipSubKey");h&&h==e||(h=function(){if(qj[e])try{if(g&&a instanceof T&&a!=f)try{var k=a.f,l=g;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!k.R){var n=new k;k.R=n.version}var p=k.R}catch(q){}if(!p||l.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(k,ob(l.args))}catch(q){throw q.message=
"yt.pubsub2.Data.deserialize(): "+q.message,q;}}catch(q){throw q.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+q.message,q;}b.call(c||window,g)}catch(q){Ti(q)}},sj[a.toString()]?y("yt.scheduler.instance")?nj(h):Vi(h,0):h())});
qj[e]=!0;rj[a.toString()]||(rj[a.toString()]=[]);rj[a.toString()].push(e);return e}
function vj(a){var b=tj();b&&("number"===typeof a&&(a=[a]),E(a,function(c){b.unsubscribeByKey(c);delete qj[c]}))}
function tj(){return y("ytPubsub2Pubsub2Instance")}
;var wj=0;function xj(a){var b=a.__yt_uid_key;b||(b=yj(),a.__yt_uid_key=b);return b}
function zj(a,b){a=I(a);b=I(b);return!!Rd(a,function(c){return c===b},!0,void 0)}
function Aj(a,b){var c=td(document,a,null,b);return c.length?c[0]:null}
function Bj(){var a=document,b;jb(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function Cj(){ci(document.body,"hide-players",!1);var a=sd("preserve-players");E(a,function(b){ai(b,"preserve-players")})}
var yj=y("ytDomDomGetNextId")||function(){return++wj};
A("ytDomDomGetNextId",yj);var Dj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Ej(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Dj||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Ej.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Ej.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Ej.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Cb=x.ytEventsEventsListeners||{};A("ytEventsEventsListeners",Cb);var Fj=x.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",Fj);
function Gj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Bb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&Db(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Gj(a,b,c,d);if(e)return e;e=++Fj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Ej(h);if(!Rd(h.relatedTarget,function(k){return k==a},!0))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Ej(h);
h.currentTarget=a;return c.call(a,h)};
g=Si(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Hj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Cb[e]=[a,b,c,g,d];return e}
function Ij(a,b,c){var d=a||document;return V(d,"click",function(e){var f=Rd(e.target,function(g){return g===d||c(g)},!0);
f&&f!==d&&!f.disabled&&(e.currentTarget=f,b.call(f,e))})}
function Jj(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var Hj=Lb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Kj(a,b,c){return Ij(a,b,function(d){return O(d,c)})}
function Lj(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function Mj(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in Cb){var c=Cb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Hj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Cb[b]}}))}
;var Nj={},Oj="ontouchstart"in document;function Pj(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Rd(c,function(e){return O(e,b)},!0,d)}
function Qj(a){var b="mouseover"==a.type&&"mouseenter"in Nj||"mouseout"==a.type&&"mouseleave"in Nj,c=a.type in Nj||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=Nj[b];for(var d in c.g){var e=Pj(b,d,a.target);e&&!Rd(a.relatedTarget,function(f){return f==e},!0)&&c.N(d,e,b,a)}}if(b=Nj[a.type])for(d in b.g)(e=Pj(a.type,d,a.target))&&b.N(d,e,a.type,a)}}
V(document,"blur",Qj,!0);V(document,"change",Qj,!0);V(document,"click",Qj);V(document,"focus",Qj,!0);V(document,"mouseover",Qj);V(document,"mouseout",Qj);V(document,"mousedown",Qj);V(document,"keydown",Qj);V(document,"keyup",Qj);V(document,"keypress",Qj);V(document,"cut",Qj);V(document,"paste",Qj);Oj&&(V(document,"touchstart",Qj),V(document,"touchend",Qj),V(document,"touchcancel",Qj));function Rj(a){this.o=a;this.A={};this.F=[];this.B=[]}
m=Rj.prototype;m.J=function(a){return K(a,W(this))};
function W(a,b){return"yt-uix"+(a.o?"-"+a.o:"")+(b?"-"+b:"")}
m.unregister=function(){cj(this.F);this.F.length=0;vj(this.B);this.B.length=0};
m.init=Ia;m.dispose=Ia;function Sj(a,b,c){a.F.push(aj(b,c,a))}
function Tj(a,b,c){a.B.push(uj(b,c,a))}
function X(a,b,c,d){d=W(a,d);var e=z(c,a);b in Nj||(Nj[b]=new Q);Nj[b].subscribe(d,e);a.A[c]=e}
function Y(a,b,c,d){if(b in Nj){var e=Nj[b];wi(e,W(a,d),a.A[c]);0>=yi(e)&&(e.dispose(),delete Nj[b])}delete a.A[c]}
m.X=function(a,b,c){var d=this.l(a,b);if(d&&(d=y(d))){var e=rb(arguments,2);qb(e,0,0,a);d.apply(null,e)}};
m.l=function(a,b){return hj(a,b)};
function Uj(a,b){fj(a,"tooltip-text",b)}
;var Vj=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};A("yt.uix.widgets_",Vj);function Wj(a){var b=[];zb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Xj(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?pb(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};Ti(h)}}}return b}
function Yj(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Xj(1<a.length?a[1]:a[0])):{}}
function Zj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Xj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Jf(a,e)+d}
function ak(a){if(!b)var b=window.location.href;var c=Cf(1,a),d=Df(a);c&&d?(a=a.match(Af),b=b.match(Af),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Df(b)==d&&(Number(Cf(4,b))||null)==(Number(Cf(4,a))||null):!0;return a}
;function bk(a){a=void 0===a?{}:a;"function"===typeof a&&(a={callback:a});if(a.gapiHintOverride||R("GAPI_HINT_OVERRIDE")){var b=Yj(document.location.href).gapi_jsh;b&&Gb(a,{_c:{jsl:{h:b}}})}kh("gapi.iframes:gapi.iframes.style.common",a)}
;function ck(){return y("gapi.iframes.getContext")()}
;function dk(a){S.call(this,1,arguments);this.f=a}
D(dk,S);function ek(a){S.call(this,1,arguments);this.f=a}
D(ek,S);function fk(a,b,c){S.call(this,3,arguments);this.i=a;this.g=b;this.f=null!=c?!!c:null}
D(fk,S);function gk(a,b,c,d,e,f){S.call(this,2,arguments);this.f=a;this.g=b;this.j=c||null;this.i=d||null;this.source=e||null;this.params=f||null}
D(gk,S);function hk(a,b,c){S.call(this,1,arguments);this.f=a;this.g=b}
D(hk,S);function ik(a,b,c,d,e,f,g,h){S.call(this,1,arguments);this.f=a;this.o=b;this.g=c;this.v=d||null;this.j=e||null;this.i=f||null;this.source=g||null;this.params=h||null}
D(ik,S);
var jk=new T("subscription-batch-subscribe",dk),kk=new T("subscription-batch-unsubscribe",dk),lk=new T("subscription-subscribe",gk),mk=new T("subscription-subscribe-loading",ek),nk=new T("subscription-subscribe-loaded",ek),ok=new T("subscription-subscribe-success",hk),pk=new T("subscription-subscribe-external",gk),qk=new T("subscription-unsubscribe",ik),rk=new T("subscription-unsubscirbe-loading",ek),sk=new T("subscription-unsubscribe-loaded",ek),tk=new T("subscription-unsubscribe-success",ek),uk=
new T("subscription-external-unsubscribe",ik),vk=new T("subscription-enable-ypc",ek),wk=new T("subscription-disable-ypc",ek),xk=new T("subscription-prefs",fk),yk=new T("subscription-prefs-success",fk),zk=new T("subscription-prefs-failure",fk);function Ak(){var a=void 0===a?!1:a;var b=Bj();if(a)for(;b&&b.shadowRoot;)b=b.shadowRoot.fullscreenElement;return b?b:null}
;function Bk(a,b){(a=I(a))&&a.style&&(a.style.display=b?"":"none",ci(a,"hid",!b))}
function Ck(a){return(a=I(a))?"none"!=a.style.display&&!O(a,"hid"):!1}
function Dk(a){E(arguments,function(b){!La(b)||b instanceof Element?Bk(b,!0):E(b,function(c){Dk(c)})})}
function Ek(a){E(arguments,function(b){!La(b)||b instanceof Element?Bk(b,!1):E(b,function(c){Ek(c)})})}
(function(a,b){function c(f){var g=u(f);f=g.next().value;g=fa(g);return a.apply(f,g)}
function d(f){f=u(f);f.next();f=fa(f);return b(e,f)}
b=void 0===b?oi:b;var e=Pa(a);return function(f){for(var g=[],h=0;h<arguments.length;++h)g[h-0]=arguments[h];h=this||x;var k=ni.get(h);k||(k={},ni.set(h,k));return dc(k,[this].concat(ha(g)),c,d)}})(function(a){var b=Bd(document,"DIV");
a&&(b.className=a);b.style.cssText="overflow:auto;position:absolute;top:0;width:100px;height:100px";a=Bd(document,"DIV");fg(a,"200px","200px");b.appendChild(a);document.body.appendChild(b);a=b.offsetWidth-b.clientWidth;Cd(b);return a});function Fk(){Rj.call(this,"tooltip");this.f=0;this.g={}}
D(Fk,Rj);Ja(Fk);m=Fk.prototype;m.register=function(){X(this,"mouseover",this.ia);X(this,"mouseout",this.V);X(this,"focus",this.Ca);X(this,"blur",this.va);X(this,"click",this.V);X(this,"touchstart",this.cb);X(this,"touchend",this.ka);X(this,"touchcancel",this.ka)};
m.unregister=function(){Y(this,"mouseover",this.ia);Y(this,"mouseout",this.V);Y(this,"focus",this.Ca);Y(this,"blur",this.va);Y(this,"click",this.V);Y(this,"touchstart",this.cb);Y(this,"touchend",this.ka);Y(this,"touchcancel",this.ka);this.dispose();Fk.D.unregister.call(this)};
m.dispose=function(){for(var a in this.g)this.V(this.g[a]);this.g={}};
m.ia=function(a){if(!(this.f&&1E3>Va()-this.f)){var b=parseInt(this.l(a,"tooltip-hide-timer"),10);b&&(ij(a,"tooltip-hide-timer"),Wi(b));b=z(function(){Gk(this,a);ij(a,"tooltip-show-timer")},this);
var c=parseInt(this.l(a,"tooltip-show-delay"),10)||0;b=Vi(b,c);fj(a,"tooltip-show-timer",b.toString());a.title&&(Uj(a,Hk(this,a)),a.title="");b=Pa(a).toString();this.g[b]=a}};
m.V=function(a){var b=parseInt(this.l(a,"tooltip-show-timer"),10);b&&(Wi(b),ij(a,"tooltip-show-timer"));b=z(function(){if(a){var c=I(Ik(this,a));c&&(Jk(c),Cd(c),ij(a,"content-id"));c=I(Ik(this,a,"arialabel"));Cd(c)}ij(a,"tooltip-hide-timer")},this);
b=Vi(b,50);fj(a,"tooltip-hide-timer",b.toString());if(b=this.l(a,"tooltip-text"))a.title=b;b=Pa(a).toString();delete this.g[b]};
m.Ca=function(a,b){this.f=0;this.ia(a,b)};
m.va=function(a){this.f=0;this.V(a)};
m.cb=function(a,b,c){c.changedTouches&&(this.f=0,(a=Pj(b,W(this),c.changedTouches[0].target))&&this.ia(a,b))};
m.ka=function(a,b,c){c.changedTouches&&(this.f=Va(),(a=Pj(b,W(this),c.changedTouches[0].target))&&this.V(a))};
function Kk(a,b,c){Uj(b,c);a=a.l(b,"content-id");(a=I(a))&&Gd(a,c)}
function Hk(a,b){return a.l(b,"tooltip-text")||b.title}
function Gk(a,b){if(b){var c=Hk(a,b);if(c){var d=I(Ik(a,b));if(!d){d=document.createElement("div");d.id=Ik(a,b);Zh(d,W(a,"tip"));var e=document.createElement("div");Zh(e,W(a,"tip-body"));var f=document.createElement("div");Zh(f,W(a,"tip-arrow"));var g=document.createElement("div");g.setAttribute("aria-hidden","true");Zh(g,W(a,"tip-content"));var h=Lk(a,b),k=Ik(a,b,"content");g.id=k;fj(b,"content-id",k);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);var l=Od(b);k=Ik(a,b,"arialabel");
f=document.createElement("div");P(f,W(a,"arialabel"));f.id=k;l=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+l:l+" "+c;Gd(f,l);b.setAttribute("aria-labelledby",k);k=Ak()||document.body;k.appendChild(f);k.appendChild(d);Kk(a,b,c);(c=parseInt(a.l(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",P(g,W(a,"normal-wrap")));g=O(b,W(a,"reverse"));Mk(a,b,d,e,h,g)||Mk(a,b,d,e,h,!g);var n=W(a,"tip-visible");Vi(function(){P(d,n)},0)}}}}
function Mk(a,b,c,d,e,f){ci(c,W(a,"tip-reverse"),f);var g=0;f&&(g=1);var h=hg(b);f=new H((h.width-10)/2,f?h.height:0);var k=dg(b);ui(new H(k.x+f.x,k.y+f.y),c,g);f=wd(window);if(1==c.nodeType)var l=eg(c);else c=c.changedTouches?c.changedTouches[0]:c,l=new H(c.clientX,c.clientY);c=hg(d);var n=Math.floor(c.width/2);g=!!(f.height<l.y+h.height);h=!!(l.y<h.height);k=!!(l.x<n);f=!!(f.width<l.x+n);l=(c.width+3)/-2- -5;a=a.l(b,"force-tooltip-direction");if("left"==a||k)l=-5;else if("right"==a||f)l=20-c.width-
3;a=Math.floor(l)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||h)}
function Ik(a,b,c){a=W(a)+xj(b);c&&(a+="-"+c);return a}
function Lk(a,b){var c=null;kc&&O(b,W(a,"masked"))&&((c=I("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Dk(c)):(c=Bd(document,"IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",Zh(c,W(a,"tip-mask"))));return c}
function Jk(a){var b=I("yt-uix-tooltip-shared-mask"),c=b&&Rd(b,function(d){return d==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Ek(b),document.body.appendChild(b))}
;function Nk(a){var b=Ok();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=aj("LOGGED_IN",function(d){cj(R("LOGGED_IN_PUBSUB_KEY",void 0));Pi("LOGGED_IN",!0);a(d)});
Pi("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function Ok(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=If(a,"mode","subscribe");a=If("/signin?context=popup","next",a);return a=If(a,"feature","sub_button")}
A("yt.pubsub.publish",dj);function Z(a){a=Pk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Qk(a,b){var c=Pk(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Pk(a){var b=R("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:R("EXPERIMENT_FLAGS",{})[a]}
function Rk(){var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=R("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Sk=window,Tk=Sk.ytcsi&&Sk.ytcsi.now?Sk.ytcsi.now:Sk.performance&&Sk.performance.timing&&Sk.performance.now&&Sk.performance.timing.navigationStart?function(){return Sk.performance.timing.navigationStart+Sk.performance.now()}:function(){return(new Date).getTime()};var Uk=Qk("initial_gel_batch_timeout",1E3),Vk=Math.pow(2,16)-1,Wk=null,Xk=0,Yk=void 0,Zk=0,$k=0,al=0,bl=!0,cl=x.ytLoggingTransportLogPayloadsQueue_||{};A("ytLoggingTransportLogPayloadsQueue_",cl);var dl=x.ytLoggingTransportGELQueue_||new Map;A("ytLoggingTransportGELQueue_",dl);var el=x.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",el);
function fl(){Wi(Zk);Wi($k);$k=0;Yk&&Yk.isReady()?(gl(dl),"log_event"in cl&&gl(Object.entries(cl.log_event)),dl.clear(),delete cl.log_event):hl()}
function hl(){Z("web_gel_timeout_cap")&&!$k&&($k=Vi(fl,6E4));Wi(Zk);var a=R("LOGGING_BATCH_TIMEOUT",Qk("web_gel_debounce_ms",1E4));Z("shorten_initial_gel_batch_timeout")&&bl&&(a=Uk);Zk=Vi(fl,a)}
function gl(a){var b=Yk,c=Math.round(Tk());a=u(a);for(var d=a.next();!d.done;d=a.next()){var e=u(d.value);d=e.next().value;var f=e.next().value;e=Eb({context:il(b.f||jl())});e.events=f;(f=el[d])&&kl(e,d,f);delete el[d];ll(e,c);ml(b,"log_event",e,{retry:!0,onSuccess:function(){Xk=Math.round(Tk()-c)}});
bl=!1}}
function ll(a,b){a.requestTimeMs=String(b);Z("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=R("EVENT_ID",void 0);if(c){var d=R("BATCH_CLIENT_COUNTER",void 0)||0;!d&&Z("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Vk/2));d++;d>Vk&&(d=1);Pi("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Wk&&Xk&&Z("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Wk,roundtripMs:String(Xk)});Wk=c;Xk=0}}
function kl(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var nl=x.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",nl);
function ol(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||Tk());e[a]=b;a=String;d.timestamp?b=-1:(b=y("_lact",window),b=null==b?-1:Math.max(Va()-b,0));e.context={lastActivityMs:a(b)};Z("log_sequence_info_on_gel_web")&&d.Za&&(a=e.context,b=d.Za,nl[b]=b in nl?nl[b]+1:0,a.sequence={index:nl[b],groupKey:b},d.tc&&delete nl[d.Za]);d=d.sc;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),el[d.token]=a,a=d.token);d=dl.get(a)||[];dl.set(a,d);
d.push(e);c&&(Yk=new c);c=Qk("web_logging_max_batch")||100;e=Tk();d.length>=c?fl():10<=e-al&&(hl(),al=e)}
;function pl(a){var b=ql;a=void 0===a?y("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(rl(b),sl(b));b.ca_type="image";a&&(b.bid=a);return b}
function rl(a){var b={};b.dt=pg;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?xf:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!xf.navigator&&"unknown"!==typeof xf.navigator.javaEnabled&&!!xf.navigator.javaEnabled&&xf.navigator.javaEnabled();xf.screen&&(b.u_h=xf.screen.height,b.u_w=xf.screen.width,b.u_ah=xf.screen.availHeight,b.u_aw=xf.screen.availWidth,b.u_cd=
xf.screen.colorDepth);xf.navigator&&xf.navigator.plugins&&(b.u_nplug=xf.navigator.plugins.length);xf.navigator&&xf.navigator.mimeTypes&&(b.u_nmime=xf.navigator.mimeTypes.length);return b}
function sl(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(l){}try{var e=b.outerWidth;var f=b.outerHeight}catch(l){}try{var g=b.innerWidth;var h=b.innerHeight}catch(l){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=wd(c||window).round()}catch(l){k=new od(-12245933,-12245933)}c=k;k={};d=new Mh;x.SVGElement&&x.document.createElementNS&&d.set(0);e=Sf();e["allow-top-navigation-by-user-activation"]&&d.set(1);e["allow-popups-to-escape-sandbox"]&&
d.set(2);x.crypto&&x.crypto.subtle&&d.set(3);x.TextDecoder&&x.TextEncoder&&d.set(4);d=Nh(d);k.bc=d;k.bih=c.height;k.biw=c.width;k.brdim=b.join();a=a.g;return k.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,k.wgl=!!xf.WebGLRenderingContext,k}
var ql=new function(){var a=window.document;this.f=window;this.g=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return Wj(pl(a))});Va();var tl="XMLHttpRequest"in x?function(){return new XMLHttpRequest}:null;
function ul(){if(!tl)return null;var a=tl();return"open"in a?a:null}
;var vl={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},wl="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
xl=!1;function yl(a,b){b=void 0===b?{}:b;var c=ak(a),d=Z("web_ajax_ignore_global_headers_if_set"),e;for(e in vl){var f=R(vl[e]);!f||!c&&Df(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!Df(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!Df(a))&&(d="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=d);if(c||!Df(a))b["X-YouTube-Ad-Signals"]=Wj(pl(void 0));return b}
function zl(a){var b=window.location.search,c=Df(a),d=Bf(Cf(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Xj(b),f={};E(wl,function(g){e[g]&&(f[g]=e[g])});
return Zj(a,f||{},!1)}
function Al(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Bl(a,b);var d=Cl(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&Wi(f);var h=g.ok,k=function(l){l=l||{};var n=b.context||x;h?b.onSuccess&&b.onSuccess.call(n,l,g):b.onError&&b.onError.call(n,l,g);b.ba&&b.ba.call(n,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.Ua&&0<b.timeout&&(f=Vi(function(){e||(e=!0,Wi(f),b.Ua.call(b.context||x))},b.timeout))}else Dl(a,b)}
function Dl(a,b){var c=b.format||"JSON";a=Bl(a,b);var d=Cl(a,b),e=!1,f=El(a,function(k){if(!e){e=!0;h&&Wi(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var n=null,p=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||p||q)n=Fl(a,c,k,b.qc);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||x;
l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.ba&&b.ba.call(p,k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.ja&&0<b.timeout){var g=b.ja;var h=Vi(function(){e||(e=!0,f.abort(),Wi(h),g.call(b.context||x,f))},b.timeout)}}
function Bl(a,b){b.wc&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME",void 0),d=b.sa;d&&(d[c]&&delete d[c],a=Zj(a,d||{},!0));return a}
function Cl(a,b){var c=R("XSRF_FIELD_NAME",void 0),d=R("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.G,g=R("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.uc||Df(a)&&!b.withCredentials&&Df(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.G&&b.G[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Xj(e),Gb(e,f),e=b.Xa&&"JSON"==b.Xa?JSON.stringify(e):Hf(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!xl&&c&&"POST"!=b.method&&
(xl=!0,Ti(Error("AJAX request with postData should use POST")));return e}
function Fl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ui(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Gl(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=Hl(g)})}d&&Il(e);
return e}
function Il(a){if(Oa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=new Sb;void 0===Mb&&(Mb=Xa("goog#html"));var f=Mb;e.f=f?f.createHTML(d):d;a[c]=e}else Il(a[b])}}
function Gl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Hl(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function El(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Si(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ul();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;Z("debug_forward_web_query_parameters")&&(a=zl(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=yl(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Jl(){for(var a={},b=u(Object.entries(Xj(R("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function Kl(){return"INNERTUBE_API_KEY"in Oi&&"INNERTUBE_API_VERSION"in Oi}
function jl(){return{innertubeApiKey:R("INNERTUBE_API_KEY",void 0),innertubeApiVersion:R("INNERTUBE_API_VERSION",void 0),zb:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ab:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Cb:R("INNERTUBE_CONTEXT_HL",void 0),Bb:R("INNERTUBE_CONTEXT_GL",void 0),Db:R("INNERTUBE_HOST_OVERRIDE",void 0)||"",Fb:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Eb:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1)}}
function il(a){a={client:{hl:a.Cb,gl:a.Bb,clientName:a.Ab,clientVersion:a.innertubeContextClientVersion,configInfo:a.zb}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=R("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=Rk();0<b.length&&(a.request={internalExperimentFlags:b});R("DELEGATED_SESSION_ID")&&!Z("pageid_as_header_web")&&(a.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,Jl());return a}
function Ll(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.oc||R("AUTHORIZATION"))||(a?b="Bearer "+y("gapi.auth.getToken")().nc:b=Fg([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=R("SESSION_INDEX",0),Z("pageid_as_header_web")&&(d["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return d}
;function Ml(a){a=Object.assign({},a);delete a.Authorization;var b=Fg();if(b){var c=new nh;c.update(R("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Ze(c.digest(),3)}return a}
function Nl(a){a=Ml(a);var b=new nh;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(var c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}
;function Ol(a,b,c,d,e){zf.set(""+a,b,{La:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Pl(a){return zf.get(""+a,void 0)}
;function Ql(){var a=new Hi;(a=a.isAvailable()?new Ni(a,"yt.innertube"):null)||(a=new Ii("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Di(a):null;this.g=document.domain||window.location.hostname}
Ql.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,Va()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(hi(b))}catch(f){return}else e=escape(b);Ol(a,e,c,this.g)};
Ql.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Pl(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ql.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;zf.remove(""+a,"/",void 0===b?"youtube.com":b)};var Rl;function Sl(){Rl||(Rl=new Ql);return Rl}
function Tl(a,b,c,d){if(d)return null;d=Sl().get("nextId",!0)||1;var e=Sl().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ml(c),requestTime:Math.round(Tk())};Sl().set("nextId",d+1,86400,!0);Sl().set("requests",e,86400,!0);return d}
function Ul(a){var b=Sl().get("requests",!0)||{};delete b[a];Sl().set("requests",b,86400,!0)}
function Vl(a){var b=Sl().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Tk())-d.requestTime)){var e=d.authState,f=Ml(Ll(!1));Db(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Tk())),ml(a,d.method,e,{}));delete b[c]}}Sl().set("requests",b,86400,!0)}}
;function Wl(){}
function Xl(){Wl.f||(Wl.f=new Wl);return Wl.f}
function Yl(){var a={},b=Fg([]);b&&(a.Authorization=b,a["X-Goog-AuthUser"]=R("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in Oi||(a["X-Origin"]=window.location.origin),Z("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in Oi&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return je(a)}
;var Zl={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var $l=Se||Te;function am(){var a=/WebKit\/([0-9]+)/.exec(wb);return!!(a&&600<=parseInt(a[1],10))}
function bm(){var a=/WebKit\/([0-9]+)/.exec(wb);return!!(a&&602<=parseInt(a[1],10))}
function cm(a){var b=wb;return b?0<=b.toLowerCase().indexOf(a):!1}
;function dm(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);Object.setPrototypeOf(this,dm.prototype)}
qa(dm,Error);function em(a){return a instanceof DOMException?"VersionError"===a.name:"DOMError"in self&&a instanceof DOMError?"VersionError"===a.name:a instanceof Object&&"message"in a?"An attempt was made to open a database using a lower version than the existing version."===a.message:!1}
;function fm(a){return new ee(function(b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){a.removeEventListener("success",e);a.removeEventListener("error",d)}
a.addEventListener("success",e);a.addEventListener("error",d)})}
;function gm(a){this.f=a}
m=gm.prototype;m.add=function(a,b,c){return hm(im(this,[a],"readwrite"),a).add(b,c)};
m.clear=function(a){return hm(im(this,[a],"readwrite"),a).clear()};
m.close=function(){this.f.close()};
m.count=function(a,b){return hm(im(this,[a]),a).count(b)};
function jm(a,b,c){a=a.f.createObjectStore(b,c);return new km(a)}
m["delete"]=function(a,b){return hm(im(this,[a],"readwrite"),a)["delete"](b)};
m.get=function(a,b){return hm(im(this,[a]),a).get(b)};
function im(a,b,c){a=a.f.transaction(b,void 0===c?"readonly":c);return new lm(a,b)}
function km(a){this.f=a}
m=km.prototype;m.add=function(a,b){var c=b?this.f.add(a,b):this.f.add(a);return fm(c)};
m.clear=function(){return fm(this.f.clear()).then(function(){})};
m.count=function(a){a=a?this.f.count(a):this.f.count();return fm(a)};
m["delete"]=function(a){return fm(this.f["delete"](a))};
m.get=function(a){return fm(this.f.get(a))};
m.index=function(a){return new mm(this.f.index(a))};
m.getName=function(){return this.f.name};
function nm(a,b,c){a=c?a.f.put(b,c):a.f.put(b);return fm(a)}
function lm(a){var b=this;this.f=a;this.g=new Map;this.done=new ee(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.f.error)});
b.f.addEventListener("abort",function(){var e=b.f.error;e?("QuotaExceededError"===e.name?Ui(Error("The current transaction exceeded its quota limitations.")):"UnknownError"===e.name&&Ui(Error("The current transaction may have failed because of exceeding quota limitations.")),d(e)):d(new dm)})})}
lm.prototype.abort=function(){this.f.abort();return this.done};
function hm(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new km(c),a.g.set(c,d));return d}
function mm(a){this.f=a}
mm.prototype.count=function(a){a=a?this.f.count(a):this.f.count();return fm(a)};
mm.prototype.get=function(a){return fm(this.f.get(a))};
function om(a,b){this.request=a;this.f=b}
function pm(a){return fm(a).then(function(b){return null===b?null:new om(a,b)})}
om.prototype["delete"]=function(){return fm(this.f["delete"]()).then(function(){})};
om.prototype.update=function(a){return fm(this.f.update(a))};function qm(a,b,c){function d(){n||(n=new gm(f.result));return n}
var e=lm;var f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var g=c.blocked,h=c.blocking,k=c.f,l=c.upgrade,n;l&&f.addEventListener("upgradeneeded",function(p){if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var q=d(),r=new e(f.transaction);l(q,p.oldVersion,p.newVersion,r)});
g&&f.addEventListener("blocked",function(){g()});
return fm(f).then(function(p){h&&p.addEventListener("versionchange",function(){h(d())});
k&&p.addEventListener("close",function(){k()});
return d()})}
function rm(a,b,c){c=void 0===c?{}:c;return qm(a,b,c)}
;var sm,tm,um=["getAll","getAllKeys","getKey","openKeyCursor"],vm=["getAll","getAllKeys","getKey","openKeyCursor"];function wm(){return new Promise(function(a){setTimeout(a,50)})}
function xm(){return Tf(this,function b(){var c,d,e;return Da(b,function(f){switch(f.f){case 1:if($l&&am()&&!bm()&&!Z("ytidb_allow_on_ios_safari_v8_and_v9")||!self.indexedDB)return f["return"](!1);ua(f);d=!1;return w(f,rm("yt-idb-test-do-not-use",void 0,{blocking:function(){d=!0;c&&(c.close(),c=void 0)}}),5);
case 5:return c=f.g,e=rm("yt-idb-test-do-not-use",c.f.version+1).then(function(g){try{g.close()}catch(h){}}),w(f,Promise.race([e,
wm()]),6);case 6:return f["return"](d);case 3:wa(f);if(c)try{c.close()}catch(g){}xa(f);break;case 2:return va(f),f["return"](!1)}})})}
function ym(){return void 0!==sm?je(sm):new ee(function(a){xm().then(function(b){sm=b;a(b)})})}
function zm(){return void 0!==tm?je(tm):ym().then(function(a){if(!a)return!1;var b=u(um);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=u(vm);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){return tm=a})}
;var Am;function Bm(){function a(b){b.close();Am=void 0}
Am||(Am=oe(rm("YtIdbMeta",1,{blocking:a,upgrade:function(b,c){1>c&&jm(b,"databases",{keyPath:"actualName"})}}),function(b){return em(b)?rm("YtIdbMeta",void 0,{blocking:a}):ke(b)}));
return Am}
function Cm(a){return Bm().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn:1)return nm(hm(im(b,["databases"],"readwrite"),"databases"),a,void 0)})})}
function Dm(a){return Bm().then(function(b){return b["delete"]("databases",a)})}
;function Em(a){try{var b={actualName:"LogsDataBase",publicName:"LogsDataBase",userIdentifier:void 0,signedIn:!1}}catch(c){return ke(c)}return oe(Cm(b).then(function(){return a(b)}),function(c){return oe(Dm(b.actualName),function(){}).then(function(){return ke(c)})})}
function Fm(a,b){b=void 0===b?{}:b;return Em(function(c){return rm(c.actualName,a,b)})}
;var Gm;function Hm(){return Tf(this,function b(){return Da(b,function(c){if(!Gm)try{Gm=Fm(1,{upgrade:function(d,e){1>e&&(jm(d,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).f.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1}),jm(d,"sapisid"))}})}catch(d){if(!em(d))return Ti(d),c["return"](Promise.reject(d));
Gm=Fm()}return c["return"](Gm)})})}
function Im(a){return Tf(this,function c(){var d,e,f,g,h;return Da(c,function(k){switch(k.f){case 1:return w(k,Hm(),2);case 2:return d=k.g,e=hm(im(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),w(k,Jm(),3);case 3:return f=k.g,g=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:f}),w(k,e.add(g),4);case 4:return h=k.g,k["return"](h)}})})}
function Km(){return Tf(this,function b(){var c,d,e,f,g,h,k,l;return Da(b,function(n){switch(n.f){case 1:return w(n,Jm(),2);case 2:return c=n.g,d=["NEW",c,0],e=["NEW",c,Tk()],f=IDBKeyRange.bound(d,e),w(n,Hm(),3);case 3:g=n.g;h=im(g,["LogsRequestsStore"],"readwrite");var p=hm(h,"LogsRequestsStore").index("newRequest");p=f?p.f.openCursor(f,"prev"):f?p.f.openCursor(f):p.f.openCursor();p=pm(p);return w(n,p,4);case 4:k=n.g;l=void 0;if(null===k||void 0===k||!k.f.value){n.K(5);break}l=k.f.value;l.status=
"QUEUED";return w(n,k.update(l),5);case 5:return n["return"](l)}})})}
function Lm(a){return Tf(this,function c(){var d,e,f;return Da(c,function(g){switch(g.f){case 1:return w(g,Hm(),2);case 2:return d=g.g,e=hm(im(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),w(g,e.get(a),3);case 3:return f=g.g,f.status="QUEUED",w(g,nm(e,f),4);case 4:return g["return"](f)}})})}
function Mm(a){return Tf(this,function c(){var d,e,f;return Da(c,function(g){switch(g.f){case 1:return w(g,Hm(),2);case 2:return d=g.g,e=hm(im(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),w(g,e.get(a),3);case 3:f=g.g;if(!f){g.K(4);break}f.status="NEW";f.sendCount+=1;return w(g,nm(e,f),4);case 4:return g["return"](f)}})})}
function Nm(){return Tf(this,function b(){var c,d;return Da(b,function(e){if(1==e.f)return w(e,Hm(),2);if(3!=e.f)return c=e.g,w(e,c.count("LogsRequestsStore"),3);d=e.g;return e["return"](!d)})})}
function Om(a){return Tf(this,function c(){var d;return Da(c,function(e){if(1==e.f)return w(e,Hm(),2);d=e.g;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
function Jm(){return Tf(this,function b(){var c;return Da(b,function(d){if(1==d.f)return w(d,Yl(Xl()),2);c=d.g;return d["return"](Nl(c))})})}
;var Pm=Qk("network_polling_interval",3E4);function Qm(){this.j=0;this.f=window.navigator.onLine;Rm(this);Sm(this)}
function Tm(){Qm.f||(Qm.f=new Qm);return Qm.f}
function Um(a){var b=Vm,c=Wm;Xm(a);(new ee(function(d){a.g=d})).then(function(){b();
c&&(a.i=c)})}
function Sm(a){window.addEventListener("online",function(){a.f=!0;a.g&&a.g()})}
function Rm(a){window.addEventListener("offline",function(){a.f=!1;a.i&&a.i()})}
function Xm(a){a.j||(Ym(a),window.navigator.onLine&&a.g&&a.g())}
function Ym(a){a.j=lj(function(){window.navigator.onLine?(!1===a.f&&Ti(Error("NetworkStatusManager missed online event.")),a.f=!0,a.g&&a.g()):(!0===a.f&&Ti(Error("NetworkStatusManager missed offline event.")),a.f=!1,a.i&&a.i());Ym(a)},Pm)}
;var Zm=Qk("networkless_throttle_timeout")||100,$m=Qk("networkless_retry_attempts")||1,an=0;function bn(a,b){b=void 0===b?{}:b;cn().then(function(c){if(c&&!Z("networkless_bypass_write")){var d={url:a,options:b,timestamp:Tk(),status:"NEW",sendCount:0};Im(d).then(function(e){d.id=e;e=Tm();e.f&&!Z("networkless_always_offline")?dn(d):Um(e)})["catch"](function(e){dn(d);
Ti(e)})}else Dl(a,b)})}
function Vm(){an||(an=nj(function(){dn();an=0;Vm()},Zm))}
function Wm(){var a=an;if(!isNaN(a)){var b=y("yt.scheduler.instance.cancelJob");b?b(a):Wi(a)}an=0}
function dn(a){Tf(this,function c(){var d=this,e,f,g,h;return Da(c,function(k){switch(k.f){case 1:e=d;if(!a)return w(k,Km(),6);if(!a.id){k.K(3);break}return w(k,Lm(a.id),5);case 5:a=k.g;k.K(3);break;case 6:if(a=k.g){k.K(3);break}return w(k,Nm(),8);case 8:return(f=k.g)&&Wm(),k["return"]();case 3:if(en(a))g=a.options.onError?a.options.onError:function(){},h=a.options.onSuccess?a.options.onSuccess:function(){},a.options.onError=function(l,n){return Tf(e,function q(){return Da(q,function(r){if(1==r.f)return a&&
a.id?a.sendCount<$m?w(r,Mm(a.id),6):w(r,Om(a.id),2):r.K(2);
2!=r.f&&(an||Um(Tm()),g(l,n));g(l,n);r.f=0})})},a.options.onSuccess=function(l,n){return Tf(e,function q(){return Da(q,function(r){if(1==r.f)return a&&a.id?w(r,Om(a.id),2):r.K(2);
h(l,n);r.f=0})})},Dl(a.url,a.options);
else if(Ui(Error("Networkless Logging: Stored logs request expired age limit")),a.id)return w(k,Om(a.id),0);k.K(0)}})})}
function en(a){a=a.timestamp;return 2592E6<=Tk()-a?!1:!0}
function cn(){return Z("networkless_logging")?2===Qk("networkless_ytidb_version")?zm():ym():je(!1)}
;function fn(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(ha(c))}
qa(fn,Error);function gn(a){var b=this;this.f=null;a?this.f=a:Kl()&&(this.f=jl());lj(function(){Vl(b)},5E3)}
gn.prototype.isReady=function(){!this.f&&Kl()&&(this.f=jl());return!!this.f};
function ml(a,b,c,d){!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ui(new fn("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new fn("innertube xhrclient not ready",b,c,d);Ti(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",G:c,Xa:"JSON",ja:function(){d.ja()},
Ua:d.ja,onSuccess:function(p,q){if(d.onSuccess)d.onSuccess(q)},
Ta:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,q){if(d.onError)d.onError(q)},
xc:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.Db)&&(g=e);var h=a.f.Fb||!1,k=Ll(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.Eb&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var n=Zj(""+g+e,l||{},!0);cn().then(function(p){if(d.retry&&Z("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(Z("networkless_gel")&&!p||!Z("networkless_gel"))var q=Tl(b,
c,k,h);if(q){var r=f.onSuccess,v=f.Ta;f.onSuccess=function(B,C){Ul(q);r(B,C)};
c.Ta=function(B,C){Ul(q);v(B,C)}}}try{Z("use_fetch_for_op_xhr")?Al(n,f):Z("networkless_gel")&&d.retry?(f.method="POST",bn(n,f)):(f.method="POST",f.G||(f.G={}),Dl(n,f))}catch(B){if("InvalidAccessError"==B.name)q&&(Ul(q),q=0),Ui(Error("An extension is blocking network request."));
else throw B;}q&&lj(function(){Vl(a)},5E3)})}
;var hn=Va().toString();var jn;
if(!(jn=x.ytLoggingDocDocumentNonce_)){var kn;a:{if(window.crypto&&window.crypto.getRandomValues)try{var ln=Array(16),mn=new Uint8Array(16);window.crypto.getRandomValues(mn);for(var nn=0;nn<ln.length;nn++)ln[nn]=mn[nn];kn=ln;break a}catch(a){}for(var on=Array(16),pn=0;16>pn;pn++){for(var qn=Va(),rn=0;rn<qn%23;rn++)on[pn]=Math.random();on[pn]=Math.floor(256*Math.random())}if(hn)for(var sn=1,tn=0;tn<hn.length;tn++)on[sn%16]=on[sn%16]^on[(sn-1)%16]/4^hn.charCodeAt(tn),sn++;kn=on}for(var un=kn,vn=[],
wn=0;wn<un.length;wn++)vn.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(un[wn]&63));jn=vn.join("")}var xn=jn;A("ytLoggingDocDocumentNonce_",xn);function yn(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function zn(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
A("yt_logging_screen.getRootVeType",function(a){return R(zn(void 0===a?0:a),void 0)});
function An(){var a=R("csn-to-ctt-auth-info");a||(a={},Pi("csn-to-ctt-auth-info",a));return a}
function Bn(a){a=void 0===a?0:a;var b=R(yn(a));if(!b&&!R("USE_CSN_FALLBACK",!0))return null;b||0!=a||(Z("kevlar_client_side_screens")||Z("c3_client_side_screens")?b="UNDEFINED_CSN":b=R("EVENT_ID"));return b?b:null}
A("yt_logging_screen.getCurrentCsn",Bn);function Cn(a,b,c){var d=An();(c=Bn(c))&&delete d[c];b&&(d[a]=b)}
A("yt_logging_screen.getCttAuthInfo",function(a){return An()[a]});
A("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==R(yn(c))||b!==R(zn(c)))if(Cn(a,d,c),Pi(yn(c),a),Pi(zn(c),b),0==c||Z("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&ol("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:xn,clientScreenNonce:a},gn)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()});function Dn(){Rj.call(this,"button");this.f=null;this.i=[];this.g={}}
D(Dn,Rj);Ja(Dn);m=Dn.prototype;m.register=function(){X(this,"click",this.eb);X(this,"keydown",this.Ja);X(this,"keypress",this.Ka);Sj(this,"page-scroll",this.wb)};
m.unregister=function(){Y(this,"click",this.eb);Y(this,"keydown",this.Ja);Y(this,"keypress",this.Ka);En(this);this.g={};Dn.D.unregister.call(this)};
m.eb=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
m.Ja=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=Fn(this,a))){var d=function(g){var h="";g.tagName&&(h=g.tagName.toLowerCase());return"ul"==h||"table"==h},e;
d(b)?e=b:e=Hd(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.Kb;else"table"==e&&(f=this.Jb);f&&Gn(this,a,b,c,z(f,this))}}};
m.wb=function(){var a=this.g,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=K(b.activeButtonNode||b.parentNode,W(this));if(void 0==d||void 0==b)break;Hn(this,d,b,!0)}};
function Gn(a,b,c,d,e){var f=Ck(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=In(a,c)){if(void 0!==d.firstElementChild)b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var h=void 0===h?{}:h;var k=void 0===k?"":k;var l=void 0===l?window:l;l=l.location;h=Jf(b.href,h)+k;h instanceof Nb||h instanceof Nb||(h="object"==typeof h&&h.oa?h.na():String(h),Rb.test(h)||(h="about:invalid#zClosurez"),h=new Nb(Ob,h));h instanceof Nb&&h.constructor===
Nb&&h.g===Pb?h=h.f:(Ka(h),h="type_error:SafeUrl");l.href=h}else Lj(b)}else g&&Jn(a,b);else f?27==d.keyCode?(In(a,c),Jn(a,b)):e(b,c,d):(h=O(b,W(a,"reverse"))?38:40,d.keyCode==h&&(Lj(b),d.preventDefault()))}
m.Ka=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=Fn(this,a),Ck(a)&&c.preventDefault())};
function In(a,b){var c=W(a,"menu-item-highlight"),d=J(c,b);d&&ai(d,c);return d}
function Kn(a,b,c){P(c,W(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=W(a,"item-id-"+Pa(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
m.Jb=function(a,b,c){var d=In(this,b);b=Aj("table",b);var e=Aj("tr",b);e=td(document,"td",null,e).length;b=td(document,"td",null,b);d=Ln(d,b,e,c);-1!=d&&(Kn(this,a,b[d]),c.preventDefault())};
m.Kb=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=In(this,b);b=gb(td(document,"li",null,b),Ck);d=Ln(d,b,1,c);Kn(this,a,b[d]);c.preventDefault()}};
function Ln(a,b,c,d){var e=b.length;a=fb(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function Mn(a,b){var c=b.iframeMask;c||(c=Bd(document,"IFRAME"),c.src='javascript:""',Zh(c,W(a,"menu-mask")),Ek(c),b.iframeMask=c);return c}
function Hn(a,b,c,d){var e=K(b,W(a,"group")),f=!!a.l(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,h=jg(b);if(O(b,W(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(n){}}O(b,"flip")&&(O(b,W(a,"reverse"))?(f=12,g=13):(f=13,g=12));var k;a.l(b,"button-has-sibling-menu")?k=bg(e):a.l(b,"button-menu-root-container")&&(k=Nn(a,b));G&&!xc("8")&&(k=null);if(k){var l=jg(k);l=new Uf(-l.top,l.left,l.top,-l.left)}k=new H(0,1);O(b,W(a,"center-menu"))&&(k.x-=Math.round((hg(c).width-hg(b).width)/
2));d&&(k.y+=yd(document).y);if(a=Mn(a,b))b=hg(c),a.style.width=b.width+"px",a.style.height=b.height+"px",si(e,f,a,g,k,l,197),d&&Wf(a,"position","fixed");si(e,f,c,g,k,l,197)}
function Nn(a,b){if(a.l(b,"button-menu-root-container")){var c=a.l(b,"button-menu-root-container");return K(b,c)}return document.body}
m.gb=function(a){if(a){var b=Fn(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.l(a,"button-has-sibling-menu")?c=a.parentNode:c=Nn(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=Mn(this,a);d&&c.appendChild(d);(c=!!this.l(a,"button-menu-fixed"))&&(this.g[xj(a).toString()]=b);Hn(this,a,b,c);ej("yt-uix-button-menu-before-show",a,b);Dk(b);d&&Dk(d);
this.X(a,"button-menu-action",!0);P(a,W(this,"active"));b=z(this.fb,this,a,!1);d=z(this.fb,this,a,!0);c=z(this.Wb,this,a,void 0);this.f&&Fn(this,this.f)==Fn(this,a)||En(this);dj("yt-uix-button-menu-show",a);Mj(this.i);this.i=[V(document,"click",d),V(document,"contextmenu",b),V(window,"resize",c)];this.f=a}}};
function Jn(a,b){if(b){var c=Fn(a,b);if(c){a.f=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Ek(c);a.X(b,"button-menu-action",!1);var d=Mn(a,b),e=xj(c).toString();delete a.g[e];Vi(function(){d&&d.parentNode&&(Ek(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=K(b,W(a,"group"));
var f=[W(a,"active")];e&&f.push(W(a,"group-active"));bi(b,f);dj("yt-uix-button-menu-hide",b);Mj(a.i);a.i.length=0}}
m.Wb=function(a,b){var c=Fn(this,a);if(c){b&&(b instanceof Sb?Xb(c,b):Gd(c,b));var d=!!this.l(a,"button-menu-fixed");Hn(this,a,c,d)}};
m.fb=function(a,b,c){c=Jj(c);var d=K(c,W(this));if(d){d=Fn(this,d);var e=Fn(this,a);if(d==e)return}d=K(c,W(this,"menu"));e=d==Fn(this,a);var f=O(c,W(this,"menu-item")),g=O(c,W(this,"menu-close"));if(!d||e&&(f||g))Jn(this,a),d&&b&&this.l(a,"button-menu-indicate-selected")&&((a=J(W(this,"content"),a))&&Gd(a,Od(c)),On(this,d,c))};
function On(a,b,c){var d=W(a,"menu-item-selected");a=sd(d,b);E(a,function(e){ai(e,d)});
P(c.parentNode,d)}
function Fn(a,b){if(!b.widgetMenu){var c=a.l(b,"button-menu-id");c=c&&I(c);var d=W(a,"menu");c?$h(c,[d,W(a,"menu-external")]):c=J(d,b);b.widgetMenu=c}return b.widgetMenu}
m.isToggled=function(a){return O(a,W(this,"toggled"))};
m.toggle=function(a){if(this.l(a,"button-toggle")){var b=K(a,W(this,"group")),c=W(this,"toggled"),d=O(a,c);if(b&&this.l(b,"button-toggle-group")){var e=this.l(b,"button-toggle-group");b=sd(W(this),b);E(b,function(f){f!=a||"optional"==e&&d?(ai(f,c),f.removeAttribute("aria-pressed")):(P(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),ei(a,c)}};
m.click=function(a){if(Fn(this,a)){var b=Fn(this,a);if(b){var c=K(b.activeButtonNode||b.parentNode,W(this));c&&c!=a?(Jn(this,c),Vi(z(this.gb,this,a),1)):Ck(b)?Jn(this,a):this.gb(a)}a.focus()}this.X(a,"button-action")};
function En(a){a.f&&Jn(a,a.f)}
;function Pn(a){Rj.call(this,a);this.i=null}
D(Pn,Rj);m=Pn.prototype;m.J=function(a){var b=Rj.prototype.J.call(this,a);return b?b:a};
m.register=function(){Sj(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
m.dispose=function(){Qn(this);Pn.D.dispose.call(this)};
m.l=function(a,b){var c=Pn.D.l.call(this,a,b);return c?c:(c=Pn.D.l.call(this,a,"card-config"))&&(c=y(c))&&c[b]?c[b]:null};
m.show=function(a){var b=this.J(a);if(b){P(b,W(this,"active"));var c=Rn(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Sn(this,a,c);var d=W(this,"card-visible"),e=this.l(a,"card-delegate-show")&&this.l(b,"card-action");this.X(b,"card-action",a);this.i=a;Ek(c);Vi(z(function(){e||(Dk(c),dj("yt-uix-card-show",b,a,c));Tn(c);P(c,d);dj("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Rn(a,b,c){var d=c||b,e=W(a,"card");c=Un(a,d);var f=I(W(a,"card")+xj(d));if(f)return a=J(W(a,"card-body"),f),Fd(a,c)||(Cd(c),a.appendChild(c)),f;f=document.createElement("div");f.id=W(a,"card")+xj(d);Zh(f,e);(d=a.l(d,"card-class"))&&$h(f,d.split(/\s+/));d=document.createElement("div");d.className=W(a,"card-border");b=a.l(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");g.className=
W(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Cd(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Sn(a,b,c){var d=a.l(b,"orientation")||"horizontal";var e=J(W(a,"anchor"),b)||b;var f=a.l(b,"position"),g=!!a.l(b,"force-position"),h=a.l(b,"position-fixed");d="horizontal"==d;var k="bottomright"==f||"bottomleft"==f,l="topright"==f||"bottomright"==f;if(l&&k){var n=13;var p=8}else l&&!k?(n=12,p=9):!l&&k?(n=9,p=12):(n=8,p=13);var q=kg(document.body);f=kg(b);q!=f&&(n^=4);if(d){f=b.offsetHeight/2-12;var r=new H(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,r=new H(b.offsetWidth+6,-12);var v=
hg(c);f=Math.min(f,(d?v.height:v.width)-24-6);6>f&&(f=6,d?r.y+=12-b.offsetHeight/2:r.x+=12-b.offsetWidth/2);v=null;g||(v=10);b=W(a,"card-flip");a=W(a,"card-reverse");ci(c,b,l);ci(c,a,k);v=si(e,n,c,p,r,null,v);!g&&v&&(v&48&&(l=!l,n^=4,p^=4),v&192&&(k=!k,n^=1,p^=1),ci(c,b,l),ci(c,a,k),si(e,n,c,p,r));h&&(e=parseInt(c.style.top,10),g=yd(document).y,Wf(c,"position","fixed"),Wf(c,"top",e-g+"px"));q&&(c.style.right="",e=jg(c),e.left=e.left||parseInt(c.style.left,10),g=wd(window),c.style.left="",c.style.right=
g.width-e.left-e.width+"px");e=J("yt-uix-card-body-arrow",c);g=J("yt-uix-card-border-arrow",c);d=d?k?"top":"bottom":!q&&l||q&&!l?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";k=J("yt-uix-card-arrow",c);l=J("yt-uix-card-arrow-background",c);k&&l&&(c="right"==d?hg(c).width-f-13:f+11,f=c/Math.sqrt(2),k.style.left=c+"px",k.style.marginLeft="1px",l.style.marginLeft=-f+"px",l.style.marginTop=f+"px")}
m.hide=function(a){if(a=this.J(a)){var b=I(W(this,"card")+xj(a));b&&(ai(a,W(this,"active")),ai(b,W(this,"card-visible")),Ek(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Cd(b.cardMask),b.cardMask=null))}};
function Qn(a){a.i&&a.hide(a.i)}
m.Vb=function(a,b){var c=this.J(a);if(c){if(b){var d=Un(this,c);if(!d)return;b instanceof Sb?Xb(d,b):Gd(d,b)}O(c,W(this,"active"))&&(c=Rn(this,a,c),Sn(this,a,c),Dk(c),Tn(c))}};
m.isActive=function(a){return(a=this.J(a))?O(a,W(this,"active")):!1};
function Un(a,b){var c=b.cardContentNode;if(!c){var d=W(a,"content"),e=W(a,"card-content");(c=(c=a.l(b,"card-id"))?I(c):J(d,b))||(c=document.createElement("div"));var f=c;ai(f,d);P(f,e);b.cardContentNode=c}return c}
function Tn(a){var b=a.cardMask;b||(b=Bd(document,"IFRAME"),b.src='javascript:""',$h(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function Vn(){Rj.call(this,"kbd-nav")}
var Wn;D(Vn,Rj);Ja(Vn);m=Vn.prototype;m.register=function(){X(this,"keydown",this.Ga);Sj(this,"yt-uix-kbd-nav-move-in",this.Ra);Sj(this,"yt-uix-kbd-nav-move-in-to",this.Lb);Sj(this,"yt-uix-kbd-move-next",this.Sa);Sj(this,"yt-uix-kbd-nav-move-to",this.fa)};
m.unregister=function(){Y(this,"keydown",this.Ga);Mj(Wn)};
m.Ga=function(a,b,c){var d=c.keyCode;if(a=K(a,W(this)))switch(d){case 13:case 32:this.Ra(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=gi(a,"kbdNavMoveOut");!c;){c=K(a.parentElement,W(this));if(!c)break a;c=gi(c,"kbdNavMoveOut")}c=I(c);this.fa(c);dj("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&O(a,W(this,"list")))switch(d){case 40:this.Sa(b,a);break;case 38:d=document.activeElement==a,a=Xn(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),Yn(this,a[b]))}c.preventDefault()}};
m.Ra=function(a){var b=gi(a,"kbdNavMoveIn");b=I(b);Zn(this,a,b);this.fa(b)};
m.Lb=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}Zn(this,d,a);this.fa(a)};
m.fa=function(a){if(a)if(Ld(a))a.focus();else{var b=Hd(a,function(c){return Ed(c)?Ld(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Zn(a,b,c){if(b&&c)if(P(c,W(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,fi&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
m.Sa=function(a,b){var c=document.activeElement==b,d=Xn(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Yn(this,d[c]))};
function Yn(a,b){if(b){var c=Qd(b,"LI");c&&(P(c,W(a,"highlight")),Wn=V(b,"blur",z(function(d){ai(d,W(this,"highlight"));Mj(Wn)},a,c)))}}
function Xn(a){if("UL"!=a.tagName.toUpperCase())return[];a=gb(Dd(a),function(b){return"LI"==b.tagName.toUpperCase()});
return gb(hb(a,function(b){return Ck(b)?Hd(b,function(c){return Ed(c)?Ld(c):!1}):!1}),function(b){return!!b})}
;function $n(){Rj.call(this,"menu");this.g=this.f=null;this.i={};this.v={};this.j=null}
D($n,Rj);Ja($n);function ao(a){var b=$n.C();if(O(a,W(b)))return a;var c=b.J(a);return c?c:K(a,W(b,"content"))==b.f?b.g:null}
m=$n.prototype;m.register=function(){X(this,"click",this.Fa);X(this,"mouseenter",this.ub);Sj(this,"page-scroll",this.xb);Sj(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.J(a);bo(this,a)});
this.j=new Q};
m.unregister=function(){Y(this,"click",this.Fa);this.g=this.f=null;Mj(sb(Ab(this.i)));this.i={};zb(this.v,function(a){Cd(a)},this);
this.v={};db(this.j);this.j=null;$n.D.unregister.call(this)};
m.Fa=function(a,b,c){a&&(b=co(this,a),!b.disabled&&zj(c.target,b)&&eo(this,a))};
m.ub=function(a,b,c){a&&O(a,W(this,"hover"))&&(b=co(this,a),zj(c.target,b)&&eo(this,a,!0))};
m.xb=function(){this.f&&this.g&&fo(this,this.g,this.f)};
function fo(a,b,c){var d=go(a,b);d&&fg(d,hg(c));if(c==a.f){var e=9,f=8;O(b,W(a,"reversed"))&&(e^=1,f^=1);O(b,W(a,"flipped"))&&(e^=4,f^=4);a=new H(0,1);d&&si(b,e,d,f,a,null,197);si(b,e,c,f,a,null,197)}}
function eo(a,b,c){ho(a,b)&&!c?bo(a,b):(io(a,b),!a.f||zj(b,a.f)?a.hb(b):vi(a.j,z(a.hb,a,b)))}
m.hb=function(a){if(a){var b=jo(this,a);if(b){ej("yt-uix-menu-before-show",a,b);if(this.f)zj(a,this.f)||bo(this,this.g);else{this.g=a;this.f=b;O(a,W(this,"sibling-content"))||(Cd(b),document.body.appendChild(b));var c=co(this,a).offsetWidth-2;b.style.minWidth=c+"px"}(c=go(this,a))&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);ai(b,W(this,"content-hidden"));fo(this,a,b);$h(co(this,a),[W(this,"trigger-selected"),"yt-uix-button-toggled"]);dj("yt-uix-menu-show",a);ko(b);lo(this,a);dj("yt-uix-kbd-nav-move-in-to",
b);var d=z(this.Xb,this,a),e=z(this.Hb,this,a);c=Pa(a).toString();this.i[c]=[V(b,"click",e),V(document,"click",d)];O(a,W(this,"indicate-selected"))&&(d=z(this.Ib,this,a),this.i[c].push(V(b,"click",d)));O(a,W(this,"hover"))&&(a=z(this.vb,this,a),this.i[c].push(V(document,"mousemove",a)))}}};
m.vb=function(a,b){var c=Jj(b);if(c){var d=co(this,a);zj(c,d)||mo(this,c)||no(this,a)}};
m.Xb=function(a,b){var c=Jj(b);if(c){if(mo(this,c)){var d=K(c,W(this,"content")),e=Qd(c,"LI");e&&d&&Fd(d,e)&&ej("yt-uix-menu-item-clicked",c);c=K(c,W(this,"close-on-select"));if(!c)return;d=ao(c)}bo(this,d||a)}};
function io(a,b){if(b){var c=K(b,W(a,"content"));c&&(c=sd(W(a),c),E(c,function(d){!zj(d,b)&&ho(this,d)&&no(this,d)},a))}}
function bo(a,b){if(b){var c=[];c.push(b);var d=jo(a,b);d&&(d=sd(W(a),d),d=ob(d),c=c.concat(d),E(c,function(e){ho(this,e)&&no(this,e)},a))}}
function no(a,b){if(b){var c=jo(a,b);bi(co(a,b),[W(a,"trigger-selected"),"yt-uix-button-toggled"]);P(c,W(a,"content-hidden"));var d=jo(a,b);d&&ud(d,{"aria-expanded":"false"});(d=go(a,b))&&d.parentNode&&Cd(d);c&&c==a.f&&(a.g.appendChild(c),a.f=null,a.g=null,a.j&&a.j.N("ROOT_MENU_REMOVED"));dj("yt-uix-menu-hide",b);c=Pa(b).toString();Mj(a.i[c]);delete a.i[c]}}
m.Hb=function(a,b){var c=Jj(b);c&&oo(this,a,c)};
m.Ib=function(a,b){var c=Jj(b);if(c){var d=co(this,a);if(d&&(c=Qd(c,"LI")))if(c=Od(c).trim(),d.hasChildNodes()){var e=Dn.C();(d=J(W(e,"content"),d))&&Gd(d,c)}else Gd(d,c)}};
function lo(a,b){var c=jo(a,b);if(c){E(c.children,function(e){"LI"==e.tagName&&ud(e,{role:"menuitem"})});
ud(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Pa(c),c.id=d);(c=co(a,b))&&ud(c,{"aria-controls":d})}}
function oo(a,b,c){var d=jo(a,b);d&&O(b,W(a,"checked"))&&(a=Qd(c,"LI"))&&(a=J("yt-ui-menu-item-checked-hid",a))&&(d=sd("yt-ui-menu-item-checked",d),E(d,function(e){di(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),di(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function ho(a,b){var c=jo(a,b);return c?!O(c,W(a,"content-hidden")):!1}
function ko(a){a=td(document,"UL",null,a);E(a,function(b){b.tabIndex=0;var c=Vn.C();$h(b,[W(c),W(c,"list")])})}
function jo(a,b){var c=hj(b,"menu-content-id");return c&&(c=I(c))?($h(c,[W(a,"content"),W(a,"content-external")]),c):b==a.g?a.f:J(W(a,"content"),b)}
function go(a,b){var c=Pa(b).toString(),d=a.v[c];if(!d){d=Bd(document,"IFRAME");d.src='javascript:""';var e=[W(a,"mask")];E(Yh(b),function(f){e.push(f+"-mask")});
$h(d,e);a.v[c]=d}return d||null}
function co(a,b){return J(W(a,"trigger"),b)}
function mo(a,b){return zj(b,a.f)||zj(b,a.g)}
;function po(){Pn.call(this,"clickcard");this.f={};this.g={}}
D(po,Pn);Ja(po);m=po.prototype;m.register=function(){po.D.register.call(this);X(this,"click",this.za,"target");X(this,"click",this.ya,"close")};
m.unregister=function(){po.D.unregister.call(this);Y(this,"click",this.za,"target");Y(this,"click",this.ya,"close");for(var a in this.f)Mj(this.f[a]);this.f={};for(a in this.g)Mj(this.g[a]);this.g={}};
m.za=function(a,b,c){c.preventDefault();b=Qd(c.target,"button");if(!b||!b.disabled){if(b=this.l(a,"card-target"))a=document,a="string"===typeof b?a.getElementById(b):b;b=this.J(a);this.l(b,"disabled")||(O(b,W(this,"active"))?(this.hide(a),ai(b,W(this,"active"))):(this.show(a),P(b,W(this,"active"))))}};
m.show=function(a){po.D.show.call(this,a);var b=this.J(a),c=Pa(a).toString();if(!hj(b,"click-outside-persists")){if(this.f[c])return;b=V(document,"click",z(this.Aa,this,a));var d=V(window,"blur",z(this.Aa,this,a));this.f[c]=[b,d]}a=V(window,"resize",z(this.Vb,this,a,void 0));this.g[c]=a};
m.hide=function(a){po.D.hide.call(this,a);a=Pa(a).toString();var b=this.f[a];b&&(Mj(b),this.f[a]=null);if(b=this.g[a])Mj(b),delete this.g[a]};
m.Aa=function(a,b){var c="yt-uix"+(this.o?"-"+this.o:"")+"-card",d=null;b.target&&(d=K(b.target,c)||K(ao(b.target),c));(d=d||K(document.activeElement,c)||(document.activeElement?K(ao(document.activeElement),c):null))||this.hide(a)};
m.ya=function(a){(a=K(a,W(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function qo(){Pn.call(this,"hovercard")}
D(qo,Pn);Ja(qo);m=qo.prototype;m.register=function(){X(this,"mouseenter",this.Na,"target");X(this,"mouseleave",this.Pa,"target");X(this,"mouseenter",this.Oa,"card");X(this,"mouseleave",this.Qa,"card")};
m.unregister=function(){Y(this,"mouseenter",this.Na,"target");Y(this,"mouseleave",this.Pa,"target");Y(this,"mouseenter",this.Oa,"card");Y(this,"mouseleave",this.Qa,"card")};
m.Na=function(a){if(ro!=a){ro&&(this.hide(ro),ro=null);var b=z(this.show,this,a),c=parseInt(this.l(a,"delay-show"),10);b=Vi(b,-1<c?c:200);fj(a,"card-timer",b.toString());ro=a;a.alt&&(fj(a,"card-alt",a.alt),a.alt="");a.title&&(fj(a,"card-title",a.title),a.title="")}};
m.Pa=function(a){var b=parseInt(this.l(a,"card-timer"),10);Wi(b);this.J(a).isCardHidable=!0;b=parseInt(this.l(a,"delay-hide"),10);b=-1<b?b:200;Vi(z(this.yb,this,a),b);if(b=this.l(a,"card-alt"))a.alt=b;if(b=this.l(a,"card-title"))a.title=b};
m.yb=function(a){this.J(a).isCardHidable&&(this.hide(a),ro=null)};
m.Oa=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
m.Qa=function(a){a&&this.hide(a.cardTargetNode)};
var ro=null;function so(a,b,c,d,e,f){this.f=a;this.A=null;this.i=J("yt-dialog-fg",this.f)||this.f;if(a=J("yt-dialog-title",this.i)){var g="yt-dialog-title-"+Pa(this.i);a.setAttribute("id",g);this.i.setAttribute("aria-labelledby",g)}this.i.setAttribute("tabindex","-1");this.O=J("yt-dialog-focus-trap",this.f);this.ca=!1;this.j=new Q;this.B=[];this.B.push(Kj(this.f,z(this.Mb,this),"yt-dialog-dismiss"));this.B.push(V(this.O,"focus",z(this.sb,this),!0));to(this);this.la=b;this.kb=c;this.jb=d;this.F=e;this.lb=f;this.v=
this.o=null}
var uo={LOADING:"loading",lc:"content",mc:"working"};function vo(a,b){a.ha()||a.j.subscribe("post-all",b)}
function to(a){a=J("yt-dialog-fg-content",a.f);var b=[];zb(uo,function(c){b.push("yt-dialog-show-"+c)});
bi(a,b);P(a,"yt-dialog-show-content")}
m=so.prototype;
m.show=function(){if(!this.ha()){this.A=document.activeElement;if(!this.jb){this.g||(this.g=I("yt-dialog-bg"),this.g||(this.g=Bd(document,"div"),this.g.id="yt-dialog-bg",Zh(this.g,"yt-dialog-bg"),document.body.appendChild(this.g)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=wd(a).height,xd(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=
b>a?b>e?b:e:b<e?b:e}else c=0}this.g.style.height=c+"px";Dk(this.g)}this.Ha();c=wo(this);xo(c);this.o=V(document,"keydown",z(this.Gb,this));c=this.f;d=aj("player-added",this.Ha,this);fj(c,"player-ready-pubsub-key",d);this.kb&&(this.v=V(document,"click",z(this.Rb,this)));Dk(this.f);this.i.setAttribute("tabindex","0");yo(this);this.F||P(document.body,"yt-dialog-active");En(Dn.C());Qn(po.C());Qn(qo.C());dj("yt-ui-dialog-show-complete",this)}};
function zo(){var a=sd("yt-dialog");return jb(a,function(b){return Ck(b)})}
m.Ha=function(){if(!this.lb){var a=this.f;ci(document.body,"hide-players",!0);a&&ci(a,"preserve-players",!0)}};
function wo(a){var b=td(document,"iframe",null,a.f);E(b,function(c){var d=hj(c,"onload");d&&(d=y(d))&&V(c,"load",d);if(d=hj(c,"src"))c.src=d},a);
return ob(b)}
function xo(a){E(document.getElementsByTagName("iframe"),function(b){-1==fb(a,b)&&P(b,"iframe-hid")})}
function Ao(){var a=sd("iframe-hid");E(a,function(b){ai(b,"iframe-hid")})}
m.Mb=function(a){a=a.currentTarget;a.disabled||(a=hj(a,"action")||"",this.dismiss(a))};
m.dismiss=function(a){if(!this.ha()){this.j.N("pre-all");this.j.N("pre-"+a);Ek(this.f);Qn(po.C());Qn(qo.C());this.i.setAttribute("tabindex","-1");zo()||(Ek(this.g),this.F||ai(document.body,"yt-dialog-active"),Cj(),Ao());this.o&&(Mj(this.o),this.o=null);this.v&&(Mj(this.v),this.v=null);var b=this.f;if(b){var c=hj(b,"player-ready-pubsub-key");c&&(cj(c),ij(b,"player-ready-pubsub-key"))}this.j.N("post-all");dj("yt-ui-dialog-hide-complete",this);"cancel"==a&&dj("yt-ui-dialog-cancelled",this);this.j&&this.j.N("post-"+
a);this.A&&this.A.focus()}};
m.setTitle=function(a){Gd(J("yt-dialog-title",this.f),a)};
m.Gb=function(a){Vi(z(function(){this.la||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&O(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
m.Rb=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
m.ha=function(){return this.ca};
m.dispose=function(){Ck(this.f)&&this.dismiss("dispose");Mj(this.B);this.B.length=0;Vi(z(function(){this.A=null},this),0);
this.O=this.i=null;this.j.dispose();this.j=null;this.ca=!0};
m.sb=function(a){a.stopPropagation();yo(this)};
function yo(a){Vi(z(function(){this.i&&this.i.focus()},a),0)}
A("yt.ui.Dialog",so);function Bo(){Rj.call(this,"overlay");this.j=this.g=this.i=this.f=null}
qa(Bo,Rj);m=Bo.prototype;m.register=function(){X(this,"click",this.ra,"target");X(this,"click",this.hide,"close");Co(this)};
m.unregister=function(){Rj.prototype.unregister.call(this);Y(this,"click",this.ra,"target");Y(this,"click",this.hide,"close");this.j&&(cj(this.j),this.j=null);this.g&&(Mj(this.g),this.g=null)};
m.ra=function(a){if(!this.f||!Ck(this.f.f)){var b=this.J(a);a=Do(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.l(b,"disable-shortcuts")||!1,d=!!this.l(b,"disable-outside-click-dismiss")||!1;this.f=new so(a,c);this.i=b;var e=J("yt-dialog-fg",a);if(e){var f=this.l(b,"overlay-class")||"",g=this.l(b,"overlay-style")||"default",h=this.l(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(W(this,g));f.push(W(this,h));$h(e,f)}this.f.show();dj("yt-uix-kbd-nav-move-to",e||a);Co(this);c||
d||(c=z(function(k){O(k.target,"yt-dialog-base")&&Eo(this)},this),a=J("yt-dialog-base",a),this.g=V(a,"click",c));
this.X(b,"overlay-shown");dj("yt-uix-overlay-shown",b)}}};
function Co(a){a.j||(a.j=aj("yt-uix-overlay-hide",Fo));a.f&&vo(a.f,function(){var b=Bo.C();b.i=null;b.f.dispose();b.f=null})}
function Eo(a){if(a.f){var b=a.i;a.f.dismiss("overlayhide");b&&a.X(b,"overlay-hidden");a.i=null;a.g&&(Mj(a.g),a.g=null);a.f=null}}
function Do(a,b){var c;if(a)if(c=J("yt-dialog",a)){var d=I("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=K(b,"yt-dialog"));return c}
function Go(){var a=Bo.C();if(a.i)a=J("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=sd("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=K(a[b],"yt-dialog");if(Ck(c)){a=a[b];break a}}a=null}return a}
m.hide=function(a){a&&a.disabled||dj("yt-uix-overlay-hide")};
function Fo(){Eo(Bo.C())}
m.show=function(a){this.ra(a)};
Ja(Bo);var Ho={},Io=[];function Jo(a){a=K(a,"yt-uix-button-subscription-container");a=J("unsubscribe-confirmation-overlay-container",a);return J("yt-dialog",a)}
function Ko(a,b){Mj(Io);Io.length=0;Ho[b]||(Ho[b]=Jo(a));Bo.C().show(Ho[b]);var c=Go();return new ee(function(d){Io.push(Kj(c,function(){d()},"overlay-confirmation-unsubscribe-button"))})}
;function Lo(){var a=R("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!R("SESSION_INDEX")&&!R("LOGGED_IN"))}
;function Mo(){Rj.call(this,"subscription-button")}
qa(Mo,Rj);m=Mo.prototype;m.register=function(){X(this,"click",this.ta);Tj(this,mk,this.Wa);Tj(this,nk,this.Va);Tj(this,ok,this.Pb);Tj(this,rk,this.Wa);Tj(this,sk,this.Va);Tj(this,tk,this.Qb);Tj(this,vk,this.Ob);Tj(this,wk,this.Nb)};
m.unregister=function(){Y(this,"click",this.ta);Rj.prototype.unregister.call(this)};
m.isSubscribed=function(a){return!!this.l(a,"is-subscribed")};
m.ta=function(a){var b=this.l(a,"href"),c=this.l(a,"insecure");if(b)a=this.l(a,"target")||"_self",window.open(b,a);else if(!c)if(Lo()){b=this.l(a,"channel-external-id");c=this.l(a,"clicktracking");var d=No(this,a),e=this.l(a,"parent-url");if(this.l(a,"is-subscribed")){var f=this.l(a,"subscription-id"),g=this.l(a,"unsubscribe-params"),h=new ik(b,f,d,a,c,e,g);this.l(a,"show-unsub-confirm-dialog")?Ko(a,b).then(function(){U(qk,h)}):U(qk,h)}else a=this.l(a,"params"),U(lk,new gk(b,d,c,e,void 0,a))}else Oo(this,
a)};
m.Wa=function(a){this.W(a.f,this.ab,!0)};
m.Va=function(a){this.W(a.f,this.ab,!1)};
m.Pb=function(a){this.W(a.f,this.bb,!0,a.g)};
m.Qb=function(a){this.W(a.f,this.bb,!1)};
m.Ob=function(a){this.W(a.f,this.qb)};
m.Nb=function(a){this.W(a.f,this.pb)};
m.bb=function(a,b,c){b?(fj(a,"is-subscribed","true"),c&&fj(a,"subscription-id",c)):(ij(a,"is-subscribed"),ij(a,"subscription-id"));Po(this,a)};
function No(a,b){if(!a.l(b,"ypc-enabled"))return null;var c=a.l(b,"ypc-item-type"),d=a.l(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
m.ab=function(a,b){var c=K(a,"yt-uix-button-subscription-container");ci(c,"yt-subscription-button-disabled-mask-container",b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Po(a,b){var c=a.l(b,"style-type"),d=!!a.l(b,"is-subscribed");c="-"+c;var e="yt-uix-button-subscribed"+c;ci(b,"yt-uix-button-subscribe"+c,!d);ci(b,e,d);a.l(b,"subscriber-count-tooltip")&&!a.l(b,"subscriber-count-show-when-subscribed")&&(c=W(Fk.C()),ci(b,c,!d),b.title=d?"":a.l(b,"subscriber-count-title"));d?Vi(function(){P(b,"hover-enabled")},1E3):ai(b,"hover-enabled")}
m.qb=function(a){var b=!!this.l(a,"ypc-item-type"),c=!!this.l(a,"ypc-item-id");!this.l(a,"ypc-enabled")&&b&&c&&(P(a,"ypc-enabled"),fj(a,"ypc-enabled","true"))};
m.pb=function(a){this.l(a,"ypc-enabled")&&(ai(a,"ypc-enabled"),ij(a,"ypc-enabled"))};
function Qo(a,b){var c=sd(W(a));return gb(c,function(d){return b==this.l(d,"channel-external-id")},a)}
m.mb=function(a,b,c){var d=rb(arguments,2);E(a,function(e){b.apply(this,nb(e,d))},this)};
m.W=function(a,b,c){var d=Qo(this,a);d=nb([d],rb(arguments,1));this.mb.apply(this,d)};
function Oo(a,b){var c=z(function(d){d.discoverable_subscriptions&&Pi("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",d.discoverable_subscriptions);this.ta(b)},a);
Nk(c)}
Ja(Mo);function Ro(a){this.f=a;this.M=null;R("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(So(this),V(this.f,"mouseover",z(this.j,this)),V(this.f,"mouseout",z(this.ma,this)),V(this.f,"click",z(this.ma,this)),uj(ok,Ua(this.g,!0),this),uj(tk,Ua(this.g,!1),this),To(this))}
function So(a){var b={url:R("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.f,relayOpen:"-1"};a=z(a.i,a);ck().open(b,a)}
function To(a){Lo()||aj("LOGGED_IN",function(){this.M&&(this.ma(),this.M.close(),this.M=null,So(this))},a)}
Ro.prototype.i=function(a){this.M=a;a=Mo.C().isSubscribed(this.f);this.g(a)};
Ro.prototype.j=function(){this.M&&this.M.restyle({show:!0})};
Ro.prototype.ma=function(){this.M&&this.M.restyle({show:!1})};
Ro.prototype.g=function(a){if(this.M){a={isSubscribed:a};try{this.M.send("msg-hovercard-subscription",a,void 0,y("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER"))}catch(b){}}};function Uo(){bk(function(){var a=hg(I("yt-subscribe"));a={width:a.width,height:a.height};var b=Vo;ck().ready(a,null,b)})}
function Vo(a){if(a.length&&a[a.length-1]){a=a[a.length-1].eurl;var b=I("yt-subscribe"),c=Mo.C();if(b=J(W(c),b))a&&(Mo.C(),fj(b,"parent-url",a)),new Ro(b)}}
;function Wo(a,b){var c=void 0===c?{}:c;var d=gn;R("ytLoggingEventsDefaultDisabled",!1)&&gn==gn&&(d=null);ol(a,b,d,c)}
;var Xo=y("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",Xo);function Yo(){this.f=R("ALT_PREF_COOKIE_NAME","PREF");var a=Pl(this.f);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Xo[d]=c.toString())}}}
m=Yo.prototype;m.get=function(a,b){Zo(a);$o(a);var c=ap(a);return null!=c?c:b?b:""};
m.set=function(a,b){Zo(a);$o(a);if(null==b)throw Error("ExpectedNotNull");Xo[a]=b.toString()};
function bp(a){var b=ap("f"+(Math.floor(a/31)+1));return!!(((null!=b&&/^[A-Fa-f0-9]+$/.test(b)?parseInt(b,16):null)||0)&1<<a%31)}
m.remove=function(a){Zo(a);$o(a);delete Xo[a]};
m.save=function(){Ol(this.f,this.dump(),63072E3)};
m.clear=function(){for(var a in Xo)delete Xo[a]};
m.dump=function(){var a=[],b;for(b in Xo)a.push(b+"="+encodeURIComponent(String(Xo[b])));return a.join("&")};
function $o(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Zo(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function ap(a){return void 0!==Xo[a]?Xo[a].toString():null}
Ja(Yo);var cp=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]),dp=["/fashion","/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ","/channel/UCTApTkbpcqiLL39WUlne4ig","/channel/UCW5PCzG3KQvbOX4zc3KY0lQ"];function ep(){var a=void 0===a?window.location.href:a;if(Z("kevlar_disable_theme_param"))return null;var b=Bf(Cf(5,a));if(fp(b))return"USER_INTERFACE_THEME_DARK";a=Yj(a).theme;return cp.get(a)||null}
function fp(a){var b=dp.map(function(c){return c.toLowerCase()});
return!Z("disable_dark_fashion_destination_launch")&&b.some(function(c){return a.toLowerCase().startsWith(c)})?!0:!1}
;function gp(){this.f={};var a=Pl("CONSISTENCY");a&&hp(this,{encryptedTokenJarContents:a})}
gp.prototype.replace=function(a,b){for(var c=u(a),d=c.next();!d.done;d=c.next())delete this.f[d.value.encryptedTokenJarContents];hp(this,b)};
function hp(a,b){if(b.encryptedTokenJarContents&&(a.f[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.f[b.encryptedTokenJarContents]},1E3*c);
Ol("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var ip={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"};var jp=[{Ma:function(a){return"Cannot read property '"+a.key+"'"},
qa:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Ma:function(a){return"Cannot call '"+a.key+"'"},
qa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];function kp(){this.f=[];this.g=[];this.i=[]}
var lp;function mp(a){for(var b=lp,c=u(b.f),d=c.next();!d.done;d=c.next())if(d=d.value,a.message&&a.message.match(d.f))return d.weight;c=u(b.g);for(d=c.next();!d.done;d=c.next())if(d=d.value,a.stack&&a.stack.match(d.f))return d.weight;a=u(b.i);for(b=a.next();!b.done;b=a.next())if(b=b.value,cm(b.userAgent.toLowerCase()))return b.weight;return 1}
;var np=new Set,op=0,pp=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function qp(a){rp(a)}
function rp(a,b){var c=void 0===c?{}:c;c.name=R("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var d=c||{};c=void 0===b?"ERROR":b;c=void 0===c?"ERROR":c;var e=void 0===e?!1:e;if(a){if(Z("console_log_js_exceptions")){var f=[];f.push("Name: "+a.name);f.push("Message: "+a.message);a.hasOwnProperty("params")&&f.push("Error Params: "+JSON.stringify(a.params));f.push("File name: "+a.fileName);f.push("Stacktrace: "+a.stack);window.console.log(f.join("\n"),a)}if((window&&
window.yterr||e)&&!(5<=op)&&0!==a.sampleWeight){var g=Bc(a);e=g.message||"Unknown Error";f=g.name||"UnknownError";var h=g.lineNumber||"Not available",k=g.fileName||"Not available";g=g.stack||a.f||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0,n=0;n<a.args.length;n++){var p=a.args[n],q="params."+n;l+=q.length;if(p)if(Array.isArray(p))for(var r=d,v=0;v<p.length&&!(p[v]&&(l+=sp(v,p[v],q,r),500<l));v++);else if("object"===typeof p)for(r in r=void 0,v=d,p){if(p[r]&&(l+=
sp(r,p[r],q,v),500<l))break}else d[q]=String(JSON.stringify(p)).substring(0,500),l+=d[q].length;else d[q]=String(JSON.stringify(p)).substring(0,500),l+=d[q].length;if(500<=l)break}else if(a.hasOwnProperty("params")&&a.params)if(p=a.params,"object"===typeof a.params)for(n in q=0,p){if(p[n]&&(l="params."+n,r=String(JSON.stringify(p[n])).substr(0,500),d[l]=r,q+=l.length+r.length,500<q))break}else d.params=String(JSON.stringify(p)).substr(0,500);navigator.vendor&&!d.hasOwnProperty("vendor")&&(d.vendor=
navigator.vendor);d={message:e,name:f,lineNumber:h,fileName:k,stack:g,params:d};e=Number(a.columnNumber);isNaN(e)||(d.lineNumber=d.lineNumber+":"+e);e=u(jp);for(f=e.next();!f.done;f=e.next())if(f=f.value,f.qa[d.name])for(k=u(f.qa[d.name]),h=k.next();!h.done;h=k.next())if(g=h.value,h=d.message.match(g.regexp)){d.params["error.original"]=h[0];k=g.groups;g={};for(n=0;n<k.length;n++)g[k[n]]=h[n+1],d.params["error."+k[n]]=h[n+1];d.message=f.Ma(g);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(d);
if(!(np.has(d.message)||0<=d.stack.indexOf("/YouTubeCenter.js")||0<=d.stack.indexOf("/mytube.js"))){if(Z("kevlar_gel_error_routing")){e=c;a:{f=u(pp);for(h=f.next();!h.done;h=f.next())if(cm(h.value.toLowerCase())){f=!0;break a}f=!1}if(!f){h={stackTrace:d.stack};d.fileName&&(h.filename=d.fileName);f=d.lineNumber&&d.lineNumber.split?d.lineNumber.split(":"):[];0!==f.length&&(1!==f.length||isNaN(Number(f[0]))?2!==f.length||isNaN(Number(f[0]))||isNaN(Number(f[1]))||(h.lineNumber=Number(f[0]),h.columnNumber=
Number(f[1])):h.lineNumber=Number(f[0]));f=d.message;k=d.name;lp||(lp=new kp);f={level:"ERROR_LEVEL_UNKNOWN",message:f,errorClassName:k,sampleWeight:mp(d)};"ERROR"===e?f.level="ERROR_LEVEL_ERROR":"WARNING"===e&&(f.level="ERROR_LEVEL_WARNNING");e={isObfuscated:!0,browserStackInfo:h};h={pageUrl:window.location.href,kvPairs:[]};if(k=d.params)for(g=u(Object.keys(k)),n=g.next();!n.done;n=g.next())n=n.value,h.kvPairs.push({key:"client."+n,value:String(k[n])});Wo("clientError",{errorMetadata:h,stackTrace:e,
logMessage:f});fl()}}e=d.params||{};c={sa:{a:"logerror",t:"jserror",type:d.name,msg:d.message.substr(0,250),line:d.lineNumber,level:c,"client.name":e.name},G:{url:R("PAGE_NAME",window.location.href),file:d.fileName},method:"POST"};e.version&&(c["client.version"]=e.version);if(c.G){d.stack&&(c.G.stack=d.stack);f=u(Object.keys(e));for(h=f.next();!h.done;h=f.next())h=h.value,c.G["client."+h]=e[h];if(e=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=u(Object.keys(e)),h=f.next();!h.done;h=f.next())h=
h.value,c.G[h]=e[h];e=R("SERVER_NAME",void 0);f=R("SERVER_VERSION",void 0);e&&f&&(c.G["server.name"]=e,c.G["server.version"]=f)}Dl(R("ECATCHER_REPORT_HOST","")+"/error_204",c);np.add(d.message);op++}}}}
function sp(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function tp(a,b){this.f=a;this.i=b;this.g=qp}
function up(a){if(!vp){var b={Ba:{playlistEditEndpoint:wp,subscribeEndpoint:xp,unsubscribeEndpoint:yp,modifyChannelNotificationPreferenceEndpoint:zp}};Ap.f||(Ap.f=new Ap);var c=Ap.f;Xl();tp.f=new tp(b,c);vp=tp.f}b=vp;var d=void 0===d?Zl:d;a:{var e,f;if((null===(e=a.signalServiceEndpoint)||void 0===e?0:e.signal)&&b.f.Tb&&(e=b.f.Tb[a.signalServiceEndpoint.signal])){var g=new e;break a}if((null===(f=a.continuationCommand)||void 0===f?0:f.request)&&b.f.nb&&(f=b.f.nb[a.continuationCommand.request])){g=
new f;break a}for(g in a)if(b.f.Ba[g]&&(f=b.f.Ba[g])){g=new f;break a}g=void 0}if(!g)return b.g(new fn("Error: No request builder found for command.",a)),je({});f=void 0;f=void 0===f?{}:f;e=a.clickTrackingParams;var h=void 0===h?!0:h;if(c=R("INNERTUBE_CONTEXT")){c=Eb(c);c.client||(c.client={});var k=c.client;"MWEB"===k.clientName&&(k.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");k.screenWidthPoints=window.innerWidth;k.screenHeightPoints=window.innerHeight;k.screenPixelDensity=
Math.round(window.devicePixelRatio)||1;k.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var l=void 0===l?!1:l;Yo.C();var n=bp(165)?"USER_INTERFACE_THEME_DARK":"USER_INTERFACE_THEME_LIGHT";Z("kevlar_apply_prefers_color_theme")&&(n=bp(165)?"USER_INTERFACE_THEME_DARK":bp(174)?"USER_INTERFACE_THEME_LIGHT":window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches?"USER_INTERFACE_THEME_DARK":"USER_INTERFACE_THEME_LIGHT");
l=l?n:ep()||n;k.userInterfaceTheme=l;if(Z("web_log_connection")){c:{if(n=(l=window.navigator)?l.connection:void 0){l=ip[n.type||"unknown"]||"CONN_UNKNOWN";n=ip[n.f||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===l&&"CONN_UNKNOWN"!==n&&(l=n);if("CONN_UNKNOWN"!==l)break c;if("CONN_UNKNOWN"!==n){l=n;break c}}l=void 0}l&&(k.connectionType=l)}(l=Pl("EXPERIMENTS_DEBUG"))?k.experimentsToken="ZERO"===l?"GgIQAQ%3D%3D":l:delete k.experimentsToken;l=Rk();gp.f||(gp.f=new gp);k=Ab(gp.f.f);c.request=Object.assign(Object.assign({},
c.request),{internalExperimentFlags:l,consistencyTokenJars:k});k=Yo.C();l=bp(58);k=k.get("gsml","");c.user=Object.assign({},c.user);l&&(c.user.enableSafetyMode=l);k&&(c.user.lockedSafetyMode=!0);(l=R("DELEGATED_SESSION_ID"))&&!Z("pageid_as_header_web")&&(c.user.onBehalfOfUser=l);h&&(h=Bn())&&(c.clientScreenNonce=h);e&&(c.clickTracking={clickTrackingParams:e});h=c}else rp(Error("Error: No InnerTubeContext shell provided in ytconfig.")),h={};h={context:h};(e=g.i(a))?g.f(h,e,f):(rp(new fn("Error: Failed to create Request from Command.",
a)),h=void 0);if(!h)return b.g(new fn("Error: Failed to build request for command.",a)),je({});f=Bp("/youtubei/v1/"+Cp(g.g()));var p;var q=(a=null===(p=null===(q=a.commandMetadata)||void 0===q?void 0:q.webCommandMetadata)||void 0===p?void 0:p.apiUrl)?Bp(a):void 0;q&&(f=q);return Dp(b,h,f,d,g.j())}
function Dp(a,b,c,d,e){d=void 0===d?Zl:d;var f=JSON.stringify(b),g=ak(c)?"same-origin":"cors",h=ak(c)?"same-origin":"include";return Ep().then(function(k){k={method:"POST",mode:g,credentials:h,headers:k,body:f};var l;e&&(l=Object.assign({yc:c,zc:k,identity:d,requestTime:Tk(),Ac:0},e));return a.i.fetch(c,k,l)}).then(function(k){return je(k)})}
function Bp(a){var b=Zj(a,{key:R("INNERTUBE_API_KEY")},!1);if(a=R("INNERTUBE_HOST_OVERRIDE")){a=String(a);var c=String,d=b.match(Af);b=d[5];var e=d[6];d=d[7];var f="";b&&(f+=b);e&&(f+="?"+e);d&&(f+="#"+d);b=a+c(f)}return b}
function Ep(){return Yl().then(function(a){a=Object.assign({"Content-Type":"application/json","X-Goog-Visitor-Id":R("VISITOR_DATA")},a);return je(a)})}
;var Fp=["notification/modify_channel_preference"],Gp=["browse/edit_playlist"],Hp=["subscription/subscribe"],Ip=["subscription/unsubscribe"];var Jp={},Kp=(Jp.WEB_UNPLUGGED="^unplugged/",Jp.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Jp.WEB_UNPLUGGED_OPS="^unplugged/",Jp.WEB_UNPLUGGED_PUBLIC="^unplugged/",Jp.WEB_CREATOR="^creator/",Jp.WEB_KIDS="^kids/",Jp.WEB_EXPERIMENTS="^experiments/",Jp.WEB_MUSIC="^music/",Jp.WEB_REMIX="^music/",Jp.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Jp.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Jp);
function Cp(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Kp[b];if(c){var d=new RegExp(c),e=u(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Kp).forEach(function(g){var h=u(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=u(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Lp(){}
Lp.prototype.j=function(){};function xp(){}
qa(xp,Lp);xp.prototype.g=function(){return Hp};
xp.prototype.j=function(){return{}};
xp.prototype.i=function(a){return a.subscribeEndpoint};
xp.prototype.f=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};function yp(){}
qa(yp,Lp);yp.prototype.g=function(){return Ip};
yp.prototype.j=function(){return{}};
yp.prototype.i=function(a){return a.unsubscribeEndpoint};
yp.prototype.f=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};function zp(){}
qa(zp,Lp);zp.prototype.g=function(){return Fp};
zp.prototype.i=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
zp.prototype.f=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function wp(){}
qa(wp,Lp);wp.prototype.g=function(){return Gp};
wp.prototype.i=function(a){return a.playlistEditEndpoint};
wp.prototype.f=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Ae(){}
Ae.prototype.flush=function(a){a=void 0===a?[]:a;if(Z("enable_client_streamz_web")){a=u(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;var c=new uh;c=pf(c,1,b.j);for(var d=b,e=[],f=0;f<d.f.length;f++)e.push(d.f[f].T);c=pf(c,3,e||[]);d=[];e=[];f=u(b.Y.keys());for(var g=f.next();!g.done;g=f.next())e.push(g.value.split(","));for(f=0;f<e.length;f++){g=e[f];var h=b.g;for(var k=b.Da(g)||[],l=[],n=0;n<k.length;n++){var p=k[n];p=p&&p.xa;var q=new Eh;switch(h){case 3:qf(q,1,Fh[0],Number(p));break;case 2:qf(q,
2,Fh[0],Number(p))}l.push(q)}h=l;for(k=0;k<h.length;k++){n=h[k];l=new Ah;l.f||(l.f={});p=n?uf(n):n;l.f[2]=n;l=pf(l,2,p);n=g;p=[];q=b;for(var r=[],v=0;v<q.f.length;v++)r.push(q.f[v].U);q=r;for(r=0;r<q.length;r++){v=q[r];var B=n[r],C=new Ch;switch(v){case 3:qf(C,1,Dh[0],String(B));break;case 2:qf(C,2,Dh[0],Number(B));break;case 1:qf(C,3,Dh[0],"true"==B)}p.push(C)}tf(l,1,p);d.push(l)}}tf(c,4,d);d=b=new $e;e=L(c,1);null!=e&&ff(d,1,e);e=L(c,5);null!=e&&df(d,5,e);e=rf(c,wh,2);null!=e&&gf(d,2,e,Gh);e=L(c,
3);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)ff(d,3,e[f]);e=L(c,6);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)df(d,6,e[f]);e=sf(c,Ah,4);0<e.length&&hf(d,4,e,Jh);c=new Uint8Array(b.g+b.f.length());e=b.i;f=e.length;for(g=d=0;g<f;g++)h=e[g],c.set(h,d),d+=h.length;e=b.f.end();c.set(e,d);b.i=[c];b={serializedIncrementBatch:Ze(c)};Wo("streamzIncremented",b)}}};var Mp;function De(){if(!Mp){Mp=new ze;var a=Qk("client_streamz_web_flush_count",-1);-1!==a&&(Mp.v=a)}return Mp}
;function Ap(){this.j=new Ce;this.g=new Ee;this.i=new Ge;this.f=new He}
Ap.prototype.fetch=function(a,b){var c=this,d=new Request(a,b),e=Bf(Cf(5,Nf(d.url)));this.j.f.j("/client_streamz/youtube/web/network/one_platform_requests",e);return je(fetch(d).then(function(f){return Np(c,f,e)})["catch"](function(f){rp(f,"WARNING")}))};
function Np(a,b,c){var d=b.json();b.redirected?Fe(a.g,b.status,c,Bf(Cf(5,b.url))):b.ok?a.i.f.j("/client_streamz/youtube/web/network/one_platform_request_success",c):(a.f.f.j("/client_streamz/youtube/web/network/one_platform_request_failed",b.status,c),d.then(function(e){rp(new fn("Error: API fetch failed",b.status,b.url,e),"WARNING")}));
return d}
;var vp;function Op(a){S.call(this,1,arguments);this.f=a}
D(Op,S);function Pp(a,b){S.call(this,2,arguments);this.g=a;this.f=b}
D(Pp,S);function Qp(a,b,c,d){S.call(this,1,arguments);this.f=b;this.itemType=c||null;this.itemId=d||null}
D(Qp,S);function Rp(a,b){S.call(this,1,arguments);this.g=a;this.f=b||null}
D(Rp,S);function Sp(a){S.call(this,1,arguments)}
D(Sp,S);var Tp=new T("ypc-core-load",Op),Up=new T("ypc-guide-sync-success",Pp),Vp=new T("ypc-purchase-success",Qp),Wp=new T("ypc-subscription-cancel",Sp),Xp=new T("ypc-subscription-cancel-success",Rp),Yp=new T("ypc-init-subscription",Sp);var Zp=[];function $p(a){a.g?U(Tp,new Op(function(){U(Yp,new Sp(a.g))})):Z("web_classic_innertube_subscription_update")?aq(a.f,a.params):bq(a.f,a.j,a.i,a.source,a.params)}
function cq(a){a.g?U(Tp,new Op(function(){U(Wp,new Sp(a.g))})):Z("web_classic_innertube_subscription_update")?dq(a.f,a.params):eq(a.f,a.o,a.j,a.i,a.source)}
function fq(a){gq(ob(a.f))}
function hq(a){iq(ob(a.f))}
function jq(a){kq(a.i,a.g,a.f)}
function lq(a){var b=a.itemId,c=a.f.subscriptionId;b&&c&&U(ok,new hk(b,c,a.f.channelInfo))}
function mq(a){var b=a.f;zb(a.g,function(c,d){U(ok,new hk(d,c,b[d]))})}
function nq(a){U(tk,new ek(a.g.itemId));a.f&&a.f.length&&(oq(a.f,tk),oq(a.f,vk))}
function aq(a,b){var c=new ek(a);U(mk,c);me(up({commandMetadata:{webCommandMetadata:{apiUrl:"/youtubei/v1/subscription/subscribe"}},subscribeEndpoint:{channelIds:[a],params:b}}).then(function(){U(ok,new hk(a,Math.round(1E4*Math.random()).toString(),{thumbnail:"",title:"",url:"",vc:a}))}),function(){U(nk,c)})}
function bq(a,b,c,d,e){var f=new ek(a);U(mk,f);var g={};g.c=a;c&&(g.eurl=c);d&&(g.source=d);c={};(d=R("PLAYBACK_ID"))&&(c.plid=d);(d=R("EVENT_ID"))&&(c.ei=d);e&&(c.params=e);b&&pq(b,c);Dl("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",sa:g,G:c,onSuccess:function(h,k){var l=k.response;U(ok,new hk(a,l.id,l.channel_info));l.show_feed_privacy_dialog&&dj("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a)},
ba:function(){U(nk,f)}})}
function dq(a,b){var c=new ek(a);U(rk,c);me(up({commandMetadata:{webCommandMetadata:{apiUrl:"/youtubei/v1/subscription/unsubscribe"}},unsubscribeEndpoint:{channelIds:[a],params:b}}).then(function(){U(tk,c)}),function(){U(sk,c)})}
function eq(a,b,c,d,e){var f=new ek(a);U(rk,f);var g={};g.c=a;d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=R("PLAYBACK_ID"))&&(d.plid=a);(a=R("EVENT_ID"))&&(d.ei=a);c&&pq(c,d);Dl("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",sa:g,G:d,onSuccess:function(){U(tk,f)},
ba:function(){U(sk,f)}})}
function kq(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new fk(a,b,c);Dl("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",G:d,onError:function(){U(zk,e)},
onSuccess:function(){U(yk,e)}})}}
function gq(a){if(a.length){var b=qb(a,0,40);U("subscription-batch-subscribe-loading");oq(b,mk);var c={};c.a=b.join(",");var d=function(){U("subscription-batch-subscribe-loaded");oq(b,nk)};
Dl("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",G:c,onSuccess:function(e,f){d();var g=f.response,h=g.id;if(Array.isArray(h)&&h.length==b.length){var k=g.channel_info_map;E(h,function(l,n){var p=b[n];U(ok,new hk(p,l,k[p]))});
a.length?gq(a):U("subscription-batch-subscribe-finished")}},
onError:function(){d();U("subscription-batch-subscribe-failure")}})}}
function iq(a){if(a.length){var b=qb(a,0,40);U("subscription-batch-unsubscribe-loading");oq(b,rk);var c={};c.c=b.join(",");var d=function(){U("subscription-batch-unsubscribe-loaded");oq(b,sk)};
Dl("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",G:c,onSuccess:function(){d();oq(b,tk);a.length&&iq(a)},
onError:function(){d()}})}}
function oq(a,b){E(a,function(c){U(b,new ek(c))})}
function pq(a,b){var c=Xj(a),d;for(d in c)b[d]=c[d]}
;A("yt.setConfig",Pi);A("yt.config.set",Pi);A("ytbin.www.subscribeembed.init",function(){var a=!0;Zp.push(uj(lk,$p),uj(qk,cq));a||Zp.push(uj(pk,$p),uj(uk,cq),uj(jk,fq),uj(kk,hq),uj(xk,jq),uj(Vp,lq),uj(Xp,nq),uj(Up,mq));a=Mo.C();var b=W(a);b in Vj||(a.register(),Sj(a,"yt-uix-init-"+b,a.init),Sj(a,"yt-uix-dispose-"+b,a.dispose),Vj[b]=a);Uo()});}).call(this);
