"use strict";(self.webpackChunksocial_media_app=self.webpackChunksocial_media_app||[]).push([[2478],{2478:function(e,t,i){i.r(t),i.d(t,{conf:function(){return f},language:function(){return w}});var n,r,o=i(7762),a=i(4389),l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,c=Object.prototype.hasOwnProperty,u=function(e,t,i,n){if(t&&"object"===typeof t||"function"===typeof t){var r,a=(0,o.Z)(s(t));try{var u=function(){var o=r.value;c.call(e,o)||o===i||l(e,o,{get:function(){return t[o]},enumerable:!(n=d(t,o))||n.enumerable})};for(a.s();!(r=a.n()).done;)u()}catch(m){a.e(m)}finally{a.f()}}return e},m={};u(m,n=a,"default"),r&&u(r,n,"default");var p=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],f={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,brackets:[["\x3c!--","--\x3e"],["<",">"],["{{","}}"],["{%","%}"],["{","}"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"%",close:"%"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"<",close:">"},{open:'"',close:'"'},{open:"'",close:"'"}],onEnterRules:[{beforeText:new RegExp("<(?!(?:".concat(p.join("|"),"))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$"),"i"),afterText:/^<\/(\w[\w\d]*)\s*>$/i,action:{indentAction:m.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp("<(?!(?:".concat(p.join("|"),"))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$"),"i"),action:{indentAction:m.languages.IndentAction.Indent}}]},w={defaultToken:"",tokenPostfix:"",builtinTags:["if","else","elseif","endif","render","assign","capture","endcapture","case","endcase","comment","endcomment","cycle","decrement","for","endfor","include","increment","layout","raw","endraw","render","tablerow","endtablerow","unless","endunless"],builtinFilters:["abs","append","at_least","at_most","capitalize","ceil","compact","date","default","divided_by","downcase","escape","escape_once","first","floor","join","json","last","lstrip","map","minus","modulo","newline_to_br","plus","prepend","remove","remove_first","replace","replace_first","reverse","round","rstrip","size","slice","sort","sort_natural","split","strip","strip_html","strip_newlines","times","truncate","truncatewords","uniq","upcase","url_decode","url_encode","where"],constants:["true","false"],operators:["==","!=",">","<",">=","<="],symbol:/[=><!]+/,identifier:/[a-zA-Z_][\w]*/,tokenizer:{root:[[/\{\%\s*comment\s*\%\}/,"comment.start.liquid","@comment"],[/\{\{/,{token:"@rematch",switchTo:"@liquidState.root"}],[/\{\%/,{token:"@rematch",switchTo:"@liquidState.root"}],[/(<)([\w\-]+)(\/>)/,["delimiter.html","tag.html","delimiter.html"]],[/(<)([:\w]+)/,["delimiter.html",{token:"tag.html",next:"@otherTag"}]],[/(<\/)([\w\-]+)/,["delimiter.html",{token:"tag.html",next:"@otherTag"}]],[/</,"delimiter.html"],[/\{/,"delimiter.html"],[/[^<{]+/]],comment:[[/\{\%\s*endcomment\s*\%\}/,"comment.end.liquid","@pop"],[/./,"comment.content.liquid"]],otherTag:[[/\{\{/,{token:"@rematch",switchTo:"@liquidState.otherTag"}],[/\{\%/,{token:"@rematch",switchTo:"@liquidState.otherTag"}],[/\/?>/,"delimiter.html","@pop"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/]],liquidState:[[/\{\{/,"delimiter.output.liquid"],[/\}\}/,{token:"delimiter.output.liquid",switchTo:"@$S2.$S3"}],[/\{\%/,"delimiter.tag.liquid"],[/raw\s*\%\}/,"delimiter.tag.liquid","@liquidRaw"],[/\%\}/,{token:"delimiter.tag.liquid",switchTo:"@$S2.$S3"}],{include:"liquidRoot"}],liquidRaw:[[/^(?!\{\%\s*endraw\s*\%\}).+/],[/\{\%/,"delimiter.tag.liquid"],[/@identifier/],[/\%\}/,{token:"delimiter.tag.liquid",next:"@root"}]],liquidRoot:[[/\d+(\.\d+)?/,"number.liquid"],[/"[^"]*"/,"string.liquid"],[/'[^']*'/,"string.liquid"],[/\s+/],[/@symbol/,{cases:{"@operators":"operator.liquid","@default":""}}],[/\./],[/@identifier/,{cases:{"@constants":"keyword.liquid","@builtinFilters":"predefined.liquid","@builtinTags":"predefined.liquid","@default":"variable.liquid"}}],[/[^}|%]/,"variable.liquid"]]}}}}]);
//# sourceMappingURL=2478.2a8812e8.chunk.js.map