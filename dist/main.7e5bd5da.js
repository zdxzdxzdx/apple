parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n,e=window.document.querySelector("#apple"),t=window.document.querySelector("#hua"),r="\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n.big {\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\n.yuan {\n  border: 1px solid red;\n  background: red;\n  width: 126px;\n  height: 130px;\n  border-radius: 60% 60% 60% 60% / 50% 50% 90% 90%;\n  position: relative;\n}\n.bai {\n  width: 30px;\n  height: 30px;\n  position: relative;\n  left: 70px;\n  top: 15px;\n  border-radius: 50%;\n  box-shadow: 5px -5px 1px 0 rgba(255, 255, 255, 0.3);\n}\n\n.gen1 {\n  border: 1px solid black;\n  width: 10px;\n  height: 40px;\n  position: absolute;\n  left: 58px;\n  top: -30px;\n  border-radius: 60% 60% 60% 60% / 50% 50% 90% 90%;\n  transform: rotate(25deg);\n  background: brown;\n}\n.smallyuao {\n  /* border: 1px solid blue; */\n  background: white;\n  height: 30px;\n  width: 30px;\n  border-radius: 40%;\n  position: relative;\n  top: 127px;\n  left: 50px;\n}\n.ye {\n  border: 1px solid green;\n  background: green;\n  width: 50px;\n  height: 50px;\n  border-top-right-radius: 80%;\n  border-bottom-left-radius: 80%;\n  transform: rotate(-10deg);\n  position: absolute;\n  top: -40px;\n}\n",o="你是猪头";setInterval(function(){for(n=0;n<=r.length;n++)e.innerHTML=r.substr(0,n)},1e3),setInterval(function(){for(n=0;n<=o.length;n++)t.textContent=o.substr(0,n)},2500);
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.7e5bd5da.js.map