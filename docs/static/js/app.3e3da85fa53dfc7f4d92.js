webpackJsonp([1],{165:function(t,e,s){t.exports=s.p+"static/img/user_photo.2486777.jpeg"},184:function(t,e,s){"use strict";var a=s(17),n=s(492),i=s(479),r=s.n(i);a.default.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Home",component:r.a}]})},186:function(t,e){},187:function(t,e){},189:function(t,e,s){var a=s(36)(s(213),s(487),null,null,null);t.exports=a.exports},212:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(17),n=s(185),i=s.n(n),r=s(187),l=(s.n(r),s(188)),o=s.n(l),c=s(189),u=s.n(c),p=s(184),d=s(186);s.n(d);a.default.use(i.a),a.default.use(o.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:p.a,template:"<App/>",components:{App:u.a}})},213:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{isCollapse:!1}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}}},214:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(481),n=s.n(a),i=s(483),r=s.n(i),l=s(480),o=s.n(l),c=s(482),u=s.n(c),p=s(484),d=s.n(p);e.default={name:"Dashboard",components:{"lee-status-card":n.a,"lee-user-overview":r.a,"lee-progress":o.a,"lee-step":u.a,"lee-weather":d.a},data:function(){return{user:{photo:s(165),name:"Cason Lee",role:"Administrator"},cardsData:[{icon:"user",count:"996",type:"primary",name:"New Users"},{icon:"eye",count:"170871",type:"success",name:"Views"},{icon:"edit",count:"38470",type:"warning",name:"Comments"},{icon:"download",count:"23416",type:"danger",name:"Donwloads"}],profileData:[{icon:"fa fa-user",key:"Sex",value:"Male"},{icon:"fa fa-envelope",key:"Email",value:"leecason0722@gmail.com"},{icon:"fa fa-location-arrow",key:"Localtion",value:"Chengdu, China"}],progressData:[{name:"Javascript",tags:["Vue","React","Angular"],value:80},{name:"Css",tags:["Sass","Less"],value:60},{name:"Html",tags:[],value:30},{name:"Office",tags:["Excel","PPT","Word"],value:100},{name:"Other",tags:["PhotoShop"],value:45}],chartData:{columns:["type","cost","percent"],rows:[{type:"Food",cost:130,percent:.12},{type:"Shopping",cost:122,percent:.345},{type:"Daily",cost:212,percent:.7},{type:"Entertainment",cost:412,percent:.31},{type:"Phone",cost:312,percent:.6},{type:"Clothes",cost:712,percent:.65},{type:"Others",cost:512,percent:.6}]},pieSettings:{dimension:"type",metrics:"cost",selectedMode:"single",hoverAnimation:!0,radius:100,offsetY:200},stepData:[{title:"What to do in the morning?",description:"7.30 AM get up, after braekfast go out running",icon:"fa fa-sun-o"},{title:"What to eat for lunch?",description:"A simple meal, a thick soup and an apple",icon:"fa fa-cutlery"},{title:"What plan in the afternoon?",description:"Coding, Coding, Coding...",icon:"fa fa-github"},{title:"How to relax today?",description:"Coding, Coding, Coding, Coding, Coding, Coding, Coding, Coding, Coding, Coding, Coding, Coding...",icon:"fa fa-github"},{title:"How to play with friends in the evening?",description:"Coding, Coding, Coding...",icon:"fa fa-gamepad"},{title:"When to sleep?",description:"Sleep? Impossible",icon:"fa fa-bed"}],weatherData:{location:"Chengdu",temperature:"30°",API:43,humidity:"84%",winds:"10mph"}}}}},215:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Progress",props:{title:{type:String},progressData:{type:Array,default:function(){return[{name:"Vue",tags:[],value:100}]}}},methods:{judgeStatus:function(t){if(100===t)return"success"}}}},216:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"statusCard",props:["icon","type","name","count"]}},217:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Step",props:{title:{type:String},stepData:{type:Array,default:function(){return[{title:"What to do?",description:"Coding",icon:"fa fa-edit"}]}}},data:function(){return{active:1}},methods:{next:function(){this.active++>this.stepData.length-1&&(this.active=0)}}}},218:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Panel",props:{user:{type:Object,default:function(){return{photo:s(165),name:"Cason Lee",role:"Administrator"}}},profile:{type:Array}}}},219:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Weather",props:["weatherData"]}},478:function(t,e){},479:function(t,e,s){function a(t){s(478)}var n=s(36)(s(214),s(490),a,null,null);t.exports=n.exports},480:function(t,e,s){var a=s(36)(s(215),s(489),null,null,null);t.exports=a.exports},481:function(t,e,s){var a=s(36)(s(216),s(486),null,null,null);t.exports=a.exports},482:function(t,e,s){var a=s(36)(s(217),s(488),null,null,null);t.exports=a.exports},483:function(t,e,s){var a=s(36)(s(218),s(485),null,null,null);t.exports=a.exports},484:function(t,e,s){var a=s(36)(s(219),s(491),null,null,null);t.exports=a.exports},485:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lee-overview lee-panel"},[s("div",{staticClass:"heading"},[s("div",{staticClass:"info"},[s("span",{staticClass:"name"},[t._v(t._s(t.user.name))]),t._v(" "),s("span",{staticClass:"role"},[t._v(t._s(t.user.role))])]),t._v(" "),s("img",{attrs:{src:t.user.photo,width:"100",height:"100"}})]),t._v(" "),s("div",{staticClass:"list"},t._l(t.profile,function(e){return s("div",{key:e.id,staticClass:"list-item"},[s("i",{class:e.icon,staticStyle:{width:"10%"}}),t._v(" "),s("span",{staticStyle:{width:"40%"}},[t._v(t._s(e.key))]),t._v(" "),s("span",{staticStyle:{width:"50%"}},[t._v(t._s(e.value))])])}))])},staticRenderFns:[]}},486:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lee-status-card"},[s("div",{staticClass:"symbol",class:[t.type]},[s("i",{class:"fa fa-"+t.icon})]),t._v(" "),s("div",{staticClass:"value"},[s("div",{staticClass:"count"},[t._v(t._s(t.count))]),t._v(" "),s("span",[t._v(t._s(t.name))])])])},staticRenderFns:[]}},487:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("header"),t._v(" "),s("div",{staticClass:"sidebar"},[s("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:t.isCollapse,theme:"dark"},on:{open:t.handleOpen,close:t.handleClose}},[s("el-menu-item",{attrs:{index:"1"}},[s("i",{staticClass:"el-icon-star-on"}),t._v(" "),s("span",{slot:"title"},[t._v("导航一")])]),t._v(" "),s("el-menu-item",{attrs:{index:"2"}},[s("i",{staticClass:"el-icon-menu"}),t._v(" "),s("span",{slot:"title"},[t._v("导航二")])]),t._v(" "),s("el-menu-item",{attrs:{index:"3"}},[s("i",{staticClass:"el-icon-setting"}),t._v(" "),s("span",{slot:"title"},[t._v("导航三")])])],1)],1),t._v(" "),s("div",{staticClass:"main-content"},[s("router-view")],1)])},staticRenderFns:[]}},488:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lee-step lee-panel"},[s("div",{staticClass:"heading justify-between"},[s("span",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:t.next}},[t._v("Next")])],1),t._v(" "),s("div",{staticClass:"content"},[s("el-steps",{attrs:{space:100,direction:"vertical",active:t.active}},t._l(t.stepData,function(e){return s("el-step",{key:e.id},[s("div",{slot:"title"},[t._v(t._s(e.title))]),t._v(" "),s("i",{class:e.icon,slot:"icon"}),t._v(" "),s("div",{slot:"description"},[t._v(t._s(e.description))])])}))],1)])},staticRenderFns:[]}},489:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lee-progress lee-panel"},[s("div",{staticClass:"heading justify-between"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),s("div",{staticClass:"list progress-content"},t._l(t.progressData,function(e){return s("div",{key:e.id,staticClass:"list-item"},[s("div",{staticClass:"progress"},[s("el-progress",{attrs:{"text-inside":!0,"stroke-width":13,percentage:e.value,status:t.judgeStatus(e.value)}})],1),t._v(" "),s("div",{staticClass:"tags"},t._l(e.tags,function(e){return s("el-tag",{key:e.id,staticClass:"tag",attrs:{type:"primary"}},[t._v(t._s(e))])})),t._v(" "),s("div",{staticClass:"name"},[s("span",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]}},490:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard"},[s("el-row",{attrs:{gutter:10}},t._l(t.cardsData,function(t){return s("el-col",{key:t.id,attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[s("lee-status-card",{attrs:{icon:t.icon,count:t.count,type:t.type,name:t.name}})],1)])})),t._v(" "),s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{span:16}},[s("lee-progress",{attrs:{title:"Skills",progressData:t.progressData}})],1),t._v(" "),s("el-col",{attrs:{span:8}},[s("lee-user-overview",{attrs:{user:t.user,profile:t.profileData}})],1)],1),t._v(" "),s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{span:16}},[s("lee-step",{attrs:{title:"Steps For What To Do Today",stepData:t.stepData}})],1),t._v(" "),s("el-col",{attrs:{span:8}},[s("div",{staticClass:"lee-panel"},[s("div",{staticClass:"heading"},[t._v("\n          Cost\n        ")]),t._v(" "),s("div",{staticClass:"content"},[s("ve-pie",{attrs:{data:t.chartData,settings:t.pieSettings,height:"360px"}})],1)]),t._v(" "),s("lee-weather",{attrs:{weatherData:t.weatherData}})],1)],1)],1)},staticRenderFns:[]}},491:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lee-weather lee-panel"},[s("div",{staticClass:"heading primary"},[s("div",{staticClass:"justify-vertical"},[s("i",{staticClass:"fa fa-cloud"}),t._v(" "),s("span",{staticClass:"location"},[t._v(t._s(t.weatherData.location))])]),t._v(" "),s("div",{staticClass:"temperature"},[t._v(t._s(t.weatherData.temperature))])]),t._v(" "),s("div",{staticClass:"content"},[s("el-row",[s("el-col",{attrs:{span:8}},[s("div",{staticClass:"grid-content justify-vertical"},[s("span",{staticClass:"small-text"},[t._v("Humidity")]),t._v(" "),s("span",{staticClass:"value"},[t._v(t._s(t.weatherData.humidity))])])]),t._v(" "),s("el-col",{attrs:{span:8}},[s("div",{staticClass:"grid-content justify-vertical"},[s("span",{staticClass:"small-text"},[t._v("Winds")]),t._v(" "),s("span",{staticClass:"value"},[t._v(t._s(t.weatherData.winds))])])]),t._v(" "),s("el-col",{attrs:{span:8}},[s("div",{staticClass:"grid-content justify-vertical"},[s("span",{staticClass:"small-text"},[t._v("API")]),t._v(" "),s("span",{staticClass:"value success-text"},[t._v(t._s(t.weatherData.API))])])])],1)],1)])},staticRenderFns:[]}}},[212]);
//# sourceMappingURL=app.3e3da85fa53dfc7f4d92.js.map