parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"GyVV":[function(require,module,exports) {
const e=document.querySelector(".delay"),t=document.querySelector(".step"),n=document.querySelector(".amount"),o=document.querySelector(".form");let u=0,i=0,r=0,l=0;function d(e,t){return new Promise((n,o)=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})})}e.addEventListener("input",()=>{u=e.value}),t.addEventListener("input",()=>{i=t.value}),n.addEventListener("input",()=>{r=n.value}),o.addEventListener("submit",e=>{e.preventDefault();let t=1,n=Number(u);for(let d=1;d<r;d++)0===l&&(l=Number(u),o()),l+=Number(i),o();function o(){setTimeout(()=>{d(t,n).then(({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)}).catch(({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}),n+=Number(i),t+=1},l)}l=0});
},{}]},{},["GyVV"], null)
//# sourceMappingURL=/goit-js-hw-09/03-promises.aae30377.js.map