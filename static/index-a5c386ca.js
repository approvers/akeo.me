var e,t,n,_,r,o,l={},u=[],i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,t){for(var n in t)e[n]=t[n];return e}function s(e){var t=e.parentNode;t&&t.removeChild(e)}function a(e,t,n){var _,r,o,l=arguments,u={};for(o in t)"key"==o?_=t[o]:"ref"==o?r=t[o]:u[o]=t[o];if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(l[o]);if(null!=n&&(u.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===u[o]&&(u[o]=e.defaultProps[o]);return f(e,u,_,r,null)}function f(t,n,_,r,o){var l={type:t,props:n,key:_,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++e.__v:o};return null!=e.vnode&&e.vnode(l),l}function p(e){return e.children}function h(e,t){this.props=e,this.context=t}function d(e,t){if(null==t)return e.__?d(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?d(e):null}function v(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return v(e)}}function m(r){(!r.__d&&(r.__d=!0)&&t.push(r)&&!y.__r++||_!==e.debounceRendering)&&((_=e.debounceRendering)||n)(y)}function y(){for(var e;y.__r=t.length;)e=t.sort((function(e,t){return e.__v.__b-t.__v.__b})),t=[],e.some((function(e){var t,n,_,r,o,l,u;e.__d&&(l=(o=(t=e).__v).__e,(u=t.__P)&&(n=[],(_=c({},o)).__v=o.__v+1,r=N(u,o,_,t.__n,void 0!==u.ownerSVGElement,null!=o.__h?[l]:null,n,null==l?d(o):l,o.__h),C(n,o),r!=l&&v(o)))}))}function g(e,t,n,_,r,o,i,c,a,h){var v,m,y,g,k,w,x,S=_&&_.__k||u,C=S.length;for(a==l&&(a=null!=i?i[0]:C?d(_,0):null),n.__k=[],v=0;v<t.length;v++)if(null!=(g=n.__k[v]=null==(g=t[v])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?f(null,g,null,null,g):Array.isArray(g)?f(p,{children:g},null,null,null):null!=g.__e||null!=g.__c?f(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(y=S[v])||y&&g.key==y.key&&g.type===y.type)S[v]=void 0;else for(m=0;m<C;m++){if((y=S[m])&&g.key==y.key&&g.type===y.type){S[m]=void 0;break}y=null}k=N(e,g,y=y||l,r,o,i,c,a,h),(m=g.ref)&&y.ref!=m&&(x||(x=[]),y.ref&&x.push(y.ref,null,g),x.push(m,g.__c||k,g)),null!=k?(null==w&&(w=k),a=b(e,g,y,S,i,k,a),h||"option"!=n.type?"function"==typeof n.type&&(n.__d=a):e.value=""):a&&y.__e==a&&a.parentNode!=e&&(a=d(y))}if(n.__e=w,null!=i&&"function"!=typeof n.type)for(v=i.length;v--;)null!=i[v]&&s(i[v]);for(v=C;v--;)null!=S[v]&&H(S[v],S[v]);if(x)for(v=0;v<x.length;v++)D(x[v],x[++v],x[++v])}function b(e,t,n,_,r,o,l){var u,i,c;if(void 0!==t.__d)u=t.__d,t.__d=void 0;else if(r==n||o!=l||null==o.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(o),u=null;else{for(i=l,c=0;(i=i.nextSibling)&&c<_.length;c+=2)if(i==o)break e;e.insertBefore(o,l),u=l}return void 0!==u?u:o.nextSibling}function k(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||i.test(t)?n:n+"px"}function w(e,t,n,_,r){var o,l,u;if(r&&"className"==t&&(t="class"),"style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||k(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||k(e.style,t,n[t])}else"o"===t[0]&&"n"===t[1]?(o=t!==(t=t.replace(/Capture$/,"")),(l=t.toLowerCase())in e&&(t=l),t=t.slice(2),e.l||(e.l={}),e.l[t+o]=n,u=o?S:x,n?_||e.addEventListener(t,u,o):e.removeEventListener(t,u,o)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&"href"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function x(t){this.l[t.type+!1](e.event?e.event(t):t)}function S(t){this.l[t.type+!0](e.event?e.event(t):t)}function N(t,n,_,r,o,i,s,a,f){var d,v,m,y,k,x,S,N,C,D,H,M=n.type;if(void 0!==n.constructor)return null;null!=_.__h&&(f=_.__h,a=n.__e=_.__e,n.__h=null,i=[a]),(d=e.__b)&&d(n);try{e:if("function"==typeof M){if(N=n.props,C=(d=M.contextType)&&r[d.__c],D=d?C?C.props.value:d.__:r,_.__c?S=(v=n.__c=_.__c).__=v.__E:("prototype"in M&&M.prototype.render?n.__c=v=new M(N,D):(n.__c=v=new h(N,D),v.constructor=M,v.render=A),C&&C.sub(v),v.props=N,v.state||(v.state={}),v.context=D,v.__n=r,m=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=M.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c({},v.__s)),c(v.__s,M.getDerivedStateFromProps(N,v.__s))),y=v.props,k=v.state,m)null==M.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==M.getDerivedStateFromProps&&N!==y&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(N,D),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(N,v.__s,D)||n.__v===_.__v){v.props=N,v.state=v.__s,n.__v!==_.__v&&(v.__d=!1),v.__v=n,n.__e=_.__e,n.__k=_.__k,v.__h.length&&s.push(v),function e(t,n,_){var r,o;for(r=0;r<t.__k.length;r++)(o=t.__k[r])&&(o.__=t,o.__e&&("function"==typeof o.type&&o.__k.length>1&&e(o,n,_),n=b(_,o,o,t.__k,null,o.__e,n),"function"==typeof t.type&&(t.__d=n)))}(n,a,t);break e}null!=v.componentWillUpdate&&v.componentWillUpdate(N,v.__s,D),null!=v.componentDidUpdate&&v.__h.push((function(){v.componentDidUpdate(y,k,x)}))}v.context=D,v.props=N,v.state=v.__s,(d=e.__r)&&d(n),v.__d=!1,v.__v=n,v.__P=t,d=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(r=c(c({},r),v.getChildContext())),m||null==v.getSnapshotBeforeUpdate||(x=v.getSnapshotBeforeUpdate(y,k)),H=null!=d&&d.type==p&&null==d.key?d.props.children:d,g(t,Array.isArray(H)?H:[H],n,_,r,o,i,s,a,f),v.base=n.__e,n.__h=null,v.__h.length&&s.push(v),S&&(v.__E=v.__=null),v.__e=!1}else null==i&&n.__v===_.__v?(n.__k=_.__k,n.__e=_.__e):n.__e=function(e,t,n,_,r,o,i,c){var s,a,f,p,h,d=n.props,v=t.props;if(r="svg"===t.type||r,null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&((null===t.type?3===a.nodeType:a.localName===t.type)||e==a)){e=a,o[s]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),o=null,c=!1}if(null===t.type)d===v||c&&e.data===v||(e.data=v);else{if(null!=o&&(o=u.slice.call(e.childNodes)),f=(d=n.props||l).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(null!=o)for(d={},h=0;h<e.attributes.length;h++)d[e.attributes[h].name]=e.attributes[h].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,_,r){var o;for(o in n)"children"===o||"key"===o||o in t||w(e,o,null,n[o],_);for(o in t)r&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===t[o]||w(e,o,t[o],n[o],_)})(e,v,d,r,c),p?t.__k=[]:(s=t.props.children,g(e,Array.isArray(s)?s:[s],t,n,_,"foreignObject"!==t.type&&r,o,i,l,c)),c||("value"in v&&void 0!==(s=v.value)&&(s!==e.value||"progress"===t.type&&!s)&&w(e,"value",s,d.value,!1),"checked"in v&&void 0!==(s=v.checked)&&s!==e.checked&&w(e,"checked",s,d.checked,!1))}return e}(_.__e,n,_,r,o,i,s,f);(d=e.diffed)&&d(n)}catch(t){n.__v=null,(f||null!=i)&&(n.__e=a,n.__h=!!f,i[i.indexOf(a)]=null),e.__e(t,n,_)}return n.__e}function C(t,n){e.__c&&e.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(e){e.call(n)}))}catch(t){e.__e(t,n.__v)}}))}function D(t,n,_){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,_)}}function H(t,n,_){var r,o,l;if(e.unmount&&e.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||D(r,null,n)),_||"function"==typeof t.type||(_=null!=(o=t.__e)),t.__e=t.__d=void 0,null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){e.__e(t,n)}r.base=r.__P=null}if(r=t.__k)for(l=0;l<r.length;l++)r[l]&&H(r[l],n,_);null!=o&&s(o)}function A(e,t,n){return this.constructor(e,n)}function M(t,n){!function(t,n,_){var o,i,c;e.__&&e.__(t,n),i=(o=_===r)?null:_&&_.__k||n.__k,t=a(p,null,[t]),c=[],N(n,(o?n:_||n).__k=t,i||l,l,void 0!==n.ownerSVGElement,_&&!o?[_]:i?null:n.childNodes.length?u.slice.call(n.childNodes):null,c,_||l,o),C(c,t)}(t,n,r)}function T(e,t){var n={__c:t="__cC"+o++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e,n,_){return this.getChildContext||(n=[],(_={})[t]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(m)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}e={__e:function(e,t){for(var n,_,r,o=t.__h;t=t.__;)if((n=t.__c)&&!n.__)try{if((_=n.constructor)&&null!=_.getDerivedStateFromError&&(n.setState(_.getDerivedStateFromError(e)),r=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),r=n.__d),r)return t.__h=o,n.__E=n}catch(t){e=t}throw e},__v:0},h.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(c({},n),this.props)),e&&c(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),m(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},h.prototype.render=p,t=[],n="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,y.__r=0,r=l,o=0;var E,P,F,U=0,j=[],L=e.__b,W=e.__r,O=e.diffed,q=e.__c,I=e.unmount;function B(t,n){e.__h&&e.__h(P,t,U||n),U=0;var _=P.__H||(P.__H={__:[],__h:[]});return t>=_.__.length&&_.__.push({}),_.__[t]}function R(e){return U=1,function(e,t,n){var _=B(E++,2);return _.t=e,_.__c||(_.__=[n?n(t):Q(void 0,t),function(e){var t=_.t(_.__[0],e);_.__[0]!==t&&(_.__=[t,_.__[1]],_.__c.setState({}))}],_.__c=P),_.__}(Q,e)}function Y(t,n){var _=B(E++,3);!e.__s&&K(_.__H,n)&&(_.__=t,_.__H=n,P.__H.__h.push(_))}function z(e,t){var n=B(E++,7);return K(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function $(e,t){return U=8,z((function(){return e}),t)}function G(){j.forEach((function(t){if(t.__P)try{t.__H.__h.forEach(X),t.__H.__h.forEach(J),t.__H.__h=[]}catch(n){t.__H.__h=[],e.__e(n,t.__v)}})),j=[]}e.__b=function(e){P=null,L&&L(e)},e.__r=function(e){W&&W(e),E=0;var t=(P=e.__c).__H;t&&(t.__h.forEach(X),t.__h.forEach(J),t.__h=[])},e.diffed=function(t){O&&O(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==j.push(n)&&F===e.requestAnimationFrame||((F=e.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(_),V&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);V&&(t=requestAnimationFrame(n))})(G)),P=void 0},e.__c=function(t,n){n.some((function(t){try{t.__h.forEach(X),t.__h=t.__h.filter((function(e){return!e.__||J(e)}))}catch(_){n.some((function(e){e.__h&&(e.__h=[])})),n=[],e.__e(_,t.__v)}})),q&&q(t,n)},e.unmount=function(t){I&&I(t);var n=t.__c;if(n&&n.__H)try{n.__H.__.forEach(X)}catch(t){e.__e(t,n.__v)}};var V="function"==typeof requestAnimationFrame;function X(e){var t=P;"function"==typeof e.__c&&e.__c(),P=t}function J(e){var t=P;e.__c=e.__(),P=t}function K(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function Q(e,t){return"function"==typeof t?t(e):t}function Z(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function ee(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function te(e){ee(1,arguments);const t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}const ne=["white","#ff80ce","#5dc300","#ff9021","#85abff","#00bed3"];class _e{constructor(e,t){this.x=e,this.y=-150-t,this.color=ne.sort(()=>Math.random()-.5)[0],this.dir=Math.sign(Math.random()-.5)}update(){this.y=200<this.y?-200:this.y+.4}}function re({x:e,y:t,color:n,dir:_}){return a("rect",{id:"test",fill:n,x:.4*Math.sin(.2*t)+e,y:t,width:5,height:5,transform:`skewX(${_*t/4})`})}function oe(){const[e,t]=R(()=>[...new Array(250)].map(()=>400*Math.random()).map((e,t)=>new _e(2*t-200,e)));return Y(()=>{let e=requestAnimationFrame((function n(){t(e=>e.map(e=>(e.update(),e))),e=requestAnimationFrame(n)}));return()=>cancelAnimationFrame(e)},[]),a("svg",{width:"100%",height:"100%",viewBox:"-100 -100 200 200",xmlns:"http://www.w3.org/2000/svg",style:{position:"fixed",top:"0",left:"0"}},e.map(e=>a(re,Object.assign({},e))))}function le(e){return function(e){ee(1,arguments);var t=te(e),n=new Date(0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}(function(e,t){ee(2,arguments);var n=te(e),_=Z(t);return isNaN(n)?new Date(NaN):(n.setFullYear(_),n)}(e,function(e){return ee(1,arguments),te(e).getFullYear()}(e)+1))}function ue(e){return function(e,t){ee(2,arguments);var n=te(e),_=te(t);return n.getTime()-_.getTime()}(le(e),e)}function ie(e){return function(e){return ee(1,arguments),1===te(e).getDate()}(e)&&1===function(e){return ee(1,arguments),te(e).getMonth()}(e)}function ce({milliseconds:e}){const t=e%1e3,n=e/1e3,_=n/60,r=_/60,o=r/24;return a("h1",{style:{height:"90vh",display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center"}},"新年まであと:"," ",a("br",null),Math.round(o%366),"日"," ",Math.round(r%24),"時間"," ",Math.round(_%60),"分"," ",Math.round(n%60),"秒"," ",t.toString().padStart(3,"0"))}var se=Object.freeze({__proto__:null,default:function(){const[e,t]=R(ue(new Date));return Y(()=>{const e=setTimeout(()=>t(ue(new Date)),100);return()=>clearTimeout(e)},[e]),a(p,null,a(ce,{milliseconds:e}),ie(new Date)&&a(oe,null))}});export{$ as A,T as B,M as S,z as d,se as i,R as l,a as v,Y as y};//# sourceMappingURL=index-a5c386ca.js.map
