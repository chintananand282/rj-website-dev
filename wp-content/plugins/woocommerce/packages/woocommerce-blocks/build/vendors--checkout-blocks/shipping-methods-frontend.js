(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[87],{218:function(e,t,n){"use strict";var r=n(0),o=n(5),a=n(6),i=n.n(a),c=n(1),l=n(28),s=n(125),u=n(55);function m(e){switch(e){case"success":case"warning":case"info":return"polite";case"error":default:return"assertive"}}t.a=function({className:e,status:t="info",children:n,spokenMessage:a=n,onRemove:f=o.noop,isDismissible:p=!0,actions:d=[],politeness:h=m(t),__unstableHTML:g,onDismiss:y=o.noop}){!function(e,t){const n="string"==typeof e?e:Object(r.renderToString)(e);Object(r.useEffect)(()=>{n&&Object(l.speak)(n,t)},[n,t])}(a,h);const b=i()(e,"components-notice","is-"+t,{"is-dismissible":p});return g&&(n=Object(r.createElement)(r.RawHTML,null,n)),Object(r.createElement)("div",{className:b},Object(r.createElement)("div",{className:"components-notice__content"},n,Object(r.createElement)("div",{className:"components-notice__actions"},d.map(({className:e,label:t,isPrimary:n,variant:o,noDefaultClasses:a=!1,onClick:c,url:l},s)=>{let m=o;return"primary"===o||a||(m=l?"link":"secondary"),void 0===m&&n&&(m="primary"),Object(r.createElement)(u.a,{key:s,href:l,variant:m,onClick:l?void 0:c,className:i()("components-notice__action",e)},t)}))),p&&Object(r.createElement)(u.a,{className:"components-notice__dismiss",icon:s.a,label:Object(c.__)("Dismiss this notice"),onClick:e=>{var t;null==e||null===(t=e.preventDefault)||void 0===t||t.call(e),y(),f()},showTooltip:!1}))}},335:function(e,t,n){e.exports=function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,o,a){return(r=n()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a}).apply(null,arguments)}function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=Object.hasOwnProperty,c=Object.setPrototypeOf,l=Object.isFrozen,s=Object.getPrototypeOf,u=Object.getOwnPropertyDescriptor,m=Object.freeze,f=Object.seal,p=Object.create,d="undefined"!=typeof Reflect&&Reflect,h=d.apply,g=d.construct;h||(h=function(e,t,n){return e.apply(t,n)}),m||(m=function(e){return e}),f||(f=function(e){return e}),g||(g=function(e,t){return r(e,o(t))});var y,b=x(Array.prototype.forEach),v=x(Array.prototype.pop),N=x(Array.prototype.push),T=x(String.prototype.toLowerCase),E=x(String.prototype.match),w=x(String.prototype.replace),A=x(String.prototype.indexOf),_=x(String.prototype.trim),O=x(RegExp.prototype.test),k=(y=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(y,t)});function x(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return h(e,t,r)}}function S(e,t,n){n=n||T,c&&c(e,null);for(var r=t.length;r--;){var o=t[r];if("string"==typeof o){var a=n(o);a!==o&&(l(t)||(t[r]=a),o=a)}e[o]=!0}return e}function D(e){var t,n=p(null);for(t in e)h(i,e,[t])&&(n[t]=e[t]);return n}function M(e,t){for(;null!==e;){var n=u(e,t);if(n){if(n.get)return x(n.get);if("function"==typeof n.value)return x(n.value)}e=s(e)}return function(e){return console.warn("fallback value for",e),null}}var C=m(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=m(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),L=m(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),I=m(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),H=m(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),j=m(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),F=m(["#text"]),z=m(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),U=m(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),B=m(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),P=m(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),G=f(/\{\{[\w\W]*|[\w\W]*\}\}/gm),W=f(/<%[\w\W]*|[\w\W]*%>/gm),V=f(/^data-[\-\w.\u00B7-\uFFFF]/),q=f(/^aria-[\-\w]+$/),Y=f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),K=f(/^(?:\w+script|data):/i),$=f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),J=f(/^html$/i),X=function(){return"undefined"==typeof window?null:window},Z=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null;n.currentScript&&n.currentScript.hasAttribute("data-tt-policy-suffix")&&(r=n.currentScript.getAttribute("data-tt-policy-suffix"));var o="dompurify"+(r?"#"+r:"");try{return t.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};return function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X(),r=function(e){return t(e)};if(r.version="2.4.0",r.removed=[],!n||!n.document||9!==n.document.nodeType)return r.isSupported=!1,r;var a=n.document,i=n.document,c=n.DocumentFragment,l=n.HTMLTemplateElement,s=n.Node,u=n.Element,f=n.NodeFilter,p=n.NamedNodeMap,d=void 0===p?n.NamedNodeMap||n.MozNamedAttrMap:p,h=n.HTMLFormElement,g=n.DOMParser,y=n.trustedTypes,x=u.prototype,Q=M(x,"cloneNode"),ee=M(x,"nextSibling"),te=M(x,"childNodes"),ne=M(x,"parentNode");if("function"==typeof l){var re=i.createElement("template");re.content&&re.content.ownerDocument&&(i=re.content.ownerDocument)}var oe=Z(y,a),ae=oe?oe.createHTML(""):"",ie=i,ce=ie.implementation,le=ie.createNodeIterator,se=ie.createDocumentFragment,ue=ie.getElementsByTagName,me=a.importNode,fe={};try{fe=D(i).documentMode?i.documentMode:{}}catch(e){}var pe={};r.isSupported="function"==typeof ne&&ce&&void 0!==ce.createHTMLDocument&&9!==fe;var de,he,ge=G,ye=W,be=V,ve=q,Ne=K,Te=$,Ee=Y,we=null,Ae=S({},[].concat(o(C),o(R),o(L),o(H),o(F))),_e=null,Oe=S({},[].concat(o(z),o(U),o(B),o(P))),ke=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),xe=null,Se=null,De=!0,Me=!0,Ce=!1,Re=!1,Le=!1,Ie=!1,He=!1,je=!1,Fe=!1,ze=!1,Ue=!0,Be=!1,Pe="user-content-",Ge=!0,We=!1,Ve={},qe=null,Ye=S({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ke=null,$e=S({},["audio","video","img","source","image","track"]),Je=null,Xe=S({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ze="http://www.w3.org/1998/Math/MathML",Qe="http://www.w3.org/2000/svg",et="http://www.w3.org/1999/xhtml",tt=et,nt=!1,rt=["application/xhtml+xml","text/html"],ot="text/html",at=null,it=i.createElement("form"),ct=function(e){return e instanceof RegExp||e instanceof Function},lt=function(t){at&&at===t||(t&&"object"===e(t)||(t={}),t=D(t),de=de=-1===rt.indexOf(t.PARSER_MEDIA_TYPE)?ot:t.PARSER_MEDIA_TYPE,he="application/xhtml+xml"===de?function(e){return e}:T,we="ALLOWED_TAGS"in t?S({},t.ALLOWED_TAGS,he):Ae,_e="ALLOWED_ATTR"in t?S({},t.ALLOWED_ATTR,he):Oe,Je="ADD_URI_SAFE_ATTR"in t?S(D(Xe),t.ADD_URI_SAFE_ATTR,he):Xe,Ke="ADD_DATA_URI_TAGS"in t?S(D($e),t.ADD_DATA_URI_TAGS,he):$e,qe="FORBID_CONTENTS"in t?S({},t.FORBID_CONTENTS,he):Ye,xe="FORBID_TAGS"in t?S({},t.FORBID_TAGS,he):{},Se="FORBID_ATTR"in t?S({},t.FORBID_ATTR,he):{},Ve="USE_PROFILES"in t&&t.USE_PROFILES,De=!1!==t.ALLOW_ARIA_ATTR,Me=!1!==t.ALLOW_DATA_ATTR,Ce=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Re=t.SAFE_FOR_TEMPLATES||!1,Le=t.WHOLE_DOCUMENT||!1,je=t.RETURN_DOM||!1,Fe=t.RETURN_DOM_FRAGMENT||!1,ze=t.RETURN_TRUSTED_TYPE||!1,He=t.FORCE_BODY||!1,Ue=!1!==t.SANITIZE_DOM,Be=t.SANITIZE_NAMED_PROPS||!1,Ge=!1!==t.KEEP_CONTENT,We=t.IN_PLACE||!1,Ee=t.ALLOWED_URI_REGEXP||Ee,tt=t.NAMESPACE||et,t.CUSTOM_ELEMENT_HANDLING&&ct(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ke.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&ct(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ke.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(ke.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Re&&(Me=!1),Fe&&(je=!0),Ve&&(we=S({},o(F)),_e=[],!0===Ve.html&&(S(we,C),S(_e,z)),!0===Ve.svg&&(S(we,R),S(_e,U),S(_e,P)),!0===Ve.svgFilters&&(S(we,L),S(_e,U),S(_e,P)),!0===Ve.mathMl&&(S(we,H),S(_e,B),S(_e,P))),t.ADD_TAGS&&(we===Ae&&(we=D(we)),S(we,t.ADD_TAGS,he)),t.ADD_ATTR&&(_e===Oe&&(_e=D(_e)),S(_e,t.ADD_ATTR,he)),t.ADD_URI_SAFE_ATTR&&S(Je,t.ADD_URI_SAFE_ATTR,he),t.FORBID_CONTENTS&&(qe===Ye&&(qe=D(qe)),S(qe,t.FORBID_CONTENTS,he)),Ge&&(we["#text"]=!0),Le&&S(we,["html","head","body"]),we.table&&(S(we,["tbody"]),delete xe.tbody),m&&m(t),at=t)},st=S({},["mi","mo","mn","ms","mtext"]),ut=S({},["foreignobject","desc","title","annotation-xml"]),mt=S({},["title","style","font","a","script"]),ft=S({},R);S(ft,L),S(ft,I);var pt=S({},H);S(pt,j);var dt=function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:et,tagName:"template"});var n=T(e.tagName),r=T(t.tagName);return e.namespaceURI===Qe?t.namespaceURI===et?"svg"===n:t.namespaceURI===Ze?"svg"===n&&("annotation-xml"===r||st[r]):Boolean(ft[n]):e.namespaceURI===Ze?t.namespaceURI===et?"math"===n:t.namespaceURI===Qe?"math"===n&&ut[r]:Boolean(pt[n]):e.namespaceURI===et&&!(t.namespaceURI===Qe&&!ut[r])&&!(t.namespaceURI===Ze&&!st[r])&&!pt[n]&&(mt[n]||!ft[n])},ht=function(e){N(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ae}catch(t){e.remove()}}},gt=function(e,t){try{N(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){N(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!_e[e])if(je||Fe)try{ht(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},yt=function(e){var t,n;if(He)e="<remove></remove>"+e;else{var r=E(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===de&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=oe?oe.createHTML(e):e;if(tt===et)try{t=(new g).parseFromString(o,de)}catch(e){}if(!t||!t.documentElement){t=ce.createDocument(tt,"template",null);try{t.documentElement.innerHTML=nt?"":o}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),tt===et?ue.call(t,Le?"html":"body")[0]:Le?t.documentElement:a},bt=function(e){return le.call(e.ownerDocument||e,e,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT,null,!1)},vt=function(e){return e instanceof h&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof d)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore)},Nt=function(t){return"object"===e(s)?t instanceof s:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},Tt=function(e,t,n){pe[e]&&b(pe[e],(function(e){e.call(r,t,n,at)}))},Et=function(e){var t;if(Tt("beforeSanitizeElements",e,null),vt(e))return ht(e),!0;if(O(/[\u0080-\uFFFF]/,e.nodeName))return ht(e),!0;var n=he(e.nodeName);if(Tt("uponSanitizeElement",e,{tagName:n,allowedTags:we}),e.hasChildNodes()&&!Nt(e.firstElementChild)&&(!Nt(e.content)||!Nt(e.content.firstElementChild))&&O(/<[/\w]/g,e.innerHTML)&&O(/<[/\w]/g,e.textContent))return ht(e),!0;if("select"===n&&O(/<template/i,e.innerHTML))return ht(e),!0;if(!we[n]||xe[n]){if(!xe[n]&&At(n)){if(ke.tagNameCheck instanceof RegExp&&O(ke.tagNameCheck,n))return!1;if(ke.tagNameCheck instanceof Function&&ke.tagNameCheck(n))return!1}if(Ge&&!qe[n]){var o=ne(e)||e.parentNode,a=te(e)||e.childNodes;if(a&&o)for(var i=a.length-1;i>=0;--i)o.insertBefore(Q(a[i],!0),ee(e))}return ht(e),!0}return e instanceof u&&!dt(e)?(ht(e),!0):"noscript"!==n&&"noembed"!==n||!O(/<\/no(script|embed)/i,e.innerHTML)?(Re&&3===e.nodeType&&(t=e.textContent,t=w(t,ge," "),t=w(t,ye," "),e.textContent!==t&&(N(r.removed,{element:e.cloneNode()}),e.textContent=t)),Tt("afterSanitizeElements",e,null),!1):(ht(e),!0)},wt=function(e,t,n){if(Ue&&("id"===t||"name"===t)&&(n in i||n in it))return!1;if(Me&&!Se[t]&&O(be,t));else if(De&&O(ve,t));else if(!_e[t]||Se[t]){if(!(At(e)&&(ke.tagNameCheck instanceof RegExp&&O(ke.tagNameCheck,e)||ke.tagNameCheck instanceof Function&&ke.tagNameCheck(e))&&(ke.attributeNameCheck instanceof RegExp&&O(ke.attributeNameCheck,t)||ke.attributeNameCheck instanceof Function&&ke.attributeNameCheck(t))||"is"===t&&ke.allowCustomizedBuiltInElements&&(ke.tagNameCheck instanceof RegExp&&O(ke.tagNameCheck,n)||ke.tagNameCheck instanceof Function&&ke.tagNameCheck(n))))return!1}else if(Je[t]);else if(O(Ee,w(n,Te,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==A(n,"data:")||!Ke[e])if(Ce&&!O(Ne,w(n,Te,"")));else if(n)return!1;return!0},At=function(e){return e.indexOf("-")>0},_t=function(t){var n,o,a,i;Tt("beforeSanitizeAttributes",t,null);var c=t.attributes;if(c){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:_e};for(i=c.length;i--;){var s=n=c[i],u=s.name,m=s.namespaceURI;if(o="value"===u?n.value:_(n.value),a=he(u),l.attrName=a,l.attrValue=o,l.keepAttr=!0,l.forceKeepAttr=void 0,Tt("uponSanitizeAttribute",t,l),o=l.attrValue,!l.forceKeepAttr&&(gt(u,t),l.keepAttr))if(O(/\/>/i,o))gt(u,t);else{Re&&(o=w(o,ge," "),o=w(o,ye," "));var f=he(t.nodeName);if(wt(f,a,o)){if(!Be||"id"!==a&&"name"!==a||(gt(u,t),o=Pe+o),oe&&"object"===e(y)&&"function"==typeof y.getAttributeType)if(m);else switch(y.getAttributeType(f,a)){case"TrustedHTML":o=oe.createHTML(o);break;case"TrustedScriptURL":o=oe.createScriptURL(o)}try{m?t.setAttributeNS(m,u,o):t.setAttribute(u,o),v(r.removed)}catch(e){}}}}Tt("afterSanitizeAttributes",t,null)}},Ot=function e(t){var n,r=bt(t);for(Tt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Tt("uponSanitizeShadowNode",n,null),Et(n)||(n.content instanceof c&&e(n.content),_t(n));Tt("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(t){var o,i,l,u,m,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((nt=!t)&&(t="\x3c!--\x3e"),"string"!=typeof t&&!Nt(t)){if("function"!=typeof t.toString)throw k("toString is not a function");if("string"!=typeof(t=t.toString()))throw k("dirty is not a string, aborting")}if(!r.isSupported){if("object"===e(n.toStaticHTML)||"function"==typeof n.toStaticHTML){if("string"==typeof t)return n.toStaticHTML(t);if(Nt(t))return n.toStaticHTML(t.outerHTML)}return t}if(Ie||lt(f),r.removed=[],"string"==typeof t&&(We=!1),We){if(t.nodeName){var p=he(t.nodeName);if(!we[p]||xe[p])throw k("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof s)1===(i=(o=yt("\x3c!----\x3e")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===i.nodeName||"HTML"===i.nodeName?o=i:o.appendChild(i);else{if(!je&&!Re&&!Le&&-1===t.indexOf("<"))return oe&&ze?oe.createHTML(t):t;if(!(o=yt(t)))return je?null:ze?ae:""}o&&He&&ht(o.firstChild);for(var d=bt(We?t:o);l=d.nextNode();)3===l.nodeType&&l===u||Et(l)||(l.content instanceof c&&Ot(l.content),_t(l),u=l);if(u=null,We)return t;if(je){if(Fe)for(m=se.call(o.ownerDocument);o.firstChild;)m.appendChild(o.firstChild);else m=o;return _e.shadowroot&&(m=me.call(a,m,!0)),m}var h=Le?o.outerHTML:o.innerHTML;return Le&&we["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&O(J,o.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+h),Re&&(h=w(h,ge," "),h=w(h,ye," ")),oe&&ze?oe.createHTML(h):h},r.setConfig=function(e){lt(e),Ie=!0},r.clearConfig=function(){at=null,Ie=!1},r.isValidAttribute=function(e,t,n){at||lt({});var r=he(e),o=he(t);return wt(r,o,n)},r.addHook=function(e,t){"function"==typeof t&&(pe[e]=pe[e]||[],N(pe[e],t))},r.removeHook=function(e){if(pe[e])return v(pe[e])},r.removeHooks=function(e){pe[e]&&(pe[e]=[])},r.removeAllHooks=function(){pe={}},r}()}()},394:function(e,t,n){"use strict";var r=n(10),o=n(0),a=n(6),i=n.n(a),c=n(9),l=n(54);t.a=function({icon:e,children:t,label:n,instructions:a,className:s,notices:u,preview:m,isColumnLayout:f,...p}){const[d,{width:h}]=Object(c.useResizeObserver)();let g;"number"==typeof h&&(g={"is-large":h>=480,"is-medium":h>=160&&h<480,"is-small":h<160});const y=i()("components-placeholder",s,g),b=i()("components-placeholder__fieldset",{"is-column-layout":f});return Object(o.createElement)("div",Object(r.a)({},p,{className:y}),d,u,m&&Object(o.createElement)("div",{className:"components-placeholder__preview"},m),Object(o.createElement)("div",{className:"components-placeholder__label"},Object(o.createElement)(l.a,{icon:e}),n),!!a&&Object(o.createElement)("div",{className:"components-placeholder__instructions"},a),Object(o.createElement)("div",{className:b},t))}},444:function(e,t,n){"use strict";var r=n(0),o=n(12);const a=Object(r.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(o.Path,{d:"M3 6.75C3 5.784 3.784 5 4.75 5H15V7.313l.05.027 5.056 2.73.394.212v3.468a1.75 1.75 0 01-1.75 1.75h-.012a2.5 2.5 0 11-4.975 0H9.737a2.5 2.5 0 11-4.975 0H3V6.75zM13.5 14V6.5H4.75a.25.25 0 00-.25.25V14h.965a2.493 2.493 0 011.785-.75c.7 0 1.332.287 1.785.75H13.5zm4.535 0h.715a.25.25 0 00.25-.25v-2.573l-4-2.16v4.568a2.487 2.487 0 011.25-.335c.7 0 1.332.287 1.785.75zM6.282 15.5a1.002 1.002 0 00.968 1.25 1 1 0 10-.968-1.25zm9 0a1 1 0 101.937.498 1 1 0 00-1.938-.498z"}));t.a=a}}]);