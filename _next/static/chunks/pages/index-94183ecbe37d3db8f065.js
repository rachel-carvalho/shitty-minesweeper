_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,a=void 0!==r&&r,o=t.hasQuery;return n||a&&(void 0!==o&&o)}},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"6mSP":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("79zj")}])},"79zj":function(t,e,n){"use strict";n.r(e),function(t){var r=n("KQm4"),a=n("rePB"),o=n("ODXe"),i=n("1OyB"),u=n("vuIU"),s=n("Ji7U"),c=n("md7G"),l=n("foSv"),f=n("q1tI"),d=n.n(f),h=n("x+Gp"),p=d.a.createElement;function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var a=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}e.default=function(e){Object(s.a)(c,e);var n=y(c);function c(){return Object(i.a)(this,c),n.apply(this,arguments)}return Object(u.a)(c,[{key:"parseSearch",value:function(){var e,n,i,u,s,c,l=this.props;return i=l.defaultRows,n=l.defaultColumns,e=l.customBombs,(null!=(s=t.location)?s.search:void 0)&&(i||n||e)?(u=location.search.substring(1).split("&").map((function(t){var e,n,r=t.split("="),i=Object(o.a)(r,2);return e=i[0],n=i[1],Object(a.a)({},"".concat(e),n)})),c=Object.assign.apply(Object,Object(r.a)(u)),v(v({},this.props),c)):this.props}},{key:"render",value:function(){var t,e,n,r,a=this.parseSearch();return r=a.rows,e=a.columns,t=(n=a.customBombs)?parseInt(n):Math.round(e*r*.18),p(h.a,{rows:r,columns:e,bombs:t})}}],[{key:"getInitialProps",value:function(t){var e=t.query;t.req;return{rows:(null!=e?e.rows:void 0)||15,columns:(null!=e?e.columns:void 0)||10,customBombs:null!=e?e.bombs:void 0,defaultRows:!(null!=e?e.rows:void 0),defaultColumns:!(null!=e?e.columns:void 0)}}}]),c}(f.Component)}.call(this,n("yLpj"))},"8Kt/":function(t,e,n){"use strict";n("lSNA");e.__esModule=!0,e.defaultHead=l,e.default=void 0;var r,a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=c();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var o=r?Object.getOwnPropertyDescriptor(t,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=t[a]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),s=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return c=function(){return t},t}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var d=["name","httpEquiv","charSet","itemProp"];function h(t,e){return t.reduce((function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(f,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);t.has(i)?o=!1:t.add(i)}switch(a.type){case"title":case"base":e.has(a.type)?o=!1:e.add(a.type);break;case"meta":for(var u=0,s=d.length;u<s;u++){var c=d[u];if(a.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?o=!1:n.add(c);else{var l=a.props[c],f=r[c]||new Set;f.has(l)?o=!1:(f.add(l),r[c]=f)}}}return o}}()).reverse().map((function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})}))}function p(t){var e=t.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},e)}p.rewind=function(){};var b=p;e.default=b},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},BsWD:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("a3WO");function a(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FZuZ:function(t,e,n){"use strict";var r=n("1OyB"),a=n("vuIU"),o=n("JX7q"),i=n("Ji7U"),u=n("md7G"),s=n("foSv"),c=n("q1tI"),l=n.n(c).a.createElement;function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(s.a)(t);if(e){var a=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var d=function(t,e){if(!(t instanceof e))throw new Error("Bound instance method accessed before binding")};e.a=function(t){Object(i.a)(n,t);var e=f(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).calculateTime=a.calculateTime.bind(Object(o.a)(a)),a.handleRestart=a.handleRestart.bind(Object(o.a)(a)),a.state={elapsed:0},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){return this.intervalID=setInterval(this.calculateTime,1e3)}},{key:"componentWillUnmount",value:function(){return clearInterval(this.intervalID)}},{key:"calculateTime",value:function(){var t;return d(this,n),this.props.startedAt?(t=(this.props.endedAt||new Date)-this.props.startedAt,this.setState({elapsed:Math.round(t/1e3)})):this.setState({elapsed:0})}},{key:"handleRestart",value:function(){return d(this,n),this.setState({elapsed:0}),this.props.onRestart()}},{key:"render",value:function(){var t,e,n,r,a,o,i,u,s=this.props;return e=s.bombs,o=s.foundBombs,a=s.flagging,n=s.dead,u=s.won,t=s.best,i=s.onFlagToggle,r=this.state.elapsed,l("div",{id:"toolbar"},l("span",{id:"bombs"},(e-o).toString().padStart(e.toString().length,0)),l("button",{onClick:this.handleRestart},n?"\ud83d\ude35":u?"\ud83d\ude0e":"\ud83d\ude42"),l("button",{onClick:i},a?"\ud83d\udea9":"\ud83d\udca3"),l("time",null,r.toString().padStart(3,0)),t?l("span",{id:"best"},"Best: ",t.elapsed):void 0)}}]),n}(c.Component)},"Gqi+":function(t,e,n){"use strict";var r=n("KQm4"),a=n("ODXe"),o=n("1OyB"),i=n("vuIU"),u=n("JX7q"),s=n("Ji7U"),c=n("md7G"),l=n("foSv");Array.prototype.flat||Object.defineProperty(Array.prototype,"flat",{configurable:!0,value:function t(){var e=isNaN(arguments[0])?1:Number(arguments[0]);return e?Array.prototype.reduce.call(this,(function(n,r){return Array.isArray(r)?n.push.apply(n,t.call(r,e-1)):n.push(r),n}),[]):Array.prototype.slice.call(this)},writable:!0}),Array.prototype.flatMap||Object.defineProperty(Array.prototype,"flatMap",{configurable:!0,value:function(t){return Array.prototype.map.apply(this,arguments).flat()},writable:!0});var f=n("q1tI"),d=n.n(f),h=d.a.createElement;function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var a=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var b=function(t,e){if(!(t instanceof e))throw new Error("Bound instance method accessed before binding")},v=function(t){Object(s.a)(n,t);var e=p(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).componentDidUpdate=r.componentDidUpdate.bind(Object(u.a)(r)),r.handleClick=r.handleClick.bind(Object(u.a)(r)),r.initialState={open:!1,flagged:!1,exploded:!1},r.state=r.initialState,r}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(t){if(b(this,n),t.game!==this.props.game)return this.setState(this.initialState)}},{key:"handleClick",value:function(){var t,e,r,a;b(this,n);var o=this.props;if(t=o.dead,a=o.opened,r=o.flagging,e=this.state.flagged,!t&&(!e||r))return a||this.state.open?this.expand():r?this.flag():this.open()}},{key:"expand",value:function(){var t,e,n,r=this.props;return n=r.row,t=r.column,e=r.neighbors,(0,r.onExpand)(n,t,e)}},{key:"flag",value:function(){var t,e,n,r=this.props;return n=r.row,t=r.column,e=r.onFlag,this.setState((function(r){var a;return a=!r.flagged,e(n,t,a),{flagged:a}}))}},{key:"open",value:function(){var t,e,n,r,a,o=this.props;return a=o.row,e=o.column,t=o.bomb,n=o.onDeath,r=o.onOpen,this.setState({open:!0}),t?(this.setState({exploded:!0}),n(a,e)):r(a,e)}},{key:"render",value:function(){var t,e,n,r,a,o,i,u,s=this.props;s.row,s.column,t=s.bomb,o=s.neighbors,n=s.dead,u=s.opened;var c=this.state;return i=c.open,a=c.flagged,r=c.exploded,e=[],((i=i||u)||r||n&&t&&!a)&&e.push("open"),n&&a&&!t&&e.push("wrong-flag"),o&&e.push("neighbor"),o&&e.push("neighbor-".concat(o)),h("button",{onClick:this.handleClick,className:e.join(" ")},i&&o?o:void 0,!i&&!n||!t||r||a?void 0:"\ud83d\udca3",a?"\ud83d\udea9":void 0,r?"\ud83d\udca5":void 0)}}]),n}(f.Component),y=d.a.createElement;function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var a=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var g=function(t,e){if(!(t instanceof e))throw new Error("Bound instance method accessed before binding")};e.a=function(t){Object(s.a)(n,t);var e=m(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).componentDidUpdate=r.componentDidUpdate.bind(Object(u.a)(r)),r.handleOpen=r.handleOpen.bind(Object(u.a)(r)),r.handleFlag=r.handleFlag.bind(Object(u.a)(r)),r.handleDeath=r.handleDeath.bind(Object(u.a)(r)),r.handleExpand=r.handleExpand.bind(Object(u.a)(r)),r.initialState={distributed:!1,bombLocations:[],dead:!1,opened:[],flagged:[],game:""},r.state=r.initialState,r.recentlyOpened=[],r.couldHaveWon=!1,r}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(t){var e,r;if(g(this,n),t.started&&!this.props.started)return this.reset();if(this.firstOpening){var o=Object(a.a)(this.firstOpening,2);return r=o[0],e=o[1],this.firstOpening=null,this.handleOpen(r,e)}return this.cascadeOpening(),this.checkIfWon()}},{key:"reset",value:function(){return this.recentlyOpened=[],this.firstOpening=null,this.couldHaveWon=!1,this.setState(this.initialState)}},{key:"distribute",value:function(t,e){var n,r,o,i,u,s,c=this.props;return s=c.rows,i=c.columns,o=c.bombs,n=function(){for(var t=[],e=0;0<=s?e<s:e>s;0<=s?e++:e--)t.push(e);return t}.apply(this).map((function(t){return function(){for(var t=[],e=0;0<=i?e<i:e>i;0<=i?e++:e--)t.push(e);return t}.apply(this).map((function(e){return[t,e]}))})).flat().filter((function(n){var r,o,i=Object(a.a)(n,2);return o=i[0],r=i[1],o<t-1||o>t+1||r<e-1||r>e+1})),r=[],function(){for(var t=[],e=0;0<=o?e<o:e>o;0<=o?e++:e--)t.push(e);return t}.apply(this).forEach((function(){var t;return t=Math.round(Math.random()*(n.length-1)),r.push(n.splice(t,1)[0])})),r.sort((function(t,e){return"".concat(t[0],", ").concat(t[1])-"".concat(e[0],", ").concat(e[1])})),u=new Date,this.setState({distributed:!0,game:u,bombLocations:r}),this.props.onStart(u)}},{key:"bomb",value:function(t,e){return this.state.bombLocations.some((function(n){return n[0]===t&&n[1]===e}))}},{key:"neighbors",value:function(t,e){var n=this;if(!this.bomb(t,e))return this.surrounding(t,e).filter((function(t){return n.bomb.apply(n,Object(r.a)(t))})).length}},{key:"surrounding",value:function(t,e){var n,r,a,o=this.props;return a=o.rows,n=o.columns,function(){for(var e=[],n=r=t-1,a=t+1;r<=a?n<=a:n>=a;r<=a?n++:n--)e.push(n);return e}.apply(this).filter((function(t){return t>=0&&t<a})).map((function(t){var r;return function(){for(var t=[],n=r=e-1,a=e+1;r<=a?n<=a:n>=a;r<=a?n++:n--)t.push(n);return t}.apply(this).filter((function(t){return t>=0&&t<n})).map((function(e){return[t,e]}))})).flat()}},{key:"handleOpen",value:function(t,e){var r=this;return g(this,n),this.state.distributed?this.setState((function(n){var a;if(!n.opened.some((function(n){return n[0]===t&&n[1]===e})))return(a=n.opened.slice(0)).push([t,e]),r.recentlyOpened.push([t,e]),{opened:a}})):(this.distribute(t,e),this.firstOpening=[t,e])}},{key:"cascadeOpening",value:function(){var t,e,n,o,i,u=this;for(n=[];(e=this.recentlyOpened.shift())&&e;){var s=e,c=Object(a.a)(s,2);o=c[0],t=c[1],this.neighbors(o,t)?n.push(void 0):(i=this.surrounding(o,t),n.push(i.forEach((function(t){return u.handleOpen.apply(u,Object(r.a)(t))}))))}return n}},{key:"handleFlag",value:function(t,e,r){var a,o;g(this,n);var i=this.props;return a=i.onFlagAdded,o=i.onFlagRemoved,this.setState((function(n){var i;return i=n.flagged.slice(0),r?(i.push([t,e]),a(),this.couldHaveWon=!0):(i=i.filter((function(n){return n[0]!==t||n[1]!==e})),o()),{flagged:i}}))}},{key:"handleDeath",value:function(){return g(this,n),this.setState({dead:!0}),this.props.onDeath()}},{key:"opened",value:function(t,e){return this.state.opened.some((function(n){return n[0]===t&&n[1]===e}))}},{key:"flagged",value:function(t,e){return this.state.flagged.some((function(n){return n[0]===t&&n[1]===e}))}},{key:"handleExpand",value:function(t,e,a){var o,i,u=this;if(g(this,n),(i=(o=this.surrounding(t,e)).filter((function(t){return!u.flagged.apply(u,Object(r.a)(t))}))).length===o.length-a)return i.forEach((function(t){return u.bomb.apply(u,Object(r.a)(t))?u.handleDeath():(u.handleOpen.apply(u,Object(r.a)(t)),u.couldHaveWon=!0)}))}},{key:"checkIfWon",value:function(){var t,e;if(!this.props.won&&this.couldHaveWon)return t=this.state.flagged.length===this.props.bombs,e=this.state.opened.length===this.props.rows*this.props.columns-this.props.bombs,t&&e?this.props.onWin():void 0}},{key:"render",value:function(){var t,e,n,r,a,o=this,i=this.props;a=i.rows,t=i.columns,n=i.flagging;var u=this.state;return e=u.dead,r=u.game,y("div",{id:"board"},function(){for(var t=[],e=0;0<=a?e<a:e>a;0<=a?e++:e--)t.push(e);return t}.apply(this).map((function(a){return y("div",{className:"row",key:a},function(){for(var e=[],n=0;0<=t?n<t:n>t;0<=t?n++:n--)e.push(n);return e}.apply(o).map((function(t){return y(v,{key:t,row:a,column:t,flagging:n,bomb:o.bomb(a,t),opened:o.opened(a,t),dead:e,neighbors:o.neighbors(a,t),game:r,onFlag:o.handleFlag,onOpen:o.handleOpen,onExpand:o.handleExpand,onDeath:o.handleDeath})})))})))}}]),n}(f.Component)},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return a}))},KQm4:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("a3WO");var a=n("BsWD");function o(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},ODXe:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("BsWD");function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},RIqP:function(t,e,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");t.exports=function(t){return r(t)||a(t)||o(t)||i()}},Xuae:function(t,e,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=n("PJYZ"),u=n("7W2i"),s=n("a1gu"),c=n("Nsbk");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),d=!1,h=function(t){u(n,t);var e=l(n);function n(t){var o;return a(this,n),(o=e.call(this,t))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,d&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(i(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);e.default=h},YFqc:function(t,e,n){t.exports=n("cTJO")},a3WO:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},cTJO:function(t,e,n){"use strict";var r=n("J4zp"),a=n("284h");e.__esModule=!0,e.default=void 0;var o,i=a(n("q1tI")),u=n("g/15"),s=n("nOHt"),c=n("elyg");var l=new Map,f=window.IntersectionObserver,d={};var h=function(t,e){var n=o||(f?o=new f((function(t){t.forEach((function(t){if(l.has(t.target)){var e=l.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(o.unobserve(t.target),l.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(t),l.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}l.delete(t)}):function(){}};function p(t,e,n,r){t.prefetch(e,n,r).catch((function(t){0})),d[e+"%"+n]=!0}function b(t,e,n,r,a,o,i){var s=t.currentTarget,c=s.nodeName,l=s.target;"A"===c&&(l&&"_self"!==l||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)||function(t){var e=(0,u.getLocationOrigin)();return new URL(t,e).origin===e}(n)&&(t.preventDefault(),null==i&&(i=r.indexOf("#")<0),e[a?"replace":"push"](n,r,{shallow:o}).then((function(t){t&&i&&(window.scrollTo(0,0),document.body.focus())})))}var v=function(t){var e=!1!==t.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],u=a[1],l=(0,s.useRouter)(),v=l&&l.pathname||"/",y=i.default.useMemo((function(){var e=(0,c.resolveHref)(v,t.href);return{href:e,as:t.as?(0,c.resolveHref)(v,t.as):e}}),[v,t.href,t.as]),m=y.href,g=y.as;i.default.useEffect((function(){if(e&&f&&o&&o.tagName&&!d[m+"%"+g])return h(o,(function(){p(l,m,g)}))}),[e,o,m,g,l]);var O=t.children,w=t.replace,j=t.shallow,S=t.scroll;"string"===typeof O&&(O=i.default.createElement("a",null,O));var k=i.Children.only(O),C={ref:function(t){t&&u(t),k&&"object"===typeof k&&k.ref&&("function"===typeof k.ref?k.ref(t):"object"===typeof k.ref&&(k.ref.current=t))},onClick:function(t){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(t),t.defaultPrevented||b(t,l,m,g,w,j,S)}};return e&&(C.onMouseEnter=function(t){k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(t),p(l,m,g,{priority:!0})}),!t.passHref&&("a"!==k.type||"href"in k.props)||(C.href=(0,c.addBasePath)(g)),i.default.cloneElement(k,C)};e.default=v},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=a},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return o}));var a=n("JX7q");function o(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(a.a)(t):e}},oJTh:function(t,e,n){"use strict";var r=n("1OyB"),a=n("vuIU"),o=n("JX7q"),i=n("Ji7U"),u=n("md7G"),s=n("foSv"),c=n("q1tI"),l=n.n(c),f=n("YFqc"),d=n.n(f),h=n("nOHt"),p=n.n(h),b=l.a.createElement;function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(s.a)(t);if(e){var a=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var y=function(t,e){if(!(t instanceof e))throw new Error("Bound instance method accessed before binding")};e.a=function(t){Object(i.a)(n,t);var e=v(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).handleRowsChange=a.handleRowsChange.bind(Object(o.a)(a)),a.handleColumnsChange=a.handleColumnsChange.bind(Object(o.a)(a)),a.handleBombsChange=a.handleBombsChange.bind(Object(o.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(o.a)(a)),a.state={rows:null,columns:null,bombs:null},a}return Object(a.a)(n,[{key:"handleRowsChange",value:function(t){return y(this,n),this.setState({rows:t.target.value})}},{key:"handleColumnsChange",value:function(t){return y(this,n),this.setState({columns:t.target.value})}},{key:"handleBombsChange",value:function(t){return y(this,n),this.setState({bombs:t.target.value})}},{key:"handleSubmit",value:function(t){var e,r,a,o;y(this,n),t.preventDefault();var i=this.currentValues();return o=i.rows,r=i.columns,e=i.bombs,a="/?rows=".concat(o,"&columns=").concat(r,"&bombs=").concat(e),p.a.push(a,"/shitty-minesweeper"+a)}},{key:"currentValues",value:function(){var t,e,n,r=this.state;return n=r.rows,e=r.columns,t=r.bombs,null==n&&(n=this.props.rows),null==e&&(e=this.props.columns),t||(t=n&&e?Math.round(n*e*.18):""),{rows:n,columns:e,bombs:t}}},{key:"render",value:function(){var t,e,n,r,a;n=this.props.onClose;var o=this.currentValues();return a=o.rows,e=o.columns,t=o.bombs,r="".concat("/shitty-minesweeper","/"),b("section",{id:"settings"},b("h1",null,"Settings",b("button",{className:"close",onClick:n},"\u2715")),b("form",{onSubmit:this.handleSubmit},b("fieldset",null,b("legend",null,"Board size"),b("div",{className:"field"},b("label",{htmlFor:"rows"},"Rows: "),b("input",{id:"rows",name:"rows",type:"number",value:a,onChange:this.handleRowsChange})),b("div",{className:"field"},b("label",{htmlFor:"columns"},"Columns: "),b("input",{id:"columns",name:"columns",type:"number",value:e,onChange:this.handleColumnsChange})),b("div",{className:"field"},b("label",{htmlFor:"bombs"},"Bombs: "),b("input",{id:"bombs",name:"bombs",type:"number",value:t,onChange:this.handleBombsChange})),b("div",{className:"actions"},b(d.a,{href:"/",as:r},b("a",null,"Use defaults")),b("button",null,"Save")))))}}]),n}(c.Component)},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return a}))},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},"x+Gp":function(t,e,n){"use strict";(function(t){var r=n("wx14"),a=n("rePB"),o=n("1OyB"),i=n("vuIU"),u=n("JX7q"),s=n("Ji7U"),c=n("md7G"),l=n("foSv"),f=n("q1tI"),d=n.n(f),h=n("8Kt/"),p=n.n(h),b=n("FZuZ"),v=n("Gqi+"),y=n("oJTh"),m=(n("GNBN"),d.a.createElement);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var a=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var j=function(t,e){if(!(t instanceof e))throw new Error("Bound instance method accessed before binding")};e.a=function(e){Object(s.a)(a,e);var n=w(a);function a(){var t;return Object(o.a)(this,a),(t=n.call(this)).handleRestart=t.handleRestart.bind(Object(u.a)(t)),t.handleStart=t.handleStart.bind(Object(u.a)(t)),t.handleFlagToggle=t.handleFlagToggle.bind(Object(u.a)(t)),t.handleFlagAdded=t.handleFlagAdded.bind(Object(u.a)(t)),t.handleFlagRemoved=t.handleFlagRemoved.bind(Object(u.a)(t)),t.handleDeath=t.handleDeath.bind(Object(u.a)(t)),t.handleWin=t.handleWin.bind(Object(u.a)(t)),t.handleViewSettingsClick=t.handleViewSettingsClick.bind(Object(u.a)(t)),t.handleCloseSettings=t.handleCloseSettings.bind(Object(u.a)(t)),t.initialState={started:!1,flagging:!1,foundBombs:0,dead:!1,startedAt:null,endedAt:null,won:!1,best:null,settings:!1},t.state=O({},t.initialState),t}return Object(i.a)(a,[{key:"componentDidMount",value:function(){return this.setState({best:this.best()})}},{key:"handleRestart",value:function(){return j(this,a),this.setState(O(O({},this.initialState),{},{best:this.best()}))}},{key:"handleStart",value:function(t){return j(this,a),this.setState({started:!0,startedAt:t})}},{key:"handleFlagToggle",value:function(){return j(this,a),this.setState((function(t){return{flagging:!t.flagging}}))}},{key:"handleFlagAdded",value:function(){return j(this,a),this.setState((function(t){return{foundBombs:t.foundBombs+1}}))}},{key:"handleFlagRemoved",value:function(){return j(this,a),this.setState((function(t){return{foundBombs:t.foundBombs-1}}))}},{key:"handleDeath",value:function(){return j(this,a),this.setState({dead:!0,endedAt:new Date})}},{key:"storage",value:function(){return t.localStorage||{}}},{key:"handleWin",value:function(){var t;return j(this,a),t=new Date,this.saveTime(t),this.setState({won:!0,endedAt:t,best:this.best()})}},{key:"saveTime",value:function(t){var e,n,r,a,o,i,u=this.props;return i=u.rows,n=u.columns,e=u.bombs,r={startedAt:this.state.startedAt,endedAt:t},(o=this.records())[a="".concat(i,"x").concat(n,"_").concat(e)]||(o[a]=[]),o["".concat(i,"x").concat(n,"_").concat(e)].push(r),this.storage().shittyMinesweeper=JSON.stringify(o)}},{key:"records",value:function(){var t,e,n;if(!this.storage().shittyMinesweeper)return{};for(n in e=JSON.parse(this.storage().shittyMinesweeper),e)(t=e[n]).forEach((function(t){var e;return t.startedAt=new Date(Date.parse(t.startedAt)),t.endedAt=new Date(Date.parse(t.endedAt)),e=t.endedAt-t.startedAt,t.elapsed=Math.round(e/1e3)})),t.sort((function(t,e){return t.elapsed-e.elapsed}));return e}},{key:"best",value:function(){var t,e,n,r=this.props;return n=r.rows,e=r.columns,t=r.bombs,(this.records()["".concat(n,"x").concat(e,"_").concat(t)]||[])[0]}},{key:"handleViewSettingsClick",value:function(){return j(this,a),this.setState({settings:!0})}},{key:"handleCloseSettings",value:function(){return j(this,a),this.setState({settings:!1})}},{key:"render",value:function(){var t,e,n,a,o,i,u,s,c,l,d,h,g=this.state;l=g.started,d=g.startedAt,o=g.endedAt,i=g.flagging,u=g.foundBombs,a=g.dead,h=g.won,t=g.best,c=g.settings;var O=this.props;return s=O.rows,n=O.columns,e=O.bombs,m(f.Fragment,null,m(p.a,null,m("title",null,"Shitty Minesweeper"),m("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),c?m(y.a,Object(r.a)({},this.props,{onClose:this.handleCloseSettings})):m(f.Fragment,null,m("button",{id:"view-settings",onClick:this.handleViewSettingsClick},"\u2699\ufe0f"),m(b.a,{bombs:e,foundBombs:u,startedAt:d,endedAt:o,flagging:i,dead:a,won:h,best:t,onRestart:this.handleRestart,onFlagToggle:this.handleFlagToggle}),m(v.a,{flagging:i,rows:s,columns:n,bombs:e,started:l,won:h,onFlagAdded:this.handleFlagAdded,onStart:this.handleStart,onFlagRemoved:this.handleFlagRemoved,onDeath:this.handleDeath,onWin:this.handleWin})))}}]),a}(f.Component)}).call(this,n("yLpj"))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n}},[["6mSP",0,2,1,8]]]);