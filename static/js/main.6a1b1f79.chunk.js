(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,n){e.exports=n(364)},153:function(e,t,n){},155:function(e,t,n){},173:function(e,t){},175:function(e,t){},364:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(69),i=n.n(o),c=(n(153),n(70)),l=n(71),u=n(73),s=n(72),f=n(74),v=(n(155),n(2)),m=n(3);function d(){var e=Object(v.a)(["\n    padding: 40px;\n"]);return d=function(){return e},e}var p=m.b.div(d()),b=n(100),C=n(103),g=n(49),h=n(17),E=n.n(h),y=n(50),x=n(29),O=n.n(x),j=n(101),k=n.n(j),F=n(362),S=10,A=10,w=a.a.createContext(),D=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).componentDidMount=function(){n.fetchCoins(),n.fetchPrices(),n.fetchHistorical()},n.fetchCoins=Object(y.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.coinList();case 2:t=e.sent.Data,n.setState({coinList:t});case 4:case"end":return e.stop()}},e,this)})),n.fetchPrices=Object(y.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("First "+n.state.firstVisit),!n.state.firstVisit){e.next=6;break}return console.log("First - Not fetching"+n.state.firstVisit),e.abrupt("return");case 6:return e.next=8,n.prices();case 8:t=e.sent,n.setState({prices:t});case 10:case"end":return e.stop()}},e,this)})),n.fetchHistorical=Object(y.a)(E.a.mark(function e(){var t,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.firstVisit){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.historical();case 4:t=e.sent,r=[{name:n.state.currentFavorite,data:t.map(function(e,t){return[k()().subtract(Object(g.a)({},n.state.timeInterval,A-t)).valueOf(),e.USD]})}],n.setState({historical:r});case 7:case"end":return e.stop()}},e,this)})),n.prices=Object(y.a)(E.a.mark(function e(){var t,r,a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=[],r=0;case 2:if(!(r<n.state.favorites.length)){e.next=16;break}return e.prev=3,e.next=6,F.priceFull(n.state.favorites[r],"USD");case 6:a=e.sent,t.push(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.warn("Fetch price error"+e.t0);case 13:r++,e.next=2;break;case 16:return e.abrupt("return",t);case 17:case"end":return e.stop()}},e,this,[[3,10]])})),n.historical=function(){for(var e=[],t=A;t>0;t--)e.push(F.priceHistorical(n.state.currentFavorite,["USD"],k()().subtract(Object(g.a)({},n.state.timeInterval,t)).toDate()));return Promise.all(e)},n.addCoin=function(e){var t=Object(C.a)(n.state.favorites);t.length<S&&(t.push(e),n.setState({favorites:t}))},n.removeCoin=function(e){var t=Object(C.a)(n.state.favorites);n.setState({favorites:x.pull(t,e)})},n.isInFavorites=function(e){return x.includes(n.state.favorites,e)},n.confirmFavorites=function(){var e=n.state.favorites[0];n.setState({firstVisit:!1,page:"dashboard",currentFavorite:e,prices:null,historical:null},function(){n.fetchPrices(),n.fetchHistorical()}),localStorage.setItem("cryptoDash",JSON.stringify({favorites:n.state.favorites,currentFavorite:e}))},n.setCurrentFavorite=function(e){n.setState({currentFavorite:e},n.fetchHistorical),localStorage.setItem("cryptoDash",JSON.stringify(Object(b.a)({},JSON.parse(localStorage.getItem("cryptoDash")),{currentFavorite:e})))},n.savedSettings=function(){var e=JSON.parse(localStorage.getItem("cryptoDash"));return e?{favorites:e.favorites,currentFavorite:e.currentFavorite}:(console.log("Saving Settings:"),{page:"settings",firstVisit:!0})},n.setPage=function(e){return n.setState({page:e})},n.setFilteredCoins=function(e){return n.setState({filteredCoins:e})},n.changeChartSelect=function(e){console.log(e),n.setState({timeInterval:e})},n.state=Object(b.a)({page:"dashboard",firstVisit:!1,timeInterval:"months",favorites:["BTC","ETH","XMR","DOGE"]},n.savedSettings(),{setPage:n.setPage,addCoin:n.addCoin,removeCoin:n.removeCoin,isInFavorites:n.isInFavorites,confirmFavorites:n.confirmFavorites,setCurrentFavorite:n.setCurrentFavorite,setFilteredCoins:n.setFilteredCoins,changeChartSelect:n.changeChartSelect}),n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(w.Provider,{value:this.state},this.props.children)}}]),t}(a.a.Component);function B(){var e=Object(v.a)(["\n        text-shadow: 0px 0px 60px #03ff03;\n    "]);return B=function(){return e},e}function H(){var e=Object(v.a)(["\n    cursor:pointer;\n    ","\n"]);return H=function(){return e},e}function L(){var e=Object(v.a)(["\n    display:grid;\n    grid-template-columns:180px auto 100px 100px;\n"]);return L=function(){return e},e}var P=m.b.div(L()),V=m.b.div(H(),function(e){return e.active&&Object(m.a)(B())});function I(e){var t=e.name;e.active;return a.a.createElement(w.Consumer,null,function(e){var n,r=e.page,o=e.setPage;return a.a.createElement(V,{active:r===t,onClick:function(){return o(t)}},(n=t).charAt(0).toUpperCase()+n.substr(1))})}var N=function(){return a.a.createElement(P,null,a.a.createElement("div",null," CryptoDash"),a.a.createElement("div",null),a.a.createElement(I,{name:"dashboard",active:!0}),a.a.createElement(I,{name:"settings"}))},T=function(e){e.firstVisit;return a.a.createElement(w.Consumer,null,function(e){return e.firstVisit?a.a.createElement("div",null,"Welcome to CryptoDash, please select your favorite coins to begin ",""):null})};var W="background-color: ".concat("#061a44"),G="background-color: ".concat("#010e2c",";"),U=("background-color: ".concat("#42ff3a",";"),"box-shadow: 0px 0px 5px 1px ".concat("#121d5b")),z="box-shadow: 0px 0px 4px 2px #5fff17";function M(){var e=Object(v.a)(["\n    display:grid;\n    justify-content:center;\n"]);return M=function(){return e},e}function J(){var e=Object(v.a)(["\n    margin:20px;\n    color: "," ",";\n    padding: 5px;\n    cursor:pointer;\n    &:hover {\n        ","\n    }\n"]);return J=function(){return e},e}var R=m.b.div(J(),"#42ff3a","font-size: 1.5em;",z),K=m.b.div(M()),$=function(){return a.a.createElement(w.Consumer,null,function(e){var t=e.confirmFavorites;return a.a.createElement(K,null,a.a.createElement(R,{onClick:t},"Confirm Favorites"))})},X=function(e){var t=e.name,n=e.children;return a.a.createElement(w.Consumer,null,function(e){return e.page!==t?null:a.a.createElement("div",null,n)})};function q(){var e=Object(v.a)(["\n    pointer-events:none;\n    opacity:0.4;\n"]);return q=function(){return e},e}function Q(){var e=Object(v.a)(["\n    &:hover {\n        cursor: pointer;\n        ","\n    }\n"]);return Q=function(){return e},e}function Y(){var e=Object(v.a)(["\n    &:hover {\n        cursor: pointer;\n        ","\n    }\n"]);return Y=function(){return e},e}function Z(){var e=Object(v.a)(["\n "," \n ","\n padding:10px;\n"]);return Z=function(){return e},e}var _=m.b.div(Z(),U,W),ee=Object(m.b)(_)(Y(),z),te=Object(m.b)(ee)(Q(),"box-shadow: 0px 0px 2px 2px #e41111"),ne=Object(m.b)(_)(q());function re(){var e=Object(v.a)(["\n    justify-self:right;\n    display:none;\n    ",":hover & {\n       display:block;\n       color:red; \n    }\n"]);return re=function(){return e},e}function ae(){var e=Object(v.a)(["\n    justify-self: right;\n"]);return ae=function(){return e},e}function oe(){var e=Object(v.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n"]);return oe=function(){return e},e}var ie=m.b.div(oe()),ce=m.b.div(ae()),le=m.b.div(re(),te),ue=function(e){var t=e.name,n=e.symbol,r=e.topSection;return a.a.createElement(ie,null,a.a.createElement("div",null," ",t," "),r?a.a.createElement(le,null,"X"):a.a.createElement(ce,null,n," "))};function se(){var e=Object(v.a)(["\n        height:200px;\n        display:block;\n        margin:auto;\n    "]);return se=function(){return e},e}function fe(){var e=Object(v.a)(["\n    height :50px;\n    ","\n"]);return fe=function(){return e},e}var ve=m.b.img(fe(),function(e){return e.spotlight&&Object(m.a)(se())}),me=function(e){var t=e.coin,n=e.spotlight;return a.a.createElement(ve,{spotlight:n,alt:t.CoinSymbol,src:"http://cryptocompare.com/".concat(t.ImageUrl)})};var de=function(e){var t=e.coinKey,n=e.topSection;return a.a.createElement(w.Consumer,null,function(e){var r=e.coinList,o=e.addCoin,i=e.removeCoin,c=e.isInFavorites,l=r[t],u=ee;return n?u=te:c(t)&&(u=ne),a.a.createElement(u,{onClick:function(e,t,n,r){return e?function(){r(t)}:function(){n(t)}}(n,t,o,i)},a.a.createElement(ue,{name:l.CoinName,symbol:l.Symbol,topSection:n}),a.a.createElement(me,{coin:l}))})};function pe(){var e=Object(v.a)(["\n    display:grid;\n    grid-template-columns: repeat(auto-fill,minmax(130px,1fr));\n    grid-gap:15px;\n    margin-top:40px;\n"]);return pe=function(){return e},e}var be=m.b.div(pe());function Ce(e,t,n,r){return t?n:function(e,t){return t&&Object.keys(t)||Object.keys(e).slice(0,100)}(e,r)}var ge=function(e){var t=e.topSection;return a.a.createElement(w.Consumer,null,function(e){var n=e.coinList,r=e.favorites,o=e.filteredCoins;return a.a.createElement(be,null,Ce(n,t,r,o).map(function(e){return a.a.createElement(de,{key:e,coinKey:e,topSection:t})}))})},he=n(146),Ee=n.n(he);function ye(){var e=Object(v.a)(["\n    ","\n    ","\n    border:1px solid;\n    color:#1163c9;\n    place-self:center left;\n"]);return ye=function(){return e},e}function xe(){var e=Object(v.a)(["\n    display:grid;\n    grid-template-columns: 200px 1fr;\n"]);return xe=function(){return e},e}var Oe=m.b.div(xe()),je=m.b.input(ye(),G,"font-size: 1.0em"),ke=O.a.debounce(function(e,t,n){var r=Object.keys(t),a=r.map(function(e){return t[e].CoinName}),o=r.concat(a),i=Ee.a.filter(e,o,{}).map(function(e){return e.string});n(O.a.pickBy(t,function(e,t){var n=e.CoinName;return O.a.includes(i,t)||O.a.includes(i,n)}))},500);function Fe(){return a.a.createElement(w.Consumer,null,function(e){var t=e.setFilteredCoins,n=e.coinList;return a.a.createElement(Oe,null,a.a.createElement("h2",null,"Search All Coins "),a.a.createElement(je,{onKeyUp:function(e){return function(e,t,n){var r=e.target.value;r?ke(r,n,t):t(null)}(e,t,n)}}))})}var Se=function(){return a.a.createElement(X,{name:"settings"},a.a.createElement(T,null),a.a.createElement(ge,{topSection:!0}),a.a.createElement($,null),a.a.createElement(Fe,null),a.a.createElement(ge,null))};function Ae(){var e=Object(v.a)(["\n        color:red;\n    "]);return Ae=function(){return e},e}function we(){var e=Object(v.a)(["\n    color: green;\n    ","\n"]);return we=function(){return e},e}function De(){var e=Object(v.a)(["\n    justify-self:left;\n"]);return De=function(){return e},e}function Be(){var e=Object(v.a)(["\n    justify-self:right;\n"]);return Be=function(){return e},e}function He(){var e=Object(v.a)(["\n    ","\n"]);return He=function(){return e},e}function Le(){var e=Object(v.a)(["\n        ","\n        pointer-events: none;\n    "]);return Le=function(){return e},e}function Pe(){var e=Object(v.a)(["\n        display:grid;  \n        grid-template-columns: repeat(3,1fr);\n        grid-gap:5px;\n        justify-items: right;\n        ","\n\n    "]);return Pe=function(){return e},e}function Ve(){var e=Object(v.a)(["\n    ","\n    ","\n"]);return Ve=function(){return e},e}var Ie=Object(m.b)(ee)(Ve(),function(e){return e.compact&&Object(m.a)(Pe(),"font-size: .75em")},function(e){return e.currentFavorite&&Object(m.a)(Le(),z)}),Ne=function(e){return+(e+"").slice(0,7)},Te=m.b.div(He(),"font-size: 2em"),We=m.b.div(Be()),Ge=m.b.div(De()),Ue=m.b.div(we(),function(e){return e.red&&Object(m.a)(Ae())});function ze(e){var t=e.data;return a.a.createElement(We,null,a.a.createElement(Ue,{red:t.CHANGEPCT24HOUR<0},Ne(t.CHANGEPCT24HOUR),"%"))}function Me(e){var t=e.sym,n=e.data,r=e.currentFavorite,o=e.setCurrentFavorite;return a.a.createElement(Ie,{onClick:o,currentFavorite:r},a.a.createElement(ie,null,a.a.createElement("div",null," ",t," "),a.a.createElement(ze,{data:n})),a.a.createElement(Te,null,"$",Ne(n.CHANGEPCT24HOUR)))}function Je(e){var t=e.sym,n=e.data,r=e.currentFavorite,o=e.setCurrentFavorite;return a.a.createElement(Ie,{onClick:o,compact:!0,currentFavorite:r},a.a.createElement(ie,null,a.a.createElement(Ge,null," ",t," "),a.a.createElement(ze,{data:n})),a.a.createElement("div",null,"$",Ne(n.CHANGEPCT24HOUR)))}var Re=function(e){var t=e.price,n=e.index,r=Object.keys(t)[0],o=t[r].USD,i=n<5?Me:Je;return a.a.createElement(w.Consumer,null,function(e){var t=e.currentFavorite,n=e.setCurrentFavorite;return a.a.createElement(i,{sym:r,data:o,currentFavorite:t===r,setCurrentFavorite:function(){return n(r)}})})};function Ke(){var e=Object(v.a)(["\n    display:grid;\n    grid-template-columns: repeat(5,1fr);\n    grid-gap:15px;\n    margin-top:40px;\n"]);return Ke=function(){return e},e}var $e=m.b.div(Ke()),Xe=function(){return a.a.createElement(w.Consumer,null,function(e){var t=e.prices;return a.a.createElement($e,null,t.map(function(e,t){return a.a.createElement(Re,{key:"PriceTile- ".concat(t),price:e,index:t})}))})};function qe(){var e=Object(v.a)(["\n    text-align:center;\n"]);return qe=function(){return e},e}var Qe=m.b.div(qe()),Ye=function(){return a.a.createElement(w.Consumer,null,function(e){var t=e.currentFavorite,n=e.coinList;return a.a.createElement(_,null,a.a.createElement(Qe,null," ",n[t].CoinName," "),a.a.createElement(me,{spotlight:!0,coin:n[t]}))})},Ze=n(102),_e=n.n(Ze),et={colors:["#61d936","#552ccb","#1163c9","#04A1EE","#08C6E0","#146B9E","#F376C1","#1B2839"],chart:{backgroundColor:"#061a44",borderColor:"#000000",borderWidth:0,className:"dark-container",plotBackgroundColor:"#061a44",plotBorderWidth:0},title:{style:{color:"#C0C0C0",font:'bold 16px "Trebuchet MS", Verdana, sans-serif'}},subtitle:{style:{color:"#666666",font:'bold 12px "Trebuchet MS", Verdana, sans-serif'}},xAxis:{gridLineColor:"#333333",gridLineWidth:0,labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",tickColor:"#A0A0A0",title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},yAxis:{gridLineWidth:0,gridLineColor:"#333333",labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",minorTickInterval:null,tickColor:"#A0A0A0",tickWidth:1,title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.75)",style:{color:"#F0F0F0"}},toolbar:{itemStyle:{color:"silver"}},plotOptions:{line:{dataLabels:{color:"#CCC"},marker:{lineColor:"#333"}},spline:{marker:{lineColor:"#333"}},scatter:{marker:{lineColor:"#333"}},candlestick:{lineColor:"white"}},legend:{itemStyle:{font:"9pt Trebuchet MS, Verdana, sans-serif",color:"#A0A0A0"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#444"}},credits:{enabled:!1},labels:{style:{color:"#CCC"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",hoverSymbolStroke:"#FFFFFF",theme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#606060"],[.6,"#333333"]]},stroke:"#000000"}}},rangeSelector:{buttonTheme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},stroke:"#000000",style:{color:"#CCC",fontWeight:"bold"},states:{hover:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#BBB"],[.6,"#888"]]},stroke:"#000000",style:{color:"white"}},select:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.1,"#000"],[.3,"#333"]]},stroke:"#000000",style:{color:"yellow"}}}},inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(16, 16, 16, 0.5)",series:{color:"#7798BF",lineColor:"#A6C7ED"}},scrollbar:{barBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},barBorderColor:"#CCC",buttonArrowColor:"#CCC",buttonBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},buttonBorderColor:"#CCC",rifleColor:"#FFF",trackBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#000"],[1,"#333"]]},trackBorderColor:"#666"},legendBackgroundColor:"rgba(0, 0, 0, 0.5)",background2:"rgb(35, 35, 70)",dataLabelsColor:"#444",textColor:"#C0C0C0",maskColor:"rgba(255,255,255,0.3)"};function tt(){var e=Object(v.a)(["\n    ","\n    ","\n    color: #1163c9;\n    border: 1px solid;\n    float:right;\n"]);return tt=function(){return e},e}var nt=m.b.select(tt(),G,"font-size: 1.0em");_e.a.Highcharts.setOptions(et);var rt=function(){return a.a.createElement(w.Consumer,null,function(e){var t=e.historical,n=e.changeChartSelect;return a.a.createElement(_,null,a.a.createElement(nt,{defaultValue:"months",onChange:function(e){return n(e.target.value)}},a.a.createElement("option",{value:"days"}," Days "),a.a.createElement("option",{value:"weeks"}," Weeks "),a.a.createElement("option",{value:"months"}," Months ")),t?a.a.createElement(_e.a,{config:function(e){return{title:{text:""},subtitle:{text:""},yAxis:{title:{text:"Price"}},xAxis:{type:"datetime"},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:e,responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}}}(t)}):a.a.createElement("div",null," Loading historical Data"))})};function at(){var e=Object(v.a)(["\n    display:grid;\n    margin-top:20px;\n    grid-gap:15px;\n    grid-template-columns: 1fr 3fr;\n"]);return at=function(){return e},e}var ot=m.b.div(at()),it=function(){return a.a.createElement(X,{name:"dashboard"},a.a.createElement(Xe,null),a.a.createElement(ot,null,a.a.createElement(Ye,null),a.a.createElement(rt,null)))},ct=function(e){return a.a.createElement(w.Consumer,null,function(t){var n=t.coinList,r=t.prices,o=t.firstVisit;return n?o||r?a.a.createElement("div",null,e.children):a.a.createElement("div",null," Loading Prices"):a.a.createElement("div",null," Loading Coins")})},lt=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(p,null,a.a.createElement(D,null,a.a.createElement(N,null),a.a.createElement(ct,null,a.a.createElement(Se,null),a.a.createElement(it,null))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(lt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[148,2,1]]]);
//# sourceMappingURL=main.6a1b1f79.chunk.js.map