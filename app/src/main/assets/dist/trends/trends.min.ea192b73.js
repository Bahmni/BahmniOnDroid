!function(){function n(n,t){return t>n?-1:n>t?1:n>=t?0:0/0}function t(n){return null===n?0/0:+n}function e(n){return!isNaN(n)}function r(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function u(n){return n.length}function i(n){for(var t=1;n*t%1;)t*=10;return t}function o(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function a(){this._=Object.create(null)}function c(n){return(n+="")===la||n[0]===sa?sa+n:n}function l(n){return(n+="")[0]===sa?n.slice(1):n}function s(n){return c(n)in this._}function f(n){return(n=c(n))in this._&&delete this._[n]}function h(){var n=[];for(var t in this._)n.push(l(t));return n}function g(){var n=0;for(var t in this._)++n;return n}function p(){for(var n in this._)return!1;return!0}function v(){this._=Object.create(null)}function d(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function m(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=fa.length;r>e;++e){var u=fa[e]+t;if(u in n)return u}}function y(){}function x(){}function M(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new a;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function _(){Bo.event.preventDefault()}function b(){for(var n,t=Bo.event;n=t.sourceEvent;)t=n;return t}function w(n){for(var t=new x,e=0,r=arguments.length;++e<r;)t[arguments[e]]=M(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=Bo.event;u.target=n,Bo.event=u,t[u.type].apply(e,r)}finally{Bo.event=i}}},t}function S(n){return ga(n,ya),n}function k(n){return"function"==typeof n?n:function(){return pa(n,this)}}function E(n){return"function"==typeof n?n:function(){return va(n,this)}}function A(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=Bo.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function C(n){return n.trim().replace(/\s+/g," ")}function N(n){return new RegExp("(?:^|\\s+)"+Bo.requote(n)+"(?:\\s+|$)","g")}function z(n){return(n+"").trim().split(/^|\s+/)}function L(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=z(n).map(T);var u=n.length;return"function"==typeof t?r:e}function T(n){var t=N(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",C(u+" "+n))):e.setAttribute("class",C(u.replace(t," ")))}}function q(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function R(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function D(n){return"function"==typeof n?n:(n=Bo.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,n)}}function P(n){return{__data__:n}}function U(n){return function(){return ma(this,n)}}function j(t){return arguments.length||(t=n),function(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}}function F(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function H(n){return ga(n,Ma),n}function O(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function Y(){var n=this.__transition__;n&&++n.active}function I(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,Jo(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+Bo.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),c=Z;a>0&&(n=n.slice(0,a));var l=ba.get(n);return l&&(n=l,c=V),a?t?u:r:t?y:i}function Z(n,t){return function(e){var r=Bo.event;Bo.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{Bo.event=r}}}function V(n,t){var e=Z(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function X(){var n=".dragsuppress-"+ ++Sa,t="click"+n,e=Bo.select(Qo).on("touchmove"+n,_).on("dragstart"+n,_).on("selectstart"+n,_);if(wa){var r=Ko.style,u=r[wa];r[wa]="none"}return function(i){function o(){e.on(t,null)}e.on(n,null),wa&&(r[wa]=u),i&&(e.on(t,function(){_(),o()},!0),setTimeout(o,0))}}function $(n,t){t.changedTouches&&(t=t.changedTouches[0]);var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>ka&&(Qo.scrollX||Qo.scrollY)){e=Bo.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var u=e[0][0].getScreenCTM();ka=!(u.f||u.e),e.remove()}return ka?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var i=n.getBoundingClientRect();return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}function B(){return Bo.event.changedTouches[0].identifier}function W(){return Bo.event.target}function J(){return Qo}function G(n){return n>0?1:0>n?-1:0}function K(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function Q(n){return n>1?0:-1>n?Ea:Math.acos(n)}function nt(n){return n>1?Ca:-1>n?-Ca:Math.asin(n)}function tt(n){return((n=Math.exp(n))-1/n)/2}function et(n){return((n=Math.exp(n))+1/n)/2}function rt(n){return((n=Math.exp(2*n))-1)/(n+1)}function ut(n){return(n=Math.sin(n/2))*n}function it(){}function ot(n,t,e){return this instanceof ot?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof ot?new ot(n.h,n.s,n.l):Mt(""+n,_t,ot):new ot(n,t,e)}function at(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,new dt(u(n+120),u(n),u(n-120))}function ct(n,t,e){return this instanceof ct?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof ct?new ct(n.h,n.c,n.l):n instanceof st?ht(n.l,n.a,n.b):ht((n=bt((n=Bo.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new ct(n,t,e)}function lt(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new st(e,Math.cos(n*=La)*t,Math.sin(n)*t)}function st(n,t,e){return this instanceof st?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof st?new st(n.l,n.a,n.b):n instanceof ct?lt(n.h,n.c,n.l):bt((n=dt(n)).r,n.g,n.b):new st(n,t,e)}function ft(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=gt(u)*Ya,r=gt(r)*Ia,i=gt(i)*Za,new dt(vt(3.2404542*u-1.5371385*r-.4985314*i),vt(-.969266*u+1.8760108*r+.041556*i),vt(.0556434*u-.2040259*r+1.0572252*i))}function ht(n,t,e){return n>0?new ct(Math.atan2(e,t)*Ta,Math.sqrt(t*t+e*e),n):new ct(0/0,0/0,n)}function gt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function pt(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function vt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function dt(n,t,e){return this instanceof dt?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof dt?new dt(n.r,n.g,n.b):Mt(""+n,dt,at):new dt(n,t,e)}function mt(n){return new dt(n>>16,255&n>>8,255&n)}function yt(n){return mt(n)+""}function xt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function Mt(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(St(u[0]),St(u[1]),St(u[2]))}return(i=$a.get(n))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&i)>>4,o=o>>4|o,a=240&i,a=a>>4|a,c=15&i,c=c<<4|c):7===n.length&&(o=(16711680&i)>>16,a=(65280&i)>>8,c=255&i)),t(o,a,c))}function _t(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),new ot(r,u,c)}function bt(n,t,e){n=wt(n),t=wt(t),e=wt(e);var r=pt((.4124564*n+.3575761*t+.1804375*e)/Ya),u=pt((.2126729*n+.7151522*t+.072175*e)/Ia),i=pt((.0193339*n+.119192*t+.9503041*e)/Za);return st(116*u-16,500*(r-u),200*(u-i))}function wt(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function St(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function kt(n){return"function"==typeof n?n:function(){return n}}function Et(n){return n}function At(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Ct(t,e,n,r)}}function Ct(n,t,e,r){function u(){var n,t=c.status;if(!t&&zt(c)||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return o.error.call(i,r),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=Bo.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,l=null;return!Qo.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=Bo.event;Bo.event=n;try{o.progress.call(i,c)}finally{Bo.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(l=n,i):l},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(Jo(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var s in a)c.setRequestHeader(s,a[s]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=l&&(c.responseType=l),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},Bo.rebind(i,o,"on"),null==r?i:i.get(Nt(r))}function Nt(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function zt(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function Lt(){var n=Tt(),t=qt()-n;t>24?(isFinite(t)&&(clearTimeout(Ga),Ga=setTimeout(Lt,t)),Ja=0):(Ja=1,Qa(Lt))}function Tt(){var n=Date.now();for(Ka=Ba;Ka;)n>=Ka.t&&(Ka.f=Ka.c(n-Ka.t)),Ka=Ka.n;return n}function qt(){for(var n,t=Ba,e=1/0;t;)t.f?t=n?n.n=t.n:Ba=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return Wa=n,e}function Rt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Dt(n,t){var e=Math.pow(10,3*ca(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Pt(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r&&e?function(n,t){for(var u=n.length,i=[],o=0,a=r[0],c=0;u>0&&a>0&&(c+a+1>t&&(a=Math.max(1,t-c)),i.push(n.substring(u-=a,u+a)),!((c+=a+1)>t));)a=r[o=(o+1)%r.length];return i.reverse().join(e)}:Et;return function(n){var e=tc.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"-",c=e[4]||"",l=e[5],s=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1,y=!0;switch(h&&(h=+h.substring(1)),(l||"0"===r&&"="===o)&&(l=r="0",o="="),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":y=!1;case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=ec.get(g)||Ut;var x=l&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===a?"":a;if(0>p){var c=Bo.formatPrefix(n,h);n=c.scale(n),e=c.symbol+d}else n*=p;n=g(n,h);var M,_,b=n.lastIndexOf(".");if(0>b){var w=y?n.lastIndexOf("e"):-1;0>w?(M=n,_=""):(M=n.substring(0,w),_=n.substring(w))}else M=n.substring(0,b),_=t+n.substring(b+1);!l&&f&&(M=i(M,1/0));var S=v.length+M.length+_.length+(x?0:u.length),k=s>S?new Array(S=s-S+1).join(r):"";return x&&(M=i(k+M,k.length?s-_.length:1/0)),u+=v,n=M+_,("<"===o?u+n+k:">"===o?k+u+n:"^"===o?k.substring(0,S>>=1)+u+n+k.substring(S):u+(x?n:k+n))+e}}}function Ut(n){return n+""}function jt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Ft(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new uc(e-1)),1),e}function i(n,e){return t(n=new uc(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{uc=jt;var r=new jt;return r._=n,o(r,t,e)}finally{uc=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Ht(n);return c.floor=c,c.round=Ht(r),c.ceil=Ht(u),c.offset=Ht(i),c.range=a,n}function Ht(n){return function(t,e){try{uc=jt;var r=new jt;return r._=t,n(r,e)._}finally{uc=Date}}}function Ot(n){function t(n){function t(t){for(var e,u,i,o=[],a=-1,c=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.slice(c,a)),null!=(u=oc[e=n.charAt(++a)])&&(e=n.charAt(++a)),(i=C[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),o.push(e),c=a+1);return o.push(n.slice(c,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&uc!==jt,o=new(i?jt:uc);return"j"in r?o.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+(0|r.Z/100),r.M+r.Z%100,r.S,r.L),i?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,o,a=0,c=t.length,l=e.length;c>a;){if(r>=l)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=N[o in oc?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){b.lastIndex=0;var r=b.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){M.lastIndex=0;var r=M.exec(t.slice(e));return r?(n.w=_.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){E.lastIndex=0;var r=E.exec(t.slice(e));return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,C.c.toString(),t,r)}function c(n,t,r){return e(n,C.x.toString(),t,r)}function l(n,t,r){return e(n,C.X.toString(),t,r)}function s(n,t,e){var r=x.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{uc=jt;var t=new uc;return t._=n,r(t)}finally{uc=Date}}var r=t(n);return e.parse=function(n){try{uc=jt;var t=r.parse(n);return t&&t._}finally{uc=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ae;var x=Bo.map(),M=It(v),_=Zt(v),b=It(d),w=Zt(d),S=It(m),k=Zt(m),E=It(y),A=Zt(y);p.forEach(function(n,t){x.set(n.toLowerCase(),t)});var C={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return Yt(n.getDate(),t,2)},e:function(n,t){return Yt(n.getDate(),t,2)},H:function(n,t){return Yt(n.getHours(),t,2)},I:function(n,t){return Yt(n.getHours()%12||12,t,2)},j:function(n,t){return Yt(1+rc.dayOfYear(n),t,3)},L:function(n,t){return Yt(n.getMilliseconds(),t,3)},m:function(n,t){return Yt(n.getMonth()+1,t,2)},M:function(n,t){return Yt(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return Yt(n.getSeconds(),t,2)},U:function(n,t){return Yt(rc.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Yt(rc.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return Yt(n.getFullYear()%100,t,2)},Y:function(n,t){return Yt(n.getFullYear()%1e4,t,4)},Z:ie,"%":function(){return"%"}},N={a:r,A:u,b:i,B:o,c:a,d:Qt,e:Qt,H:te,I:te,j:ne,L:ue,m:Kt,M:ee,p:s,S:re,U:Xt,w:Vt,W:$t,x:c,X:l,y:Wt,Y:Bt,Z:Jt,"%":oe};return t}function Yt(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function It(n){return new RegExp("^(?:"+n.map(Bo.requote).join("|")+")","i")}function Zt(n){for(var t=new a,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Vt(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Xt(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function $t(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Bt(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Wt(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+2));return r?(n.y=Gt(+r[0]),e+r[0].length):-1}function Jt(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Gt(n){return n+(n>68?1900:2e3)}function Kt(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Qt(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function ne(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function te(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function ee(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function re(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ue(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ie(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=0|ca(t)/60,u=ca(t)%60;return e+Yt(r,"0",2)+Yt(u,"0",2)}function oe(n,t,e){cc.lastIndex=0;var r=cc.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ae(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function ce(){}function le(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function se(n,t){n&&hc.hasOwnProperty(n.type)&&hc[n.type](n,t)}function fe(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function he(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)fe(n[e],t,1);t.polygonEnd()}function ge(){function n(n,t){n*=La,t=t*La/2+Ea/4;var e=n-r,o=e>=0?1:-1,a=o*e,c=Math.cos(t),l=Math.sin(t),s=i*l,f=u*c+s*Math.cos(a),h=s*o*Math.sin(a);pc.add(Math.atan2(h,f)),r=n,u=c,i=l}var t,e,r,u,i;vc.point=function(o,a){vc.point=n,r=(t=o)*La,u=Math.cos(a=(e=a)*La/2+Ea/4),i=Math.sin(a)},vc.lineEnd=function(){n(t,e)}}function pe(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function ve(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function de(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function me(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function ye(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function xe(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Me(n){return[Math.atan2(n[1],n[0]),nt(n[2])]}function _e(n,t){return ca(n[0]-t[0])<Na&&ca(n[1]-t[1])<Na}function be(n,t){n*=La;var e=Math.cos(t*=La);we(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function we(n,t,e){++dc,yc+=(n-yc)/dc,xc+=(t-xc)/dc,Mc+=(e-Mc)/dc}function Se(){function n(n,u){n*=La;var i=Math.cos(u*=La),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),l=Math.atan2(Math.sqrt((l=e*c-r*a)*l+(l=r*o-t*c)*l+(l=t*a-e*o)*l),t*o+e*a+r*c);mc+=l,_c+=l*(t+(t=o)),bc+=l*(e+(e=a)),wc+=l*(r+(r=c)),we(t,e,r)}var t,e,r;Ac.point=function(u,i){u*=La;var o=Math.cos(i*=La);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),Ac.point=n,we(t,e,r)}}function ke(){Ac.point=be}function Ee(){function n(n,t){n*=La;var e=Math.cos(t*=La),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),l=u*c-i*a,s=i*o-r*c,f=r*a-u*o,h=Math.sqrt(l*l+s*s+f*f),g=r*o+u*a+i*c,p=h&&-Q(g)/h,v=Math.atan2(h,g);Sc+=p*l,kc+=p*s,Ec+=p*f,mc+=v,_c+=v*(r+(r=o)),bc+=v*(u+(u=a)),wc+=v*(i+(i=c)),we(r,u,i)}var t,e,r,u,i;Ac.point=function(o,a){t=o,e=a,Ac.point=n,o*=La;var c=Math.cos(a*=La);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),we(r,u,i)},Ac.lineEnd=function(){n(t,e),Ac.lineEnd=ke,Ac.point=be}}function Ae(){return!0}function Ce(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(_e(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return u.lineEnd(),void 0}var c=new ze(e,n,null,!0),l=new ze(e,null,c,!1);c.o=l,i.push(c),o.push(l),c=new ze(r,n,null,!1),l=new ze(r,null,c,!0),c.o=l,i.push(c),o.push(l)}}),o.sort(t),Ne(i),Ne(o),i.length){for(var a=0,c=e,l=o.length;l>a;++a)o[a].e=c=!c;for(var s,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;s=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,l=s.length;l>a;++a)u.point((f=s[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){s=g.p.z;for(var a=s.length-1;a>=0;--a)u.point((f=s[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,s=g.z,p=!p}while(!g.v);u.lineEnd()}}}function Ne(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function ze(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Le(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function l(){y.point=o,d.lineEnd()}function s(n,t){v.push([n,t]);var e=u(n,t);M.point(e[0],e[1])}function f(){M.lineStart(),v=[]}function h(){s(v[0][0],v[0][1]),M.lineEnd();var n,t=M.clean(),e=x.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,o=-1;if(r>0){for(_||(i.polygonStart(),_=!0),i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Te))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:l,polygonStart:function(){y.point=s,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=l,g=Bo.merge(g);var n=je(m,p);g.length?(_||(i.polygonStart(),_=!0),Ce(g,Re,n,e,i)):n&&(_||(i.polygonStart(),_=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),_&&(i.polygonEnd(),_=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},x=qe(),M=t(x),_=!1;return y}}function Te(n){return n.length>1}function qe(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:y,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Re(n,t){return((n=n.x)[0]<0?n[1]-Ca-Na:Ca-n[1])-((t=t.x)[0]<0?t[1]-Ca-Na:Ca-t[1])}function De(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?Ea:-Ea,c=ca(i-e);ca(c-Ea)<Na?(n.point(e,r=(r+o)/2>0?Ca:-Ca),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=Ea&&(ca(e-u)<Na&&(e-=u*Na),ca(i-a)<Na&&(i-=a*Na),r=Pe(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function Pe(n,t,e,r){var u,i,o=Math.sin(n-e);return ca(o)>Na?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function Ue(n,t,e,r){var u;if(null==n)u=e*Ca,r.point(-Ea,u),r.point(0,u),r.point(Ea,u),r.point(Ea,0),r.point(Ea,-u),r.point(0,-u),r.point(-Ea,-u),r.point(-Ea,0),r.point(-Ea,u);else if(ca(n[0]-t[0])>Na){var i=n[0]<t[0]?Ea:-Ea;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function je(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;pc.reset();for(var a=0,c=t.length;c>a;++a){var l=t[a],s=l.length;if(s)for(var f=l[0],h=f[0],g=f[1]/2+Ea/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===s&&(d=0),n=l[d];var m=n[0],y=n[1]/2+Ea/4,x=Math.sin(y),M=Math.cos(y),_=m-h,b=_>=0?1:-1,w=b*_,S=w>Ea,k=p*x;if(pc.add(Math.atan2(k*b*Math.sin(w),v*M+k*Math.cos(w))),i+=S?_+b*Aa:_,S^h>=e^m>=e){var E=de(pe(f),pe(n));xe(E);var A=de(u,E);xe(A);var C=(S^_>=0?-1:1)*nt(A[2]);(r>C||r===C&&(E[0]||E[1]))&&(o+=S^_>=0?1:-1)}if(!d++)break;h=m,p=x,v=M,f=n}}return(-Na>i||Na>i&&0>pc)^1&o}function Fe(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,l,s;return{lineStart:function(){l=c=!1,s=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?Ea:-Ea),h):0;if(!e&&(l=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(_e(e,g)||_e(p,g))&&(p[0]+=Na,p[1]+=Na,v=t(p[0],p[1]))),v!==c)s=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(s=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&_e(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return s|(l&&c)<<1}}}function r(n,t,e){var r=pe(n),u=pe(t),o=[1,0,0],a=de(r,u),c=ve(a,a),l=a[0],s=c-l*l;if(!s)return!e&&n;var f=i*c/s,h=-i*l/s,g=de(o,a),p=ye(o,f),v=ye(a,h);me(p,v);var d=g,m=ve(p,d),y=ve(d,d),x=m*m-y*(ve(p,p)-1);if(!(0>x)){var M=Math.sqrt(x),_=ye(d,(-m-M)/y);if(me(_,p),_=Me(_),!e)return _;var b,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(b=w,w=S,S=b);var A=S-w,C=ca(A-Ea)<Na,N=C||Na>A;if(!C&&k>E&&(b=k,k=E,E=b),N?C?k+E>0^_[1]<(ca(_[0]-w)<Na?k:E):k<=_[1]&&_[1]<=E:A>Ea^(w<=_[0]&&_[0]<=S)){var z=ye(d,(-m+M)/y);return me(z,p),[_,Me(z)]}}}function u(t,e){var r=o?n:Ea-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=ca(i)>Na,c=gr(n,6*La);return Le(t,e,c,o?[0,-n]:[-Ea,n-Ea])}function He(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,l=o.y,s=a.x,f=a.y,h=0,g=1,p=s-c,v=f-l;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-l,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-l,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:l+h*v}),1>g&&(u.b={x:c+g*p,y:l+g*v}),u}}}}}}function Oe(n,t,e,r){function u(r,u){return ca(r[0]-n)<Na?u>0?0:3:ca(r[0]-e)<Na?u>0?2:1:ca(r[1]-t)<Na?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=d[u],c=a.length,l=a[0];c>o;++o)i=a[o],l[1]<=r?i[1]>r&&K(l,i,n)>0&&++t:i[1]<=r&&K(l,i,n)<0&&--t,l=i;return 0!==t}function l(i,a,c,l){var s=0,f=0;if(null==i||(s=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do l.point(0===s||3===s?n:e,s>1?r:t);while((s=(s+c+4)%4)!==f)}else l.point(a[0],a[1])}function s(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){s(n,t)&&a.point(n,t)}function h(){N.point=p,d&&d.push(m=[]),S=!0,w=!1,_=b=0/0}function g(){v&&(p(y,x),M&&w&&A.rejoin(),v.push(A.buffer())),N.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-Nc,Math.min(Nc,n)),t=Math.max(-Nc,Math.min(Nc,t));var e=s(n,t);if(d&&m.push([n,t]),S)y=n,x=t,M=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:_,y:b},b:{x:n,y:t}};C(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}_=n,b=t,w=e}var v,d,m,y,x,M,_,b,w,S,k,E=a,A=qe(),C=He(n,t,e,r),N={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=Bo.merge(v);var t=c([n,r]),e=k&&t,u=v.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),l(null,null,1,a),a.lineEnd()),u&&Ce(v,i,t,l,a),a.polygonEnd()),v=d=m=null}};return N}}function Ye(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function Ie(n){var t=0,e=Ea/3,r=ir(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*Ea/180,e=n[1]*Ea/180):[180*(t/Ea),180*(e/Ea)]},u}function Ze(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,nt((i-(n*n+e*e)*u*u)/(2*u))]},e}function Ve(){function n(n,t){Lc+=u*n-r*t,r=n,u=t}var t,e,r,u;Pc.point=function(i,o){Pc.point=n,t=r=i,e=u=o},Pc.lineEnd=function(){n(t,e)}}function Xe(n,t){Tc>n&&(Tc=n),n>Rc&&(Rc=n),qc>t&&(qc=t),t>Dc&&(Dc=t)}function $e(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=Be(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=Be(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Be(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function We(n,t){yc+=n,xc+=t,++Mc}function Je(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);_c+=o*(t+n)/2,bc+=o*(e+r)/2,wc+=o,We(t=n,e=r)}var t,e;jc.point=function(r,u){jc.point=n,We(t=r,e=u)}}function Ge(){jc.point=We}function Ke(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);_c+=o*(r+n)/2,bc+=o*(u+t)/2,wc+=o,o=u*n-r*t,Sc+=o*(r+n),kc+=o*(u+t),Ec+=3*o,We(r=n,u=t)}var t,e,r,u;jc.point=function(i,o){jc.point=n,We(t=r=i,e=u=o)},jc.lineEnd=function(){n(t,e)}}function Qe(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,o,0,Aa)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:y};return a}function nr(n){function t(n){return(a?r:e)(n)}function e(t){return rr(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){x=0/0,S.point=i,t.lineStart()}function i(e,r){var i=pe([e,r]),o=n(e,r);u(x,M,y,_,b,w,x=o[0],M=o[1],y=e,_=i[0],b=i[1],w=i[2],a,t),t.point(x,M)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=l,S.lineEnd=s}function l(n,t){i(f=n,h=t),g=x,p=M,v=_,d=b,m=w,S.point=i}function s(){u(x,M,y,_,b,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,x,M,_,b,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,l,s,f,h,g,p,v,d,m){var y=s-t,x=f-e,M=y*y+x*x;if(M>4*i&&d--){var _=a+g,b=c+p,w=l+v,S=Math.sqrt(_*_+b*b+w*w),k=Math.asin(w/=S),E=ca(ca(w)-1)<Na||ca(r-h)<Na?(r+h)/2:Math.atan2(b,_),A=n(E,k),C=A[0],N=A[1],z=C-t,L=N-e,T=x*z-y*L;
(T*T/M>i||ca((y*z+x*L)/M-.5)>.3||o>a*g+c*p+l*v)&&(u(t,e,r,a,c,l,C,N,E,_/=S,b/=S,w,d,m),m.point(C,N),u(C,N,E,_,b,w,s,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*La),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function tr(n){var t=nr(function(t,e){return n([t*Ta,e*Ta])});return function(n){return or(t(n))}}function er(n){this.stream=n}function rr(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ur(n){return ir(function(){return n})()}function ir(n){function t(n){return n=a(n[0]*La,n[1]*La),[n[0]*h+c,l-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(l-n[1])/h),n&&[n[0]*Ta,n[1]*Ta]}function r(){a=Ye(o=lr(m,y,x),i);var n=i(v,d);return c=g-n[0]*h,l=p+n[1]*h,u()}function u(){return s&&(s.valid=!1,s=null),t}var i,o,a,c,l,s,f=nr(function(n,t){return n=i(n,t),[n[0]*h+c,l-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,y=0,x=0,M=Cc,_=Et,b=null,w=null;return t.stream=function(n){return s&&(s.valid=!1),s=or(M(o,f(_(n)))),s.valid=!0,s},t.clipAngle=function(n){return arguments.length?(M=null==n?(b=n,Cc):Fe((b=+n)*La),u()):b},t.clipExtent=function(n){return arguments.length?(w=n,_=n?Oe(n[0][0],n[0][1],n[1][0],n[1][1]):Et,u()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*La,d=n[1]%360*La,r()):[v*Ta,d*Ta]},t.rotate=function(n){return arguments.length?(m=n[0]%360*La,y=n[1]%360*La,x=n.length>2?n[2]%360*La:0,r()):[m*Ta,y*Ta,x*Ta]},Bo.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function or(n){return rr(n,function(t,e){n.point(t*La,e*La)})}function ar(n,t){return[n,t]}function cr(n,t){return[n>Ea?n-Aa:-Ea>n?n+Aa:n,t]}function lr(n,t,e){return n?t||e?Ye(fr(n),hr(t,e)):fr(n):t||e?hr(t,e):cr}function sr(n){return function(t,e){return t+=n,[t>Ea?t-Aa:-Ea>t?t+Aa:t,e]}}function fr(n){var t=sr(n);return t.invert=sr(-n),t}function hr(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*r+a*u;return[Math.atan2(c*i-s*o,a*r-l*u),nt(s*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*i-c*o;return[Math.atan2(c*i+l*o,a*r+s*u),nt(s*r-a*u)]},e}function gr(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=pr(e,u),i=pr(e,i),(o>0?i>u:u>i)&&(u+=o*Aa)):(u=n+o*Aa,i=n-.5*c);for(var l,s=u;o>0?s>i:i>s;s-=c)a.point((l=Me([e,-r*Math.cos(s),-r*Math.sin(s)]))[0],l[1])}}function pr(n,t){var e=pe(t);e[0]-=n,xe(e);var r=Q(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Na)%(2*Math.PI)}function vr(n,t,e){var r=Bo.range(n,t-Na,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function dr(n,t,e){var r=Bo.range(n,t-Na,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function mr(n){return n.source}function yr(n){return n.target}function xr(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),l=u*Math.sin(n),s=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(ut(r-t)+u*o*ut(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*s,u=e*l+t*f,o=e*i+t*a;return[Math.atan2(u,r)*Ta,Math.atan2(o,Math.sqrt(r*r+u*u))*Ta]}:function(){return[n*Ta,t*Ta]};return p.distance=h,p}function Mr(){function n(n,u){var i=Math.sin(u*=La),o=Math.cos(u),a=ca((n*=La)-t),c=Math.cos(a);Fc+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;Hc.point=function(u,i){t=u*La,e=Math.sin(i*=La),r=Math.cos(i),Hc.point=n},Hc.lineEnd=function(){Hc.point=Hc.lineEnd=y}}function _r(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function br(n,t){function e(n,t){o>0?-Ca+Na>t&&(t=-Ca+Na):t>Ca-Na&&(t=Ca-Na);var e=o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(Ea/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=G(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-Ca]},e):Sr}function wr(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return ca(u)<Na?ar:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-G(u)*Math.sqrt(n*n+e*e)]},e)}function Sr(n,t){return[n,Math.log(Math.tan(Ea/4+t/2))]}function kr(n){var t,e=ur(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=Ea*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Er(n,t){return[Math.log(Math.tan(Ea/4+t/2)),-n]}function Ar(n){return n[0]}function Cr(n){return n[1]}function Nr(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&K(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function zr(n,t){return n[0]-t[0]||n[1]-t[1]}function Lr(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Tr(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],l=e[1],s=t[1]-c,f=r[1]-l,h=(a*(c-l)-f*(u-i))/(f*o-a*s);return[u+h*o,c+h*s]}function qr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Rr(){tu(this),this.edge=this.site=this.circle=null}function Dr(n){var t=Kc.pop()||new Rr;return t.site=n,t}function Pr(n){Xr(n),Wc.remove(n),Kc.push(n),tu(n)}function Ur(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];Pr(n);for(var c=i;c.circle&&ca(e-c.circle.x)<Na&&ca(r-c.circle.cy)<Na;)i=c.P,a.unshift(c),Pr(c),c=i;a.unshift(c),Xr(c);for(var l=o;l.circle&&ca(e-l.circle.x)<Na&&ca(r-l.circle.cy)<Na;)o=l.N,a.push(l),Pr(l),l=o;a.push(l),Xr(l);var s,f=a.length;for(s=1;f>s;++s)l=a[s],c=a[s-1],Kr(l.edge,c.site,l.site,u);c=a[0],l=a[f-1],l.edge=Jr(c.site,l.site,null,u),Vr(c),Vr(l)}function jr(n){for(var t,e,r,u,i=n.x,o=n.y,a=Wc._;a;)if(r=Fr(a,o)-i,r>Na)a=a.L;else{if(u=i-Hr(a,o),!(u>Na)){r>-Na?(t=a.P,e=a):u>-Na?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Dr(n);if(Wc.insert(t,c),t||e){if(t===e)return Xr(t),e=Dr(t.site),Wc.insert(c,e),c.edge=e.edge=Jr(t.site,c.site),Vr(t),Vr(e),void 0;if(!e)return c.edge=Jr(t.site,c.site),void 0;Xr(t),Xr(e);var l=t.site,s=l.x,f=l.y,h=n.x-s,g=n.y-f,p=e.site,v=p.x-s,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,x=v*v+d*d,M={x:(d*y-g*x)/m+s,y:(h*x-v*y)/m+f};Kr(e.edge,l,p,M),c.edge=Jr(l,n,null,M),e.edge=Jr(n,p,null,M),Vr(t),Vr(e)}}function Fr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,l=c-t;if(!l)return a;var s=a-r,f=1/i-1/l,h=s/l;return f?(-h+Math.sqrt(h*h-2*f*(s*s/(-2*l)-c+l/2+u-i/2)))/f+r:(r+a)/2}function Hr(n,t){var e=n.N;if(e)return Fr(e,t);var r=n.site;return r.y===t?r.x:1/0}function Or(n){this.site=n,this.edges=[]}function Yr(n){for(var t,e,r,u,i,o,a,c,l,s,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=Bc,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)s=a[o].end(),r=s.x,u=s.y,l=a[++o%c].start(),t=l.x,e=l.y,(ca(r-t)>Na||ca(u-e)>Na)&&(a.splice(o,0,new Qr(Gr(i.site,s,ca(r-f)<Na&&p-u>Na?{x:f,y:ca(t-f)<Na?e:p}:ca(u-p)<Na&&h-r>Na?{x:ca(e-p)<Na?t:h,y:p}:ca(r-h)<Na&&u-g>Na?{x:h,y:ca(t-h)<Na?e:g}:ca(u-g)<Na&&r-f>Na?{x:ca(e-g)<Na?t:f,y:g}:null),i.site,null)),++c)}function Ir(n,t){return t.angle-n.angle}function Zr(){tu(this),this.x=this.y=this.arc=this.site=this.cy=null}function Vr(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,l=r.y-a,s=i.x-o,f=i.y-a,h=2*(c*f-l*s);if(!(h>=-za)){var g=c*c+l*l,p=s*s+f*f,v=(f*g-l*p)/h,d=(c*p-s*g)/h,f=d+a,m=Qc.pop()||new Zr;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,x=Gc._;x;)if(m.y<x.y||m.y===x.y&&m.x<=x.x){if(!x.L){y=x.P;break}x=x.L}else{if(!x.R){y=x;break}x=x.R}Gc.insert(y,m),y||(Jc=m)}}}}function Xr(n){var t=n.circle;t&&(t.P||(Jc=t.N),Gc.remove(t),Qc.push(t),tu(t),n.circle=null)}function $r(n){for(var t,e=$c,r=He(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Br(t,n)||!r(t)||ca(t.a.x-t.b.x)<Na&&ca(t.a.y-t.b.y)<Na)&&(t.a=t.b=null,e.splice(u,1))}function Br(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],l=t[1][1],s=n.l,f=n.r,h=s.x,g=s.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=l)return}else i={x:d,y:c};e={x:d,y:l}}else{if(i){if(i.y<c)return}else i={x:d,y:l};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=l)return}else i={x:(c-u)/r,y:c};e={x:(l-u)/r,y:l}}else{if(i){if(i.y<c)return}else i={x:(l-u)/r,y:l};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function Wr(n,t){this.l=n,this.r=t,this.a=this.b=null}function Jr(n,t,e,r){var u=new Wr(n,t);return $c.push(u),e&&Kr(u,n,t,e),r&&Kr(u,t,n,r),Bc[n.i].edges.push(new Qr(u,n,t)),Bc[t.i].edges.push(new Qr(u,t,n)),u}function Gr(n,t,e){var r=new Wr(n,null);return r.a=t,r.b=e,$c.push(r),r}function Kr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function Qr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function nu(){this._=null}function tu(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function eu(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ru(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function uu(n){for(;n.L;)n=n.L;return n}function iu(n,t){var e,r,u,i=n.sort(ou).pop();for($c=[],Bc=new Array(n.length),Wc=new nu,Gc=new nu;;)if(u=Jc,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(Bc[i.i]=new Or(i),jr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;Ur(u.arc)}t&&($r(t),Yr(t));var o={cells:Bc,edges:$c};return Wc=Gc=$c=Bc=null,o}function ou(n,t){return t.y-n.y||t.x-n.x}function au(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function cu(n){return n.x}function lu(n){return n.y}function su(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function fu(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&fu(n,c[0],e,r,o,a),c[1]&&fu(n,c[1],o,r,u,a),c[2]&&fu(n,c[2],e,a,o,i),c[3]&&fu(n,c[3],o,a,u,i)}}function hu(n,t){n=Bo.rgb(n),t=Bo.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+xt(Math.round(e+i*n))+xt(Math.round(r+o*n))+xt(Math.round(u+a*n))}}function gu(n,t){var e,r={},u={};for(e in n)e in t?r[e]=du(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function pu(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function vu(n,t){var e,r,u,i=tl.lastIndex=el.lastIndex=0,o=-1,a=[],c=[];for(n+="",t+="";(e=tl.exec(n))&&(r=el.exec(t));)(u=r.index)>i&&(u=t.slice(i,u),a[o]?a[o]+=u:a[++o]=u),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:pu(e,r)})),i=el.lastIndex;return i<t.length&&(u=t.slice(i),a[o]?a[o]+=u:a[++o]=u),a.length<2?c[0]?(t=c[0].x,function(n){return t(n)+""}):function(){return t}:(t=c.length,function(n){for(var e,r=0;t>r;++r)a[(e=c[r]).i]=e.x(n);return a.join("")})}function du(n,t){for(var e,r=Bo.interpolators.length;--r>=0&&!(e=Bo.interpolators[r](n,t)););return e}function mu(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(du(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function yu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function xu(n){return function(t){return 1-n(1-t)}}function Mu(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function _u(n){return n*n}function bu(n){return n*n*n}function wu(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Su(n){return function(t){return Math.pow(t,n)}}function ku(n){return 1-Math.cos(n*Ca)}function Eu(n){return Math.pow(2,10*(n-1))}function Au(n){return 1-Math.sqrt(1-n*n)}function Cu(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Aa*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Aa/t)}}function Nu(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function zu(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Lu(n,t){n=Bo.hcl(n),t=Bo.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return lt(e+i*n,r+o*n,u+a*n)+""}}function Tu(n,t){n=Bo.hsl(n),t=Bo.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return at(e+i*n,r+o*n,u+a*n)+""}}function qu(n,t){n=Bo.lab(n),t=Bo.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return ft(e+i*n,r+o*n,u+a*n)+""}}function Ru(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Du(n){var t=[n.a,n.b],e=[n.c,n.d],r=Uu(t),u=Pu(t,e),i=Uu(ju(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Ta,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Ta:0}function Pu(n,t){return n[0]*t[0]+n[1]*t[1]}function Uu(n){var t=Math.sqrt(Pu(n,n));return t&&(n[0]/=t,n[1]/=t),t}function ju(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Fu(n,t){var e,r=[],u=[],i=Bo.transform(n),o=Bo.transform(t),a=i.translate,c=o.translate,l=i.rotate,s=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:pu(a[0],c[0])},{i:3,x:pu(a[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),l!=s?(l-s>180?s+=360:s-l>180&&(l+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:pu(l,s)})):s&&r.push(r.pop()+"rotate("+s+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:pu(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:pu(g[0],p[0])},{i:e-2,x:pu(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function Hu(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Ou(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Yu(n){for(var t=n.source,e=n.target,r=Zu(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Iu(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Zu(n,t){if(n===t)return n;for(var e=Iu(n),r=Iu(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function Vu(n){n.fixed|=2}function Xu(n){n.fixed&=-7}function $u(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Bu(n){n.fixed&=-5}function Wu(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Wu(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var l=t*e[n.point.index];n.charge+=n.pointCharge=l,r+=l*n.point.x,u+=l*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function Ju(n,t){return Bo.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=ei,n}function Gu(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(u=n.children)&&(r=u.length))for(var r,u;--r>=0;)e.push(u[r])}function Ku(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(i=n.children)&&(u=i.length))for(var u,i,o=-1;++o<u;)e.push(i[o]);for(;null!=(n=r.pop());)t(n)}function Qu(n){return n.children}function ni(n){return n.value}function ti(n,t){return t.value-n.value}function ei(n){return Bo.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function ri(n){return n.x}function ui(n){return n.y}function ii(n,t,e){n.y0=t,n.y=e}function oi(n){return Bo.range(n.length)}function ai(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function ci(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function li(n){return n.reduce(si,0)}function si(n,t){return n+t[1]}function fi(n,t){return hi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function hi(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function gi(n){return[Bo.min(n),Bo.max(n)]}function pi(n,t){return n.value-t.value}function vi(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function di(n,t){n._pack_next=t,t._pack_prev=n}function mi(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function yi(n){function t(n){s=Math.min(n.x-n.r,s),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(l=e.length)){var e,r,u,i,o,a,c,l,s=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(xi),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(u=e[1],u.x=u.r,u.y=0,t(u),l>2))for(i=e[2],bi(r,u,i),t(i),vi(r,i),r._pack_prev=i,vi(i,u),u=r._pack_next,o=3;l>o;o++){bi(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(mi(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!mi(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?di(r,u=a):di(r=c,u),o--):(vi(r,i),u=i,t(i))}var m=(s+f)/2,y=(h+g)/2,x=0;for(o=0;l>o;o++)i=e[o],i.x-=m,i.y-=y,x=Math.max(x,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=x,e.forEach(Mi)}}function xi(n){n._pack_next=n._pack_prev=n}function Mi(n){delete n._pack_next,delete n._pack_prev}function _i(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)_i(u[i],t,e,r)}function bi(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),l=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+l*i,e.y=n.y+c*i-l*u}else e.x=n.x+r,e.y=n.y}function wi(n,t){return n.parent==t.parent?1:2}function Si(n){var t=n.children;return t.length?t[0]:n.t}function ki(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ei(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Ai(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Ci(n,t,e){return n.a.parent===t.parent?n.a:e}function Ni(n){return 1+Bo.max(n,function(n){return n.y})}function zi(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Li(n){var t=n.children;return t&&t.length?Li(t[0]):n}function Ti(n){var t,e=n.children;return e&&(t=e.length)?Ti(e[t-1]):n}function qi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Ri(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Di(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Pi(n){return n.rangeExtent?n.rangeExtent():Di(n.range())}function Ui(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function ji(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function Fi(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:gl}function Hi(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=Bo.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function Oi(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Hi:Ui,c=r?Ou:Hu;return o=u(n,t,c,e),a=u(t,n,c,du),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Ru)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Vi(n,t)},i.tickFormat=function(t,e){return Xi(n,t,e)},i.nice=function(t){return Ii(n,t),u()},i.copy=function(){return Oi(n,t,e,r)},u()}function Yi(n,t){return Bo.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Ii(n,t){return ji(n,Fi(Zi(n,t)[2]))}function Zi(n,t){null==t&&(t=10);var e=Di(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Vi(n,t){return Bo.range.apply(Bo,Zi(n,t))}function Xi(n,t,e){var r=Zi(n,t);if(e){var u=tc.exec(e);if(u.shift(),"s"===u[8]){var i=Bo.formatPrefix(Math.max(ca(r[0]),ca(r[1])));return u[7]||(u[7]="."+$i(i.scale(r[2]))),u[8]="f",e=Bo.format(u.join("")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]="."+Bi(u[8],r)),e=u.join("")}else e=",."+$i(r[2])+"f";return Bo.format(e)}function $i(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Bi(n,t){var e=$i(t[2]);return n in pl?Math.abs(e-$i(Math.max(ca(t[0]),ca(t[1]))))+ +("e"!==n):e-2*("%"===n)}function Wi(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=ji(r.map(u),e?Math:dl);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=Di(r),o=[],a=n[0],c=n[1],l=Math.floor(u(a)),s=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(s-l)){if(e){for(;s>l;l++)for(var h=1;f>h;h++)o.push(i(l)*h);o.push(i(l))}else for(o.push(i(l));l++<s;)for(var h=f-1;h>0;h--)o.push(i(l)*h);for(l=0;o[l]<a;l++);for(s=o.length;o[s-1]>c;s--);o=o.slice(l,s)}return o},o.tickFormat=function(n,t){if(!arguments.length)return vl;arguments.length<2?t=vl:"function"!=typeof t&&(t=Bo.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return Wi(n.copy(),t,e,r)},Yi(o,n)}function Ji(n,t,e){function r(t){return n(u(t))}var u=Gi(t),i=Gi(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Vi(e,n)},r.tickFormat=function(n,t){return Xi(e,n,t)},r.nice=function(n){return r.domain(Ii(e,n))},r.exponent=function(o){return arguments.length?(u=Gi(t=o),i=Gi(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return Ji(n.copy(),t,e)},Yi(r,n)}function Gi(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function Ki(n,t){function e(e){return i[((u.get(e)||("range"===t.t?u.set(e,n.push(e)):0/0))-1)%i.length]}function r(t,e){return Bo.range(n.length).map(function(n){return t+e*n})}var u,i,o;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new a;for(var i,o=-1,c=r.length;++o<c;)u.has(i=r[o])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,o=0,t={t:"range",a:arguments},e):i},e.rangePoints=function(u,a){arguments.length<2&&(a=0);var c=u[0],l=u[1],s=(l-c)/(Math.max(1,n.length-1)+a);return i=r(n.length<2?(c+l)/2:c+s*a/2,s),o=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=(f-s)/(n.length-a+2*c);return i=r(s+h*c,h),l&&i.reverse(),o=h*(1-a),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=Math.floor((f-s)/(n.length-a+2*c)),g=f-s-(n.length-a)*h;return i=r(s+Math.round(g/2),h),l&&i.reverse(),o=Math.round(h*(1-a)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Di(t.a[0])},e.copy=function(){return Ki(n,t)},e.domain(n)}function Qi(r,u){function i(){var n=0,t=u.length;for(a=[];++n<t;)a[n-1]=Bo.quantile(r,n/t);return o}function o(n){return isNaN(n=+n)?void 0:u[Bo.bisect(a,n)]}var a;return o.domain=function(u){return arguments.length?(r=u.map(t).filter(e).sort(n),i()):r},o.range=function(n){return arguments.length?(u=n,i()):u},o.quantiles=function(){return a},o.invertExtent=function(n){return n=u.indexOf(n),0>n?[0/0,0/0]:[n>0?a[n-1]:r[0],n<a.length?a[n]:r[r.length-1]]},o.copy=function(){return Qi(r,u)},i()}function no(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return no(n,t,e)},u()}function to(n,t){function e(e){return e>=e?t[Bo.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return to(n,t)},e}function eo(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Vi(n,t)},t.tickFormat=function(t,e){return Xi(n,t,e)},t.copy=function(){return eo(n)},t}function ro(n){return n.innerRadius}function uo(n){return n.outerRadius}function io(n){return n.startAngle}function oo(n){return n.endAngle}function ao(n){function t(t){function o(){l.push("M",i(n(s),a))}for(var c,l=[],s=[],f=-1,h=t.length,g=kt(e),p=kt(r);++f<h;)u.call(this,c=t[f],f)?s.push([+g.call(this,c,f),+p.call(this,c,f)]):s.length&&(o(),s=[]);return s.length&&o(),l.length?l.join(""):null}var e=Ar,r=Cr,u=Ae,i=co,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=wl.get(n)||co).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function co(n){return n.join("L")}function lo(n){return co(n)+"Z"}function so(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function fo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function ho(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function go(n,t){return n.length<4?co(n):n[1]+mo(n.slice(1,n.length-1),yo(n,t))}function po(n,t){return n.length<3?co(n):n[0]+mo((n.push(n[0]),n),yo([n[n.length-2]].concat(n,[n[1]]),t))}function vo(n,t){return n.length<3?co(n):n[0]+mo(n,yo(n,t))}function mo(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return co(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var l=2;l<t.length;l++,c++)i=n[c],a=t[l],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var s=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+s[0]+","+s[1]}return r}function yo(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function xo(n){if(n.length<3)return co(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",wo(El,o),",",wo(El,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),So(c,o,a);return n.pop(),c.push("L",r),c.join("")}function Mo(n){if(n.length<4)return co(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(wo(El,i)+","+wo(El,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),So(e,i,o);return e.join("")}function _o(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[wo(El,o),",",wo(El,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),So(t,o,a);return t.join("")}function bo(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,l=-1;++l<=e;)r=n[l],u=l/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return xo(n)}function wo(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function So(n,t,e){n.push("C",wo(Sl,t),",",wo(Sl,e),",",wo(kl,t),",",wo(kl,e),",",wo(El,t),",",wo(El,e))}function ko(n,t){return(t[1]-n[1])/(t[0]-n[0])}function Eo(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=ko(u,i);++t<e;)r[t]=(o+(o=ko(u=i,i=n[t+1])))/2;return r[t]=o,r}function Ao(n){for(var t,e,r,u,i=[],o=Eo(n),a=-1,c=n.length-1;++a<c;)t=ko(n[a],n[a+1]),ca(t)<Na?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function Co(n){return n.length<3?co(n):n[0]+mo(n,Ao(n))}function No(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]+_l,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function zo(n){function t(t){function c(){v.push("M",a(n(m),f),s,l(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,x=t.length,M=kt(e),_=kt(u),b=e===r?function(){return g}:kt(r),w=u===i?function(){return p}:kt(i);++y<x;)o.call(this,h=t[y],y)?(d.push([g=+M.call(this,h,y),p=+_.call(this,h,y)]),m.push([+b.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=Ar,r=Ar,u=0,i=Cr,o=Ae,a=co,c=a.key,l=a,s="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=wl.get(n)||co).key,l=a.reverse||a,s=a.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Lo(n){return n.radius}function To(n){return[n.x,n.y]}function qo(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+_l;return[e*Math.cos(r),e*Math.sin(r)]}}function Ro(){return 64}function Do(){return"circle"}function Po(n){var t=Math.sqrt(n/Ea);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Uo(n,t){return ga(n,Tl),n.id=t,n}function jo(n,t,e,r){var u=n.id;return F(n,"function"==typeof e?function(n,i,o){n.__transition__[u].tween.set(t,r(e.call(n,n.__data__,i,o)))}:(e=r(e),function(n){n.__transition__[u].tween.set(t,e)}))}function Fo(n){return null==n&&(n=""),function(){this.textContent=n}}function Ho(n,t,e,r){var u=n.__transition__||(n.__transition__={active:0,count:0}),i=u[e];if(!i){var o=r.time;i=u[e]={tween:new a,time:o,ease:r.ease,delay:r.delay,duration:r.duration},++u.count,Bo.timer(function(r){function a(r){return u.active>e?l():(u.active=e,i.event&&i.event.start.call(n,s,t),i.tween.forEach(function(e,r){(r=r.call(n,s,t))&&v.push(r)
}),Bo.timer(function(){return p.c=c(r||1)?Ae:c,1},0,o),void 0)}function c(r){if(u.active!==e)return l();for(var o=r/g,a=f(o),c=v.length;c>0;)v[--c].call(n,a);return o>=1?(i.event&&i.event.end.call(n,s,t),l()):void 0}function l(){return--u.count?delete u[e]:delete n.__transition__,1}var s=n.__data__,f=i.ease,h=i.delay,g=i.duration,p=Ka,v=[];return p.t=h+o,r>=h?a(r-h):(p.c=a,void 0)},0,o)}}function Oo(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function Yo(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function Io(n){return n.toISOString()}function Zo(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=Bo.bisect(Ol,u);return i==Ol.length?[t.year,Zi(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Ol[i-1]<Ol[i]/u?i-1:i]:[Zl,Zi(n,e)[2]]}return r.invert=function(t){return Vo(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Vo)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Vo(+e+1),t).length}var i=r.domain(),o=Di(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(ji(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Vo(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Vo(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Di(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Vo(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Zo(n.copy(),t,e)},Yi(r,n)}function Vo(n){return new Date(n)}function Xo(n){return JSON.parse(n.responseText)}function $o(n){var t=Go.createRange();return t.selectNode(Go.body),t.createContextualFragment(n.responseText)}var Bo={version:"3.4.13"};Date.now||(Date.now=function(){return+new Date});var Wo=[].slice,Jo=function(n){return Wo.call(n)},Go=document,Ko=Go.documentElement,Qo=window;try{Jo(Ko.childNodes)[0].nodeType}catch(na){Jo=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}try{Go.createElement("div").style.setProperty("opacity",0,"")}catch(ta){var ea=Qo.Element.prototype,ra=ea.setAttribute,ua=ea.setAttributeNS,ia=Qo.CSSStyleDeclaration.prototype,oa=ia.setProperty;ea.setAttribute=function(n,t){ra.call(this,n,t+"")},ea.setAttributeNS=function(n,t,e){ua.call(this,n,t,e+"")},ia.setProperty=function(n,t,e){oa.call(this,n,t+"",e)}}Bo.ascending=n,Bo.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},Bo.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},Bo.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},Bo.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o&&!(null!=(e=u=n[i])&&e>=e);)e=u=void 0;for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o&&!(null!=(e=u=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},Bo.sum=function(n,t){var r,u=0,i=n.length,o=-1;if(1===arguments.length)for(;++o<i;)e(r=+n[o])&&(u+=r);else for(;++o<i;)e(r=+t.call(n,n[o],o))&&(u+=r);return u},Bo.mean=function(n,r){var u,i=0,o=n.length,a=-1,c=o;if(1===arguments.length)for(;++a<o;)e(u=t(n[a]))?i+=u:--c;else for(;++a<o;)e(u=t(r.call(n,n[a],a)))?i+=u:--c;return c?i/c:void 0},Bo.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},Bo.median=function(r,u){var i,o=[],a=r.length,c=-1;if(1===arguments.length)for(;++c<a;)e(i=t(r[c]))&&o.push(i);else for(;++c<a;)e(i=t(u.call(r,r[c],c)))&&o.push(i);return o.length?Bo.quantile(o.sort(n),.5):void 0};var aa=r(n);Bo.bisectLeft=aa.left,Bo.bisect=Bo.bisectRight=aa.right,Bo.bisector=function(t){return r(1===t.length?function(e,r){return n(t(e),r)}:t)},Bo.shuffle=function(n){for(var t,e,r=n.length;r;)e=0|Math.random()*r--,t=n[r],n[r]=n[e],n[e]=t;return n},Bo.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},Bo.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},Bo.zip=function(){if(!(r=arguments.length))return[];for(var n=-1,t=Bo.min(arguments,u),e=new Array(t);++n<t;)for(var r,i=-1,o=e[n]=new Array(r);++i<r;)o[i]=arguments[i][n];return e},Bo.transpose=function(n){return Bo.zip.apply(Bo,n)},Bo.keys=function(n){var t=[];for(var e in n)t.push(e);return t},Bo.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},Bo.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},Bo.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var ca=Math.abs;Bo.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/e)throw new Error("infinite range");var r,u=[],o=i(ca(e)),a=-1;if(n*=o,t*=o,e*=o,0>e)for(;(r=n+e*++a)>t;)u.push(r/o);else for(;(r=n+e*++a)<t;)u.push(r/o);return u},Bo.map=function(n){var t=new a;if(n instanceof a)n.forEach(function(n,e){t.set(n,e)});else for(var e in n)t.set(e,n[e]);return t};var la="__proto__",sa="\x00";o(a,{has:s,get:function(n){return this._[c(n)]},set:function(n,t){return this._[c(n)]=t},remove:f,keys:h,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:l(t),value:this._[t]});return n},size:g,empty:p,forEach:function(n){for(var t in this._)n.call(this,l(t),this._[t])}}),Bo.nest=function(){function n(t,o,c){if(c>=i.length)return r?r.call(u,o):e?o.sort(e):o;for(var l,s,f,h,g=-1,p=o.length,v=i[c++],d=new a;++g<p;)(h=d.get(l=v(s=o[g])))?h.push(s):d.set(l,[s]);return t?(s=t(),f=function(e,r){s.set(e,n(t,r,c))}):(s={},f=function(e,r){s[e]=n(t,r,c)}),d.forEach(f),s}function t(n,e){if(e>=i.length)return n;var r=[],u=o[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],o=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(Bo.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return o[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},Bo.set=function(n){var t=new v;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},o(v,{has:s,add:function(n){return this._[c(n+="")]=!0,n},remove:f,values:h,size:g,empty:p,forEach:function(n){for(var t in this._)n.call(this,l(t))}}),Bo.behavior={},Bo.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=d(n,t,t[e]);return n};var fa=["webkit","ms","moz","Moz","o","O"];Bo.dispatch=function(){for(var n=new x,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=M(n);return n},x.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},Bo.event=null,Bo.requote=function(n){return n.replace(ha,"\\$&")};var ha=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,ga={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},pa=function(n,t){return t.querySelector(n)},va=function(n,t){return t.querySelectorAll(n)},da=Ko.matches||Ko[m(Ko,"matchesSelector")],ma=function(n,t){return da.call(n,t)};"function"==typeof Sizzle&&(pa=function(n,t){return Sizzle(n,t)[0]||null},va=Sizzle,ma=Sizzle.matchesSelector),Bo.selection=function(){return _a};var ya=Bo.selection.prototype=[];ya.select=function(n){var t,e,r,u,i=[];n=k(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,l=r.length;++c<l;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return S(i)},ya.selectAll=function(n){var t,e,r=[];n=E(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=Jo(n.call(e,e.__data__,a,u))),t.parentNode=e);return S(r)};var xa={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};Bo.ns={prefix:xa,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.slice(0,t),n=n.slice(t+1)),xa.hasOwnProperty(e)?{space:xa[e],local:n}:n}},ya.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=Bo.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(A(t,n[t]));return this}return this.each(A(n,t))},ya.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=z(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!N(n[u]).test(t))return!1;return!0}for(t in n)this.each(L(t,n[t]));return this}return this.each(L(n,t))},ya.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(q(e,n[e],t));return this}if(2>r)return Qo.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(q(n,t,e))},ya.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},ya.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},ya.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},ya.append=function(n){return n=D(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},ya.insert=function(n,t){return n=D(n),t=k(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},ya.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},ya.data=function(n,t){function e(n,e){var r,u,i,o=n.length,f=e.length,h=Math.min(o,f),g=new Array(f),p=new Array(f),v=new Array(o);if(t){var d,m=new a,y=new Array(o);for(r=-1;++r<o;)m.has(d=t.call(u=n[r],u.__data__,r))?v[r]=u:m.set(d,u),y[r]=d;for(r=-1;++r<f;)(u=m.get(d=t.call(e,i=e[r],r)))?u!==!0&&(g[r]=u,u.__data__=i):p[r]=P(i),m.set(d,!0);for(r=-1;++r<o;)m.get(y[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=P(i);for(;f>r;++r)p[r]=P(e[r]);for(;o>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,c.push(p),l.push(g),s.push(v)}var r,u,i=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++i<o;)(u=r[i])&&(n[i]=u.__data__);return n}var c=H([]),l=S([]),s=S([]);if("function"==typeof n)for(;++i<o;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<o;)e(r=this[i],n);return l.enter=function(){return c},l.exit=function(){return s},l},ya.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},ya.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=U(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return S(u)},ya.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},ya.sort=function(n){n=j.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},ya.each=function(n){return F(this,function(t,e,r){n.call(t,t.__data__,e,r)})},ya.call=function(n){var t=Jo(arguments);return n.apply(t[0]=this,t),this},ya.empty=function(){return!this.node()},ya.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},ya.size=function(){var n=0;return F(this,function(){++n}),n};var Ma=[];Bo.selection.enter=H,Bo.selection.enter.prototype=Ma,Ma.append=ya.append,Ma.empty=ya.empty,Ma.node=ya.node,Ma.call=ya.call,Ma.size=ya.size,Ma.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var l=-1,s=u.length;++l<s;)(i=u[l])?(t.push(r[l]=e=n.call(u.parentNode,i.__data__,l,a)),e.__data__=i.__data__):t.push(null)}return S(o)},Ma.insert=function(n,t){return arguments.length<2&&(t=O(this)),ya.insert.call(this,n,t)},ya.transition=function(){for(var n,t,e=Cl||++ql,r=[],u=Nl||{time:Date.now(),ease:wu,delay:0,duration:250},i=-1,o=this.length;++i<o;){r.push(n=[]);for(var a=this[i],c=-1,l=a.length;++c<l;)(t=a[c])&&Ho(t,c,e,u),n.push(t)}return Uo(r,e)},ya.interrupt=function(){return this.each(Y)},Bo.select=function(n){var t=["string"==typeof n?pa(n,Go):n];return t.parentNode=Ko,S([t])},Bo.selectAll=function(n){var t=Jo("string"==typeof n?va(n,Go):n);return t.parentNode=Ko,S([t])};var _a=Bo.select(Ko);ya.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(I(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(I(n,t,e))};var ba=Bo.map({mouseenter:"mouseover",mouseleave:"mouseout"});ba.forEach(function(n){"on"+n in Go&&ba.remove(n)});var wa="onselectstart"in Go?null:m(Ko.style,"userSelect"),Sa=0;Bo.mouse=function(n){return $(n,b())};var ka=/WebKit/.test(Qo.navigator.userAgent)?-1:0;Bo.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=b().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return $(n,r)},Bo.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",i)}function t(n,t,u,i,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-x[0],e=r[1]-x[1],p|=n|e,x=r,g({type:"drag",x:r[0]+l[0],y:r[1]+l[1],dx:n,dy:e}))}function c(){t(h,v)&&(m.on(i+d,null).on(o+d,null),y(p&&Bo.event.target===f),g({type:"dragend"}))}var l,s=this,f=Bo.event.target,h=s.parentNode,g=e.of(s,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=Bo.select(u()).on(i+d,a).on(o+d,c),y=X(),x=t(h,v);r?(l=r.apply(s,arguments),l=[l.x-x[0],l.y-x[1]]):l=[0,0],g({type:"dragstart"})}}var e=w(n,"drag","dragstart","dragend"),r=null,u=t(y,Bo.mouse,J,"mousemove","mouseup"),i=t(B,Bo.touch,W,"touchmove","touchend");return n.origin=function(t){return arguments.length?(r=t,n):r},Bo.rebind(n,e,"on")},Bo.touches=function(n,t){return arguments.length<2&&(t=b().touches),t?Jo(t).map(function(t){var e=$(n,t);return e.identifier=t.identifier,e}):[]};var Ea=Math.PI,Aa=2*Ea,Ca=Ea/2,Na=1e-6,za=Na*Na,La=Ea/180,Ta=180/Ea,qa=Math.SQRT2,Ra=2,Da=4;Bo.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=et(v),o=i/(Ra*h)*(e*rt(qa*t+v)-tt(v));return[r+o*l,u+o*s,i*e/et(qa*t+v)]}return[r+n*l,u+n*s,i*Math.exp(qa*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],l=o-r,s=a-u,f=l*l+s*s,h=Math.sqrt(f),g=(c*c-i*i+Da*f)/(2*i*Ra*h),p=(c*c-i*i-Da*f)/(2*c*Ra*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/qa;return e.duration=1e3*y,e},Bo.behavior.zoom=function(){function n(n){n.on(A,l).on(ja+".zoom",f).on("dblclick.zoom",h).on(z,s)}function t(n){return[(n[0]-S.x)/S.k,(n[1]-S.y)/S.k]}function e(n){return[n[0]*S.k+S.x,n[1]*S.k+S.y]}function r(n){S.k=Math.max(E[0],Math.min(E[1],n))}function u(n,t){t=e(t),S.x+=n[0]-t[0],S.y+=n[1]-t[1]}function i(){x&&x.domain(y.range().map(function(n){return(n-S.x)/S.k}).map(y.invert)),b&&b.domain(M.range().map(function(n){return(n-S.y)/S.k}).map(M.invert))}function o(n){n({type:"zoomstart"})}function a(n){i(),n({type:"zoom",scale:S.k,translate:[S.x,S.y]})}function c(n){n({type:"zoomend"})}function l(){function n(){s=1,u(Bo.mouse(r),h),a(l)}function e(){f.on(C,null).on(N,null),g(s&&Bo.event.target===i),c(l)}var r=this,i=Bo.event.target,l=L.of(r,arguments),s=0,f=Bo.select(Qo).on(C,n).on(N,e),h=t(Bo.mouse(r)),g=X();Y.call(r),o(l)}function s(){function n(){var n=Bo.touches(g);return h=S.k,n.forEach(function(n){n.identifier in v&&(v[n.identifier]=t(n))}),n}function e(){var t=Bo.event.target;Bo.select(t).on(x,i).on(M,f),b.push(t);for(var e=Bo.event.changedTouches,o=0,c=e.length;c>o;++o)v[e[o].identifier]=null;var l=n(),s=Date.now();if(1===l.length){if(500>s-m){var h=l[0],g=v[h.identifier];r(2*S.k),u(h,g),_(),a(p)}m=s}else if(l.length>1){var h=l[0],y=l[1],w=h[0]-y[0],k=h[1]-y[1];d=w*w+k*k}}function i(){for(var n,t,e,i,o=Bo.touches(g),c=0,l=o.length;l>c;++c,i=null)if(e=o[c],i=v[e.identifier]){if(t)break;n=e,t=i}if(i){var s=(s=e[0]-n[0])*s+(s=e[1]-n[1])*s,f=d&&Math.sqrt(s/d);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+i[0])/2,(t[1]+i[1])/2],r(f*h)}m=null,u(n,t),a(p)}function f(){if(Bo.event.touches.length){for(var t=Bo.event.changedTouches,e=0,r=t.length;r>e;++e)delete v[t[e].identifier];for(var u in v)return void n()}Bo.selectAll(b).on(y,null),w.on(A,l).on(z,s),k(),c(p)}var h,g=this,p=L.of(g,arguments),v={},d=0,y=".zoom-"+Bo.event.changedTouches[0].identifier,x="touchmove"+y,M="touchend"+y,b=[],w=Bo.select(g),k=X();Y.call(g),e(),o(p),w.on(A,null).on(z,e)}function f(){var n=L.of(this,arguments);d?clearTimeout(d):(g=t(p=v||Bo.mouse(this)),Y.call(this),o(n)),d=setTimeout(function(){d=null,c(n)},50),_(),r(Math.pow(2,.002*Pa())*S.k),u(p,g),a(n)}function h(){var n=L.of(this,arguments),e=Bo.mouse(this),i=t(e),l=Math.log(S.k)/Math.LN2;o(n),r(Math.pow(2,Bo.event.shiftKey?Math.ceil(l)-1:Math.floor(l)+1)),u(e,i),a(n),c(n)}var g,p,v,d,m,y,x,M,b,S={x:0,y:0,k:1},k=[960,500],E=Ua,A="mousedown.zoom",C="mousemove.zoom",N="mouseup.zoom",z="touchstart.zoom",L=w(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=L.of(this,arguments),t=S;Cl?Bo.select(this).transition().each("start.zoom",function(){S=this.__chart__||{x:0,y:0,k:1},o(n)}).tween("zoom:zoom",function(){var e=k[0],r=k[1],u=e/2,i=r/2,o=Bo.interpolateZoom([(u-S.x)/S.k,(i-S.y)/S.k,e/S.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),c=e/r[2];this.__chart__=S={x:u-r[0]*c,y:i-r[1]*c,k:c},a(n)}}).each("end.zoom",function(){c(n)}):(this.__chart__=S,o(n),a(n),c(n))})},n.translate=function(t){return arguments.length?(S={x:+t[0],y:+t[1],k:S.k},i(),n):[S.x,S.y]},n.scale=function(t){return arguments.length?(S={x:S.x,y:S.y,k:+t},i(),n):S.k},n.scaleExtent=function(t){return arguments.length?(E=null==t?Ua:[+t[0],+t[1]],n):E},n.center=function(t){return arguments.length?(v=t&&[+t[0],+t[1]],n):v},n.size=function(t){return arguments.length?(k=t&&[+t[0],+t[1]],n):k},n.x=function(t){return arguments.length?(x=t,y=t.copy(),S={x:0,y:0,k:1},n):x},n.y=function(t){return arguments.length?(b=t,M=t.copy(),S={x:0,y:0,k:1},n):b},Bo.rebind(n,L,"on")};var Pa,Ua=[0,1/0],ja="onwheel"in Go?(Pa=function(){return-Bo.event.deltaY*(Bo.event.deltaMode?120:1)},"wheel"):"onmousewheel"in Go?(Pa=function(){return Bo.event.wheelDelta},"mousewheel"):(Pa=function(){return-Bo.event.detail},"MozMousePixelScroll");Bo.color=it,it.prototype.toString=function(){return this.rgb()+""},Bo.hsl=ot;var Fa=ot.prototype=new it;Fa.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new ot(this.h,this.s,this.l/n)},Fa.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new ot(this.h,this.s,n*this.l)},Fa.rgb=function(){return at(this.h,this.s,this.l)},Bo.hcl=ct;var Ha=ct.prototype=new it;Ha.brighter=function(n){return new ct(this.h,this.c,Math.min(100,this.l+Oa*(arguments.length?n:1)))},Ha.darker=function(n){return new ct(this.h,this.c,Math.max(0,this.l-Oa*(arguments.length?n:1)))},Ha.rgb=function(){return lt(this.h,this.c,this.l).rgb()},Bo.lab=st;var Oa=18,Ya=.95047,Ia=1,Za=1.08883,Va=st.prototype=new it;Va.brighter=function(n){return new st(Math.min(100,this.l+Oa*(arguments.length?n:1)),this.a,this.b)},Va.darker=function(n){return new st(Math.max(0,this.l-Oa*(arguments.length?n:1)),this.a,this.b)},Va.rgb=function(){return ft(this.l,this.a,this.b)},Bo.rgb=dt;var Xa=dt.prototype=new it;Xa.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),new dt(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new dt(u,u,u)},Xa.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new dt(n*this.r,n*this.g,n*this.b)},Xa.hsl=function(){return _t(this.r,this.g,this.b)},Xa.toString=function(){return"#"+xt(this.r)+xt(this.g)+xt(this.b)};var $a=Bo.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});$a.forEach(function(n,t){$a.set(n,mt(t))}),Bo.functor=kt,Bo.xhr=At(Et),Bo.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=Ct(n,t,null==e?r:u(e),i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(s>=l)return o;if(u)return u=!1,i;var t=s;if(34===n.charCodeAt(t)){for(var e=t;e++<l;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}s=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++s):10===r&&(u=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;l>s;){var r=n.charCodeAt(s++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(s)&&(++s,++a);else if(r!==c)continue;return n.slice(t,s-a)}return n.slice(t)}for(var r,u,i={},o={},a=[],l=n.length,s=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();t&&null==(h=t(h,f++))||a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new v,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},Bo.csv=Bo.dsv(",","text/csv"),Bo.tsv=Bo.dsv("	","text/tab-separated-values");var Ba,Wa,Ja,Ga,Ka,Qa=Qo[m(Qo,"requestAnimationFrame")]||function(n){setTimeout(n,17)};Bo.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};Wa?Wa.n=i:Ba=i,Wa=i,Ja||(Ga=clearTimeout(Ga),Ja=1,Qa(Lt))},Bo.timer.flush=function(){Tt(),qt()},Bo.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var nc=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Dt);Bo.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=Bo.round(n,Rt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),nc[8+e/3]};var tc=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,ec=Bo.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=Bo.round(n,Rt(n,t))).toFixed(Math.max(0,Math.min(20,Rt(n*(1+1e-15),t))))}}),rc=Bo.time={},uc=Date;jt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){ic.setUTCDate.apply(this._,arguments)},setDay:function(){ic.setUTCDay.apply(this._,arguments)},setFullYear:function(){ic.setUTCFullYear.apply(this._,arguments)},setHours:function(){ic.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){ic.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){ic.setUTCMinutes.apply(this._,arguments)},setMonth:function(){ic.setUTCMonth.apply(this._,arguments)},setSeconds:function(){ic.setUTCSeconds.apply(this._,arguments)},setTime:function(){ic.setTime.apply(this._,arguments)}};var ic=Date.prototype;rc.year=Ft(function(n){return n=rc.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),rc.years=rc.year.range,rc.years.utc=rc.year.utc.range,rc.day=Ft(function(n){var t=new uc(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),rc.days=rc.day.range,rc.days.utc=rc.day.utc.range,rc.dayOfYear=function(n){var t=rc.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=rc[n]=Ft(function(n){return(n=rc.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=rc.year(n).getDay();return Math.floor((rc.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});rc[n+"s"]=e.range,rc[n+"s"].utc=e.utc.range,rc[n+"OfYear"]=function(n){var e=rc.year(n).getDay();return Math.floor((rc.dayOfYear(n)+(e+t)%7)/7)}}),rc.week=rc.sunday,rc.weeks=rc.sunday.range,rc.weeks.utc=rc.sunday.utc.range,rc.weekOfYear=rc.sundayOfYear;var oc={"-":"",_:" ",0:"0"},ac=/^\s*\d+/,cc=/^%/;Bo.locale=function(n){return{numberFormat:Pt(n),timeFormat:Ot(n)}};var lc=Bo.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});Bo.format=lc.numberFormat,Bo.geo={},ce.prototype={s:0,t:0,add:function(n){le(n,this.t,sc),le(sc.s,this.s,this),this.s?this.t+=sc.t:this.s=sc.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var sc=new ce;Bo.geo.stream=function(n,t){n&&fc.hasOwnProperty(n.type)?fc[n.type](n,t):se(n,t)};var fc={Feature:function(n,t){se(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)se(e[r].geometry,t)}},hc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){fe(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)fe(e[r],t,0)},Polygon:function(n,t){he(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)he(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)se(e[r],t)}};Bo.geo.area=function(n){return gc=0,Bo.geo.stream(n,vc),gc};var gc,pc=new ce,vc={sphere:function(){gc+=4*Ea},point:y,lineStart:y,lineEnd:y,polygonStart:function(){pc.reset(),vc.lineStart=ge},polygonEnd:function(){var n=2*pc;gc+=0>n?4*Ea+n:n,vc.lineStart=vc.lineEnd=vc.point=y}};Bo.geo.bounds=function(){function n(n,t){x.push(M=[s=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=pe([t*La,e*La]);if(m){var u=de(m,r),i=[u[1],-u[0],0],o=de(i,u);xe(o),o=Me(o);var c=t-p,l=c>0?1:-1,v=o[0]*Ta*l,d=ca(c)>180;if(d^(v>l*p&&l*t>v)){var y=o[1]*Ta;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>l*p&&l*t>v)){var y=-o[1]*Ta;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t):h>=s?(s>t&&(s=t),t>h&&(h=t)):t>p?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t)}else n(t,e);m=r,p=t}function e(){_.point=t}function r(){M[0]=s,M[1]=h,_.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=ca(r)>180?r+(r>0?360:-360):r}else v=n,d=e;vc.point(n,e),t(n,e)}function i(){vc.lineStart()}function o(){u(v,d),vc.lineEnd(),ca(y)>Na&&(s=-(h=180)),M[0]=s,M[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var s,f,h,g,p,v,d,m,y,x,M,_={point:n,lineStart:e,lineEnd:r,polygonStart:function(){_.point=u,_.lineStart=i,_.lineEnd=o,y=0,vc.polygonStart()},polygonEnd:function(){vc.polygonEnd(),_.point=n,_.lineStart=e,_.lineEnd=r,0>pc?(s=-(h=180),f=-(g=90)):y>Na?g=90:-Na>y&&(f=-90),M[0]=s,M[1]=h}};return function(n){g=h=-(s=f=1/0),x=[],Bo.geo.stream(n,_);
var t=x.length;if(t){x.sort(c);for(var e,r=1,u=x[0],i=[u];t>r;++r)e=x[r],l(e[0],u)||l(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,s=e[0],h=u[1])}return x=M=null,1/0===s||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[s,f],[h,g]]}}(),Bo.geo.centroid=function(n){dc=mc=yc=xc=Mc=_c=bc=wc=Sc=kc=Ec=0,Bo.geo.stream(n,Ac);var t=Sc,e=kc,r=Ec,u=t*t+e*e+r*r;return za>u&&(t=_c,e=bc,r=wc,Na>mc&&(t=yc,e=xc,r=Mc),u=t*t+e*e+r*r,za>u)?[0/0,0/0]:[Math.atan2(e,t)*Ta,nt(r/Math.sqrt(u))*Ta]};var dc,mc,yc,xc,Mc,_c,bc,wc,Sc,kc,Ec,Ac={sphere:y,point:be,lineStart:Se,lineEnd:ke,polygonStart:function(){Ac.lineStart=Ee},polygonEnd:function(){Ac.lineStart=Se}},Cc=Le(Ae,De,Ue,[-Ea,-Ea/2]),Nc=1e9;Bo.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Oe(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(Bo.geo.conicEqualArea=function(){return Ie(Ze)}).raw=Ze,Bo.geo.albers=function(){return Bo.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},Bo.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=Bo.geo.albers(),o=Bo.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=Bo.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var l=i.scale(),s=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[s-.455*l,f-.238*l],[s+.455*l,f+.238*l]]).stream(c).point,r=o.translate([s-.307*l,f+.201*l]).clipExtent([[s-.425*l+Na,f+.12*l+Na],[s-.214*l-Na,f+.234*l-Na]]).stream(c).point,u=a.translate([s-.205*l,f+.212*l]).clipExtent([[s-.214*l+Na,f+.166*l+Na],[s-.115*l-Na,f+.234*l-Na]]).stream(c).point,n},n.scale(1070)};var zc,Lc,Tc,qc,Rc,Dc,Pc={point:y,lineStart:y,lineEnd:y,polygonStart:function(){Lc=0,Pc.lineStart=Ve},polygonEnd:function(){Pc.lineStart=Pc.lineEnd=Pc.point=y,zc+=ca(Lc/2)}},Uc={point:Xe,lineStart:y,lineEnd:y,polygonStart:y,polygonEnd:y},jc={point:We,lineStart:Je,lineEnd:Ge,polygonStart:function(){jc.lineStart=Ke},polygonEnd:function(){jc.point=We,jc.lineStart=Je,jc.lineEnd=Ge}};Bo.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),Bo.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return zc=0,Bo.geo.stream(n,u(Pc)),zc},n.centroid=function(n){return yc=xc=Mc=_c=bc=wc=Sc=kc=Ec=0,Bo.geo.stream(n,u(jc)),Ec?[Sc/Ec,kc/Ec]:wc?[_c/wc,bc/wc]:Mc?[yc/Mc,xc/Mc]:[0/0,0/0]},n.bounds=function(n){return Rc=Dc=-(Tc=qc=1/0),Bo.geo.stream(n,u(Uc)),[[Tc,qc],[Rc,Dc]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||tr(n):Et,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new $e:new Qe(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(Bo.geo.albersUsa()).context(null)},Bo.geo.transform=function(n){return{stream:function(t){var e=new er(t);for(var r in n)e[r]=n[r];return e}}},er.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},Bo.geo.projection=ur,Bo.geo.projectionMutator=ir,(Bo.geo.equirectangular=function(){return ur(ar)}).raw=ar.invert=ar,Bo.geo.rotation=function(n){function t(t){return t=n(t[0]*La,t[1]*La),t[0]*=Ta,t[1]*=Ta,t}return n=lr(n[0]%360*La,n[1]*La,n.length>2?n[2]*La:0),t.invert=function(t){return t=n.invert(t[0]*La,t[1]*La),t[0]*=Ta,t[1]*=Ta,t},t},cr.invert=ar,Bo.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=lr(-n[0]*La,-n[1]*La,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Ta,n[1]*=Ta}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=gr((t=+r)*La,u*La),n):t},n.precision=function(r){return arguments.length?(e=gr(t*La,(u=+r)*La),n):u},n.angle(90)},Bo.geo.distance=function(n,t){var e,r=(t[0]-n[0])*La,u=n[1]*La,i=t[1]*La,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),l=Math.cos(u),s=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=l*s-c*f*a)*e),c*s+l*f*a)},Bo.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return Bo.range(Math.ceil(i/d)*d,u,d).map(h).concat(Bo.range(Math.ceil(l/m)*m,c,m).map(g)).concat(Bo.range(Math.ceil(r/p)*p,e,p).filter(function(n){return ca(n%d)>Na}).map(s)).concat(Bo.range(Math.ceil(a/v)*v,o,v).filter(function(n){return ca(n%m)>Na}).map(f))}var e,r,u,i,o,a,c,l,s,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],l=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),l>c&&(t=l,l=c,c=t),n.precision(y)):[[i,l],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,s=vr(a,o,90),f=dr(r,e,y),h=vr(l,c,90),g=dr(i,u,y),n):y},n.majorExtent([[-180,-90+Na],[180,90-Na]]).minorExtent([[-180,-80-Na],[180,80+Na]])},Bo.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=mr,u=yr;return n.distance=function(){return Bo.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},Bo.geo.interpolate=function(n,t){return xr(n[0]*La,n[1]*La,t[0]*La,t[1]*La)},Bo.geo.length=function(n){return Fc=0,Bo.geo.stream(n,Hc),Fc};var Fc,Hc={sphere:y,point:y,lineStart:Mr,lineEnd:y,polygonStart:y,polygonEnd:y},Oc=_r(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(Bo.geo.azimuthalEqualArea=function(){return ur(Oc)}).raw=Oc;var Yc=_r(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},Et);(Bo.geo.azimuthalEquidistant=function(){return ur(Yc)}).raw=Yc,(Bo.geo.conicConformal=function(){return Ie(br)}).raw=br,(Bo.geo.conicEquidistant=function(){return Ie(wr)}).raw=wr;var Ic=_r(function(n){return 1/n},Math.atan);(Bo.geo.gnomonic=function(){return ur(Ic)}).raw=Ic,Sr.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Ca]},(Bo.geo.mercator=function(){return kr(Sr)}).raw=Sr;var Zc=_r(function(){return 1},Math.asin);(Bo.geo.orthographic=function(){return ur(Zc)}).raw=Zc;var Vc=_r(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(Bo.geo.stereographic=function(){return ur(Vc)}).raw=Vc,Er.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Ca]},(Bo.geo.transverseMercator=function(){var n=kr(Er),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Er,Bo.geom={},Bo.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=kt(e),i=kt(r),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(zr),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var l=Nr(a),s=Nr(c),f=s[0]===l[0],h=s[s.length-1]===l[l.length-1],g=[];for(t=l.length-1;t>=0;--t)g.push(n[a[l[t]][2]]);for(t=+f;t<s.length-h;++t)g.push(n[a[s[t]][2]]);return g}var e=Ar,r=Cr;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},Bo.geom.polygon=function(n){return ga(n,Xc),n};var Xc=Bo.geom.polygon.prototype=[];Xc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},Xc.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},Xc.clip=function(n){for(var t,e,r,u,i,o,a=qr(n),c=-1,l=this.length-qr(this),s=this[l-1];++c<l;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],Lr(o,s,u)?(Lr(i,s,u)||n.push(Tr(i,o,s,u)),n.push(o)):Lr(i,s,u)&&n.push(Tr(i,o,s,u)),i=o;a&&n.push(n[0]),s=u}return n};var $c,Bc,Wc,Jc,Gc,Kc=[],Qc=[];Or.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Ir),t.length},Qr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},nu.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=uu(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(eu(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ru(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(ru(this,e),n=e,e=n.U),e.C=!1,r.C=!0,eu(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?uu(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return n.C=!1,void 0;do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,eu(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ru(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,eu(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,ru(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,eu(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,ru(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},Bo.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return iu(e(n),a).cells.forEach(function(e,a){var c=e.edges,l=e.site,s=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):l.x>=r&&l.x<=i&&l.y>=u&&l.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];s.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Na)*Na,y:Math.round(o(n,t)/Na)*Na,i:t}})}var r=Ar,u=Cr,i=r,o=u,a=nl;return n?t(n):(t.links=function(n){return iu(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return iu(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(Ir),c=-1,l=a.length,s=a[l-1].edge,f=s.l===o?s.r:s.l;++c<l;)u=s,i=f,s=a[c].edge,f=s.l===o?s.r:s.l,r<i.i&&r<f.i&&au(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=kt(r=n),t):r},t.y=function(n){return arguments.length?(o=kt(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?nl:n,t):a===nl?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===nl?null:a&&a[1]},t)};var nl=[[-1e6,-1e6],[1e6,1e6]];Bo.geom.delaunay=function(n){return Bo.geom.voronoi().triangles(n)},Bo.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,s=n.y;if(null!=c)if(ca(c-e)+ca(s-r)<.01)l(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,l(n,f,c,s,u,i,o,a),l(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,u,i,o,a)}function l(n,t,e,r,u,o,a,c){var l=.5*(u+a),s=.5*(o+c),f=e>=l,h=r>=s,g=(h<<1)+f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=su()),f?u=l:a=l,h?o=s:c=s,i(n,t,e,r,u,o,a,c)}var s,f,h,g,p,v,d,m,y,x=kt(a),M=kt(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)s=n[g],s.x<v&&(v=s.x),s.y<d&&(d=s.y),s.x>m&&(m=s.x),s.y>y&&(y=s.y),f.push(s.x),h.push(s.y);else for(g=0;p>g;++g){var _=+x(s=n[g],g),b=+M(s,g);v>_&&(v=_),d>b&&(d=b),_>m&&(m=_),b>y&&(y=b),f.push(_),h.push(b)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=su();if(k.add=function(n){i(k,n,+x(n,++g),+M(n,g),v,d,m,y)},k.visit=function(n){fu(n,k,v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=s=null,k}var o,a=Ar,c=Cr;return(o=arguments.length)?(a=cu,c=lu,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},Bo.interpolateRgb=hu,Bo.interpolateObject=gu,Bo.interpolateNumber=pu,Bo.interpolateString=vu;var tl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,el=new RegExp(tl.source,"g");Bo.interpolate=du,Bo.interpolators=[function(n,t){var e=typeof t;return("string"===e?$a.has(t)||/^(#|rgb\(|hsl\()/.test(t)?hu:vu:t instanceof it?hu:Array.isArray(t)?mu:"object"===e&&isNaN(t)?gu:pu)(n,t)}],Bo.interpolateArray=mu;var rl=function(){return Et},ul=Bo.map({linear:rl,poly:Su,quad:function(){return _u},cubic:function(){return bu},sin:function(){return ku},exp:function(){return Eu},circle:function(){return Au},elastic:Cu,back:Nu,bounce:function(){return zu}}),il=Bo.map({"in":Et,out:xu,"in-out":Mu,"out-in":function(n){return Mu(xu(n))}});Bo.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=ul.get(e)||rl,r=il.get(r)||Et,yu(r(e.apply(null,Wo.call(arguments,1))))},Bo.interpolateHcl=Lu,Bo.interpolateHsl=Tu,Bo.interpolateLab=qu,Bo.interpolateRound=Ru,Bo.transform=function(n){var t=Go.createElementNS(Bo.ns.prefix.svg,"g");return(Bo.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Du(e?e.matrix:ol)})(n)},Du.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var ol={a:1,b:0,c:0,d:1,e:0,f:0};Bo.interpolateTransform=Fu,Bo.layout={},Bo.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Yu(n[e]));return t}},Bo.layout.chord=function(){function n(){var n,l,f,h,g,p={},v=[],d=Bo.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(l=0,g=-1;++g<i;)l+=u[h][g];v.push(l),m.push(Bo.range(i)),n+=l}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(Aa-s*i)/n,l=0,h=-1;++h<i;){for(f=l,g=-1;++g<i;){var y=d[h],x=m[y][g],M=u[y][x],_=l,b=l+=M*n;p[y+"-"+x]={index:y,subindex:x,startAngle:_,endAngle:b,value:M}}r[y]={index:y,startAngle:f,endAngle:l,value:(l-f)/n},l+=s}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,l={},s=0;return l.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,l):u},l.padding=function(n){return arguments.length?(s=n,e=r=null,l):s},l.sortGroups=function(n){return arguments.length?(o=n,e=r=null,l):o},l.sortSubgroups=function(n){return arguments.length?(a=n,e=null,l):a},l.sortChords=function(n){return arguments.length?(c=n,e&&t(),l):c},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},Bo.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-e,c=i*i+o*o;if(c>a*a/d){if(p>c){var l=t.charge/c;n.px-=i*l,n.py-=o*l}return!0}if(t.point&&c&&p>c){var l=t.pointCharge/c;n.px-=i*l,n.py-=o*l}}return!t.charge}}function t(n){n.px=Bo.event.x,n.py=Bo.event.y,a.resume()}var e,r,u,i,o,a={},c=Bo.dispatch("start","tick","end"),l=[1,1],s=.9,f=al,h=cl,g=-30,p=ll,v=.1,d=.64,m=[],y=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,p,d,x,M,_=m.length,b=y.length;for(e=0;b>e;++e)a=y[e],f=a.source,h=a.target,x=h.x-f.x,M=h.y-f.y,(p=x*x+M*M)&&(p=r*i[e]*((p=Math.sqrt(p))-u[e])/p,x*=p,M*=p,h.x-=x*(d=f.weight/(h.weight+f.weight)),h.y-=M*d,f.x+=x*(d=1-d),f.y+=M*d);if((d=r*v)&&(x=l[0]/2,M=l[1]/2,e=-1,d))for(;++e<_;)a=m[e],a.x+=(x-a.x)*d,a.y+=(M-a.y)*d;if(g)for(Wu(t=Bo.geom.quadtree(m),r,o),e=-1;++e<_;)(a=m[e]).fixed||t.visit(n(a));for(e=-1;++e<_;)a=m[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*s,a.y-=(a.py-(a.py=a.y))*s);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(y=n,a):y},a.size=function(n){return arguments.length?(l=n,a):l},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(s=+n,a):s},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),Bo.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;l>a;++a){var u=y[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,l=o.length;++a<l;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=m.length,s=y.length,p=l[0],v=l[1];for(t=0;c>t;++t)(r=m[t]).index=t,r.weight=0;for(t=0;s>t;++t)r=y[t],"number"==typeof r.source&&(r.source=m[r.source]),"number"==typeof r.target&&(r.target=m[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=m[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;s>t;++t)u[t]=+f.call(this,y[t],t);else for(t=0;s>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;s>t;++t)i[t]=+h.call(this,y[t],t);else for(t=0;s>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=Bo.behavior.drag().origin(Et).on("dragstart.force",Vu).on("drag.force",t).on("dragend.force",Xu)),arguments.length?(this.on("mouseover.force",$u).on("mouseout.force",Bu).call(e),void 0):e},Bo.rebind(a,c,"on")};var al=20,cl=1,ll=1/0;Bo.layout.hierarchy=function(){function n(u){var i,o=[u],a=[];for(u.depth=0;null!=(i=o.pop());)if(a.push(i),(l=e.call(n,i,i.depth))&&(c=l.length)){for(var c,l,s;--c>=0;)o.push(s=l[c]),s.parent=i,s.depth=i.depth+1;r&&(i.value=0),i.children=l}else r&&(i.value=+r.call(n,i,i.depth)||0),delete i.children;return Ku(u,function(n){var e,u;t&&(e=n.children)&&e.sort(t),r&&(u=n.parent)&&(u.value+=n.value)}),a}var t=ti,e=Qu,r=ni;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(Gu(t,function(n){n.children&&(n.value=0)}),Ku(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},Bo.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,l=-1;for(r=t.value?r/t.value:0;++l<o;)n(a=i[l],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=Bo.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},Ju(e,r)},Bo.layout.pie=function(){function n(i){var o=i.map(function(e,r){return+t.call(n,e,r)}),a=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof u?u.apply(this,arguments):u)-a)/Bo.sum(o),l=Bo.range(i.length);null!=e&&l.sort(e===sl?function(n,t){return o[t]-o[n]}:function(n,t){return e(i[n],i[t])});var s=[];return l.forEach(function(n){var t;s[n]={data:i[n],value:t=o[n],startAngle:a,endAngle:a+=t*c}}),s}var t=Number,e=sl,r=0,u=Aa;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n};var sl={};Bo.layout.stack=function(){function n(a,c){if(!(h=a.length))return a;var l=a.map(function(e,r){return t.call(n,e,r)}),s=l.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,s,c);l=Bo.permute(l,f),s=Bo.permute(s,f);var h,g,p,v,d=r.call(n,s,c),m=l[0].length;for(p=0;m>p;++p)for(u.call(n,l[0][p],v=d[p],s[0][p][1]),g=1;h>g;++g)u.call(n,l[g][p],v+=s[g-1][p][1],s[g][p][1]);return a}var t=Et,e=oi,r=ai,u=ii,i=ri,o=ui;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:fl.get(t)||oi,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:hl.get(t)||ai,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var fl=Bo.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(ci),i=n.map(li),o=Bo.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,l=[],s=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],l.push(e)):(c+=i[e],s.push(e));return s.reverse().concat(l)},reverse:function(n){return Bo.range(n.length).reverse()},"default":oi}),hl=Bo.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,l,s=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=l=0,e=1;h>e;++e){for(t=0,u=0;s>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];s>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,l>c&&(l=c)}for(e=0;h>e;++e)g[e]-=l;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:ai});Bo.layout.histogram=function(){function n(n,i){for(var o,a,c=[],l=n.map(e,this),s=r.call(this,l,i),f=u.call(this,s,l,i),i=-1,h=l.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=l[i],a>=s[0]&&a<=s[1]&&(o=c[Bo.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=gi,u=fi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=kt(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return hi(n,t)}:kt(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},Bo.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],l=u[1],s=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,Ku(a,function(n){n.r=+s(n.value)}),Ku(a,yi),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/l))/2;Ku(a,function(n){n.r+=f}),Ku(a,yi),Ku(a,function(n){n.r-=f})}return _i(a,c/2,l/2,t?1:1/Math.max(2*a.r/c,2*a.r/l)),o}var t,e=Bo.layout.hierarchy().sort(pi),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},Ju(n,e)},Bo.layout.tree=function(){function n(n,u){var s=o.call(this,n,u),f=s[0],h=t(f);if(Ku(h,e),h.parent.m=-h.z,Gu(h,r),l)Gu(f,i);else{var g=f,p=f,v=f;Gu(f,function(n){n.x<g.x&&(g=n),n.x>p.x&&(p=n),n.depth>v.depth&&(v=n)});var d=a(g,p)/2-g.x,m=c[0]/(p.x+a(p,g)/2+d),y=c[1]/(v.depth||1);Gu(f,function(n){n.x=(n.x+d)*m,n.y=n.depth*y})}return s}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var u,i=t.children,o=0,a=i.length;a>o;++o)r.push((i[o]=u={_:i[o],parent:t,children:(u=i[o].children)&&u.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=u);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Ai(n);var i=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+a(n._,r._),n.m=n.z-i):n.z=i}else r&&(n.z=r.z+a(n._,r._));n.parent.A=u(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function u(n,t,e){if(t){for(var r,u=n,i=n,o=t,c=u.parent.children[0],l=u.m,s=i.m,f=o.m,h=c.m;o=ki(o),u=Si(u),o&&u;)c=Si(c),i=ki(i),i.a=n,r=o.z+f-u.z-l+a(o._,u._),r>0&&(Ei(Ci(o,n,e),n,r),l+=r,s+=r),f+=o.m,l+=u.m,h+=c.m,s+=i.m;o&&!ki(i)&&(i.t=o,i.m+=f-s),u&&!Si(c)&&(c.t=u,c.m+=l-h,e=n)}return e}function i(n){n.x*=c[0],n.y=n.depth*c[1]}var o=Bo.layout.hierarchy().sort(null).value(null),a=wi,c=[1,1],l=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(l=null==(c=t)?i:null,n):l?null:c},n.nodeSize=function(t){return arguments.length?(l=null==(c=t)?null:i,n):l?c:null},Ju(n,o)},Bo.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],l=0;Ku(c,function(n){var t=n.children;t&&t.length?(n.x=zi(t),n.y=Ni(t)):(n.x=o?l+=e(n,o):0,n.y=0,o=n)});var s=Li(c),f=Ti(c),h=s.x-e(s,f)/2,g=f.x+e(f,s)/2;return Ku(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=Bo.layout.hierarchy().sort(null).value(null),e=wi,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Ju(n,t)},Bo.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,l=f(e),s=[],h=i.slice(),p=1/0,v="slice"===g?l.dx:"dice"===g?l.dy:"slice-dice"===g?1&e.depth?l.dy:l.dx:Math.min(l.dx,l.dy);for(n(h,l.dx*l.dy/e.value),s.area=0;(c=h.length)>0;)s.push(o=h[c-1]),s.area+=o.area,"squarify"!==g||(a=r(s,v))<=p?(h.pop(),p=a):(s.area-=s.pop().area,u(s,v,l,!1),v=Math.min(l.dx,l.dy),s.length=s.area=0,p=1/0);s.length&&(u(s,v,l,!0),s.length=s.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,l=e.y,s=t?c(n.area/t):0;if(t==e.dx){for((r||s>e.dy)&&(s=e.dy);++i<o;)u=n[i],u.x=a,u.y=l,u.dy=s,a+=u.dx=Math.min(e.x+e.dx-a,s?c(u.area/s):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=s,e.dy-=s}else{for((r||s>e.dx)&&(s=e.dx);++i<o;)u=n[i],u.x=a,u.y=l,u.dx=s,l+=u.dy=Math.min(e.y+e.dy-l,s?c(u.area/s):0);u.z=!1,u.dy+=e.y+e.dy-l,e.x+=s,e.dx-=s}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=l[0],i.dy=l[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=Bo.layout.hierarchy(),c=Math.round,l=[1,1],s=null,f=qi,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(l=n,i):l},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?qi(t):Ri(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Ri(t,n)}if(!arguments.length)return s;var r;return f=null==(s=n)?qi:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Ju(i,a)},Bo.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=Bo.random.normal.apply(Bo,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=Bo.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},Bo.scale={};var gl={floor:Et,ceil:Et};Bo.scale.linear=function(){return Oi([0,1],[0,1],du,!1)};var pl={s:1,g:1,p:1,r:1,e:1};Bo.scale.log=function(){return Wi(Bo.scale.linear().domain([0,1]),10,!0,[1,10])};var vl=Bo.format(".0e"),dl={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};Bo.scale.pow=function(){return Ji(Bo.scale.linear(),1,[0,1])},Bo.scale.sqrt=function(){return Bo.scale.pow().exponent(.5)},Bo.scale.ordinal=function(){return Ki([],{t:"range",a:[[]]})},Bo.scale.category10=function(){return Bo.scale.ordinal().range(ml)},Bo.scale.category20=function(){return Bo.scale.ordinal().range(yl)},Bo.scale.category20b=function(){return Bo.scale.ordinal().range(xl)},Bo.scale.category20c=function(){return Bo.scale.ordinal().range(Ml)};var ml=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(yt),yl=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(yt),xl=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(yt),Ml=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(yt);Bo.scale.quantile=function(){return Qi([],[])
},Bo.scale.quantize=function(){return no(0,1,[0,1])},Bo.scale.threshold=function(){return to([.5],[0,1])},Bo.scale.identity=function(){return eo([0,1])},Bo.svg={},Bo.svg.arc=function(){function n(){var n=t.apply(this,arguments),i=e.apply(this,arguments),o=r.apply(this,arguments)+_l,a=u.apply(this,arguments)+_l,c=(o>a&&(c=o,o=a,a=c),a-o),l=Ea>c?"0":"1",s=Math.cos(o),f=Math.sin(o),h=Math.cos(a),g=Math.sin(a);return c>=bl?n?"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"Z":n?"M"+i*s+","+i*f+"A"+i+","+i+" 0 "+l+",1 "+i*h+","+i*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+l+",0 "+n*s+","+n*f+"Z":"M"+i*s+","+i*f+"A"+i+","+i+" 0 "+l+",1 "+i*h+","+i*g+"L0,0"+"Z"}var t=ro,e=uo,r=io,u=oo;return n.innerRadius=function(e){return arguments.length?(t=kt(e),n):t},n.outerRadius=function(t){return arguments.length?(e=kt(t),n):e},n.startAngle=function(t){return arguments.length?(r=kt(t),n):r},n.endAngle=function(t){return arguments.length?(u=kt(t),n):u},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,i=(r.apply(this,arguments)+u.apply(this,arguments))/2+_l;return[Math.cos(i)*n,Math.sin(i)*n]},n};var _l=-Ca,bl=Aa-Na;Bo.svg.line=function(){return ao(Et)};var wl=Bo.map({linear:co,"linear-closed":lo,step:so,"step-before":fo,"step-after":ho,basis:xo,"basis-open":Mo,"basis-closed":_o,bundle:bo,cardinal:vo,"cardinal-open":go,"cardinal-closed":po,monotone:Co});wl.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Sl=[0,2/3,1/3,0],kl=[0,1/3,2/3,0],El=[0,1/6,2/3,1/6];Bo.svg.line.radial=function(){var n=ao(No);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},fo.reverse=ho,ho.reverse=fo,Bo.svg.area=function(){return zo(Et)},Bo.svg.area.radial=function(){var n=zo(No);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},Bo.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),l=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,l)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,l.r,l.p0)+r(l.r,l.p1,l.a1-l.a0)+u(l.r,l.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)+_l,s=l.call(n,u,r)+_l;return{r:i,a0:o,a1:s,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(s),i*Math.sin(s)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Ea)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=mr,o=yr,a=Lo,c=io,l=oo;return n.radius=function(t){return arguments.length?(a=kt(t),n):a},n.source=function(t){return arguments.length?(i=kt(t),n):i},n.target=function(t){return arguments.length?(o=kt(t),n):o},n.startAngle=function(t){return arguments.length?(c=kt(t),n):c},n.endAngle=function(t){return arguments.length?(l=kt(t),n):l},n},Bo.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=mr,e=yr,r=To;return n.source=function(e){return arguments.length?(t=kt(e),n):t},n.target=function(t){return arguments.length?(e=kt(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},Bo.svg.diagonal.radial=function(){var n=Bo.svg.diagonal(),t=To,e=n.projection;return n.projection=function(n){return arguments.length?e(qo(t=n)):t},n},Bo.svg.symbol=function(){function n(n,r){return(Al.get(t.call(this,n,r))||Po)(e.call(this,n,r))}var t=Do,e=Ro;return n.type=function(e){return arguments.length?(t=kt(e),n):t},n.size=function(t){return arguments.length?(e=kt(t),n):e},n};var Al=Bo.map({circle:Po,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Ll)),e=t*Ll;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/zl),e=t*zl/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/zl),e=t*zl/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});Bo.svg.symbolTypes=Al.keys();var Cl,Nl,zl=Math.sqrt(3),Ll=Math.tan(30*La),Tl=[],ql=0;Tl.call=ya.call,Tl.empty=ya.empty,Tl.node=ya.node,Tl.size=ya.size,Bo.transition=function(n){return arguments.length?Cl?n.transition():n:_a.transition()},Bo.transition.prototype=Tl,Tl.select=function(n){var t,e,r,u=this.id,i=[];n=k(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]);for(var c=this[o],l=-1,s=c.length;++l<s;)(r=c[l])&&(e=n.call(r,r.__data__,l,o))?("__data__"in r&&(e.__data__=r.__data__),Ho(e,l,u,r.__transition__[u]),t.push(e)):t.push(null)}return Uo(i,u)},Tl.selectAll=function(n){var t,e,r,u,i,o=this.id,a=[];n=E(n);for(var c=-1,l=this.length;++c<l;)for(var s=this[c],f=-1,h=s.length;++f<h;)if(r=s[f]){i=r.__transition__[o],e=n.call(r,r.__data__,f,c),a.push(t=[]);for(var g=-1,p=e.length;++g<p;)(u=e[g])&&Ho(u,g,o,i),t.push(u)}return Uo(a,o)},Tl.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=U(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return Uo(u,this.id)},Tl.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):F(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},Tl.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Fu:du,a=Bo.ns.qualify(n);return jo(this,"attr."+n,t,a.local?i:u)},Tl.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=Bo.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Tl.style=function(n,t,e){function r(){this.style.removeProperty(n)}function u(t){return null==t?r:(t+="",function(){var r,u=Qo.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(r=du(u,t),function(t){this.style.setProperty(n,r(t),e)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return jo(this,"style."+n,t,u)},Tl.styleTween=function(n,t,e){function r(r,u){var i=t.call(this,r,u,Qo.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Tl.text=function(n){return jo(this,"text",n,Fo)},Tl.remove=function(){return this.each("end.transition",function(){var n;this.__transition__.count<2&&(n=this.parentNode)&&n.removeChild(this)})},Tl.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=Bo.ease.apply(Bo,arguments)),F(this,function(e){e.__transition__[t].ease=n}))},Tl.delay=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].delay:F(this,"function"==typeof n?function(e,r,u){e.__transition__[t].delay=+n.call(e,e.__data__,r,u)}:(n=+n,function(e){e.__transition__[t].delay=n}))},Tl.duration=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].duration:F(this,"function"==typeof n?function(e,r,u){e.__transition__[t].duration=Math.max(1,n.call(e,e.__data__,r,u))}:(n=Math.max(1,n),function(e){e.__transition__[t].duration=n}))},Tl.each=function(n,t){var e=this.id;if(arguments.length<2){var r=Nl,u=Cl;Cl=e,F(this,function(t,r,u){Nl=t.__transition__[e],n.call(t,t.__data__,r,u)}),Nl=r,Cl=u}else F(this,function(r){var u=r.__transition__[e];(u.event||(u.event=Bo.dispatch("start","end"))).on(n,t)});return this},Tl.transition=function(){for(var n,t,e,r,u=this.id,i=++ql,o=[],a=0,c=this.length;c>a;a++){o.push(n=[]);for(var t=this[a],l=0,s=t.length;s>l;l++)(e=t[l])&&(r=Object.create(e.__transition__[u]),r.delay+=r.duration,Ho(e,l,i,r)),n.push(e)}return Uo(o,i)},Bo.svg.axis=function(){function n(n){n.each(function(){var n,l=Bo.select(this),s=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):Et:t,p=l.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Na),d=Bo.transition(p.exit()).style("opacity",Na).remove(),m=Bo.transition(p.order()).style("opacity",1),y=Math.max(u,0)+o,x=Pi(f),M=l.selectAll(".domain").data([0]),_=(M.enter().append("path").attr("class","domain"),Bo.transition(M));v.append("line"),v.append("text");var b,w,S,k,E=v.select("line"),A=m.select("line"),C=p.select("text").text(g),N=v.select("text"),z=m.select("text"),L="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=Oo,b="x",S="y",w="x2",k="y2",C.attr("dy",0>L?"0em":".71em").style("text-anchor","middle"),_.attr("d","M"+x[0]+","+L*i+"V0H"+x[1]+"V"+L*i)):(n=Yo,b="y",S="x",w="y2",k="x2",C.attr("dy",".32em").style("text-anchor",0>L?"end":"start"),_.attr("d","M"+L*i+","+x[0]+"H0V"+x[1]+"H"+L*i)),E.attr(k,L*u),N.attr(S,L*y),A.attr(w,0).attr(k,L*u),z.attr(b,0).attr(S,L*y),f.rangeBand){var T=f,q=T.rangeBand()/2;s=f=function(n){return T(n)+q}}else s.rangeBand?s=f:d.call(n,f,s);v.call(n,s,f),m.call(n,f,f)})}var t,e=Bo.scale.linear(),r=Rl,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Dl?t+"":Rl,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Rl="bottom",Dl={top:1,right:1,bottom:1,left:1};Bo.svg.brush=function(){function n(i){i.each(function(){var i=Bo.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(p,Et);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Pl[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var s,f=Bo.transition(i),h=Bo.transition(o);c&&(s=Pi(c),h.attr("x",s[0]).attr("width",s[1]-s[0]),e(f)),l&&(s=Pi(l),h.attr("y",s[0]).attr("height",s[1]-s[0]),r(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)]+","+f[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",s[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1]-s[0])}function r(n){n.select(".extent").attr("y",f[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",f[1]-f[0])}function u(){function u(){32==Bo.event.keyCode&&(C||(y=null,z[0]-=s[1],z[1]-=f[1],C=2),_())}function p(){32==Bo.event.keyCode&&2==C&&(z[0]+=s[1],z[1]+=f[1],C=0,_())}function v(){var n=Bo.mouse(M),u=!1;x&&(n[0]+=x[0],n[1]+=x[1]),C||(Bo.event.altKey?(y||(y=[(s[0]+s[1])/2,(f[0]+f[1])/2]),z[0]=s[+(n[0]<y[0])],z[1]=f[+(n[1]<y[1])]):y=null),E&&d(n,c,0)&&(e(S),u=!0),A&&d(n,l,1)&&(r(S),u=!0),u&&(t(S),w({type:"brush",mode:C?"move":"resize"}))}function d(n,t,e){var r,u,a=Pi(t),c=a[0],l=a[1],p=z[e],v=e?f:s,d=v[1]-v[0];return C&&(c-=p,l-=d+p),r=(e?g:h)?Math.max(c,Math.min(l,n[e])):n[e],C?u=(r+=p)+d:(y&&(p=Math.max(c,Math.min(l,2*y[e]-r))),r>p?(u=r,r=p):u=p),v[0]!=r||v[1]!=u?(e?o=null:i=null,v[0]=r,v[1]=u,!0):void 0}function m(){v(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),Bo.select("body").style("cursor",null),L.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),N(),w({type:"brushend"})}var y,x,M=this,b=Bo.select(Bo.event.target),w=a.of(M,arguments),S=Bo.select(M),k=b.datum(),E=!/^(n|s)$/.test(k)&&c,A=!/^(e|w)$/.test(k)&&l,C=b.classed("extent"),N=X(),z=Bo.mouse(M),L=Bo.select(Qo).on("keydown.brush",u).on("keyup.brush",p);if(Bo.event.changedTouches?L.on("touchmove.brush",v).on("touchend.brush",m):L.on("mousemove.brush",v).on("mouseup.brush",m),S.interrupt().selectAll("*").interrupt(),C)z[0]=s[0]-z[0],z[1]=f[0]-z[1];else if(k){var T=+/w$/.test(k),q=+/^n/.test(k);x=[s[1-T]-z[0],f[1-q]-z[1]],z[0]=s[T],z[1]=f[q]}else Bo.event.altKey&&(y=z.slice());S.style("pointer-events","none").selectAll(".resize").style("display",null),Bo.select("body").style("cursor",b.style("cursor")),w({type:"brushstart"}),v()}var i,o,a=w(n,"brushstart","brush","brushend"),c=null,l=null,s=[0,0],f=[0,0],h=!0,g=!0,p=Ul[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:s,y:f,i:i,j:o},e=this.__chart__||t;this.__chart__=t,Cl?Bo.select(this).transition().each("start.brush",function(){i=e.i,o=e.j,s=e.x,f=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=mu(s,t.x),r=mu(f,t.y);return i=o=null,function(u){s=t.x=e(u),f=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,p=Ul[!c<<1|!l],n):c},n.y=function(t){return arguments.length?(l=t,p=Ul[!c<<1|!l],n):l},n.clamp=function(t){return arguments.length?(c&&l?(h=!!t[0],g=!!t[1]):c?h=!!t:l&&(g=!!t),n):c&&l?[h,g]:c?h:l?g:null},n.extent=function(t){var e,r,u,a,h;return arguments.length?(c&&(e=t[0],r=t[1],l&&(e=e[0],r=r[0]),i=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(h=e,e=r,r=h),(e!=s[0]||r!=s[1])&&(s=[e,r])),l&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],l.invert&&(u=l(u),a=l(a)),u>a&&(h=u,u=a,a=h),(u!=f[0]||a!=f[1])&&(f=[u,a])),n):(c&&(i?(e=i[0],r=i[1]):(e=s[0],r=s[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(h=e,e=r,r=h))),l&&(o?(u=o[0],a=o[1]):(u=f[0],a=f[1],l.invert&&(u=l.invert(u),a=l.invert(a)),u>a&&(h=u,u=a,a=h))),c&&l?[[e,u],[r,a]]:c?[e,r]:l&&[u,a])},n.clear=function(){return n.empty()||(s=[0,0],f=[0,0],i=o=null),n},n.empty=function(){return!!c&&s[0]==s[1]||!!l&&f[0]==f[1]},Bo.rebind(n,a,"on")};var Pl={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Ul=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],jl=rc.format=lc.timeFormat,Fl=jl.utc,Hl=Fl("%Y-%m-%dT%H:%M:%S.%LZ");jl.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Io:Hl,Io.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Io.toString=Hl.toString,rc.second=Ft(function(n){return new uc(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),rc.seconds=rc.second.range,rc.seconds.utc=rc.second.utc.range,rc.minute=Ft(function(n){return new uc(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),rc.minutes=rc.minute.range,rc.minutes.utc=rc.minute.utc.range,rc.hour=Ft(function(n){var t=n.getTimezoneOffset()/60;return new uc(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),rc.hours=rc.hour.range,rc.hours.utc=rc.hour.utc.range,rc.month=Ft(function(n){return n=rc.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),rc.months=rc.month.range,rc.months.utc=rc.month.utc.range;var Ol=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Yl=[[rc.second,1],[rc.second,5],[rc.second,15],[rc.second,30],[rc.minute,1],[rc.minute,5],[rc.minute,15],[rc.minute,30],[rc.hour,1],[rc.hour,3],[rc.hour,6],[rc.hour,12],[rc.day,1],[rc.day,2],[rc.week,1],[rc.month,1],[rc.month,3],[rc.year,1]],Il=jl.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",Ae]]),Zl={range:function(n,t,e){return Bo.range(Math.ceil(n/e)*e,+t,e).map(Vo)},floor:Et,ceil:Et};Yl.year=rc.year,rc.scale=function(){return Zo(Bo.scale.linear(),Yl,Il)};var Vl=Yl.map(function(n){return[n[0].utc,n[1]]}),Xl=Fl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",Ae]]);Vl.year=rc.year.utc,rc.scale.utc=function(){return Zo(Bo.scale.linear(),Vl,Xl)},Bo.text=At(function(n){return n.responseText}),Bo.json=function(n,t){return Ct(n,"application/json",Xo,t)},Bo.html=function(n,t){return Ct(n,"text/html",$o,t)},Bo.xml=At(function(n){return n.responseXML}),"function"==typeof define&&define.amd?define(Bo):"object"==typeof module&&module.exports&&(module.exports=Bo),this.d3=Bo}();
(function(){function t(e,t){return(new Date(t,e+1,0)).getDate()}function n(e,t,n){return function(r,i,s){var o=e(r),u=[];o<r&&t(o);if(s>1)while(o<i){var a=new Date(+o);n(a)%s===0&&u.push(a),t(o)}else while(o<i)u.push(new Date(+o)),t(o);return u}}var e=window.nv||{};e.version="1.1.15b",e.dev=!0,window.nv=e,e.tooltip=e.tooltip||{},e.utils=e.utils||{},e.models=e.models||{},e.charts={},e.graphs=[],e.logs={},e.dispatch=d3.dispatch("render_start","render_end"),e.dev&&(e.dispatch.on("render_start",function(t){e.logs.startTime=+(new Date)}),e.dispatch.on("render_end",function(t){e.logs.endTime=+(new Date),e.logs.totalTime=e.logs.endTime-e.logs.startTime,e.log("total",e.logs.totalTime)})),e.log=function(){if(e.dev&&console.log&&console.log.apply)console.log.apply(console,arguments);else if(e.dev&&typeof console.log=="function"&&Function.prototype.bind){var t=Function.prototype.bind.call(console.log,console);t.apply(console,arguments)}return arguments[arguments.length-1]},e.render=function(n){n=n||1,e.render.active=!0,e.dispatch.render_start(),setTimeout(function(){var t,r;for(var i=0;i<n&&(r=e.render.queue[i]);i++)t=r.generate(),typeof r.callback==typeof Function&&r.callback(t),e.graphs.push(t);e.render.queue.splice(0,i),e.render.queue.length?setTimeout(arguments.callee,0):(e.dispatch.render_end(),e.render.active=!1)},0)},e.render.active=!1,e.render.queue=[],e.addGraph=function(t){typeof arguments[0]==typeof Function&&(t={generate:arguments[0],callback:arguments[1]}),e.render.queue.push(t),e.render.active||e.render()},e.identity=function(e){return e},e.strip=function(e){return e.replace(/(\s|&)/g,"")},d3.time.monthEnd=function(e){return new Date(e.getFullYear(),e.getMonth(),0)},d3.time.monthEnds=n(d3.time.monthEnd,function(e){e.setUTCDate(e.getUTCDate()+1),e.setDate(t(e.getMonth()+1,e.getFullYear()))},function(e){return e.getMonth()}),e.interactiveGuideline=function(){"use strict";function c(o){o.each(function(o){function g(){var e=d3.mouse(this),n=e[0],r=e[1],o=!0,a=!1;l&&(n=d3.event.offsetX,r=d3.event.offsetY,d3.event.target.tagName!=="svg"&&(o=!1),d3.event.target.className.baseVal.match("nv-legend")&&(a=!0)),o&&(n-=i.left,r-=i.top);if(n<0||r<0||n>p||r>d||d3.event.relatedTarget&&d3.event.relatedTarget.ownerSVGElement===undefined||a){if(l&&d3.event.relatedTarget&&d3.event.relatedTarget.ownerSVGElement===undefined&&d3.event.relatedTarget.className.match(t.nvPointerEventsClass))return;u.elementMouseout({mouseX:n,mouseY:r}),c.renderGuideLine(null);return}var f=s.invert(n);u.elementMousemove({mouseX:n,mouseY:r,pointXValue:f}),d3.event.type==="dblclick"&&u.elementDblclick({mouseX:n,mouseY:r,pointXValue:f})}var h=d3.select(this),p=n||960,d=r||400,v=h.selectAll("g.nv-wrap.nv-interactiveLineLayer").data([o]),m=v.enter().append("g").attr("class"," nv-wrap nv-interactiveLineLayer");m.append("g").attr("class","nv-interactiveGuideLine");if(!f)return;f.on("mousemove",g,!0).on("mouseout",g,!0).on("dblclick",g),c.renderGuideLine=function(t){if(!a)return;var n=v.select(".nv-interactiveGuideLine").selectAll("line").data(t!=null?[e.utils.NaNtoZero(t)]:[],String);n.enter().append("line").attr("class","nv-guideline").attr("x1",function(e){return e}).attr("x2",function(e){return e}).attr("y1",d).attr("y2",0),n.exit().remove()}})}var t=e.models.tooltip(),n=null,r=null,i={left:0,top:0},s=d3.scale.linear(),o=d3.scale.linear(),u=d3.dispatch("elementMousemove","elementMouseout","elementDblclick"),a=!0,f=null,l=navigator.userAgent.indexOf("MSIE")!==-1;return c.dispatch=u,c.tooltip=t,c.margin=function(e){return arguments.length?(i.top=typeof e.top!="undefined"?e.top:i.top,i.left=typeof e.left!="undefined"?e.left:i.left,c):i},c.width=function(e){return arguments.length?(n=e,c):n},c.height=function(e){return arguments.length?(r=e,c):r},c.xScale=function(e){return arguments.length?(s=e,c):s},c.showGuideLine=function(e){return arguments.length?(a=e,c):a},c.svgContainer=function(e){return arguments.length?(f=e,c):f},c},e.interactiveBisect=function(e,t,n){"use strict";if(!e instanceof Array)return null;typeof n!="function"&&(n=function(e,t){return e.x});var r=d3.bisector(n).left,i=d3.max([0,r(e,t)-1]),s=n(e[i],i);typeof s=="undefined"&&(s=i);if(s===t)return i;var o=d3.min([i+1,e.length-1]),u=n(e[o],o);return typeof u=="undefined"&&(u=o),Math.abs(u-t)>=Math.abs(s-t)?i:o},e.nearestValueIndex=function(e,t,n){"use strict";var r=Infinity,i=null;return e.forEach(function(e,s){var o=Math.abs(t-e);o<=r&&o<n&&(r=o,i=s)}),i},function(){"use strict";window.nv.tooltip={},window.nv.models.tooltip=function(){function y(){if(a){var e=d3.select(a);e.node().tagName!=="svg"&&(e=e.select("svg"));var t=e.node()?e.attr("viewBox"):null;if(t){t=t.split(" ");var n=parseInt(e.style("width"))/t[2];l.left=l.left*n,l.top=l.top*n}}}function b(e){var t;a?t=d3.select(a):t=d3.select("body");var n=t.select(".nvtooltip");return n.node()===null&&(n=t.append("div").attr("class","nvtooltip "+(u?u:"xy-tooltip")).attr("id",h)),n.node().innerHTML=e,n.style("top",0).style("left",0).style("opacity",0),n.selectAll("div, table, td, tr").classed(p,!0),n.classed(p,!0),n.node()}function w(){if(!c)return;if(!g(n))return;y();var t=l.left,u=o!=null?o:l.top,h=b(m(n));f=h;if(a){var p=a.getElementsByTagName("svg")[0],d=p?p.getBoundingClientRect():a.getBoundingClientRect(),v={left:0,top:0};if(p){var E=p.getBoundingClientRect(),S=a.getBoundingClientRect(),x=E.top;if(x<0){var T=a.getBoundingClientRect();x=Math.abs(x)>T.height?0:x}v.top=Math.abs(x-S.top),v.left=Math.abs(E.left-S.left)}t+=a.offsetLeft+v.left-2*a.scrollLeft,u+=a.offsetTop+v.top-2*a.scrollTop}return s&&s>0&&(u=Math.floor(u/s)*s),e.tooltip.calcTooltipPosition([t,u],r,i,h),w}var t=null,n=null,r="w",i=50,s=25,o=null,u=null,a=null,f=null,l={left:null,top:null},c=!0,h="nvtooltip-"+Math.floor(Math.random()*1e5),p="nv-pointer-events-none",d=function(e,t){return e},v=function(e){return e},m=function(e){if(t!=null)return t;if(e==null)return"";var n=d3.select(document.createElement("table")),r=n.selectAll("thead").data([e]).enter().append("thead");r.append("tr").append("td").attr("colspan",3).append("strong").classed("x-value",!0).html(v(e.value));var i=n.selectAll("tbody").data([e]).enter().append("tbody"),s=i.selectAll("tr").data(function(e){return e.series}).enter().append("tr").classed("highlight",function(e){return e.highlight});s.append("td").classed("legend-color-guide",!0).append("div").style("background-color",function(e){return e.color}),s.append("td").classed("key",!0).html(function(e){return e.key}),s.append("td").classed("value",!0).html(function(e,t){return d(e.value,t)}),s.selectAll("td").each(function(e){if(e.highlight){var t=d3.scale.linear().domain([0,1]).range(["#fff",e.color]),n=.6;d3.select(this).style("border-bottom-color",t(n)).style("border-top-color",t(n))}});var o=n.node().outerHTML;return e.footer!==undefined&&(o+="<div class='footer'>"+e.footer+"</div>"),o},g=function(e){return e&&e.series&&e.series.length>0?!0:!1};return w.nvPointerEventsClass=p,w.content=function(e){return arguments.length?(t=e,w):t},w.tooltipElem=function(){return f},w.contentGenerator=function(e){return arguments.length?(typeof e=="function"&&(m=e),w):m},w.data=function(e){return arguments.length?(n=e,w):n},w.gravity=function(e){return arguments.length?(r=e,w):r},w.distance=function(e){return arguments.length?(i=e,w):i},w.snapDistance=function(e){return arguments.length?(s=e,w):s},w.classes=function(e){return arguments.length?(u=e,w):u},w.chartContainer=function(e){return arguments.length?(a=e,w):a},w.position=function(e){return arguments.length?(l.left=typeof e.left!="undefined"?e.left:l.left,l.top=typeof e.top!="undefined"?e.top:l.top,w):l},w.fixedTop=function(e){return arguments.length?(o=e,w):o},w.enabled=function(e){return arguments.length?(c=e,w):c},w.valueFormatter=function(e){return arguments.length?(typeof e=="function"&&(d=e),w):d},w.headerFormatter=function(e){return arguments.length?(typeof e=="function"&&(v=e),w):v},w.id=function(){return h},w},e.tooltip.show=function(t,n,r,i,s,o){var u=document.createElement("div");u.className="nvtooltip "+(o?o:"xy-tooltip");var a=s;if(!s||s.tagName.match(/g|svg/i))a=document.getElementsByTagName("body")[0];u.style.left=0,u.style.top=0,u.style.opacity=0,u.innerHTML=n,a.appendChild(u),s&&(t[0]=t[0]-s.scrollLeft,t[1]=t[1]-s.scrollTop),e.tooltip.calcTooltipPosition(t,r,i,u)},e.tooltip.findFirstNonSVGParent=function(e){while(e.tagName.match(/^g|svg$/i)!==null)e=e.parentNode;return e},e.tooltip.findTotalOffsetTop=function(e,t){var n=t;do isNaN(e.offsetTop)||(n+=e.offsetTop);while(e=e.offsetParent);return n},e.tooltip.findTotalOffsetLeft=function(e,t){var n=t;do isNaN(e.offsetLeft)||(n+=e.offsetLeft);while(e=e.offsetParent);return n},e.tooltip.calcTooltipPosition=function(t,n,r,i){var s=parseInt(i.offsetHeight),o=parseInt(i.offsetWidth),u=e.utils.windowSize().width,a=e.utils.windowSize().height,f=window.pageYOffset,l=window.pageXOffset,c,h;a=window.innerWidth>=document.body.scrollWidth?a:a-16,u=window.innerHeight>=document.body.scrollHeight?u:u-16,n=n||"s",r=r||20;var p=function(t){return e.tooltip.findTotalOffsetTop(t,h)},d=function(t){return e.tooltip.findTotalOffsetLeft(t,c)};switch(n){case"e":c=t[0]-o-r,h=t[1]-s/2;var v=d(i),m=p(i);v<l&&(c=t[0]+r>l?t[0]+r:l-v+c),m<f&&(h=f-m+h),m+s>f+a&&(h=f+a-m+h-s);break;case"w":c=t[0]+r,h=t[1]-s/2;var v=d(i),m=p(i);v+o>u&&(c=t[0]-o-r),m<f&&(h=f+5),m+s>f+a&&(h=f+a-m+h-s);break;case"n":c=t[0]-o/2-5,h=t[1]+r;var v=d(i),m=p(i);v<l&&(c=l+5),v+o>u&&(c=c-o/2+5),m+s>f+a&&(h=f+a-m+h-s);break;case"s":c=t[0]-o/2,h=t[1]-s-r;var v=d(i),m=p(i);v<l&&(c=l+5),v+o>u&&(c=c-o/2+5),f>m&&(h=f);break;case"none":c=t[0],h=t[1]-r;var v=d(i),m=p(i)}return i.style.left=c+"px",i.style.top=h+"px",i.style.opacity=1,i.style.position="absolute",i},e.tooltip.cleanup=function(){var e=document.getElementsByClassName("nvtooltip"),t=[];while(e.length)t.push(e[0]),e[0].style.transitionDelay="0 !important",e[0].style.opacity=0,e[0].className="nvtooltip-pending-removal";setTimeout(function(){while(t.length){var e=t.pop();e.parentNode.removeChild(e)}},500)}}(),e.utils.windowSize=function(){var e={width:640,height:480};return document.body&&document.body.offsetWidth&&(e.width=document.body.offsetWidth,e.height=document.body.offsetHeight),document.compatMode=="CSS1Compat"&&document.documentElement&&document.documentElement.offsetWidth&&(e.width=document.documentElement.offsetWidth,e.height=document.documentElement.offsetHeight),window.innerWidth&&window.innerHeight&&(e.width=window.innerWidth,e.height=window.innerHeight),e},e.utils.windowResize=function(e){if(e===undefined)return;var t=window.onresize;window.onresize=function(n){typeof t=="function"&&t(n),e(n)}},e.utils.getColor=function(t){return arguments.length?Object.prototype.toString.call(t)==="[object Array]"?function(e,n){return e.color||t[n%t.length]}:t:e.utils.defaultColor()},e.utils.defaultColor=function(){var e=d3.scale.category20().range();return function(t,n){return t.color||e[n%e.length]}},e.utils.customTheme=function(e,t,n){t=t||function(e){return e.key},n=n||d3.scale.category20().range();var r=n.length;return function(i,s){var o=t(i);return r||(r=n.length),typeof e[o]!="undefined"?typeof e[o]=="function"?e[o]():e[o]:n[--r]}},e.utils.pjax=function(t,n){function r(r){d3.html(r,function(r){var i=d3.select(n).node();i.parentNode.replaceChild(d3.select(r).select(n).node(),i),e.utils.pjax(t,n)})}d3.selectAll(t).on("click",function(){history.pushState(this.href,this.textContent,this.href),r(this.href),d3.event.preventDefault()}),d3.select(window).on("popstate",function(){d3.event.state&&r(d3.event.state)})},e.utils.calcApproxTextWidth=function(e){if(typeof e.style=="function"&&typeof e.text=="function"){var t=parseInt(e.style("font-size").replace("px","")),n=e.text().length;return n*t*.5}return 0},e.utils.NaNtoZero=function(e){return typeof e!="number"||isNaN(e)||e===null||e===Infinity?0:e},e.utils.optionsFunc=function(e){return e&&d3.map(e).forEach(function(e,t){typeof this[e]=="function"&&this[e](t)}.bind(this)),this},e.models.axis=function(){"use strict";function m(e){return e.each(function(e){var i=d3.select(this),m=i.selectAll("g.nv-wrap.nv-axis").data([e]),g=m.enter().append("g").attr("class","nvd3 nv-wrap nv-axis"),y=g.append("g"),b=m.select("g");p!==null?t.ticks(p):(t.orient()=="top"||t.orient()=="bottom")&&t.ticks(Math.abs(s.range()[1]-s.range()[0])/100),b.transition().call(t),v=v||t.scale();var w=t.tickFormat();w==null&&(w=v.tickFormat());var E=b.selectAll("text.nv-axislabel").data([o||null]);E.exit().remove();switch(t.orient()){case"top":E.enter().append("text").attr("class","nv-axislabel");var S=s.range().length==2?s.range()[1]:s.range()[s.range().length-1]+(s.range()[1]-s.range()[0]);E.attr("text-anchor","middle").attr("y",0).attr("x",S/2);if(u){var x=m.selectAll("g.nv-axisMaxMin").data(s.domain());x.enter().append("g").attr("class","nv-axisMaxMin").append("text"),x.exit().remove(),x.attr("transform",function(e,t){return"translate("+s(e)+",0)"}).select("text").attr("dy","-0.5em").attr("y",-t.tickPadding()).attr("text-anchor","middle").text(function(e,t){var n=w(e);return(""+n).match("NaN")?"":n}),x.transition().attr("transform",function(e,t){return"translate("+s.range()[t]+",0)"})}break;case"bottom":var T=36,N=30,C=b.selectAll("g").select("text");if(f%360){C.each(function(e,t){var n=this.getBBox().width;n>N&&(N=n)});var k=Math.abs(Math.sin(f*Math.PI/180)),T=(k?k*N:N)+30;C.attr("transform",function(e,t,n){return"rotate("+f+" 0,0)"}).style("text-anchor",f%360>0?"start":"end")}E.enter().append("text").attr("class","nv-axislabel");var S=s.range().length==2?s.range()[1]:s.range()[s.range().length-1]+(s.range()[1]-s.range()[0]);E.attr("text-anchor","middle").attr("y",T).attr("x",S/2);if(u){var x=m.selectAll("g.nv-axisMaxMin").data([s.domain()[0],s.domain()[s.domain().length-1]]);x.enter().append("g").attr("class","nv-axisMaxMin").append("text"),x.exit().remove(),x.attr("transform",function(e,t){return"translate("+(s(e)+(h?s.rangeBand()/2:0))+",0)"}).select("text").attr("dy",".71em").attr("y",t.tickPadding()).attr("transform",function(e,t,n){return"rotate("+f+" 0,0)"}).style("text-anchor",f?f%360>0?"start":"end":"middle").text(function(e,t){var n=w(e);return(""+n).match("NaN")?"":n}),x.transition().attr("transform",function(e,t){return"translate("+(s(e)+(h?s.rangeBand()/2:0))+",0)"})}c&&C.attr("transform",function(e,t){return"translate(0,"+(t%2==0?"0":"12")+")"});break;case"right":E.enter().append("text").attr("class","nv-axislabel"),E.style("text-anchor",l?"middle":"begin").attr("transform",l?"rotate(90)":"").attr("y",l?-Math.max(n.right,r)+12:-10).attr("x",l?s.range()[0]/2:t.tickPadding());if(u){var x=m.selectAll("g.nv-axisMaxMin").data(s.domain());x.enter().append("g").attr("class","nv-axisMaxMin").append("text").style("opacity",0),x.exit().remove(),x.attr("transform",function(e,t){return"translate(0,"+s(e)+")"}).select("text").attr("dy",".32em").attr("y",0).attr("x",t.tickPadding()).style("text-anchor","start").text(function(e,t){var n=w(e);return(""+n).match("NaN")?"":n}),x.transition().attr("transform",function(e,t){return"translate(0,"+s.range()[t]+")"}).select("text").style("opacity",1)}break;case"left":E.enter().append("text").attr("class","nv-axislabel"),E.style("text-anchor",l?"middle":"end").attr("transform",l?"rotate(-90)":"").attr("y",l?-Math.max(n.left,r)+d:-10).attr("x",l?-s.range()[0]/2:-t.tickPadding());if(u){var x=m.selectAll("g.nv-axisMaxMin").data(s.domain());x.enter().append("g").attr("class","nv-axisMaxMin").append("text").style("opacity",0),x.exit().remove(),x.attr("transform",function(e,t){return"translate(0,"+v(e)+")"}).select("text").attr("dy",".32em").attr("y",0).attr("x",-t.tickPadding()).attr("text-anchor","end").text(function(e,t){var n=w(e);return(""+n).match("NaN")?"":n}),x.transition().attr("transform",function(e,t){return"translate(0,"+s.range()[t]+")"}).select("text").style("opacity",1)}}E.text(function(e){return e}),u&&(t.orient()==="left"||t.orient()==="right")&&(b.selectAll("g").each(function(e,t){d3.select(this).select("text").attr("opacity",1);if(s(e)<s.range()[1]+10||s(e)>s.range()[0]-10)(e>1e-10||e<-1e-10)&&d3.select(this).attr("opacity",0),d3.select(this).select("text").attr("opacity",0)}),s.domain()[0]==s.domain()[1]&&s.domain()[0]==0&&m.selectAll("g.nv-axisMaxMin").style("opacity",function(e,t){return t?0:1}));if(u&&(t.orient()==="top"||t.orient()==="bottom")){var L=[];m.selectAll("g.nv-axisMaxMin").each(function(e,t){try{t?L.push(s(e)-this.getBBox().width-4):L.push(s(e)+this.getBBox().width+4)}catch(n){t?L.push(s(e)-4):L.push(s(e)+4)}}),b.selectAll("g").each(function(e,t){if(s(e)<L[0]||s(e)>L[1])e>1e-10||e<-1e-10?d3.select(this).remove():d3.select(this).select("text").remove()})}a&&b.selectAll(".tick").filter(function(e){return!parseFloat(Math.round(e.__data__*1e5)/1e6)&&e.__data__!==undefined}).classed("zero",!0),v=s.copy()}),m}var t=d3.svg.axis(),n={top:0,right:0,bottom:0,left:0},r=75,i=60,s=d3.scale.linear(),o=null,u=!0,a=!0,f=0,l=!0,c=!1,h=!1,p=null,d=12;t.scale(s).orient("bottom").tickFormat(function(e){return e});var v;return m.axis=t,d3.rebind(m,t,"orient","tickValues","tickSubdivide","tickSize","tickPadding","tickFormat"),d3.rebind(m,s,"domain","range","rangeBand","rangeBands"),m.options=e.utils.optionsFunc.bind(m),m.margin=function(e){return arguments.length?(n.top=typeof e.top!="undefined"?e.top:n.top,n.right=typeof e.right!="undefined"?e.right:n.right,n.bottom=typeof e.bottom!="undefined"?e.bottom:n.bottom,n.left=typeof e.left!="undefined"?e.left:n.left,m):n},m.width=function(e){return arguments.length?(r=e,m):r},m.ticks=function(e){return arguments.length?(p=e,m):p},m.height=function(e){return arguments.length?(i=e,m):i},m.axisLabel=function(e){return arguments.length?(o=e,m):o},m.showMaxMin=function(e){return arguments.length?(u=e,m):u},m.highlightZero=function(e){return arguments.length?(a=e,m):a},m.scale=function(e){return arguments.length?(s=e,t.scale(s),h=typeof s.rangeBands=="function",d3.rebind(m,s,"domain","range","rangeBand","rangeBands"),m):s},m.rotateYLabel=function(e){return arguments.length?(l=e,m):l},m.rotateLabels=function(e){return arguments.length?(f=e,m):f},m.staggerLabels=function(e){return arguments.length?(c=e,m):c},m.axisLabelDistance=function(e){return arguments.length?(d=e,m):d},m},e.models.bullet=function(){"use strict";function m(e){return e.each(function(e,n){var p=c-t.left-t.right,m=h-t.top-t.bottom,g=d3.select(this),y=i.call(this,e,n).slice().sort(d3.descending),b=s.call(this,e,n).slice().sort(d3.descending),w=o.call(this,e,n).slice().sort(d3.descending),E=u.call(this,e,n).slice(),S=a.call(this,e,n).slice(),x=f.call(this,e,n).slice(),T=d3.scale.linear().domain(d3.extent(d3.merge([l,y]))).range(r?[p,0]:[0,p]),N=this.__chart__||d3.scale.linear().domain([0,Infinity]).range(T.range());this.__chart__=T;var C=d3.min(y),k=d3.max(y),L=y[1],A=g.selectAll("g.nv-wrap.nv-bullet").data([e]),O=A.enter().append("g").attr("class","nvd3 nv-wrap nv-bullet"),M=O.append("g"),_=A.select("g");M.append("rect").attr("class","nv-range nv-rangeMax"),M.append("rect").attr("class","nv-range nv-rangeAvg"),M.append("rect").attr("class","nv-range nv-rangeMin"),M.append("rect").attr("class","nv-measure"),M.append("path").attr("class","nv-markerTriangle"),A.attr("transform","translate("+t.left+","+t.top+")");var D=function(e){return Math.abs(N(e)-N(0))},P=function(e){return Math.abs(T(e)-T(0))},H=function(e){return e<0?N(e):N(0)},B=function(e){return e<0?T(e):T(0)};_.select("rect.nv-rangeMax").attr("height",m).attr("width",P(k>0?k:C)).attr("x",B(k>0?k:C)).datum(k>0?k:C),_.select("rect.nv-rangeAvg").attr("height",m).attr("width",P(L)).attr("x",B(L)).datum(L),_.select("rect.nv-rangeMin").attr("height",m).attr("width",P(k)).attr("x",B(k)).attr("width",P(k>0?C:k)).attr("x",B(k>0?C:k)).datum(k>0?C:k),_.select("rect.nv-measure").style("fill",d).attr("height",m/3).attr("y",m/3).attr("width",w<0?T(0)-T(w[0]):T(w[0])-T(0)).attr("x",B(w)).on("mouseover",function(){v.elementMouseover({value:w[0],label:x[0]||"Current",pos:[T(w[0]),m/2]})}).on("mouseout",function(){v.elementMouseout({value:w[0],label:x[0]||"Current"})});var j=m/6;b[0]?_.selectAll("path.nv-markerTriangle").attr("transform",function(e){return"translate("+T(b[0])+","+m/2+")"}).attr("d","M0,"+j+"L"+j+","+ -j+" "+ -j+","+ -j+"Z").on("mouseover",function(){v.elementMouseover({value:b[0],label:S[0]||"Previous",pos:[T(b[0]),m/2]})}).on("mouseout",function(){v.elementMouseout({value:b[0],label:S[0]||"Previous"})}):_.selectAll("path.nv-markerTriangle").remove(),A.selectAll(".nv-range").on("mouseover",function(e,t){var n=E[t]||(t?t==1?"Mean":"Minimum":"Maximum");v.elementMouseover({value:e,label:n,pos:[T(e),m/2]})}).on("mouseout",function(e,t){var n=E[t]||(t?t==1?"Mean":"Minimum":"Maximum");v.elementMouseout({value:e,label:n})})}),m}var t={top:0,right:0,bottom:0,left:0},n="left",r=!1,i=function(e){return e.ranges},s=function(e){return e.markers},o=function(e){return e.measures},u=function(e){return e.rangeLabels?e.rangeLabels:[]},a=function(e){return e.markerLabels?e.markerLabels:[]},f=function(e){return e.measureLabels?e.measureLabels:[]},l=[0],c=380,h=30,p=null,d=e.utils.getColor(["#1f77b4"]),v=d3.dispatch("elementMouseover","elementMouseout");return m.dispatch=v,m.options=e.utils.optionsFunc.bind(m),m.orient=function(e){return arguments.length?(n=e,r=n=="right"||n=="bottom",m):n},m.ranges=function(e){return arguments.length?(i=e,m):i},m.markers=function(e){return arguments.length?(s=e,m):s},m.measures=function(e){return arguments.length?(o=e,m):o},m.forceX=function(e){return arguments.length?(l=e,m):l},m.width=function(e){return arguments.length?(c=e,m):c},m.height=function(e){return arguments.length?(h=e,m):h},m.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,m):t},m.tickFormat=function(e){return arguments.length?(p=e,m):p},m.color=function(t){return arguments.length?(d=e.utils.getColor(t),m):d},m},e.models.bulletChart=function(){"use strict";function m(e){return e.each(function(n,h){var g=d3.select(this),y=(a||parseInt(g.style("width"))||960)-i.left-i.right,b=f-i.top-i.bottom,w=this;m.update=function(){m(e)},m.container=this;if(!n||!s.call(this,n,h)){var E=g.selectAll(".nv-noData").data([p]);return E.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),E.attr("x",i.left+y/2).attr("y",18+i.top+b/2).text(function(e){return e}),m}g.selectAll(".nv-noData").remove();var S=s.call(this,n,h).slice().sort(d3.descending),x=o.call(this,n,h).slice().sort(d3.descending),T=u.call(this,n,h).slice().sort(d3.descending),N=g.selectAll("g.nv-wrap.nv-bulletChart").data([n]),C=N.enter().append("g").attr("class","nvd3 nv-wrap nv-bulletChart"),k=C.append("g"),L=N.select("g");k.append("g").attr("class","nv-bulletWrap"),k.append("g").attr("class","nv-titles"),N.attr("transform","translate("+i.left+","+i.top+")");var A=d3.scale.linear().domain([0,Math.max(S[0],x[0],T[0])]).range(r?[y,0]:[0,y]),O=this.__chart__||d3.scale.linear().domain([0,Infinity]).range(A.range());this.__chart__=A;var M=function(e){return Math.abs(O(e)-O(0))},_=function(e){return Math.abs(A(e)-A(0))},D=k.select(".nv-titles").append("g").attr("text-anchor","end").attr("transform","translate(-6,"+(f-i.top-i.bottom)/2+")");D.append("text").attr("class","nv-title").text(function(e){return e.title}),D.append("text").attr("class","nv-subtitle").attr("dy","1em").text(function(e){return e.subtitle}),t.width(y).height(b);var P=L.select(".nv-bulletWrap");d3.transition(P).call(t);var H=l||A.tickFormat(y/100),B=L.selectAll("g.nv-tick").data(A.ticks(y/50),function(e){return this.textContent||H(e)}),j=B.enter().append("g").attr("class","nv-tick").attr("transform",function(e){return"translate("+O(e)+",0)"}).style("opacity",1e-6);j.append("line").attr("y1",b).attr("y2",b*7/6),j.append("text").attr("text-anchor","middle").attr("dy","1em").attr("y",b*7/6).text(H);var F=d3.transition(B).attr("transform",function(e){return"translate("+A(e)+",0)"}).style("opacity",1);F.select("line").attr("y1",b).attr("y2",b*7/6),F.select("text").attr("y",b*7/6),d3.transition(B.exit()).attr("transform",function(e){return"translate("+A(e)+",0)"}).style("opacity",1e-6).remove(),d.on("tooltipShow",function(e){e.key=n.title,c&&v(e,w.parentNode)})}),d3.timer.flush(),m}var t=e.models.bullet(),n="left",r=!1,i={top:5,right:40,bottom:20,left:120},s=function(e){return e.ranges},o=function(e){return e.markers},u=function(e){return e.measures},a=null,f=55,l=null,c=!0,h=function(e,t,n,r,i){return"<h3>"+t+"</h3>"+"<p>"+n+"</p>"},p="No Data Available.",d=d3.dispatch("tooltipShow","tooltipHide"),v=function(t,n){var r=t.pos[0]+(n.offsetLeft||0)+i.left,s=t.pos[1]+(n.offsetTop||0)+i.top,o=h(t.key,t.label,t.value,t,m);e.tooltip.show([r,s],o,t.value<0?"e":"w",null,n)};return t.dispatch.on("elementMouseover.tooltip",function(e){d.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){d.tooltipHide(e)}),d.on("tooltipHide",function(){c&&e.tooltip.cleanup()}),m.dispatch=d,m.bullet=t,d3.rebind(m,t,"color"),m.options=e.utils.optionsFunc.bind(m),m.orient=function(e){return arguments.length?(n=e,r=n=="right"||n=="bottom",m):n},m.ranges=function(e){return arguments.length?(s=e,m):s},m.markers=function(e){return arguments.length?(o=e,m):o},m.measures=function(e){return arguments.length?(u=e,m):u},m.width=function(e){return arguments.length?(a=e,m):a},m.height=function(e){return arguments.length?(f=e,m):f},m.margin=function(e){return arguments.length?(i.top=typeof e.top!="undefined"?e.top:i.top,i.right=typeof e.right!="undefined"?e.right:i.right,i.bottom=typeof e.bottom!="undefined"?e.bottom:i.bottom,i.left=typeof e.left!="undefined"?e.left:i.left,m):i},m.tickFormat=function(e){return arguments.length?(l=e,m):l},m.tooltips=function(e){return arguments.length?(c=e,m):c},m.tooltipContent=function(e){return arguments.length?(h=e,m):h},m.noData=function(e){return arguments.length?(p=e,m):p},m},e.models.cumulativeLineChart=function(){"use strict";function D(b){return b.each(function(b){function q(e,t){d3.select(D.container).style("cursor","ew-resize")}function R(e,t){M.x=d3.event.x,M.i=Math.round(O.invert(M.x)),rt()}function U(e,t){d3.select(D.container).style("cursor","auto"),x.index=M.i,k.stateChange(x)}function rt(){nt.data([M]);var e=D.transitionDuration();D.transitionDuration(0),D.update(),D.transitionDuration(e)}var A=d3.select(this).classed("nv-chart-"+S,!0),H=this,B=(f||parseInt(A.style("width"))||960)-u.left-u.right,j=(l||parseInt(A.style("height"))||400)-u.top-u.bottom;D.update=function(){A.transition().duration(L).call(D)},D.container=this,x.disabled=b.map(function(e){return!!e.disabled});if(!T){var F;T={};for(F in x)x[F]instanceof Array?T[F]=x[F].slice(0):T[F]=x[F]}var I=d3.behavior.drag().on("dragstart",q).on("drag",R).on("dragend",U);if(!b||!b.length||!b.filter(function(e){return e.values.length}).length){var z=A.selectAll(".nv-noData").data([N]);return z.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),z.attr("x",u.left+B/2).attr("y",u.top+j/2).text(function(e){return e}),D}A.selectAll(".nv-noData").remove(),w=t.xScale(),E=t.yScale();if(!y){var W=b.filter(function(e){return!e.disabled}).map(function(e,n){var r=d3.extent(e.values,t.y());return r[0]<-0.95&&(r[0]=-0.95),[(r[0]-r[1])/(1+r[1]),(r[1]-r[0])/(1+r[0])]}),X=[d3.min(W,function(e){return e[0]}),d3.max(W,function(e){return e[1]})];t.yDomain(X)}else t.yDomain(null);O.domain([0,b[0].values.length-1]).range([0,B]).clamp(!0);var b=P(M.i,b),V=g?"none":"all",$=A.selectAll("g.nv-wrap.nv-cumulativeLine").data([b]),J=$.enter().append("g").attr("class","nvd3 nv-wrap nv-cumulativeLine").append("g"),K=$.select("g");J.append("g").attr("class","nv-interactive"),J.append("g").attr("class","nv-x nv-axis").style("pointer-events","none"),J.append("g").attr("class","nv-y nv-axis"),J.append("g").attr("class","nv-background"),J.append("g").attr("class","nv-linesWrap").style("pointer-events",V),J.append("g").attr("class","nv-avgLinesWrap").style("pointer-events","none"),J.append("g").attr("class","nv-legendWrap"),J.append("g").attr("class","nv-controlsWrap"),c&&(i.width(B),K.select(".nv-legendWrap").datum(b).call(i),u.top!=i.height()&&(u.top=i.height(),j=(l||parseInt(A.style("height"))||400)-u.top-u.bottom),K.select(".nv-legendWrap").attr("transform","translate(0,"+ -u.top+")"));if(m){var Q=[{key:"Re-scale y-axis",disabled:!y}];s.width(140).color(["#444","#444","#444"]).rightAlign(!1).margin({top:5,right:0,bottom:5,left:20}),K.select(".nv-controlsWrap").datum(Q).attr("transform","translate(0,"+ -u.top+")").call(s)}$.attr("transform","translate("+u.left+","+u.top+")"),d&&K.select(".nv-y.nv-axis").attr("transform","translate("+B+",0)");var G=b.filter(function(e){return e.tempDisabled});$.select(".tempDisabled").remove(),G.length&&$.append("text").attr("class","tempDisabled").attr("x",B/2).attr("y","-.71em").style("text-anchor","end").text(G.map(function(e){return e.key}).join(", ")+" values cannot be calculated for this time period."),g&&(o.width(B).height(j).margin({left:u.left,top:u.top}).svgContainer(A).xScale(w),$.select(".nv-interactive").call(o)),J.select(".nv-background").append("rect"),K.select(".nv-background rect").attr("width",B).attr("height",j),t.y(function(e){return e.display.y}).width(B).height(j).color(b.map(function(e,t){return e.color||a(e,t)}).filter(function(e,t){return!b[t].disabled&&!b[t].tempDisabled}));var Y=K.select(".nv-linesWrap").datum(b.filter(function(e){return!e.disabled&&!e.tempDisabled}));Y.call(t),b.forEach(function(e,t){e.seriesIndex=t});var Z=b.filter(function(e){return!e.disabled&&!!C(e)}),et=K.select(".nv-avgLinesWrap").selectAll("line").data(Z,function(e){return e.key}),tt=function(e){var t=E(C(e));return t<0?0:t>j?j:t};et.enter().append("line").style("stroke-width",2).style("stroke-dasharray","10,10").style("stroke",function(e,n){return t.color()(e,e.seriesIndex)}).attr("x1",0).attr("x2",B).attr("y1",tt).attr("y2",tt),et.style("stroke-opacity",function(e){var t=E(C(e));return t<0||t>j?0:1}).attr("x1",0).attr("x2",B).attr("y1",tt).attr("y2",tt),et.exit().remove();var nt=Y.selectAll(".nv-indexLine").data([M]);nt.enter().append("rect").attr("class","nv-indexLine").attr("width",3).attr("x",-2).attr("fill","red").attr("fill-opacity",.5).style("pointer-events","all").call(I),nt.attr("transform",function(e){return"translate("+O(e.i)+",0)"}).attr("height",j),h&&(n.scale(w).ticks(Math.min(b[0].values.length,B/70)).tickSize(-j,0),K.select(".nv-x.nv-axis").attr("transform","translate(0,"+E.range()[0]+")"),d3.transition(K.select(".nv-x.nv-axis")).call(n)),p&&(r.scale(E).ticks(j/36).tickSize(-B,0),d3.transition(K.select(".nv-y.nv-axis")).call(r)),K.select(".nv-background rect").on("click",function(){M.x=d3.mouse(this)[0],M.i=Math.round(O.invert(M.x)),x.index=M.i,k.stateChange(x),rt()}),t.dispatch.on("elementClick",function(e){M.i=e.pointIndex,M.x=O(M.i),x.index=M.i,k.stateChange(x),rt()}),s.dispatch.on("legendClick",function(e,t){e.disabled=!e.disabled,y=!e.disabled,x.rescaleY=y,k.stateChange(x),D.update()}),i.dispatch.on("stateChange",function(e){x.disabled=e.disabled,k.stateChange(x),D.update()}),o.dispatch.on("elementMousemove",function(i){t.clearHighlights();var s,f,l,c=[];b.filter(function(e,t){return e.seriesIndex=t,!e.disabled}).forEach(function(n,r){f=e.interactiveBisect(n.values,i.pointXValue,D.x()),t.highlightPoint(r,f,!0);var o=n.values[f];if(typeof o=="undefined")return;typeof s=="undefined"&&(s=o),typeof l=="undefined"&&(l=D.xScale()(D.x()(o,f))),c.push({key:n.key,value:D.y()(o,f),color:a(n,n.seriesIndex)})});if(c.length>2){var h=D.yScale().invert(i.mouseY),p=Math.abs(D.yScale().domain()[0]-D.yScale().domain()[1]),d=.03*p,m=e.nearestValueIndex(c.map(function(e){return e.value}),h,d);m!==null&&(c[m].highlight=!0)}var g=n.tickFormat()(D.x()(s,f),f);o.tooltip.position({left:l+u.left,top:i.mouseY+u.top}).chartContainer(H.parentNode).enabled(v).valueFormatter(function(e,t){return r.tickFormat()(e)}).data({value:g,series:c})(),o.renderGuideLine(l)}),o.dispatch.on("elementMouseout",function(e){k.tooltipHide(),t.clearHighlights()}),k.on("tooltipShow",function(e){v&&_(e,H.parentNode)}),k.on("changeState",function(e){typeof e.disabled!="undefined"&&(b.forEach(function(t,n){t.disabled=e.disabled[n]}),x.disabled=e.disabled),typeof e.index!="undefined"&&(M.i=e.index,M.x=O(M.i),x.index=e.index,nt.data([M])),typeof e.rescaleY!="undefined"&&(y=e.rescaleY),D.update()})}),D}function P(e,n){return n.map(function(n,r){if(!n.values)return n;var i=t.y()(n.values[e],e);return i<-0.95&&!A?(n.tempDisabled=!0,n):(n.tempDisabled=!1,n.values=
n.values.map(function(e,n){return e.display={y:(t.y()(e,n)-i)/(1+i)},e}),n)})}var t=e.models.line(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s=e.models.legend(),o=e.interactiveGuideline(),u={top:30,right:30,bottom:50,left:60},a=e.utils.defaultColor(),f=null,l=null,c=!0,h=!0,p=!0,d=!1,v=!0,m=!0,g=!1,y=!0,b=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},w,E,S=t.id(),x={index:0,rescaleY:y},T=null,N="No Data Available.",C=function(e){return e.average},k=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),L=250,A=!1;n.orient("bottom").tickPadding(7),r.orient(d?"right":"left"),s.updateState(!1);var O=d3.scale.linear(),M={i:0,x:0},_=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),a=n.tickFormat()(t.x()(i.point,i.pointIndex)),f=r.tickFormat()(t.y()(i.point,i.pointIndex)),l=b(i.series.key,a,f,i,D);e.tooltip.show([o,u],l,null,null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+u.left,e.pos[1]+u.top],k.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){k.tooltipHide(e)}),k.on("tooltipHide",function(){v&&e.tooltip.cleanup()}),D.dispatch=k,D.lines=t,D.legend=i,D.xAxis=n,D.yAxis=r,D.interactiveLayer=o,d3.rebind(D,t,"defined","isArea","x","y","xScale","yScale","size","xDomain","yDomain","xRange","yRange","forceX","forceY","interactive","clipEdge","clipVoronoi","useVoronoi","id"),D.options=e.utils.optionsFunc.bind(D),D.margin=function(e){return arguments.length?(u.top=typeof e.top!="undefined"?e.top:u.top,u.right=typeof e.right!="undefined"?e.right:u.right,u.bottom=typeof e.bottom!="undefined"?e.bottom:u.bottom,u.left=typeof e.left!="undefined"?e.left:u.left,D):u},D.width=function(e){return arguments.length?(f=e,D):f},D.height=function(e){return arguments.length?(l=e,D):l},D.color=function(t){return arguments.length?(a=e.utils.getColor(t),i.color(a),D):a},D.rescaleY=function(e){return arguments.length?(y=e,D):y},D.showControls=function(e){return arguments.length?(m=e,D):m},D.useInteractiveGuideline=function(e){return arguments.length?(g=e,e===!0&&(D.interactive(!1),D.useVoronoi(!1)),D):g},D.showLegend=function(e){return arguments.length?(c=e,D):c},D.showXAxis=function(e){return arguments.length?(h=e,D):h},D.showYAxis=function(e){return arguments.length?(p=e,D):p},D.rightAlignYAxis=function(e){return arguments.length?(d=e,r.orient(e?"right":"left"),D):d},D.tooltips=function(e){return arguments.length?(v=e,D):v},D.tooltipContent=function(e){return arguments.length?(b=e,D):b},D.state=function(e){return arguments.length?(x=e,D):x},D.defaultState=function(e){return arguments.length?(T=e,D):T},D.noData=function(e){return arguments.length?(N=e,D):N},D.average=function(e){return arguments.length?(C=e,D):C},D.transitionDuration=function(e){return arguments.length?(L=e,D):L},D.noErrorCheck=function(e){return arguments.length?(A=e,D):A},D},e.models.discreteBar=function(){"use strict";function E(e){return e.each(function(e){var i=n-t.left-t.right,E=r-t.top-t.bottom,S=d3.select(this);e.forEach(function(e,t){e.values.forEach(function(e){e.series=t})});var T=p&&d?[]:e.map(function(e){return e.values.map(function(e,t){return{x:u(e,t),y:a(e,t),y0:e.y0}})});s.domain(p||d3.merge(T).map(function(e){return e.x})).rangeBands(v||[0,i],.1),o.domain(d||d3.extent(d3.merge(T).map(function(e){return e.y}).concat(f))),c?o.range(m||[E-(o.domain()[0]<0?12:0),o.domain()[1]>0?12:0]):o.range(m||[E,0]),b=b||s,w=w||o.copy().range([o(0),o(0)]);var N=S.selectAll("g.nv-wrap.nv-discretebar").data([e]),C=N.enter().append("g").attr("class","nvd3 nv-wrap nv-discretebar"),k=C.append("g"),L=N.select("g");k.append("g").attr("class","nv-groups"),N.attr("transform","translate("+t.left+","+t.top+")");var A=N.select(".nv-groups").selectAll(".nv-group").data(function(e){return e},function(e){return e.key});A.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),A.exit().transition().style("stroke-opacity",1e-6).style("fill-opacity",1e-6).remove(),A.attr("class",function(e,t){return"nv-group nv-series-"+t}).classed("hover",function(e){return e.hover}),A.transition().style("stroke-opacity",1).style("fill-opacity",.75);var O=A.selectAll("g.nv-bar").data(function(e){return e.values});O.exit().remove();var M=O.enter().append("g").attr("transform",function(e,t,n){return"translate("+(s(u(e,t))+s.rangeBand()*.05)+", "+o(0)+")"}).on("mouseover",function(t,n){d3.select(this).classed("hover",!0),g.elementMouseover({value:a(t,n),point:t,series:e[t.series],pos:[s(u(t,n))+s.rangeBand()*(t.series+.5)/e.length,o(a(t,n))],pointIndex:n,seriesIndex:t.series,e:d3.event})}).on("mouseout",function(t,n){d3.select(this).classed("hover",!1),g.elementMouseout({value:a(t,n),point:t,series:e[t.series],pointIndex:n,seriesIndex:t.series,e:d3.event})}).on("click",function(t,n){g.elementClick({value:a(t,n),point:t,series:e[t.series],pos:[s(u(t,n))+s.rangeBand()*(t.series+.5)/e.length,o(a(t,n))],pointIndex:n,seriesIndex:t.series,e:d3.event}),d3.event.stopPropagation()}).on("dblclick",function(t,n){g.elementDblClick({value:a(t,n),point:t,series:e[t.series],pos:[s(u(t,n))+s.rangeBand()*(t.series+.5)/e.length,o(a(t,n))],pointIndex:n,seriesIndex:t.series,e:d3.event}),d3.event.stopPropagation()});M.append("rect").attr("height",0).attr("width",s.rangeBand()*.9/e.length),c?(M.append("text").attr("text-anchor","middle"),O.select("text").text(function(e,t){return h(a(e,t))}).transition().attr("x",s.rangeBand()*.9/2).attr("y",function(e,t){return a(e,t)<0?o(a(e,t))-o(0)+12:-4})):O.selectAll("text").remove(),O.attr("class",function(e,t){return a(e,t)<0?"nv-bar negative":"nv-bar positive"}).style("fill",function(e,t){return e.color||l(e,t)}).style("stroke",function(e,t){return e.color||l(e,t)}).select("rect").attr("class",y).transition().attr("width",s.rangeBand()*.9/e.length),O.transition().attr("transform",function(e,t){var n=s(u(e,t))+s.rangeBand()*.05,r=a(e,t)<0?o(0):o(0)-o(a(e,t))<1?o(0)-1:o(a(e,t));return"translate("+n+", "+r+")"}).select("rect").attr("height",function(e,t){return Math.max(Math.abs(o(a(e,t))-o(d&&d[0]||0))||1)}),b=s.copy(),w=o.copy()}),E}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=Math.floor(Math.random()*1e4),s=d3.scale.ordinal(),o=d3.scale.linear(),u=function(e){return e.x},a=function(e){return e.y},f=[0],l=e.utils.defaultColor(),c=!1,h=d3.format(",.2f"),p,d,v,m,g=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout"),y="discreteBar",b,w;return E.dispatch=g,E.options=e.utils.optionsFunc.bind(E),E.x=function(e){return arguments.length?(u=e,E):u},E.y=function(e){return arguments.length?(a=e,E):a},E.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,E):t},E.width=function(e){return arguments.length?(n=e,E):n},E.height=function(e){return arguments.length?(r=e,E):r},E.xScale=function(e){return arguments.length?(s=e,E):s},E.yScale=function(e){return arguments.length?(o=e,E):o},E.xDomain=function(e){return arguments.length?(p=e,E):p},E.yDomain=function(e){return arguments.length?(d=e,E):d},E.xRange=function(e){return arguments.length?(v=e,E):v},E.yRange=function(e){return arguments.length?(m=e,E):m},E.forceY=function(e){return arguments.length?(f=e,E):f},E.color=function(t){return arguments.length?(l=e.utils.getColor(t),E):l},E.id=function(e){return arguments.length?(i=e,E):i},E.showValues=function(e){return arguments.length?(c=e,E):c},E.valueFormat=function(e){return arguments.length?(h=e,E):h},E.rectClass=function(e){return arguments.length?(y=e,E):y},E},e.models.discreteBarChart=function(){"use strict";function w(e){return e.each(function(e){var u=d3.select(this),p=this,E=(s||parseInt(u.style("width"))||960)-i.left-i.right,S=(o||parseInt(u.style("height"))||400)-i.top-i.bottom;w.update=function(){g.beforeUpdate(),u.transition().duration(y).call(w)},w.container=this;if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var T=u.selectAll(".nv-noData").data([m]);return T.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),T.attr("x",i.left+E/2).attr("y",i.top+S/2).text(function(e){return e}),w}u.selectAll(".nv-noData").remove(),d=t.xScale(),v=t.yScale().clamp(!0);var N=u.selectAll("g.nv-wrap.nv-discreteBarWithAxes").data([e]),C=N.enter().append("g").attr("class","nvd3 nv-wrap nv-discreteBarWithAxes").append("g"),k=C.append("defs"),L=N.select("g");C.append("g").attr("class","nv-x nv-axis"),C.append("g").attr("class","nv-y nv-axis").append("g").attr("class","nv-zeroLine").append("line"),C.append("g").attr("class","nv-barsWrap"),L.attr("transform","translate("+i.left+","+i.top+")"),l&&L.select(".nv-y.nv-axis").attr("transform","translate("+E+",0)"),t.width(E).height(S);var A=L.select(".nv-barsWrap").datum(e.filter(function(e){return!e.disabled}));A.transition().call(t),k.append("clipPath").attr("id","nv-x-label-clip-"+t.id()).append("rect"),L.select("#nv-x-label-clip-"+t.id()+" rect").attr("width",d.rangeBand()*(c?2:1)).attr("height",16).attr("x",-d.rangeBand()/(c?1:2));if(a){n.scale(d).ticks(E/100).tickSize(-S,0),L.select(".nv-x.nv-axis").attr("transform","translate(0,"+(v.range()[0]+(t.showValues()&&v.domain()[0]<0?16:0))+")"),L.select(".nv-x.nv-axis").transition().call(n);var O=L.select(".nv-x.nv-axis").selectAll("g");c&&O.selectAll("text").attr("transform",function(e,t,n){return"translate(0,"+(n%2==0?"5":"17")+")"})}f&&(r.scale(v).ticks(S/36).tickSize(-E,0),L.select(".nv-y.nv-axis").transition().call(r)),L.select(".nv-zeroLine line").attr("x1",0).attr("x2",E).attr("y1",v(0)).attr("y2",v(0)),g.on("tooltipShow",function(e){h&&b(e,p.parentNode)})}),w}var t=e.models.discreteBar(),n=e.models.axis(),r=e.models.axis(),i={top:15,right:10,bottom:50,left:60},s=null,o=null,u=e.utils.getColor(),a=!0,f=!0,l=!1,c=!1,h=!0,p=function(e,t,n,r,i){return"<h3>"+t+"</h3>"+"<p>"+n+"</p>"},d,v,m="No Data Available.",g=d3.dispatch("tooltipShow","tooltipHide","beforeUpdate"),y=250;n.orient("bottom").highlightZero(!1).showMaxMin(!1).tickFormat(function(e){return e}),r.orient(l?"right":"left").tickFormat(d3.format(",.1f"));var b=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),a=n.tickFormat()(t.x()(i.point,i.pointIndex)),f=r.tickFormat()(t.y()(i.point,i.pointIndex)),l=p(i.series.key,a,f,i,w);e.tooltip.show([o,u],l,i.value<0?"n":"s",null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+i.left,e.pos[1]+i.top],g.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){g.tooltipHide(e)}),g.on("tooltipHide",function(){h&&e.tooltip.cleanup()}),w.dispatch=g,w.discretebar=t,w.xAxis=n,w.yAxis=r,d3.rebind(w,t,"x","y","xDomain","yDomain","xRange","yRange","forceX","forceY","id","showValues","valueFormat"),w.options=e.utils.optionsFunc.bind(w),w.margin=function(e){return arguments.length?(i.top=typeof e.top!="undefined"?e.top:i.top,i.right=typeof e.right!="undefined"?e.right:i.right,i.bottom=typeof e.bottom!="undefined"?e.bottom:i.bottom,i.left=typeof e.left!="undefined"?e.left:i.left,w):i},w.width=function(e){return arguments.length?(s=e,w):s},w.height=function(e){return arguments.length?(o=e,w):o},w.color=function(n){return arguments.length?(u=e.utils.getColor(n),t.color(u),w):u},w.showXAxis=function(e){return arguments.length?(a=e,w):a},w.showYAxis=function(e){return arguments.length?(f=e,w):f},w.rightAlignYAxis=function(e){return arguments.length?(l=e,r.orient(e?"right":"left"),w):l},w.staggerLabels=function(e){return arguments.length?(c=e,w):c},w.tooltips=function(e){return arguments.length?(h=e,w):h},w.tooltipContent=function(e){return arguments.length?(p=e,w):p},w.noData=function(e){return arguments.length?(m=e,w):m},w.transitionDuration=function(e){return arguments.length?(y=e,w):y},w},e.models.distribution=function(){"use strict";function l(e){return e.each(function(e){var a=n-(i==="x"?t.left+t.right:t.top+t.bottom),l=i=="x"?"y":"x",c=d3.select(this);f=f||u;var h=c.selectAll("g.nv-distribution").data([e]),p=h.enter().append("g").attr("class","nvd3 nv-distribution"),d=p.append("g"),v=h.select("g");h.attr("transform","translate("+t.left+","+t.top+")");var m=v.selectAll("g.nv-dist").data(function(e){return e},function(e){return e.key});m.enter().append("g"),m.attr("class",function(e,t){return"nv-dist nv-series-"+t}).style("stroke",function(e,t){return o(e,t)});var g=m.selectAll("line.nv-dist"+i).data(function(e){return e.values});g.enter().append("line").attr(i+"1",function(e,t){return f(s(e,t))}).attr(i+"2",function(e,t){return f(s(e,t))}),m.exit().selectAll("line.nv-dist"+i).transition().attr(i+"1",function(e,t){return u(s(e,t))}).attr(i+"2",function(e,t){return u(s(e,t))}).style("stroke-opacity",0).remove(),g.attr("class",function(e,t){return"nv-dist"+i+" nv-dist"+i+"-"+t}).attr(l+"1",0).attr(l+"2",r),g.transition().attr(i+"1",function(e,t){return u(s(e,t))}).attr(i+"2",function(e,t){return u(s(e,t))}),f=u.copy()}),l}var t={top:0,right:0,bottom:0,left:0},n=400,r=8,i="x",s=function(e){return e[i]},o=e.utils.defaultColor(),u=d3.scale.linear(),a,f;return l.options=e.utils.optionsFunc.bind(l),l.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,l):t},l.width=function(e){return arguments.length?(n=e,l):n},l.axis=function(e){return arguments.length?(i=e,l):i},l.size=function(e){return arguments.length?(r=e,l):r},l.getData=function(e){return arguments.length?(s=d3.functor(e),l):s},l.scale=function(e){return arguments.length?(u=e,l):u},l.color=function(t){return arguments.length?(o=e.utils.getColor(t),l):o},l},e.models.historicalBar=function(){"use strict";function w(E){return E.each(function(w){var E=n-t.left-t.right,S=r-t.top-t.bottom,T=d3.select(this);s.domain(d||d3.extent(w[0].values.map(u).concat(f))),c?s.range(m||[E*.5/w[0].values.length,E*(w[0].values.length-.5)/w[0].values.length]):s.range(m||[0,E]),o.domain(v||d3.extent(w[0].values.map(a).concat(l))).range(g||[S,0]),s.domain()[0]===s.domain()[1]&&(s.domain()[0]?s.domain([s.domain()[0]-s.domain()[0]*.01,s.domain()[1]+s.domain()[1]*.01]):s.domain([-1,1])),o.domain()[0]===o.domain()[1]&&(o.domain()[0]?o.domain([o.domain()[0]+o.domain()[0]*.01,o.domain()[1]-o.domain()[1]*.01]):o.domain([-1,1]));var N=T.selectAll("g.nv-wrap.nv-historicalBar-"+i).data([w[0].values]),C=N.enter().append("g").attr("class","nvd3 nv-wrap nv-historicalBar-"+i),k=C.append("defs"),L=C.append("g"),A=N.select("g");L.append("g").attr("class","nv-bars"),N.attr("transform","translate("+t.left+","+t.top+")"),T.on("click",function(e,t){y.chartClick({data:e,index:t,pos:d3.event,id:i})}),k.append("clipPath").attr("id","nv-chart-clip-path-"+i).append("rect"),N.select("#nv-chart-clip-path-"+i+" rect").attr("width",E).attr("height",S),A.attr("clip-path",h?"url(#nv-chart-clip-path-"+i+")":"");var O=N.select(".nv-bars").selectAll(".nv-bar").data(function(e){return e},function(e,t){return u(e,t)});O.exit().remove();var M=O.enter().append("rect").attr("x",0).attr("y",function(t,n){return e.utils.NaNtoZero(o(Math.max(0,a(t,n))))}).attr("height",function(t,n){return e.utils.NaNtoZero(Math.abs(o(a(t,n))-o(0)))}).attr("transform",function(e,t){return"translate("+(s(u(e,t))-E/w[0].values.length*.45)+",0)"}).on("mouseover",function(e,t){if(!b)return;d3.select(this).classed("hover",!0),y.elementMouseover({point:e,series:w[0],pos:[s(u(e,t)),o(a(e,t))],pointIndex:t,seriesIndex:0,e:d3.event})}).on("mouseout",function(e,t){if(!b)return;d3.select(this).classed("hover",!1),y.elementMouseout({point:e,series:w[0],pointIndex:t,seriesIndex:0,e:d3.event})}).on("click",function(e,t){if(!b)return;y.elementClick({value:a(e,t),data:e,index:t,pos:[s(u(e,t)),o(a(e,t))],e:d3.event,id:i}),d3.event.stopPropagation()}).on("dblclick",function(e,t){if(!b)return;y.elementDblClick({value:a(e,t),data:e,index:t,pos:[s(u(e,t)),o(a(e,t))],e:d3.event,id:i}),d3.event.stopPropagation()});O.attr("fill",function(e,t){return p(e,t)}).attr("class",function(e,t,n){return(a(e,t)<0?"nv-bar negative":"nv-bar positive")+" nv-bar-"+n+"-"+t}).transition().attr("transform",function(e,t){return"translate("+(s(u(e,t))-E/w[0].values.length*.45)+",0)"}).attr("width",E/w[0].values.length*.9),O.transition().attr("y",function(t,n){var r=a(t,n)<0?o(0):o(0)-o(a(t,n))<1?o(0)-1:o(a(t,n));return e.utils.NaNtoZero(r)}).attr("height",function(t,n){return e.utils.NaNtoZero(Math.max(Math.abs(o(a(t,n))-o(0)),1))})}),w}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=Math.floor(Math.random()*1e4),s=d3.scale.linear(),o=d3.scale.linear(),u=function(e){return e.x},a=function(e){return e.y},f=[],l=[0],c=!1,h=!0,p=e.utils.defaultColor(),d,v,m,g,y=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout"),b=!0;return w.highlightPoint=function(e,t){d3.select(".nv-historicalBar-"+i).select(".nv-bars .nv-bar-0-"+e).classed("hover",t)},w.clearHighlights=function(){d3.select(".nv-historicalBar-"+i).select(".nv-bars .nv-bar.hover").classed("hover",!1)},w.dispatch=y,w.options=e.utils.optionsFunc.bind(w),w.x=function(e){return arguments.length?(u=e,w):u},w.y=function(e){return arguments.length?(a=e,w):a},w.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,w):t},w.width=function(e){return arguments.length?(n=e,w):n},w.height=function(e){return arguments.length?(r=e,w):r},w.xScale=function(e){return arguments.length?(s=e,w):s},w.yScale=function(e){return arguments.length?(o=e,w):o},w.xDomain=function(e){return arguments.length?(d=e,w):d},w.yDomain=function(e){return arguments.length?(v=e,w):v},w.xRange=function(e){return arguments.length?(m=e,w):m},w.yRange=function(e){return arguments.length?(g=e,w):g},w.forceX=function(e){return arguments.length?(f=e,w):f},w.forceY=function(e){return arguments.length?(l=e,w):l},w.padData=function(e){return arguments.length?(c=e,w):c},w.clipEdge=function(e){return arguments.length?(h=e,w):h},w.color=function(t){return arguments.length?(p=e.utils.getColor(t),w):p},w.id=function(e){return arguments.length?(i=e,w):i},w.interactive=function(e){return arguments.length?(b=!1,w):b},w},e.models.historicalBarChart=function(){"use strict";function x(e){return e.each(function(d){var T=d3.select(this),N=this,C=(u||parseInt(T.style("width"))||960)-s.left-s.right,k=(a||parseInt(T.style("height"))||400)-s.top-s.bottom;x.update=function(){T.transition().duration(E).call(x)},x.container=this,g.disabled=d.map(function(e){return!!e.disabled});if(!y){var L;y={};for(L in g)g[L]instanceof Array?y[L]=g[L].slice(0):y[L]=g[L]}if(!d||!d.length||!d.filter(function(e){return e.values.length}).length){var A=T.selectAll(".nv-noData").data([b]);return A.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),A.attr("x",s.left+C/2).attr("y",s.top+k/2).text(function(e){return e}),x}T.selectAll(".nv-noData").remove(),v=t.xScale(),m=t.yScale();var O=T.selectAll("g.nv-wrap.nv-historicalBarChart").data([d]),M=O.enter().append("g").attr("class","nvd3 nv-wrap nv-historicalBarChart").append("g"),_=O.select("g");M.append("g").attr("class","nv-x nv-axis"),M.append("g").attr("class","nv-y nv-axis"),M.append("g").attr("class","nv-barsWrap"),M.append("g").attr("class","nv-legendWrap"),f&&(i.width(C),_.select(".nv-legendWrap").datum(d).call(i),s.top!=i.height()&&(s.top=i.height(),k=(a||parseInt(T.style("height"))||400)-s.top-s.bottom),O.select(".nv-legendWrap").attr("transform","translate(0,"+ -s.top+")")),O.attr("transform","translate("+s.left+","+s.top+")"),h&&_.select(".nv-y.nv-axis").attr("transform","translate("+C+",0)"),t.width(C).height(k).color(d.map(function(e,t){return e.color||o(e,t)}).filter(function(e,t){return!d[t].disabled}));var D=_.select(".nv-barsWrap").datum(d.filter(function(e){return!e.disabled}));D.transition().call(t),l&&(n.scale(v).tickSize(-k,0),_.select(".nv-x.nv-axis").attr("transform","translate(0,"+m.range()[0]+")"),_.select(".nv-x.nv-axis").transition().call(n)),c&&(r.scale(m).ticks(k/36).tickSize(-C,0),_.select(".nv-y.nv-axis").transition().call(r)),i.dispatch.on("legendClick",function(t,n){t.disabled=!t.disabled,d.filter(function(e){return!e.disabled}).length||d.map(function(e){return e.disabled=!1,O.selectAll(".nv-series").classed("disabled",!1),e}),g.disabled=d.map(function(e){return!!e.disabled}),w.stateChange(g),e.transition().call(x)}),i.dispatch.on("legendDblclick",function(e){d.forEach(function(e){e.disabled=!0}),e.disabled=!1,g.disabled=d.map(function(e){return!!e.disabled}),w.stateChange(g),x.update()}),w.on("tooltipShow",function(e){p&&S(e,N.parentNode)}),w.on("changeState",function(e){typeof e.disabled!="undefined"&&(d.forEach(function(t,n){t.disabled=e.disabled[n]}),g.disabled=e.disabled),x.update()})}),x}var t=e.models.historicalBar(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s={top:30,right:90,bottom:50,left:90},o=e.utils.defaultColor(),u=null,a=null,f=!1,l=!0,c=!0,h=!1,p=!0,d=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},v,m,g={},y=null,b="No Data Available.",w=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),E=250;n.orient("bottom").tickPadding(7),r.orient(h?"right":"left");var S=function(i,s){if(s){var o=d3.select(s).select("svg"),u=o.node()?o.attr("viewBox"):null;if(u){u=u.split(" ");var a=parseInt(o.style("width"))/u[2];i.pos[0]=i.pos[0]*a,i.pos[1]=i.pos[1]*a}}var f=i.pos[0]+(s.offsetLeft||0),l=i.pos[1]+(s.offsetTop||0),c=n.tickFormat()(t.x()(i.point,i.pointIndex)),h=r.tickFormat()(t.y()(i.point,i.pointIndex)),p=d(i.series.key,c,h,i,x);e.tooltip.show([f,l],p,null,null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+s.left,e.pos[1]+s.top],w.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){w.tooltipHide(e)}),w.on("tooltipHide",function(){p&&e.tooltip.cleanup()}),x.dispatch=w,x.bars=t,x.legend=i,x.xAxis=n,x.yAxis=r,d3.rebind(x,t,"defined","isArea","x","y","size","xScale","yScale","xDomain","yDomain","xRange","yRange","forceX","forceY","interactive","clipEdge","clipVoronoi","id","interpolate","highlightPoint","clearHighlights","interactive"),x.options=e.utils.optionsFunc.bind(x),x.margin=function(e){return arguments.length?(s.top=typeof e.top!="undefined"?e.top:s.top,s.right=typeof e.right!="undefined"?e.right:s.right,s.bottom=typeof e.bottom!="undefined"?e.bottom:s.bottom,s.left=typeof e.left!="undefined"?e.left:s.left,x):s},x.width=function(e){return arguments.length?(u=e,x):u},x.height=function(e){return arguments.length?(a=e,x):a},x.color=function(t){return arguments.length?(o=e.utils.getColor(t),i.color(o),x):o},x.showLegend=function(e){return arguments.length?(f=e,x):f},x.showXAxis=function(e){return arguments.length?(l=e,x):l},x.showYAxis=function(e){return arguments.length?(c=e,x):c},x.rightAlignYAxis=function(e){return arguments.length?(h=e,r.orient(e?"right":"left"),x):h},x.tooltips=function(e){return arguments.length?(p=e,x):p},x.tooltipContent=function(e){return arguments.length?(d=e,x):d},x.state=function(e){return arguments.length?(g=e,x):g},x.defaultState=function(e){return arguments.length?(y=e,x):y},x.noData=function(e){return arguments.length?(b=e,x):b},x.transitionDuration=function(e){return arguments.length?(E=e,x):E},x},e.models.indentedTree=function(){"use strict";function g(e){return e.each(function(e){function k(e,t,n){d3.event.stopPropagation();if(d3.event.shiftKey&&!n)return d3.event.shiftKey=!1,e.values&&e.values.forEach(function(e){(e.values||e._values)&&k(e,0,!0)}),!0;if(!O(e))return!0;e.values?(e._values=e.values,e.values=null):(e.values=e._values,e._values=null),g.update()}function L(e){return e._values&&e._values.length?h:e.values&&e.values.length?p:""}function A(e){return e._values&&e._values.length}function O(e){var t=e.values||e._values;return t&&t.length}var t=1,n=d3.select(this),i=d3.layout.tree().children(function(e){return e.values}).size([r,f]);g.update=function(){n.transition().duration(600).call(g)},e[0]||(e[0]={key:a});var s=i.nodes(e[0]),y=d3.select(this).selectAll("div").data([[s]]),b=y.enter().append("div").attr("class","nvd3 nv-wrap nv-indentedtree"),w=b.append("table"),E=y.select("table").attr("width","100%").attr("class",c);if(o){var S=w.append("thead"),x=S.append("tr");l.forEach(function(e){x.append("th").attr("width",e.width?e.width:"10%").style("text-align",e.type=="numeric"?"right":"left").append("span").text(e.label)})}var T=E.selectAll("tbody").data(function(e){return e});T.enter().append("tbody"),t=d3.max(s,function(e){return e.depth}),i.size([r,t*f]);var N=T.selectAll("tr").data(function(e){return e.filter(function(e){return u&&!e.children?u(e):!0})},function(e,t){return e.id||e.id||++m});N.exit().remove(),N.select("img.nv-treeicon").attr("src",L).classed("folded",A);var C=N.enter().append("tr");l.forEach(function(e,t){var n=C.append("td").style("padding-left",function(e){return(t?0:e.depth*f+12+(L(e)?0:16))+"px"},"important").style("text-align",e.type=="numeric"?"right":"left");t==0&&n.append("img").classed("nv-treeicon",!0).classed("nv-folded",A).attr("src",L).style("width","14px").style("height","14px").style("padding","0 1px").style("display",function(e){return L(e)?"inline-block":"none"}).on("click",k),n.each(function(n){!t&&v(n)?d3.select(this).append("a").attr("href",v).attr("class",d3.functor(e.classes)).append("span"):d3.select(this).append("span"),d3.select(this).select("span").attr("class",d3.functor(e.classes)).text(function(t){return e.format?e.format(t):t[e.key]||"-"})}),e.showCount&&(n.append("span").attr("class","nv-childrenCount"),N.selectAll("span.nv-childrenCount").text(function(e){return e.values&&e.values.length||e._values&&e._values.length?"("+(e.values&&e.values.filter(function(e){return u?u(e):!0}).length||e._values&&e._values.filter(function(e){return u?u(e):!0}).length||0)+")":""}))}),N.order().on("click",function(e){d.elementClick({row:this,data:e,pos:[e.x,e.y]})}).on("dblclick",function(e){d.elementDblclick({row:this,data:e,pos:[e.x,e.y]})}).on("mouseover",function(e){d.elementMouseover({row:this,data:e,pos:[e.x,e.y]})}).on("mouseout",function(e){d.elementMouseout({row:this,data:e,pos:[e.x,e.y]})})}),g}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=e.utils.defaultColor(),s=Math.floor(Math.random()*1e4),o=!0,u=!1,a="No Data Available.",f=20,l=[{key:"key",label:"Name",type:"text"}],c=null,h="images/grey-plus.png",p="images/grey-minus.png",d=d3.dispatch("elementClick","elementDblclick","elementMouseover","elementMouseout"),v=function(e){return e.url},m=0;return g.options=e.utils.optionsFunc.bind(g),g.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,g):t},g.width=function(e){return arguments.length?(n=e,g):n},g.height=function(e){return arguments.length?(r=e,g):r},g.color=function(t){return arguments.length?(i=e.utils.getColor(t),scatter.color(i),g):i},g.id=function(e){return arguments.length?(s=e,g):s},g.header=function(e){return arguments.length?(o=e,g):o},g.noData=function(e){return arguments.length?(a=e,g):a},g.filterZero=function(e){return arguments.length?(u=e,g):u},g.columns=function(e){return arguments.length?(l=e,g):l},g.tableClass=function(e){return arguments.length?(c=e,g):c},g.iconOpen=function(e){return arguments.length?(h=e,g):h},g.iconClose=function(e){return arguments.length?(p=e,g):p},g.getUrl=function(e){return arguments.length?(v=e,g):v},g},e.models.legend=function(){"use strict";function c(h){return h.each(function(c){var h=n-t.left-t.right,p=d3.select(this),d=p.selectAll("g.nv-legend").data([c]),v=d.enter().append("g").attr("class","nvd3 nv-legend").append("g"),m=d.select("g");d.attr("transform","translate("+t.left+","+t.top+")");var g=m.selectAll(".nv-series").data(function(e){return e}),y=g.enter().append("g").attr("class","nv-series").on("mouseover",function(e,t){l.legendMouseover(e,t)}).on("mouseout",function(e,t){l.legendMouseout(e,t)}).on("click",function(e,t){l.legendClick(e,t),a&&(f?(c.forEach(function(e){e.disabled=!0}),e.disabled=!1):(e.disabled=!e.disabled,c.every(function(e){return e.disabled})&&c.forEach(function(e){e.disabled=!1})),l.stateChange({disabled:c.map(function(e){return!!e.disabled})}))}).on("dblclick",function(e,t){l.legendDblclick(e,t),a&&(c.forEach(function(e){e.disabled=!0}),e.disabled=!1,l.stateChange({disabled:c.map(function(e){return!!e.disabled})}))});y.append("circle").style("stroke-width",2).attr("class","nv-legend-symbol").attr("r",5),y.append("text").attr("text-anchor","start").attr("class","nv-legend-text").attr("dy",".32em").attr("dx","8"),g.classed("disabled",function(e){return e.disabled}),g.exit().remove(),g.select("circle").style("fill",function(e,t){return e.color||s(e,t)}).style("stroke",function(e,t){return e.color||s(e,t)}),g.select("text").text(i);if(o){var b=[];g.each(function(t,n){var r=d3.select(this).select("text"),i;try{i=r.getComputedTextLength();if(i<=0)throw Error()}catch(s){i=e.utils.calcApproxTextWidth(r)}b.push(i+28)});var w=0,E=0,S=[];while(E<h&&w<b.length)S[w]=b[w],E+=b[w++];w===0&&(w=1);while(E>h&&w>1){S=[],w--;for(var x=0;x<b.length;x++)b[x]>(S[x%w]||0)&&(S[x%w]=b[x]);E=S.reduce(function(e,t,n,r){return e+t})}var T=[];for(var N=0,C=0;N<w;N++)T[N]=C,C+=S[N];g.attr("transform",function(e,t){return"translate("+T[t%w]+","+(5+Math.floor(t/w)*20)+")"}),u?m.attr("transform","translate("+(n-t.right-E)+","+t.top+")"):m.attr("transform","translate(0,"+t.top+")"),r=t.top+t.bottom+Math.ceil(b.length/w)*20}else{var k=5,L=5,A=0,O;g.attr("transform",function(e,r){var i=d3.select(this).select("text").node().getComputedTextLength()+28;return O=L,n<t.left+t.right+O+i&&(L=O=5,k+=20),L+=i,L>A&&(A=L),"translate("+O+","+k+")"}),m.attr("transform","translate("+(n-t.right-A)+","+t.top+")"),r=t.top+t.bottom+k+15}}),c}var t={top:5,right:0,bottom:5,left:0},n=400,r=20,i=function(e){return e.key},s=e.utils.defaultColor(),o=!0,u=!0,a=!0,f=!1,l=d3.dispatch("legendClick","legendDblclick","legendMouseover","legendMouseout","stateChange");return c.dispatch=l,c.options=e.utils.optionsFunc.bind(c),c.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,c):t},c.width=function(e){return arguments.length?(n=e,c):n},c.height=function(e){return arguments.length?(r=e,c):r},c.key=function(e){return arguments.length?(i=e,c):i},c.color=function(t){return arguments.length?(s=e.utils.getColor(t),c):s},c.align=function(e){return arguments.length?(o=e,c):o},c.rightAlign=function(e){return arguments.length?(u=e,c):u},c.updateState=function(e){return arguments.length?(a=e,c):a},c.radioButtonMode=function(e){return arguments.length?(f=e,c):f},c},e.models.line=function(){"use strict";function m(g){return g.each(function(m){var g=r-n.left-n.right,b=i-n.top-n.bottom,w=d3.select(this);c=t.xScale(),h=t.yScale(),d=d||c,v=v||h;var E=w.selectAll("g.nv-wrap.nv-line").data([m]),S=E.enter().append("g").attr("class","nvd3 nv-wrap nv-line"),T=S.append("defs"),N=S.append("g"),C=E.select("g");N.append("g").attr("class","nv-groups"),N.append("g").attr("class","nv-scatterWrap"),E.attr("transform","translate("+n.left+","+n.top+")"),t.width(g).height(b);var k=E.select(".nv-scatterWrap");k.transition().call(t),T.append("clipPath").attr("id","nv-edge-clip-"+t.id()).append("rect"),E.select("#nv-edge-clip-"+t.id()+" rect").attr("width",g).attr("height",b),C.attr("clip-path",l?"url(#nv-edge-clip-"+t.id()+")":""),k.attr("clip-path",l?"url(#nv-edge-clip-"+t.id()+")":"");var L=E.select(".nv-groups").selectAll(".nv-group").data(function(e){return e},function(e){return e.key});L.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),L.exit().remove(),L.attr("class",function(e,t){return"nv-group nv-series-"+t}).classed("hover",function(e){return e.hover}).style("fill",function(e,t){return s(e,t)}).style("stroke",function(e,t){return s(e,t)}),L.transition().style("stroke-opacity",1).style("fill-opacity",.5);var A=L.selectAll("path.nv-area").data(function(e){return f(e)?[e]:[]});A.enter().append("path").attr("class","nv-area").attr("d",function(t){return d3.svg.area().interpolate(p).defined(a).x(function(t,n){return e.
utils.NaNtoZero(d(o(t,n)))}).y0(function(t,n){return e.utils.NaNtoZero(v(u(t,n)))}).y1(function(e,t){return v(h.domain()[0]<=0?h.domain()[1]>=0?0:h.domain()[1]:h.domain()[0])}).apply(this,[t.values])}),L.exit().selectAll("path.nv-area").remove(),A.transition().attr("d",function(t){return d3.svg.area().interpolate(p).defined(a).x(function(t,n){return e.utils.NaNtoZero(c(o(t,n)))}).y0(function(t,n){return e.utils.NaNtoZero(h(u(t,n)))}).y1(function(e,t){return h(h.domain()[0]<=0?h.domain()[1]>=0?0:h.domain()[1]:h.domain()[0])}).apply(this,[t.values])});var O=L.selectAll("path.nv-line").data(function(e){return[e.values]});O.enter().append("path").attr("class","nv-line").attr("d",d3.svg.line().interpolate(p).defined(a).x(function(t,n){return e.utils.NaNtoZero(d(o(t,n)))}).y(function(t,n){return e.utils.NaNtoZero(v(u(t,n)))})),O.transition().attr("d",d3.svg.line().interpolate(p).defined(a).x(function(t,n){return e.utils.NaNtoZero(c(o(t,n)))}).y(function(t,n){return e.utils.NaNtoZero(h(u(t,n)))})),d=c.copy(),v=h.copy()}),m}var t=e.models.scatter(),n={top:0,right:0,bottom:0,left:0},r=960,i=500,s=e.utils.defaultColor(),o=function(e){return e.x},u=function(e){return e.y},a=function(e,t){return!isNaN(u(e,t))&&u(e,t)!==null},f=function(e){return e.area},l=!1,c,h,p="linear";t.size(16).sizeDomain([16,256]);var d,v;return m.dispatch=t.dispatch,m.scatter=t,d3.rebind(m,t,"id","interactive","size","xScale","yScale","zScale","xDomain","yDomain","xRange","yRange","sizeDomain","forceX","forceY","forceSize","clipVoronoi","useVoronoi","clipRadius","padData","highlightPoint","clearHighlights"),m.options=e.utils.optionsFunc.bind(m),m.margin=function(e){return arguments.length?(n.top=typeof e.top!="undefined"?e.top:n.top,n.right=typeof e.right!="undefined"?e.right:n.right,n.bottom=typeof e.bottom!="undefined"?e.bottom:n.bottom,n.left=typeof e.left!="undefined"?e.left:n.left,m):n},m.width=function(e){return arguments.length?(r=e,m):r},m.height=function(e){return arguments.length?(i=e,m):i},m.x=function(e){return arguments.length?(o=e,t.x(e),m):o},m.y=function(e){return arguments.length?(u=e,t.y(e),m):u},m.clipEdge=function(e){return arguments.length?(l=e,m):l},m.color=function(n){return arguments.length?(s=e.utils.getColor(n),t.color(s),m):s},m.interpolate=function(e){return arguments.length?(p=e,m):p},m.defined=function(e){return arguments.length?(a=e,m):a},m.isArea=function(e){return arguments.length?(f=d3.functor(e),m):f},m},e.models.lineChart=function(){"use strict";function N(m){return m.each(function(m){var C=d3.select(this),k=this,L=(a||parseInt(C.style("width"))||960)-o.left-o.right,A=(f||parseInt(C.style("height"))||400)-o.top-o.bottom;N.update=function(){C.transition().duration(x).call(N)},N.container=this,b.disabled=m.map(function(e){return!!e.disabled});if(!w){var O;w={};for(O in b)b[O]instanceof Array?w[O]=b[O].slice(0):w[O]=b[O]}if(!m||!m.length||!m.filter(function(e){return e.values.length}).length){var M=C.selectAll(".nv-noData").data([E]);return M.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),M.attr("x",o.left+L/2).attr("y",o.top+A/2).text(function(e){return e}),N}C.selectAll(".nv-noData").remove(),g=t.xScale(),y=t.yScale();var _=C.selectAll("g.nv-wrap.nv-lineChart").data([m]),D=_.enter().append("g").attr("class","nvd3 nv-wrap nv-lineChart").append("g"),P=_.select("g");D.append("rect").style("opacity",0),D.append("g").attr("class","nv-x nv-axis"),D.append("g").attr("class","nv-y nv-axis"),D.append("g").attr("class","nv-linesWrap"),D.append("g").attr("class","nv-legendWrap"),D.append("g").attr("class","nv-interactive"),P.select("rect").attr("width",L).attr("height",A>0?A:0),l&&(i.width(L),P.select(".nv-legendWrap").datum(m).call(i),o.top!=i.height()&&(o.top=i.height(),A=(f||parseInt(C.style("height"))||400)-o.top-o.bottom),_.select(".nv-legendWrap").attr("transform","translate(0,"+ -o.top+")")),_.attr("transform","translate("+o.left+","+o.top+")"),p&&P.select(".nv-y.nv-axis").attr("transform","translate("+L+",0)"),d&&(s.width(L).height(A).margin({left:o.left,top:o.top}).svgContainer(C).xScale(g),_.select(".nv-interactive").call(s)),t.width(L).height(A).color(m.map(function(e,t){return e.color||u(e,t)}).filter(function(e,t){return!m[t].disabled}));var H=P.select(".nv-linesWrap").datum(m.filter(function(e){return!e.disabled}));H.transition().call(t),c&&(n.scale(g).ticks(L/100).tickSize(-A,0),P.select(".nv-x.nv-axis").attr("transform","translate(0,"+y.range()[0]+")"),P.select(".nv-x.nv-axis").transition().call(n)),h&&(r.scale(y).ticks(A/36).tickSize(-L,0),P.select(".nv-y.nv-axis").transition().call(r)),i.dispatch.on("stateChange",function(e){b=e,S.stateChange(b),N.update()}),s.dispatch.on("elementMousemove",function(i){t.clearHighlights();var a,f,l,c=[];m.filter(function(e,t){return e.seriesIndex=t,!e.disabled}).forEach(function(n,r){f=e.interactiveBisect(n.values,i.pointXValue,N.x()),t.highlightPoint(r,f,!0);var s=n.values[f];if(typeof s=="undefined")return;typeof a=="undefined"&&(a=s),typeof l=="undefined"&&(l=N.xScale()(N.x()(s,f))),c.push({key:n.key,value:N.y()(s,f),color:u(n,n.seriesIndex)})});if(c.length>2){var h=N.yScale().invert(i.mouseY),p=Math.abs(N.yScale().domain()[0]-N.yScale().domain()[1]),d=.03*p,g=e.nearestValueIndex(c.map(function(e){return e.value}),h,d);g!==null&&(c[g].highlight=!0)}var y=n.tickFormat()(N.x()(a,f));s.tooltip.position({left:l+o.left,top:i.mouseY+o.top}).chartContainer(k.parentNode).enabled(v).valueFormatter(function(e,t){return r.tickFormat()(e)}).data({value:y,series:c})(),s.renderGuideLine(l)}),s.dispatch.on("elementMouseout",function(e){S.tooltipHide(),t.clearHighlights()}),S.on("tooltipShow",function(e){v&&T(e,k.parentNode)}),S.on("changeState",function(e){typeof e.disabled!="undefined"&&m.length===e.disabled.length&&(m.forEach(function(t,n){t.disabled=e.disabled[n]}),b.disabled=e.disabled),N.update()})}),N}var t=e.models.line(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s=e.interactiveGuideline(),o={top:30,right:20,bottom:50,left:60},u=e.utils.defaultColor(),a=null,f=null,l=!0,c=!0,h=!0,p=!1,d=!1,v=!0,m=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},g,y,b={},w=null,E="No Data Available.",S=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),x=250;n.orient("bottom").tickPadding(7),r.orient(p?"right":"left");var T=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),a=n.tickFormat()(t.x()(i.point,i.pointIndex)),f=r.tickFormat()(t.y()(i.point,i.pointIndex)),l=m(i.series.key,a,f,i,N);e.tooltip.show([o,u],l,null,null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+o.left,e.pos[1]+o.top],S.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){S.tooltipHide(e)}),S.on("tooltipHide",function(){v&&e.tooltip.cleanup()}),N.dispatch=S,N.lines=t,N.legend=i,N.xAxis=n,N.yAxis=r,N.interactiveLayer=s,d3.rebind(N,t,"defined","isArea","x","y","size","xScale","yScale","xDomain","yDomain","xRange","yRange","forceX","forceY","interactive","clipEdge","clipVoronoi","useVoronoi","id","interpolate"),N.options=e.utils.optionsFunc.bind(N),N.margin=function(e){return arguments.length?(o.top=typeof e.top!="undefined"?e.top:o.top,o.right=typeof e.right!="undefined"?e.right:o.right,o.bottom=typeof e.bottom!="undefined"?e.bottom:o.bottom,o.left=typeof e.left!="undefined"?e.left:o.left,N):o},N.width=function(e){return arguments.length?(a=e,N):a},N.height=function(e){return arguments.length?(f=e,N):f},N.color=function(t){return arguments.length?(u=e.utils.getColor(t),i.color(u),N):u},N.showLegend=function(e){return arguments.length?(l=e,N):l},N.showXAxis=function(e){return arguments.length?(c=e,N):c},N.showYAxis=function(e){return arguments.length?(h=e,N):h},N.rightAlignYAxis=function(e){return arguments.length?(p=e,r.orient(e?"right":"left"),N):p},N.useInteractiveGuideline=function(e){return arguments.length?(d=e,e===!0&&(N.interactive(!1),N.useVoronoi(!1)),N):d},N.tooltips=function(e){return arguments.length?(v=e,N):v},N.tooltipContent=function(e){return arguments.length?(m=e,N):m},N.state=function(e){return arguments.length?(b=e,N):b},N.defaultState=function(e){return arguments.length?(w=e,N):w},N.noData=function(e){return arguments.length?(E=e,N):E},N.transitionDuration=function(e){return arguments.length?(x=e,N):x},N},e.models.linePlusBarChart=function(){"use strict";function T(e){return e.each(function(e){var l=d3.select(this),c=this,v=(a||parseInt(l.style("width"))||960)-u.left-u.right,N=(f||parseInt(l.style("height"))||400)-u.top-u.bottom;T.update=function(){l.transition().call(T)},b.disabled=e.map(function(e){return!!e.disabled});if(!w){var C;w={};for(C in b)b[C]instanceof Array?w[C]=b[C].slice(0):w[C]=b[C]}if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var k=l.selectAll(".nv-noData").data([E]);return k.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),k.attr("x",u.left+v/2).attr("y",u.top+N/2).text(function(e){return e}),T}l.selectAll(".nv-noData").remove();var L=e.filter(function(e){return!e.disabled&&e.bar}),A=e.filter(function(e){return!e.bar});m=A.filter(function(e){return!e.disabled}).length&&A.filter(function(e){return!e.disabled})[0].values.length?t.xScale():n.xScale(),g=n.yScale(),y=t.yScale();var O=d3.select(this).selectAll("g.nv-wrap.nv-linePlusBar").data([e]),M=O.enter().append("g").attr("class","nvd3 nv-wrap nv-linePlusBar").append("g"),_=O.select("g");M.append("g").attr("class","nv-x nv-axis"),M.append("g").attr("class","nv-y1 nv-axis"),M.append("g").attr("class","nv-y2 nv-axis"),M.append("g").attr("class","nv-barsWrap"),M.append("g").attr("class","nv-linesWrap"),M.append("g").attr("class","nv-legendWrap"),p&&(o.width(v/2),_.select(".nv-legendWrap").datum(e.map(function(e){return e.originalKey=e.originalKey===undefined?e.key:e.originalKey,e.key=e.originalKey+(e.bar?" (left axis)":" (right axis)"),e})).call(o),u.top!=o.height()&&(u.top=o.height(),N=(f||parseInt(l.style("height"))||400)-u.top-u.bottom),_.select(".nv-legendWrap").attr("transform","translate("+v/2+","+ -u.top+")")),O.attr("transform","translate("+u.left+","+u.top+")"),t.width(v).height(N).color(e.map(function(e,t){return e.color||h(e,t)}).filter(function(t,n){return!e[n].disabled&&!e[n].bar})),n.width(v).height(N).color(e.map(function(e,t){return e.color||h(e,t)}).filter(function(t,n){return!e[n].disabled&&e[n].bar}));var D=_.select(".nv-barsWrap").datum(L.length?L:[{values:[]}]),P=_.select(".nv-linesWrap").datum(A[0]&&!A[0].disabled?A:[{values:[]}]);d3.transition(D).call(n),d3.transition(P).call(t),r.scale(m).ticks(v/100).tickSize(-N,0),_.select(".nv-x.nv-axis").attr("transform","translate(0,"+g.range()[0]+")"),d3.transition(_.select(".nv-x.nv-axis")).call(r),i.scale(g).ticks(N/36).tickSize(-v,0),d3.transition(_.select(".nv-y1.nv-axis")).style("opacity",L.length?1:0).call(i),s.scale(y).ticks(N/36).tickSize(L.length?0:-v,0),_.select(".nv-y2.nv-axis").style("opacity",A.length?1:0).attr("transform","translate("+v+",0)"),d3.transition(_.select(".nv-y2.nv-axis")).call(s),o.dispatch.on("stateChange",function(e){b=e,S.stateChange(b),T.update()}),S.on("tooltipShow",function(e){d&&x(e,c.parentNode)}),S.on("changeState",function(t){typeof t.disabled!="undefined"&&(e.forEach(function(e,n){e.disabled=t.disabled[n]}),b.disabled=t.disabled),T.update()})}),T}var t=e.models.line(),n=e.models.historicalBar(),r=e.models.axis(),i=e.models.axis(),s=e.models.axis(),o=e.models.legend(),u={top:30,right:60,bottom:50,left:60},a=null,f=null,l=function(e){return e.x},c=function(e){return e.y},h=e.utils.defaultColor(),p=!0,d=!0,v=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},m,g,y,b={},w=null,E="No Data Available.",S=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState");n.padData(!0),t.clipEdge(!1).padData(!0),r.orient("bottom").tickPadding(7).highlightZero(!1),i.orient("left"),s.orient("right");var x=function(n,o){var u=n.pos[0]+(o.offsetLeft||0),a=n.pos[1]+(o.offsetTop||0),f=r.tickFormat()(t.x()(n.point,n.pointIndex)),l=(n.series.bar?i:s).tickFormat()(t.y()(n.point,n.pointIndex)),c=v(n.series.key,f,l,n,T);e.tooltip.show([u,a],c,n.value<0?"n":"s",null,o)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+u.left,e.pos[1]+u.top],S.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){S.tooltipHide(e)}),n.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+u.left,e.pos[1]+u.top],S.tooltipShow(e)}),n.dispatch.on("elementMouseout.tooltip",function(e){S.tooltipHide(e)}),S.on("tooltipHide",function(){d&&e.tooltip.cleanup()}),T.dispatch=S,T.legend=o,T.lines=t,T.bars=n,T.xAxis=r,T.y1Axis=i,T.y2Axis=s,d3.rebind(T,t,"defined","size","clipVoronoi","interpolate"),T.options=e.utils.optionsFunc.bind(T),T.x=function(e){return arguments.length?(l=e,t.x(e),n.x(e),T):l},T.y=function(e){return arguments.length?(c=e,t.y(e),n.y(e),T):c},T.margin=function(e){return arguments.length?(u.top=typeof e.top!="undefined"?e.top:u.top,u.right=typeof e.right!="undefined"?e.right:u.right,u.bottom=typeof e.bottom!="undefined"?e.bottom:u.bottom,u.left=typeof e.left!="undefined"?e.left:u.left,T):u},T.width=function(e){return arguments.length?(a=e,T):a},T.height=function(e){return arguments.length?(f=e,T):f},T.color=function(t){return arguments.length?(h=e.utils.getColor(t),o.color(h),T):h},T.showLegend=function(e){return arguments.length?(p=e,T):p},T.tooltips=function(e){return arguments.length?(d=e,T):d},T.tooltipContent=function(e){return arguments.length?(v=e,T):v},T.state=function(e){return arguments.length?(b=e,T):b},T.defaultState=function(e){return arguments.length?(w=e,T):w},T.noData=function(e){return arguments.length?(E=e,T):E},T},e.models.lineWithFocusChart=function(){"use strict";function k(e){return e.each(function(e){function U(e){var t=+(e=="e"),n=t?1:-1,r=M/3;return"M"+.5*n+","+r+"A6,6 0 0 "+t+" "+6.5*n+","+(r+6)+"V"+(2*r-6)+"A6,6 0 0 "+t+" "+.5*n+","+2*r+"Z"+"M"+2.5*n+","+(r+8)+"V"+(2*r-8)+"M"+4.5*n+","+(r+8)+"V"+(2*r-8)}function z(){a.empty()||a.extent(w),I.data([a.empty()?g.domain():w]).each(function(e,t){var n=g(e[0])-v.range()[0],r=v.range()[1]-g(e[1]);d3.select(this).select(".left").attr("width",n<0?0:n),d3.select(this).select(".right").attr("x",g(e[1])).attr("width",r<0?0:r)})}function W(){w=a.empty()?null:a.extent();var n=a.empty()?g.domain():a.extent();if(Math.abs(n[0]-n[1])<=1)return;T.brush({extent:n,brush:a}),z();var s=H.select(".nv-focus .nv-linesWrap").datum(e.filter(function(e){return!e.disabled}).map(function(e,r){return{key:e.key,values:e.values.filter(function(e,r){return t.x()(e,r)>=n[0]&&t.x()(e,r)<=n[1]})}}));s.transition().duration(N).call(t),H.select(".nv-focus .nv-x.nv-axis").transition().duration(N).call(r),H.select(".nv-focus .nv-y.nv-axis").transition().duration(N).call(i)}var S=d3.select(this),L=this,A=(h||parseInt(S.style("width"))||960)-f.left-f.right,O=(p||parseInt(S.style("height"))||400)-f.top-f.bottom-d,M=d-l.top-l.bottom;k.update=function(){S.transition().duration(N).call(k)},k.container=this;if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var _=S.selectAll(".nv-noData").data([x]);return _.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),_.attr("x",f.left+A/2).attr("y",f.top+O/2).text(function(e){return e}),k}S.selectAll(".nv-noData").remove(),v=t.xScale(),m=t.yScale(),g=n.xScale(),y=n.yScale();var D=S.selectAll("g.nv-wrap.nv-lineWithFocusChart").data([e]),P=D.enter().append("g").attr("class","nvd3 nv-wrap nv-lineWithFocusChart").append("g"),H=D.select("g");P.append("g").attr("class","nv-legendWrap");var B=P.append("g").attr("class","nv-focus");B.append("g").attr("class","nv-x nv-axis"),B.append("g").attr("class","nv-y nv-axis"),B.append("g").attr("class","nv-linesWrap");var j=P.append("g").attr("class","nv-context");j.append("g").attr("class","nv-x nv-axis"),j.append("g").attr("class","nv-y nv-axis"),j.append("g").attr("class","nv-linesWrap"),j.append("g").attr("class","nv-brushBackground"),j.append("g").attr("class","nv-x nv-brush"),b&&(u.width(A),H.select(".nv-legendWrap").datum(e).call(u),f.top!=u.height()&&(f.top=u.height(),O=(p||parseInt(S.style("height"))||400)-f.top-f.bottom-d),H.select(".nv-legendWrap").attr("transform","translate(0,"+ -f.top+")")),D.attr("transform","translate("+f.left+","+f.top+")"),t.width(A).height(O).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),n.defined(t.defined()).width(A).height(M).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),H.select(".nv-context").attr("transform","translate(0,"+(O+f.bottom+l.top)+")");var F=H.select(".nv-context .nv-linesWrap").datum(e.filter(function(e){return!e.disabled}));d3.transition(F).call(n),r.scale(v).ticks(A/100).tickSize(-O,0),i.scale(m).ticks(O/36).tickSize(-A,0),H.select(".nv-focus .nv-x.nv-axis").attr("transform","translate(0,"+O+")"),a.x(g).on("brush",function(){var e=k.transitionDuration();k.transitionDuration(0),W(),k.transitionDuration(e)}),w&&a.extent(w);var I=H.select(".nv-brushBackground").selectAll("g").data([w||a.extent()]),q=I.enter().append("g");q.append("rect").attr("class","left").attr("x",0).attr("y",0).attr("height",M),q.append("rect").attr("class","right").attr("x",0).attr("y",0).attr("height",M);var R=H.select(".nv-x.nv-brush").call(a);R.selectAll("rect").attr("height",M),R.selectAll(".resize").append("path").attr("d",U),W(),s.scale(g).ticks(A/100).tickSize(-M,0),H.select(".nv-context .nv-x.nv-axis").attr("transform","translate(0,"+y.range()[0]+")"),d3.transition(H.select(".nv-context .nv-x.nv-axis")).call(s),o.scale(y).ticks(M/36).tickSize(-A,0),d3.transition(H.select(".nv-context .nv-y.nv-axis")).call(o),H.select(".nv-context .nv-x.nv-axis").attr("transform","translate(0,"+y.range()[0]+")"),u.dispatch.on("stateChange",function(e){k.update()}),T.on("tooltipShow",function(e){E&&C(e,L.parentNode)})}),k}var t=e.models.line(),n=e.models.line(),r=e.models.axis(),i=e.models.axis(),s=e.models.axis(),o=e.models.axis(),u=e.models.legend(),a=d3.svg.brush(),f={top:30,right:30,bottom:30,left:60},l={top:0,right:30,bottom:20,left:60},c=e.utils.defaultColor(),h=null,p=null,d=100,v,m,g,y,b=!0,w=null,E=!0,S=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},x="No Data Available.",T=d3.dispatch("tooltipShow","tooltipHide","brush"),N=250;t.clipEdge(!0),n.interactive(!1),r.orient("bottom").tickPadding(5),i.orient("left"),s.orient("bottom").tickPadding(5),o.orient("left");var C=function(n,s){var o=n.pos[0]+(s.offsetLeft||0),u=n.pos[1]+(s.offsetTop||0),a=r.tickFormat()(t.x()(n.point,n.pointIndex)),f=i.tickFormat()(t.y()(n.point,n.pointIndex)),l=S(n.series.key,a,f,n,k);e.tooltip.show([o,u],l,null,null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+f.left,e.pos[1]+f.top],T.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),T.on("tooltipHide",function(){E&&e.tooltip.cleanup()}),k.dispatch=T,k.legend=u,k.lines=t,k.lines2=n,k.xAxis=r,k.yAxis=i,k.x2Axis=s,k.y2Axis=o,d3.rebind(k,t,"defined","isArea","size","xDomain","yDomain","xRange","yRange","forceX","forceY","interactive","clipEdge","clipVoronoi","id"),k.options=e.utils.optionsFunc.bind(k),k.x=function(e){return arguments.length?(t.x(e),n.x(e),k):t.x},k.y=function(e){return arguments.length?(t.y(e),n.y(e),k):t.y},k.margin=function(e){return arguments.length?(f.top=typeof e.top!="undefined"?e.top:f.top,f.right=typeof e.right!="undefined"?e.right:f.right,f.bottom=typeof e.bottom!="undefined"?e.bottom:f.bottom,f.left=typeof e.left!="undefined"?e.left:f.left,k):f},k.margin2=function(e){return arguments.length?(l=e,k):l},k.width=function(e){return arguments.length?(h=e,k):h},k.height=function(e){return arguments.length?(p=e,k):p},k.height2=function(e){return arguments.length?(d=e,k):d},k.color=function(t){return arguments.length?(c=e.utils.getColor(t),u.color(c),k):c},k.showLegend=function(e){return arguments.length?(b=e,k):b},k.tooltips=function(e){return arguments.length?(E=e,k):E},k.tooltipContent=function(e){return arguments.length?(S=e,k):S},k.interpolate=function(e){return arguments.length?(t.interpolate(e),n.interpolate(e),k):t.interpolate()},k.noData=function(e){return arguments.length?(x=e,k):x},k.xTickFormat=function(e){return arguments.length?(r.tickFormat(e),s.tickFormat(e),k):r.tickFormat()},k.yTickFormat=function(e){return arguments.length?(i.tickFormat(e),o.tickFormat(e),k):i.tickFormat()},k.brushExtent=function(e){return arguments.length?(w=e,k):w},k.transitionDuration=function(e){return arguments.length?(N=e,k):N},k},e.models.linePlusBarWithFocusChart=function(){"use strict";function B(e){return e.each(function(e){function nt(e){var t=+(e=="e"),n=t?1:-1,r=q/3;return"M"+.5*n+","+r+"A6,6 0 0 "+t+" "+6.5*n+","+(r+6)+"V"+(2*r-6)+"A6,6 0 0 "+t+" "+.5*n+","+2*r+"Z"+"M"+2.5*n+","+(r+8)+"V"+(2*r-8)+"M"+4.5*n+","+(r+8)+"V"+(2*r-8)}function rt(){h.empty()||h.extent(x),Z.data([h.empty()?k.domain():x]).each(function(e,t){var n=k(e[0])-k.range()[0],r=k.range()[1]-k(e[1]);d3.select(this).select(".left").attr("width",n<0?0:n),d3.select(this).select(".right").attr("x",k(e[1])).attr("width",r<0?0:r)})}function it(){x=h.empty()?null:h.extent(),S=h.empty()?k.domain():h.extent(),D.brush({extent:S,brush:h}),rt(),r.width(F).height(I).color(e.map(function(e,t){return e.color||w(e,t)}).filter(function(t,n){return!e[n].disabled&&e[n].bar})),t.width(F).height(I).color(e.map(function(e,t){return e.color||w(e,t)}).filter(function(t,n){return!e[n].disabled&&!e[n].bar}));var n=J.select(".nv-focus .nv-barsWrap").datum(U.length?U.map(function(e,t){return{key:e.key,values:e.values.filter(function(e,t){return r.x()(e,t)>=S[0]&&r.x()(e,t)<=S[1]})}}):[{values:[]}]),i=J.select(".nv-focus .nv-linesWrap").datum(z[0].disabled?[{values:[]}]:z.map(function(e,n){return{key:e.key,values:e.values.filter(function(e,n){return t.x()(e,n)>=S[0]&&t.x()(e,n)<=S[1]})}}));U.length?C=r.xScale():C=t.xScale(),s.scale(C).ticks(F/100).tickSize(-I,0),s.domain([Math.ceil(S[0]),Math.floor(S[1])]),J.select(".nv-x.nv-axis").transition().duration(P).call(s),n.transition().duration(P).call(r),i.transition().duration(P).call(t),J.select(".nv-focus .nv-x.nv-axis").attr("transform","translate(0,"+L.range()[0]+")"),u.scale(L).ticks(I/36).tickSize(-F,0),J.select(".nv-focus .nv-y1.nv-axis").style("opacity",U.length?1:0),a.scale(A).ticks(I/36).tickSize(U.length?0:-F,0),J.select(".nv-focus .nv-y2.nv-axis").style("opacity",z.length?1:0).attr("transform","translate("+C.range()[1]+",0)"),J.select(".nv-focus .nv-y1.nv-axis").transition().duration(P).call(u),J.select(".nv-focus .nv-y2.nv-axis").transition().duration(P).call(a)}var N=d3.select(this),j=this,F=(v||parseInt(N.style("width"))||960)-p.left-p.right,I=(m||parseInt(N.style("height"))||400)-p.top-p.bottom-g,q=g-d.top-d.bottom;B.update=function(){N.transition().duration(P).call(B)},B.container=this;if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var R=N.selectAll(".nv-noData").data([_]);return R.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),R.attr("x",p.left+F/2).attr("y",p.top+I/2).text(function(e){return e}),B}N.selectAll(".nv-noData").remove();var U=e.filter(function(e){return!e.disabled&&e.bar}),z=e.filter(function(e){return!e.bar});C=r.xScale(),k=o.scale(),L=r.yScale(),A=t.yScale(),O=i.yScale(),M=n.yScale();var W=e.filter(function(e){return!e.disabled&&e.bar}).map(function(e){return e.values.map(function(e,t){return{x:y(e,t),y:b(e,t)}})}),X=e.filter(function(e){return!e.disabled&&!e.bar}).map(function(e){return e.values.map(function(e,t){return{x:y(e,t),y:b(e,t)}})});C.range([0,F]),k.domain(d3.extent(d3.merge(W.concat(X)),function(e){return e.x})).range([0,F]);var V=N.selectAll("g.nv-wrap.nv-linePlusBar").data([e]),$=V.enter().append("g").attr("class","nvd3 nv-wrap nv-linePlusBar").append("g"),J=V.select("g");$.append("g").attr("class","nv-legendWrap");var K=$.append("g").attr("class","nv-focus");K.append("g").attr("class","nv-x nv-axis"),K.append("g").attr("class","nv-y1 nv-axis"),K.append("g").attr("class","nv-y2 nv-axis"),K.append("g").attr("class","nv-barsWrap"),K.append("g").attr("class","nv-linesWrap");var Q=$.append("g").attr("class","nv-context");Q.append("g").attr("class","nv-x nv-axis"),Q.append("g").attr("class","nv-y1 nv-axis"),Q.append("g").attr("class","nv-y2 nv-axis"),Q.append("g").attr("class","nv-barsWrap"),Q.append("g").attr("class","nv-linesWrap"),Q.append("g").attr("class","nv-brushBackground"),Q.append("g").attr("class","nv-x nv-brush"),E&&(c.width(F/2),J.select(".nv-legendWrap").datum(e.map(function(e){return e.originalKey=e.originalKey===undefined?e.key:e.originalKey,e.key=e.originalKey+(e.bar?" (left axis)":" (right axis)"),e})).call(c),p.top!=c.height()&&(p.top=c.height(),I=(m||parseInt(N.style("height"))||400)-p.top-p.bottom-g),J.select(".nv-legendWrap").attr("transform","translate("+F/2+","+ -p.top+")")),V.attr("transform","translate("+p.left+","+p.top+")"),i.width(F).height(q).color(e.map(function(e,t){return e.color||w(e,t)}).filter(function(t,n){return!e[n].disabled&&e[n].bar})),n.width(F).height(q).color(e.map(function(e,t){return e.color||w(e,t)}).filter(function(t,n){return!e[n].disabled&&!e[n].bar}));var G=J.select(".nv-context .nv-barsWrap").datum(U.length?U:[{values:[]}]),Y=J.select(".nv-context .nv-linesWrap").datum(z[0].disabled?[{values:[]}]:z);J.select(".nv-context").attr("transform","translate(0,"+(I+p.bottom+d.top)+")"),G.transition().call(i),Y.transition().call(n),h.x(k).on("brush",it),x&&h.extent(x);var Z=J.select(".nv-brushBackground").selectAll("g").data([x||h.extent()]),et=Z.enter().append("g");et.append("rect").attr("class","left").attr("x",0).attr("y",0).attr("height",q),et.append("rect").attr("class","right").attr("x",0).attr("y",0).attr("height",q);var tt=J.select(".nv-x.nv-brush").call(h);tt.selectAll("rect").attr("height",q),tt.selectAll(".resize").append("path").attr("d",nt),o.ticks(F/100).tickSize(-q,0),J.select(".nv-context .nv-x.nv-axis").attr("transform","translate(0,"+O.range()[0]+")"),J.select(".nv-context .nv-x.nv-axis").transition().call(o),f.scale(O).ticks(q/36).tickSize(-F,0),J.select(".nv-context .nv-y1.nv-axis").style("opacity",U.length?1:0).attr("transform","translate(0,"+k.range()[0]+")"),J.select(".nv-context .nv-y1.nv-axis").transition().call(f),l.scale(M).ticks(q/36).tickSize(U.length?0:-F,0),J.select(".nv-context .nv-y2.nv-axis").style("opacity",z.length?1:0).attr("transform","translate("+k.range()[1]+",0)"),J.select(".nv-context .nv-y2.nv-axis").transition().call(l),c.dispatch.on("stateChange",function(e){B.update()}),D.on("tooltipShow",function(e){T&&H(e,j.parentNode)}),it()}),B}var t=e.models.line(),n=e.models.line(),r=e.models.historicalBar(),i=e.models.historicalBar(),s=e.models.axis(),o=e.models.axis(),u=e.models.axis(),a=e.models.axis(),f=e.models.axis(),l=e.models.axis(),c=e.models.legend(),h=d3.svg.brush(),p={top:30,right:30,bottom:30,left:60},d={top:0,right:30,bottom:20,left:60},v=null,m=null,g=100,y=function(e){return e.x},b=function(e){return e.y},w=e.utils.defaultColor(),E=!0,S,x=null,T=!0,N=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},C,k,L,A,O,M,_="No Data Available.",D=d3.dispatch("tooltipShow","tooltipHide","brush"),P=0;t.clipEdge(!0),n.interactive(!1),s.orient("bottom").tickPadding(5),u.orient("left"),a.orient("right"),o.orient("bottom").tickPadding(5),f.orient("left"),l.orient("right");var H=function(n,r){S&&(n.pointIndex+=Math.ceil(S[0]));var i=n.pos[0]+(r.offsetLeft||0),o=n.pos[1]+(r.offsetTop||0),f=s.tickFormat()(t.x()(n.point,n.pointIndex)),l=(n.series.bar?u:a).tickFormat()(t.y()(n.point,n.pointIndex)),c=N(n.series.key,f,l,n,B);e.tooltip.show([i,o],c,n.value<0?"n":"s",null,r)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+p.left,e.pos[1]+p.top],D.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){D.tooltipHide(e)}),r.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+p.left,e.pos[1]+p.top],D.tooltipShow(e)}),r.dispatch.on("elementMouseout.tooltip",function(e){D.tooltipHide(e)}),D.on("tooltipHide",function(){T&&e.tooltip.cleanup()}),B.dispatch=D,B.legend=c,B.lines=t,B.lines2=n,B.bars=r,B.bars2=i,B.xAxis=s,B.x2Axis=o,B.y1Axis=u,B.y2Axis=a,B.y3Axis=f,B.y4Axis=l,d3.rebind(B,t,"defined","size","clipVoronoi","interpolate"),B.options=e.utils.optionsFunc.bind(B),B.x=function(e){return arguments.length?(y=e,t.x(e),r.x(e),B):y},B.y=function(e){return arguments.length?(b=e,t.y(e),r.y(e),B):b},B.margin=function(e){return arguments.length?(p.top=typeof e.top!="undefined"?e.top:p.top,p.right=typeof e.right!="undefined"?e.right:p.right,p.bottom=typeof e.bottom!="undefined"?e.bottom:p.bottom,p.left=typeof e.left!="undefined"?e.left:p.left,B):p},B.width=function(e){return arguments.length?(v=e,B):v},B.height=function(e){return arguments.length?(m=e,B):m},B.color=function(t){return arguments.length?(w=e.utils.getColor(t),c.color(w),B):w},B.showLegend=function(e){return arguments.length?(E=e,B):E},B.tooltips=function(e){return arguments.length?(T=e,B):T},B.tooltipContent=function(e){return arguments.length?(N=e,B):N},B.noData=function(e){return arguments.length?(_=e,B):_},B.brushExtent=function(e){return arguments.length?(x=e,B):x},B},e.models.multiBar=function(){"use strict";function C(e){return e.each(function(e){var C=n-t.left-t.right,k=r-t.top-t.bottom,L=d3.select(this);d&&e.length&&(d=[{values:e[0].values.map(function(e){return{x:e.x,y:0,series:e.series,size:.01}})}]),c&&(e=d3.layout.stack().offset(h).values(function(e){return e.values}).y(a)(!e.length&&d?d:e)),e.forEach(function(e,t){e.values.forEach(function(e){e.series=t})}),c&&e[0].values.map(function(t,n){var r=0,i=0;e.map(function(e){var t=e.values[n];t.size=Math.abs(t.y),t.y<0?(t.y1=i,i-=t.size):(t.y1=t.size+r,r+=t.size)})});var A=y&&b?[]:e.map(function(e){return e.values.map(function(e,t){return{x:u(e,t),y:a(e,t),y0:e.y0,y1:e.y1}})});i.domain(y||d3.merge(A).map(function(e){return e.x})).rangeBands(w||[0,C],S),s.domain(b||d3.extent(d3.merge(A).map(function(e){return c?e.y>0?e.y1:e.y1+e.y:e.y}).concat(f))).range(E||[k,0]),i.domain()[0]===i.domain()[1]&&(i.domain()[0]?i.domain([i.domain()[0]-i.domain()[0]*.01,i.domain()[1]+i.domain()[1]*.01]):i.domain([-1,1])),s.domain()[0]===s.domain()[1]&&(s.domain()[0]?s.domain([s.domain()[0]+s.domain()[0]*.01,s.domain()[1]-s.domain()[1]*.01]):s.domain([-1,1])),T=T||i,N=N||s;var O=L.selectAll("g.nv-wrap.nv-multibar").data([e]),M=O.enter().append("g").attr("class","nvd3 nv-wrap nv-multibar"),_=M.append("defs"),D=M.append("g"),P=O.select("g");D.append("g").attr("class","nv-groups"),O.attr("transform","translate("+t.left+","+t.top+")"),_.append("clipPath").attr("id","nv-edge-clip-"+o).append("rect"),O.select("#nv-edge-clip-"+o+" rect").attr("width",C).attr("height",k),P.attr("clip-path",l?"url(#nv-edge-clip-"+o+")":"");var H=O.select(".nv-groups").selectAll(".nv-group").data(function(e){return e},function(e,t){return t});H.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),H.exit().transition().selectAll("rect.nv-bar").delay(function(t,n){return n*g/e[0].values.length}).attr("y",function(e){return c?N(e.y0):N(0)}).attr("height",0).remove(),H.attr("class",function(e,t){return"nv-group nv-series-"+t}).classed("hover",function(e){return e.hover}).style("fill",function(e,t){return p(e,t)}).style("stroke",function(e,t){return p(e,t)}),H.transition().style("stroke-opacity",1).style("fill-opacity",.75);var B=H.selectAll("rect.nv-bar").data(function(t){return d&&!e.length?d.values:t.values});B.exit().remove();var j=B.enter().append("rect").attr("class",function(e,t){return a(e,t)<0?"nv-bar negative":"nv-bar positive"}).attr("x",function(t,n,r){return c?0:r*i.rangeBand()/e.length}).attr("y",function(e){return N(c?e.y0:0)}).attr("height",0).attr("width",i.rangeBand()/(c?1:e.length)).attr("transform",function(e,t){return"translate("+i(u(e,t))+",0)"});B.style("fill",function(e,t,n){return p(e,n,t)}).style("stroke",function(e,t,n){return p(e,n,t)}).on("mouseover",function(t,n){d3.select(this).classed("hover",!0),x.elementMouseover({value:a(t,n),point:t,series:e[t.series],pos:[i(u(t,n))+i.rangeBand()*(c?e.length/2:t.series+.5)/e.length,s(a(t,n)+(c?t.y0:0))],pointIndex:n,seriesIndex:t.series,e:d3.event})}).on("mouseout",function(t,n){d3.select(this).classed("hover",!1),x.elementMouseout({value:a(t,n),point:t,series:e[t.series],pointIndex:n,seriesIndex:t.series,e:d3.event})}).on("click",function(t,n){x.elementClick({value:a(t,n),point:t,series:e[t.series],pos:[i(u(t,n))+i.rangeBand()*(c?e.length/2:t.series+.5)/e.length
,s(a(t,n)+(c?t.y0:0))],pointIndex:n,seriesIndex:t.series,e:d3.event}),d3.event.stopPropagation()}).on("dblclick",function(t,n){x.elementDblClick({value:a(t,n),point:t,series:e[t.series],pos:[i(u(t,n))+i.rangeBand()*(c?e.length/2:t.series+.5)/e.length,s(a(t,n)+(c?t.y0:0))],pointIndex:n,seriesIndex:t.series,e:d3.event}),d3.event.stopPropagation()}),B.attr("class",function(e,t){return a(e,t)<0?"nv-bar negative":"nv-bar positive"}).transition().attr("transform",function(e,t){return"translate("+i(u(e,t))+",0)"}),v&&(m||(m=e.map(function(){return!0})),B.style("fill",function(e,t,n){return d3.rgb(v(e,t)).darker(m.map(function(e,t){return t}).filter(function(e,t){return!m[t]})[n]).toString()}).style("stroke",function(e,t,n){return d3.rgb(v(e,t)).darker(m.map(function(e,t){return t}).filter(function(e,t){return!m[t]})[n]).toString()})),c?B.transition().delay(function(t,n){return n*g/e[0].values.length}).attr("y",function(e,t){return s(c?e.y1:0)}).attr("height",function(e,t){return Math.max(Math.abs(s(e.y+(c?e.y0:0))-s(c?e.y0:0)),1)}).attr("x",function(t,n){return c?0:t.series*i.rangeBand()/e.length}).attr("width",i.rangeBand()/(c?1:e.length)):B.transition().delay(function(t,n){return n*g/e[0].values.length}).attr("x",function(t,n){return t.series*i.rangeBand()/e.length}).attr("width",i.rangeBand()/e.length).attr("y",function(e,t){return a(e,t)<0?s(0):s(0)-s(a(e,t))<1?s(0)-1:s(a(e,t))||0}).attr("height",function(e,t){return Math.max(Math.abs(s(a(e,t))-s(0)),1)||0}),T=i.copy(),N=s.copy()}),C}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=d3.scale.ordinal(),s=d3.scale.linear(),o=Math.floor(Math.random()*1e4),u=function(e){return e.x},a=function(e){return e.y},f=[0],l=!0,c=!1,h="zero",p=e.utils.defaultColor(),d=!1,v=null,m,g=1200,y,b,w,E,S=.1,x=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout"),T,N;return C.dispatch=x,C.options=e.utils.optionsFunc.bind(C),C.x=function(e){return arguments.length?(u=e,C):u},C.y=function(e){return arguments.length?(a=e,C):a},C.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,C):t},C.width=function(e){return arguments.length?(n=e,C):n},C.height=function(e){return arguments.length?(r=e,C):r},C.xScale=function(e){return arguments.length?(i=e,C):i},C.yScale=function(e){return arguments.length?(s=e,C):s},C.xDomain=function(e){return arguments.length?(y=e,C):y},C.yDomain=function(e){return arguments.length?(b=e,C):b},C.xRange=function(e){return arguments.length?(w=e,C):w},C.yRange=function(e){return arguments.length?(E=e,C):E},C.forceY=function(e){return arguments.length?(f=e,C):f},C.stacked=function(e){return arguments.length?(c=e,C):c},C.stackOffset=function(e){return arguments.length?(h=e,C):h},C.clipEdge=function(e){return arguments.length?(l=e,C):l},C.color=function(t){return arguments.length?(p=e.utils.getColor(t),C):p},C.barColor=function(t){return arguments.length?(v=e.utils.getColor(t),C):v},C.disabled=function(e){return arguments.length?(m=e,C):m},C.id=function(e){return arguments.length?(o=e,C):o},C.hideable=function(e){return arguments.length?(d=e,C):d},C.delay=function(e){return arguments.length?(g=e,C):g},C.groupSpacing=function(e){return arguments.length?(S=e,C):S},C},e.models.multiBarChart=function(){"use strict";function A(e){return e.each(function(e){var b=d3.select(this),O=this,M=(u||parseInt(b.style("width"))||960)-o.left-o.right,_=(a||parseInt(b.style("height"))||400)-o.top-o.bottom;A.update=function(){b.transition().duration(k).call(A)},A.container=this,S.disabled=e.map(function(e){return!!e.disabled});if(!x){var D;x={};for(D in S)S[D]instanceof Array?x[D]=S[D].slice(0):x[D]=S[D]}if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var P=b.selectAll(".nv-noData").data([T]);return P.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),P.attr("x",o.left+M/2).attr("y",o.top+_/2).text(function(e){return e}),A}b.selectAll(".nv-noData").remove(),w=t.xScale(),E=t.yScale();var H=b.selectAll("g.nv-wrap.nv-multiBarWithLegend").data([e]),B=H.enter().append("g").attr("class","nvd3 nv-wrap nv-multiBarWithLegend").append("g"),j=H.select("g");B.append("g").attr("class","nv-x nv-axis"),B.append("g").attr("class","nv-y nv-axis"),B.append("g").attr("class","nv-barsWrap"),B.append("g").attr("class","nv-legendWrap"),B.append("g").attr("class","nv-controlsWrap"),c&&(i.width(M-C()),t.barColor()&&e.forEach(function(e,t){e.color=d3.rgb("#ccc").darker(t*1.5).toString()}),j.select(".nv-legendWrap").datum(e).call(i),o.top!=i.height()&&(o.top=i.height(),_=(a||parseInt(b.style("height"))||400)-o.top-o.bottom),j.select(".nv-legendWrap").attr("transform","translate("+C()+","+ -o.top+")"));if(l){var F=[{key:"Grouped",disabled:t.stacked()},{key:"Stacked",disabled:!t.stacked()}];s.width(C()).color(["#444","#444","#444"]),j.select(".nv-controlsWrap").datum(F).attr("transform","translate(0,"+ -o.top+")").call(s)}H.attr("transform","translate("+o.left+","+o.top+")"),d&&j.select(".nv-y.nv-axis").attr("transform","translate("+M+",0)"),t.disabled(e.map(function(e){return e.disabled})).width(M).height(_).color(e.map(function(e,t){return e.color||f(e,t)}).filter(function(t,n){return!e[n].disabled}));var I=j.select(".nv-barsWrap").datum(e.filter(function(e){return!e.disabled}));I.transition().call(t);if(h){n.scale(w).ticks(M/100).tickSize(-_,0),j.select(".nv-x.nv-axis").attr("transform","translate(0,"+E.range()[0]+")"),j.select(".nv-x.nv-axis").transition().call(n);var q=j.select(".nv-x.nv-axis > g").selectAll("g");q.selectAll("line, text").style("opacity",1);if(m){var R=function(e,t){return"translate("+e+","+t+")"},U=5,z=17;q.selectAll("text").attr("transform",function(e,t,n){return R(0,n%2==0?U:z)});var W=d3.selectAll(".nv-x.nv-axis .nv-wrap g g text")[0].length;j.selectAll(".nv-x.nv-axis .nv-axisMaxMin text").attr("transform",function(e,t){return R(0,t===0||W%2!==0?z:U)})}v&&q.filter(function(t,n){return n%Math.ceil(e[0].values.length/(M/100))!==0}).selectAll("text, line").style("opacity",0),g&&q.selectAll(".tick text").attr("transform","rotate("+g+" 0,0)").style("text-anchor",g>0?"start":"end"),j.select(".nv-x.nv-axis").selectAll("g.nv-axisMaxMin text").style("opacity",1)}p&&(r.scale(E).ticks(_/36).tickSize(-M,0),j.select(".nv-y.nv-axis").transition().call(r)),i.dispatch.on("stateChange",function(e){S=e,N.stateChange(S),A.update()}),s.dispatch.on("legendClick",function(e,n){if(!e.disabled)return;F=F.map(function(e){return e.disabled=!0,e}),e.disabled=!1;switch(e.key){case"Grouped":t.stacked(!1);break;case"Stacked":t.stacked(!0)}S.stacked=t.stacked(),N.stateChange(S),A.update()}),N.on("tooltipShow",function(e){y&&L(e,O.parentNode)}),N.on("changeState",function(n){typeof n.disabled!="undefined"&&(e.forEach(function(e,t){e.disabled=n.disabled[t]}),S.disabled=n.disabled),typeof n.stacked!="undefined"&&(t.stacked(n.stacked),S.stacked=n.stacked),A.update()})}),A}var t=e.models.multiBar(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s=e.models.legend(),o={top:30,right:20,bottom:50,left:60},u=null,a=null,f=e.utils.defaultColor(),l=!0,c=!0,h=!0,p=!0,d=!1,v=!0,m=!1,g=0,y=!0,b=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" on "+t+"</p>"},w,E,S={stacked:!1},x=null,T="No Data Available.",N=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),C=function(){return l?180:0},k=250;t.stacked(!1),n.orient("bottom").tickPadding(7).highlightZero(!0).showMaxMin(!1).tickFormat(function(e){return e}),r.orient(d?"right":"left").tickFormat(d3.format(",.1f")),s.updateState(!1);var L=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),a=n.tickFormat()(t.x()(i.point,i.pointIndex)),f=r.tickFormat()(t.y()(i.point,i.pointIndex)),l=b(i.series.key,a,f,i,A);e.tooltip.show([o,u],l,i.value<0?"n":"s",null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+o.left,e.pos[1]+o.top],N.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){N.tooltipHide(e)}),N.on("tooltipHide",function(){y&&e.tooltip.cleanup()}),A.dispatch=N,A.multibar=t,A.legend=i,A.xAxis=n,A.yAxis=r,d3.rebind(A,t,"x","y","xDomain","yDomain","xRange","yRange","forceX","forceY","clipEdge","id","stacked","stackOffset","delay","barColor","groupSpacing"),A.options=e.utils.optionsFunc.bind(A),A.margin=function(e){return arguments.length?(o.top=typeof e.top!="undefined"?e.top:o.top,o.right=typeof e.right!="undefined"?e.right:o.right,o.bottom=typeof e.bottom!="undefined"?e.bottom:o.bottom,o.left=typeof e.left!="undefined"?e.left:o.left,A):o},A.width=function(e){return arguments.length?(u=e,A):u},A.height=function(e){return arguments.length?(a=e,A):a},A.color=function(t){return arguments.length?(f=e.utils.getColor(t),i.color(f),A):f},A.showControls=function(e){return arguments.length?(l=e,A):l},A.showLegend=function(e){return arguments.length?(c=e,A):c},A.showXAxis=function(e){return arguments.length?(h=e,A):h},A.showYAxis=function(e){return arguments.length?(p=e,A):p},A.rightAlignYAxis=function(e){return arguments.length?(d=e,r.orient(e?"right":"left"),A):d},A.reduceXTicks=function(e){return arguments.length?(v=e,A):v},A.rotateLabels=function(e){return arguments.length?(g=e,A):g},A.staggerLabels=function(e){return arguments.length?(m=e,A):m},A.tooltip=function(e){return arguments.length?(b=e,A):b},A.tooltips=function(e){return arguments.length?(y=e,A):y},A.tooltipContent=function(e){return arguments.length?(b=e,A):b},A.state=function(e){return arguments.length?(S=e,A):S},A.defaultState=function(e){return arguments.length?(x=e,A):x},A.noData=function(e){return arguments.length?(T=e,A):T},A.transitionDuration=function(e){return arguments.length?(k=e,A):k},A},e.models.multiBarHorizontal=function(){"use strict";function C(e){return e.each(function(e){var i=n-t.left-t.right,y=r-t.top-t.bottom,C=d3.select(this);p&&(e=d3.layout.stack().offset("zero").values(function(e){return e.values}).y(a)(e)),e.forEach(function(e,t){e.values.forEach(function(e){e.series=t})}),p&&e[0].values.map(function(t,n){var r=0,i=0;e.map(function(e){var t=e.values[n];t.size=Math.abs(t.y),t.y<0?(t.y1=i-t.size,i-=t.size):(t.y1=r,r+=t.size)})});var k=b&&w?[]:e.map(function(e){return e.values.map(function(e,t){return{x:u(e,t),y:a(e,t),y0:e.y0,y1:e.y1}})});s.domain(b||d3.merge(k).map(function(e){return e.x})).rangeBands(E||[0,y],.1),o.domain(w||d3.extent(d3.merge(k).map(function(e){return p?e.y>0?e.y1+e.y:e.y1:e.y}).concat(f))),d&&!p?o.range(S||[o.domain()[0]<0?m:0,i-(o.domain()[1]>0?m:0)]):o.range(S||[0,i]),T=T||s,N=N||d3.scale.linear().domain(o.domain()).range([o(0),o(0)]);var L=d3.select(this).selectAll("g.nv-wrap.nv-multibarHorizontal").data([e]),A=L.enter().append("g").attr("class","nvd3 nv-wrap nv-multibarHorizontal"),O=A.append("defs"),M=A.append("g"),_=L.select("g");M.append("g").attr("class","nv-groups"),L.attr("transform","translate("+t.left+","+t.top+")");var D=L.select(".nv-groups").selectAll(".nv-group").data(function(e){return e},function(e,t){return t});D.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),D.exit().transition().style("stroke-opacity",1e-6).style("fill-opacity",1e-6).remove(),D.attr("class",function(e,t){return"nv-group nv-series-"+t}).classed("hover",function(e){return e.hover}).style("fill",function(e,t){return l(e,t)}).style("stroke",function(e,t){return l(e,t)}),D.transition().style("stroke-opacity",1).style("fill-opacity",.75);var P=D.selectAll("g.nv-bar").data(function(e){return e.values});P.exit().remove();var H=P.enter().append("g").attr("transform",function(t,n,r){return"translate("+N(p?t.y0:0)+","+(p?0:r*s.rangeBand()/e.length+s(u(t,n)))+")"});H.append("rect").attr("width",0).attr("height",s.rangeBand()/(p?1:e.length)),P.on("mouseover",function(t,n){d3.select(this).classed("hover",!0),x.elementMouseover({value:a(t,n),point:t,series:e[t.series],pos:[o(a(t,n)+(p?t.y0:0)),s(u(t,n))+s.rangeBand()*(p?e.length/2:t.series+.5)/e.length],pointIndex:n,seriesIndex:t.series,e:d3.event})}).on("mouseout",function(t,n){d3.select(this).classed("hover",!1),x.elementMouseout({value:a(t,n),point:t,series:e[t.series],pointIndex:n,seriesIndex:t.series,e:d3.event})}).on("click",function(t,n){x.elementClick({value:a(t,n),point:t,series:e[t.series],pos:[s(u(t,n))+s.rangeBand()*(p?e.length/2:t.series+.5)/e.length,o(a(t,n)+(p?t.y0:0))],pointIndex:n,seriesIndex:t.series,e:d3.event}),d3.event.stopPropagation()}).on("dblclick",function(t,n){x.elementDblClick({value:a(t,n),point:t,series:e[t.series],pos:[s(u(t,n))+s.rangeBand()*(p?e.length/2:t.series+.5)/e.length,o(a(t,n)+(p?t.y0:0))],pointIndex:n,seriesIndex:t.series,e:d3.event}),d3.event.stopPropagation()}),H.append("text"),d&&!p?(P.select("text").attr("text-anchor",function(e,t){return a(e,t)<0?"end":"start"}).attr("y",s.rangeBand()/(e.length*2)).attr("dy",".32em").text(function(e,t){return g(a(e,t))}),P.transition().select("text").attr("x",function(e,t){return a(e,t)<0?-4:o(a(e,t))-o(0)+4})):P.selectAll("text").text(""),v&&!p?(H.append("text").classed("nv-bar-label",!0),P.select("text.nv-bar-label").attr("text-anchor",function(e,t){return a(e,t)<0?"start":"end"}).attr("y",s.rangeBand()/(e.length*2)).attr("dy",".32em").text(function(e,t){return u(e,t)}),P.transition().select("text.nv-bar-label").attr("x",function(e,t){return a(e,t)<0?o(0)-o(a(e,t))+4:-4})):P.selectAll("text.nv-bar-label").text(""),P.attr("class",function(e,t){return a(e,t)<0?"nv-bar negative":"nv-bar positive"}),c&&(h||(h=e.map(function(){return!0})),P.style("fill",function(e,t,n){return d3.rgb(c(e,t)).darker(h.map(function(e,t){return t}).filter(function(e,t){return!h[t]})[n]).toString()}).style("stroke",function(e,t,n){return d3.rgb(c(e,t)).darker(h.map(function(e,t){return t}).filter(function(e,t){return!h[t]})[n]).toString()})),p?P.transition().attr("transform",function(e,t){return"translate("+o(e.y1)+","+s(u(e,t))+")"}).select("rect").attr("width",function(e,t){return Math.abs(o(a(e,t)+e.y0)-o(e.y0))}).attr("height",s.rangeBand()):P.transition().attr("transform",function(t,n){return"translate("+(a(t,n)<0?o(a(t,n)):o(0))+","+(t.series*s.rangeBand()/e.length+s(u(t,n)))+")"}).select("rect").attr("height",s.rangeBand()/e.length).attr("width",function(e,t){return Math.max(Math.abs(o(a(e,t))-o(0)),1)}),T=s.copy(),N=o.copy()}),C}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=Math.floor(Math.random()*1e4),s=d3.scale.ordinal(),o=d3.scale.linear(),u=function(e){return e.x},a=function(e){return e.y},f=[0],l=e.utils.defaultColor(),c=null,h,p=!1,d=!1,v=!1,m=60,g=d3.format(",.2f"),y=1200,b,w,E,S,x=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout"),T,N;return C.dispatch=x,C.options=e.utils.optionsFunc.bind(C),C.x=function(e){return arguments.length?(u=e,C):u},C.y=function(e){return arguments.length?(a=e,C):a},C.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,C):t},C.width=function(e){return arguments.length?(n=e,C):n},C.height=function(e){return arguments.length?(r=e,C):r},C.xScale=function(e){return arguments.length?(s=e,C):s},C.yScale=function(e){return arguments.length?(o=e,C):o},C.xDomain=function(e){return arguments.length?(b=e,C):b},C.yDomain=function(e){return arguments.length?(w=e,C):w},C.xRange=function(e){return arguments.length?(E=e,C):E},C.yRange=function(e){return arguments.length?(S=e,C):S},C.forceY=function(e){return arguments.length?(f=e,C):f},C.stacked=function(e){return arguments.length?(p=e,C):p},C.color=function(t){return arguments.length?(l=e.utils.getColor(t),C):l},C.barColor=function(t){return arguments.length?(c=e.utils.getColor(t),C):c},C.disabled=function(e){return arguments.length?(h=e,C):h},C.id=function(e){return arguments.length?(i=e,C):i},C.delay=function(e){return arguments.length?(y=e,C):y},C.showValues=function(e){return arguments.length?(d=e,C):d},C.showBarLabels=function(e){return arguments.length?(v=e,C):v},C.valueFormat=function(e){return arguments.length?(g=e,C):g},C.valuePadding=function(e){return arguments.length?(m=e,C):m},C},e.models.multiBarHorizontalChart=function(){"use strict";function C(e){return e.each(function(e){var d=d3.select(this),m=this,k=(u||parseInt(d.style("width"))||960)-o.left-o.right,L=(a||parseInt(d.style("height"))||400)-o.top-o.bottom;C.update=function(){d.transition().duration(T).call(C)},C.container=this,b.disabled=e.map(function(e){return!!e.disabled});if(!w){var A;w={};for(A in b)b[A]instanceof Array?w[A]=b[A].slice(0):w[A]=b[A]}if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var O=d.selectAll(".nv-noData").data([E]);return O.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),O.attr("x",o.left+k/2).attr("y",o.top+L/2).text(function(e){return e}),C}d.selectAll(".nv-noData").remove(),g=t.xScale(),y=t.yScale();var M=d.selectAll("g.nv-wrap.nv-multiBarHorizontalChart").data([e]),_=M.enter().append("g").attr("class","nvd3 nv-wrap nv-multiBarHorizontalChart").append("g"),D=M.select("g");_.append("g").attr("class","nv-x nv-axis"),_.append("g").attr("class","nv-y nv-axis").append("g").attr("class","nv-zeroLine").append("line"),_.append("g").attr("class","nv-barsWrap"),_.append("g").attr("class","nv-legendWrap"),_.append("g").attr("class","nv-controlsWrap"),c&&(i.width(k-x()),t.barColor()&&e.forEach(function(e,t){e.color=d3.rgb("#ccc").darker(t*1.5).toString()}),D.select(".nv-legendWrap").datum(e).call(i),o.top!=i.height()&&(o.top=i.height(),L=(a||parseInt(d.style("height"))||400)-o.top-o.bottom),D.select(".nv-legendWrap").attr("transform","translate("+x()+","+ -o.top+")"));if(l){var P=[{key:"Grouped",disabled:t.stacked()},{key:"Stacked",disabled:!t.stacked()}];s.width(x()).color(["#444","#444","#444"]),D.select(".nv-controlsWrap").datum(P).attr("transform","translate(0,"+ -o.top+")").call(s)}M.attr("transform","translate("+o.left+","+o.top+")"),t.disabled(e.map(function(e){return e.disabled})).width(k).height(L).color(e.map(function(e,t){return e.color||f(e,t)}).filter(function(t,n){return!e[n].disabled}));var H=D.select(".nv-barsWrap").datum(e.filter(function(e){return!e.disabled}));H.transition().call(t);if(h){n.scale(g).ticks(L/24).tickSize(-k,0),D.select(".nv-x.nv-axis").transition().call(n);var B=D.select(".nv-x.nv-axis").selectAll("g");B.selectAll("line, text")}p&&(r.scale(y).ticks(k/100).tickSize(-L,0),D.select(".nv-y.nv-axis").attr("transform","translate(0,"+L+")"),D.select(".nv-y.nv-axis").transition().call(r)),D.select(".nv-zeroLine line").attr("x1",y(0)).attr("x2",y(0)).attr("y1",0).attr("y2",-L),i.dispatch.on("stateChange",function(e){b=e,S.stateChange(b),C.update()}),s.dispatch.on("legendClick",function(e,n){if(!e.disabled)return;P=P.map(function(e){return e.disabled=!0,e}),e.disabled=!1;switch(e.key){case"Grouped":t.stacked(!1);break;case"Stacked":t.stacked(!0)}b.stacked=t.stacked(),S.stateChange(b),C.update()}),S.on("tooltipShow",function(e){v&&N(e,m.parentNode)}),S.on("changeState",function(n){typeof n.disabled!="undefined"&&(e.forEach(function(e,t){e.disabled=n.disabled[t]}),b.disabled=n.disabled),typeof n.stacked!="undefined"&&(t.stacked(n.stacked),b.stacked=n.stacked),C.update()})}),C}var t=e.models.multiBarHorizontal(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend().height(30),s=e.models.legend().height(30),o={top:30,right:20,bottom:50,left:60},u=null,a=null,f=e.utils.defaultColor(),l=!0,c=!0,h=!0,p=!0,d=!1,v=!0,m=function(e,t,n,r,i){return"<h3>"+e+" - "+t+"</h3>"+"<p>"+n+"</p>"},g,y,b={stacked:d},w=null,E="No Data Available.",S=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),x=function(){return l?180:0},T=250;t.stacked(d),n.orient("left").tickPadding(5).highlightZero(!1).showMaxMin(!1).tickFormat(function(e){return e}),r.orient("bottom").tickFormat(d3.format(",.1f")),s.updateState(!1);var N=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),a=n.tickFormat()(t.x()(i.point,i.pointIndex)),f=r.tickFormat()(t.y()(i.point,i.pointIndex)),l=m(i.series.key,a,f,i,C);e.tooltip.show([o,u],l,i.value<0?"e":"w",null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+o.left,e.pos[1]+o.top],S.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){S.tooltipHide(e)}),S.on("tooltipHide",function(){v&&e.tooltip.cleanup()}),C.dispatch=S,C.multibar=t,C.legend=i,C.xAxis=n,C.yAxis=r,d3.rebind(C,t,"x","y","xDomain","yDomain","xRange","yRange","forceX","forceY","clipEdge","id","delay","showValues","showBarLabels","valueFormat","stacked","barColor"),C.options=e.utils.optionsFunc.bind(C),C.margin=function(e){return arguments.length?(o.top=typeof e.top!="undefined"?e.top:o.top,o.right=typeof e.right!="undefined"?e.right:o.right,o.bottom=typeof e.bottom!="undefined"?e.bottom:o.bottom,o.left=typeof e.left!="undefined"?e.left:o.left,C):o},C.width=function(e){return arguments.length?(u=e,C):u},C.height=function(e){return arguments.length?(a=e,C):a},C.color=function(t){return arguments.length?(f=e.utils.getColor(t),i.color(f),C):f},C.showControls=function(e){return arguments.length?(l=e,C):l},C.showLegend=function(e){return arguments.length?(c=e,C):c},C.showXAxis=function(e){return arguments.length?(h=e,C):h},C.showYAxis=function(e){return arguments.length?(p=e,C):p},C.tooltip=function(e){return arguments.length?(m=e,C):m},C.tooltips=function(e){return arguments.length?(v=e,C):v},C.tooltipContent=function(e){return arguments.length?(m=e,C):m},C.state=function(e){return arguments.length?(b=e,C):b},C.defaultState=function(e){return arguments.length?(w=e,C):w},C.noData=function(e){return arguments.length?(E=e,C):E},C.transitionDuration=function(e){return arguments.length?(T=e,C):T},C},e.models.multiChart=function(){"use strict";function C(e){return e.each(function(e){var u=d3.select(this),f=this;C.update=function(){u.transition().call(C)},C.container=this;var k=(r||parseInt(u.style("width"))||960)-t.left-t.right,L=(i||parseInt(u.style("height"))||400)-t.top-t.bottom,A=e.filter(function(e){return!e.disabled&&e.type=="line"&&e.yAxis==1}),O=e.filter(function(e){return!e.disabled&&e.type=="line"&&e.yAxis==2}),M=e.filter(function(e){return!e.disabled&&e.type=="bar"&&e.yAxis==1}),_=e.filter(function(e){return!e.disabled&&e.type=="bar"&&e.yAxis==2}),D=e.filter(function(e){return!e.disabled&&e.type=="area"&&e.yAxis==1}),P=e.filter(function(e){return!e.disabled&&e.type=="area"&&e.yAxis==2}),H=e.filter(function(e){return!e.disabled&&e.yAxis==1}).map(function(e){return e.values.map(function(e,t){return{x:e.x,y:e.y}})}),B=e.filter(function(e){return!e.disabled&&e.yAxis==2}).map(function(e){return e.values.map(function(e,t){return{x:e.x,y:e.y}})});a.domain(d3.extent(d3.merge(H.concat(B)),function(e){return e.x})).range([0,k]);var j=u.selectAll("g.wrap.multiChart").data([e]),F=j.enter().append("g").attr("class","wrap nvd3 multiChart").append("g");F.append("g").attr("class","x axis"),F.append("g").attr("class","y1 axis"),F.append("g").attr("class","y2 axis"),F.append("g").attr("class","lines1Wrap"),F.append("g").attr("class","lines2Wrap"),F.append("g").attr("class","bars1Wrap"),F.append("g").attr("class","bars2Wrap"),F.append("g").attr("class","stack1Wrap"),F.append("g").attr("class","stack2Wrap"),F.append("g").attr("class","legendWrap");var I=j.select("g");s&&(x.width(k/2),I.select(".legendWrap").datum(e.map(function(e){return e.originalKey=e.originalKey===undefined?e.key:e.originalKey,e.key=e.originalKey+(e.yAxis==1?"":" (right axis)"),e})).call(x),t.top!=x.height()&&(t.top=x.height(),L=(i||parseInt(u.style("height"))||400)-t.top-t.bottom),I.select(".legendWrap").attr("transform","translate("+k/2+","+ -t.top+")")),d.width(k).height(L).interpolate("monotone").color(e.map(function(e,t){return e.color||n[t%n.length]}).filter(function(t,n){return!e[n].disabled&&e[n].yAxis==1&&e[n].type=="line"})),v.width(k).height(L).interpolate("monotone").color(e.map(function(e,t){return e.color||n[t%n.length]}).filter(function(t,n){return!e[n].disabled&&e[n].yAxis==2&&e[n].type=="line"})),m.width(k).height(L).color(e.map(function(e,t){return e.color||n[t%n.length]}).filter(function(t,n){return!e[n].disabled&&e[n].yAxis==1&&e[n].type=="bar"})),g.width(k).height(L).color(e.map(function(e,t){return e.color||n[t%n.length]}).filter(function(t,n){return!e[n].disabled&&e[n].yAxis==2&&e[n].type=="bar"})),y.width(k).height(L).color(e.map(function(e,t){return e.color||n[t%n.length]}).filter(function(t,n){return!e[n].disabled&&e[n].yAxis==1&&e[n].type=="area"})),b.width(k).height(L).color(e.map(function(e,t){return e.color||n[t%n.length]}).filter(function(t,n){return!e[n].disabled&&e[n].yAxis==2&&e[n].type=="area"})),I.attr("transform","translate("+t.left+","+t.top+")");var q=I.select(".lines1Wrap").datum(A),R=I.select(".bars1Wrap").datum(M),U=I.select(".stack1Wrap").datum(D),z=I.select(".lines2Wrap").datum(O),W=I.select(".bars2Wrap").datum(_),X=I.select(".stack2Wrap").datum(P),V=D.length?D.map(function(e){return e.values}).reduce(function(e,t){return e.map(function(e,n){return{x:e.x,y:e.y+t[n].y}})}).concat([{x:0,y:0}]):[],$=P.length?P.map(function(e){return e.values}).reduce(function(e,t){return e.map(function(e,n){return{x:e.x,y:e.y+t[n].y}})}).concat([{x:0,y:0}]):[];h.domain(l||d3.extent(d3.merge(H).concat(V),function(e){return e.y})).range([0,L]),p.domain(c||d3.extent(d3.merge(B).concat($),function(e){return e.y})).range([0,L]),d.yDomain(h.domain()),m.yDomain(h.domain()),y.yDomain(h.domain()),v.yDomain(p.domain()),g.yDomain(p.domain()),b.yDomain(p.domain()),D.length&&d3.transition(U).call(y),P.length&&d3.transition(X).call(b),M.length&&d3.transition(R).call(m),_.length&&d3.transition(W).call(g),A.length&&d3.transition(q).call(d),O.length&&d3.transition(z).call(v),w.ticks(k/100).tickSize(-L,0),I.select(".x.axis").attr("transform","translate(0,"+L+")"),d3.transition(I.select(".x.axis")).call(w),E.ticks(L/36).tickSize(-k,0),d3.transition(I.select(".y1.axis")).call(E),S.ticks(L/36).tickSize(-k,0),d3.transition(I.select(".y2.axis")).call(S),I.select(".y2.axis").style("opacity",B.length?1:0).attr("transform","translate("+a.range()[1]+",0)"),x.dispatch.on("stateChange",function(e){C.update()}),T.on("tooltipShow",function(e){o&&N(e,f.parentNode)})}),C}var t={top:30,right:20,bottom:50,left:60},n=d3.scale.category20().range(),r=null,i=null,s=!0,o=!0,u=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},a,f,l,c,a=d3.scale.linear(),h=d3.scale.linear(),p=d3.scale.linear(),d=e.models.line().yScale(h),v=e.models.line().yScale(p),m=e.models.multiBar().stacked(!1).yScale(h),g=e.models.multiBar().stacked(!1).yScale(p),y=e.models.stackedArea().yScale(h),b=e.models.stackedArea().yScale(p),w=e.models.axis().scale(a).orient("bottom").tickPadding(5),E=e.models.axis().scale(h).orient("left"),S=e.models.axis().scale(p).orient("right"),x=e.models.legend().height(30),T=d3.dispatch("tooltipShow","tooltipHide"),N=function(t,n){var r=t.pos[0]+(n.offsetLeft||0),i=t.pos[1]+(n.offsetTop||0),s=w.tickFormat()(d.x()(t.point,t.pointIndex)),o=(t.series.yAxis==2?S:E).tickFormat()(d.y()(t.point,t.pointIndex)),a=u(t.series.key,s,o,t,C);e.tooltip.show([r,i],a,undefined,undefined,n.offsetParent)};return d.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),d.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),v.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),v.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),m.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),m.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),g.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),g.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),y.dispatch.on("tooltipShow",function(e){if(!Math.round(y.y()(e.point)*100))return setTimeout(function(){d3.selectAll(".point.hover").classed("hover",!1)},0),!1;e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),y.dispatch.on("tooltipHide",function(e){T.tooltipHide(e)}),b.dispatch.on("tooltipShow",function(e){if(!Math.round(b.y()(e.point)*100))return setTimeout(function(){d3.selectAll(".point.hover").classed("hover",!1)},0),!1;e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),b.dispatch.on("tooltipHide",function(e){T.tooltipHide(e)}),d.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),d.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),v.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),v.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),T.on("tooltipHide",function(){o&&e.tooltip.cleanup()}),C.dispatch=T,C.lines1=d,C.lines2=v,C.bars1=m,C.bars2=g,C.stack1=y,C.stack2=b,C.xAxis=w,C.yAxis1=E,C.yAxis2=S,C.options=e.utils.optionsFunc.bind(C),C.x=function(e){return arguments.length?(getX=e,d.x(e),m.x(e),C):getX},C.y=function(e){return arguments.length?(getY=e,d.y(e),m.y(e),C):getY},C.yDomain1=function(e){return arguments.length?(l=e,C):l},C.yDomain2=function(e){return arguments.length?(c=e,C):c},C.margin=function(e){return arguments.length?(t=e,C):t},C.width=function(e){return arguments.length?(r=e,C):r},C.height=function(e){return arguments.length?(i=e,C):i},C.color=function(e){return arguments.length?(n=e,x.color(e),C):n},C.showLegend=function(e){return arguments.length?(s=e,C):s},C.tooltips=function(e){return arguments.length?(o=e,C):o},C.tooltipContent=function(e){return arguments.length?(u=e,C):u},C},e.models.ohlcBar=function(){"use strict";function x(e){return e.each(function(e){var g=n-t.left-t.right,x=r-t.top-t.bottom,T=d3.select(this);s.domain(y||d3.extent(e[0].values.map(u).concat(p))),v?s.range(w||[g*.5/e[0].values.length,g*(e[0].values.length-.5)/e[0].values.length]):s.range(w||[0,g]),o.domain(b||[d3.min(e[0].values.map(h).concat(d)),d3.max(e[0].values.map(c).concat(d))]).range(E||[x,0]),s.domain()[0]===s.domain()[1]&&(s.domain()[0]?s.domain([s.domain()[0]-s.domain()[0]*.01,s.domain()[1]+s.domain()[1]*.01]):s.domain([-1,1])),o.domain()[0]===o.domain()[1]&&(o.domain()[0]?o.domain([o.domain()[0]+o.domain()[0]*.01,o.domain()[1]-o.domain()[1]*.01]):o.domain([-1,1]));var N=d3.select(this).selectAll("g.nv-wrap.nv-ohlcBar").data([e[0].values]),C=N.enter().append("g").attr("class","nvd3 nv-wrap nv-ohlcBar"),k=C.append("defs"),L=C.append("g"),A=N.select("g");L.append("g").attr("class","nv-ticks"),N.attr("transform","translate("+t.left+","+t.top+")"),T.on("click",function(e,t){S.chartClick({data:e,index:t,pos:d3.event,id:i})}),k.append("clipPath").attr("id","nv-chart-clip-path-"+i).append("rect"),N.select("#nv-chart-clip-path-"+i+" rect").attr("width",g).attr("height",x),A.attr("clip-path",m?"url(#nv-chart-clip-path-"+i+")":"");var O=N.select(".nv-ticks").selectAll(".nv-tick").data(function(e){return e});O.exit().remove();var M=O.enter().append("path").attr("class",function(e,t,n){return(f(e,t)>l(e,t)?"nv-tick negative":"nv-tick positive")+" nv-tick-"+n+"-"+t}).attr("d",function(t,n){var r=g/e[0].values.length*.9;return"m0,0l0,"+(o(f(t,n))-o(c(t,n)))+"l"+ -r/2+",0l"+r/2+",0l0,"+(o(h(t,n))-o(f(t,n)))+"l0,"+(o(l(t,n))-o(h(t,n)))+"l"+r/2+",0l"+ -r/2+",0z"}).attr("transform",function(e,t){return"translate("+s(u(e,t))+","+o(c(e,t))+")"}).on("mouseover",function(t,n){d3.select(this).classed("hover",!0),S.elementMouseover({point:t,series:e[0],pos:[s(u(t,n)),o(a(t,n))],pointIndex:n,seriesIndex:0,e:d3.event})}).on("mouseout",function(t,n){d3.select(this).classed("hover",!1),S.elementMouseout({point:t,series:e[0],pointIndex:n,seriesIndex:0,e:d3.event})}).on("click",function(e,t){S.elementClick({value:a(e,t),data:e,index:t,pos:[s(u(e,t)),o(a(e,t))],e:d3.event,id:i}),d3.event.stopPropagation()}).on("dblclick",function(e,t){S.elementDblClick({value:a(e,t),data:e,index:t,pos:[s(u(e,t)),o(a(e,t))],e:d3.event,id:i}),d3.event.stopPropagation()});O.attr("class",function(e,t,n){return(f(e,t)>l(e,t)?"nv-tick negative":"nv-tick positive")+" nv-tick-"+n+"-"+t}),d3.transition(O).attr("transform",function(e,t){return"translate("+s(u(e,t))+","+o(c(e,t))+")"}).attr("d",function(t,n){var r=g/e[0].values.length*.9;return"m0,0l0,"+(o(f(t,n))-o(c(t,n)))+"l"+ -r/2+",0l"+r/2+",0l0,"+(o(h(t,n))-o(f(t,n)))+"l0,"+(o(l(t,n))-o(h(t,n)))+"l"+r/2+",0l"+ -r/2+",0z"})}),x}var t={top:0
,right:0,bottom:0,left:0},n=960,r=500,i=Math.floor(Math.random()*1e4),s=d3.scale.linear(),o=d3.scale.linear(),u=function(e){return e.x},a=function(e){return e.y},f=function(e){return e.open},l=function(e){return e.close},c=function(e){return e.high},h=function(e){return e.low},p=[],d=[],v=!1,m=!0,g=e.utils.defaultColor(),y,b,w,E,S=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout");return x.dispatch=S,x.options=e.utils.optionsFunc.bind(x),x.x=function(e){return arguments.length?(u=e,x):u},x.y=function(e){return arguments.length?(a=e,x):a},x.open=function(e){return arguments.length?(f=e,x):f},x.close=function(e){return arguments.length?(l=e,x):l},x.high=function(e){return arguments.length?(c=e,x):c},x.low=function(e){return arguments.length?(h=e,x):h},x.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,x):t},x.width=function(e){return arguments.length?(n=e,x):n},x.height=function(e){return arguments.length?(r=e,x):r},x.xScale=function(e){return arguments.length?(s=e,x):s},x.yScale=function(e){return arguments.length?(o=e,x):o},x.xDomain=function(e){return arguments.length?(y=e,x):y},x.yDomain=function(e){return arguments.length?(b=e,x):b},x.xRange=function(e){return arguments.length?(w=e,x):w},x.yRange=function(e){return arguments.length?(E=e,x):E},x.forceX=function(e){return arguments.length?(p=e,x):p},x.forceY=function(e){return arguments.length?(d=e,x):d},x.padData=function(e){return arguments.length?(v=e,x):v},x.clipEdge=function(e){return arguments.length?(m=e,x):m},x.color=function(t){return arguments.length?(g=e.utils.getColor(t),x):g},x.id=function(e){return arguments.length?(i=e,x):i},x},e.models.pie=function(){"use strict";function S(e){return e.each(function(e){function q(e){var t=(e.startAngle+e.endAngle)*90/Math.PI-90;return t>90?t-180:t}function R(e){e.endAngle=isNaN(e.endAngle)?0:e.endAngle,e.startAngle=isNaN(e.startAngle)?0:e.startAngle,m||(e.innerRadius=0);var t=d3.interpolate(this._current,e);return this._current=t(0),function(e){return A(t(e))}}function U(e){e.innerRadius=0;var t=d3.interpolate({startAngle:0,endAngle:0},e);return function(e){return A(t(e))}}var o=n-t.left-t.right,f=r-t.top-t.bottom,S=Math.min(o,f)/2,x=S-S/5,T=d3.select(this),N=T.selectAll(".nv-wrap.nv-pie").data(e),C=N.enter().append("g").attr("class","nvd3 nv-wrap nv-pie nv-chart-"+u),k=C.append("g"),L=N.select("g");k.append("g").attr("class","nv-pie"),k.append("g").attr("class","nv-pieLabels"),N.attr("transform","translate("+t.left+","+t.top+")"),L.select(".nv-pie").attr("transform","translate("+o/2+","+f/2+")"),L.select(".nv-pieLabels").attr("transform","translate("+o/2+","+f/2+")"),T.on("click",function(e,t){E.chartClick({data:e,index:t,pos:d3.event,id:u})});var A=d3.svg.arc().outerRadius(x);y&&A.startAngle(y),b&&A.endAngle(b),m&&A.innerRadius(S*w);var O=d3.layout.pie().sort(null).value(function(e){return e.disabled?0:s(e)}),M=N.select(".nv-pie").selectAll(".nv-slice").data(O),_=N.select(".nv-pieLabels").selectAll(".nv-label").data(O);M.exit().remove(),_.exit().remove();var D=M.enter().append("g").attr("class","nv-slice").on("mouseover",function(e,t){d3.select(this).classed("hover",!0),E.elementMouseover({label:i(e.data),value:s(e.data),point:e.data,pointIndex:t,pos:[d3.event.pageX,d3.event.pageY],id:u})}).on("mouseout",function(e,t){d3.select(this).classed("hover",!1),E.elementMouseout({label:i(e.data),value:s(e.data),point:e.data,index:t,id:u})}).on("click",function(e,t){E.elementClick({label:i(e.data),value:s(e.data),point:e.data,index:t,pos:d3.event,id:u}),d3.event.stopPropagation()}).on("dblclick",function(e,t){E.elementDblClick({label:i(e.data),value:s(e.data),point:e.data,index:t,pos:d3.event,id:u}),d3.event.stopPropagation()});M.attr("fill",function(e,t){return a(e,t)}).attr("stroke",function(e,t){return a(e,t)});var P=D.append("path").each(function(e){this._current=e});M.select("path").transition().attr("d",A).attrTween("d",R);if(l){var H=d3.svg.arc().innerRadius(0);c&&(H=A),h&&(H=d3.svg.arc().outerRadius(A.outerRadius())),_.enter().append("g").classed("nv-label",!0).each(function(e,t){var n=d3.select(this);n.attr("transform",function(e){if(g){e.outerRadius=x+10,e.innerRadius=x+15;var t=(e.startAngle+e.endAngle)/2*(180/Math.PI);return(e.startAngle+e.endAngle)/2<Math.PI?t-=90:t+=90,"translate("+H.centroid(e)+") rotate("+t+")"}return e.outerRadius=S+10,e.innerRadius=S+15,"translate("+H.centroid(e)+")"}),n.append("rect").style("stroke","#fff").style("fill","#fff").attr("rx",3).attr("ry",3),n.append("text").style("text-anchor",g?(e.startAngle+e.endAngle)/2<Math.PI?"start":"end":"middle").style("fill","#000")});var B={},j=14,F=140,I=function(e){return Math.floor(e[0]/F)*F+","+Math.floor(e[1]/j)*j};_.transition().attr("transform",function(e){if(g){e.outerRadius=x+10,e.innerRadius=x+15;var t=(e.startAngle+e.endAngle)/2*(180/Math.PI);return(e.startAngle+e.endAngle)/2<Math.PI?t-=90:t+=90,"translate("+H.centroid(e)+") rotate("+t+")"}e.outerRadius=S+10,e.innerRadius=S+15;var n=H.centroid(e),r=I(n);return B[r]&&(n[1]-=j),B[I(n)]=!0,"translate("+n+")"}),_.select(".nv-label text").style("text-anchor",g?(d.startAngle+d.endAngle)/2<Math.PI?"start":"end":"middle").text(function(e,t){var n=(e.endAngle-e.startAngle)/(2*Math.PI),r={key:i(e.data),value:s(e.data),percent:d3.format("%")(n)};return e.value&&n>v?r[p]:""})}}),S}var t={top:0,right:0,bottom:0,left:0},n=500,r=500,i=function(e){return e.x},s=function(e){return e.y},o=function(e){return e.description},u=Math.floor(Math.random()*1e4),a=e.utils.defaultColor(),f=d3.format(",.2f"),l=!0,c=!0,h=!1,p="key",v=.02,m=!1,g=!1,y=!1,b=!1,w=.5,E=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout");return S.dispatch=E,S.options=e.utils.optionsFunc.bind(S),S.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,S):t},S.width=function(e){return arguments.length?(n=e,S):n},S.height=function(e){return arguments.length?(r=e,S):r},S.values=function(t){return e.log("pie.values() is no longer supported."),S},S.x=function(e){return arguments.length?(i=e,S):i},S.y=function(e){return arguments.length?(s=d3.functor(e),S):s},S.description=function(e){return arguments.length?(o=e,S):o},S.showLabels=function(e){return arguments.length?(l=e,S):l},S.labelSunbeamLayout=function(e){return arguments.length?(g=e,S):g},S.donutLabelsOutside=function(e){return arguments.length?(h=e,S):h},S.pieLabelsOutside=function(e){return arguments.length?(c=e,S):c},S.labelType=function(e){return arguments.length?(p=e,p=p||"key",S):p},S.donut=function(e){return arguments.length?(m=e,S):m},S.donutRatio=function(e){return arguments.length?(w=e,S):w},S.startAngle=function(e){return arguments.length?(y=e,S):y},S.endAngle=function(e){return arguments.length?(b=e,S):b},S.id=function(e){return arguments.length?(u=e,S):u},S.color=function(t){return arguments.length?(a=e.utils.getColor(t),S):a},S.valueFormat=function(e){return arguments.length?(f=e,S):f},S.labelThreshold=function(e){return arguments.length?(v=e,S):v},S},e.models.pieChart=function(){"use strict";function v(e){return e.each(function(e){var u=d3.select(this),a=this,f=(i||parseInt(u.style("width"))||960)-r.left-r.right,d=(s||parseInt(u.style("height"))||400)-r.top-r.bottom;v.update=function(){u.transition().call(v)},v.container=this,l.disabled=e.map(function(e){return!!e.disabled});if(!c){var m;c={};for(m in l)l[m]instanceof Array?c[m]=l[m].slice(0):c[m]=l[m]}if(!e||!e.length){var g=u.selectAll(".nv-noData").data([h]);return g.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),g.attr("x",r.left+f/2).attr("y",r.top+d/2).text(function(e){return e}),v}u.selectAll(".nv-noData").remove();var y=u.selectAll("g.nv-wrap.nv-pieChart").data([e]),b=y.enter().append("g").attr("class","nvd3 nv-wrap nv-pieChart").append("g"),w=y.select("g");b.append("g").attr("class","nv-pieWrap"),b.append("g").attr("class","nv-legendWrap"),o&&(n.width(f).key(t.x()),y.select(".nv-legendWrap").datum(e).call(n),r.top!=n.height()&&(r.top=n.height(),d=(s||parseInt(u.style("height"))||400)-r.top-r.bottom),y.select(".nv-legendWrap").attr("transform","translate(0,"+ -r.top+")")),y.attr("transform","translate("+r.left+","+r.top+")"),t.width(f).height(d);var E=w.select(".nv-pieWrap").datum([e]);d3.transition(E).call(t),n.dispatch.on("stateChange",function(e){l=e,p.stateChange(l),v.update()}),t.dispatch.on("elementMouseout.tooltip",function(e){p.tooltipHide(e)}),p.on("changeState",function(t){typeof t.disabled!="undefined"&&(e.forEach(function(e,n){e.disabled=t.disabled[n]}),l.disabled=t.disabled),v.update()})}),v}var t=e.models.pie(),n=e.models.legend(),r={top:30,right:20,bottom:20,left:20},i=null,s=null,o=!0,u=e.utils.defaultColor(),a=!0,f=function(e,t,n,r){return"<h3>"+e+"</h3>"+"<p>"+t+"</p>"},l={},c=null,h="No Data Available.",p=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),d=function(n,r){var i=t.description()(n.point)||t.x()(n.point),s=n.pos[0]+(r&&r.offsetLeft||0),o=n.pos[1]+(r&&r.offsetTop||0),u=t.valueFormat()(t.y()(n.point)),a=f(i,u,n,v);e.tooltip.show([s,o],a,n.value<0?"n":"s",null,r)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+r.left,e.pos[1]+r.top],p.tooltipShow(e)}),p.on("tooltipShow",function(e){a&&d(e)}),p.on("tooltipHide",function(){a&&e.tooltip.cleanup()}),v.legend=n,v.dispatch=p,v.pie=t,d3.rebind(v,t,"valueFormat","values","x","y","description","id","showLabels","donutLabelsOutside","pieLabelsOutside","labelType","donut","donutRatio","labelThreshold"),v.options=e.utils.optionsFunc.bind(v),v.margin=function(e){return arguments.length?(r.top=typeof e.top!="undefined"?e.top:r.top,r.right=typeof e.right!="undefined"?e.right:r.right,r.bottom=typeof e.bottom!="undefined"?e.bottom:r.bottom,r.left=typeof e.left!="undefined"?e.left:r.left,v):r},v.width=function(e){return arguments.length?(i=e,v):i},v.height=function(e){return arguments.length?(s=e,v):s},v.color=function(r){return arguments.length?(u=e.utils.getColor(r),n.color(u),t.color(u),v):u},v.showLegend=function(e){return arguments.length?(o=e,v):o},v.tooltips=function(e){return arguments.length?(a=e,v):a},v.tooltipContent=function(e){return arguments.length?(f=e,v):f},v.state=function(e){return arguments.length?(l=e,v):l},v.defaultState=function(e){return arguments.length?(c=e,v):c},v.noData=function(e){return arguments.length?(h=e,v):h},v},e.models.scatter=function(){"use strict";function I(q){return q.each(function(I){function Q(){if(!g)return!1;var e,i=d3.merge(I.map(function(e,t){return e.values.map(function(e,n){var r=f(e,n),i=l(e,n);return[o(r)+Math.random()*1e-7,u(i)+Math.random()*1e-7,t,n,e]}).filter(function(e,t){return b(e[4],t)})}));if(D===!0){if(x){var a=X.select("defs").selectAll(".nv-point-clips").data([s]).enter();a.append("clipPath").attr("class","nv-point-clips").attr("id","nv-points-clip-"+s);var c=X.select("#nv-points-clip-"+s).selectAll("circle").data(i);c.enter().append("circle").attr("r",T),c.exit().remove(),c.attr("cx",function(e){return e[0]}).attr("cy",function(e){return e[1]}),X.select(".nv-point-paths").attr("clip-path","url(#nv-points-clip-"+s+")")}i.length&&(i.push([o.range()[0]-20,u.range()[0]-20,null,null]),i.push([o.range()[1]+20,u.range()[1]+20,null,null]),i.push([o.range()[0]-20,u.range()[0]+20,null,null]),i.push([o.range()[1]+20,u.range()[1]-20,null,null]));var h=d3.geom.polygon([[-10,-10],[-10,r+10],[n+10,r+10],[n+10,-10]]),p=d3.geom.voronoi(i).map(function(e,t){return{data:h.clip(e),series:i[t][2],point:i[t][3]}}),d=X.select(".nv-point-paths").selectAll("path").data(p);d.enter().append("path").attr("class",function(e,t){return"nv-path-"+t}),d.exit().remove(),d.attr("d",function(e){return e.data.length===0?"M 0 0":"M"+e.data.join("L")+"Z"});var v=function(e,n){if(F)return 0;var r=I[e.series];if(typeof r=="undefined")return;var i=r.values[e.point];n({point:i,series:r,pos:[o(f(i,e.point))+t.left,u(l(i,e.point))+t.top],seriesIndex:e.series,pointIndex:e.point})};d.on("click",function(e){v(e,_.elementClick)}).on("mouseover",function(e){v(e,_.elementMouseover)}).on("mouseout",function(e,t){v(e,_.elementMouseout)})}else X.select(".nv-groups").selectAll(".nv-group").selectAll(".nv-point").on("click",function(e,n){if(F||!I[e.series])return 0;var r=I[e.series],i=r.values[n];_.elementClick({point:i,series:r,pos:[o(f(i,n))+t.left,u(l(i,n))+t.top],seriesIndex:e.series,pointIndex:n})}).on("mouseover",function(e,n){if(F||!I[e.series])return 0;var r=I[e.series],i=r.values[n];_.elementMouseover({point:i,series:r,pos:[o(f(i,n))+t.left,u(l(i,n))+t.top],seriesIndex:e.series,pointIndex:n})}).on("mouseout",function(e,t){if(F||!I[e.series])return 0;var n=I[e.series],r=n.values[t];_.elementMouseout({point:r,series:n,seriesIndex:e.series,pointIndex:t})});F=!1}var q=n-t.left-t.right,R=r-t.top-t.bottom,U=d3.select(this);I.forEach(function(e,t){e.values.forEach(function(e){e.series=t})});var W=N&&C&&A?[]:d3.merge(I.map(function(e){return e.values.map(function(e,t){return{x:f(e,t),y:l(e,t),size:c(e,t)}})}));o.domain(N||d3.extent(W.map(function(e){return e.x}).concat(d))),w&&I[0]?o.range(k||[(q*E+q)/(2*I[0].values.length),q-q*(1+E)/(2*I[0].values.length)]):o.range(k||[0,q]),u.domain(C||d3.extent(W.map(function(e){return e.y}).concat(v))).range(L||[R,0]),a.domain(A||d3.extent(W.map(function(e){return e.size}).concat(m))).range(O||[16,256]);if(o.domain()[0]===o.domain()[1]||u.domain()[0]===u.domain()[1])M=!0;o.domain()[0]===o.domain()[1]&&(o.domain()[0]?o.domain([o.domain()[0]-o.domain()[0]*.01,o.domain()[1]+o.domain()[1]*.01]):o.domain([-1,1])),u.domain()[0]===u.domain()[1]&&(u.domain()[0]?u.domain([u.domain()[0]-u.domain()[0]*.01,u.domain()[1]+u.domain()[1]*.01]):u.domain([-1,1])),isNaN(o.domain()[0])&&o.domain([-1,1]),isNaN(u.domain()[0])&&u.domain([-1,1]),P=P||o,H=H||u,B=B||a;var X=U.selectAll("g.nv-wrap.nv-scatter").data([I]),V=X.enter().append("g").attr("class","nvd3 nv-wrap nv-scatter nv-chart-"+s+(M?" nv-single-point":"")),$=V.append("defs"),J=V.append("g"),K=X.select("g");J.append("g").attr("class","nv-groups"),J.append("g").attr("class","nv-point-paths"),X.attr("transform","translate("+t.left+","+t.top+")"),$.append("clipPath").attr("id","nv-edge-clip-"+s).append("rect"),X.select("#nv-edge-clip-"+s+" rect").attr("width",q).attr("height",R>0?R:0),K.attr("clip-path",S?"url(#nv-edge-clip-"+s+")":""),F=!0;var G=X.select(".nv-groups").selectAll(".nv-group").data(function(e){return e},function(e){return e.key});G.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),G.exit().remove(),G.attr("class",function(e,t){return"nv-group nv-series-"+t}).classed("hover",function(e){return e.hover}),G.transition().style("fill",function(e,t){return i(e,t)}).style("stroke",function(e,t){return i(e,t)}).style("stroke-opacity",1).style("fill-opacity",.5);if(p){var Y=G.selectAll("circle.nv-point").data(function(e){return e.values},y);Y.enter().append("circle").style("fill",function(e,t){return e.color}).style("stroke",function(e,t){return e.color}).attr("cx",function(t,n){return e.utils.NaNtoZero(P(f(t,n)))}).attr("cy",function(t,n){return e.utils.NaNtoZero(H(l(t,n)))}).attr("r",function(e,t){return Math.sqrt(a(c(e,t))/Math.PI)}),Y.exit().remove(),G.exit().selectAll("path.nv-point").transition().attr("cx",function(t,n){return e.utils.NaNtoZero(o(f(t,n)))}).attr("cy",function(t,n){return e.utils.NaNtoZero(u(l(t,n)))}).remove(),Y.each(function(e,t){d3.select(this).classed("nv-point",!0).classed("nv-point-"+t,!0).classed("hover",!1)}),Y.transition().attr("cx",function(t,n){return e.utils.NaNtoZero(o(f(t,n)))}).attr("cy",function(t,n){return e.utils.NaNtoZero(u(l(t,n)))}).attr("r",function(e,t){return Math.sqrt(a(c(e,t))/Math.PI)})}else{var Y=G.selectAll("path.nv-point").data(function(e){return e.values});Y.enter().append("path").style("fill",function(e,t){return e.color}).style("stroke",function(e,t){return e.color}).attr("transform",function(e,t){return"translate("+P(f(e,t))+","+H(l(e,t))+")"}).attr("d",d3.svg.symbol().type(h).size(function(e,t){return a(c(e,t))})),Y.exit().remove(),G.exit().selectAll("path.nv-point").transition().attr("transform",function(e,t){return"translate("+o(f(e,t))+","+u(l(e,t))+")"}).remove(),Y.each(function(e,t){d3.select(this).classed("nv-point",!0).classed("nv-point-"+t,!0).classed("hover",!1)}),Y.transition().attr("transform",function(e,t){return"translate("+o(f(e,t))+","+u(l(e,t))+")"}).attr("d",d3.svg.symbol().type(h).size(function(e,t){return a(c(e,t))}))}clearTimeout(j),j=setTimeout(Q,300),P=o.copy(),H=u.copy(),B=a.copy()}),I}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=e.utils.defaultColor(),s=Math.floor(Math.random()*1e5),o=d3.scale.linear(),u=d3.scale.linear(),a=d3.scale.linear(),f=function(e){return e.x},l=function(e){return e.y},c=function(e){return e.size||1},h=function(e){return e.shape||"circle"},p=!0,d=[],v=[],m=[],g=!0,y=null,b=function(e){return!e.notActive},w=!1,E=.1,S=!1,x=!0,T=function(){return 25},N=null,C=null,k=null,L=null,A=null,O=null,M=!1,_=d3.dispatch("elementClick","elementMouseover","elementMouseout"),D=!0,P,H,B,j,F=!1;return I.clearHighlights=function(){d3.selectAll(".nv-chart-"+s+" .nv-point.hover").classed("hover",!1)},I.highlightPoint=function(e,t,n){d3.select(".nv-chart-"+s+" .nv-series-"+e+" .nv-point-"+t).classed("hover",n)},_.on("elementMouseover.point",function(e){g&&I.highlightPoint(e.seriesIndex,e.pointIndex,!0)}),_.on("elementMouseout.point",function(e){g&&I.highlightPoint(e.seriesIndex,e.pointIndex,!1)}),I.dispatch=_,I.options=e.utils.optionsFunc.bind(I),I.x=function(e){return arguments.length?(f=d3.functor(e),I):f},I.y=function(e){return arguments.length?(l=d3.functor(e),I):l},I.size=function(e){return arguments.length?(c=d3.functor(e),I):c},I.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,I):t},I.width=function(e){return arguments.length?(n=e,I):n},I.height=function(e){return arguments.length?(r=e,I):r},I.xScale=function(e){return arguments.length?(o=e,I):o},I.yScale=function(e){return arguments.length?(u=e,I):u},I.zScale=function(e){return arguments.length?(a=e,I):a},I.xDomain=function(e){return arguments.length?(N=e,I):N},I.yDomain=function(e){return arguments.length?(C=e,I):C},I.sizeDomain=function(e){return arguments.length?(A=e,I):A},I.xRange=function(e){return arguments.length?(k=e,I):k},I.yRange=function(e){return arguments.length?(L=e,I):L},I.sizeRange=function(e){return arguments.length?(O=e,I):O},I.forceX=function(e){return arguments.length?(d=e,I):d},I.forceY=function(e){return arguments.length?(v=e,I):v},I.forceSize=function(e){return arguments.length?(m=e,I):m},I.interactive=function(e){return arguments.length?(g=e,I):g},I.pointKey=function(e){return arguments.length?(y=e,I):y},I.pointActive=function(e){return arguments.length?(b=e,I):b},I.padData=function(e){return arguments.length?(w=e,I):w},I.padDataOuter=function(e){return arguments.length?(E=e,I):E},I.clipEdge=function(e){return arguments.length?(S=e,I):S},I.clipVoronoi=function(e){return arguments.length?(x=e,I):x},I.useVoronoi=function(e){return arguments.length?(D=e,D===!1&&(x=!1),I):D},I.clipRadius=function(e){return arguments.length?(T=e,I):T},I.color=function(t){return arguments.length?(i=e.utils.getColor(t),I):i},I.shape=function(e){return arguments.length?(h=e,I):h},I.onlyCircles=function(e){return arguments.length?(p=e,I):p},I.id=function(e){return arguments.length?(s=e,I):s},I.singlePoint=function(e){return arguments.length?(M=e,I):M},I},e.models.scatterChart=function(){"use strict";function F(e){return e.each(function(e){function K(){if(T)return X.select(".nv-point-paths").style("pointer-events","all"),!1;X.select(".nv-point-paths").style("pointer-events","none");var i=d3.mouse(this);h.distortion(x).focus(i[0]),p.distortion(x).focus(i[1]),X.select(".nv-scatterWrap").call(t),b&&X.select(".nv-x.nv-axis").call(n),w&&X.select(".nv-y.nv-axis").call(r),X.select(".nv-distributionX").datum(e.filter(function(e){return!e.disabled})).call(o),X.select(".nv-distributionY").datum(e.filter(function(e){return!e.disabled})).call(u)}var C=d3.select(this),k=this,L=(f||parseInt(C.style("width"))||960)-a.left-a.right,I=(l||parseInt(C.style("height"))||400)-a.top-a.bottom;F.update=function(){C.transition().duration(D).call(F)},F.container=this,A.disabled=e.map(function(e){return!!e.disabled});if(!O){var q;O={};for(q in A)A[q]instanceof Array?O[q]=A[q].slice(0):O[q]=A[q]}if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var R=C.selectAll(".nv-noData").data([_]);return R.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),R.attr("x",a.left+L/2).attr("y",a.top+I/2).text(function(e){return e}),F}C.selectAll(".nv-noData").remove(),P=P||h,H=H||p;var U=C.selectAll("g.nv-wrap.nv-scatterChart").data([e]),z=U.enter().append("g").attr("class","nvd3 nv-wrap nv-scatterChart nv-chart-"+t.id()),W=z.append("g"),X=U.select("g");W.append("rect").attr("class","nvd3 nv-background"),W.append("g").attr("class","nv-x nv-axis"),W.append("g").attr("class","nv-y nv-axis"),W.append("g").attr("class","nv-scatterWrap"),W.append("g").attr("class","nv-distWrap"),W.append("g").attr("class","nv-legendWrap"),W.append("g").attr("class","nv-controlsWrap");if(y){var V=S?L/2:L;i.width(V),U.select(".nv-legendWrap").datum(e).call(i),a.top!=i.height()&&(a.top=i.height(),I=(l||parseInt(C.style("height"))||400)-a.top-a.bottom),U.select(".nv-legendWrap").attr("transform","translate("+(L-V)+","+ -a.top+")")}S&&(s.width(180).color(["#444"]),X.select(".nv-controlsWrap").datum(j).attr("transform","translate(0,"+ -a.top+")").call(s)),U.attr("transform","translate("+a.left+","+a.top+")"),E&&X.select(".nv-y.nv-axis").attr("transform","translate("+L+",0)"),t.width(L).height(I).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),d!==0&&t.xDomain(null),v!==0&&t.yDomain(null),U.select(".nv-scatterWrap").datum(e.filter(function(e){return!e.disabled})).call(t);if(d!==0){var $=h.domain()[1]-h.domain()[0];t.xDomain([h.domain()[0]-d*$,h.domain()[1]+d*$])}if(v!==0){var J=p.domain()[1]-p.domain()[0];t.yDomain([p.domain()[0]-v*J,p.domain()[1]+v*J])}(v!==0||d!==0)&&U.select(".nv-scatterWrap").datum(e.filter(function(e){return!e.disabled})).call(t),b&&(n.scale(h).ticks(n.ticks()&&n.ticks().length?n.ticks():L/100).tickSize(-I,0),X.select(".nv-x.nv-axis").attr("transform","translate(0,"+p.range()[0]+")").call(n)),w&&(r.scale(p).ticks(r.ticks()&&r.ticks().length?r.ticks():I/36).tickSize(-L,0),X.select(".nv-y.nv-axis").call(r)),m&&(o.getData(t.x()).scale(h).width(L).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),W.select(".nv-distWrap").append("g").attr("class","nv-distributionX"),X.select(".nv-distributionX").attr("transform","translate(0,"+p.range()[0]+")").datum(e.filter(function(e){return!e.disabled})).call(o)),g&&(u.getData(t.y()).scale(p).width(I).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),W.select(".nv-distWrap").append("g").attr("class","nv-distributionY"),X.select(".nv-distributionY").attr("transform","translate("+(E?L:-u.size())+",0)").datum(e.filter(function(e){return!e.disabled})).call(u)),d3.fisheye&&(X.select(".nv-background").attr("width",L).attr("height",I),X.select(".nv-background").on("mousemove",K),X.select(".nv-background").on("click",function(){T=!T}),t.dispatch.on("elementClick.freezeFisheye",function(){T=!T})),s.dispatch.on("legendClick",function(e,i){e.disabled=!e.disabled,x=e.disabled?0:2.5,X.select(".nv-background").style("pointer-events",e.disabled?"none":"all"),X.select(".nv-point-paths").style("pointer-events",e.disabled?"all":"none"),e.disabled?(h.distortion(x).focus(0),p.distortion(x).focus(0),X.select(".nv-scatterWrap").call(t),X.select(".nv-x.nv-axis").call(n),X.select(".nv-y.nv-axis").call(r)):T=!1,F.update()}),i.dispatch.on("stateChange",function(e){A.disabled=e.disabled,M.stateChange(A),F.update()}),t.dispatch.on("elementMouseover.tooltip",function(e){d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-distx-"+e.pointIndex).attr("y1",function(t,n){return e.pos[1]-I}),d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-disty-"+e.pointIndex).attr("x2",e.pos[0]+o.size()),e.pos=[e.pos[0]+a.left,e.pos[1]+a.top],M.tooltipShow(e)}),M.on("tooltipShow",function(e){N&&B(e,k.parentNode)}),M.on("changeState",function(t){typeof t.disabled!="undefined"&&(e.forEach(function(e,n){e.disabled=t.disabled[n]}),A.disabled=t.disabled),F.update()}),P=h.copy(),H=p.copy()}),F}var t=e.models.scatter(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s=e.models.legend(),o=e.models.distribution(),u=e.models.distribution(),a={top:30,right:20,bottom:50,left:75},f=null,l=null,c=e.utils.defaultColor(),h=d3.fisheye?d3.fisheye.scale(d3.scale.linear).distortion(0):t.xScale(),p=d3.fisheye?d3.fisheye.scale(d3.scale.linear).distortion(0):t.yScale(),d=0,v=0,m=!1,g=!1,y=!0,b=!0,w=!0,E=!1,S=!!d3.fisheye,x=0,T=!1,N=!0,C=function(e,t,n){return"<strong>"+t+"</strong>"},k=function(e,t,n){return"<strong>"+n+"</strong>"},L=null,A={},O=null,M=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),_="No Data Available.",D=250;t.xScale(h).yScale(p),n.orient("bottom").tickPadding(10),r.orient(E?"right":"left").tickPadding(10),o.axis("x"),u.axis("y"),s.updateState(!1);var P,H,B=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),f=i.pos[0]+(s.offsetLeft||0),l=p.range()[0]+a.top+(s.offsetTop||0),c=h.range()[0]+a.left+(s.offsetLeft||0),d=i.pos[1]+(s.offsetTop||0),v=n.tickFormat()(t.x()(i.point,i.pointIndex)),m=r.tickFormat()(t.y()(i.point,i.pointIndex));C!=null&&e.tooltip.show([f,l],C(i.series.key,v,m,i,F),"n",1,s,"x-nvtooltip"),k!=null&&e.tooltip.show([c,d],k(i.series.key,v,m,i,F),"e",1,s,"y-nvtooltip"),L!=null&&e.tooltip.show([o,u],L(i.series.key,v,m,i,F),i.value<0?"n":"s",null,s)},j=[{key:"Magnify",disabled:!0}];return t.dispatch.on("elementMouseout.tooltip",function(e){M.tooltipHide(e),d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-distx-"+e.pointIndex).attr("y1",0),d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-disty-"+e.pointIndex).attr("x2",u.size())}),M.on("tooltipHide",function(){N&&e.tooltip.cleanup()}),F.dispatch=M,F.scatter=t,F.legend=i,F.controls=s,F.xAxis=n,F.yAxis=r,F.distX=o,F.distY=u,d3.rebind(F,t,"id","interactive","pointActive","x","y","shape","size","xScale","yScale","zScale","xDomain","yDomain","xRange","yRange","sizeDomain","sizeRange","forceX","forceY","forceSize","clipVoronoi","clipRadius","useVoronoi"),F.options=e.utils.optionsFunc.bind(F),F.margin=function(e){return arguments.length?(a.top=typeof e.top!="undefined"?e.top:a.top,a.right=typeof e.right!="undefined"?e.right:a.right,a.bottom=typeof e.bottom!="undefined"?e.bottom:a.bottom,a.left=typeof e.left!="undefined"?e.left:a.left,F):a},F.width=function(e){return arguments.length?(f=e,F):f},F.height=function(e){return arguments.length?(l=e,F):l},F.color=function(t){return arguments.length?(c=e.utils.getColor(t),i.color(c),o.color(c),u.color(c),F):c},F.showDistX=function(e){return arguments.length?(m=e,F):m},F.showDistY=function(e){return arguments.length?(g=e,F):g},F.showControls=function(e){return arguments.length?(S=e,F):S},F.showLegend=function(e){return arguments.length?(y=e,F):y},F.showXAxis=function(e){return arguments.length?(b=e,F):b},F.showYAxis=function(e){return arguments.length?(w=e,F):w},F.rightAlignYAxis=function(e){return arguments.length?(E=e,r.orient(e?"right":"left"),F):E},F.fisheye=function(e){return arguments.length?(x=e,F):x},F.xPadding=function(e){return arguments.length?(d=e,F):d},F.yPadding=function(e){return arguments.length?(v=e,F):v},F.tooltips=function(e){return arguments.length?(N=e,F):N},F.tooltipContent=function(e){return arguments.length?(L=e,F):L},F.tooltipXContent=function(e){return arguments.length?(C=e,F):C},F.tooltipYContent=function(e){return arguments.length?(k=e,F):k},F.state=function(e){return arguments.length?(A=e,F):A},F.defaultState=function(e){return arguments.length?(O=e,F):O},F.noData=function(e){return arguments.length?(_=e,F):_},F.transitionDuration=function(e){return arguments.length?(D=e,F):D},F},e.models.scatterPlusLineChart=function(){"use strict";function B(e){return e.each(function(e){function $(){if(S)return z.select(".nv-point-paths").style("pointer-events","all"),!1;z.select(".nv-point-paths").style("pointer-events","none");var i=d3.mouse(this);h.distortion(E).focus(i[0]),p.distortion(E).focus(i[1]),z.select(".nv-scatterWrap").datum(e.filter(function(e){return!e.disabled})).call(t),g&&z.select(".nv-x.nv-axis").call(n),y&&z.select(".nv-y.nv-axis").call(r),z.select(".nv-distributionX").datum(e.filter(function(e){return!e.disabled})).call(o),z.select(".nv-distributionY").datum(e.filter(function(e){return!e.disabled})).call(u)}var T=d3.select(this),N=this,C=(f||parseInt(T.style("width"))||960)-a.left-a.right,j=(l||parseInt(T.style("height"))||400)-a.top-a.bottom;B.update=function(){T.transition().duration(M).call(B)},B.container=this,k.disabled=e.map(function(e){return!!e.disabled});if(!L){var F;L={};for(F in k)k[F]instanceof Array?L[F]=k[F].slice(0):L[F]=k[F]}if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var I=T.selectAll(".nv-noData").data([O]);return I.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),I.attr("x",a.left+C/2).attr("y",a.top+j/2).text(function(e){return e}),B}T.selectAll(".nv-noData").remove(),h=t.xScale(),p=t.yScale(),_=_||h,D=D||p;var q=T.selectAll("g.nv-wrap.nv-scatterChart").data([e]),R=q.enter().append("g").attr("class","nvd3 nv-wrap nv-scatterChart nv-chart-"+t.id()),U=R.append("g"),z=q.select("g");U.append("rect").attr("class","nvd3 nv-background").style("pointer-events","none"),U.append("g").attr("class","nv-x nv-axis"),U.append("g").attr("class","nv-y nv-axis"),U.append("g").attr("class","nv-scatterWrap"),U.append("g").attr("class","nv-regressionLinesWrap"),U.append("g").attr("class","nv-distWrap"),U.append("g").attr("class","nv-legendWrap"),U.append("g").attr("class","nv-controlsWrap"),q.attr("transform","translate("+a.left+","+a.top+")"),b&&z.select(".nv-y.nv-axis").attr("transform","translate("+C+",0)"),m&&(i.width(C/2),q.select(".nv-legendWrap").datum(e).call(i),a.top!=i.height()&&(a.top=i.height(),j=(l||parseInt(T.style("height"))||400)-a.top-a.bottom),q.select(".nv-legendWrap").attr("transform","translate("+C/2+","+ -a.top+")")),w&&(s.width(180).color(["#444"]),z.select(".nv-controlsWrap").datum(H).attr("transform","translate(0,"+ -a.top+")").call(s)),t.width(C).height(j).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),q.select(".nv-scatterWrap").datum(e.filter(function(e){return!e.disabled})).call(t),q.select(".nv-regressionLinesWrap").attr("clip-path","url(#nv-edge-clip-"+t.id()+")");var W=q.select(".nv-regressionLinesWrap").selectAll(".nv-regLines").data(function(e){return e});W.enter().append("g").attr("class","nv-regLines");var X=W.selectAll(".nv-regLine").data(function(e){return[e]}),V=X.enter().append("line").attr("class","nv-regLine").style("stroke-opacity",0);X.transition().attr("x1",h.range()[0]).attr("x2",h.range()[1]).attr("y1",function(e,t){return p(h.domain()[0]*e.slope+e.intercept)}).attr("y2",function(e,t){return p(h.domain()[1]*e.slope+e.intercept)}).style("stroke",function(e,t,n){return c(e,n)}).style("stroke-opacity",function(e,t){return e.disabled||typeof e.slope=="undefined"||typeof e.intercept=="undefined"?0:1}),g&&(n.scale(h).ticks(n.ticks()?n.ticks():C/100).tickSize(-j,0),z.select(".nv-x.nv-axis").attr("transform","translate(0,"+p.range()[0]+")").call(n)),y&&(r.scale(p).ticks(r.ticks()?r.ticks():j/36).tickSize(-C,0),z.select(".nv-y.nv-axis").call(r)),d&&(o.getData(t.x()).scale(h).width(C).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),U.select(".nv-distWrap").append("g").attr("class","nv-distributionX"),z.select(".nv-distributionX").attr("transform","translate(0,"+p.range()[0]+")").datum(e.filter(function(e){return!e.disabled})).call(o)),v&&(u.getData(t.y()).scale(p).width(
j).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),U.select(".nv-distWrap").append("g").attr("class","nv-distributionY"),z.select(".nv-distributionY").attr("transform","translate("+(b?C:-u.size())+",0)").datum(e.filter(function(e){return!e.disabled})).call(u)),d3.fisheye&&(z.select(".nv-background").attr("width",C).attr("height",j),z.select(".nv-background").on("mousemove",$),z.select(".nv-background").on("click",function(){S=!S}),t.dispatch.on("elementClick.freezeFisheye",function(){S=!S})),s.dispatch.on("legendClick",function(e,i){e.disabled=!e.disabled,E=e.disabled?0:2.5,z.select(".nv-background").style("pointer-events",e.disabled?"none":"all"),z.select(".nv-point-paths").style("pointer-events",e.disabled?"all":"none"),e.disabled?(h.distortion(E).focus(0),p.distortion(E).focus(0),z.select(".nv-scatterWrap").call(t),z.select(".nv-x.nv-axis").call(n),z.select(".nv-y.nv-axis").call(r)):S=!1,B.update()}),i.dispatch.on("stateChange",function(e){k=e,A.stateChange(k),B.update()}),t.dispatch.on("elementMouseover.tooltip",function(e){d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-distx-"+e.pointIndex).attr("y1",e.pos[1]-j),d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-disty-"+e.pointIndex).attr("x2",e.pos[0]+o.size()),e.pos=[e.pos[0]+a.left,e.pos[1]+a.top],A.tooltipShow(e)}),A.on("tooltipShow",function(e){x&&P(e,N.parentNode)}),A.on("changeState",function(t){typeof t.disabled!="undefined"&&(e.forEach(function(e,n){e.disabled=t.disabled[n]}),k.disabled=t.disabled),B.update()}),_=h.copy(),D=p.copy()}),B}var t=e.models.scatter(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s=e.models.legend(),o=e.models.distribution(),u=e.models.distribution(),a={top:30,right:20,bottom:50,left:75},f=null,l=null,c=e.utils.defaultColor(),h=d3.fisheye?d3.fisheye.scale(d3.scale.linear).distortion(0):t.xScale(),p=d3.fisheye?d3.fisheye.scale(d3.scale.linear).distortion(0):t.yScale(),d=!1,v=!1,m=!0,g=!0,y=!0,b=!1,w=!!d3.fisheye,E=0,S=!1,x=!0,T=function(e,t,n){return"<strong>"+t+"</strong>"},N=function(e,t,n){return"<strong>"+n+"</strong>"},C=function(e,t,n,r){return"<h3>"+e+"</h3>"+"<p>"+r+"</p>"},k={},L=null,A=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),O="No Data Available.",M=250;t.xScale(h).yScale(p),n.orient("bottom").tickPadding(10),r.orient(b?"right":"left").tickPadding(10),o.axis("x"),u.axis("y"),s.updateState(!1);var _,D,P=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),f=i.pos[0]+(s.offsetLeft||0),l=p.range()[0]+a.top+(s.offsetTop||0),c=h.range()[0]+a.left+(s.offsetLeft||0),d=i.pos[1]+(s.offsetTop||0),v=n.tickFormat()(t.x()(i.point,i.pointIndex)),m=r.tickFormat()(t.y()(i.point,i.pointIndex));T!=null&&e.tooltip.show([f,l],T(i.series.key,v,m,i,B),"n",1,s,"x-nvtooltip"),N!=null&&e.tooltip.show([c,d],N(i.series.key,v,m,i,B),"e",1,s,"y-nvtooltip"),C!=null&&e.tooltip.show([o,u],C(i.series.key,v,m,i.point.tooltip,i,B),i.value<0?"n":"s",null,s)},H=[{key:"Magnify",disabled:!0}];return t.dispatch.on("elementMouseout.tooltip",function(e){A.tooltipHide(e),d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-distx-"+e.pointIndex).attr("y1",0),d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-disty-"+e.pointIndex).attr("x2",u.size())}),A.on("tooltipHide",function(){x&&e.tooltip.cleanup()}),B.dispatch=A,B.scatter=t,B.legend=i,B.controls=s,B.xAxis=n,B.yAxis=r,B.distX=o,B.distY=u,d3.rebind(B,t,"id","interactive","pointActive","x","y","shape","size","xScale","yScale","zScale","xDomain","yDomain","xRange","yRange","sizeDomain","sizeRange","forceX","forceY","forceSize","clipVoronoi","clipRadius","useVoronoi"),B.options=e.utils.optionsFunc.bind(B),B.margin=function(e){return arguments.length?(a.top=typeof e.top!="undefined"?e.top:a.top,a.right=typeof e.right!="undefined"?e.right:a.right,a.bottom=typeof e.bottom!="undefined"?e.bottom:a.bottom,a.left=typeof e.left!="undefined"?e.left:a.left,B):a},B.width=function(e){return arguments.length?(f=e,B):f},B.height=function(e){return arguments.length?(l=e,B):l},B.color=function(t){return arguments.length?(c=e.utils.getColor(t),i.color(c),o.color(c),u.color(c),B):c},B.showDistX=function(e){return arguments.length?(d=e,B):d},B.showDistY=function(e){return arguments.length?(v=e,B):v},B.showControls=function(e){return arguments.length?(w=e,B):w},B.showLegend=function(e){return arguments.length?(m=e,B):m},B.showXAxis=function(e){return arguments.length?(g=e,B):g},B.showYAxis=function(e){return arguments.length?(y=e,B):y},B.rightAlignYAxis=function(e){return arguments.length?(b=e,r.orient(e?"right":"left"),B):b},B.fisheye=function(e){return arguments.length?(E=e,B):E},B.tooltips=function(e){return arguments.length?(x=e,B):x},B.tooltipContent=function(e){return arguments.length?(C=e,B):C},B.tooltipXContent=function(e){return arguments.length?(T=e,B):T},B.tooltipYContent=function(e){return arguments.length?(N=e,B):N},B.state=function(e){return arguments.length?(k=e,B):k},B.defaultState=function(e){return arguments.length?(L=e,B):L},B.noData=function(e){return arguments.length?(O=e,B):O},B.transitionDuration=function(e){return arguments.length?(M=e,B):M},B},e.models.sparkline=function(){"use strict";function d(e){return e.each(function(e){var i=n-t.left-t.right,d=r-t.top-t.bottom,v=d3.select(this);s.domain(l||d3.extent(e,u)).range(h||[0,i]),o.domain(c||d3.extent(e,a)).range(p||[d,0]);var m=v.selectAll("g.nv-wrap.nv-sparkline").data([e]),g=m.enter().append("g").attr("class","nvd3 nv-wrap nv-sparkline"),b=g.append("g"),w=m.select("g");m.attr("transform","translate("+t.left+","+t.top+")");var E=m.selectAll("path").data(function(e){return[e]});E.enter().append("path"),E.exit().remove(),E.style("stroke",function(e,t){return e.color||f(e,t)}).attr("d",d3.svg.line().x(function(e,t){return s(u(e,t))}).y(function(e,t){return o(a(e,t))}));var S=m.selectAll("circle.nv-point").data(function(e){function n(t){if(t!=-1){var n=e[t];return n.pointIndex=t,n}return null}var t=e.map(function(e,t){return a(e,t)}),r=n(t.lastIndexOf(o.domain()[1])),i=n(t.indexOf(o.domain()[0])),s=n(t.length-1);return[i,r,s].filter(function(e){return e!=null})});S.enter().append("circle"),S.exit().remove(),S.attr("cx",function(e,t){return s(u(e,e.pointIndex))}).attr("cy",function(e,t){return o(a(e,e.pointIndex))}).attr("r",2).attr("class",function(e,t){return u(e,e.pointIndex)==s.domain()[1]?"nv-point nv-currentValue":a(e,e.pointIndex)==o.domain()[0]?"nv-point nv-minValue":"nv-point nv-maxValue"})}),d}var t={top:2,right:0,bottom:2,left:0},n=400,r=32,i=!0,s=d3.scale.linear(),o=d3.scale.linear(),u=function(e){return e.x},a=function(e){return e.y},f=e.utils.getColor(["#000"]),l,c,h,p;return d.options=e.utils.optionsFunc.bind(d),d.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,d):t},d.width=function(e){return arguments.length?(n=e,d):n},d.height=function(e){return arguments.length?(r=e,d):r},d.x=function(e){return arguments.length?(u=d3.functor(e),d):u},d.y=function(e){return arguments.length?(a=d3.functor(e),d):a},d.xScale=function(e){return arguments.length?(s=e,d):s},d.yScale=function(e){return arguments.length?(o=e,d):o},d.xDomain=function(e){return arguments.length?(l=e,d):l},d.yDomain=function(e){return arguments.length?(c=e,d):c},d.xRange=function(e){return arguments.length?(h=e,d):h},d.yRange=function(e){return arguments.length?(p=e,d):p},d.animate=function(e){return arguments.length?(i=e,d):i},d.color=function(t){return arguments.length?(f=e.utils.getColor(t),d):f},d},e.models.sparklinePlus=function(){"use strict";function v(e){return e.each(function(c){function O(){if(a)return;var e=C.selectAll(".nv-hoverValue").data(u),r=e.enter().append("g").attr("class","nv-hoverValue").style("stroke-opacity",0).style("fill-opacity",0);e.exit().transition().duration(250).style("stroke-opacity",0).style("fill-opacity",0).remove(),e.attr("transform",function(e){return"translate("+s(t.x()(c[e],e))+",0)"}).transition().duration(250).style("stroke-opacity",1).style("fill-opacity",1);if(!u.length)return;r.append("line").attr("x1",0).attr("y1",-n.top).attr("x2",0).attr("y2",b),r.append("text").attr("class","nv-xValue").attr("x",-6).attr("y",-n.top).attr("text-anchor","end").attr("dy",".9em"),C.select(".nv-hoverValue .nv-xValue").text(f(t.x()(c[u[0]],u[0]))),r.append("text").attr("class","nv-yValue").attr("x",6).attr("y",-n.top).attr("text-anchor","start").attr("dy",".9em"),C.select(".nv-hoverValue .nv-yValue").text(l(t.y()(c[u[0]],u[0])))}function M(){function r(e,n){var r=Math.abs(t.x()(e[0],0)-n),i=0;for(var s=0;s<e.length;s++)Math.abs(t.x()(e[s],s)-n)<r&&(r=Math.abs(t.x()(e[s],s)-n),i=s);return i}if(a)return;var e=d3.mouse(this)[0]-n.left;u=[r(c,Math.round(s.invert(e)))],O()}var m=d3.select(this),g=(r||parseInt(m.style("width"))||960)-n.left-n.right,b=(i||parseInt(m.style("height"))||400)-n.top-n.bottom;v.update=function(){v(e)},v.container=this;if(!c||!c.length){var w=m.selectAll(".nv-noData").data([d]);return w.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),w.attr("x",n.left+g/2).attr("y",n.top+b/2).text(function(e){return e}),v}m.selectAll(".nv-noData").remove();var E=t.y()(c[c.length-1],c.length-1);s=t.xScale(),o=t.yScale();var S=m.selectAll("g.nv-wrap.nv-sparklineplus").data([c]),T=S.enter().append("g").attr("class","nvd3 nv-wrap nv-sparklineplus"),N=T.append("g"),C=S.select("g");N.append("g").attr("class","nv-sparklineWrap"),N.append("g").attr("class","nv-valueWrap"),N.append("g").attr("class","nv-hoverArea"),S.attr("transform","translate("+n.left+","+n.top+")");var k=C.select(".nv-sparklineWrap");t.width(g).height(b),k.call(t);var L=C.select(".nv-valueWrap"),A=L.selectAll(".nv-currentValue").data([E]);A.enter().append("text").attr("class","nv-currentValue").attr("dx",p?-8:8).attr("dy",".9em").style("text-anchor",p?"end":"start"),A.attr("x",g+(p?n.right:0)).attr("y",h?function(e){return o(e)}:0).style("fill",t.color()(c[c.length-1],c.length-1)).text(l(E)),N.select(".nv-hoverArea").append("rect").on("mousemove",M).on("click",function(){a=!a}).on("mouseout",function(){u=[],O()}),C.select(".nv-hoverArea rect").attr("transform",function(e){return"translate("+ -n.left+","+ -n.top+")"}).attr("width",g+n.left+n.right).attr("height",b+n.top)}),v}var t=e.models.sparkline(),n={top:15,right:100,bottom:10,left:50},r=null,i=null,s,o,u=[],a=!1,f=d3.format(",r"),l=d3.format(",.2f"),c=!0,h=!0,p=!1,d="No Data Available.";return v.sparkline=t,d3.rebind(v,t,"x","y","xScale","yScale","color"),v.options=e.utils.optionsFunc.bind(v),v.margin=function(e){return arguments.length?(n.top=typeof e.top!="undefined"?e.top:n.top,n.right=typeof e.right!="undefined"?e.right:n.right,n.bottom=typeof e.bottom!="undefined"?e.bottom:n.bottom,n.left=typeof e.left!="undefined"?e.left:n.left,v):n},v.width=function(e){return arguments.length?(r=e,v):r},v.height=function(e){return arguments.length?(i=e,v):i},v.xTickFormat=function(e){return arguments.length?(f=e,v):f},v.yTickFormat=function(e){return arguments.length?(l=e,v):l},v.showValue=function(e){return arguments.length?(c=e,v):c},v.alignValue=function(e){return arguments.length?(h=e,v):h},v.rightAlignValue=function(e){return arguments.length?(p=e,v):p},v.noData=function(e){return arguments.length?(d=e,v):d},v},e.models.stackedArea=function(){"use strict";function g(e){return e.each(function(e){var a=n-t.left-t.right,b=r-t.top-t.bottom,w=d3.select(this);p=v.xScale(),d=v.yScale();var E=e;e.forEach(function(e,t){e.seriesIndex=t,e.values=e.values.map(function(e,n){return e.index=n,e.seriesIndex=t,e})});var S=e.filter(function(e){return!e.disabled});e=d3.layout.stack().order(l).offset(f).values(function(e){return e.values}).x(o).y(u).out(function(e,t,n){var r=u(e)===0?0:n;e.display={y:r,y0:t}})(S);var T=w.selectAll("g.nv-wrap.nv-stackedarea").data([e]),N=T.enter().append("g").attr("class","nvd3 nv-wrap nv-stackedarea"),C=N.append("defs"),k=N.append("g"),L=T.select("g");k.append("g").attr("class","nv-areaWrap"),k.append("g").attr("class","nv-scatterWrap"),T.attr("transform","translate("+t.left+","+t.top+")"),v.width(a).height(b).x(o).y(function(e){return e.display.y+e.display.y0}).forceY([0]).color(e.map(function(e,t){return e.color||i(e,e.seriesIndex)}));var A=L.select(".nv-scatterWrap").datum(e);A.call(v),C.append("clipPath").attr("id","nv-edge-clip-"+s).append("rect"),T.select("#nv-edge-clip-"+s+" rect").attr("width",a).attr("height",b),L.attr("clip-path",h?"url(#nv-edge-clip-"+s+")":"");var O=d3.svg.area().x(function(e,t){return p(o(e,t))}).y0(function(e){return d(e.display.y0)}).y1(function(e){return d(e.display.y+e.display.y0)}).interpolate(c),M=d3.svg.area().x(function(e,t){return p(o(e,t))}).y0(function(e){return d(e.display.y0)}).y1(function(e){return d(e.display.y0)}),_=L.select(".nv-areaWrap").selectAll("path.nv-area").data(function(e){return e});_.enter().append("path").attr("class",function(e,t){return"nv-area nv-area-"+t}).attr("d",function(e,t){return M(e.values,e.seriesIndex)}).on("mouseover",function(e,t){d3.select(this).classed("hover",!0),m.areaMouseover({point:e,series:e.key,pos:[d3.event.pageX,d3.event.pageY],seriesIndex:e.seriesIndex})}).on("mouseout",function(e,t){d3.select(this).classed("hover",!1),m.areaMouseout({point:e,series:e.key,pos:[d3.event.pageX,d3.event.pageY],seriesIndex:e.seriesIndex})}).on("click",function(e,t){d3.select(this).classed("hover",!1),m.areaClick({point:e,series:e.key,pos:[d3.event.pageX,d3.event.pageY],seriesIndex:e.seriesIndex})}),_.exit().remove(),_.style("fill",function(e,t){return e.color||i(e,e.seriesIndex)}).style("stroke",function(e,t){return e.color||i(e,e.seriesIndex)}),_.transition().attr("d",function(e,t){return O(e.values,t)}),v.dispatch.on("elementMouseover.area",function(e){L.select(".nv-chart-"+s+" .nv-area-"+e.seriesIndex).classed("hover",!0)}),v.dispatch.on("elementMouseout.area",function(e){L.select(".nv-chart-"+s+" .nv-area-"+e.seriesIndex).classed("hover",!1)}),g.d3_stackedOffset_stackPercent=function(e){var t=e.length,n=e[0].length,r=1/t,i,s,o,a=[];for(s=0;s<n;++s){for(i=0,o=0;i<E.length;i++)o+=u(E[i].values[s]);if(o)for(i=0;i<t;i++)e[i][s][1]/=o;else for(i=0;i<t;i++)e[i][s][1]=r}for(s=0;s<n;++s)a[s]=0;return a}}),g}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=e.utils.defaultColor(),s=Math.floor(Math.random()*1e5),o=function(e){return e.x},u=function(e){return e.y},a="stack",f="zero",l="default",c="linear",h=!1,p,d,v=e.models.scatter(),m=d3.dispatch("tooltipShow","tooltipHide","areaClick","areaMouseover","areaMouseout");return v.size(2.2).sizeDomain([2.2,2.2]),v.dispatch.on("elementClick.area",function(e){m.areaClick(e)}),v.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],m.tooltipShow(e)}),v.dispatch.on("elementMouseout.tooltip",function(e){m.tooltipHide(e)}),g.dispatch=m,g.scatter=v,d3.rebind(g,v,"interactive","size","xScale","yScale","zScale","xDomain","yDomain","xRange","yRange","sizeDomain","forceX","forceY","forceSize","clipVoronoi","useVoronoi","clipRadius","highlightPoint","clearHighlights"),g.options=e.utils.optionsFunc.bind(g),g.x=function(e){return arguments.length?(o=d3.functor(e),g):o},g.y=function(e){return arguments.length?(u=d3.functor(e),g):u},g.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,g):t},g.width=function(e){return arguments.length?(n=e,g):n},g.height=function(e){return arguments.length?(r=e,g):r},g.clipEdge=function(e){return arguments.length?(h=e,g):h},g.color=function(t){return arguments.length?(i=e.utils.getColor(t),g):i},g.offset=function(e){return arguments.length?(f=e,g):f},g.order=function(e){return arguments.length?(l=e,g):l},g.style=function(e){if(!arguments.length)return a;a=e;switch(a){case"stack":g.offset("zero"),g.order("default");break;case"stream":g.offset("wiggle"),g.order("inside-out");break;case"stream-center":g.offset("silhouette"),g.order("inside-out");break;case"expand":g.offset("expand"),g.order("default");break;case"stack_percent":g.offset(g.d3_stackedOffset_stackPercent),g.order("default")}return g},g.interpolate=function(e){return arguments.length?(c=e,g):c},g},e.models.stackedAreaChart=function(){"use strict";function M(y){return y.each(function(y){var _=d3.select(this),D=this,P=(a||parseInt(_.style("width"))||960)-u.left-u.right,H=(f||parseInt(_.style("height"))||400)-u.top-u.bottom;M.update=function(){_.transition().duration(A).call(M)},M.container=this,S.disabled=y.map(function(e){return!!e.disabled});if(!x){var B;x={};for(B in S)S[B]instanceof Array?x[B]=S[B].slice(0):x[B]=S[B]}if(!y||!y.length||!y.filter(function(e){return e.values.length}).length){var j=_.selectAll(".nv-noData").data([T]);return j.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),j.attr("x",u.left+P/2).attr("y",u.top+H/2).text(function(e){return e}),M}_.selectAll(".nv-noData").remove(),b=t.xScale(),w=t.yScale();var F=_.selectAll("g.nv-wrap.nv-stackedAreaChart").data([y]),I=F.enter().append("g").attr("class","nvd3 nv-wrap nv-stackedAreaChart").append("g"),q=F.select("g");I.append("rect").style("opacity",0),I.append("g").attr("class","nv-x nv-axis"),I.append("g").attr("class","nv-y nv-axis"),I.append("g").attr("class","nv-stackedWrap"),I.append("g").attr("class","nv-legendWrap"),I.append("g").attr("class","nv-controlsWrap"),I.append("g").attr("class","nv-interactive"),q.select("rect").attr("width",P).attr("height",H);if(h){var R=c?P-C:P;i.width(R),q.select(".nv-legendWrap").datum(y).call(i),u.top!=i.height()&&(u.top=i.height(),H=(f||parseInt(_.style("height"))||400)-u.top-u.bottom),q.select(".nv-legendWrap").attr("transform","translate("+(P-R)+","+ -u.top+")")}if(c){var U=[{key:L.stacked||"Stacked",metaKey:"Stacked",disabled:t.style()!="stack",style:"stack"},{key:L.stream||"Stream",metaKey:"Stream",disabled:t.style()!="stream",style:"stream"},{key:L.expanded||"Expanded",metaKey:"Expanded",disabled:t.style()!="expand",style:"expand"},{key:L.stack_percent||"Stack %",metaKey:"Stack_Percent",disabled:t.style()!="stack_percent",style:"stack_percent"}];C=k.length/3*260,U=U.filter(function(e){return k.indexOf(e.metaKey)!==-1}),s.width(C).color(["#444","#444","#444"]),q.select(".nv-controlsWrap").datum(U).call(s),u.top!=Math.max(s.height(),i.height())&&(u.top=Math.max(s.height(),i.height()),H=(f||parseInt(_.style("height"))||400)-u.top-u.bottom),q.select(".nv-controlsWrap").attr("transform","translate(0,"+ -u.top+")")}F.attr("transform","translate("+u.left+","+u.top+")"),v&&q.select(".nv-y.nv-axis").attr("transform","translate("+P+",0)"),m&&(o.width(P).height(H).margin({left:u.left,top:u.top}).svgContainer(_).xScale(b),F.select(".nv-interactive").call(o)),t.width(P).height(H);var z=q.select(".nv-stackedWrap").datum(y);z.transition().call(t),p&&(n.scale(b).ticks(P/100).tickSize(-H,0),q.select(".nv-x.nv-axis").attr("transform","translate(0,"+H+")"),q.select(".nv-x.nv-axis").transition().duration(0).call(n)),d&&(r.scale(w).ticks(t.offset()=="wiggle"?0:H/36).tickSize(-P,0).setTickFormat(t.style()=="expand"||t.style()=="stack_percent"?d3.format("%"):E),q.select(".nv-y.nv-axis").transition().duration(0).call(r)),t.dispatch.on("areaClick.toggle",function(e){y.filter(function(e){return!e.disabled}).length===1?y.forEach(function(e){e.disabled=!1}):y.forEach(function(t,n){t.disabled=n!=e.seriesIndex}),S.disabled=y.map(function(e){return!!e.disabled}),N.stateChange(S),M.update()}),i.dispatch.on("stateChange",function(e){S.disabled=e.disabled,N.stateChange(S),M.update()}),s.dispatch.on("legendClick",function(e,n){if(!e.disabled)return;U=U.map(function(e){return e.disabled=!0,e}),e.disabled=!1,t.style(e.style),S.style=t.style(),N.stateChange(S),M.update()}),o.dispatch.on("elementMousemove",function(i){t.clearHighlights();var s,a,f,c=[];y.filter(function(e,t){return e.seriesIndex=t,!e.disabled}).forEach(function(n,r){a=e.interactiveBisect(n.values,i.pointXValue,M.x()),t.highlightPoint(r,a,!0);var o=n.values[a];if(typeof o=="undefined")return;typeof s=="undefined"&&(s=o),typeof f=="undefined"&&(f=M.xScale()(M.x()(o,a)));var u=t.style()=="expand"?o.display.y:M.y()(o,a);c.push({key:n.key,value:u,color:l(n,n.seriesIndex),stackedValue:o.display})}),c.reverse();if(c.length>2){var h=M.yScale().invert(i.mouseY),p=Infinity,d=null;c.forEach(function(e,t){h=Math.abs(h);var n=Math.abs(e.stackedValue.y0),r=Math.abs(e.stackedValue.y);if(h>=n&&h<=r+n){d=t;return}}),d!=null&&(c[d].highlight=!0)}var v=n.tickFormat()(M.x()(s,a)),m=t.style()=="expand"?function(e,t){return d3.format(".1%")(e)}:function(e,t){return r.tickFormat()(e)};o.tooltip.position({left:f+u.left,top:i.mouseY+u.top}).chartContainer(D.parentNode).enabled(g).valueFormatter(m).data({value:v,series:c})(),o.renderGuideLine(f)}),o.dispatch.on("elementMouseout",function(e){N.tooltipHide(),t.clearHighlights()}),N.on("tooltipShow",function(e){g&&O(e,D.parentNode)}),N.on("changeState",function(e){typeof e.disabled!="undefined"&&y.length===e.disabled.length&&(y.forEach(function(t,n){t.disabled=e.disabled[n]}),S.disabled=e.disabled),typeof e.style!="undefined"&&t.style(e.style),M.update()})}),M}var t=e.models.stackedArea(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s=e.models.legend(),o=e.interactiveGuideline(),u={top:30,right:25,bottom:50,left:60},a=null,f=null,l=e.utils.defaultColor(),c=!0,h=!0,p=!0,d=!0,v=!1,m=!1,g=!0,y=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" on "+t+"</p>"},b,w,E=d3.format(",.2f"),S={style:t.style()},x=null,T="No Data Available.",N=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),C=250,k=["Stacked","Stream","Expanded"],L={},A=250;n.orient("bottom").tickPadding(7),r.orient(v?"right":"left"),s.updateState(!1);var O=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),a=n.tickFormat()(t.x()(i.point,i.pointIndex)),f=r.tickFormat()(t.y()(i.point,i.pointIndex)),l=y(i.series.key,a,f,i,M);e.tooltip.show([o,u],l,i.value<0?"n":"s",null,s)};return t.dispatch.on("tooltipShow",function(e){e.pos=[e.pos[0]+u.left,e.pos[1]+u.top],N.tooltipShow(e)}),t.dispatch.on("tooltipHide",function(e){N.tooltipHide(e)}),N.on("tooltipHide",function(){g&&e.tooltip.cleanup()}),M.dispatch=N,M.stacked=t,M.legend=i,M.controls=s,M.xAxis=n,M.yAxis=r,M.interactiveLayer=o,d3.rebind(M,t,"x","y","size","xScale","yScale","xDomain","yDomain","xRange","yRange","sizeDomain","interactive","useVoronoi","offset","order","style","clipEdge","forceX","forceY","forceSize","interpolate"),M.options=e.utils.optionsFunc.bind(M),M.margin=function(e){return arguments.length?(u.top=typeof e.top!="undefined"?e.top:u.top,u.right=typeof e.right!="undefined"?e.right:u.right,u.bottom=typeof e.bottom!="undefined"?e.bottom:u.bottom,u.left=typeof e.left!="undefined"?e.left:u.left,M):u},M.width=function(e){return arguments.length?(a=e,M):a},M.height=function(e){return arguments.length?(f=e,M):f},M.color=function(n){return arguments.length?(l=e.utils.getColor(n),i.color(l),t.color(l),M):l},M.showControls=function(e){return arguments.length?(c=e,M):c},M.showLegend=function(e){return arguments.length?(h=e,M):h},M.showXAxis=function(e){return arguments.length?(p=e,M):p},M.showYAxis=function(e){return arguments.length?(d=e,M):d},M.rightAlignYAxis=function(e){return arguments.length?(v=e,r.orient(e?"right":"left"),M):v},M.useInteractiveGuideline=function(e){return arguments.length?(m=e,e===!0&&(M.interactive(!1),M.useVoronoi(!1)),M):m},M.tooltip=function(e){return arguments.length?(y=e,M):y},M.tooltips=function(e){return arguments.length?(g=e,M):g},M.tooltipContent=function(e){return arguments.length?(y=e,M):y},M.state=function(e){return arguments.length?(S=e,M):S},M.defaultState=function(e){return arguments.length?(x=e,M):x},M.noData=function(e){return arguments.length?(T=e,M):T},M.transitionDuration=function(e){return arguments.length?(A=e,M):A},M.controlsData=function(e){return arguments.length?(k=e,M):k},M.controlLabels=function(e){return arguments.length?typeof e!="object"?L:(L=e,M):L},r.setTickFormat=r.tickFormat,r.tickFormat=function(e){return arguments.length?(E=e,r):E},M}})();
/*! angularjs-nvd3-directives - v0.0.7 - 2014-04-07
 * http://cmaurer.github.io/angularjs-nvd3-directives
 * Copyright (c) 2014 Christian Maurer; Licensed Apache License, v2.0 */
( function () {
  'use strict';


  angular.module( 'legendDirectives', [] ).directive( 'simpleSvgLegend', function () {
    return {
      restrict: 'EA',
      scope: {
        id: '@',
        width: '@',
        height: '@',
        margin: '@',
        x: '@',
        y: '@',
        labels: '@',
        styles: '@',
        classes: '@',
        shapes: '@',
        padding: '@',
        columns: '@'
      },
      compile: function () {
        return function link( scope, element, attrs ) {
          var id, width, height, margin, widthTracker = 0,
            heightTracker = 0,
            columns = 1,
            columnTracker = 0,
            padding = 10,
            paddingStr, svgNamespace = 'http://www.w3.org/2000/svg',
            svg, g, labels, styles, classes, shapes, x = 0,
            y = 0;
          margin = scope.$eval( attrs.margin ) || {
            left: 5,
            top: 5,
            bottom: 5,
            right: 5
          };
          width = attrs.width === 'undefined' ? element[ 0 ].parentElement.offsetWidth - ( margin.left + margin.right ) : +attrs.width - ( margin.left + margin.right );
          height = attrs.height === 'undefined' ? element[ 0 ].parentElement.offsetHeight - ( margin.top + margin.bottom ) : +attrs.height - ( margin.top + margin.bottom );
          if ( !attrs.id ) {
            //if an id is not supplied, create a random id.
            id = 'legend-' + Math.random();
          } else {
            id = attrs.id;
          }
          if ( attrs.columns ) {
            columns = +attrs.columns;
          }
          if ( attrs.padding ) {
            padding = +attrs.padding;
          }
          paddingStr = padding + '';
          svg = document.createElementNS( svgNamespace, 'svg' );
          if ( attrs.width ) {
            svg.setAttribute( 'width', width + '' );
          }
          if ( attrs.height ) {
            svg.setAttribute( 'height', height + '' );
          }
          svg.setAttribute( 'id', id );
          if ( attrs.x ) {
            x = +attrs.x;
          }
          if ( attrs.y ) {
            y = +attrs.y;
          }
          element.append( svg );
          g = document.createElementNS( svgNamespace, 'g' );
          g.setAttribute( 'transform', 'translate(' + x + ',' + y + ')' );
          svg.appendChild( g );
          if ( attrs.labels ) {
            labels = scope.$eval( attrs.labels );
          }
          if ( attrs.styles ) {
            styles = scope.$eval( attrs.styles );
          }
          if ( attrs.classes ) {
            classes = scope.$eval( attrs.classes );
          }
          if ( attrs.shapes ) {
            shapes = scope.$eval( attrs.shapes );
          }
          for ( var i in labels ) {
            if ( labels.hasOwnProperty( i ) ) {
              var shpe = shapes[ i ],
                shape, text, textSize, g1;
              if ( columnTracker % columns === 0 ) {
                widthTracker = 0;
                heightTracker = heightTracker + ( padding + padding * 1.5 );
              }
              g1 = document.createElementNS( svgNamespace, 'g' );
              g1.setAttribute( 'transform', 'translate(' + widthTracker + ', ' + heightTracker + ')' );
              if ( shpe === 'rect' ) {
                shape = document.createElementNS( svgNamespace, 'rect' );
                //x, y, rx, ry
                shape.setAttribute( 'y', 0 - padding / 2 + '' );
                shape.setAttribute( 'width', paddingStr );
                shape.setAttribute( 'height', paddingStr );
              } else if ( shpe === 'ellipse' ) {
                shape = document.createElementNS( svgNamespace, 'ellipse' );
                shape.setAttribute( 'rx', paddingStr );
                shape.setAttribute( 'ry', padding + padding / 2 + '' );
              } else {
                shape = document.createElementNS( svgNamespace, 'circle' );
                shape.setAttribute( 'r', padding / 2 + '' );
              }
              if ( styles && styles[ i ] ) {
                shape.setAttribute( 'style', styles[ i ] );
              }
              if ( classes && classes[ i ] ) {
                shape.setAttribute( 'class', classes[ i ] );
              }
              g1.appendChild( shape );
              widthTracker = widthTracker + shape.clientWidth + ( padding + padding / 2 );
              text = document.createElementNS( svgNamespace, 'text' );
              text.setAttribute( 'transform', 'translate(10, 5)' );
              text.appendChild( document.createTextNode( labels[ i ] ) );
              g1.appendChild( text );
              g.appendChild( g1 );
              textSize = text.clientWidth;
              widthTracker = widthTracker + textSize + ( padding + padding * 0.75 );
              columnTracker++;
            }
          }
        };
      }
    };
  } ).directive( 'nvd3Legend', [
    function () {
      var margin, width, height, id;
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          id: '@',
          margin: '&',
          width: '@',
          height: '@',
          key: '&',
          color: '&',
          align: '@',
          rightalign: '@',
          updatestate: '@',
          radiobuttonmode: '@',
          x: '&',
          y: '&'
        },
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              if ( scope.chart ) {
                return d3.select( '#' + attrs.id + ' svg' ).attr( 'height', height ).attr( 'width', width ).datum( data ).transition().duration( 250 ).call( scope.chart );
              }
              margin = scope.$eval( attrs.margin ) || {
                top: 5,
                right: 0,
                bottom: 5,
                left: 0
              };
              width = attrs.width === undefined ? element[ 0 ].parentElement.offsetWidth - ( margin.left + margin.right ) : +attrs.width - ( margin.left + margin.right );
              height = attrs.height === undefined ? element[ 0 ].parentElement.offsetHeight - ( margin.top + margin.bottom ) : +attrs.height - ( margin.top + margin.bottom );
              if ( width === undefined || width < 0 ) {
                width = 400;
              }
              if ( height === undefined || height < 0 ) {
                height = 20;
              }
              if ( !attrs.id ) {
                //if an id is not supplied, create a random id.
                id = 'legend-' + Math.random();
              } else {
                id = attrs.id;
              }
              nv.addGraph( {
                generate: function () {
                  var chart = nv.models.legend().width( width ).height( height ).margin( margin ).align( attrs.align === undefined ? true : attrs.align === 'true' ).rightAlign( attrs.rightalign === undefined ? true : attrs.rightalign === 'true' ).updateState( attrs.updatestate === undefined ? true : attrs.updatestate === 'true' ).radioButtonMode( attrs.radiobuttonmode === undefined ? false : attrs.radiobuttonmode === 'true' ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() ).key( attrs.key === undefined ? function ( d ) {
                    return d.key;
                  } : scope.key() );
                  if ( !d3.select( '#' + attrs.id + ' svg' )[ 0 ][ 0 ] ) {
                    d3.select( '#' + attrs.id ).append( 'svg' );
                  }
                  d3.select( '#' + attrs.id + ' svg' ).attr( 'height', height ).attr( 'width', width ).datum( data ).transition().duration( 250 ).call( chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                }
              } );
            }
          } );
        }
      };
    }
  ] );

  function initializeLegendMargin( scope, attrs ) {
    var margin = ( scope.$eval( attrs.legendmargin ) || {
      left: 0,
      top: 5,
      bottom: 5,
      right: 0
    } );
    if ( typeof ( margin ) !== 'object' ) {
      // we were passed a vanilla int, convert to full margin object
      margin = {
        left: margin,
        top: margin,
        bottom: margin,
        right: margin
      };
    }
    scope.legendmargin = margin;
  }

  function configureLegend( chart, scope, attrs ) {
    if ( chart.legend && attrs.showlegend && ( attrs.showlegend === 'true' ) ) {
      initializeLegendMargin( scope, attrs );
      chart.legend.margin( scope.legendmargin );
      chart.legend.width( attrs.legendwidth === undefined ? 400 : ( +attrs.legendwidth ) );
      chart.legend.height( attrs.legendheight === undefined ? 20 : ( +attrs.legendheight ) );
      chart.legend.key( attrs.legendkey === undefined ? function ( d ) {
        return d.key;
      } : scope.legendkey() );
      chart.legend.color( attrs.legendcolor === undefined ? nv.utils.defaultColor() : scope.legendcolor() );
      chart.legend.align( attrs.legendalign === undefined ? true : ( attrs.legendalign === 'true' ) );
      chart.legend.rightAlign( attrs.legendrightalign === undefined ? true : ( attrs.legendrightalign === 'true' ) );
      chart.legend.updateState( attrs.legendupdatestate === undefined ? true : ( attrs.legendupdatestate === 'true' ) );
      chart.legend.radioButtonMode( attrs.legendradiobuttonmode === undefined ? false : ( attrs.legendradiobuttonmode === 'true' ) );
    }
  }

  function processEvents( chart, scope ) {
    if ( chart.dispatch ) {
      if ( chart.dispatch.tooltipShow ) {
        chart.dispatch.on( 'tooltipShow.directive', function ( event ) {
          scope.$emit( 'tooltipShow.directive', event );
        } );
      }

      if ( chart.dispatch.tooltipHide ) {
        chart.dispatch.on( 'tooltipHide.directive', function ( event ) {
          scope.$emit( 'tooltipHide.directive', event );
        } );
      }

      if ( chart.dispatch.beforeUpdate ) {
        chart.dispatch.on( 'beforeUpdate.directive', function ( event ) {
          scope.$emit( 'beforeUpdate.directive', event );
        } );
      }

      if ( chart.dispatch.stateChange ) {
        chart.dispatch.on( 'stateChange.directive', function ( event ) {
          scope.$emit( 'stateChange.directive', event );
        } );
      }

      if ( chart.dispatch.changeState ) {
        chart.dispatch.on( 'changeState.directive', function ( event ) {
          scope.$emit( 'changeState.directive', event );
        } );
      }
    }

    if ( chart.lines ) {
      chart.lines.dispatch.on( 'elementMouseover.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );

      chart.lines.dispatch.on( 'elementMouseout.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseout.tooltip.directive', event );
      } );

      chart.lines.dispatch.on( 'elementClick.directive', function ( event ) {
        scope.$emit( 'elementClick.directive', event );
      } );
    }

    if ( chart.stacked && chart.stacked.dispatch ) {
      chart.stacked.dispatch.on( 'areaClick.toggle.directive', function ( event ) {
        scope.$emit( 'areaClick.toggle.directive', event );
      } );

      chart.stacked.dispatch.on( 'tooltipShow.directive', function ( event ) {
        scope.$emit( 'tooltipShow.directive', event );
      } );

      chart.stacked.dispatch.on( 'tooltipHide.directive', function ( event ) {
        scope.$emit( 'tooltipHide.directive', event );
      } );

    }

    if ( chart.interactiveLayer ) {
      if ( chart.interactiveLayer.elementMouseout ) {
        chart.interactiveLayer.dispatch.on( 'elementMouseout.directive', function ( event ) {
          scope.$emit( 'elementMouseout.directive', event );
        } );
      }

      if ( chart.interactiveLayer.elementMousemove ) {
        chart.interactiveLayer.dispatch.on( 'elementMousemove.directive', function ( event ) {
          scope.$emit( 'elementMousemove.directive', event );
        } );
      }
    }

    if ( chart.discretebar ) {
      chart.discretebar.dispatch.on( 'elementMouseover.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );

      chart.discretebar.dispatch.on( 'elementMouseout.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );

      chart.discretebar.dispatch.on( 'elementClick.directive', function ( event ) {
        scope.$emit( 'elementClick.directive', event );
      } );
    }

    if ( chart.multibar ) {
      chart.multibar.dispatch.on( 'elementMouseover.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );

      chart.multibar.dispatch.on( 'elementMouseout.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );

      chart.multibar.dispatch.on( 'elementClick.directive', function ( event ) {
        scope.$emit( 'elementClick.directive', event );
      } );

    }

    if ( chart.pie ) {
      chart.pie.dispatch.on( 'elementMouseover.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );

      chart.pie.dispatch.on( 'elementMouseout.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );

      chart.pie.dispatch.on( 'elementClick.directive', function ( event ) {
        scope.$emit( 'elementClick.directive', event );
      } );
    }

    if ( chart.scatter ) {
      chart.scatter.dispatch.on( 'elementMouseover.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );

      chart.scatter.dispatch.on( 'elementMouseout.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );
    }

    if ( chart.bullet ) {
      chart.bullet.dispatch.on( 'elementMouseover.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );

      chart.bullet.dispatch.on( 'elementMouseout.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );
    }

    if ( chart.legend ) {
      //'legendClick', 'legendDblclick', 'legendMouseover'
      //stateChange
      chart.legend.dispatch.on( 'stateChange.legend.directive', function ( event ) {
        scope.$emit( 'stateChange.legend.directive', event );
      } );
      chart.legend.dispatch.on( 'legendClick.directive', function ( d, i ) {
        scope.$emit( 'legendClick.directive', d, i );
      } );
      chart.legend.dispatch.on( 'legendDblclick.directive', function ( d, i ) {
        scope.$emit( 'legendDblclick.directive', d, i );
      } );
      chart.legend.dispatch.on( 'legendMouseover.directive', function ( d, i ) {
        scope.$emit( 'legendMouseover.directive', d, i );
      } );
    }

    if ( chart.controls ) {
      if ( chart.controls.legendClick ) {
        chart.controls.dispatch.on( 'legendClick.directive', function ( d, i ) {
          scope.$emit( 'legendClick.directive', d, i );
        } );
      }
    }

  }

  function configureXaxis( chart, scope, attrs ) {
    if ( attrs.xaxisorient ) {
      chart.xAxis.orient( attrs.xaxisorient );
    }
    if ( attrs.xaxisticks ) {
      chart.xAxis.scale().ticks( attrs.xaxisticks );
    }
    if ( attrs.xaxistickvalues ) {
      if ( Array.isArray( scope.$eval( attrs.xaxistickvalues ) ) ) {
        chart.xAxis.tickValues( scope.$eval( attrs.xaxistickvalues ) );
      } else if ( typeof scope.xaxistickvalues() === 'function' ) {
        chart.xAxis.tickValues( scope.xaxistickvalues() );
      }
    }
    if ( attrs.xaxisticksubdivide ) {
      chart.xAxis.tickSubdivide( scope.xaxisticksubdivide() );
    }
    if ( attrs.xaxisticksize ) {
      chart.xAxis.tickSize( scope.xaxisticksize() );
    }
    if ( attrs.xaxistickpadding ) {
      chart.xAxis.tickPadding( scope.xaxistickpadding() );
    }
    if ( attrs.xaxistickformat ) {
      chart.xAxis.tickFormat( scope.xaxistickformat() );
    }
    if ( attrs.xaxislabel ) {
      chart.xAxis.axisLabel( attrs.xaxislabel );
    }
    if ( attrs.xaxisscale ) {
      chart.xAxis.scale( scope.xaxisscale() );
    }
    if ( attrs.xaxisdomain ) {
      if ( Array.isArray( scope.$eval( attrs.xaxisdomain ) ) ) {
        chart.xDomain( scope.$eval( attrs.xaxisdomain ) );
      } else if ( typeof scope.xaxisdomain() === 'function' ) {
        chart.xDomain( scope.xaxisdomain() );
      }
    }
    if ( attrs.xaxisrange ) {
      if ( Array.isArray( scope.$eval( attrs.xaxisrange ) ) ) {
        chart.xRange( scope.$eval( attrs.xaxisrange ) );
      } else if ( typeof scope.xaxisrange() === 'function' ) {
        chart.xRange( scope.xaxisrange() );
      }
    }
    if ( attrs.xaxisrangeband ) {
      chart.xAxis.rangeBand( scope.xaxisrangeband() );
    }
    if ( attrs.xaxisrangebands ) {
      chart.xAxis.rangeBands( scope.xaxisrangebands() );
    }
    if ( attrs.xaxisshowmaxmin ) {
      chart.xAxis.showMaxMin( ( attrs.xaxisshowmaxmin === 'true' ) );
    }
    if ( attrs.xaxishighlightzero ) {
      chart.xAxis.highlightZero( ( attrs.xaxishighlightzero === 'true' ) );
    }
    if ( attrs.xaxisrotatelabels ) {
      chart.xAxis.rotateLabels( ( +attrs.xaxisrotatelabels ) );
    }
    //    if(attrs.xaxisrotateylabel){
    //        chart.xAxis.rotateYLabel((attrs.xaxisrotateylabel === "true"));
    //    }
    if ( attrs.xaxisstaggerlabels ) {
      chart.xAxis.staggerLabels( ( attrs.xaxisstaggerlabels === 'true' ) );
    }
    if ( attrs.xaxislabeldistance ) {
      chart.xAxis.axisLabelDistance( ( +attrs.xaxislabeldistance ) );
    }
  }

  function configureX2axis( chart, scope, attrs ) {
    if ( attrs.x2axisorient ) {
      chart.x2Axis.orient( attrs.x2axisorient );
    }
    if ( attrs.x2axisticks ) {
      chart.x2Axis.scale().ticks( attrs.x2axisticks );
    }
    if ( attrs.x2axistickvalues ) {
      if ( Array.isArray( scope.$eval( attrs.x2axistickvalues ) ) ) {
        chart.x2Axis.tickValues( scope.$eval( attrs.x2axistickvalues ) );
      } else if ( typeof scope.xaxistickvalues() === 'function' ) {
        chart.x2Axis.tickValues( scope.x2axistickvalues() );
      }
    }
    if ( attrs.x2axisticksubdivide ) {
      chart.x2Axis.tickSubdivide( scope.x2axisticksubdivide() );
    }
    if ( attrs.x2axisticksize ) {
      chart.x2Axis.tickSize( scope.x2axisticksize() );
    }
    if ( attrs.x2axistickpadding ) {
      chart.x2Axis.tickPadding( scope.x2axistickpadding() );
    }
    if ( attrs.x2axistickformat ) {
      chart.x2Axis.tickFormat( scope.x2axistickformat() );
    }
    if ( attrs.x2axislabel ) {
      chart.x2Axis.axisLabel( attrs.x2axislabel );
    }
    if ( attrs.x2axisscale ) {
      chart.x2Axis.scale( scope.x2axisscale() );
    }
    if ( attrs.x2axisdomain ) {
      if ( Array.isArray( scope.$eval( attrs.x2axisdomain ) ) ) {
        chart.x2Axis.domain( scope.$eval( attrs.x2axisdomain ) );
      } else if ( typeof scope.x2axisdomain() === 'function' ) {
        chart.x2Axis.domain( scope.x2axisdomain() );
      }
    }
    if ( attrs.x2axisrange ) {
      if ( Array.isArray( scope.$eval( attrs.x2axisrange ) ) ) {
        chart.x2Axis.range( scope.$eval( attrs.x2axisrange ) );
      } else if ( typeof scope.x2axisrange() === 'function' ) {
        chart.x2Axis.range( scope.x2axisrange() );
      }
    }
    if ( attrs.x2axisrangeband ) {
      chart.x2Axis.rangeBand( scope.x2axisrangeband() );
    }
    if ( attrs.x2axisrangebands ) {
      chart.x2Axis.rangeBands( scope.x2axisrangebands() );
    }
    if ( attrs.x2axisshowmaxmin ) {
      chart.x2Axis.showMaxMin( ( attrs.x2axisshowmaxmin === 'true' ) );
    }
    if ( attrs.x2axishighlightzero ) {
      chart.x2Axis.highlightZero( ( attrs.x2axishighlightzero === 'true' ) );
    }
    if ( attrs.x2axisrotatelables ) {
      chart.x2Axis.rotateLabels( ( +attrs.x2axisrotatelables ) );
    }
    //    if(attrs.xaxisrotateylabel){
    //        chart.xAxis.rotateYLabel((attrs.xaxisrotateylabel === "true"));
    //    }
    if ( attrs.x2axisstaggerlabels ) {
      chart.x2Axis.staggerLabels( ( attrs.x2axisstaggerlabels === 'true' ) );
    }
    if ( attrs.x2axislabeldistance ) {
      chart.x2Axis.axisLabelDistance( ( +attrs.x2axislabeldistance ) );
    }
  }

  function configureYaxis( chart, scope, attrs ) {
    if ( attrs.yaxisorient ) {
      chart.yAxis.orient( attrs.yaxisorient );
    }
    if ( attrs.yaxisticks ) {
      chart.yAxis.scale().ticks( attrs.yaxisticks );
    }
    if ( attrs.yaxistickvalues ) {
      if ( Array.isArray( scope.$eval( attrs.yaxistickvalues ) ) ) {
        chart.yAxis.tickValues( scope.$eval( attrs.yaxistickvalues ) );
      } else if ( typeof scope.yaxistickvalues() === 'function' ) {
        chart.yAxis.tickValues( scope.yaxistickvalues() );
      }
    }
    if ( attrs.yaxisticksubdivide ) {
      chart.yAxis.tickSubdivide( scope.yaxisticksubdivide() );
    }
    if ( attrs.yaxisticksize ) {
      chart.yAxis.tickSize( scope.yaxisticksize() );
    }
    if ( attrs.yaxistickpadding ) {
      chart.yAxis.tickPadding( scope.yaxistickpadding() );
    }
    if ( attrs.yaxistickformat ) {
      chart.yAxis.tickFormat( scope.yaxistickformat() );
    }
    if ( attrs.yaxislabel ) {
      chart.yAxis.axisLabel( attrs.yaxislabel );
    }
    if ( attrs.yaxisscale ) {
      chart.yAxis.scale( scope.yaxisscale() );
    }
    if ( attrs.yaxisdomain ) {
      if ( Array.isArray( scope.$eval( attrs.yaxisdomain ) ) ) {
        chart.yDomain( scope.$eval( attrs.yaxisdomain ) );
      } else if ( typeof scope.yaxisdomain() === 'function' ) {
        chart.yDomain( scope.yaxisdomain() );
      }
    }
    if ( attrs.yaxisrange ) {
      if ( Array.isArray( scope.$eval( attrs.yaxisrange ) ) ) {
        chart.yRange( scope.$eval( attrs.yaxisrange ) );
      } else if ( typeof scope.yaxisrange() === 'function' ) {
        chart.yRange( scope.yaxisrange() );
      }
    }
    if ( attrs.yaxisrangeband ) {
      chart.yAxis.rangeBand( scope.yaxisrangeband() );
    }
    if ( attrs.yaxisrangebands ) {
      chart.yAxis.rangeBands( scope.yaxisrangebands() );
    }
    if ( attrs.yaxisshowmaxmin ) {
      chart.yAxis.showMaxMin( ( attrs.yaxisshowmaxmin === 'true' ) );
    }
    if ( attrs.yaxishighlightzero ) {
      chart.yAxis.highlightZero( ( attrs.yaxishighlightzero === 'true' ) );
    }
    if ( attrs.yaxisrotatelabels ) {
      chart.yAxis.rotateLabels( ( +attrs.yaxisrotatelabels ) );
    }
    if ( attrs.yaxisrotateylabel ) {
      chart.yAxis.rotateYLabel( ( attrs.yaxisrotateylabel === 'true' ) );
    }
    if ( attrs.yaxisstaggerlabels ) {
      chart.yAxis.staggerLabels( ( attrs.yaxisstaggerlabels === 'true' ) );
    }
    if ( attrs.yaxislabeldistance ) {
      chart.yAxis.axisLabelDistance( ( +attrs.yaxislabeldistance ) );
    }
  }

  function configureY1axis( chart, scope, attrs ) {
    if ( attrs.y1axisticks ) {
      chart.y1Axis.scale().ticks( attrs.y1axisticks );
    }
    if ( attrs.y1axistickvalues ) {
      if ( Array.isArray( scope.$eval( attrs.y1axistickvalues ) ) ) {
        chart.y1Axis.tickValues( scope.$eval( attrs.y1axistickvalues ) );
      } else if ( typeof scope.y1axistickvalues() === 'function' ) {
        chart.y1Axis.tickValues( scope.y1axistickvalues() );
      }
    }
    if ( attrs.y1axisticksubdivide ) {
      chart.y1Axis.tickSubdivide( scope.y1axisticksubdivide() );
    }
    if ( attrs.y1axisticksize ) {
      chart.y1Axis.tickSize( scope.y1axisticksize() );
    }
    if ( attrs.y1axistickpadding ) {
      chart.y1Axis.tickPadding( scope.y1axistickpadding() );
    }
    if ( attrs.y1axistickformat ) {
      chart.y1Axis.tickFormat( scope.y1axistickformat() );
    }
    if ( attrs.y1axislabel ) {
      chart.y1Axis.axisLabel( attrs.y1axislabel );
    }
    if ( attrs.y1axisscale ) {
      chart.y1Axis.yScale( scope.y1axisscale() );
    }
    if ( attrs.y1axisdomain ) {
      if ( Array.isArray( scope.$eval( attrs.y1axisdomain ) ) ) {
        chart.y1Axis.domain( scope.$eval( attrs.y1axisdomain ) );
      } else if ( typeof scope.y1axisdomain() === 'function' ) {
        chart.y1Axis.domain( scope.y1axisdomain() );
      }
    }
    if ( attrs.y1axisrange ) {
      if ( Array.isArray( scope.$eval( attrs.y1axisrange ) ) ) {
        chart.y1Axis.range( scope.$eval( attrs.y1axisrange ) );
      } else if ( typeof scope.y1axisrange() === 'function' ) {
        chart.y1Axis.range( scope.y1axisrange() );
      }
    }
    if ( attrs.y1axisrangeband ) {
      chart.y1Axis.rangeBand( scope.y1axisrangeband() );
    }
    if ( attrs.y1axisrangebands ) {
      chart.y1Axis.rangeBands( scope.y1axisrangebands() );
    }
    if ( attrs.y1axisshowmaxmin ) {
      chart.y1Axis.showMaxMin( ( attrs.y1axisshowmaxmin === 'true' ) );
    }
    if ( attrs.y1axishighlightzero ) {
      chart.y1Axis.highlightZero( ( attrs.y1axishighlightzero === 'true' ) );
    }
    if ( attrs.y1axisrotatelabels ) {
      chart.y1Axis.rotateLabels( ( +scope.y1axisrotatelabels ) );
    }
    if ( attrs.y1axisrotateylabel ) {
      chart.y1Axis.rotateYLabel( ( attrs.y1axisrotateylabel === 'true' ) );
    }
    if ( attrs.y1axisstaggerlabels ) {
      chart.y1Axis.staggerlabels( ( attrs.y1axisstaggerlabels === 'true' ) );
    }
    if ( attrs.y1axislabeldistance ) {
      chart.y1Axis.axisLabelDistance( ( +attrs.y1axislabeldistance ) );
    }
  }

  function configureY2axis( chart, scope, attrs ) {
    if ( attrs.y2axisticks ) {
      chart.y2Axis.scale().ticks( attrs.y2axisticks );
    }
    if ( attrs.y2axistickvalues ) {
      chart.y2Axis.tickValues( scope.$eval( attrs.y2axistickvalues ) );
    }
    if ( attrs.y2axisticksubdivide ) {
      chart.y2Axis.tickSubdivide( scope.y2axisticksubdivide() );
    }
    if ( attrs.y2axisticksize ) {
      chart.y2Axis.tickSize( scope.y2axisticksize() );
    }
    if ( attrs.y2axistickpadding ) {
      chart.y2Axis.tickPadding( scope.y2axistickpadding() );
    }
    if ( attrs.y2axistickformat ) {
      chart.y2Axis.tickFormat( scope.y2axistickformat() );
    }
    if ( attrs.y2axislabel ) {
      chart.y2Axis.axisLabel( attrs.y2axislabel );
    }
    if ( attrs.y2axisscale ) {
      chart.y2Axis.yScale( scope.y2axisscale() );
    }
    if ( attrs.y2axisdomain ) {
      if ( Array.isArray( scope.$eval( attrs.y2axisdomain ) ) ) {
        chart.y2Axis.domain( scope.$eval( attrs.y2axisdomain ) );
      } else if ( typeof scope.y2axisdomain() === 'function' ) {
        chart.y2Axis.domain( scope.y2axisdomain() );
      }
    }
    if ( attrs.y2axisrange ) {
      if ( Array.isArray( scope.$eval( attrs.y2axisrange ) ) ) {
        chart.y2Axis.range( scope.$eval( attrs.y2axisrange ) );
      } else if ( typeof scope.y2axisrange() === 'function' ) {
        chart.y2Axis.range( scope.y2axisrange() );
      }
    }
    if ( attrs.y2axisrangeband ) {
      chart.y2Axis.rangeBand( scope.y2axisrangeband() );
    }
    if ( attrs.y2axisrangebands ) {
      chart.y2Axis.rangeBands( scope.y2axisrangebands() );
    }
    if ( attrs.y2axisshowmaxmin ) {
      chart.y2Axis.showMaxMin( ( attrs.y2axisshowmaxmin === 'true' ) );
    }
    if ( attrs.y2axishighlightzero ) {
      chart.y2Axis.highlightZero( ( attrs.y2axishighlightzero === 'true' ) );
    }
    if ( attrs.y2axisrotatelabels ) {
      chart.y2Axis.rotateLabels( ( +scope.y2axisrotatelabels ) );
    }
    if ( attrs.y2axisrotateylabel ) {
      chart.y2Axis.rotateYLabel( ( attrs.y2axisrotateylabel === 'true' ) );
    }
    if ( attrs.y2axisstaggerlabels ) {
      chart.y2Axis.staggerlabels( ( attrs.y2axisstaggerlabels === 'true' ) );
    }
    if ( attrs.y2axislabeldistance ) {
      chart.y2Axis.axisLabelDistance( ( +attrs.y2axislabeldistance ) );
    }
  }

  function initializeMargin( scope, attrs ) {
    var margin = scope.$eval( attrs.margin ) || {
      left: 50,
      top: 50,
      bottom: 50,
      right: 50
    };
    if ( typeof margin !== 'object' ) {
      // we were passed a vanilla int, convert to full margin object
      margin = {
        left: margin,
        top: margin,
        bottom: margin,
        right: margin
      };
    }
    scope.margin = margin;
  }

  function checkElementID( scope, attrs, element, chart, data ) {
    configureXaxis( chart, scope, attrs );
    configureX2axis( chart, scope, attrs );
    configureYaxis( chart, scope, attrs );
    configureY1axis( chart, scope, attrs );
    configureY2axis( chart, scope, attrs );
    configureLegend( chart, scope, attrs );
    processEvents( chart, scope );
    var dataAttributeChartID;
    //randomly generated if id attribute doesn't exist
    if ( !attrs.id ) {
      dataAttributeChartID = 'chartid' + Math.floor( Math.random() * 1000000001 );
      angular.element( element ).attr( 'data-chartid', dataAttributeChartID );
      //if an id is not supplied, create a random id.
      if ( d3.select( '[data-chartid=' + dataAttributeChartID + '] svg' ).empty() ) {
        d3.select( '[data-chartid=' + dataAttributeChartID + ']' ).append( 'svg' ).attr( 'height', scope.height ).attr( 'width', scope.width ).datum( data ).transition().duration( attrs.transitionduration === undefined ? 250 : +attrs.transitionduration ).call( chart );
      } else {
        d3.select( '[data-chartid=' + dataAttributeChartID + '] svg' ).attr( 'height', scope.height ).attr( 'width', scope.width ).datum( data ).transition().duration( attrs.transitionduration === undefined ? 250 : +attrs.transitionduration ).call( chart );
      }
    } else {
      if ( angular.isArray( data ) && data.length === 0 ) {
        d3.select( '#' + attrs.id + ' svg' ).remove();
      }
      if ( d3.select( '#' + attrs.id + ' svg' ).empty() ) {
        d3.select( '#' + attrs.id ).append( 'svg' );
      }
      d3.select( '#' + attrs.id + ' svg' ).attr( 'height', scope.height ).attr( 'width', scope.width ).datum( data ).transition().duration( attrs.transitionduration === undefined ? 250 : +attrs.transitionduration ).call( chart );
    }
  }
  angular.module( 'nvd3ChartDirectives', [] ).directive( 'nvd3LineChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          showlegend: '@',
          tooltips: '@',
          showxaxis: '@',
          showyaxis: '@',
          rightalignyaxis: '@',
          defaultstate: '@',
          nodata: '@',
          margin: '&',
          tooltipcontent: '&',
          color: '&',
          x: '&',
          y: '&',
          forcex: '@',
          forcey: '@',
          isArea: '@',
          interactive: '@',
          clipedge: '@',
          clipvoronoi: '@',
          interpolate: '@',
          callback: '&',
          useinteractiveguideline: '@',
          xaxisorient: '&',
          xaxisticks: '@',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxislabeldistance: '@',
          yaxisorient: '&',
          yaxisticks: '&',
          yaxistickvalues: '&yaxistickvalues',
          yaxisticksubdivide: '&',
          yaxisticksize: '&',
          yaxistickpadding: '&',
          yaxistickformat: '&',
          yaxislabel: '@',
          yaxisscale: '&',
          yaxisdomain: '&',
          yaxisrange: '&',
          yaxisrangeband: '&',
          yaxisrangebands: '&',
          yaxisshowmaxmin: '@',
          yaxishighlightzero: '@',
          yaxisrotatelabels: '@',
          yaxisrotateylabel: '@',
          yaxisstaggerlabels: '@',
          yaxislabeldistance: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.lineChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).forceX( attrs.forcex === undefined ? [] : scope.$eval( attrs.forcex ) ).forceY( attrs.forcey === undefined ? [ 0 ] : scope.$eval( attrs.forcey ) ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).showXAxis( attrs.showxaxis === undefined ? false : attrs.showxaxis === 'true' ).showYAxis( attrs.showyaxis === undefined ? false : attrs.showyaxis === 'true' ).rightAlignYAxis( attrs.rightalignyaxis === undefined ? false : attrs.rightalignyaxis === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).interactive( attrs.interactive === undefined ? false : attrs.interactive === 'true' ).clipEdge( attrs.clipedge === undefined ? false : attrs.clipedge === 'true' ).clipVoronoi( attrs.clipvoronoi === undefined ? false : attrs.clipvoronoi === 'true' ).interpolate( attrs.interpolate === undefined ? 'linear' : attrs.interpolate ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() ).isArea( attrs.isarea === undefined ? function ( d ) {
                    return d.area;
                  } : function () {
                    return attrs.isarea === 'true';
                  } );
                  if ( chart.useInteractiveGuideline ) {
                    chart.useInteractiveGuideline( attrs.useinteractiveguideline === undefined ? false : attrs.useinteractiveguideline === 'true' );
                  }
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3CumulativeLineChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          showlegend: '@',
          tooltips: '@',
          showxaxis: '@',
          showyaxis: '@',
          rightalignyaxis: '@',
          defaultstate: '@',
          nodata: '@',
          margin: '&',
          tooltipcontent: '&',
          color: '&',
          x: '&',
          y: '&',
          forcex: '@',
          forcey: '@',
          isArea: '@',
          interactive: '@',
          clipedge: '@',
          clipvoronoi: '@',
          usevoronoi: '@',
          average: '&',
          rescaley: '@',
          callback: '&',
          useinteractiveguideline: '@',
          xaxisorient: '&',
          xaxisticks: '&',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxislabeldistance: '@',
          yaxisorient: '&',
          yaxisticks: '&',
          yaxistickvalues: '&yaxistickvalues',
          yaxisticksubdivide: '&',
          yaxisticksize: '&',
          yaxistickpadding: '&',
          yaxistickformat: '&',
          yaxislabel: '@',
          yaxisscale: '&',
          yaxisdomain: '&',
          yaxisrange: '&',
          yaxisrangeband: '&',
          yaxisrangebands: '&',
          yaxisshowmaxmin: '@',
          yaxishighlightzero: '@',
          yaxisrotatelabels: '@',
          yaxisrotateylabel: '@',
          yaxisstaggerlabels: '@',
          yaxislabeldistance: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.cumulativeLineChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).forceX( attrs.forcex === undefined ? [] : scope.$eval( attrs.forcex ) ).forceY( attrs.forcey === undefined ? [ 0 ] : scope.$eval( attrs.forcey ) ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).showXAxis( attrs.showxaxis === undefined ? false : attrs.showxaxis === 'true' ).showYAxis( attrs.showyaxis === undefined ? false : attrs.showyaxis === 'true' ).rightAlignYAxis( attrs.rightalignyaxis === undefined ? false : attrs.rightalignyaxis === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).interactive( attrs.interactive === undefined ? false : attrs.interactive === 'true' ).clipEdge( attrs.clipedge === undefined ? false : attrs.clipedge === 'true' ).clipVoronoi( attrs.clipvoronoi === undefined ? false : attrs.clipvoronoi === 'true' ).useVoronoi( attrs.usevoronoi === undefined ? false : attrs.usevoronoi === 'true' ).average( attrs.average === undefined ? function ( d ) {
                    return d.average;
                  } : scope.average() ).color( attrs.color === undefined ? d3.scale.category10().range() : scope.color() ).isArea( attrs.isarea === undefined ? function ( d ) {
                    return d.area;
                  } : attrs.isarea === 'true' );
                  //.rescaleY(attrs.rescaley === undefined ? false : (attrs.rescaley === 'true'));
                  if ( chart.useInteractiveGuideline ) {
                    chart.useInteractiveGuideline( attrs.useinteractiveguideline === undefined ? false : attrs.useinteractiveguideline === 'true' );
                  }
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3StackedAreaChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          showlegend: '@',
          tooltips: '@',
          showcontrols: '@',
          nodata: '@',
          margin: '&',
          tooltipcontent: '&',
          color: '&',
          x: '&',
          y: '&',
          forcex: '@',
          forcey: '@',
          forcesize: '@',
          interactive: '@',
          usevoronoi: '@',
          clipedge: '@',
          interpolate: '@',
          style: '@',
          order: '@',
          offset: '@',
          size: '&',
          xScale: '&',
          yScale: '&',
          xDomain: '&',
          yDomain: '&',
          xRange: '&',
          yRange: '&',
          sizeDomain: '&',
          callback: '&',
          showxaxis: '&',
          xaxisorient: '&',
          xaxisticks: '&',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxisaxislabeldistance: '@',
          showyaxis: '&',
          useinteractiveguideline: '@',
          yaxisorient: '&',
          yaxisticks: '&',
          yaxistickvalues: '&yaxistickvalues',
          yaxisticksubdivide: '&',
          yaxisticksize: '&',
          yaxistickpadding: '&',
          yaxistickformat: '&',
          yaxislabel: '@',
          yaxisscale: '&',
          yaxisdomain: '&',
          yaxisrange: '&',
          yaxisrangeband: '&',
          yaxisrangebands: '&',
          yaxisshowmaxmin: '@',
          yaxishighlightzero: '@',
          yaxisrotatelabels: '@',
          yaxisrotateylabel: '@',
          yaxisstaggerlabels: '@',
          yaxislabeldistance: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.stackedAreaChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).forceX( attrs.forcex === undefined ? [] : scope.$eval( attrs.forcex ) ).forceY( attrs.forcey === undefined ? [ 0 ] : scope.$eval( attrs.forcey ) ).size( attrs.size === undefined ? function ( d ) {
                    return d.size === undefined ? 1 : d.size;
                  } : scope.size() ).forceSize( attrs.forcesize === undefined ? [] : scope.$eval( attrs.forcesize ) ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).showControls( attrs.showcontrols === undefined ? false : attrs.showcontrols === 'true' ).showXAxis( attrs.showxaxis === undefined ? false : attrs.showxaxis === 'true' ).showYAxis( attrs.showyaxis === undefined ? false : attrs.showyaxis === 'true' ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).interactive( attrs.interactive === undefined ? false : attrs.interactive === 'true' ).clipEdge( attrs.clipedge === undefined ? false : attrs.clipedge === 'true' ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() );
                  if ( chart.useInteractiveGuideline ) {
                    chart.useInteractiveGuideline( attrs.useinteractiveguideline === undefined ? false : attrs.useinteractiveguideline === 'true' );
                  }
                  if ( attrs.usevoronoi ) {
                    chart.useVoronoi( attrs.usevoronoi === 'true' );
                  }
                  if ( attrs.style ) {
                    chart.style( attrs.style );
                  }
                  if ( attrs.order ) {
                    chart.order( attrs.order );
                  }
                  if ( attrs.offset ) {
                    chart.offset( attrs.offset );
                  }
                  if ( attrs.interpolate ) {
                    chart.interpolate( attrs.interpolate );
                  }
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  if ( attrs.xscale ) {
                    chart.xScale( scope.xscale() );
                  }
                  if ( attrs.yscale ) {
                    chart.yScale( scope.yscale() );
                  }
                  if ( attrs.xdomain ) {
                    if ( Array.isArray( scope.$eval( attrs.xdomain ) ) ) {
                      chart.xDomain( scope.$eval( attrs.xdomain ) );
                    } else if ( typeof scope.xdomain() === 'function' ) {
                      chart.xDomain( scope.xdomain() );
                    }
                  }
                  if ( attrs.ydomain ) {
                    if ( Array.isArray( scope.$eval( attrs.ydomain ) ) ) {
                      chart.yDomain( scope.$eval( attrs.ydomain ) );
                    } else if ( typeof scope.ydomain() === 'function' ) {
                      chart.yDomain( scope.ydomain() );
                    }
                  }
                  if ( attrs.sizedomain ) {
                    chart.sizeDomain( scope.sizedomain() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3MultiBarChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          showlegend: '@',
          tooltips: '@',
          tooltipcontent: '&',
          color: '&',
          showcontrols: '@',
          nodata: '@',
          reducexticks: '@',
          staggerlabels: '@',
          rotatelabels: '@',
          margin: '&',
          x: '&',
          y: '&',
          forcey: '@',
          delay: '@',
          stacked: '@',
          callback: '&',
          showxaxis: '&',
          xaxisorient: '&',
          xaxisticks: '&',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxisaxislabeldistance: '@',
          showyaxis: '&',
          yaxisorient: '&',
          yaxisticks: '&',
          yaxistickvalues: '&yaxistickvalues',
          yaxisticksubdivide: '&',
          yaxisticksize: '&',
          yaxistickpadding: '&',
          yaxistickformat: '&',
          yaxislabel: '@',
          yaxisscale: '&',
          yaxisdomain: '&',
          yaxisrange: '&',
          yaxisrangeband: '&',
          yaxisrangebands: '&',
          yaxisshowmaxmin: '@',
          yaxishighlightzero: '@',
          yaxisrotatelabels: '@',
          yaxisrotateylabel: '@',
          yaxisstaggerlabels: '@',
          yaxislabeldistance: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.multiBarChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).forceY( attrs.forcey === undefined ? [ 0 ] : scope.$eval( attrs.forcey ) ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).showControls( attrs.showcontrols === undefined ? false : attrs.showcontrols === 'true' ).showXAxis( attrs.showxaxis === undefined ? false : attrs.showxaxis === 'true' ).showYAxis( attrs.showyaxis === undefined ? false : attrs.showyaxis === 'true' ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).reduceXTicks( attrs.reducexticks === undefined ? false : attrs.reducexticks === 'true' ).staggerLabels( attrs.staggerlabels === undefined ? false : attrs.staggerlabels === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).rotateLabels( attrs.rotatelabels === undefined ? 0 : attrs.rotatelabels ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() ).delay( attrs.delay === undefined ? 1200 : attrs.delay ).stacked( attrs.stacked === undefined ? false : attrs.stacked === 'true' );
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3DiscreteBarChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          tooltips: '@',
          showxaxis: '@',
          showyaxis: '@',
          tooltipcontent: '&',
          staggerlabels: '@',
          color: '&',
          margin: '&',
          nodata: '@',
          x: '&',
          y: '&',
          forcey: '@',
          showvalues: '@',
          valueformat: '&',
          callback: '&',
          xaxisorient: '&',
          xaxisticks: '&',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxisaxislabeldistance: '@',
          yaxisorient: '&',
          yaxisticks: '&',
          yaxistickvalues: '&yaxistickvalues',
          yaxisticksubdivide: '&',
          yaxisticksize: '&',
          yaxistickpadding: '&',
          yaxistickformat: '&',
          yaxislabel: '@',
          yaxisscale: '&',
          yaxisdomain: '&',
          yaxisrange: '&',
          yaxisrangeband: '&',
          yaxisrangebands: '&',
          yaxisshowmaxmin: '@',
          yaxishighlightzero: '@',
          yaxisrotatelabels: '@',
          yaxisrotateylabel: '@',
          yaxisstaggerlabels: '@',
          yaxislabeldistance: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.discreteBarChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).forceY( attrs.forcey === undefined ? [ 0 ] : scope.$eval( attrs.forcey ) ).showValues( attrs.showvalues === undefined ? false : attrs.showvalues === 'true' ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).showXAxis( attrs.showxaxis === undefined ? false : attrs.showxaxis === 'true' ).showYAxis( attrs.showyaxis === undefined ? false : attrs.showyaxis === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).staggerLabels( attrs.staggerlabels === undefined ? false : attrs.staggerlabels === 'true' ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() );
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  if ( attrs.valueformat ) {
                    chart.valueFormat( scope.valueformat() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3HistoricalBarChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          tooltips: '@',
          tooltipcontent: '&',
          color: '&',
          margin: '&',
          nodata: '@',
          x: '&',
          y: '&',
          forcey: '@',
          isarea: '@',
          interactive: '@',
          clipedge: '@',
          clipvoronoi: '@',
          interpolate: '@',
          highlightPoint: '@',
          clearHighlights: '@',
          callback: '&',
          useinteractiveguideline: '@',
          xaxisorient: '&',
          xaxisticks: '&',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxisaxislabeldistance: '@',
          yaxisorient: '&',
          yaxisticks: '&',
          yaxistickvalues: '&yaxistickvalues',
          yaxisticksubdivide: '&',
          yaxisticksize: '&',
          yaxistickpadding: '&',
          yaxistickformat: '&',
          yaxislabel: '@',
          yaxisscale: '&',
          yaxisdomain: '&',
          yaxisrange: '&',
          yaxisrangeband: '&',
          yaxisrangebands: '&',
          yaxisshowmaxmin: '@',
          yaxishighlightzero: '@',
          yaxisrotatelabels: '@',
          yaxisrotateylabel: '@',
          yaxisstaggerlabels: '@',
          yaxislabeldistance: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.historicalBarChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).forceY( attrs.forcey === undefined ? [ 0 ] : scope.$eval( attrs.forcey ) ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).interactive( attrs.interactive === undefined ? false : attrs.interactive === 'true' ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() );
                  if ( chart.useInteractiveGuideline ) {
                    chart.useInteractiveGuideline( attrs.useinteractiveguideline === undefined ? false : attrs.useinteractiveguideline === 'true' );
                  }
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  if ( attrs.valueformat ) {
                    chart.valueFormat( scope.valueformat() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3MultiBarHorizontalChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          showlegend: '@',
          tooltips: '@',
          tooltipcontent: '&',
          color: '&',
          showcontrols: '@',
          margin: '&',
          nodata: '@',
          x: '&',
          y: '&',
          forcey: '@',
          stacked: '@',
          showvalues: '@',
          valueformat: '&',
          callback: '&',
          xaxisorient: '&',
          xaxisticks: '&',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxisaxislabeldistance: '@',
          yaxisorient: '&',
          yaxisticks: '&',
          yaxistickvalues: '&yaxistickvalues',
          yaxisticksubdivide: '&',
          yaxisticksize: '&',
          yaxistickpadding: '&',
          yaxistickformat: '&',
          yaxislabel: '@',
          yaxisscale: '&',
          yaxisdomain: '&',
          yaxisrange: '&',
          yaxisrangeband: '&',
          yaxisrangebands: '&',
          yaxisshowmaxmin: '@',
          yaxishighlightzero: '@',
          yaxisrotatelabels: '@',
          yaxisrotateylabel: '@',
          yaxisstaggerlabels: '@',
          yaxislabeldistance: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.multiBarHorizontalChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).showXAxis( attrs.showxaxis === undefined ? false : attrs.showxaxis === 'true' ).showYAxis( attrs.showyaxis === undefined ? false : attrs.showyaxis === 'true' ).forceY( attrs.forcey === undefined ? [ 0 ] : scope.$eval( attrs.forcey ) ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).showControls( attrs.showcontrols === undefined ? false : attrs.showcontrols === 'true' ).showValues( attrs.showvalues === undefined ? false : attrs.showvalues === 'true' ).stacked( attrs.stacked === undefined ? false : attrs.stacked === 'true' );
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  if ( attrs.valueformat ) {
                    chart.valueFormat( scope.valueformat() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3PieChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          showlabels: '@',
          showlegend: '@',
          donutLabelsOutside: '@',
          pieLabelsOutside: '@',
          labelType: '@',
          nodata: '@',
          margin: '&',
          x: '&',
          y: '&',
          color: '&',
          donut: '@',
          donutRatio: '@',
          labelthreshold: '@',
          description: '&',
          tooltips: '@',
          tooltipcontent: '&',
          valueFormat: '&',
          callback: '&',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.pieChart().x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).width( scope.width ).height( scope.height ).margin( scope.margin ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).showLabels( attrs.showlabels === undefined ? false : attrs.showlabels === 'true' ).labelThreshold( attrs.labelthreshold === undefined ? 0.02 : attrs.labelthreshold ).labelType( attrs.labeltype === undefined ? 'key' : attrs.labeltype ).pieLabelsOutside( attrs.pielabelsoutside === undefined ? true : attrs.pielabelsoutside === 'true' ).valueFormat( attrs.valueformat === undefined ? d3.format( ',.2f' ) : attrs.valueformat ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).description( attrs.description === undefined ? function ( d ) {
                    return d.description;
                  } : scope.description() ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() ).donutLabelsOutside( attrs.donutlabelsoutside === undefined ? false : attrs.donutlabelsoutside === 'true' ).donut( attrs.donut === undefined ? false : attrs.donut === 'true' ).donutRatio( attrs.donutratio === undefined ? 0.5 : attrs.donutratio );
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3ScatterChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          showlegend: '@',
          tooltips: '@',
          showcontrols: '@',
          showDistX: '@',
          showDistY: '@',
          rightAlignYAxis: '@',
          fisheye: '@',
          xPadding: '@',
          yPadding: '@',
          tooltipContent: '&',
          tooltipXContent: '&',
          tooltipYContent: '&',
          color: '&',
          margin: '&',
          nodata: '@',
          transitionDuration: '@',
          shape: '&',
          onlyCircles: '@',
          interactive: '@',
          x: '&',
          y: '&',
          size: '&',
          forceX: '@',
          forceY: '@',
          forceSize: '@',
          xrange: '&',
          xdomain: '&',
          xscale: '&',
          yrange: '&',
          ydomain: '&',
          yscale: '&',
          sizerange: '&',
          sizedomain: '&',
          zscale: '&',
          callback: '&',
          xaxisorient: '&',
          xaxisticks: '&',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxisaxislabeldistance: '@',
          yaxisorient: '&',
          yaxisticks: '&',
          yaxistickvalues: '&yaxistickvalues',
          yaxisticksubdivide: '&',
          yaxisticksize: '&',
          yaxistickpadding: '&',
          yaxistickformat: '&',
          yaxislabel: '@',
          yaxisscale: '&',
          yaxisdomain: '&',
          yaxisrange: '&',
          yaxisrangeband: '&',
          yaxisrangebands: '&',
          yaxisshowmaxmin: '@',
          yaxishighlightzero: '@',
          yaxisrotatelabels: '@',
          yaxisrotateylabel: '@',
          yaxisstaggerlabels: '@',
          yaxislabeldistance: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.scatterChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d.x;
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d.y;
                  } : scope.y() ).size( attrs.size === undefined ? function ( d ) {
                    return d.size === undefined ? 1 : d.size;
                  } : scope.size() ).forceX( attrs.forcex === undefined ? [] : scope.$eval( attrs.forcex ) ).forceY( attrs.forcey === undefined ? [] : scope.$eval( attrs.forcey ) ).forceSize( attrs.forcesize === undefined ? [] : scope.$eval( attrs.forcesize ) ).interactive( attrs.interactive === undefined ? false : attrs.interactive === 'true' ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).tooltipContent( attrs.tooltipContent === undefined ? null : scope.tooltipContent() ).tooltipXContent( attrs.tooltipxcontent === undefined ? function ( key, x ) {
                    return '<strong>' + x + '</strong>';
                  } : scope.tooltipXContent() ).tooltipYContent( attrs.tooltipycontent === undefined ? function ( key, x, y ) {
                    return '<strong>' + y + '</strong>';
                  } : scope.tooltipYContent() ).showControls( attrs.showcontrols === undefined ? false : attrs.showcontrols === 'true' ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).showDistX( attrs.showdistx === undefined ? false : attrs.showdistx === 'true' ).showDistY( attrs.showdisty === undefined ? false : attrs.showdisty === 'true' ).xPadding( attrs.xpadding === undefined ? 0 : +attrs.xpadding ).yPadding( attrs.ypadding === undefined ? 0 : +attrs.ypadding ).fisheye( attrs.fisheye === undefined ? 0 : +attrs.fisheye ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() ).transitionDuration( attrs.transitionduration === undefined ? 250 : +attrs.transitionduration );
                  if ( attrs.shape ) {
                    chart.scatter.onlyCircles( false );
                    chart.scatter.shape( attrs.shape === undefined ? function ( d ) {
                      return d.shape || 'circle';
                    } : scope.shape() );
                  }
                  //'pointActive', 'clipVoronoi', 'clipRadius', 'useVoronoi'
                  if ( attrs.xdomain ) {
                    if ( Array.isArray( scope.$eval( attrs.xdomain ) ) ) {
                      chart.xDomain( scope.$eval( attrs.xdomain ) );
                    } else if ( typeof scope.xdomain() === 'function' ) {
                      chart.xDomain( scope.xdomain() );
                    }
                  }
                  if ( attrs.ydomain ) {
                    if ( Array.isArray( scope.$eval( attrs.ydomain ) ) ) {
                      chart.yDomain( scope.$eval( attrs.ydomain ) );
                    } else if ( typeof scope.ydomain() === 'function' ) {
                      chart.yDomain( scope.ydomain() );
                    }
                  }
                  if ( attrs.xscale ) {
                    chart.xDomain( scope.xdomain() );
                    chart.xRange( scope.xrange() );
                    chart.xScale( scope.xscale() );
                  }
                  if ( attrs.yscale ) {
                    chart.yDomain( scope.ydomain() );
                    chart.yRange( scope.yrange() );
                    chart.yScale( scope.yscale() );
                  }
                  if ( attrs.zscale ) {
                    chart.sizeDomain( scope.sizedomain() );
                    chart.sizeRange( scope.sizerange() );
                    chart.zScale( scope.zscale() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3ScatterPlusLineChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          callback: '&'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.scatterPlusLineChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d.x;
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d.y;
                  } : scope.y() ).size( attrs.size === undefined ? function ( d ) {
                    return d.size === undefined ? 1 : d.size;
                  } : scope.size() ).interactive( attrs.interactive === undefined ? false : attrs.interactive === 'true' ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).tooltipContent( attrs.tooltipContent === undefined ? null : scope.tooltipContent() ).tooltipXContent( attrs.tooltipxcontent === undefined ? function ( key, x ) {
                    return '<strong>' + x + '</strong>';
                  } : scope.tooltipXContent() ).tooltipYContent( attrs.tooltipycontent === undefined ? function ( key, x, y ) {
                    return '<strong>' + y + '</strong>';
                  } : scope.tooltipYContent() ).showControls( attrs.showcontrols === undefined ? false : attrs.showcontrols === 'true' ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).showDistX( attrs.showdistx === undefined ? false : attrs.showdistx === 'true' ).showDistY( attrs.showdisty === undefined ? false : attrs.showdisty === 'true' ).xPadding( attrs.xpadding === undefined ? 0 : +attrs.xpadding ).yPadding( attrs.ypadding === undefined ? 0 : +attrs.ypadding ).fisheye( attrs.fisheye === undefined ? 0 : +attrs.fisheye ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() ).transitionDuration( attrs.transitionduration === undefined ? 250 : +attrs.transitionduration );
                  if ( attrs.shape ) {
                    chart.scatter.onlyCircles( false );
                    chart.scatter.shape( attrs.shape === undefined ? function ( d ) {
                      return d.shape || 'circle';
                    } : scope.shape() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          } );
        }
      };
    }
  ] ).directive( 'nvd3LinePlusBarChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          showlegend: '@',
          tooltips: '@',
          showxaxis: '@',
          showyaxis: '@',
          forceX: '@',
          forceY: '@',
          forceY2: '@',
          rightalignyaxis: '@',
          defaultstate: '@',
          nodata: '@',
          margin: '&',
          tooltipcontent: '&',
          color: '&',
          x: '&',
          y: '&',
          clipvoronoi: '@',
          interpolate: '@',
          callback: '&',
          xaxisorient: '&',
          xaxisticks: '&',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxisaxislabeldistance: '@',
          y1axisorient: '&',
          y1axisticks: '&',
          y1axistickvalues: '&y1axistickvalues',
          y1axisticksubdivide: '&',
          y1axisticksize: '&',
          y1axistickpadding: '&',
          y1axistickformat: '&',
          y1axislabel: '@',
          y1axisscale: '&',
          y1axisdomain: '&',
          y1axisrange: '&',
          y1axisrangeband: '&',
          y1axisrangebands: '&',
          y1axisshowmaxmin: '@',
          y1axishighlightzero: '@',
          y1axisrotatelabels: '@',
          y1axisrotateylabel: '@',
          y1axisstaggerlabels: '@',
          y1axisaxislabeldistance: '@',
          y2axisorient: '&',
          y2axisticks: '&',
          y2axistickvalues: '&y2axistickvalues',
          y2axisticksubdivide: '&',
          y2axisticksize: '&',
          y2axistickpadding: '&',
          y2axistickformat: '&',
          y2axislabel: '@',
          y2axisscale: '&',
          y2axisdomain: '&',
          y2axisrange: '&',
          y2axisrangeband: '&',
          y2axisrangebands: '&',
          y2axisshowmaxmin: '@',
          y2axishighlightzero: '@',
          y2axisrotatelabels: '@',
          y2axisrotateylabel: '@',
          y2axisstaggerlabels: '@',
          y2axisaxislabeldistance: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.linePlusBarChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).interpolate( attrs.interpolate === undefined ? 'linear' : attrs.interpolate ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() );
                  if ( attrs.forcex ) {
                    chart.lines.forceX( scope.$eval( attrs.forcex ) );
                    chart.bars.forceX( scope.$eval( attrs.forcex ) );
                  }
                  if ( attrs.forcey ) {
                    chart.lines.forceY( scope.$eval( attrs.forcey ) );
                    chart.bars.forceY( scope.$eval( attrs.forcey ) );
                  }
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3LineWithFocusChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          height2: '@',
          id: '@',
          showlegend: '@',
          tooltips: '@',
          showxaxis: '@',
          showyaxis: '@',
          rightalignyaxis: '@',
          defaultstate: '@',
          nodata: '@',
          margin: '&',
          margin2: '&',
          tooltipcontent: '&',
          color: '&',
          x: '&',
          y: '&',
          forceX: '@',
          forceY: '@',
          clipedge: '@',
          clipvoronoi: '@',
          interpolate: '@',
          isArea: '@',
          size: '&',
          defined: '&',
          interactive: '@',
          callback: '&',
          xaxisorient: '&',
          xaxisticks: '&',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxisaxislabeldistance: '@',
          x2axisorient: '&',
          x2axisticks: '&',
          x2axistickvalues: '&xaxistickvalues',
          x2axisticksubdivide: '&',
          x2axisticksize: '&',
          x2axistickpadding: '&',
          x2axistickformat: '&',
          x2axislabel: '@',
          x2axisscale: '&',
          x2axisdomain: '&',
          x2axisrange: '&',
          x2axisrangeband: '&',
          x2axisrangebands: '&',
          x2axisshowmaxmin: '@',
          x2axishighlightzero: '@',
          x2axisrotatelables: '@',
          x2axisrotateylabel: '@',
          x2axisstaggerlabels: '@',
          yaxisorient: '&',
          yaxisticks: '&',
          yaxistickvalues: '&yaxistickvalues',
          yaxisticksubdivide: '&',
          yaxisticksize: '&',
          yaxistickpadding: '&',
          yaxistickformat: '&',
          yaxislabel: '@',
          yaxisscale: '&',
          yaxisdomain: '&',
          yaxisrange: '&',
          yaxisrangeband: '&',
          yaxisrangebands: '&',
          yaxisshowmaxmin: '@',
          yaxishighlightzero: '@',
          yaxisrotatelabels: '@',
          yaxisrotateylabel: '@',
          yaxisstaggerlabels: '@',
          yaxislabeldistance: '@',
          y2axisorient: '&',
          y2axisticks: '&',
          y2axistickvalues: '&',
          y2axisticksubdivide: '&',
          y2axisticksize: '&',
          y2axistickpadding: '&',
          y2axistickformat: '&',
          y2axislabel: '@',
          y2axisscale: '&',
          y2axisdomain: '&',
          y2axisrange: '&',
          y2axisrangeband: '&',
          y2axisrangebands: '&',
          y2axisshowmaxmin: '@',
          y2axishighlightzero: '@',
          y2axisrotatelabels: '@',
          y2axisrotateylabel: '@',
          y2axisstaggerlabels: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  //setup height 2
                  //height 2 is 100
                  //margin
                  //nvd3 default is {top: 30, right: 30, bottom: 30, left: 60}
                  //setup margin 2
                  //nvd3 default is {top: 0, right: 30, bottom: 20, left: 60}
                  if ( attrs.margin2 ) {
                    var margin2 = scope.$eval( attrs.margin2 );
                    if ( typeof margin2 !== 'object' ) {
                      // we were passed a vanilla int, convert to full margin object
                      margin2 = {
                        left: margin2,
                        top: margin2,
                        bottom: margin2,
                        right: margin2
                      };
                    }
                    scope.margin2 = margin2;
                  } else {
                    scope.margin2 = {
                      top: 0,
                      right: 30,
                      bottom: 20,
                      left: 60
                    };
                  }
                  //'xDomain', 'yDomain', 'xRange', 'yRange', ''clipEdge', 'clipVoronoi'
                  var chart = nv.models.lineWithFocusChart().width( scope.width ).height( scope.height ).height2( attrs.height2 === undefined ? 100 : +attrs.height2 ).margin( scope.margin ).margin2( scope.margin2 ).x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).forceX( attrs.forcex === undefined ? [] : scope.$eval( attrs.forcex ) ).forceY( attrs.forcey === undefined ? [] : scope.$eval( attrs.forcey ) ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() ).isArea( attrs.isarea === undefined ? function ( d ) {
                    return d.area;
                  } : function () {
                    return attrs.isarea === 'true';
                  } ).size( attrs.size === undefined ? function ( d ) {
                    return d.size === undefined ? 1 : d.size;
                  } : scope.size() ).interactive( attrs.interactive === undefined ? false : attrs.interactive === 'true' ).interpolate( attrs.interpolate === undefined ? 'linear' : attrs.interpolate );
                  if ( attrs.defined ) {
                    chart.defined( scope.defined() );
                  }
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3BulletChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          margin: '&',
          tooltips: '@',
          tooltipcontent: '&',
          orient: '@',
          ranges: '&',
          markers: '&',
          measures: '&',
          tickformat: '&',
          nodata: '@',
          callback: '&',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.bulletChart().width( scope.width ).height( scope.height ).margin( scope.margin ).orient( attrs.orient === undefined ? 'left' : attrs.orient ).tickFormat( attrs.tickformat === undefined ? null : scope.tickformat() ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata );
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3SparklineChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          margin: '&',
          x: '&',
          y: '&',
          color: '&',
          xscale: '&',
          yscale: '&',
          showvalue: '@',
          alignvalue: '@',
          rightalignvalue: '@',
          nodata: '@',
          callback: '&',
          xtickformat: '&',
          ytickformat: '&',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.sparklinePlus().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d.x;
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d.y;
                  } : scope.y() ).xTickFormat( attrs.xtickformat === undefined ? d3.format( ',r' ) : scope.xtickformat() ).yTickFormat( attrs.ytickformat === undefined ? d3.format( ',.2f' ) : scope.ytickformat() ).color( attrs.color === undefined ? nv.utils.getColor( [ '#000' ] ) : scope.color() ).showValue( attrs.showvalue === undefined ? true : attrs.showvalue === 'true' ).alignValue( attrs.alignvalue === undefined ? true : attrs.alignvalue === 'true' ).rightAlignValue( attrs.rightalignvalue === undefined ? false : attrs.rightalignvalue === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata );
                  if ( attrs.xScale ) {
                    chart.xScale( scope.xScale() );
                  }
                  if ( attrs.yScale ) {
                    chart.yScale( scope.yScale() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3SparklineWithBandlinesChart', [
    function () {
      /**
       * http://www.perceptualedge.com/articles/visual_business_intelligence/introducing_bandlines.pdf
       * You need five primary facts about a set of time-series values to construct a bandline:
       * 1) the lowest value,
       * 2) the 25th percentile (i.e., the point at and below which the lowest 25% of the values reside),
       * 3) the median (a.k.a., the 50th percentile, the point at and below which 50% of the values reside),
       * 4) the 75th percentile (i.e., the point at and below which 75% of the values reside), and
       * 5) the highest value.
       */
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          margin: '&',
          x: '&',
          y: '&',
          color: '&',
          xscale: '&',
          yscale: '&',
          showvalue: '@',
          alignvalue: '@',
          rightalignvalue: '@',
          nodata: '@',
          callback: '&',
          xtickformat: '&',
          ytickformat: '&',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            //expect scope to contain bandlineProperties
            $scope.d3Call = function ( data, chart ) {
              var dataAttributeChartID;
              //randomly generated if id attribute doesn't exist
              var selectedChart;
              var sLineSelection;
              var bandlineData;
              var bandLines;
              if ( !$attrs.id ) {
                dataAttributeChartID = 'chartid' + Math.floor( Math.random() * 1000000001 );
                angular.element( $element ).attr( 'data-chartid', dataAttributeChartID );
                selectedChart = d3.select( '[data-iem-chartid=' + dataAttributeChartID + '] svg' ).attr( 'height', $scope.height ).attr( 'width', $scope.width ).datum( data );
                //chart.yScale()($scope.bandlineProperties.median)
                //var sLineSelection = d3.select('svg#' + $attrs.id + ' g.nvd3.nv-wrap.nv-sparkline');
                sLineSelection = d3.select( '[data-iem-chartid=' + dataAttributeChartID + '] svg' + ' g.nvd3.nv-wrap.nv-sparkline' );
                bandlineData = [
                  $scope.bandlineProperties.min,
                  $scope.bandlineProperties.twentyFithPercentile,
                  $scope.bandlineProperties.median,
                  $scope.bandlineProperties.seventyFithPercentile,
                  $scope.bandlineProperties.max
                ];
                bandLines = sLineSelection.selectAll( '.nv-bandline' ).data( [ bandlineData ] );
                bandLines.enter().append( 'g' ).attr( 'class', 'nv-bandline' );
                selectedChart.transition().duration( $attrs.transitionduration === undefined ? 250 : +$attrs.transitionduration ).call( chart );
              } else {
                if ( !d3.select( '#' + $attrs.id + ' svg' ) ) {
                  d3.select( '#' + $attrs.id ).append( 'svg' );
                }
                selectedChart = d3.select( '#' + $attrs.id + ' svg' ).attr( 'height', $scope.height ).attr( 'width', $scope.width ).datum( data );
                //chart.yScale()($scope.bandlineProperties.median)
                sLineSelection = d3.select( 'svg#' + $attrs.id + ' g.nvd3.nv-wrap.nv-sparkline' );
                bandlineData = [
                  $scope.bandlineProperties.min,
                  $scope.bandlineProperties.twentyFithPercentile,
                  $scope.bandlineProperties.median,
                  $scope.bandlineProperties.seventyFithPercentile,
                  $scope.bandlineProperties.max
                ];
                bandLines = sLineSelection.selectAll( '.nv-bandline' ).data( [ bandlineData ] );
                bandLines.enter().append( 'g' ).attr( 'class', 'nv-bandline' );
                selectedChart.transition().duration( $attrs.transitionduration === undefined ? 250 : +$attrs.transitionduration ).call( chart );
              }
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  scope.bandlineProperties = {};
                  var sortedValues;
                  initializeMargin( scope, attrs );
                  var chart = nv.models.sparklinePlus().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d.x;
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d.y;
                  } : scope.y() ).xTickFormat( attrs.xtickformat === undefined ? d3.format( ',r' ) : scope.xtickformat() ).yTickFormat( attrs.ytickformat === undefined ? d3.format( ',.2f' ) : scope.ytickformat() ).color( attrs.color === undefined ? nv.utils.getColor( [ '#000' ] ) : scope.color() ).showValue( attrs.showvalue === undefined ? true : attrs.showvalue === 'true' ).alignValue( attrs.alignvalue === undefined ? true : attrs.alignvalue === 'true' ).rightAlignValue( attrs.rightalignvalue === undefined ? false : attrs.rightalignvalue === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata );
                  //calc bandline data
                  scope.bandlineProperties.min = d3.min( data, function ( d ) {
                    return d[ 1 ];
                  } );
                  scope.bandlineProperties.max = d3.max( data, function ( d ) {
                    return d[ 1 ];
                  } );
                  sortedValues = data.map( function ( d ) {
                    return d[ 1 ];
                  } ).sort( function ( a, b ) {
                    if ( a[ 0 ] < b[ 0 ] ) {
                      return -1;
                    } else if ( a[ 0 ] === b[ 0 ] ) {
                      return 0;
                    } else {
                      return 1;
                    }
                  } );
                  scope.bandlineProperties.twentyFithPercentile = d3.quantile( sortedValues, 0.25 );
                  scope.bandlineProperties.median = d3.median( sortedValues );
                  scope.bandlineProperties.seventyFithPercentile = d3.quantile( sortedValues, 0.75 );
                  if ( attrs.xScale ) {
                    chart.xScale( scope.xScale() );
                  }
                  if ( attrs.yScale ) {
                    chart.yScale( scope.yScale() );
                  }
                  configureXaxis( chart, scope, attrs );
                  configureYaxis( chart, scope, attrs );
                  processEvents( chart, scope );
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ); //still need to implement
  //sparkbars??
  //nv.models.multiBarTimeSeriesChart
  //nv.models.multiChart
  //nv.models.scatterPlusLineChart
  //nv.models.linePlusBarWithFocusChart
  //dual y-axis chart
  //crossfilter using $services?

}() );

/*jslint node: true */
/*global ZeroClipboard */

(function(window, angular, undefined) {
  'use strict';

  angular.module('ngClipboard', []).
    provider('ngClip', function() {
      var self = this;
      this.path = '//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.1.6/ZeroClipboard.swf';
      return {
        setPath: function(newPath) {
         self.path = newPath;
        },
        setConfig: function(config) {
          self.config = config;
        },
        $get: function() {
          return {
            path: self.path,
            config: self.config
          };
        }
      };
    }).
    run(['ngClip', function(ngClip) {
      var config = {
        swfPath: ngClip.path,
        trustedDomains: ["*"],
        allowScriptAccess: "always",
        forceHandCursor: true,
      };
      ZeroClipboard.config(angular.extend(config,ngClip.config || {}));
    }]).
    directive('clipCopy', ['ngClip', function (ngClip) {
      return {
        scope: {
          clipCopy: '&',
          clipClick: '&',
          clipClickFallback: '&'
        },
        restrict: 'A',
        link: function (scope, element, attrs) {
          // Bind a fallback function if flash is unavailable
          if (ZeroClipboard.isFlashUnusable()) {
            element.bind('click', function($event) {
              // Execute the expression with local variables `$event` and `copy`
              scope.$apply(scope.clipClickFallback({
                $event: $event,
                copy: scope.$eval(scope.clipCopy)
              }));
            });

            return;
          }

          // Create the client object
          var client = new ZeroClipboard(element);
          if (attrs.clipCopy === "") {
            scope.clipCopy = function(scope) {
              return element[0].previousElementSibling.innerText;
            };
          }
          client.on( 'ready', function(readyEvent) {

            client.on('copy', function (event) {
              var clipboard = event.clipboardData;
              clipboard.setData(attrs.clipCopyMimeType || 'text/plain', scope.$eval(scope.clipCopy));
            });

            client.on( 'aftercopy', function(event) {
              if (angular.isDefined(attrs.clipClick)) {
                scope.$apply(scope.clipClick);
              }
            });

            scope.$on('$destroy', function() {
              client.destroy();
            });
          });
        }
      };
    }]);
})(window, window.angular);

/*!
 * ZeroClipboard
 * The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
 * Copyright (c) 2014 Jon Rohan, James M. Greene
 * Licensed MIT
 * http://zeroclipboard.org/
 * v2.1.6
 */
(function(window, undefined) {
  "use strict";
  /**
 * Store references to critically important global functions that may be
 * overridden on certain web pages.
 */
  var _window = window, _document = _window.document, _navigator = _window.navigator, _setTimeout = _window.setTimeout, _encodeURIComponent = _window.encodeURIComponent, _ActiveXObject = _window.ActiveXObject, _Error = _window.Error, _parseInt = _window.Number.parseInt || _window.parseInt, _parseFloat = _window.Number.parseFloat || _window.parseFloat, _isNaN = _window.Number.isNaN || _window.isNaN, _round = _window.Math.round, _now = _window.Date.now, _keys = _window.Object.keys, _defineProperty = _window.Object.defineProperty, _hasOwn = _window.Object.prototype.hasOwnProperty, _slice = _window.Array.prototype.slice, _unwrap = function() {
    var unwrapper = function(el) {
      return el;
    };
    if (typeof _window.wrap === "function" && typeof _window.unwrap === "function") {
      try {
        var div = _document.createElement("div");
        var unwrappedDiv = _window.unwrap(div);
        if (div.nodeType === 1 && unwrappedDiv && unwrappedDiv.nodeType === 1) {
          unwrapper = _window.unwrap;
        }
      } catch (e) {}
    }
    return unwrapper;
  }();
  /**
 * Convert an `arguments` object into an Array.
 *
 * @returns The arguments as an Array
 * @private
 */
  var _args = function(argumentsObj) {
    return _slice.call(argumentsObj, 0);
  };
  /**
 * Shallow-copy the owned, enumerable properties of one object over to another, similar to jQuery's `$.extend`.
 *
 * @returns The target object, augmented
 * @private
 */
  var _extend = function() {
    var i, len, arg, prop, src, copy, args = _args(arguments), target = args[0] || {};
    for (i = 1, len = args.length; i < len; i++) {
      if ((arg = args[i]) != null) {
        for (prop in arg) {
          if (_hasOwn.call(arg, prop)) {
            src = target[prop];
            copy = arg[prop];
            if (target !== copy && copy !== undefined) {
              target[prop] = copy;
            }
          }
        }
      }
    }
    return target;
  };
  /**
 * Return a deep copy of the source object or array.
 *
 * @returns Object or Array
 * @private
 */
  var _deepCopy = function(source) {
    var copy, i, len, prop;
    if (typeof source !== "object" || source == null) {
      copy = source;
    } else if (typeof source.length === "number") {
      copy = [];
      for (i = 0, len = source.length; i < len; i++) {
        if (_hasOwn.call(source, i)) {
          copy[i] = _deepCopy(source[i]);
        }
      }
    } else {
      copy = {};
      for (prop in source) {
        if (_hasOwn.call(source, prop)) {
          copy[prop] = _deepCopy(source[prop]);
        }
      }
    }
    return copy;
  };
  /**
 * Makes a shallow copy of `obj` (like `_extend`) but filters its properties based on a list of `keys` to keep.
 * The inverse of `_omit`, mostly. The big difference is that these properties do NOT need to be enumerable to
 * be kept.
 *
 * @returns A new filtered object.
 * @private
 */
  var _pick = function(obj, keys) {
    var newObj = {};
    for (var i = 0, len = keys.length; i < len; i++) {
      if (keys[i] in obj) {
        newObj[keys[i]] = obj[keys[i]];
      }
    }
    return newObj;
  };
  /**
 * Makes a shallow copy of `obj` (like `_extend`) but filters its properties based on a list of `keys` to omit.
 * The inverse of `_pick`.
 *
 * @returns A new filtered object.
 * @private
 */
  var _omit = function(obj, keys) {
    var newObj = {};
    for (var prop in obj) {
      if (keys.indexOf(prop) === -1) {
        newObj[prop] = obj[prop];
      }
    }
    return newObj;
  };
  /**
 * Remove all owned, enumerable properties from an object.
 *
 * @returns The original object without its owned, enumerable properties.
 * @private
 */
  var _deleteOwnProperties = function(obj) {
    if (obj) {
      for (var prop in obj) {
        if (_hasOwn.call(obj, prop)) {
          delete obj[prop];
        }
      }
    }
    return obj;
  };
  /**
 * Determine if an element is contained within another element.
 *
 * @returns Boolean
 * @private
 */
  var _containedBy = function(el, ancestorEl) {
    if (el && el.nodeType === 1 && el.ownerDocument && ancestorEl && (ancestorEl.nodeType === 1 && ancestorEl.ownerDocument && ancestorEl.ownerDocument === el.ownerDocument || ancestorEl.nodeType === 9 && !ancestorEl.ownerDocument && ancestorEl === el.ownerDocument)) {
      do {
        if (el === ancestorEl) {
          return true;
        }
        el = el.parentNode;
      } while (el);
    }
    return false;
  };
  /**
 * Get the URL path's parent directory.
 *
 * @returns String or `undefined`
 * @private
 */
  var _getDirPathOfUrl = function(url) {
    var dir;
    if (typeof url === "string" && url) {
      dir = url.split("#")[0].split("?")[0];
      dir = url.slice(0, url.lastIndexOf("/") + 1);
    }
    return dir;
  };
  /**
 * Get the current script's URL by throwing an `Error` and analyzing it.
 *
 * @returns String or `undefined`
 * @private
 */
  var _getCurrentScriptUrlFromErrorStack = function(stack) {
    var url, matches;
    if (typeof stack === "string" && stack) {
      matches = stack.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
      if (matches && matches[1]) {
        url = matches[1];
      } else {
        matches = stack.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
        if (matches && matches[1]) {
          url = matches[1];
        }
      }
    }
    return url;
  };
  /**
 * Get the current script's URL by throwing an `Error` and analyzing it.
 *
 * @returns String or `undefined`
 * @private
 */
  var _getCurrentScriptUrlFromError = function() {
    var url, err;
    try {
      throw new _Error();
    } catch (e) {
      err = e;
    }
    if (err) {
      url = err.sourceURL || err.fileName || _getCurrentScriptUrlFromErrorStack(err.stack);
    }
    return url;
  };
  /**
 * Get the current script's URL.
 *
 * @returns String or `undefined`
 * @private
 */
  var _getCurrentScriptUrl = function() {
    var jsPath, scripts, i;
    if (_document.currentScript && (jsPath = _document.currentScript.src)) {
      return jsPath;
    }
    scripts = _document.getElementsByTagName("script");
    if (scripts.length === 1) {
      return scripts[0].src || undefined;
    }
    if ("readyState" in scripts[0]) {
      for (i = scripts.length; i--; ) {
        if (scripts[i].readyState === "interactive" && (jsPath = scripts[i].src)) {
          return jsPath;
        }
      }
    }
    if (_document.readyState === "loading" && (jsPath = scripts[scripts.length - 1].src)) {
      return jsPath;
    }
    if (jsPath = _getCurrentScriptUrlFromError()) {
      return jsPath;
    }
    return undefined;
  };
  /**
 * Get the unanimous parent directory of ALL script tags.
 * If any script tags are either (a) inline or (b) from differing parent
 * directories, this method must return `undefined`.
 *
 * @returns String or `undefined`
 * @private
 */
  var _getUnanimousScriptParentDir = function() {
    var i, jsDir, jsPath, scripts = _document.getElementsByTagName("script");
    for (i = scripts.length; i--; ) {
      if (!(jsPath = scripts[i].src)) {
        jsDir = null;
        break;
      }
      jsPath = _getDirPathOfUrl(jsPath);
      if (jsDir == null) {
        jsDir = jsPath;
      } else if (jsDir !== jsPath) {
        jsDir = null;
        break;
      }
    }
    return jsDir || undefined;
  };
  /**
 * Get the presumed location of the "ZeroClipboard.swf" file, based on the location
 * of the executing JavaScript file (e.g. "ZeroClipboard.js", etc.).
 *
 * @returns String
 * @private
 */
  var _getDefaultSwfPath = function() {
    var jsDir = _getDirPathOfUrl(_getCurrentScriptUrl()) || _getUnanimousScriptParentDir() || "";
    return jsDir + "ZeroClipboard.swf";
  };
  /**
 * Keep track of the state of the Flash object.
 * @private
 */
  var _flashState = {
    bridge: null,
    version: "0.0.0",
    pluginType: "unknown",
    disabled: null,
    outdated: null,
    unavailable: null,
    deactivated: null,
    overdue: null,
    ready: null
  };
  /**
 * The minimum Flash Player version required to use ZeroClipboard completely.
 * @readonly
 * @private
 */
  var _minimumFlashVersion = "11.0.0";
  /**
 * Keep track of all event listener registrations.
 * @private
 */
  var _handlers = {};
  /**
 * Keep track of the currently activated element.
 * @private
 */
  var _currentElement;
  /**
 * Keep track of the element that was activated when a `copy` process started.
 * @private
 */
  var _copyTarget;
  /**
 * Keep track of data for the pending clipboard transaction.
 * @private
 */
  var _clipData = {};
  /**
 * Keep track of data formats for the pending clipboard transaction.
 * @private
 */
  var _clipDataFormatMap = null;
  /**
 * The `message` store for events
 * @private
 */
  var _eventMessages = {
    ready: "Flash communication is established",
    error: {
      "flash-disabled": "Flash is disabled or not installed",
      "flash-outdated": "Flash is too outdated to support ZeroClipboard",
      "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
      "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate",
      "flash-overdue": "Flash communication was established but NOT within the acceptable time limit"
    }
  };
  /**
 * ZeroClipboard configuration defaults for the Core module.
 * @private
 */
  var _globalConfig = {
    swfPath: _getDefaultSwfPath(),
    trustedDomains: window.location.host ? [ window.location.host ] : [],
    cacheBust: true,
    forceEnhancedClipboard: false,
    flashLoadTimeout: 3e4,
    autoActivate: true,
    bubbleEvents: true,
    containerId: "global-zeroclipboard-html-bridge",
    containerClass: "global-zeroclipboard-container",
    swfObjectId: "global-zeroclipboard-flash-bridge",
    hoverClass: "zeroclipboard-is-hover",
    activeClass: "zeroclipboard-is-active",
    forceHandCursor: false,
    title: null,
    zIndex: 999999999
  };
  /**
 * The underlying implementation of `ZeroClipboard.config`.
 * @private
 */
  var _config = function(options) {
    if (typeof options === "object" && options !== null) {
      for (var prop in options) {
        if (_hasOwn.call(options, prop)) {
          if (/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(prop)) {
            _globalConfig[prop] = options[prop];
          } else if (_flashState.bridge == null) {
            if (prop === "containerId" || prop === "swfObjectId") {
              if (_isValidHtml4Id(options[prop])) {
                _globalConfig[prop] = options[prop];
              } else {
                throw new Error("The specified `" + prop + "` value is not valid as an HTML4 Element ID");
              }
            } else {
              _globalConfig[prop] = options[prop];
            }
          }
        }
      }
    }
    if (typeof options === "string" && options) {
      if (_hasOwn.call(_globalConfig, options)) {
        return _globalConfig[options];
      }
      return;
    }
    return _deepCopy(_globalConfig);
  };
  /**
 * The underlying implementation of `ZeroClipboard.state`.
 * @private
 */
  var _state = function() {
    return {
      browser: _pick(_navigator, [ "userAgent", "platform", "appName" ]),
      flash: _omit(_flashState, [ "bridge" ]),
      zeroclipboard: {
        version: ZeroClipboard.version,
        config: ZeroClipboard.config()
      }
    };
  };
  /**
 * The underlying implementation of `ZeroClipboard.isFlashUnusable`.
 * @private
 */
  var _isFlashUnusable = function() {
    return !!(_flashState.disabled || _flashState.outdated || _flashState.unavailable || _flashState.deactivated);
  };
  /**
 * The underlying implementation of `ZeroClipboard.on`.
 * @private
 */
  var _on = function(eventType, listener) {
    var i, len, events, added = {};
    if (typeof eventType === "string" && eventType) {
      events = eventType.toLowerCase().split(/\s+/);
    } else if (typeof eventType === "object" && eventType && typeof listener === "undefined") {
      for (i in eventType) {
        if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
          ZeroClipboard.on(i, eventType[i]);
        }
      }
    }
    if (events && events.length) {
      for (i = 0, len = events.length; i < len; i++) {
        eventType = events[i].replace(/^on/, "");
        added[eventType] = true;
        if (!_handlers[eventType]) {
          _handlers[eventType] = [];
        }
        _handlers[eventType].push(listener);
      }
      if (added.ready && _flashState.ready) {
        ZeroClipboard.emit({
          type: "ready"
        });
      }
      if (added.error) {
        var errorTypes = [ "disabled", "outdated", "unavailable", "deactivated", "overdue" ];
        for (i = 0, len = errorTypes.length; i < len; i++) {
          if (_flashState[errorTypes[i]] === true) {
            ZeroClipboard.emit({
              type: "error",
              name: "flash-" + errorTypes[i]
            });
            break;
          }
        }
      }
    }
    return ZeroClipboard;
  };
  /**
 * The underlying implementation of `ZeroClipboard.off`.
 * @private
 */
  var _off = function(eventType, listener) {
    var i, len, foundIndex, events, perEventHandlers;
    if (arguments.length === 0) {
      events = _keys(_handlers);
    } else if (typeof eventType === "string" && eventType) {
      events = eventType.split(/\s+/);
    } else if (typeof eventType === "object" && eventType && typeof listener === "undefined") {
      for (i in eventType) {
        if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
          ZeroClipboard.off(i, eventType[i]);
        }
      }
    }
    if (events && events.length) {
      for (i = 0, len = events.length; i < len; i++) {
        eventType = events[i].toLowerCase().replace(/^on/, "");
        perEventHandlers = _handlers[eventType];
        if (perEventHandlers && perEventHandlers.length) {
          if (listener) {
            foundIndex = perEventHandlers.indexOf(listener);
            while (foundIndex !== -1) {
              perEventHandlers.splice(foundIndex, 1);
              foundIndex = perEventHandlers.indexOf(listener, foundIndex);
            }
          } else {
            perEventHandlers.length = 0;
          }
        }
      }
    }
    return ZeroClipboard;
  };
  /**
 * The underlying implementation of `ZeroClipboard.handlers`.
 * @private
 */
  var _listeners = function(eventType) {
    var copy;
    if (typeof eventType === "string" && eventType) {
      copy = _deepCopy(_handlers[eventType]) || null;
    } else {
      copy = _deepCopy(_handlers);
    }
    return copy;
  };
  /**
 * The underlying implementation of `ZeroClipboard.emit`.
 * @private
 */
  var _emit = function(event) {
    var eventCopy, returnVal, tmp;
    event = _createEvent(event);
    if (!event) {
      return;
    }
    if (_preprocessEvent(event)) {
      return;
    }
    if (event.type === "ready" && _flashState.overdue === true) {
      return ZeroClipboard.emit({
        type: "error",
        name: "flash-overdue"
      });
    }
    eventCopy = _extend({}, event);
    _dispatchCallbacks.call(this, eventCopy);
    if (event.type === "copy") {
      tmp = _mapClipDataToFlash(_clipData);
      returnVal = tmp.data;
      _clipDataFormatMap = tmp.formatMap;
    }
    return returnVal;
  };
  /**
 * The underlying implementation of `ZeroClipboard.create`.
 * @private
 */
  var _create = function() {
    if (typeof _flashState.ready !== "boolean") {
      _flashState.ready = false;
    }
    if (!ZeroClipboard.isFlashUnusable() && _flashState.bridge === null) {
      var maxWait = _globalConfig.flashLoadTimeout;
      if (typeof maxWait === "number" && maxWait >= 0) {
        _setTimeout(function() {
          if (typeof _flashState.deactivated !== "boolean") {
            _flashState.deactivated = true;
          }
          if (_flashState.deactivated === true) {
            ZeroClipboard.emit({
              type: "error",
              name: "flash-deactivated"
            });
          }
        }, maxWait);
      }
      _flashState.overdue = false;
      _embedSwf();
    }
  };
  /**
 * The underlying implementation of `ZeroClipboard.destroy`.
 * @private
 */
  var _destroy = function() {
    ZeroClipboard.clearData();
    ZeroClipboard.blur();
    ZeroClipboard.emit("destroy");
    _unembedSwf();
    ZeroClipboard.off();
  };
  /**
 * The underlying implementation of `ZeroClipboard.setData`.
 * @private
 */
  var _setData = function(format, data) {
    var dataObj;
    if (typeof format === "object" && format && typeof data === "undefined") {
      dataObj = format;
      ZeroClipboard.clearData();
    } else if (typeof format === "string" && format) {
      dataObj = {};
      dataObj[format] = data;
    } else {
      return;
    }
    for (var dataFormat in dataObj) {
      if (typeof dataFormat === "string" && dataFormat && _hasOwn.call(dataObj, dataFormat) && typeof dataObj[dataFormat] === "string" && dataObj[dataFormat]) {
        _clipData[dataFormat] = dataObj[dataFormat];
      }
    }
  };
  /**
 * The underlying implementation of `ZeroClipboard.clearData`.
 * @private
 */
  var _clearData = function(format) {
    if (typeof format === "undefined") {
      _deleteOwnProperties(_clipData);
      _clipDataFormatMap = null;
    } else if (typeof format === "string" && _hasOwn.call(_clipData, format)) {
      delete _clipData[format];
    }
  };
  /**
 * The underlying implementation of `ZeroClipboard.getData`.
 * @private
 */
  var _getData = function(format) {
    if (typeof format === "undefined") {
      return _deepCopy(_clipData);
    } else if (typeof format === "string" && _hasOwn.call(_clipData, format)) {
      return _clipData[format];
    }
  };
  /**
 * The underlying implementation of `ZeroClipboard.focus`/`ZeroClipboard.activate`.
 * @private
 */
  var _focus = function(element) {
    if (!(element && element.nodeType === 1)) {
      return;
    }
    if (_currentElement) {
      _removeClass(_currentElement, _globalConfig.activeClass);
      if (_currentElement !== element) {
        _removeClass(_currentElement, _globalConfig.hoverClass);
      }
    }
    _currentElement = element;
    _addClass(element, _globalConfig.hoverClass);
    var newTitle = element.getAttribute("title") || _globalConfig.title;
    if (typeof newTitle === "string" && newTitle) {
      var htmlBridge = _getHtmlBridge(_flashState.bridge);
      if (htmlBridge) {
        htmlBridge.setAttribute("title", newTitle);
      }
    }
    var useHandCursor = _globalConfig.forceHandCursor === true || _getStyle(element, "cursor") === "pointer";
    _setHandCursor(useHandCursor);
    _reposition();
  };
  /**
 * The underlying implementation of `ZeroClipboard.blur`/`ZeroClipboard.deactivate`.
 * @private
 */
  var _blur = function() {
    var htmlBridge = _getHtmlBridge(_flashState.bridge);
    if (htmlBridge) {
      htmlBridge.removeAttribute("title");
      htmlBridge.style.left = "0px";
      htmlBridge.style.top = "-9999px";
      htmlBridge.style.width = "1px";
      htmlBridge.style.top = "1px";
    }
    if (_currentElement) {
      _removeClass(_currentElement, _globalConfig.hoverClass);
      _removeClass(_currentElement, _globalConfig.activeClass);
      _currentElement = null;
    }
  };
  /**
 * The underlying implementation of `ZeroClipboard.activeElement`.
 * @private
 */
  var _activeElement = function() {
    return _currentElement || null;
  };
  /**
 * Check if a value is a valid HTML4 `ID` or `Name` token.
 * @private
 */
  var _isValidHtml4Id = function(id) {
    return typeof id === "string" && id && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(id);
  };
  /**
 * Create or update an `event` object, based on the `eventType`.
 * @private
 */
  var _createEvent = function(event) {
    var eventType;
    if (typeof event === "string" && event) {
      eventType = event;
      event = {};
    } else if (typeof event === "object" && event && typeof event.type === "string" && event.type) {
      eventType = event.type;
    }
    if (!eventType) {
      return;
    }
    if (!event.target && /^(copy|aftercopy|_click)$/.test(eventType.toLowerCase())) {
      event.target = _copyTarget;
    }
    _extend(event, {
      type: eventType.toLowerCase(),
      target: event.target || _currentElement || null,
      relatedTarget: event.relatedTarget || null,
      currentTarget: _flashState && _flashState.bridge || null,
      timeStamp: event.timeStamp || _now() || null
    });
    var msg = _eventMessages[event.type];
    if (event.type === "error" && event.name && msg) {
      msg = msg[event.name];
    }
    if (msg) {
      event.message = msg;
    }
    if (event.type === "ready") {
      _extend(event, {
        target: null,
        version: _flashState.version
      });
    }
    if (event.type === "error") {
      if (/^flash-(disabled|outdated|unavailable|deactivated|overdue)$/.test(event.name)) {
        _extend(event, {
          target: null,
          minimumVersion: _minimumFlashVersion
        });
      }
      if (/^flash-(outdated|unavailable|deactivated|overdue)$/.test(event.name)) {
        _extend(event, {
          version: _flashState.version
        });
      }
    }
    if (event.type === "copy") {
      event.clipboardData = {
        setData: ZeroClipboard.setData,
        clearData: ZeroClipboard.clearData
      };
    }
    if (event.type === "aftercopy") {
      event = _mapClipResultsFromFlash(event, _clipDataFormatMap);
    }
    if (event.target && !event.relatedTarget) {
      event.relatedTarget = _getRelatedTarget(event.target);
    }
    event = _addMouseData(event);
    return event;
  };
  /**
 * Get a relatedTarget from the target's `data-clipboard-target` attribute
 * @private
 */
  var _getRelatedTarget = function(targetEl) {
    var relatedTargetId = targetEl && targetEl.getAttribute && targetEl.getAttribute("data-clipboard-target");
    return relatedTargetId ? _document.getElementById(relatedTargetId) : null;
  };
  /**
 * Add element and position data to `MouseEvent` instances
 * @private
 */
  var _addMouseData = function(event) {
    if (event && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(event.type)) {
      var srcElement = event.target;
      var fromElement = event.type === "_mouseover" && event.relatedTarget ? event.relatedTarget : undefined;
      var toElement = event.type === "_mouseout" && event.relatedTarget ? event.relatedTarget : undefined;
      var pos = _getDOMObjectPosition(srcElement);
      var screenLeft = _window.screenLeft || _window.screenX || 0;
      var screenTop = _window.screenTop || _window.screenY || 0;
      var scrollLeft = _document.body.scrollLeft + _document.documentElement.scrollLeft;
      var scrollTop = _document.body.scrollTop + _document.documentElement.scrollTop;
      var pageX = pos.left + (typeof event._stageX === "number" ? event._stageX : 0);
      var pageY = pos.top + (typeof event._stageY === "number" ? event._stageY : 0);
      var clientX = pageX - scrollLeft;
      var clientY = pageY - scrollTop;
      var screenX = screenLeft + clientX;
      var screenY = screenTop + clientY;
      var moveX = typeof event.movementX === "number" ? event.movementX : 0;
      var moveY = typeof event.movementY === "number" ? event.movementY : 0;
      delete event._stageX;
      delete event._stageY;
      _extend(event, {
        srcElement: srcElement,
        fromElement: fromElement,
        toElement: toElement,
        screenX: screenX,
        screenY: screenY,
        pageX: pageX,
        pageY: pageY,
        clientX: clientX,
        clientY: clientY,
        x: clientX,
        y: clientY,
        movementX: moveX,
        movementY: moveY,
        offsetX: 0,
        offsetY: 0,
        layerX: 0,
        layerY: 0
      });
    }
    return event;
  };
  /**
 * Determine if an event's registered handlers should be execute synchronously or asynchronously.
 *
 * @returns {boolean}
 * @private
 */
  var _shouldPerformAsync = function(event) {
    var eventType = event && typeof event.type === "string" && event.type || "";
    return !/^(?:(?:before)?copy|destroy)$/.test(eventType);
  };
  /**
 * Control if a callback should be executed asynchronously or not.
 *
 * @returns `undefined`
 * @private
 */
  var _dispatchCallback = function(func, context, args, async) {
    if (async) {
      _setTimeout(function() {
        func.apply(context, args);
      }, 0);
    } else {
      func.apply(context, args);
    }
  };
  /**
 * Handle the actual dispatching of events to client instances.
 *
 * @returns `undefined`
 * @private
 */
  var _dispatchCallbacks = function(event) {
    if (!(typeof event === "object" && event && event.type)) {
      return;
    }
    var async = _shouldPerformAsync(event);
    var wildcardTypeHandlers = _handlers["*"] || [];
    var specificTypeHandlers = _handlers[event.type] || [];
    var handlers = wildcardTypeHandlers.concat(specificTypeHandlers);
    if (handlers && handlers.length) {
      var i, len, func, context, eventCopy, originalContext = this;
      for (i = 0, len = handlers.length; i < len; i++) {
        func = handlers[i];
        context = originalContext;
        if (typeof func === "string" && typeof _window[func] === "function") {
          func = _window[func];
        }
        if (typeof func === "object" && func && typeof func.handleEvent === "function") {
          context = func;
          func = func.handleEvent;
        }
        if (typeof func === "function") {
          eventCopy = _extend({}, event);
          _dispatchCallback(func, context, [ eventCopy ], async);
        }
      }
    }
    return this;
  };
  /**
 * Preprocess any special behaviors, reactions, or state changes after receiving this event.
 * Executes only once per event emitted, NOT once per client.
 * @private
 */
  var _preprocessEvent = function(event) {
    var element = event.target || _currentElement || null;
    var sourceIsSwf = event._source === "swf";
    delete event._source;
    var flashErrorNames = [ "flash-disabled", "flash-outdated", "flash-unavailable", "flash-deactivated", "flash-overdue" ];
    switch (event.type) {
     case "error":
      if (flashErrorNames.indexOf(event.name) !== -1) {
        _extend(_flashState, {
          disabled: event.name === "flash-disabled",
          outdated: event.name === "flash-outdated",
          unavailable: event.name === "flash-unavailable",
          deactivated: event.name === "flash-deactivated",
          overdue: event.name === "flash-overdue",
          ready: false
        });
      }
      break;

     case "ready":
      var wasDeactivated = _flashState.deactivated === true;
      _extend(_flashState, {
        disabled: false,
        outdated: false,
        unavailable: false,
        deactivated: false,
        overdue: wasDeactivated,
        ready: !wasDeactivated
      });
      break;

     case "beforecopy":
      _copyTarget = element;
      break;

     case "copy":
      var textContent, htmlContent, targetEl = event.relatedTarget;
      if (!(_clipData["text/html"] || _clipData["text/plain"]) && targetEl && (htmlContent = targetEl.value || targetEl.outerHTML || targetEl.innerHTML) && (textContent = targetEl.value || targetEl.textContent || targetEl.innerText)) {
        event.clipboardData.clearData();
        event.clipboardData.setData("text/plain", textContent);
        if (htmlContent !== textContent) {
          event.clipboardData.setData("text/html", htmlContent);
        }
      } else if (!_clipData["text/plain"] && event.target && (textContent = event.target.getAttribute("data-clipboard-text"))) {
        event.clipboardData.clearData();
        event.clipboardData.setData("text/plain", textContent);
      }
      break;

     case "aftercopy":
      ZeroClipboard.clearData();
      if (element && element !== _safeActiveElement() && element.focus) {
        element.focus();
      }
      break;

     case "_mouseover":
      ZeroClipboard.focus(element);
      if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
        if (element && element !== event.relatedTarget && !_containedBy(event.relatedTarget, element)) {
          _fireMouseEvent(_extend({}, event, {
            type: "mouseenter",
            bubbles: false,
            cancelable: false
          }));
        }
        _fireMouseEvent(_extend({}, event, {
          type: "mouseover"
        }));
      }
      break;

     case "_mouseout":
      ZeroClipboard.blur();
      if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
        if (element && element !== event.relatedTarget && !_containedBy(event.relatedTarget, element)) {
          _fireMouseEvent(_extend({}, event, {
            type: "mouseleave",
            bubbles: false,
            cancelable: false
          }));
        }
        _fireMouseEvent(_extend({}, event, {
          type: "mouseout"
        }));
      }
      break;

     case "_mousedown":
      _addClass(element, _globalConfig.activeClass);
      if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
        _fireMouseEvent(_extend({}, event, {
          type: event.type.slice(1)
        }));
      }
      break;

     case "_mouseup":
      _removeClass(element, _globalConfig.activeClass);
      if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
        _fireMouseEvent(_extend({}, event, {
          type: event.type.slice(1)
        }));
      }
      break;

     case "_click":
      _copyTarget = null;
      if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
        _fireMouseEvent(_extend({}, event, {
          type: event.type.slice(1)
        }));
      }
      break;

     case "_mousemove":
      if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
        _fireMouseEvent(_extend({}, event, {
          type: event.type.slice(1)
        }));
      }
      break;
    }
    if (/^_(?:click|mouse(?:over|out|down|up|move))$/.test(event.type)) {
      return true;
    }
  };
  /**
 * Dispatch a synthetic MouseEvent.
 *
 * @returns `undefined`
 * @private
 */
  var _fireMouseEvent = function(event) {
    if (!(event && typeof event.type === "string" && event)) {
      return;
    }
    var e, target = event.target || null, doc = target && target.ownerDocument || _document, defaults = {
      view: doc.defaultView || _window,
      canBubble: true,
      cancelable: true,
      detail: event.type === "click" ? 1 : 0,
      button: typeof event.which === "number" ? event.which - 1 : typeof event.button === "number" ? event.button : doc.createEvent ? 0 : 1
    }, args = _extend(defaults, event);
    if (!target) {
      return;
    }
    if (doc.createEvent && target.dispatchEvent) {
      args = [ args.type, args.canBubble, args.cancelable, args.view, args.detail, args.screenX, args.screenY, args.clientX, args.clientY, args.ctrlKey, args.altKey, args.shiftKey, args.metaKey, args.button, args.relatedTarget ];
      e = doc.createEvent("MouseEvents");
      if (e.initMouseEvent) {
        e.initMouseEvent.apply(e, args);
        e._source = "js";
        target.dispatchEvent(e);
      }
    }
  };
  /**
 * Create the HTML bridge element to embed the Flash object into.
 * @private
 */
  var _createHtmlBridge = function() {
    var container = _document.createElement("div");
    container.id = _globalConfig.containerId;
    container.className = _globalConfig.containerClass;
    container.style.position = "absolute";
    container.style.left = "0px";
    container.style.top = "-9999px";
    container.style.width = "1px";
    container.style.height = "1px";
    container.style.zIndex = "" + _getSafeZIndex(_globalConfig.zIndex);
    return container;
  };
  /**
 * Get the HTML element container that wraps the Flash bridge object/element.
 * @private
 */
  var _getHtmlBridge = function(flashBridge) {
    var htmlBridge = flashBridge && flashBridge.parentNode;
    while (htmlBridge && htmlBridge.nodeName === "OBJECT" && htmlBridge.parentNode) {
      htmlBridge = htmlBridge.parentNode;
    }
    return htmlBridge || null;
  };
  /**
 * Create the SWF object.
 *
 * @returns The SWF object reference.
 * @private
 */
  var _embedSwf = function() {
    var len, flashBridge = _flashState.bridge, container = _getHtmlBridge(flashBridge);
    if (!flashBridge) {
      var allowScriptAccess = _determineScriptAccess(_window.location.host, _globalConfig);
      var allowNetworking = allowScriptAccess === "never" ? "none" : "all";
      var flashvars = _vars(_globalConfig);
      var swfUrl = _globalConfig.swfPath + _cacheBust(_globalConfig.swfPath, _globalConfig);
      container = _createHtmlBridge();
      var divToBeReplaced = _document.createElement("div");
      container.appendChild(divToBeReplaced);
      _document.body.appendChild(container);
      var tmpDiv = _document.createElement("div");
      var oldIE = _flashState.pluginType === "activex";
      tmpDiv.innerHTML = '<object id="' + _globalConfig.swfObjectId + '" name="' + _globalConfig.swfObjectId + '" ' + 'width="100%" height="100%" ' + (oldIE ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + swfUrl + '"') + ">" + (oldIE ? '<param name="movie" value="' + swfUrl + '"/>' : "") + '<param name="allowScriptAccess" value="' + allowScriptAccess + '"/>' + '<param name="allowNetworking" value="' + allowNetworking + '"/>' + '<param name="menu" value="false"/>' + '<param name="wmode" value="transparent"/>' + '<param name="flashvars" value="' + flashvars + '"/>' + "</object>";
      flashBridge = tmpDiv.firstChild;
      tmpDiv = null;
      _unwrap(flashBridge).ZeroClipboard = ZeroClipboard;
      container.replaceChild(flashBridge, divToBeReplaced);
    }
    if (!flashBridge) {
      flashBridge = _document[_globalConfig.swfObjectId];
      if (flashBridge && (len = flashBridge.length)) {
        flashBridge = flashBridge[len - 1];
      }
      if (!flashBridge && container) {
        flashBridge = container.firstChild;
      }
    }
    _flashState.bridge = flashBridge || null;
    return flashBridge;
  };
  /**
 * Destroy the SWF object.
 * @private
 */
  var _unembedSwf = function() {
    var flashBridge = _flashState.bridge;
    if (flashBridge) {
      var htmlBridge = _getHtmlBridge(flashBridge);
      if (htmlBridge) {
        if (_flashState.pluginType === "activex" && "readyState" in flashBridge) {
          flashBridge.style.display = "none";
          (function removeSwfFromIE() {
            if (flashBridge.readyState === 4) {
              for (var prop in flashBridge) {
                if (typeof flashBridge[prop] === "function") {
                  flashBridge[prop] = null;
                }
              }
              if (flashBridge.parentNode) {
                flashBridge.parentNode.removeChild(flashBridge);
              }
              if (htmlBridge.parentNode) {
                htmlBridge.parentNode.removeChild(htmlBridge);
              }
            } else {
              _setTimeout(removeSwfFromIE, 10);
            }
          })();
        } else {
          if (flashBridge.parentNode) {
            flashBridge.parentNode.removeChild(flashBridge);
          }
          if (htmlBridge.parentNode) {
            htmlBridge.parentNode.removeChild(htmlBridge);
          }
        }
      }
      _flashState.ready = null;
      _flashState.bridge = null;
      _flashState.deactivated = null;
    }
  };
  /**
 * Map the data format names of the "clipData" to Flash-friendly names.
 *
 * @returns A new transformed object.
 * @private
 */
  var _mapClipDataToFlash = function(clipData) {
    var newClipData = {}, formatMap = {};
    if (!(typeof clipData === "object" && clipData)) {
      return;
    }
    for (var dataFormat in clipData) {
      if (dataFormat && _hasOwn.call(clipData, dataFormat) && typeof clipData[dataFormat] === "string" && clipData[dataFormat]) {
        switch (dataFormat.toLowerCase()) {
         case "text/plain":
         case "text":
         case "air:text":
         case "flash:text":
          newClipData.text = clipData[dataFormat];
          formatMap.text = dataFormat;
          break;

         case "text/html":
         case "html":
         case "air:html":
         case "flash:html":
          newClipData.html = clipData[dataFormat];
          formatMap.html = dataFormat;
          break;

         case "application/rtf":
         case "text/rtf":
         case "rtf":
         case "richtext":
         case "air:rtf":
         case "flash:rtf":
          newClipData.rtf = clipData[dataFormat];
          formatMap.rtf = dataFormat;
          break;

         default:
          break;
        }
      }
    }
    return {
      data: newClipData,
      formatMap: formatMap
    };
  };
  /**
 * Map the data format names from Flash-friendly names back to their original "clipData" names (via a format mapping).
 *
 * @returns A new transformed object.
 * @private
 */
  var _mapClipResultsFromFlash = function(clipResults, formatMap) {
    if (!(typeof clipResults === "object" && clipResults && typeof formatMap === "object" && formatMap)) {
      return clipResults;
    }
    var newResults = {};
    for (var prop in clipResults) {
      if (_hasOwn.call(clipResults, prop)) {
        if (prop !== "success" && prop !== "data") {
          newResults[prop] = clipResults[prop];
          continue;
        }
        newResults[prop] = {};
        var tmpHash = clipResults[prop];
        for (var dataFormat in tmpHash) {
          if (dataFormat && _hasOwn.call(tmpHash, dataFormat) && _hasOwn.call(formatMap, dataFormat)) {
            newResults[prop][formatMap[dataFormat]] = tmpHash[dataFormat];
          }
        }
      }
    }
    return newResults;
  };
  /**
 * Will look at a path, and will create a "?noCache={time}" or "&noCache={time}"
 * query param string to return. Does NOT append that string to the original path.
 * This is useful because ExternalInterface often breaks when a Flash SWF is cached.
 *
 * @returns The `noCache` query param with necessary "?"/"&" prefix.
 * @private
 */
  var _cacheBust = function(path, options) {
    var cacheBust = options == null || options && options.cacheBust === true;
    if (cacheBust) {
      return (path.indexOf("?") === -1 ? "?" : "&") + "noCache=" + _now();
    } else {
      return "";
    }
  };
  /**
 * Creates a query string for the FlashVars param.
 * Does NOT include the cache-busting query param.
 *
 * @returns FlashVars query string
 * @private
 */
  var _vars = function(options) {
    var i, len, domain, domains, str = "", trustedOriginsExpanded = [];
    if (options.trustedDomains) {
      if (typeof options.trustedDomains === "string") {
        domains = [ options.trustedDomains ];
      } else if (typeof options.trustedDomains === "object" && "length" in options.trustedDomains) {
        domains = options.trustedDomains;
      }
    }
    if (domains && domains.length) {
      for (i = 0, len = domains.length; i < len; i++) {
        if (_hasOwn.call(domains, i) && domains[i] && typeof domains[i] === "string") {
          domain = _extractDomain(domains[i]);
          if (!domain) {
            continue;
          }
          if (domain === "*") {
            trustedOriginsExpanded.length = 0;
            trustedOriginsExpanded.push(domain);
            break;
          }
          trustedOriginsExpanded.push.apply(trustedOriginsExpanded, [ domain, "//" + domain, _window.location.protocol + "//" + domain ]);
        }
      }
    }
    if (trustedOriginsExpanded.length) {
      str += "trustedOrigins=" + _encodeURIComponent(trustedOriginsExpanded.join(","));
    }
    if (options.forceEnhancedClipboard === true) {
      str += (str ? "&" : "") + "forceEnhancedClipboard=true";
    }
    if (typeof options.swfObjectId === "string" && options.swfObjectId) {
      str += (str ? "&" : "") + "swfObjectId=" + _encodeURIComponent(options.swfObjectId);
    }
    return str;
  };
  /**
 * Extract the domain (e.g. "github.com") from an origin (e.g. "https://github.com") or
 * URL (e.g. "https://github.com/zeroclipboard/zeroclipboard/").
 *
 * @returns the domain
 * @private
 */
  var _extractDomain = function(originOrUrl) {
    if (originOrUrl == null || originOrUrl === "") {
      return null;
    }
    originOrUrl = originOrUrl.replace(/^\s+|\s+$/g, "");
    if (originOrUrl === "") {
      return null;
    }
    var protocolIndex = originOrUrl.indexOf("//");
    originOrUrl = protocolIndex === -1 ? originOrUrl : originOrUrl.slice(protocolIndex + 2);
    var pathIndex = originOrUrl.indexOf("/");
    originOrUrl = pathIndex === -1 ? originOrUrl : protocolIndex === -1 || pathIndex === 0 ? null : originOrUrl.slice(0, pathIndex);
    if (originOrUrl && originOrUrl.slice(-4).toLowerCase() === ".swf") {
      return null;
    }
    return originOrUrl || null;
  };
  /**
 * Set `allowScriptAccess` based on `trustedDomains` and `window.location.host` vs. `swfPath`.
 *
 * @returns The appropriate script access level.
 * @private
 */
  var _determineScriptAccess = function() {
    var _extractAllDomains = function(origins) {
      var i, len, tmp, resultsArray = [];
      if (typeof origins === "string") {
        origins = [ origins ];
      }
      if (!(typeof origins === "object" && origins && typeof origins.length === "number")) {
        return resultsArray;
      }
      for (i = 0, len = origins.length; i < len; i++) {
        if (_hasOwn.call(origins, i) && (tmp = _extractDomain(origins[i]))) {
          if (tmp === "*") {
            resultsArray.length = 0;
            resultsArray.push("*");
            break;
          }
          if (resultsArray.indexOf(tmp) === -1) {
            resultsArray.push(tmp);
          }
        }
      }
      return resultsArray;
    };
    return function(currentDomain, configOptions) {
      var swfDomain = _extractDomain(configOptions.swfPath);
      if (swfDomain === null) {
        swfDomain = currentDomain;
      }
      var trustedDomains = _extractAllDomains(configOptions.trustedDomains);
      var len = trustedDomains.length;
      if (len > 0) {
        if (len === 1 && trustedDomains[0] === "*") {
          return "always";
        }
        if (trustedDomains.indexOf(currentDomain) !== -1) {
          if (len === 1 && currentDomain === swfDomain) {
            return "sameDomain";
          }
          return "always";
        }
      }
      return "never";
    };
  }();
  /**
 * Get the currently active/focused DOM element.
 *
 * @returns the currently active/focused element, or `null`
 * @private
 */
  var _safeActiveElement = function() {
    try {
      return _document.activeElement;
    } catch (err) {
      return null;
    }
  };
  /**
 * Add a class to an element, if it doesn't already have it.
 *
 * @returns The element, with its new class added.
 * @private
 */
  var _addClass = function(element, value) {
    if (!element || element.nodeType !== 1) {
      return element;
    }
    if (element.classList) {
      if (!element.classList.contains(value)) {
        element.classList.add(value);
      }
      return element;
    }
    if (value && typeof value === "string") {
      var classNames = (value || "").split(/\s+/);
      if (element.nodeType === 1) {
        if (!element.className) {
          element.className = value;
        } else {
          var className = " " + element.className + " ", setClass = element.className;
          for (var c = 0, cl = classNames.length; c < cl; c++) {
            if (className.indexOf(" " + classNames[c] + " ") < 0) {
              setClass += " " + classNames[c];
            }
          }
          element.className = setClass.replace(/^\s+|\s+$/g, "");
        }
      }
    }
    return element;
  };
  /**
 * Remove a class from an element, if it has it.
 *
 * @returns The element, with its class removed.
 * @private
 */
  var _removeClass = function(element, value) {
    if (!element || element.nodeType !== 1) {
      return element;
    }
    if (element.classList) {
      if (element.classList.contains(value)) {
        element.classList.remove(value);
      }
      return element;
    }
    if (typeof value === "string" && value) {
      var classNames = value.split(/\s+/);
      if (element.nodeType === 1 && element.className) {
        var className = (" " + element.className + " ").replace(/[\n\t]/g, " ");
        for (var c = 0, cl = classNames.length; c < cl; c++) {
          className = className.replace(" " + classNames[c] + " ", " ");
        }
        element.className = className.replace(/^\s+|\s+$/g, "");
      }
    }
    return element;
  };
  /**
 * Attempt to interpret the element's CSS styling. If `prop` is `"cursor"`,
 * then we assume that it should be a hand ("pointer") cursor if the element
 * is an anchor element ("a" tag).
 *
 * @returns The computed style property.
 * @private
 */
  var _getStyle = function(el, prop) {
    var value = _window.getComputedStyle(el, null).getPropertyValue(prop);
    if (prop === "cursor") {
      if (!value || value === "auto") {
        if (el.nodeName === "A") {
          return "pointer";
        }
      }
    }
    return value;
  };
  /**
 * Get the zoom factor of the browser. Always returns `1.0`, except at
 * non-default zoom levels in IE<8 and some older versions of WebKit.
 *
 * @returns Floating unit percentage of the zoom factor (e.g. 150% = `1.5`).
 * @private
 */
  var _getZoomFactor = function() {
    var rect, physicalWidth, logicalWidth, zoomFactor = 1;
    if (typeof _document.body.getBoundingClientRect === "function") {
      rect = _document.body.getBoundingClientRect();
      physicalWidth = rect.right - rect.left;
      logicalWidth = _document.body.offsetWidth;
      zoomFactor = _round(physicalWidth / logicalWidth * 100) / 100;
    }
    return zoomFactor;
  };
  /**
 * Get the DOM positioning info of an element.
 *
 * @returns Object containing the element's position, width, and height.
 * @private
 */
  var _getDOMObjectPosition = function(obj) {
    var info = {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    };
    if (obj.getBoundingClientRect) {
      var rect = obj.getBoundingClientRect();
      var pageXOffset, pageYOffset, zoomFactor;
      if ("pageXOffset" in _window && "pageYOffset" in _window) {
        pageXOffset = _window.pageXOffset;
        pageYOffset = _window.pageYOffset;
      } else {
        zoomFactor = _getZoomFactor();
        pageXOffset = _round(_document.documentElement.scrollLeft / zoomFactor);
        pageYOffset = _round(_document.documentElement.scrollTop / zoomFactor);
      }
      var leftBorderWidth = _document.documentElement.clientLeft || 0;
      var topBorderWidth = _document.documentElement.clientTop || 0;
      info.left = rect.left + pageXOffset - leftBorderWidth;
      info.top = rect.top + pageYOffset - topBorderWidth;
      info.width = "width" in rect ? rect.width : rect.right - rect.left;
      info.height = "height" in rect ? rect.height : rect.bottom - rect.top;
    }
    return info;
  };
  /**
 * Reposition the Flash object to cover the currently activated element.
 *
 * @returns `undefined`
 * @private
 */
  var _reposition = function() {
    var htmlBridge;
    if (_currentElement && (htmlBridge = _getHtmlBridge(_flashState.bridge))) {
      var pos = _getDOMObjectPosition(_currentElement);
      _extend(htmlBridge.style, {
        width: pos.width + "px",
        height: pos.height + "px",
        top: pos.top + "px",
        left: pos.left + "px",
        zIndex: "" + _getSafeZIndex(_globalConfig.zIndex)
      });
    }
  };
  /**
 * Sends a signal to the Flash object to display the hand cursor if `true`.
 *
 * @returns `undefined`
 * @private
 */
  var _setHandCursor = function(enabled) {
    if (_flashState.ready === true) {
      if (_flashState.bridge && typeof _flashState.bridge.setHandCursor === "function") {
        _flashState.bridge.setHandCursor(enabled);
      } else {
        _flashState.ready = false;
      }
    }
  };
  /**
 * Get a safe value for `zIndex`
 *
 * @returns an integer, or "auto"
 * @private
 */
  var _getSafeZIndex = function(val) {
    if (/^(?:auto|inherit)$/.test(val)) {
      return val;
    }
    var zIndex;
    if (typeof val === "number" && !_isNaN(val)) {
      zIndex = val;
    } else if (typeof val === "string") {
      zIndex = _getSafeZIndex(_parseInt(val, 10));
    }
    return typeof zIndex === "number" ? zIndex : "auto";
  };
  /**
 * Detect the Flash Player status, version, and plugin type.
 *
 * @see {@link https://code.google.com/p/doctype-mirror/wiki/ArticleDetectFlash#The_code}
 * @see {@link http://stackoverflow.com/questions/12866060/detecting-pepper-ppapi-flash-with-javascript}
 *
 * @returns `undefined`
 * @private
 */
  var _detectFlashSupport = function(ActiveXObject) {
    var plugin, ax, mimeType, hasFlash = false, isActiveX = false, isPPAPI = false, flashVersion = "";
    /**
   * Derived from Apple's suggested sniffer.
   * @param {String} desc e.g. "Shockwave Flash 7.0 r61"
   * @returns {String} "7.0.61"
   * @private
   */
    function parseFlashVersion(desc) {
      var matches = desc.match(/[\d]+/g);
      matches.length = 3;
      return matches.join(".");
    }
    function isPepperFlash(flashPlayerFileName) {
      return !!flashPlayerFileName && (flashPlayerFileName = flashPlayerFileName.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(flashPlayerFileName) || flashPlayerFileName.slice(-13) === "chrome.plugin");
    }
    function inspectPlugin(plugin) {
      if (plugin) {
        hasFlash = true;
        if (plugin.version) {
          flashVersion = parseFlashVersion(plugin.version);
        }
        if (!flashVersion && plugin.description) {
          flashVersion = parseFlashVersion(plugin.description);
        }
        if (plugin.filename) {
          isPPAPI = isPepperFlash(plugin.filename);
        }
      }
    }
    if (_navigator.plugins && _navigator.plugins.length) {
      plugin = _navigator.plugins["Shockwave Flash"];
      inspectPlugin(plugin);
      if (_navigator.plugins["Shockwave Flash 2.0"]) {
        hasFlash = true;
        flashVersion = "2.0.0.11";
      }
    } else if (_navigator.mimeTypes && _navigator.mimeTypes.length) {
      mimeType = _navigator.mimeTypes["application/x-shockwave-flash"];
      plugin = mimeType && mimeType.enabledPlugin;
      inspectPlugin(plugin);
    } else if (typeof ActiveXObject !== "undefined") {
      isActiveX = true;
      try {
        ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
        hasFlash = true;
        flashVersion = parseFlashVersion(ax.GetVariable("$version"));
      } catch (e1) {
        try {
          ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
          hasFlash = true;
          flashVersion = "6.0.21";
        } catch (e2) {
          try {
            ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            hasFlash = true;
            flashVersion = parseFlashVersion(ax.GetVariable("$version"));
          } catch (e3) {
            isActiveX = false;
          }
        }
      }
    }
    _flashState.disabled = hasFlash !== true;
    _flashState.outdated = flashVersion && _parseFloat(flashVersion) < _parseFloat(_minimumFlashVersion);
    _flashState.version = flashVersion || "0.0.0";
    _flashState.pluginType = isPPAPI ? "pepper" : isActiveX ? "activex" : hasFlash ? "netscape" : "unknown";
  };
  /**
 * Invoke the Flash detection algorithms immediately upon inclusion so we're not waiting later.
 */
  _detectFlashSupport(_ActiveXObject);
  /**
 * A shell constructor for `ZeroClipboard` client instances.
 *
 * @constructor
 */
  var ZeroClipboard = function() {
    if (!(this instanceof ZeroClipboard)) {
      return new ZeroClipboard();
    }
    if (typeof ZeroClipboard._createClient === "function") {
      ZeroClipboard._createClient.apply(this, _args(arguments));
    }
  };
  /**
 * The ZeroClipboard library's version number.
 *
 * @static
 * @readonly
 * @property {string}
 */
  _defineProperty(ZeroClipboard, "version", {
    value: "2.1.6",
    writable: false,
    configurable: true,
    enumerable: true
  });
  /**
 * Update or get a copy of the ZeroClipboard global configuration.
 * Returns a copy of the current/updated configuration.
 *
 * @returns Object
 * @static
 */
  ZeroClipboard.config = function() {
    return _config.apply(this, _args(arguments));
  };
  /**
 * Diagnostic method that describes the state of the browser, Flash Player, and ZeroClipboard.
 *
 * @returns Object
 * @static
 */
  ZeroClipboard.state = function() {
    return _state.apply(this, _args(arguments));
  };
  /**
 * Check if Flash is unusable for any reason: disabled, outdated, deactivated, etc.
 *
 * @returns Boolean
 * @static
 */
  ZeroClipboard.isFlashUnusable = function() {
    return _isFlashUnusable.apply(this, _args(arguments));
  };
  /**
 * Register an event listener.
 *
 * @returns `ZeroClipboard`
 * @static
 */
  ZeroClipboard.on = function() {
    return _on.apply(this, _args(arguments));
  };
  /**
 * Unregister an event listener.
 * If no `listener` function/object is provided, it will unregister all listeners for the provided `eventType`.
 * If no `eventType` is provided, it will unregister all listeners for every event type.
 *
 * @returns `ZeroClipboard`
 * @static
 */
  ZeroClipboard.off = function() {
    return _off.apply(this, _args(arguments));
  };
  /**
 * Retrieve event listeners for an `eventType`.
 * If no `eventType` is provided, it will retrieve all listeners for every event type.
 *
 * @returns array of listeners for the `eventType`; if no `eventType`, then a map/hash object of listeners for all event types; or `null`
 */
  ZeroClipboard.handlers = function() {
    return _listeners.apply(this, _args(arguments));
  };
  /**
 * Event emission receiver from the Flash object, forwarding to any registered JavaScript event listeners.
 *
 * @returns For the "copy" event, returns the Flash-friendly "clipData" object; otherwise `undefined`.
 * @static
 */
  ZeroClipboard.emit = function() {
    return _emit.apply(this, _args(arguments));
  };
  /**
 * Create and embed the Flash object.
 *
 * @returns The Flash object
 * @static
 */
  ZeroClipboard.create = function() {
    return _create.apply(this, _args(arguments));
  };
  /**
 * Self-destruct and clean up everything, including the embedded Flash object.
 *
 * @returns `undefined`
 * @static
 */
  ZeroClipboard.destroy = function() {
    return _destroy.apply(this, _args(arguments));
  };
  /**
 * Set the pending data for clipboard injection.
 *
 * @returns `undefined`
 * @static
 */
  ZeroClipboard.setData = function() {
    return _setData.apply(this, _args(arguments));
  };
  /**
 * Clear the pending data for clipboard injection.
 * If no `format` is provided, all pending data formats will be cleared.
 *
 * @returns `undefined`
 * @static
 */
  ZeroClipboard.clearData = function() {
    return _clearData.apply(this, _args(arguments));
  };
  /**
 * Get a copy of the pending data for clipboard injection.
 * If no `format` is provided, a copy of ALL pending data formats will be returned.
 *
 * @returns `String` or `Object`
 * @static
 */
  ZeroClipboard.getData = function() {
    return _getData.apply(this, _args(arguments));
  };
  /**
 * Sets the current HTML object that the Flash object should overlay. This will put the global
 * Flash object on top of the current element; depending on the setup, this may also set the
 * pending clipboard text data as well as the Flash object's wrapping element's title attribute
 * based on the underlying HTML element and ZeroClipboard configuration.
 *
 * @returns `undefined`
 * @static
 */
  ZeroClipboard.focus = ZeroClipboard.activate = function() {
    return _focus.apply(this, _args(arguments));
  };
  /**
 * Un-overlays the Flash object. This will put the global Flash object off-screen; depending on
 * the setup, this may also unset the Flash object's wrapping element's title attribute based on
 * the underlying HTML element and ZeroClipboard configuration.
 *
 * @returns `undefined`
 * @static
 */
  ZeroClipboard.blur = ZeroClipboard.deactivate = function() {
    return _blur.apply(this, _args(arguments));
  };
  /**
 * Returns the currently focused/"activated" HTML element that the Flash object is wrapping.
 *
 * @returns `HTMLElement` or `null`
 * @static
 */
  ZeroClipboard.activeElement = function() {
    return _activeElement.apply(this, _args(arguments));
  };
  /**
 * Keep track of the ZeroClipboard client instance counter.
 */
  var _clientIdCounter = 0;
  /**
 * Keep track of the state of the client instances.
 *
 * Entry structure:
 *   _clientMeta[client.id] = {
 *     instance: client,
 *     elements: [],
 *     handlers: {}
 *   };
 */
  var _clientMeta = {};
  /**
 * Keep track of the ZeroClipboard clipped elements counter.
 */
  var _elementIdCounter = 0;
  /**
 * Keep track of the state of the clipped element relationships to clients.
 *
 * Entry structure:
 *   _elementMeta[element.zcClippingId] = [client1.id, client2.id];
 */
  var _elementMeta = {};
  /**
 * Keep track of the state of the mouse event handlers for clipped elements.
 *
 * Entry structure:
 *   _mouseHandlers[element.zcClippingId] = {
 *     mouseover:  function(event) {},
 *     mouseout:   function(event) {},
 *     mouseenter: function(event) {},
 *     mouseleave: function(event) {},
 *     mousemove:  function(event) {}
 *   };
 */
  var _mouseHandlers = {};
  /**
 * Extending the ZeroClipboard configuration defaults for the Client module.
 */
  _extend(_globalConfig, {
    autoActivate: true
  });
  /**
 * The real constructor for `ZeroClipboard` client instances.
 * @private
 */
  var _clientConstructor = function(elements) {
    var client = this;
    client.id = "" + _clientIdCounter++;
    _clientMeta[client.id] = {
      instance: client,
      elements: [],
      handlers: {}
    };
    if (elements) {
      client.clip(elements);
    }
    ZeroClipboard.on("*", function(event) {
      return client.emit(event);
    });
    ZeroClipboard.on("destroy", function() {
      client.destroy();
    });
    ZeroClipboard.create();
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.on`.
 * @private
 */
  var _clientOn = function(eventType, listener) {
    var i, len, events, added = {}, handlers = _clientMeta[this.id] && _clientMeta[this.id].handlers;
    if (typeof eventType === "string" && eventType) {
      events = eventType.toLowerCase().split(/\s+/);
    } else if (typeof eventType === "object" && eventType && typeof listener === "undefined") {
      for (i in eventType) {
        if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
          this.on(i, eventType[i]);
        }
      }
    }
    if (events && events.length) {
      for (i = 0, len = events.length; i < len; i++) {
        eventType = events[i].replace(/^on/, "");
        added[eventType] = true;
        if (!handlers[eventType]) {
          handlers[eventType] = [];
        }
        handlers[eventType].push(listener);
      }
      if (added.ready && _flashState.ready) {
        this.emit({
          type: "ready",
          client: this
        });
      }
      if (added.error) {
        var errorTypes = [ "disabled", "outdated", "unavailable", "deactivated", "overdue" ];
        for (i = 0, len = errorTypes.length; i < len; i++) {
          if (_flashState[errorTypes[i]]) {
            this.emit({
              type: "error",
              name: "flash-" + errorTypes[i],
              client: this
            });
            break;
          }
        }
      }
    }
    return this;
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.off`.
 * @private
 */
  var _clientOff = function(eventType, listener) {
    var i, len, foundIndex, events, perEventHandlers, handlers = _clientMeta[this.id] && _clientMeta[this.id].handlers;
    if (arguments.length === 0) {
      events = _keys(handlers);
    } else if (typeof eventType === "string" && eventType) {
      events = eventType.split(/\s+/);
    } else if (typeof eventType === "object" && eventType && typeof listener === "undefined") {
      for (i in eventType) {
        if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
          this.off(i, eventType[i]);
        }
      }
    }
    if (events && events.length) {
      for (i = 0, len = events.length; i < len; i++) {
        eventType = events[i].toLowerCase().replace(/^on/, "");
        perEventHandlers = handlers[eventType];
        if (perEventHandlers && perEventHandlers.length) {
          if (listener) {
            foundIndex = perEventHandlers.indexOf(listener);
            while (foundIndex !== -1) {
              perEventHandlers.splice(foundIndex, 1);
              foundIndex = perEventHandlers.indexOf(listener, foundIndex);
            }
          } else {
            perEventHandlers.length = 0;
          }
        }
      }
    }
    return this;
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.handlers`.
 * @private
 */
  var _clientListeners = function(eventType) {
    var copy = null, handlers = _clientMeta[this.id] && _clientMeta[this.id].handlers;
    if (handlers) {
      if (typeof eventType === "string" && eventType) {
        copy = handlers[eventType] ? handlers[eventType].slice(0) : [];
      } else {
        copy = _deepCopy(handlers);
      }
    }
    return copy;
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.emit`.
 * @private
 */
  var _clientEmit = function(event) {
    if (_clientShouldEmit.call(this, event)) {
      if (typeof event === "object" && event && typeof event.type === "string" && event.type) {
        event = _extend({}, event);
      }
      var eventCopy = _extend({}, _createEvent(event), {
        client: this
      });
      _clientDispatchCallbacks.call(this, eventCopy);
    }
    return this;
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.clip`.
 * @private
 */
  var _clientClip = function(elements) {
    elements = _prepClip(elements);
    for (var i = 0; i < elements.length; i++) {
      if (_hasOwn.call(elements, i) && elements[i] && elements[i].nodeType === 1) {
        if (!elements[i].zcClippingId) {
          elements[i].zcClippingId = "zcClippingId_" + _elementIdCounter++;
          _elementMeta[elements[i].zcClippingId] = [ this.id ];
          if (_globalConfig.autoActivate === true) {
            _addMouseHandlers(elements[i]);
          }
        } else if (_elementMeta[elements[i].zcClippingId].indexOf(this.id) === -1) {
          _elementMeta[elements[i].zcClippingId].push(this.id);
        }
        var clippedElements = _clientMeta[this.id] && _clientMeta[this.id].elements;
        if (clippedElements.indexOf(elements[i]) === -1) {
          clippedElements.push(elements[i]);
        }
      }
    }
    return this;
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.unclip`.
 * @private
 */
  var _clientUnclip = function(elements) {
    var meta = _clientMeta[this.id];
    if (!meta) {
      return this;
    }
    var clippedElements = meta.elements;
    var arrayIndex;
    if (typeof elements === "undefined") {
      elements = clippedElements.slice(0);
    } else {
      elements = _prepClip(elements);
    }
    for (var i = elements.length; i--; ) {
      if (_hasOwn.call(elements, i) && elements[i] && elements[i].nodeType === 1) {
        arrayIndex = 0;
        while ((arrayIndex = clippedElements.indexOf(elements[i], arrayIndex)) !== -1) {
          clippedElements.splice(arrayIndex, 1);
        }
        var clientIds = _elementMeta[elements[i].zcClippingId];
        if (clientIds) {
          arrayIndex = 0;
          while ((arrayIndex = clientIds.indexOf(this.id, arrayIndex)) !== -1) {
            clientIds.splice(arrayIndex, 1);
          }
          if (clientIds.length === 0) {
            if (_globalConfig.autoActivate === true) {
              _removeMouseHandlers(elements[i]);
            }
            delete elements[i].zcClippingId;
          }
        }
      }
    }
    return this;
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.elements`.
 * @private
 */
  var _clientElements = function() {
    var meta = _clientMeta[this.id];
    return meta && meta.elements ? meta.elements.slice(0) : [];
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.destroy`.
 * @private
 */
  var _clientDestroy = function() {
    this.unclip();
    this.off();
    delete _clientMeta[this.id];
  };
  /**
 * Inspect an Event to see if the Client (`this`) should honor it for emission.
 * @private
 */
  var _clientShouldEmit = function(event) {
    if (!(event && event.type)) {
      return false;
    }
    if (event.client && event.client !== this) {
      return false;
    }
    var clippedEls = _clientMeta[this.id] && _clientMeta[this.id].elements;
    var hasClippedEls = !!clippedEls && clippedEls.length > 0;
    var goodTarget = !event.target || hasClippedEls && clippedEls.indexOf(event.target) !== -1;
    var goodRelTarget = event.relatedTarget && hasClippedEls && clippedEls.indexOf(event.relatedTarget) !== -1;
    var goodClient = event.client && event.client === this;
    if (!(goodTarget || goodRelTarget || goodClient)) {
      return false;
    }
    return true;
  };
  /**
 * Handle the actual dispatching of events to a client instance.
 *
 * @returns `this`
 * @private
 */
  var _clientDispatchCallbacks = function(event) {
    if (!(typeof event === "object" && event && event.type)) {
      return;
    }
    var async = _shouldPerformAsync(event);
    var wildcardTypeHandlers = _clientMeta[this.id] && _clientMeta[this.id].handlers["*"] || [];
    var specificTypeHandlers = _clientMeta[this.id] && _clientMeta[this.id].handlers[event.type] || [];
    var handlers = wildcardTypeHandlers.concat(specificTypeHandlers);
    if (handlers && handlers.length) {
      var i, len, func, context, eventCopy, originalContext = this;
      for (i = 0, len = handlers.length; i < len; i++) {
        func = handlers[i];
        context = originalContext;
        if (typeof func === "string" && typeof _window[func] === "function") {
          func = _window[func];
        }
        if (typeof func === "object" && func && typeof func.handleEvent === "function") {
          context = func;
          func = func.handleEvent;
        }
        if (typeof func === "function") {
          eventCopy = _extend({}, event);
          _dispatchCallback(func, context, [ eventCopy ], async);
        }
      }
    }
    return this;
  };
  /**
 * Prepares the elements for clipping/unclipping.
 *
 * @returns An Array of elements.
 * @private
 */
  var _prepClip = function(elements) {
    if (typeof elements === "string") {
      elements = [];
    }
    return typeof elements.length !== "number" ? [ elements ] : elements;
  };
  /**
 * Add a `mouseover` handler function for a clipped element.
 *
 * @returns `undefined`
 * @private
 */
  var _addMouseHandlers = function(element) {
    if (!(element && element.nodeType === 1)) {
      return;
    }
    var _suppressMouseEvents = function(event) {
      if (!(event || (event = _window.event))) {
        return;
      }
      if (event._source !== "js") {
        event.stopImmediatePropagation();
        event.preventDefault();
      }
      delete event._source;
    };
    var _elementMouseOver = function(event) {
      if (!(event || (event = _window.event))) {
        return;
      }
      _suppressMouseEvents(event);
      ZeroClipboard.focus(element);
    };
    element.addEventListener("mouseover", _elementMouseOver, false);
    element.addEventListener("mouseout", _suppressMouseEvents, false);
    element.addEventListener("mouseenter", _suppressMouseEvents, false);
    element.addEventListener("mouseleave", _suppressMouseEvents, false);
    element.addEventListener("mousemove", _suppressMouseEvents, false);
    _mouseHandlers[element.zcClippingId] = {
      mouseover: _elementMouseOver,
      mouseout: _suppressMouseEvents,
      mouseenter: _suppressMouseEvents,
      mouseleave: _suppressMouseEvents,
      mousemove: _suppressMouseEvents
    };
  };
  /**
 * Remove a `mouseover` handler function for a clipped element.
 *
 * @returns `undefined`
 * @private
 */
  var _removeMouseHandlers = function(element) {
    if (!(element && element.nodeType === 1)) {
      return;
    }
    var mouseHandlers = _mouseHandlers[element.zcClippingId];
    if (!(typeof mouseHandlers === "object" && mouseHandlers)) {
      return;
    }
    var key, val, mouseEvents = [ "move", "leave", "enter", "out", "over" ];
    for (var i = 0, len = mouseEvents.length; i < len; i++) {
      key = "mouse" + mouseEvents[i];
      val = mouseHandlers[key];
      if (typeof val === "function") {
        element.removeEventListener(key, val, false);
      }
    }
    delete _mouseHandlers[element.zcClippingId];
  };
  /**
 * Creates a new ZeroClipboard client instance.
 * Optionally, auto-`clip` an element or collection of elements.
 *
 * @constructor
 */
  ZeroClipboard._createClient = function() {
    _clientConstructor.apply(this, _args(arguments));
  };
  /**
 * Register an event listener to the client.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.on = function() {
    return _clientOn.apply(this, _args(arguments));
  };
  /**
 * Unregister an event handler from the client.
 * If no `listener` function/object is provided, it will unregister all handlers for the provided `eventType`.
 * If no `eventType` is provided, it will unregister all handlers for every event type.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.off = function() {
    return _clientOff.apply(this, _args(arguments));
  };
  /**
 * Retrieve event listeners for an `eventType` from the client.
 * If no `eventType` is provided, it will retrieve all listeners for every event type.
 *
 * @returns array of listeners for the `eventType`; if no `eventType`, then a map/hash object of listeners for all event types; or `null`
 */
  ZeroClipboard.prototype.handlers = function() {
    return _clientListeners.apply(this, _args(arguments));
  };
  /**
 * Event emission receiver from the Flash object for this client's registered JavaScript event listeners.
 *
 * @returns For the "copy" event, returns the Flash-friendly "clipData" object; otherwise `undefined`.
 */
  ZeroClipboard.prototype.emit = function() {
    return _clientEmit.apply(this, _args(arguments));
  };
  /**
 * Register clipboard actions for new element(s) to the client.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.clip = function() {
    return _clientClip.apply(this, _args(arguments));
  };
  /**
 * Unregister the clipboard actions of previously registered element(s) on the page.
 * If no elements are provided, ALL registered elements will be unregistered.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.unclip = function() {
    return _clientUnclip.apply(this, _args(arguments));
  };
  /**
 * Get all of the elements to which this client is clipped.
 *
 * @returns array of clipped elements
 */
  ZeroClipboard.prototype.elements = function() {
    return _clientElements.apply(this, _args(arguments));
  };
  /**
 * Self-destruct and clean up everything for a single client.
 * This will NOT destroy the embedded Flash object.
 *
 * @returns `undefined`
 */
  ZeroClipboard.prototype.destroy = function() {
    return _clientDestroy.apply(this, _args(arguments));
  };
  /**
 * Stores the pending plain text to inject into the clipboard.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.setText = function(text) {
    ZeroClipboard.setData("text/plain", text);
    return this;
  };
  /**
 * Stores the pending HTML text to inject into the clipboard.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.setHtml = function(html) {
    ZeroClipboard.setData("text/html", html);
    return this;
  };
  /**
 * Stores the pending rich text (RTF) to inject into the clipboard.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.setRichText = function(richText) {
    ZeroClipboard.setData("application/rtf", richText);
    return this;
  };
  /**
 * Stores the pending data to inject into the clipboard.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.setData = function() {
    ZeroClipboard.setData.apply(this, _args(arguments));
    return this;
  };
  /**
 * Clears the pending data to inject into the clipboard.
 * If no `format` is provided, all pending data formats will be cleared.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.clearData = function() {
    ZeroClipboard.clearData.apply(this, _args(arguments));
    return this;
  };
  /**
 * Gets a copy of the pending data to inject into the clipboard.
 * If no `format` is provided, a copy of ALL pending data formats will be returned.
 *
 * @returns `String` or `Object`
 */
  ZeroClipboard.prototype.getData = function() {
    return ZeroClipboard.getData.apply(this, _args(arguments));
  };
  if (typeof define === "function" && define.amd) {
    define(function() {
      return ZeroClipboard;
    });
  } else if (typeof module === "object" && module && typeof module.exports === "object" && module.exports) {
    module.exports = ZeroClipboard;
  } else {
    window.ZeroClipboard = ZeroClipboard;
  }
})(function() {
  return this || window;
}());
angular.module('bahmni.common.uiHelper', ['ngClipboard']);

angular.module('bahmni.common.uiHelper')
    .service('backlinkService', function ($window) {
        var self = this;
        
        var urls = [];
        self.reset = function() {
            urls = [];
        };

        self.setUrls = function(backLinks){
            self.reset();
            angular.forEach(backLinks, function(backLink){
                self.addUrl(backLink);
            });
        };
            
        self.addUrl = function(backLink){
            urls.push(backLink);
        };

        self.addBackUrl = function(label) {
            var backLabel = label || "Back";
            urls.push({label: backLabel, action: $window.history.back})
        };

        self.getUrlByLabel = function(label){
            return urls.filter(function(url){
                return url.label === label;
            });
        };

        self.getAllUrls= function(){
            return urls;
        }
    });

'use strict';

angular.module('bahmni.common.uiHelper')
.directive('bmBackLinks', function() {
	return {
		template: '<ul>' +
					    '<li ng-repeat="backLink in backLinks">' +
					        '<a class="back-btn" ng-if="backLink.action" accesskey="{{backLink.accessKey}}" ng-click="backLink.action()" id="{{backLink.id}}"> <span ng-bind-html="backLink.label"></span> </a>' +
					        '<a class="back-btn" ng-class="{\'dashboard-link\':backLink.image}" ng-if="backLink.url" accesskey="{{backLink.accessKey}}" ng-href="{{backLink.url}}" id="{{backLink.id}}"  title="{{backLink.title}}"> ' +
                                '<img ng-if="backLink.image" src="{{backLink.image}}" onerror="this.onerror=null; this.src=\'../images/blank-user.gif\'"/>' +
                                '<i ng-if="backLink.icon && !backLink.image" class="{{backLink.icon}}"></i>' +
                                '<span ng-if="!backLink.image" ng-bind-html="backLink.label"></span> </a>' +
					        '<a class="back-btn" ng-if="backLink.state" accesskey="{{backLink.accessKey}}" ui-sref="{{backLink.state}}" id="{{backLink.id}}">' + 
					        	'<i ng-if="backLink.icon" class="{{backLink.icon}}"></i>' +
					        	'<span ng-bind-html="backLink.label"></span> </a>' +
					    '</li>' +
					'</ul>',
		controller: function ($scope, backlinkService) {
	        $scope.backLinks = backlinkService.getAllUrls();
	        $scope.$on('$stateChangeSuccess', function (event, state, params, fromState, fromParams) {
	            if (state.data && state.data.backLinks) {
	                backlinkService.setUrls(state.data.backLinks);
	                $scope.backLinks = backlinkService.getAllUrls();
	            }
	        });
	    },
	    restrict: 'E'
	}
});

'use strict';

angular.module('bahmni.common.uiHelper')
    .controller('MessageController', ['$scope', 'messagingService',
        function ($scope, messagingService) {
            $scope.messages = messagingService.messages;

            $scope.getErrorMessageText = function(){
                var string = "";
                $scope.messages.error.forEach(function(errorMessage){
                    string = string.concat(errorMessage.value);
                });
                return string;
            };

            $scope.showError = false;

            $scope.toggleShowError = function (){
                $scope.showError = !$scope.showError;
                $scope.showError === true ? messagingService.cancelTimeout() : messagingService.createTimeout("error", 0);
            };

            $scope.isErrorMessagePresent = function(){
                return $scope.messages.error.length > 0 ? true : false;
            }
        }]);

'use strict';

angular.module('bahmni.common.uiHelper')
    .service('messagingService', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
        this.messages = {error: [], info: [], formError: []};
        var self = this;
        var promise;

        $rootScope.$on('event:serverError', function(event, errorMessage) {
            self.showMessage('error',  errorMessage, 'serverError');
        });

        this.showMessage = function(level, message, errorEvent) {
            var messageObject = {'value':'', 'isServerError':false};
            messageObject.value = message;
            if(errorEvent){
                messageObject.isServerError = true;
            }
            this.messages[level].push(messageObject);
            if(this.messages[level].length === 1){
                this.createTimeout(level, 4000);
            }
        };

        this.createTimeout = function(level, time) {
            promise = $timeout(function(){ self.messages[level] = [];}, time, true);
        };

        this.cancelTimeout = function(){
            $timeout.cancel(promise);
        };
    }]);
'use strict';
var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.Logging = Bahmni.Common.Logging || {};

angular.module('bahmni.common.logging', []);
angular.module('bahmni.common.logging')
.config(function($provide){
    $provide.decorator("$exceptionHandler", function($delegate, $injector, $window, $log){
        var logError = function(exception, cause) {
            try {
                var messagingService = $injector.get('messagingService');
                var errorMessage = exception.toString();
                var stackTrace = printStackTrace({ e: exception });
                var errorDetails = {
                    timestamp: new Date(),
                    browser: $window.navigator.userAgent,
                    errorUrl: $window.location.href,
                    errorMessage: errorMessage,
                    stackTrace: stackTrace,
                    cause: ( cause || "" )
                };
                $.ajax({
                    type: "POST",
                    url: "/log",
                    contentType: "application/json",
                    data: angular.toJson(errorDetails)
                });
                messagingService.showMessage('error', errorMessage);
                exposeException(errorDetails);
            } catch (loggingError) {
                $log.warn("Error logging failed");
                $log.log(loggingError);
            }
        };

        var exposeException = function(exceptionDetails) {
            window.angular_exception = window.angular_exception || [];
            window.angular_exception.push(exceptionDetails);
        };

        return function(exception, cause){
            $delegate(exception, cause);
            logError(exception, cause);
        };
    });
});

angular
    .module("trends", ["ngRoute", "nvd3ChartDirectives", "bahmni.common.uiHelper", "bahmni.common.logging"])
    .config(["$routeProvider", "$httpProvider", function ($routeProvider, $httpProvider) {
        $routeProvider.when("/patients/:patientUUID", {
            templateUrl: "views/trends.html",
            controller: "TrendsController"
        });
        $routeProvider.when("/patients/:patientUUID/:obsConcept", {
            templateUrl: "views/trends.html",
            controller: "TrendsController"
        });
        $httpProvider.defaults.headers.common["Disable-WWW-Authenticate"] = true;
    }]);

angular.module("trends").controller("TrendsController", ["$scope", "$routeParams", "observationService",'backlinkService',
    function ($scope, $routeParams, observationService, backlinkService) {
        var patientUUID = $routeParams.patientUUID;
        var obsConcept = $routeParams.obsConcept;
        var fetchedObservations = observationService.fetch(patientUUID);
        var MINIMUM_REQUIRED_READINGS = 2;

        var fetch = function(observations, concept) {
            return observations.filter(function(observation) {
                return observation.conceptName === concept;
            }).map(function(observation) {
                return [observation.observationDate, observation.value, observation.units];
            });
        };

        var epochToDateString = function(epoch){
            var date = new Date(epoch);
            return d3.time.format("'%d/%m/%y %H:%M'")(date);
        }

        var displayableConceptNames = {
            "BMI": "BMI",
            "REGISTRATION FEES": "Fees"
        };

        var unique = function(array) {
            return array.filter(function(item, position) {
                return array.indexOf(item) === position;
            });
        }

        var sentenceCase = function(words) {
            return words[0].toUpperCase() + words.slice(1, words.length).toLowerCase();
        };

        var displayNameFor = function(concept) {
            if (displayableConceptNames[concept]) {
                return displayableConceptNames[concept];
            }

            return sentenceCase(concept);
        };

        var init = function() {
            fetchedObservations.success(function(observations) {
                var allConcepts = observations.map(function(observation) {
                        return observation.conceptName;
                    }),
                uniqueConcepts = unique(allConcepts);

                $scope.observations = {};
                $scope.visibleObservations = {};
                $scope.concepts = {};

                uniqueConcepts.forEach(function(concept) {
                    var displayName = displayNameFor(concept),
                        values = fetch(observations, concept);

                    if (values.length >= MINIMUM_REQUIRED_READINGS) {
                        $scope.observations[concept] = [{
                            "key": displayName,
                            "values": values
                        }];
                        $scope.concepts[concept] = {
                            name: displayName,
                            displayed: false
                        };
                        $scope.hasConcepts = true;
                    }
                });


                if(obsConcept){
                    $scope.addObservations(obsConcept);
                }
            });

            initBackLinks();
        };

        $scope.xAxisTickFormatAsDate = function(){
            return epochToDateString;
        };


        $scope.getUnitsFromDetails = function(details){
            if(details && details[0]){
                return details[0].values[0][2];
            }
        };

        $scope.addObservations = function(concept){
            $scope.visibleObservations[concept] = $scope.observations[concept];
            if($scope.concepts[concept]){
                $scope.concepts[concept].displayed = true;
            }
        };

        $scope.removeObservations = function(concept){
            delete $scope.visibleObservations[concept];
            $scope.concepts[concept].displayed = false;
        };

        var initBackLinks =  function () {
            backlinkService.addUrl({label: "Dashboard", url: "../clinical/#/patient/" + patientUUID + "/dashboard"});
        };

        $scope.atleastOneForDisplay = function(){
            if($scope.visibleObservations){
              for(var property in $scope.visibleObservations){
                return true;
              }
            }
            return false;
        }

        init();
    }
]);

angular.module("trends").service("observationService", ["$http", function ($http) {
    var url = "/openmrs/ws/rest/v1/bahmnicore/bahmniobs";

    var fetch = function (patientUiud) {
        return $http.get(url, {
            "params": {
                "patientUUID": patientUiud
            }
        });
    };

    return {
        fetch: fetch
    };
}]);
