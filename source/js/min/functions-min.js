!function(P,W,C,c){var e={google:{families:["Lato:400,700,400italic,700italic:latin"]},fontdeck:{id:"47046"},custom:{families:["fontello"],testStrings:{fontello:""}},timeout:3e3},t=P.documentElement,r=P.createElement(W),n=!1,a=P.getElementsByTagName(W)[0],i,s=setTimeout(function(){t[C]=t[C].replace(/\bwf-loading\b/g,"")+c+"inactive"},e.timeout);t[C]+=c+"loading",r.src="//ajax.googleapis.com/ajax/libs/webfont/1.5.10/webfont.js",r.onload=r.onreadystatechange=function(){if(i=this.readyState,!(n||i&&"complete"!==i&&"loaded"!==i)){n=!0,clearTimeout(s);try{WebFont.load(e)}catch(t){}}},a.parentNode.insertBefore(r,a)}(document,"script","className"," wf-"),function(e){var t=PWCC_data.assetsHome,r={fonts:[{font_family:"fontello",font_size_adjust:"1",font_urls:{eot:t+"fonts/fontello.eot",ttf:t+"fonts/fontello.ttf",woff:t+"fonts/fontello.woff",svg:t+"fonts/fontello.svg"},weight:"normal",style:"normal",name:"fontello"}]};return{a:function(){for(var t="",n=0,a=r.fonts.length;a>n;++n)t+="@font-face {font-family:'"+r.fonts[n].name+"';",t+="src:url('"+r.fonts[n].font_urls.eot+"');",t+="src:url('"+r.fonts[n].font_urls.eot+"?')format('embedded-opentype'),",t+="url('"+r.fonts[n].font_urls.woff+"')format('woff'),",t+="url('"+r.fonts[n].font_urls.ttf+"')format('opentype'),",t+="url('"+r.fonts[n].font_urls.svg+"')format('svg');",t+="font-weight:"+r.fonts[n].weight+";",t+="font-style:"+r.fonts[n].style+";",t+="}";n=e.createElement("style"),n.type="text/css",e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.innerHTML=t}}}(document).a();var hljs=new function(){function e(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,t){var r=e&&e.exec(t);return r&&0==r.index}function n(e){var t=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);return t=t.map(function(e){return e.replace(/^lang(uage)?-/,"")}),t.filter(function(e){return _(e)||/no(-?)highlight/.test(e)})[0]}function a(e,t){var r={};for(var n in e)r[n]=e[n];if(t)for(var n in t)r[n]=t[n];return r}function i(e){var r=[];return function n(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3==i.nodeType?a+=i.nodeValue.length:1==i.nodeType&&(r.push({event:"start",offset:a,node:i}),a=n(i,a),t(i).match(/br|hr|img|input/)||r.push({event:"stop",offset:a,node:i}));return a}(e,0),r}function s(r,n,a){function i(){return r.length&&n.length?r[0].offset!=n[0].offset?r[0].offset<n[0].offset?r:n:"start"==n[0].event?r:n:r.length?r:n}function s(r){function n(t){return" "+t.nodeName+'="'+e(t.value)+'"'}u+="<"+t(r)+Array.prototype.map.call(r.attributes,n).join("")+">"}function o(e){u+="</"+t(e)+">"}function c(e){("start"==e.event?s:o)(e.node)}for(var l=0,u="",f=[];r.length||n.length;){var d=i();if(u+=e(a.substr(l,d[0].offset-l)),l=d[0].offset,d==r){f.reverse().forEach(o);do c(d.splice(0,1)[0]),d=i();while(d==r&&d.length&&d[0].offset==l);f.reverse().forEach(s)}else"start"==d[0].event?f.push(d[0].node):f.pop(),c(d.splice(0,1)[0])}return u+e(a.substr(l))}function o(e){function t(e){return e&&e.source||e}function r(r,n){return RegExp(t(r),"m"+(e.cI?"i":"")+(n?"g":""))}function n(i,s){if(!i.compiled){if(i.compiled=!0,i.k=i.k||i.bK,i.k){var o={},c=function(t,r){e.cI&&(r=r.toLowerCase()),r.split(" ").forEach(function(e){var r=e.split("|");o[r[0]]=[t,r[1]?Number(r[1]):1]})};"string"==typeof i.k?c("keyword",i.k):Object.keys(i.k).forEach(function(e){c(e,i.k[e])}),i.k=o}i.lR=r(i.l||/\b[A-Za-z0-9_]+\b/,!0),s&&(i.bK&&(i.b="\\b("+i.bK.split(" ").join("|")+")\\b"),i.b||(i.b=/\B|\b/),i.bR=r(i.b),i.e||i.eW||(i.e=/\B|\b/),i.e&&(i.eR=r(i.e)),i.tE=t(i.e)||"",i.eW&&s.tE&&(i.tE+=(i.e?"|":"")+s.tE)),i.i&&(i.iR=r(i.i)),void 0===i.r&&(i.r=1),i.c||(i.c=[]);var l=[];i.c.forEach(function(e){e.v?e.v.forEach(function(t){l.push(a(e,t))}):l.push("self"==e?i:e)}),i.c=l,i.c.forEach(function(e){n(e,i)}),i.starts&&n(i.starts,s);var u=i.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([i.tE,i.i]).map(t).filter(Boolean);i.t=u.length?r(u.join("|"),!0):{exec:function(){return null}}}}n(e)}function c(t,n,a,i){function s(e,t){for(var n=0;n<t.c.length;n++)if(r(t.c[n].bR,e))return t.c[n]}function u(e,t){return r(e.eR,t)?e:e.eW?u(e.parent,t):void 0}function f(e,t){return!a&&r(t.iR,e)}function d(e,t){var r=w.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(r)&&e.k[r]}function p(e,t,r,n){var a=n?"":v.classPrefix,i='<span class="'+a,s=r?"":"</span>";return i+=e+'">',i+t+s}function h(){if(!k.k)return e(A);var t="",r=0;k.lR.lastIndex=0;for(var n=k.lR.exec(A);n;){t+=e(A.substr(r,n.index-r));var a=d(k,n);a?(L+=a[1],t+=p(a[0],e(n[0]))):t+=e(n[0]),r=k.lR.lastIndex,n=k.lR.exec(A)}return t+e(A.substr(r))}function g(){if(k.sL&&!y[k.sL])return e(A);var t=k.sL?c(k.sL,A,!0,x[k.sL]):l(A);return k.r>0&&(L+=t.r),"continuous"==k.subLanguageMode&&(x[k.sL]=t.top),p(t.language,t.value,!1,!0)}function m(){return void 0!==k.sL?g():h()}function b(t,r){var n=t.cN?p(t.cN,"",!0):"";t.rB?(E+=n,A=""):t.eB?(E+=e(r)+n,A=""):(E+=n,A=r),k=Object.create(t,{parent:{value:k}})}function N(t,r){if(A+=t,void 0===r)return E+=m(),0;var n=s(r,k);if(n)return E+=m(),b(n,r),n.rB?0:r.length;var a=u(k,r);if(a){var i=k;i.rE||i.eE||(A+=r),E+=m();do k.cN&&(E+="</span>"),L+=k.r,k=k.parent;while(k!=a.parent);return i.eE&&(E+=e(r)),A="",a.starts&&b(a.starts,""),i.rE?0:r.length}if(f(r,k))throw new Error('Illegal lexeme "'+r+'" for mode "'+(k.cN||"<unnamed>")+'"');return A+=r,r.length||1}var w=_(t);if(!w)throw new Error('Unknown language: "'+t+'"');o(w);for(var k=i||w,x={},E="",M=k;M!=w;M=M.parent)M.cN&&(E=p(M.cN,"",!0)+E);var A="",L=0;try{for(var C,B,S=0;k.t.lastIndex=S,C=k.t.exec(n),C;)B=N(n.substr(S,C.index-S),C[0]),S=C.index+B;N(n.substr(S));for(var M=k;M.parent;M=M.parent)M.cN&&(E+="</span>");return{r:L,value:E,language:t,top:k}}catch(R){if(-1!=R.message.indexOf("Illegal"))return{r:0,value:e(n)};throw R}}function l(t,r){r=r||v.languages||Object.keys(y);var n={r:0,value:e(t)},a=n;return r.forEach(function(e){if(_(e)){var r=c(e,t,!1);r.language=e,r.r>a.r&&(a=r),r.r>n.r&&(a=n,n=r)}}),a.language&&(n.second_best=a),n}function u(e){return v.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,t){return t.replace(/\t/g,v.tabReplace)})),v.useBR&&(e=e.replace(/\n/g,"<br>")),e}function f(e,t,r){var n=t?N[t]:r,a=[e.trim()];return e.match(/(\s|^)hljs(\s|$)/)||a.push("hljs"),n&&a.push(n),a.join(" ").trim()}function d(e){var t=n(e);if(!/no(-?)highlight/.test(t)){var r;v.useBR?(r=document.createElementNS("http://www.w3.org/1999/xhtml","div"),r.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):r=e;var a=r.textContent,o=t?c(t,a,!0):l(a),d=i(r);if(d.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=o.value,o.value=s(d,i(p),a)}o.value=u(o.value),e.innerHTML=o.value,e.className=f(e.className,t,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function p(e){v=a(v,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,d)}}function g(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function m(e,t){var r=y[e]=t(this);r.aliases&&r.aliases.forEach(function(t){N[t]=e})}function b(){return Object.keys(y)}function _(e){return y[e]||y[N[e]]}var v={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},y={},N={};this.highlight=c,this.highlightAuto=l,this.fixMarkup=u,this.highlightBlock=d,this.configure=p,this.initHighlighting=h,this.initHighlightingOnLoad=g,this.registerLanguage=m,this.listLanguages=b,this.getLanguage=_,this.inherit=a,this.IR="[a-zA-Z][a-zA-Z0-9_]*",this.UIR="[a-zA-Z_][a-zA-Z0-9_]*",this.NR="\\b\\d+(\\.\\d+)?",this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",this.BNR="\\b(0b[01]+)",this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",this.BE={b:"\\\\[\\s\\S]",r:0},this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE]},this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE]},this.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/},this.CLCM={cN:"comment",b:"//",e:"$",c:[this.PWM]},this.CBCM={cN:"comment",b:"/\\*",e:"\\*/",c:[this.PWM]},this.HCM={cN:"comment",b:"#",e:"$",c:[this.PWM]},this.NM={cN:"number",b:this.NR,r:0},this.CNM={cN:"number",b:this.CNR,r:0},this.BNM={cN:"number",b:this.BNR,r:0},this.CSSNM={cN:"number",b:this.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},this.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[this.BE,{b:/\[/,e:/\]/,r:0,c:[this.BE]}]},this.TM={cN:"title",b:this.IR,r:0},this.UTM={cN:"title",b:this.UIR,r:0}};hljs.registerLanguage("markdown",function(){return{aliases:["md","mkdown","mkd"],c:[{cN:"header",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"blockquote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|	)",e:"$",r:0}]},{cN:"horizontal_rule",b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"link_label",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link_url",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"link_reference",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:"^\\[.+\\]:",rB:!0,c:[{cN:"link_reference",b:"\\[",e:"\\]:",eB:!0,eE:!0,starts:{cN:"link_url",e:"$"}}]}]}}),hljs.registerLanguage("javascript",function(e){return{aliases:["js"],k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"},c:[{cN:"pi",b:/^\s*('|")use strict('|")/,r:10},e.ASM,e.QSM,e.CLCM,e.CBCM,e.CNM,{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{b:/</,e:/>;/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[e.CLCM,e.CBCM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+e.IR,r:0}]}}),hljs.registerLanguage("json",function(e){var t={literal:"true false null"},r=[e.QSM,e.CNM],n={cN:"value",e:",",eW:!0,eE:!0,c:r,k:t},c={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:!0,eE:!0,c:[e.BE],i:"\\n",starts:n}],i:"\\S"},a={b:"\\[",e:"\\]",c:[e.inherit(n,{cN:null})],i:"\\S"};return r.splice(r.length,0,c,a),{c:r,k:t,i:"\\S"}}),hljs.registerLanguage("sql",function(e){var t={cN:"comment",b:"--",e:"$"};return{cI:!0,i:/[<>]/,c:[{cN:"operator",bK:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup",e:/;/,eW:!0,k:{keyword:"abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",literal:"true false null",built_in:"array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"},c:[{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[e.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[e.BE]},e.CNM,e.CBCM,t]},e.CBCM,t]}}),hljs.registerLanguage("php",function(e){var c={cN:"variable",b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},t={cN:"preprocessor",b:/<\?(php)?|\?>/},r={cN:"string",c:[e.BE,t],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},n={v:[e.BNM,e.CNM]};return{aliases:["php3","php4","php5","php6"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.CLCM,e.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"},t]},{cN:"comment",b:"__halt_compiler.+?;",eW:!0,k:"__halt_compiler",l:e.UIR},{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[e.BE]},t,c,{b:/->+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",c,e.CBCM,r,n]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},r,n]}}),hljs.registerLanguage("xml",function(){var e="[A-Za-z0-9\\._:-]+",t={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"},c={eW:!0,i:/</,r:0,c:[t,{cN:"attribute",b:e,r:0},{b:"=",r:0,c:[{cN:"value",c:[t],v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[c],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[c],starts:{e:"</script>",rE:!0,sL:"javascript"}},t,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:/[^ \/><\n\t]+/,r:0},c]}]}}),hljs.registerLanguage("css",function(e){var c="[a-zA-Z-][a-zA-Z0-9_-]*",t={cN:"function",b:c+"\\(",rB:!0,eE:!0,e:"\\("};return{cI:!0,i:"[=/|']",c:[e.CBCM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[t,e.ASM,e.QSM,e.CSSNM]}]},{cN:"tag",b:c,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[e.CBCM,{cN:"rule",b:"[^\\s]",rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:!0,i:"[^\\s]",starts:{cN:"value",eW:!0,eE:!0,c:[t,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]}]}]}}),function(e){function t(e){this.el=e;for(var t=e.className.replace(/^\s+|\s+$/g,"").split(/\s+/),r=0;r<t.length;r++)a.call(this,t[r])}function r(e,t,r){Object.defineProperty?Object.defineProperty(e,t,{get:r}):e.__defineGetter__(t,r)}if(!("undefined"==typeof e.Element||"classList"in document.documentElement)){var n=Array.prototype,a=n.push,i=n.splice,s=n.join;t.prototype={add:function(e){this.contains(e)||(a.call(this,e),this.el.className=this.toString())},contains:function(e){return-1!==this.el.className.indexOf(e)},item:function(e){return this[e]||null},remove:function(e){if(this.contains(e)){for(var t=0;t<this.length&&this[t]!==e;t++);i.call(this,t,1),this.el.className=this.toString()}},toString:function(){return s.call(this," ")},toggle:function(e){return this.contains(e)?this.remove(e):this.add(e),this.contains(e)}},e.DOMTokenList=t,r(Element.prototype,"classList",function(){return new t(this)})}}(this);var PWCC=this.PWCC||{},console=this.console||{error:function(){},info:function(){},log:function(){},warn:function(){}};PWCC.fns=function(e,t){"use strict";function r(){n(),a(),o.configure({tabReplace:"  "}),o.initHighlightingOnLoad()}function n(){function e(e){var t=n();!1===t&&(console.log(t),e.preventDefault())}function r(){!1!==u&&a(this)}function n(){var e=!0,r,n,i,s;for(u=!0,n=0,i=l.length;i>n;n++)s=a(l[n]),!1===s&&(r=t===r?l[n]:r,r.focus(),e=!1);return e}function a(e){function t(){return a.classList.add("is-error"),a.classList.remove("is-valid"),!1}function r(){return a.classList.remove("is-error"),a.classList.add("is-valid"),!0}var n=function(){return!0},a=e.parentNode;return"url"===e.getAttribute("type")?n=s:"email"===e.getAttribute("type")&&(n=i),""===e.value&&"true"===e.getAttribute("aria-required")?t():!1===n(e.value)?t():r()}var o=$("#commentform"),l,u=!1,f,d;if(0!==o.length&&(l=o[0].querySelectorAll("input,textarea"),0!==l.length))for(o[0].addEventListener("submit",e),f=0,d=l.length;d>f;f++)l[f].addEventListener("keyup",r)}function a(){var e=$(".js-Article_Body"),t,r,n;for(r=e.length-1;r>=0;r--)for(t=e[r].querySelectorAll("img, pre > code"),n=t.length-1;n>=0;n--)t[n].parentNode.classList.add("Article_FullWidthBlock")}function $(e){return l.querySelectorAll(e)}function i(e){var t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return""===e||t.test(e)}function s(e){var t=/^(?:(?:https?|ftp):\/\/){0,1}(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;return""===e||t.test(e)}var o=e.hljs,l=e.document;l.querySelectorAll&&e.addEventListener&&r()}(this);