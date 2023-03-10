import{S as Z,i as J,s as K,C as Q,D as B,k as x,l as $,m as tt,h as T,E as F,b as I,F as q,G as k,H as et,I as st,J as at,K as ut,L as ft,g as y,d as E,M as dt,N,O as ht,o as Ht,P as mt,Q as Mt,w as _t,R as lt,y as U,a as vt,z as j,c as Pt,n as wt,A as Y,B as X,q as zt,r as Ft}from"../chunks/index.1b484c40.js";import{r as kt}from"../chunks/index.0be7dce7.js";import{_ as G,a as it,M as Nt,c as V,u as gt,f as St,d as Vt,b as Tt}from"../chunks/classAdderBuilder.1369a485.js";/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var C={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},z={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Ut={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ot=function(a){G(t,a);function t(e){return a.call(this,it(it({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"strings",{get:function(){return Ut},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return C},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return z},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.handleTargetScroll=function(){},t.prototype.handleWindowResize=function(){},t.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},t}(Nt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var w=0,W=function(a){G(t,a);function t(e){var s=a.call(this,e)||this;return s.wasDocked=!0,s.isDockedShowing=!0,s.currentAppBarOffsetTop=0,s.isCurrentlyBeingResized=!1,s.resizeThrottleId=w,s.resizeDebounceId=w,s.lastScrollPosition=s.adapter.getViewportScrollY(),s.topAppBarHeight=s.adapter.getTopAppBarHeight(),s}return t.prototype.destroy=function(){a.prototype.destroy.call(this),this.adapter.setStyle("top","")},t.prototype.handleTargetScroll=function(){var e=Math.max(this.adapter.getViewportScrollY(),0),s=e-this.lastScrollPosition;this.lastScrollPosition=e,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=s,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},t.prototype.handleWindowResize=function(){var e=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){e.resizeThrottleId=w,e.throttledResizeHandler()},z.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){e.handleTargetScroll(),e.isCurrentlyBeingResized=!1,e.resizeDebounceId=w},z.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},t.prototype.checkForUpdate=function(){var e=-this.topAppBarHeight,s=this.currentAppBarOffsetTop<0,r=this.currentAppBarOffsetTop>e,i=s&&r;if(i)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==r)return this.isDockedShowing=r,!0}else return this.wasDocked=!0,!0;return i},t.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var e=this.currentAppBarOffsetTop;Math.abs(e)>=this.topAppBarHeight&&(e=-z.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",e+"px")}},t.prototype.throttledResizeHandler=function(){var e=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==e&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-e,this.topAppBarHeight=e),this.handleTargetScroll()},t}(ot);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var jt=function(a){G(t,a);function t(){var e=a!==null&&a.apply(this,arguments)||this;return e.wasScrolled=!1,e}return t.prototype.handleTargetScroll=function(){var e=this.adapter.getViewportScrollY();e<=0?this.wasScrolled&&(this.adapter.removeClass(C.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(C.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},t}(W);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Yt=function(a){G(t,a);function t(e){var s=a.call(this,e)||this;return s.collapsed=!1,s.isAlwaysCollapsed=!1,s}return Object.defineProperty(t.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),t.prototype.init=function(){a.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(C.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(C.SHORT_COLLAPSED_CLASS))},t.prototype.setAlwaysCollapsed=function(e){this.isAlwaysCollapsed=!!e,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},t.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},t.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},t.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var e=this.adapter.getViewportScrollY();e<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},t.prototype.uncollapse=function(){this.adapter.removeClass(C.SHORT_COLLAPSED_CLASS),this.collapsed=!1},t.prototype.collapse=function(){this.adapter.addClass(C.SHORT_COLLAPSED_CLASS),this.collapsed=!0},t}(ot);const{window:ct}=Mt;function Xt(a){let t,e,s,r,i,f,p;const c=a[22].default,d=Q(c,a,a[21],null);let _=[{class:e=V({[a[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":a[4]==="short","mdc-top-app-bar--short-collapsed":a[0],"mdc-top-app-bar--fixed":a[4]==="fixed","smui-top-app-bar--static":a[4]==="static","smui-top-app-bar--color-secondary":a[5]==="secondary","mdc-top-app-bar--prominent":a[6],"mdc-top-app-bar--dense":a[7],...a[11]})},{style:s=Object.entries(a[12]).map(pt).concat([a[3]]).join(" ")},a[15]],l={};for(let o=0;o<_.length;o+=1)l=B(l,_[o]);return{c(){t=x("header"),d&&d.c(),this.h()},l(o){t=$(o,"HEADER",{class:!0,style:!0});var u=tt(t);d&&d.l(u),u.forEach(T),this.h()},h(){F(t,l)},m(o,u){I(o,t,u),d&&d.m(t,null),a[25](t),i=!0,f||(p=[q(ct,"resize",a[23]),q(ct,"scroll",a[24]),k(r=gt.call(null,t,a[1])),k(a[13].call(null,t)),q(t,"SMUITopAppBarIconButton:nav",a[26])],f=!0)},p(o,u){d&&d.p&&(!i||u[0]&2097152)&&et(d,c,o,o[21],i?at(c,o[21],u,null):st(o[21]),null),F(t,l=ut(_,[(!i||u[0]&2293&&e!==(e=V({[o[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":o[4]==="short","mdc-top-app-bar--short-collapsed":o[0],"mdc-top-app-bar--fixed":o[4]==="fixed","smui-top-app-bar--static":o[4]==="static","smui-top-app-bar--color-secondary":o[5]==="secondary","mdc-top-app-bar--prominent":o[6],"mdc-top-app-bar--dense":o[7],...o[11]})))&&{class:e},(!i||u[0]&4104&&s!==(s=Object.entries(o[12]).map(pt).concat([o[3]]).join(" ")))&&{style:s},u[0]&32768&&o[15]])),r&&ft(r.update)&&u[0]&2&&r.update.call(null,o[1])},i(o){i||(y(d,o),i=!0)},o(o){E(d,o),i=!1},d(o){o&&T(t),d&&d.d(o),a[25](null),f=!1,dt(p)}}}const pt=([a,t])=>`${a}: ${t};`;function Gt(a,t,e){const s=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let r=N(t,s),{$$slots:i={},$$scope:f}=t;const p=St(ht());let c=()=>{};function d(n){return n===c}let{use:_=[]}=t,{class:l=""}=t,{style:o=""}=t,{variant:u="standard"}=t,{color:D="primary"}=t,{collapsed:h=c}=t;const At=!d(h)&&!!h;d(h)&&(h=!1);let{prominent:L=!1}=t,{dense:R=!1}=t,{scrollTarget:S=void 0}=t,A,m,g={},b={},H,bt=kt({variant:u,prominent:L,dense:R},n=>{e(18,H=n)}),O,M=u;Ht(()=>(e(9,m=rt()),m.init(),()=>{m.destroy()}));function rt(){const n={static:ot,short:Yt,fixed:jt,standard:W}[u]||W;return new n({hasClass:Ct,addClass:yt,removeClass:Et,setStyle:Bt,getTopAppBarHeight:()=>A.clientHeight,notifyNavigationIconClicked:()=>Vt(A,"SMUITopAppBar:nav",void 0,void 0,!0),getViewportScrollY:()=>S==null?window.pageYOffset:S.scrollTop,getTotalActionItems:()=>A.querySelectorAll(".mdc-top-app-bar__action-item").length})}function Ct(n){return n in g?g[n]:nt().classList.contains(n)}function yt(n){g[n]||e(11,g[n]=!0,g)}function Et(n){(!(n in g)||g[n])&&e(11,g[n]=!1,g)}function Bt(n,P){b[n]!=P&&(P===""||P==null?(delete b[n],e(12,b),e(20,M),e(4,u),e(9,m)):e(12,b[n]=P,b))}function v(){m&&(m.handleTargetScroll(),u==="short"&&e(0,h="isCollapsed"in m&&m.isCollapsed))}function Ot(){return bt}function nt(){return A}const It=()=>u!=="short"&&u!=="fixed"&&m&&m.handleWindowResize(),Dt=()=>S==null&&v();function Lt(n){_t[n?"unshift":"push"](()=>{A=n,e(10,A)})}const Rt=()=>m&&m.handleNavigationClick();return a.$$set=n=>{t=B(B({},t),mt(n)),e(15,r=N(t,s)),"use"in n&&e(1,_=n.use),"class"in n&&e(2,l=n.class),"style"in n&&e(3,o=n.style),"variant"in n&&e(4,u=n.variant),"color"in n&&e(5,D=n.color),"collapsed"in n&&e(0,h=n.collapsed),"prominent"in n&&e(6,L=n.prominent),"dense"in n&&e(7,R=n.dense),"scrollTarget"in n&&e(8,S=n.scrollTarget),"$$scope"in n&&e(21,f=n.$$scope)},a.$$.update=()=>{a.$$.dirty[0]&262352&&H&&H({variant:u,prominent:L,dense:R}),a.$$.dirty[0]&1049104&&M!==u&&m&&(e(20,M=u),m.destroy(),e(11,g={}),e(12,b={}),e(9,m=rt()),m.init()),a.$$.dirty[0]&528&&m&&u==="short"&&"setAlwaysCollapsed"in m&&m.setAlwaysCollapsed(At),a.$$.dirty[0]&524544&&O!==S&&(O&&O.removeEventListener("scroll",v),S&&S.addEventListener("scroll",v),e(19,O=S))},[h,_,l,o,u,D,L,R,S,m,A,g,b,p,v,r,Ot,nt,H,O,M,f,i,It,Dt,Lt,Rt]}class qt extends Z{constructor(t){super(),J(this,t,Gt,Xt,K,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}const Wt=Tt({class:"mdc-top-app-bar__row",tag:"div"});function Zt(a){let t,e,s,r,i,f;const p=a[9].default,c=Q(p,a,a[8],null);let d=[{class:e=V({[a[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":a[2]==="start","mdc-top-app-bar__section--align-end":a[2]==="end"})},a[3]?{role:"toolbar"}:{},a[6]],_={};for(let l=0;l<d.length;l+=1)_=B(_,d[l]);return{c(){t=x("section"),c&&c.c(),this.h()},l(l){t=$(l,"SECTION",{class:!0});var o=tt(t);c&&c.l(o),o.forEach(T),this.h()},h(){F(t,_)},m(l,o){I(l,t,o),c&&c.m(t,null),a[10](t),r=!0,i||(f=[k(s=gt.call(null,t,a[0])),k(a[5].call(null,t))],i=!0)},p(l,[o]){c&&c.p&&(!r||o&256)&&et(c,p,l,l[8],r?at(p,l[8],o,null):st(l[8]),null),F(t,_=ut(d,[(!r||o&6&&e!==(e=V({[l[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":l[2]==="start","mdc-top-app-bar__section--align-end":l[2]==="end"})))&&{class:e},o&8&&(l[3]?{role:"toolbar"}:{}),o&64&&l[6]])),s&&ft(s.update)&&o&1&&s.update.call(null,l[0])},i(l){r||(y(c,l),r=!0)},o(l){E(c,l),r=!1},d(l){l&&T(t),c&&c.d(l),a[10](null),i=!1,dt(f)}}}function Jt(a,t,e){const s=["use","class","align","toolbar","getElement"];let r=N(t,s),{$$slots:i={},$$scope:f}=t;const p=St(ht());let{use:c=[]}=t,{class:d=""}=t,{align:_="start"}=t,{toolbar:l=!1}=t,o;lt("SMUI:icon-button:context",l?"top-app-bar:action":"top-app-bar:navigation"),lt("SMUI:button:context",l?"top-app-bar:action":"top-app-bar:navigation");function u(){return o}function D(h){_t[h?"unshift":"push"](()=>{o=h,e(4,o)})}return a.$$set=h=>{t=B(B({},t),mt(h)),e(6,r=N(t,s)),"use"in h&&e(0,c=h.use),"class"in h&&e(1,d=h.class),"align"in h&&e(2,_=h.align),"toolbar"in h&&e(3,l=h.toolbar),"$$scope"in h&&e(8,f=h.$$scope)},[c,d,_,l,o,p,r,u,f,i,D]}class Kt extends Z{constructor(t){super(),J(this,t,Jt,Zt,K,{use:0,class:1,align:2,toolbar:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}const Qt=Tt({class:"mdc-top-app-bar__title",tag:"span"});function xt(a){let t;return{c(){t=zt("Calculadora de Caudales")},l(e){t=Ft(e,"Calculadora de Caudales")},m(e,s){I(e,t,s)},d(e){e&&T(t)}}}function $t(a){let t,e;return t=new Qt({props:{$$slots:{default:[xt]},$$scope:{ctx:a}}}),{c(){U(t.$$.fragment)},l(s){j(t.$$.fragment,s)},m(s,r){Y(t,s,r),e=!0},p(s,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:s}),t.$set(i)},i(s){e||(y(t.$$.fragment,s),e=!0)},o(s){E(t.$$.fragment,s),e=!1},d(s){X(t,s)}}}function te(a){let t,e;return t=new Kt({props:{$$slots:{default:[$t]},$$scope:{ctx:a}}}),{c(){U(t.$$.fragment)},l(s){j(t.$$.fragment,s)},m(s,r){Y(t,s,r),e=!0},p(s,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:s}),t.$set(i)},i(s){e||(y(t.$$.fragment,s),e=!0)},o(s){E(t.$$.fragment,s),e=!1},d(s){X(t,s)}}}function ee(a){let t,e;return t=new Wt({props:{$$slots:{default:[te]},$$scope:{ctx:a}}}),{c(){U(t.$$.fragment)},l(s){j(t.$$.fragment,s)},m(s,r){Y(t,s,r),e=!0},p(s,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:s}),t.$set(i)},i(s){e||(y(t.$$.fragment,s),e=!0)},o(s){E(t.$$.fragment,s),e=!1},d(s){X(t,s)}}}function se(a){let t,e,s,r;e=new qt({props:{variant:"static",$$slots:{default:[ee]},$$scope:{ctx:a}}});const i=a[0].default,f=Q(i,a,a[1],null);return{c(){t=x("div"),U(e.$$.fragment),s=vt(),f&&f.c(),this.h()},l(p){t=$(p,"DIV",{class:!0});var c=tt(t);j(e.$$.fragment,c),c.forEach(T),s=Pt(p),f&&f.l(p),this.h()},h(){wt(t,"class","top-app-bar-container")},m(p,c){I(p,t,c),Y(e,t,null),I(p,s,c),f&&f.m(p,c),r=!0},p(p,[c]){const d={};c&2&&(d.$$scope={dirty:c,ctx:p}),e.$set(d),f&&f.p&&(!r||c&2)&&et(f,i,p,p[1],r?at(i,p[1],c,null):st(p[1]),null)},i(p){r||(y(e.$$.fragment,p),y(f,p),r=!0)},o(p){E(e.$$.fragment,p),E(f,p),r=!1},d(p){p&&T(t),X(e),p&&T(s),f&&f.d(p)}}}function ae(a,t,e){let{$$slots:s={},$$scope:r}=t;return a.$$set=i=>{"$$scope"in i&&e(1,r=i.$$scope)},[s,r]}class le extends Z{constructor(t){super(),J(this,t,ae,se,K,{})}}export{le as default};
