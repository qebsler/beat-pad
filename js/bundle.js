"use strict";var _createClass=function(){function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}!function(t){var o={};function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==(void 0===n?"undefined":_typeof(n))&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)a.d(t,o,function(e){return n[e]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a(a.s=2)}([function(e,n,t){t.r(n),t.d(n,"default",function(){return o});var o=function(){function a(e,n,t,o){_classCallCheck(this,a),this.name=e,this.parent=n,this.audio=new window.Audio(t),this.audio.volume=o}return _createClass(a,[{key:"init",value:function(){var e=this;this.el=document.createElement("button"),this.el.classList.add("pad-tiles"),this.el.innerHTML='<p class="label">'+this.name+"</p>",this.parent.appendChild(this.el),this.audio.loop=!0,this.played=!1,this.el.addEventListener("click",function(){e.played?e.audio.pause():e.audio.play(),e.played=!e.played})}}]),a}()},function(e,n,t){t.r(n),n.default=[{name:"Chords 1",vol:.9},{name:"Chords 2",vol:.9},{name:"Lick 1",vol:.9},{name:"Lick 2",vol:.9},{name:"Snare flat 80s",vol:.5},{name:"Clap",vol:.6},{name:"Kick drum 80s",vol:.75},{name:"HH",vol:.8},{name:"Snare",vol:.5},{name:"Tom",vol:.75},{name:"Impact Kick",vol:.5},{name:"HH Big",vol:.8},{name:"Synth",vol:1},{name:"Organ",vol:1},{name:"Bass 1",vol:1},{name:"Bass 2",vol:.5}]},function(e,n,t){t(3),t(1),e.exports=t(0)},function(e,n,t){t.r(n);var o=t(0),a=t(1),r=document.getElementById("parent-pad"),l=[];a.default.forEach(function(e){var n=new o.default(e.name,r,"./assets/sample/"+e.name+".wav",e.vol);n.init(),l.push(n)})}]);