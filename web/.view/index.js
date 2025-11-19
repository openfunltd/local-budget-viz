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
pug_html = pug_html + "\u003Cscript type=\"module\"\u003Evar defaultPalette;defaultPalette={colors:[{value:\"#0B918C\",tag:[\"民政支出\"]},{value:\"#FCE694\",tag:[\"文化支出\"]},{value:\"#7FCCCA\",tag:[\"交通支出\"]},{value:\"#e8614c\",tag:[\"行政支出\"]},{value:\"#175b58\",tag:[\"農業支出\"]},{value:\"#F7B538\",tag:[\"福利服務支出\"]},{value:\"#0267C1\",tag:[\"其他經濟服務支出\"]},{value:\"#A55315\",tag:[\"醫療保健支出\"]},{value:\"#9DB5D6\",tag:[\"環境保護支出\"]},{value:\"#334B84\",tag:[\"財務支出\"]},{value:\"#EDBBB4\",tag:[\"警政支出\"]},{value:\"#89a1ef\",tag:[\"工業支出\"]},{value:\"#F75590\",tag:[\"立法支出\"]},{value:\"#FF8945\",tag:[\"教育支出\"]},{value:\"#C6CA53\",tag:[\"其他支出\"]},{value:\"#A08794\",tag:[\"國民就業支出\"]},{value:\"#6752ce\",tag:[\"社區發展支出\"]},{value:\"#F3F9D2\",tag:[\"退休撫卹給付支出\"]},{value:\"#44bcec\",tag:[\"社會保險支出\"]},{value:\"#E1BD63\",tag:[\"社會救助支出\"]},{value:\"#D6A783\",tag:[\"第二預備金\"]},{value:\"#7E9104\",tag:[\"債務付息支出\"]},{value:\"#4C4C4C\",tag:[\"政權行使支出\",\"行政管理\",\"建築及設備\",\"專案補助支出\",\"戶政行政\",\"平衡預算補助支出\",\"還本付息事務支出\",\"第一預備金\",\"教育行政\",\"教育業務建築及設備\",\"一般行政\",\"主計業務\",\"人事業務\",\"政風業務\",\"役政業務\",\"戶政業務\",\"民政公共工程\",\"教育人員退休給付\",\"教育人員撫卹給付\",\"教育人員各項補助\",\"文教活動\",\"文資計畫\",\"文化設施\",\"農漁業建設計畫\",\"農漁業管理\",\"農漁業工程\",\"建築物無障礙設備與設施改善基金\",\"工商業務\",\"公用事業管理\",\"公共建設\",\"健康保險\",\"社會救助\",\"社福設施\",\"救濟工作\",\"文書管理\",\"事務管理\",\"法制業務\",\"新聞宣導\",\"管考業務\",\"資訊業務\",\"自治管理\",\"禮俗業務\",\"文物管理\",\"建築管理\",\"都市計畫管理\",\"工程管理\",\"社會活動\",\"勞工福利\",\"老人福利\",\"身心障礙福利\",\"婦女福利\",\"兒童少年福利\",\"家庭暴力性侵害防治\",\"其他設備\",\"土木行政\",\"行政業務\",\"業務管理\",\"召開定期大會\",\"召開臨時大會\",\"法令研究\",\"小組調查\",\"議事錄印刷\",\"衛生行政\",\"衛生保健\",\"緊急醫療\",\"綜合保健\",\"防疫工作\",\"菸害防制\",\"食品藥物管理\",\"長期照護\",\"行政工作\",\"消防工作\",\"義消行政\",\"災害防救工作\",\"土地行政\",\"地政綜合業務\",\"財務管理\",\"公產管理\",\"財稅行政\",\"債務付息\",\"補助鄉鎮市基本建設及設施計畫\",\"交通觀光行政\",\"公共運輸業務\",\"觀光推廣業務\",\"港務行政\",\"水利管理\",\"下水道管理\",\"水利工程\",\"下水道工程\",\"環境管理\",\"環境衛生\",\"公務人員退休給付\",\"公務人員撫卹給付\",\"公務人員因公傷亡慰問金\",\"公務人員各項補助\",\"災害準備金\",\"各類員工待遇準備\",\"保險給付\",\"社會福利\",\"港埠工程管理\",\"道路工程管理\",\"選舉業務\",\"其他福利\",\"一般建築及設備\",\"民政業務\",\"建管行政\",\"社政業務\",\"航運業務管理\",\"調整公務員工待遇準備\",\"其它\",\"其他\"]}]};(function(n){return window.prepareBarChart=n})(function(n){var a,i;a=n.data;i=function(a){var n,i,r,t,e;n=Array.from(new Set(a.map(function(n){return n.county})));i=new Set;r=n.map(function(r){var e,n,t;e=a.filter(function(n){return n.county===r});n=Array.from(new Set(e.map(function(n){return n[\"政事別\"]})));n.map(function(n){return i.add(n)});t=Object.fromEntries(n.map(function(r){var n;n=e.filter(function(n){return n[\"政事別\"]===r&&n.year===114}).reduce(function(n,r){return n+r[\"預算案\"]},0);return[r,n]}));return import$({county:r},t)});t=r.filter(function(n){return n.county===\"臺北市\"})[0];r=r.filter(function(n){return n.county!==\"中央\"&&n[\"民政支出\"]!==0});i=Array.from(i);r.map(function(n){});i.sort(function(n,r){var e;e=[t[n],t[r]],n=e[0],r=e[1];if(n\u003Cr){return 1}else if(n\u003Er){return-1}else{return 0}});e={name:{key:\"county\"},size:Array.from(i).splice(0,10).map(function(n){return{key:n}})};return{raw:r,binding:e}};return makechart.bar({root:view.get(\"bar\")}).then(function(n){var r,e,t;r=i(a),e=r.raw,t=r.binding;n.on([\"select\"],function(n){return console.log(n)});n.setRaw({raw:e,binding:t});return n.config({palette:defaultPalette,brush:{enabled:false},percent:false,type:\"bar\",dancing:false,yaxis:{baseline:{show:false},caption:{show:false},tick:{inner:0},label:{padding:5}},xaxis:{baseline:{show:false},caption:{show:false},label:{format:\"d\"},tick:{boundaryOffset:false}},sort:{dir:\"asc\",dimension:\"size\",enabled:true}})})});function import$(n,r){var e={}.hasOwnProperty;for(var t in r)if(e.call(r,t))n[t]=r[t];return n}(function(e){return window.prepareScatterChart=e})(function(e){var a,t,n;a=e.data;a=a.filter(function(e){return e.county===\"臺北市\"});a.map(function(e){var a,t,n;e.name=\"機關別 \u003E 來源別 \u003E 子目\";e.cat=e[\"與去年差異\"]\u003E0?\"增加\":e[\"與去年差異\"]\u003C0?\"減少\":\"不變\";e[\"增減比例\"]=(a=(t=100*((e[\"與去年差異\"]||0)\u002F(e[\"預算案\"]-e[\"與去年差異\"]||1)))\u003E(n=-100)?t:n)\u003C100?a:100;return e[\"增減金額\"]=Math.abs(e[\"與去年差異\"])});t=a;n={name:{key:\"name\"},cat:{key:\"cat\"},x:{key:\"增減比例\"},y:{key:\"增減金額\"}};return makechart.scatter({root:view.get(\"scatter\")}).then(function(e){e.on([\"select\"],function(e){return console.log(e)});e.setRaw({raw:t,binding:n});return e.config({regression:{enabled:false},dot:{minRadius:5,maxRadius:5,strokeWidth:0},xaxis:{tick:{inner:0,boundaryOffset:false},grid:{enabled:true}},yaxis:{scale:\"pr\",tick:{inner:0},baseline:{show:false}},palette:{colors:[{tag:[\"增加\"],value:\"#bf5252\"},{tag:[\"減少\"],value:\"#75a886\"},{tag:[\"不變\"],value:\"#75a886\"}]},legend:{enabled:false}})})});(function(e){return window.prepareTreemap=e})(function(e){var n,t,r;n=e.data;n=n.filter(function(e){return e.county===\"臺北市\"});n.forEach(function(e){return e.name=\"... 子目\"});console.log(n);t=n;r={name:{key:\"name\"},category:{key:\"政事別\"},area:{key:\"預算案\"}};return makechart.treemap({root:view.get(\"treemap\")}).then(function(e){e.on([\"select\"],function(e){return console.log(e)});e.setRaw({raw:t,binding:r});return e.config({palette:defaultPalette,legend:{position:\"bottom\"}})})});var view;view=new ldview({root:document.body});ld$.fetch(\"\u002Fassets\u002Fcustom\u002Fconfig.json\",{method:\"GET\"},{type:\"json\"}).then(function(e){return ld$.fetch(\"https:\u002F\u002Fbudget.openfun.app\u002Fapi\u002Fcounties\",{method:\"GET\"},{type:\"json\"}).then(function(e){e=e[\"歲出\"];console.log(e);prepareBarChart({data:e});prepareScatterChart({data:e});return prepareTreemap({data:e})})});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
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