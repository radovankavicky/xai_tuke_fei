(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[7633],{10270:(r,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var a=n(94015),o=n.n(a),c=n(23645),t=n.n(c)()(o());t.push([r.id,".cm-s-erlang-dark.CodeMirror { background: #002240; color: white; }\n.cm-s-erlang-dark div.CodeMirror-selected { background: #b36539; }\n.cm-s-erlang-dark .CodeMirror-line::selection, .cm-s-erlang-dark .CodeMirror-line > span::selection, .cm-s-erlang-dark .CodeMirror-line > span > span::selection { background: rgba(179, 101, 57, .99); }\n.cm-s-erlang-dark .CodeMirror-line::-moz-selection, .cm-s-erlang-dark .CodeMirror-line > span::-moz-selection, .cm-s-erlang-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(179, 101, 57, .99); }\n.cm-s-erlang-dark .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }\n.cm-s-erlang-dark .CodeMirror-guttermarker { color: white; }\n.cm-s-erlang-dark .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-erlang-dark .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-erlang-dark .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-erlang-dark span.cm-quote      { color: #ccc; }\n.cm-s-erlang-dark span.cm-atom       { color: #f133f1; }\n.cm-s-erlang-dark span.cm-attribute  { color: #ff80e1; }\n.cm-s-erlang-dark span.cm-bracket    { color: #ff9d00; }\n.cm-s-erlang-dark span.cm-builtin    { color: #eaa; }\n.cm-s-erlang-dark span.cm-comment    { color: #77f; }\n.cm-s-erlang-dark span.cm-def        { color: #e7a; }\n.cm-s-erlang-dark span.cm-keyword    { color: #ffee80; }\n.cm-s-erlang-dark span.cm-meta       { color: #50fefe; }\n.cm-s-erlang-dark span.cm-number     { color: #ffd0d0; }\n.cm-s-erlang-dark span.cm-operator   { color: #d55; }\n.cm-s-erlang-dark span.cm-property   { color: #ccc; }\n.cm-s-erlang-dark span.cm-qualifier  { color: #ccc; }\n.cm-s-erlang-dark span.cm-special    { color: #ffbbbb; }\n.cm-s-erlang-dark span.cm-string     { color: #3ad900; }\n.cm-s-erlang-dark span.cm-string-2   { color: #ccc; }\n.cm-s-erlang-dark span.cm-tag        { color: #9effff; }\n.cm-s-erlang-dark span.cm-variable   { color: #50fe50; }\n.cm-s-erlang-dark span.cm-variable-2 { color: #e0e; }\n.cm-s-erlang-dark span.cm-variable-3, .cm-s-erlang-dark span.cm-type { color: #ccc; }\n.cm-s-erlang-dark span.cm-error      { color: #9d1e15; }\n\n.cm-s-erlang-dark .CodeMirror-activeline-background { background: #013461; }\n.cm-s-erlang-dark .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/erlang-dark.css"],names:[],mappings:"AAAA,+BAA+B,mBAAmB,EAAE,YAAY,EAAE;AAClE,4CAA4C,mBAAmB,EAAE;AACjE,mKAAmK,mCAAmC,EAAE;AACxM,kLAAkL,mCAAmC,EAAE;AACvN,wCAAwC,mBAAmB,EAAE,4BAA4B,EAAE;AAC3F,6CAA6C,YAAY,EAAE;AAC3D,oDAAoD,cAAc,EAAE;AACpE,2CAA2C,cAAc,EAAE;AAC3D,uCAAuC,4BAA4B,EAAE;;AAErE,uCAAuC,WAAW,EAAE;AACpD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,WAAW,EAAE;AACpD,uCAAuC,WAAW,EAAE;AACpD,uCAAuC,WAAW,EAAE;AACpD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,WAAW,EAAE;AACpD,uCAAuC,WAAW,EAAE;AACpD,uCAAuC,WAAW,EAAE;AACpD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,WAAW,EAAE;AACpD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,WAAW,EAAE;AACpD,uEAAuE,WAAW,EAAE;AACpF,uCAAuC,cAAc,EAAE;;AAEvD,sDAAsD,mBAAmB,EAAE;AAC3E,gDAAgD,sBAAsB,EAAE,sBAAsB,EAAE",sourcesContent:[".cm-s-erlang-dark.CodeMirror { background: #002240; color: white; }\n.cm-s-erlang-dark div.CodeMirror-selected { background: #b36539; }\n.cm-s-erlang-dark .CodeMirror-line::selection, .cm-s-erlang-dark .CodeMirror-line > span::selection, .cm-s-erlang-dark .CodeMirror-line > span > span::selection { background: rgba(179, 101, 57, .99); }\n.cm-s-erlang-dark .CodeMirror-line::-moz-selection, .cm-s-erlang-dark .CodeMirror-line > span::-moz-selection, .cm-s-erlang-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(179, 101, 57, .99); }\n.cm-s-erlang-dark .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }\n.cm-s-erlang-dark .CodeMirror-guttermarker { color: white; }\n.cm-s-erlang-dark .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-erlang-dark .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-erlang-dark .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-erlang-dark span.cm-quote      { color: #ccc; }\n.cm-s-erlang-dark span.cm-atom       { color: #f133f1; }\n.cm-s-erlang-dark span.cm-attribute  { color: #ff80e1; }\n.cm-s-erlang-dark span.cm-bracket    { color: #ff9d00; }\n.cm-s-erlang-dark span.cm-builtin    { color: #eaa; }\n.cm-s-erlang-dark span.cm-comment    { color: #77f; }\n.cm-s-erlang-dark span.cm-def        { color: #e7a; }\n.cm-s-erlang-dark span.cm-keyword    { color: #ffee80; }\n.cm-s-erlang-dark span.cm-meta       { color: #50fefe; }\n.cm-s-erlang-dark span.cm-number     { color: #ffd0d0; }\n.cm-s-erlang-dark span.cm-operator   { color: #d55; }\n.cm-s-erlang-dark span.cm-property   { color: #ccc; }\n.cm-s-erlang-dark span.cm-qualifier  { color: #ccc; }\n.cm-s-erlang-dark span.cm-special    { color: #ffbbbb; }\n.cm-s-erlang-dark span.cm-string     { color: #3ad900; }\n.cm-s-erlang-dark span.cm-string-2   { color: #ccc; }\n.cm-s-erlang-dark span.cm-tag        { color: #9effff; }\n.cm-s-erlang-dark span.cm-variable   { color: #50fe50; }\n.cm-s-erlang-dark span.cm-variable-2 { color: #e0e; }\n.cm-s-erlang-dark span.cm-variable-3, .cm-s-erlang-dark span.cm-type { color: #ccc; }\n.cm-s-erlang-dark span.cm-error      { color: #9d1e15; }\n\n.cm-s-erlang-dark .CodeMirror-activeline-background { background: #013461; }\n.cm-s-erlang-dark .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n"],sourceRoot:""}]);const s=t},23645:r=>{"use strict";r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var n=r(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(r,n,a){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(a)for(var c=0;c<this.length;c++){var t=this[c][0];null!=t&&(o[t]=!0)}for(var s=0;s<r.length;s++){var l=[].concat(r[s]);a&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},94015:r=>{"use strict";function e(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=r[n];return a}r.exports=function(r){var n,a,o=(a=4,function(r){if(Array.isArray(r))return r}(n=r)||function(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var n=[],a=!0,o=!1,c=void 0;try{for(var t,s=r[Symbol.iterator]();!(a=(t=s.next()).done)&&(n.push(t.value),!e||n.length!==e);a=!0);}catch(r){o=!0,c=r}finally{try{a||null==s.return||s.return()}finally{if(o)throw c}}return n}}(n,a)||function(r,n){if(r){if("string"==typeof r)return e(r,n);var a=Object.prototype.toString.call(r).slice(8,-1);return"Object"===a&&r.constructor&&(a=r.constructor.name),"Map"===a||"Set"===a?Array.from(r):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?e(r,n):void 0}}(n,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[1],t=o[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),A="/*# ".concat(l," */"),i=t.sources.map((function(r){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(r," */")}));return[c].concat(i).concat([A]).join("\n")}return[c].join("\n")}},37633:(r,e,n)=>{var a=n(10270);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[r.id,a,""]]);n(93379)(a,{insert:"head",singleton:!1}),a.locals&&(r.exports=a.locals)},93379:(r,e,n)=>{"use strict";var a,o={},c=function(){var r={};return function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}r[e]=n}return r[e]}}();function t(r,e){for(var n=[],a={},o=0;o<r.length;o++){var c=r[o],t=e.base?c[0]+e.base:c[0],s={css:c[1],media:c[2],sourceMap:c[3]};a[t]?a[t].parts.push(s):n.push(a[t]={id:t,parts:[s]})}return n}function s(r,e){for(var n=0;n<r.length;n++){var a=r[n],c=o[a.id],t=0;if(c){for(c.refs++;t<c.parts.length;t++)c.parts[t](a.parts[t]);for(;t<a.parts.length;t++)c.parts.push(g(a.parts[t],e))}else{for(var s=[];t<a.parts.length;t++)s.push(g(a.parts[t],e));o[a.id]={id:a.id,refs:1,parts:s}}}}function l(r){var e=document.createElement("style");if(void 0===r.attributes.nonce){var a=n.nc;a&&(r.attributes.nonce=a)}if(Object.keys(r.attributes).forEach((function(n){e.setAttribute(n,r.attributes[n])})),"function"==typeof r.insert)r.insert(e);else{var o=c(r.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var A,i=(A=[],function(r,e){return A[r]=e,A.filter(Boolean).join("\n")});function d(r,e,n,a){var o=n?"":a.css;if(r.styleSheet)r.styleSheet.cssText=i(e,o);else{var c=document.createTextNode(o),t=r.childNodes;t[e]&&r.removeChild(t[e]),t.length?r.insertBefore(c,t[e]):r.appendChild(c)}}function u(r,e,n){var a=n.css,o=n.media,c=n.sourceMap;if(o&&r.setAttribute("media",o),c&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),r.styleSheet)r.styleSheet.cssText=a;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(a))}}var m=null,p=0;function g(r,e){var n,a,o;if(e.singleton){var c=p++;n=m||(m=l(e)),a=d.bind(null,n,c,!1),o=d.bind(null,n,c,!0)}else n=l(e),a=u.bind(null,n,e),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)};return a(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap)return;a(r=e)}else o()}}r.exports=function(r,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var n=t(r,e);return s(n,e),function(r){for(var a=[],c=0;c<n.length;c++){var l=n[c],A=o[l.id];A&&(A.refs--,a.push(A))}r&&s(t(r,e),e);for(var i=0;i<a.length;i++){var d=a[i];if(0===d.refs){for(var u=0;u<d.parts.length;u++)d.parts[u]();delete o[d.id]}}}}}}]);
//# sourceMappingURL=7633.bf312cbd12404ef86896.js.map