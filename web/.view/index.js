 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (Array, c, defer, hashfile, libLoader, md5, url, version) {
      pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
if(!libLoader) {
  libLoader = {
    js: {url: {}},
    css: {url: {}},
    root: function(r) { libLoader._r = r; },
    _r: "/assets/lib",
    _v: "",
    version: function(v) { libLoader._v = (v ? "?v=" + v : ""); }
  }
  if(version) { libLoader.version(version); }
}

pug_mixins["script"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var str = '', urls = [];
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
    }
  }
}).call(this);

if (cfg && cfg.pack) {
var name = md5(str);
//var filename = "/js/pack/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".js";
var fn = "/assets/bundle/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".js";
hashfile({type: "js", name: name, files: urls, src: locals.filename});
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", fn + libLoader._v, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
};
pug_mixins["css"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var str = '', urls = [];
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url, true, true)) + "\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url, true, true)) + "\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
}
    }
  }
}).call(this);

if (cfg && cfg.pack) {
var name = md5(str);
//var filename = "/css/pack/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".css";
var fn = "/assets/bundle/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".css";
hashfile({type: "css", name: name, files: urls, src: locals.filename});
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", fn + libLoader._v, true, true)) + "\u003E";
}
};
pug_html = pug_html + "\u003Chtml\u003E\u003Chead\u003E";
libLoader.root("./assets/lib")
pug_mixins["css"]([
    {name: "bootstrap", path: "dist/css/bootstrap.min.css"}
    ]);
pug_html = pug_html + "\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"d-flex flex-column g-2\"\u003E\u003Cdiv class=\"my-4 px-4 w-100\"\u003E\u003Cdiv class=\"mx-auto w-100 border p-4 rounded\" ld=\"bar\" style=\"height:500px\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"my-4 px-4 w-100\"\u003E\u003Cdiv class=\"mx-auto w-100 border p-4 rounded\" ld=\"scatter\" style=\"height:500px\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"my-4 px-4 w-100\"\u003E\u003Cdiv class=\"mx-auto w-100 border p-4 rounded\" ld=\"treemap\" style=\"height:500px\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["script"]([
    {url: "./assets/custom/bundle.min.js"},
    {name: "ldview"}
    ]);
pug_html = pug_html + "\u003Cscript type=\"module\"\u003E(function(n){return window.prepareBarChart=n})(function(n){var a,i;a=n.data;i=function(a){var n,i,r,t,e;n=Array.from(new Set(a.map(function(n){return n.county})));i=new Set;r=n.map(function(r){var e,n,t;e=a.filter(function(n){return n.county===r});n=Array.from(new Set(e.map(function(n){return n[\"政事別\"]})));n.map(function(n){return i.add(n)});t=Object.fromEntries(n.map(function(r){var n;n=e.filter(function(n){return n[\"政事別\"]===r&&n.year===114}).reduce(function(n,r){return n+r[\"預算案\"]},0);return[r,n]}));return import$({county:r},t)});t=r.filter(function(n){return n.county===\"臺北市\"})[0];r=r.filter(function(n){return n.county!==\"中央\"&&n[\"民政支出\"]!==0});i=Array.from(i);r.map(function(n){});i.sort(function(n,r){var e;e=[t[n],t[r]],n=e[0],r=e[1];if(n\u003Cr){return 1}else if(n\u003Er){return-1}else{return 0}});e={name:{key:\"county\"},size:Array.from(i).splice(0,10).map(function(n){return{key:n}})};return{raw:r,binding:e}};return makechart.bar({root:view.get(\"bar\")}).then(function(n){var r,e,t;r=i(a),e=r.raw,t=r.binding;n.on([\"select\"],function(n){return console.log(n)});n.setRaw({raw:e,binding:t});return n.config({brush:{enabled:false},percent:false,type:\"bar\",dancing:false,yaxis:{baseline:{show:false},caption:{show:false},tick:{inner:0},label:{padding:5}},xaxis:{baseline:{show:false},caption:{show:false},label:{format:\"d\"},tick:{boundaryOffset:false}},sort:{dir:\"asc\",dimension:\"size\",enabled:true}})})});function import$(n,r){var e={}.hasOwnProperty;for(var t in r)if(e.call(r,t))n[t]=r[t];return n}(function(e){return window.prepareScatterChart=e})(function(e){var a,t,n;a=e.data;a=a.filter(function(e){return e.county===\"臺北市\"});a.map(function(e){var a,t,n;e.name=\"機關別 \u003E 來源別 \u003E 子目\";e.cat=e[\"與去年差異\"]\u003E0?\"增加\":e[\"與去年差異\"]\u003C0?\"減少\":\"不變\";e[\"增減比例\"]=(a=(t=100*((e[\"與去年差異\"]||0)\u002F(e[\"預算案\"]-e[\"與去年差異\"]||1)))\u003E(n=-100)?t:n)\u003C100?a:100;return e[\"增減金額\"]=Math.abs(e[\"與去年差異\"])});t=a;n={name:{key:\"name\"},cat:{key:\"cat\"},x:{key:\"增減比例\"},y:{key:\"增減金額\"}};return makechart.scatter({root:view.get(\"scatter\")}).then(function(e){e.on([\"select\"],function(e){return console.log(e)});e.setRaw({raw:t,binding:n});return e.config({regression:{enabled:false},dot:{minRadius:10,maxRadius:10},xaxis:{tick:{inner:0,boundaryOffset:false}},yaxis:{scale:\"pr\",tick:{inner:0}},palette:{colors:[{tag:[\"增加\"],value:\"#e8614c\"},{tag:[\"減少\"],value:\"#0b918c\"},{tag:[\"不變\"],value:\"#9db5d6\"}]},legend:{enabled:false}})})});(function(e){return window.prepareTreemap=e})(function(e){var r;r=e.data;return makechart.treemap({root:view.get(\"treemap\")}).then(function(e){e.init();e.parse();e.bind();e.resize();return e.render()})});var view;view=new ldview({root:document.body});ld$.fetch(\"\u002Fassets\u002Fcustom\u002Fconfig.json\",{method:\"GET\"},{type:\"json\"}).then(function(e){return ld$.fetch(\"https:\u002F\u002Fbudget.openfun.app\u002Fapi\u002Fcounties\",{method:\"GET\"},{type:\"json\"}).then(function(e){e=e[\"歲出\"];console.log(e);prepareBarChart({data:e});prepareScatterChart({data:e});return prepareTreemap({data:e})})});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Array" in locals_for_with ?
        locals_for_with.Array :
        typeof Array !== 'undefined' ? Array : undefined, "c" in locals_for_with ?
        locals_for_with.c :
        typeof c !== 'undefined' ? c : undefined, "defer" in locals_for_with ?
        locals_for_with.defer :
        typeof defer !== 'undefined' ? defer : undefined, "hashfile" in locals_for_with ?
        locals_for_with.hashfile :
        typeof hashfile !== 'undefined' ? hashfile : undefined, "libLoader" in locals_for_with ?
        locals_for_with.libLoader :
        typeof libLoader !== 'undefined' ? libLoader : undefined, "md5" in locals_for_with ?
        locals_for_with.md5 :
        typeof md5 !== 'undefined' ? md5 : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;;return pug_html;}; module.exports = template; })() 