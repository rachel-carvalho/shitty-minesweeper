(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/eQG":function(e,t,n){n("v5Dd");var a=n("WEpk").Object;e.exports=function(e,t){return a.getOwnPropertyDescriptor(e,t)}},"4mXO":function(e,t,n){e.exports=n("7TPF")},"5pKv":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"6BQ9":function(e,t,n){e.exports=n("uekQ")},"6mSP":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("79zj");return{page:e.default||e}}])},"79zj":function(e,t,n){"use strict";n.r(t),function(e){var a=n("6BQ9"),r=n.n(a),o=n("zrwo"),i=n("UXZV"),s=n.n(i),l=n("dfwq"),u=n("vYYK"),c=n("doui"),d=n("0iUn"),h=n("sLSF"),f=n("MI3g"),p=n("a7VT"),b=n("Tit0"),m=n("q1tI"),v=n.n(m),g=n("x+Gp");t.default=function(t){function n(){return Object(d.default)(this,n),Object(f.default)(this,Object(p.default)(n).apply(this,arguments))}return Object(b.default)(n,t),Object(h.default)(n,[{key:"parseSearch",value:function(){var t,n,a,r,i,d,h=this.props;return a=h.defaultRows,n=h.defaultColumns,t=h.customBombs,(null!=(i=e.location)?i.search:void 0)&&(a||n||t)?(r=location.search.substring(1).split("&").map(function(e){var t,n,a=e.split("="),r=Object(c.default)(a,2);return t=r[0],n=r[1],Object(u.a)({},"".concat(t),n)}),d=s.a.apply(Object,Object(l.default)(r)),Object(o.a)({},this.props,d)):this.props}},{key:"render",value:function(){var e,t,n,a,o=this.parseSearch();return a=o.rows,t=o.columns,e=(n=o.customBombs)?r()(n):Math.round(t*a*.18),v.a.createElement(g.a,{rows:a,columns:t,bombs:e})}}],[{key:"getInitialProps",value:function(e){var t=e.query;e.req;return{rows:(null!=t?t.rows:void 0)||15,columns:(null!=t?t.columns:void 0)||10,customBombs:null!=t?t.bombs:void 0,defaultRows:!(null!=t?t.rows:void 0),defaultColumns:!(null!=t?t.columns:void 0)}}}]),n}(m.Component)}.call(this,n("yLpj"))},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"9Jkg":function(e,t,n){e.exports=n("oh+g")},FZuZ:function(e,t,n){"use strict";var a=n("0iUn"),r=n("sLSF"),o=n("MI3g"),i=n("a7VT"),s=n("AT/M"),l=n("Tit0"),u=n("q1tI"),c=n.n(u),d=function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")};t.a=function(e){function t(e){var n;return Object(a.default)(this,t),(n=Object(o.default)(this,Object(i.default)(t).call(this,e))).calculateTime=n.calculateTime.bind(Object(s.default)(n)),n.handleRestart=n.handleRestart.bind(Object(s.default)(n)),n.state={elapsed:0},n}return Object(l.default)(t,e),Object(r.default)(t,[{key:"componentDidMount",value:function(){return this.intervalID=setInterval(this.calculateTime,1e3)}},{key:"componentWillUnmount",value:function(){return clearInterval(this.intervalID)}},{key:"calculateTime",value:function(){var e;return d(this,t),this.props.startedAt?(e=(this.props.endedAt||new Date)-this.props.startedAt,this.setState({elapsed:Math.round(e/1e3)})):this.setState({elapsed:0})}},{key:"handleRestart",value:function(){return d(this,t),this.setState({elapsed:0}),this.props.onRestart()}},{key:"render",value:function(){var e,t,n,a,r,o,i,s,l,u=this.props;return t=u.bombs,o=u.foundBombs,r=u.flagging,n=u.dead,l=u.won,e=u.best,i=u.onFlagToggle,a=this.state.elapsed,s=t-o,c.a.createElement("div",{id:"toolbar"},c.a.createElement("span",{id:"bombs"},s.toString().padStart(t.toString().length,0)),c.a.createElement("button",{onClick:this.handleRestart},n?"😵":l?"😎":"🙂"),c.a.createElement("button",{onClick:i},r?"🚩":"💣"),c.a.createElement("time",null,a.toString().padStart(3,0)),e?c.a.createElement("span",{id:"best"},"Best: ",e.elapsed):void 0)}}]),t}(u.Component)},"Gqi+":function(e,t,n){"use strict";var a=n("dfwq"),r=n("doui"),o=n("0iUn"),i=n("sLSF"),s=n("MI3g"),l=n("a7VT"),u=n("AT/M"),c=n("Tit0");Array.prototype.flat||Object.defineProperty(Array.prototype,"flat",{configurable:!0,value:function e(){var t=isNaN(arguments[0])?1:Number(arguments[0]);return t?Array.prototype.reduce.call(this,function(n,a){return Array.isArray(a)?n.push.apply(n,e.call(a,t-1)):n.push(a),n},[]):Array.prototype.slice.call(this)},writable:!0}),Array.prototype.flatMap||Object.defineProperty(Array.prototype,"flatMap",{configurable:!0,value:function(e){return Array.prototype.map.apply(this,arguments).flat()},writable:!0});var d=n("q1tI"),h=n.n(d),f=function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")},p=function(e){function t(e){var n;return Object(o.default)(this,t),(n=Object(s.default)(this,Object(l.default)(t).call(this,e))).componentDidUpdate=n.componentDidUpdate.bind(Object(u.default)(n)),n.handleClick=n.handleClick.bind(Object(u.default)(n)),n.initialState={open:!1,flagged:!1,exploded:!1},n.state=n.initialState,n}return Object(c.default)(t,e),Object(i.default)(t,[{key:"componentDidUpdate",value:function(e){if(f(this,t),e.game!==this.props.game)return this.setState(this.initialState)}},{key:"handleClick",value:function(){var e,n,a;f(this,t);var r=this.props;if(e=r.dead,a=r.opened,n=r.flagging,!e)return a||this.state.open?this.expand():n?this.flag():this.open()}},{key:"expand",value:function(){var e,t,n,a=this.props;return n=a.row,e=a.column,t=a.neighbors,(0,a.onExpand)(n,e,t)}},{key:"flag",value:function(){var e,t,n,a=this.props;return n=a.row,e=a.column,t=a.onFlag,this.setState(function(a){var r;return r=!a.flagged,t(n,e,r),{flagged:r}})}},{key:"open",value:function(){var e,t,n,a,r,o=this.props;return r=o.row,t=o.column,e=o.bomb,n=o.onDeath,a=o.onOpen,this.setState({open:!0}),e?(this.setState({exploded:!0}),n(r,t)):a(r,t)}},{key:"render",value:function(){var e,t,n,a,r,o,i,s,l=this.props;l.row,l.column,e=l.bomb,o=l.neighbors,n=l.dead,s=l.opened;var u=this.state;return i=u.open,r=u.flagged,a=u.exploded,t=[],((i=i||s)||a||n&&e&&!r)&&t.push("open"),n&&r&&!e&&t.push("wrong-flag"),o&&t.push("neighbor"),o&&t.push("neighbor-".concat(o)),h.a.createElement("button",{onClick:this.handleClick,className:t.join(" ")},i&&o?o:void 0,!i&&!n||!e||a||r?void 0:"💣",r?"🚩":void 0,a?"💥":void 0)}}]),t}(d.Component),b=function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")};t.a=function(e){function t(e){var n;return Object(o.default)(this,t),(n=Object(s.default)(this,Object(l.default)(t).call(this,e))).componentDidUpdate=n.componentDidUpdate.bind(Object(u.default)(n)),n.handleOpen=n.handleOpen.bind(Object(u.default)(n)),n.handleFlag=n.handleFlag.bind(Object(u.default)(n)),n.handleDeath=n.handleDeath.bind(Object(u.default)(n)),n.handleExpand=n.handleExpand.bind(Object(u.default)(n)),n.initialState={distributed:!1,bombLocations:[],dead:!1,opened:[],flagged:[],game:""},n.state=n.initialState,n.recentlyOpened=[],n.couldHaveWon=!1,n}return Object(c.default)(t,e),Object(i.default)(t,[{key:"componentDidUpdate",value:function(e){var n,a;if(b(this,t),e.started&&!this.props.started)return this.reset();if(this.firstOpening){var o=Object(r.default)(this.firstOpening,2);return a=o[0],n=o[1],this.firstOpening=null,this.handleOpen(a,n)}return this.cascadeOpening(),this.checkIfWon()}},{key:"reset",value:function(){return this.recentlyOpened=[],this.firstOpening=null,this.couldHaveWon=!1,this.setState(this.initialState)}},{key:"distribute",value:function(e,t){var n,a,r,o,i,s,l=this.props;return s=l.rows,o=l.columns,r=l.bombs,n=function(){for(var e=[],t=0;0<=s?t<s:t>s;0<=s?t++:t--)e.push(t);return e}.apply(this).map(function(e){return function(){for(var e=[],t=0;0<=o?t<o:t>o;0<=o?t++:t--)e.push(t);return e}.apply(this).map(function(t){return[e,t]})}).flat().filter(function(n){return n[0]!==e||n[1]!==t}),a=[],function(){for(var e=[],t=0;0<=r?t<r:t>r;0<=r?t++:t--)e.push(t);return e}.apply(this).forEach(function(){var e;return e=Math.round(Math.random()*(n.length-1)),a.push(n.splice(e,1)[0])}),a.sort(function(e,t){return"".concat(e[0],", ").concat(e[1])-"".concat(t[0],", ").concat(t[1])}),i=new Date,this.setState({distributed:!0,game:i,bombLocations:a}),this.props.onStart(i)}},{key:"bomb",value:function(e,t){return this.state.bombLocations.some(function(n){return n[0]===e&&n[1]===t})}},{key:"neighbors",value:function(e,t){var n=this;if(!this.bomb(e,t))return this.surrounding(e,t).filter(function(e){return n.bomb.apply(n,Object(a.default)(e))}).length}},{key:"surrounding",value:function(e,t){var n,a,r,o=this.props;return r=o.rows,n=o.columns,function(){for(var t=[],n=a=e-1,r=e+1;a<=r?n<=r:n>=r;a<=r?n++:n--)t.push(n);return t}.apply(this).filter(function(e){return e>=0&&e<r}).map(function(e){var a;return function(){for(var e=[],n=a=t-1,r=t+1;a<=r?n<=r:n>=r;a<=r?n++:n--)e.push(n);return e}.apply(this).filter(function(e){return e>=0&&e<n}).map(function(t){return[e,t]})}).flat()}},{key:"handleOpen",value:function(e,n){var a=this;return b(this,t),this.state.distributed?this.setState(function(t){var r;if(!t.opened.some(function(t){return t[0]===e&&t[1]===n}))return(r=t.opened.slice(0)).push([e,n]),a.recentlyOpened.push([e,n]),{opened:r}}):(this.distribute(e,n),this.firstOpening=[e,n])}},{key:"cascadeOpening",value:function(){var e,t,n,o,i,s=this;for(n=[];(t=this.recentlyOpened.shift())&&t;){var l=t,u=Object(r.default)(l,2);o=u[0],e=u[1],this.neighbors(o,e)?n.push(void 0):(i=this.surrounding(o,e),n.push(i.forEach(function(e){return s.handleOpen.apply(s,Object(a.default)(e))})))}return n}},{key:"handleFlag",value:function(e,n,a){var r,o;b(this,t);var i=this.props;return r=i.onFlagAdded,o=i.onFlagRemoved,this.setState(function(t){var i;return i=t.flagged.slice(0),a?(i.push([e,n]),r(),this.couldHaveWon=!0):(i=i.filter(function(t){return t[0]!==e||t[1]!==n}),o()),{flagged:i}})}},{key:"handleDeath",value:function(){return b(this,t),this.setState({dead:!0}),this.props.onDeath()}},{key:"opened",value:function(e,t){return this.state.opened.some(function(n){return n[0]===e&&n[1]===t})}},{key:"flagged",value:function(e,t){return this.state.flagged.some(function(n){return n[0]===e&&n[1]===t})}},{key:"handleExpand",value:function(e,n,r){var o,i,s=this;if(b(this,t),(i=(o=this.surrounding(e,n)).filter(function(e){return!s.flagged.apply(s,Object(a.default)(e))})).length===o.length-r)return i.forEach(function(e){return s.bomb.apply(s,Object(a.default)(e))?s.handleDeath():(s.handleOpen.apply(s,Object(a.default)(e)),s.couldHaveWon=!0)})}},{key:"checkIfWon",value:function(){var e,t;if(!this.props.won&&this.couldHaveWon)return e=this.state.flagged.length===this.props.bombs,t=this.state.opened.length===this.props.rows*this.props.columns-this.props.bombs,e&&t?this.props.onWin():void 0}},{key:"render",value:function(){var e,t,n,a,r,o=this,i=this.props;r=i.rows,e=i.columns,n=i.flagging;var s=this.state;return t=s.dead,a=s.game,h.a.createElement("div",{id:"board"},function(){for(var e=[],t=0;0<=r?t<r:t>r;0<=r?t++:t--)e.push(t);return e}.apply(this).map(function(r){return h.a.createElement("div",{className:"row",key:r},function(){for(var t=[],n=0;0<=e?n<e:n>e;0<=e?n++:n--)t.push(n);return t}.apply(o).map(function(e){return h.a.createElement(p,{key:e,row:r,column:e,flagging:n,bomb:o.bomb(r,e),opened:o.opened(r,e),dead:t,neighbors:o.neighbors(r,e),game:a,onFlag:o.handleFlag,onOpen:o.handleOpen,onExpand:o.handleExpand,onDeath:o.handleDeath})}))}))}}]),t}(d.Component)},"Jo+v":function(e,t,n){e.exports=n("/eQG")},XWtR:function(e,t,n){var a=n("5T2Y").parseInt,r=n("oc46").trim,o=n("5pKv"),i=/^[-+]?0[xX]/;e.exports=8!==a(o+"08")||22!==a(o+"0x16")?function(e,t){var n=r(String(e),3);return a(n,t>>>0||(i.test(n)?16:10))}:a},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("KI45"),r=a(n("9Jkg")),o=a(n("iZP3")),i=a(n("/HRN")),s=a(n("WaGi")),l=a(n("ZDA2")),u=a(n("/+P4")),c=a(n("N9n2")),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},h=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var f=n("CxY0"),p=d(n("q1tI")),b=(h(n("17x9")),d(n("20a2"))),m=n("Bu4q");var v=function(e){function t(){var e,n,a,r,s;return(0,i.default)(this,t),(e=(0,l.default)(this,(0,u.default)(t).apply(this,arguments))).formatUrls=(n=function(e,t){return{href:e&&"object"===(0,o.default)(e)?m.formatWithValidation(e):e,as:t&&"object"===(0,o.default)(t)?m.formatWithValidation(t):t}},a=null,r=null,s=null,function(e,t){if(e===a&&t===r)return s;var o=n(e,t);return a=e,r=t,s=o,o}),e.linkClicked=function(t){var n=t.currentTarget,a=n.nodeName,r=n.target;if("A"!==a||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),i=o.href,s=o.as;if(function(e){var t=f.parse(e,!1,!0),n=f.parse(m.getLocationOrigin(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var l=window.location.pathname;i=f.resolve(l,i),s=s?f.resolve(l,s):i,t.preventDefault();var u=e.props.scroll;null==u&&(u=s.indexOf("#")<0),b.default[e.props.replace?"replace":"push"](i,s,{shallow:e.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,r.default)(this.props.href)!==(0,r.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=f.resolve(e,t);b.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"==typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),i={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=r||a),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=b.Router._rewriteUrlForNextExport(i.href)),p.default.cloneElement(o,i)}}]),t}(p.Component);t.default=v},dEVD:function(e,t,n){var a=n("Y7ZC"),r=n("XWtR");a(a.G+a.F*(parseInt!=r),{parseInt:r})},kOwS:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("UXZV"),r=n.n(a);function o(){return(o=r.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}},oJTh:function(e,t,n){"use strict";var a=n("0iUn"),r=n("sLSF"),o=n("MI3g"),i=n("a7VT"),s=n("AT/M"),l=n("Tit0"),u=n("q1tI"),c=n.n(u),d=n("YFqc"),h=n.n(d),f=n("20a2"),p=n.n(f),b=function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")};t.a=function(e){function t(e){var n;return Object(a.default)(this,t),(n=Object(o.default)(this,Object(i.default)(t).call(this,e))).handleRowsChange=n.handleRowsChange.bind(Object(s.default)(n)),n.handleColumnsChange=n.handleColumnsChange.bind(Object(s.default)(n)),n.handleBombsChange=n.handleBombsChange.bind(Object(s.default)(n)),n.handleSubmit=n.handleSubmit.bind(Object(s.default)(n)),n.state={rows:null,columns:null,bombs:null},n}return Object(l.default)(t,e),Object(r.default)(t,[{key:"handleRowsChange",value:function(e){return b(this,t),this.setState({rows:e.target.value})}},{key:"handleColumnsChange",value:function(e){return b(this,t),this.setState({columns:e.target.value})}},{key:"handleBombsChange",value:function(e){return b(this,t),this.setState({bombs:e.target.value})}},{key:"handleSubmit",value:function(e){var n,a,r,o;b(this,t),e.preventDefault();var i=this.currentValues();return o=i.rows,a=i.columns,n=i.bombs,r="/?rows=".concat(o,"&columns=").concat(a,"&bombs=").concat(n),p.a.push(r,"/shitty-minesweeper"+r)}},{key:"currentValues",value:function(){var e,t,n,a=this.state;return n=a.rows,t=a.columns,e=a.bombs,null==n&&(n=this.props.rows),null==t&&(t=this.props.columns),e||(e=n&&t?Math.round(n*t*.18):""),{rows:n,columns:t,bombs:e}}},{key:"render",value:function(){var e,t,n,a,r;n=this.props.onClose;var o=this.currentValues();return r=o.rows,t=o.columns,e=o.bombs,a="".concat("/shitty-minesweeper","/"),c.a.createElement("section",{id:"settings"},c.a.createElement("h1",null,"Settings",c.a.createElement("button",{className:"close",onClick:n},"✕")),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("fieldset",null,c.a.createElement("legend",null,"Board size"),c.a.createElement("div",{className:"field"},c.a.createElement("label",{htmlFor:"rows"},"Rows: "),c.a.createElement("input",{id:"rows",name:"rows",type:"number",value:r,onChange:this.handleRowsChange})),c.a.createElement("div",{className:"field"},c.a.createElement("label",{htmlFor:"columns"},"Columns: "),c.a.createElement("input",{id:"columns",name:"columns",type:"number",value:t,onChange:this.handleColumnsChange})),c.a.createElement("div",{className:"field"},c.a.createElement("label",{htmlFor:"bombs"},"Bombs: "),c.a.createElement("input",{id:"bombs",name:"bombs",type:"number",value:e,onChange:this.handleBombsChange})),c.a.createElement("div",{className:"actions"},c.a.createElement(h.a,{href:"/",as:a},c.a.createElement("a",null,"Use defaults")),c.a.createElement("button",null,"Save")))))}}]),t}(u.Component)},oc46:function(e,t,n){var a=n("Y7ZC"),r=n("Jes0"),o=n("KUxP"),i=n("5pKv"),s="["+i+"]",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),c=function(e,t,n){var r={},s=o(function(){return!!i[e]()||"​"!="​"[e]()}),l=r[e]=s?t(d):i[e];n&&(r[n]=l),a(a.P+a.F*s,"String",r)},d=c.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=c},"oh+g":function(e,t,n){var a=n("WEpk"),r=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},uekQ:function(e,t,n){n("dEVD"),e.exports=n("WEpk").parseInt},v5Dd:function(e,t,n){var a=n("NsO/"),r=n("vwuL").f;n("zn7N")("getOwnPropertyDescriptor",function(){return function(e,t){return r(a(e),t)}})},vYYK:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("hfKm"),r=n.n(a);function o(e,t,n){return t in e?r()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},"x+Gp":function(e,t,n){"use strict";(function(e){var a=n("kOwS"),r=n("9Jkg"),o=n.n(r),i=n("zrwo"),s=n("0iUn"),l=n("sLSF"),u=n("MI3g"),c=n("a7VT"),d=n("AT/M"),h=n("Tit0"),f=n("q1tI"),p=n.n(f),b=n("PgRs"),m=n.n(b),v=n("FZuZ"),g=n("Gqi+"),y=n("oJTh"),w=(n("GNBN"),function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")});t.a=function(t){function n(){var e;return Object(s.default)(this,n),(e=Object(u.default)(this,Object(c.default)(n).call(this))).handleRestart=e.handleRestart.bind(Object(d.default)(e)),e.handleStart=e.handleStart.bind(Object(d.default)(e)),e.handleFlagToggle=e.handleFlagToggle.bind(Object(d.default)(e)),e.handleFlagAdded=e.handleFlagAdded.bind(Object(d.default)(e)),e.handleFlagRemoved=e.handleFlagRemoved.bind(Object(d.default)(e)),e.handleDeath=e.handleDeath.bind(Object(d.default)(e)),e.handleWin=e.handleWin.bind(Object(d.default)(e)),e.handleViewSettingsClick=e.handleViewSettingsClick.bind(Object(d.default)(e)),e.handleCloseSettings=e.handleCloseSettings.bind(Object(d.default)(e)),e.initialState={started:!1,flagging:!1,foundBombs:0,dead:!1,startedAt:null,endedAt:null,won:!1,best:null,settings:!1},e.state=Object(i.a)({},e.initialState),e}return Object(h.default)(n,t),Object(l.default)(n,[{key:"componentDidMount",value:function(){return this.setState({best:this.best()})}},{key:"handleRestart",value:function(){return w(this,n),this.setState(Object(i.a)({},this.initialState,{best:this.best()}))}},{key:"handleStart",value:function(e){return w(this,n),this.setState({started:!0,startedAt:e})}},{key:"handleFlagToggle",value:function(){return w(this,n),this.setState(function(e){return{flagging:!e.flagging}})}},{key:"handleFlagAdded",value:function(){return w(this,n),this.setState(function(e){return{foundBombs:e.foundBombs+1}})}},{key:"handleFlagRemoved",value:function(){return w(this,n),this.setState(function(e){return{foundBombs:e.foundBombs-1}})}},{key:"handleDeath",value:function(){return w(this,n),this.setState({dead:!0,endedAt:new Date})}},{key:"storage",value:function(){return e.localStorage||{}}},{key:"handleWin",value:function(){var e;return w(this,n),e=new Date,this.saveTime(e),this.setState({won:!0,endedAt:e,best:this.best()})}},{key:"saveTime",value:function(e){var t,n,a,r,i,s,l=this.props;return s=l.rows,n=l.columns,t=l.bombs,a={startedAt:this.state.startedAt,endedAt:e},(i=this.records())[r="".concat(s,"x").concat(n,"_").concat(t)]||(i[r]=[]),i["".concat(s,"x").concat(n,"_").concat(t)].push(a),this.storage().shittyMinesweeper=o()(i)}},{key:"records",value:function(){var e,t,n;if(!this.storage().shittyMinesweeper)return{};for(n in t=JSON.parse(this.storage().shittyMinesweeper),t)(e=t[n]).forEach(function(e){var t;return e.startedAt=new Date(Date.parse(e.startedAt)),e.endedAt=new Date(Date.parse(e.endedAt)),t=e.endedAt-e.startedAt,e.elapsed=Math.round(t/1e3)}),e.sort(function(e,t){return e.elapsed-t.elapsed});return t}},{key:"best",value:function(){var e,t,n,a=this.props;return n=a.rows,t=a.columns,e=a.bombs,(this.records()["".concat(n,"x").concat(t,"_").concat(e)]||[])[0]}},{key:"handleViewSettingsClick",value:function(){return w(this,n),this.setState({settings:!0})}},{key:"handleCloseSettings",value:function(){return w(this,n),this.setState({settings:!1})}},{key:"render",value:function(){var e,t,n,r,o,i,s,l,u,c,d,h,b=this.state;c=b.started,d=b.startedAt,o=b.endedAt,i=b.flagging,s=b.foundBombs,r=b.dead,h=b.won,e=b.best,u=b.settings;var w=this.props;return l=w.rows,n=w.columns,t=w.bombs,p.a.createElement(f.Fragment,null,p.a.createElement(m.a,null,p.a.createElement("title",null,"Shitty Minesweeper"),p.a.createElement("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),u?p.a.createElement(y.a,Object(a.a)({},this.props,{onClose:this.handleCloseSettings})):p.a.createElement(f.Fragment,null,p.a.createElement("button",{id:"view-settings",onClick:this.handleViewSettingsClick},"⚙️"),p.a.createElement(v.a,{bombs:t,foundBombs:s,startedAt:d,endedAt:o,flagging:i,dead:r,won:h,best:e,onRestart:this.handleRestart,onFlagToggle:this.handleFlagToggle}),p.a.createElement(g.a,{flagging:i,rows:l,columns:n,bombs:t,started:c,won:h,onFlagAdded:this.handleFlagAdded,onStart:this.handleStart,onFlagRemoved:this.handleFlagRemoved,onDeath:this.handleDeath,onWin:this.handleWin})))}}]),n}(f.Component)}).call(this,n("yLpj"))},zrwo:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n("Jo+v"),r=n.n(a),o=n("4mXO"),i=n.n(o),s=n("pLtp"),l=n.n(s),u=n("vYYK");function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=l()(n);"function"==typeof i.a&&(a=a.concat(i()(n).filter(function(e){return r()(n,e).enumerable}))),a.forEach(function(t){Object(u.a)(e,t,n[t])})}return e}}},[["6mSP",1,0,6]]]);