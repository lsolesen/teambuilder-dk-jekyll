(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let teambuilder={AK:function(r){var t={a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",s:"...",t:"-",u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--..","æ":".-.-","ø":"---.","å":".--.-",0:"-----",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----.",".":".-.-.-",",":"--..--","?":"..--..","-":"-....-","=":"-...-",":":"---...",";":"-.-.-.","(":"-.--.",")":"-.--.-","/":"-..-.",'"':".-..-.",$:"...-..-","'":".----.","¶":".-.-..",_:"..--.-","@":".--.-.","!":"---.","+":".-.-.",Error:"........"},e={".-":"a","-...":"b","-.-.":"c","-..":"d",".":"e","..-.":"f","--.":"g","....":"h","..":"i",".---":"j","-.-":"k",".-..":"l","--":"m","-.":"n","---":"o",".--.":"p","--.-":"q",".-.":"r","...":"s","-":"t","..-":"u","...-":"v",".--":"w","-..-":"x","-.--":"y","--..":"z",".-.-":"æ","---.":"ø",".--.-":"å","-----":"0",".----":"1","..---":"2","...--":"3","....-":"4",".....":"5","-....":"6","--...":"7","---..":"8","----.":"9",".-.-.-":".","--..--":",","..--..":"?","-....-":"-","-...-":"=","---...":":","-.-.-.":";","-.--.":"(","-.--.-":")","-..-.":"/",".-..-.":'"',"...-..-":"$",".----.":"'",".-.-..":"¶","..--.-":"_",".--.-.":"@","---.":"!",".-.-.":"+","........":"Error"},n={a:"k",b:"l",c:"m",d:"n",e:"o",f:"p",g:"q",h:"r",i:"s",j:"t",k:"u",l:"v",m:"w",n:"x",o:"y",p:"z",q:"æ",r:"ø",s:"å",t:"a",u:"b",v:"c",w:"d",x:"e",y:"f",z:"g","æ":"h","ø":"i","å":"j"},l={k:"a",l:"b",m:"c",n:"d",o:"e",p:"f",q:"g",r:"h",s:"i",t:"j",u:"k",v:"l",w:"m",x:"n",y:"o",z:"p","æ":"q","ø":"r","å":"s",a:"t",b:"u",c:"v",d:"w",e:"x",f:"y",g:"z",h:"æ",i:"ø",j:"å"};function a(r,a){var f,o,i,c,h,u=r.toLowerCase(),s="";if("til_morse"==a)for(f=0;f<u.length;f++){if(" "==u.charAt(f))for(;" "==u.charAt(f+1);)f++;else s+=t[u.charAt(f)];f+1<u.length&&(s+="/")}if("fra_morse"==a)for(h=u.split("//"),f=0;f<h.length;f++){for(c=h[f].split("/"),i=0;i<c.length;i++)s+=e[c[i]];s+=" "}if("til_ak"==a)for(f=0;f<u.length;f++)s+=null!=(o=n[u.charAt(f)])?o:u.charAt(f);if("fra_ak"==a)for(f=0;f<u.length;f++)s+=null!=(o=l[u.charAt(f)])?o:u.charAt(f);return s.trim()}return{decrypt:function(){return a(r,"fra_ak")},encrypt:function(){return a(r,"til_ak")}}}};module.exports=teambuilder;

},{}],2:[function(require,module,exports){
let teambuilder={};teambuilder.Alfa=function(e,r="true",n="number_raise"){function t(e){return!(e<"0")&&!(e>"9")}return n="number_fall"==n?"true":"false",{decrypt:function(){return e},encrypt:function(){return function(e){if("true"==r)var u="abcdefghijklmnopqrstuvwxyzæøå";else u="abcdefghijklmnopqrstuvxyzæøå";"true"==n&&(u=function(e){for(var r="",n=e.length-1;n>=0;n--)r+=e.charAt(n);return r}(u));var o=e;o=o.toLowerCase();var a,c="";for(count=0;count<o.length;count++)Tegn=o.charAt(count),a=u.indexOf(Tegn),0==++a?" "==Tegn?c+="   ":t(Tegn)?(c+="_",c+=Tegn):c+=Tegn:(c+=a,c+=" ");return c}(e).trim()}}},module.exports=teambuilder;

},{}],3:[function(require,module,exports){
"use strict";const morse=require("./morse"),ak=require("./ak"),alfa=require("./alfa"),backwards=require("./backwards"),passcode=require("./passcode"),semafore=require("./semafore"),frimurer=require("./frimurer");$(function(){let e=$("#language").val();$("#"+e).show(),$("#language").change(function(){console.log("Selectbox"),$("#code").text("");let e=$("#language").val();$("#morse").hide(),$("#ak").hide(),$("#alfa").hide(),$("#backwards").hide(),$("#passcode").hide(),"morse"==e?$("#morse").show():"ak"==e?$("#ak").show():"alfa"==e?$("#alfa").show():"backwards"==e?$("#backwards").show():"passcode"==e&&$("#passcode").show()}),$("#kodemaskine").submit(function(e){let a=$("#language").val();console.log("Ready kodemaskine "+a),e.preventDefault();let r=$("#textbox").val(),s="";if("morse"==a&&(s=morse.Morse(r)),"ak"==a&&(s=ak.AK(r)),"alfa"==a){let e=$("[name='number_raise_fall']:checked").val(),a=$("#no_w_number_selected:checked").val();s=alfa.Alfa(r,a,e)}if("passcode"==a){let e=$("[name='passcode']").val();s=passcode.Passcode(r,e)}if("backwards"==a){let e="true",a=String($("#remove_spaces:checked").val()),o=String($("#random_spaces:checked").val());console.log(a+o),s=backwards.Backwards(r,e,a,o)}"semafore"==a&&(s=semafore.Semafore(r)),"frimurer"==a&&(s=frimurer.Frimurer(r)),$("#code").html(s.encrypt())})});

},{"./ak":1,"./alfa":2,"./backwards":4,"./frimurer":5,"./morse":6,"./passcode":7,"./semafore":8}],4:[function(require,module,exports){
let teambuilder={};teambuilder.Backwards=function(t,e="true",r="false",n="false"){function a(t){return TranstedTekst=t,"true"==e&&(TranstedTekst=function(t){for(var e="",r=t.length-1;r>=0;r--)e+=t.charAt(r);return e}(TranstedTekst)),"true"==r&&(TranstedTekst=function(t){var e=RegExp(" ","g");return t.replace(e,"")}(TranstedTekst)),"true"==n&&(TranstedTekst=function(t,e){for(var r=new Array,n=0;t.length>0;)wlgt=Math.min(t.length,Math.floor(1+Math.random()*e)),r[n++]=t.substring(0,wlgt),t=t.substring(wlgt);return r.join(" ")}(TranstedTekst,6)),TranstedTekst}return{decrypt:function(){return t},encrypt:function(){return a(t).trim()}}},module.exports=teambuilder;

},{}],5:[function(require,module,exports){
let teambuilder={};teambuilder.Frimurer=function(r){function e(i){return!(i<"0")&&!(i>"9")}function s(i){return"å"==i||("ø"==i||("æ"==i||!(i<"a")&&!(i>"z")))}return{decrypt:function(){return r},encrypt:function(){return function(r){var t="Tom";for(t=(t=r).toLowerCase(),bogstav="abcdefghijklmnopqrstuvxyzæøå",FrimurerBogstaver=new Array("<img src='/assets/images/koder/frimurer/fri_a.gif' width='29' height='29' alt='A'>","<img src='/assets/images/koder/frimurer/fri_b.gif' width='29' height='29' alt='B'>","<img src='/assets/images/koder/frimurer/fri_c.gif' width='29' height='29' alt='C'>","<img src='/assets/images/koder/frimurer/fri_d.gif' width='29' height='29' alt='D'>","<img src='/assets/images/koder/frimurer/fri_e.gif' width='29' height='29' alt='E'>","<img src='/assets/images/koder/frimurer/fri_f.gif' width='29' height='29' alt='F'>","<img src='/assets/images/koder/frimurer/fri_g.gif' width='29' height='29' alt='G'>","<img src='/assets/images/koder/frimurer/fri_h.gif' width='29' height='29' alt='H'>","<img src='/assets/images/koder/frimurer/fri_i.gif' width='29' height='29' alt='I'>","<img src='/assets/images/koder/frimurer/fri_j.gif' width='29' height='29' alt='J'>","<img src='/assets/images/koder/frimurer/fri_k.gif' width='29' height='29' alt='K'>","<img src='/assets/images/koder/frimurer/fri_l.gif' width='29' height='29' alt='L'>","<img src='/assets/images/koder/frimurer/fri_m.gif' width='29' height='29' alt='M'>","<img src='/assets/images/koder/frimurer/fri_n.gif' width='29' height='29' alt='N'>","<img src='/assets/images/koder/frimurer/fri_o.gif' width='29' height='29' alt='O'>","<img src='/assets/images/koder/frimurer/fri_p.gif' width='29' height='29' alt='P'>","<img src='/assets/images/koder/frimurer/fri_q.gif' width='29' height='29' alt='Q'>","<img src='/assets/images/koder/frimurer/fri_r.gif' width='29' height='29' alt='R'>","<img src='/assets/images/koder/frimurer/fri_s.gif' width='29' height='29' alt='S'>","<img src='/assets/images/koder/frimurer/fri_t.gif' width='29' height='29' alt='T'>","<img src='/assets/images/koder/frimurer/fri_u.gif' width='29' height='29' alt='U'>","<img src='/assets/images/koder/frimurer/fri_v.gif' width='29' height='29' alt='V'>","<img src='/assets/images/koder/frimurer/fri_x.gif' width='29' height='29' alt='X'>","<img src='/assets/images/koder/frimurer/fri_y.gif' width='29' height='29' alt='Y'>","<img src='/assets/images/koder/frimurer/fri_z.gif' width='29' height='29' alt='Z'>","<img src='/assets/images/koder/frimurer/fri_ae.gif' width='29' height='29' alt='&AElig;'>","<img src='/assets/images/koder/frimurer/fri_oe.gif' width='29' height='29' alt='&Oslash'>","<img src='/assets/images/koder/frimurer/fri_a.gif' width='29' height='29' alt='Å1'><IMG SRC='/assets/images/koder/frimurer/fri_a.gif' width='29' height='29' alt='Å2'>"),tal="1234567890",FrimurerTal=new Array("<img src='/assets/images/koder/frimurer/fri_1.gif' width='29' height='29' alt='1'>","<img src='/assets/images/koder/frimurer/fri_2.gif' width='29' height='29' alt='2'>","<img src='/assets/images/koder/frimurer/fri_3.gif' width='29' height='29' alt='3'>","<img src='/assets/images/koder/frimurer/fri_4.gif' width='29' height='29' alt='4'>","<img src='/assets/images/koder/frimurer/fri_5.gif' width='29' height='29' alt='5'>","<img src='/assets/images/koder/frimurer/fri_6.gif' width='29' height='29' alt='6'>","<img src='/assets/images/koder/frimurer/fri_7.gif' width='29' height='29' alt='7'>","<img src='/assets/images/koder/frimurer/fri_8.gif' width='29' height='29' alt='8'>","<img src='/assets/images/koder/frimurer/fri_9.gif' width='29' height='29' alt='9'>","<img src='/assets/images/koder/frimurer/fri_f.gif' width='29' height='29' alt='0'>"),FrimurerMellemrum="<img src='/assets/images/koder/frimurer/fri_space.gif' width='29' height='29' alt='mellemrum'>",TranstedTekst="",count=0;count<t.length;count++)if(Tegn=t.charAt(count),"\n"==Tegn)TranstedTekst+="<BR>";else if(" "==Tegn)TranstedTekst+=FrimurerMellemrum;else if(e(Tegn))for(i=0;i<tal.length;i++)Tegn==tal.charAt(i)&&(TranstedTekst+=FrimurerTal[i]);else if(s(Tegn))for(i=0;i<bogstav.length;i++)Tegn==bogstav.charAt(i)&&(TranstedTekst+=FrimurerBogstaver[i]);else"\r"!=Tegn&&(TranstedTekst+="<img src='/assets/images/koder/frimurer/fri_ugyldig.gif' width='29' height='29' alt='Ugyldigt tegn'>");return TranstedTekst}(r)}}},module.exports=teambuilder;

},{}],6:[function(require,module,exports){
let teambuilder={Morse:function(r,e="false"){var t={a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",s:"...",t:"-",u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--..","æ":".-.-","ø":"---.","å":".--.-",0:"-----",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----.",".":".-.-.-",",":"--..--","?":"..--..","-":"-....-","=":"-...-",":":"---...",";":"-.-.-.","(":"-.--.",")":"-.--.-","/":"-..-.",'"':".-..-.",$:"...-..-","'":".----.","¶":".-.-..",_:"..--.-","@":".--.-.","!":"---.","+":".-.-.",Error:"........"},o={".-":"a","-...":"b","-.-.":"c","-..":"d",".":"e","..-.":"f","--.":"g","....":"h","..":"i",".---":"j","-.-":"k",".-..":"l","--":"m","-.":"n","---":"o",".--.":"p","--.-":"q",".-.":"r","...":"s","-":"t","..-":"u","...-":"v",".--":"w","-..-":"x","-.--":"y","--..":"z",".-.-":"æ","---.":"ø",".--.-":"å","-----":"0",".----":"1","..---":"2","...--":"3","....-":"4",".....":"5","-....":"6","--...":"7","---..":"8","----.":"9",".-.-.-":".","--..--":",","..--..":"?","-....-":"-","-...-":"=","---...":":","-.-.-.":";","-.--.":"(","-.--.-":")","-..-.":"/",".-..-.":'"',"...-..-":"$",".----.":"'",".-.-..":"¶","..--.-":"_",".--.-.":"@","---.":"!",".-.-.":"+","........":"Error"};function n(r,e){var n,f,i,l,a=r.toLowerCase(),s="";if("til_morse"==e)for(n=0;n<a.length;n++){if(" "==a.charAt(n))for(;" "==a.charAt(n+1);)n++;else s+=t[a.charAt(n)];n+1<a.length&&(s+="/")}if("fra_morse"==e)for(l=a.split("//"),n=0;n<l.length;n++){for(i=l[n].split("/"),f=0;f<i.length;f++)s+=o[i[f]];s+=" "}return s.trim()}return{decrypt:function(){return n(r,"fra_morse")},encrypt:function(){return n(r,"til_morse")}}}};module.exports=teambuilder;

},{}],7:[function(require,module,exports){
let teambuilder={};teambuilder.Passcode=function(t,e="SPEJD"){function n(t){return"å"==t||("ø"==t||("æ"==t||!(t<"a")&&!(t>"z")))}return{decrypt:function(){return t},encrypt:function(){return function(t,e){var c=t,o=e;o=o.toLowerCase();var r="",a=0,u="abcdefghijklmnopqrstuvxyzæøå",g="1234567890 .,?!-:@#\n";for(count=0;count<o.length;count++)n(o.charAt(count))||(a+=1);if(a>0)r="Fejl : Kodeordet må kun indeholde bogstaver!";else{for(count=0;count<o.length;count++){Tegn=o.charAt(count);var l=new RegExp(Tegn,"g");o.match(l).length>1&&(a+=1),u=u.replace(Tegn,"")}if(a>0)r="Fejl : Det samme bogstav må max være i kodeordet en gang!";else{var s=o.concat(u),d=s.substring(0,14),f=s.substring(14,29),h=d.toUpperCase(),m=f.toUpperCase(),p=d.concat(f),b=(p=(p=p.concat(h)).concat(m)).concat(g),v=(p=(p=(p=f.concat(d)).concat(m)).concat(h)).concat(g);for(count=0;count<c.length;count++)for(Tegn=c.charAt(count),i=0;i<b.length;i++)if(Tegn==b.charAt(i)){r+=v.charAt(i);break}}}return r}(t,e)}}},module.exports=teambuilder;

},{}],8:[function(require,module,exports){
let teambuilder={};teambuilder.Semafore=function(e){function s(e){return!(e<"0")&&!(e>"9")}function t(e){return"å"==e||("ø"==e||("æ"==e||!(e<"a")&&!(e>"z")))}return{decrypt:function(){return e},encrypt:function(){return function(e){var a="Tekst",g="Tom",r="<img src='/assets/images/koder/semafor/c.png' width='50' height='50' alt='C'><img src='/assets/images/koder/semafor/c.png' width='50' height='50' alt='C'><img src='/assets/images/koder/semafor/c.png' width='50' height='50' alt='C'>";for(g=(g=e).toLowerCase(),bogstav="abcdefghijklmnoprstuvwyæøå",SemaforeBogstaver=new Array("<img src='/assets/images/koder/semafor/a.png' width='50' height='50' alt='A'>","<img src='/assets/images/koder/semafor/b.png' width='50' height='50' alt='B'>","<img src='/assets/images/koder/semafor/c.png' width='50' height='50' alt='C'>","<img src='/assets/images/koder/semafor/d.png' width='50' height='50' alt='D'>","<img src='/assets/images/koder/semafor/e.png' width='50' height='50' alt='E'>","<img src='/assets/images/koder/semafor/f.png' width='50' height='50' alt='F'>","<img src='/assets/images/koder/semafor/g.png' width='50' height='50' alt='G'>","<img src='/assets/images/koder/semafor/h.png' width='50' height='50' alt='H'>","<img src='/assets/images/koder/semafor/i.png' width='50' height='50' alt='I'>","<img src='/assets/images/koder/semafor/j.png' width='50' height='50' alt='J'>","<img src='/assets/images/koder/semafor/k.png' width='50' height='50' alt='K'>","<img src='/assets/images/koder/semafor/l.png' width='50' height='50' alt='L'>","<img src='/assets/images/koder/semafor/m.png' width='50' height='50' alt='M'>","<img src='/assets/images/koder/semafor/n.png' width='50' height='50' alt='N'>","<img src='/assets/images/koder/semafor/o.png' width='50' height='50' alt='O'>","<img src='/assets/images/koder/semafor/p.png' width='50' height='50' alt='P'>","<img src='/assets/images/koder/semafor/r.png' width='50' height='50' alt='R'>","<img src='/assets/images/koder/semafor/s.png' width='50' height='50' alt='S'>","<img src='/assets/images/koder/semafor/t.png' width='50' height='50' alt='T'>","<img src='/assets/images/koder/semafor/u.png' width='50' height='50' alt='U'>","<img src='/assets/images/koder/semafor/v.png' width='50' height='50' alt='V'>","<img src='/assets/images/koder/semafor/v.png' width='50' height='50' alt='W/V'>","<img src='/assets/images/koder/semafor/y.png' width='50' height='50' alt='Y'>","<img src='/assets/images/koder/semafor/a.png' width='50' height='50' alt='Æ,1'><img src='/assets/images/koder/semafor/e.png' width='50' height='50' NAME='Æ,2'>","<img src='/assets/images/koder/semafor/o.png' width='50' height='50' alt='Ø,1'><img src='/assets/images/koder/semafor/e.png' width='50' height='50' NAME='Ø,2'>","<img src='/assets/images/koder/semafor/a.png' width='50' height='50' alt='Å,1'><img src='/assets/images/koder/semafor/a.png' width='50' height='50' NAME='Å,2'>"),tal="1234567890",SemaforeTal=new Array("<img src='/assets/images/koder/semafor/a.png' width='50' height='50' alt='1'>","<img src='/assets/images/koder/semafor/b.png' width='50' height='50' alt='2'>","<img src='/assets/images/koder/semafor/c.png' width='50' height='50' alt='3'>","<img src='/assets/images/koder/semafor/d.png' width='50' height='50' alt='4'>","<img src='/assets/images/koder/semafor/e.png' width='50' height='50' alt='5'>","<img src='/assets/images/koder/semafor/f.png' width='50' height='50' alt='6'>","<img src='/assets/images/koder/semafor/g.png' width='50' height='50' alt='7'>","<img src='/assets/images/koder/semafor/h.png' width='50' height='50' alt='8'>","<img src='/assets/images/koder/semafor/i.png' width='50' height='50' alt='9'>","<img src='/assets/images/koder/semafor/k.png' width='50' height='50' alt='0'>"),semaforeMellemrum="<img src='/assets/images/koder/semafor/space.png' width='50' height='50' alt='mellemrum'>",TranstedTekst="",count=0;count<g.length;count++)if(Tegn=g.charAt(count)," "==Tegn)TranstedTekst+=semaforeMellemrum;else if(s(Tegn)){for("Tekst"==a&&(TranstedTekst+=r),i=0;i<tal.length;i++)Tegn==tal.charAt(i)&&(TranstedTekst+=SemaforeTal[i]);a="Tal"}else if(t(Tegn)){for("Tal"==a&&(TranstedTekst+=r),i=0;i<bogstav.length;i++)Tegn==bogstav.charAt(i)&&(TranstedTekst+=SemaforeBogstaver[i]);a="Tekst"}else"\n"!=Tegn&&"\r"!=Tegn&&(TranstedTekst+="<img src='/assets/images/koder/semafor/ugyldig.png' width='50' height='50' alt='Ugyldigt tegn'>");return"Tal"==a&&(TranstedTekst+=r),TranstedTekst+="<img src='/assets/images/koder/semafor/s.png' width='50' height='50' alt='S'><img src='/assets/images/koder/semafor/s.png' width='50' height='50' alt='S'><img src='/assets/images/koder/semafor/s.png' width='50' height='50' alt='S'>"}(e)}}},module.exports=teambuilder;

},{}]},{},[3]);