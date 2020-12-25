// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var apple = window.document.querySelector("#apple");
var a = window.document.querySelector("#hua");
var string = "\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n.big {\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\n.yuan {\n  border: 1px solid red;\n  background: red;\n  width: 126px;\n  height: 130px;\n  border-radius: 60% 60% 60% 60% / 50% 50% 90% 90%;\n  position: relative;\n}\n.bai {\n  width: 30px;\n  height: 30px;\n  position: relative;\n  left: 70px;\n  top: 15px;\n  border-radius: 50%;\n  box-shadow: 5px -5px 1px 0 rgba(255, 255, 255, 0.3);\n}\n\n.gen1 {\n  border: 1px solid black;\n  width: 10px;\n  height: 40px;\n  position: absolute;\n  left: 58px;\n  top: -30px;\n  border-radius: 60% 60% 60% 60% / 50% 50% 90% 90%;\n  transform: rotate(25deg);\n  background: brown;\n}\n.smallyuao {\n  /* border: 1px solid blue; */\n  background: white;\n  height: 30px;\n  width: 30px;\n  border-radius: 40%;\n  position: relative;\n  top: 127px;\n  left: 50px;\n}\n.ye {\n  border: 1px solid green;\n  background: green;\n  width: 50px;\n  height: 50px;\n  border-top-right-radius: 80%;\n  border-bottom-left-radius: 80%;\n  transform: rotate(-10deg);\n  position: absolute;\n  top: -40px;\n}\n";
var string2 = "你是猪头";
var n;
setInterval(function () {
  for (n = 0; n <= string.length; n++) {
    apple.innerHTML = string.substr(0, n); // a.textContent = string2.substr(0, 4);
  }
}, 1000);
setInterval(function () {
  for (n = 0; n <= string2.length; n++) {
    a.textContent = string2.substr(0, n);
  }
}, 2500);
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.18a0b834.js.map