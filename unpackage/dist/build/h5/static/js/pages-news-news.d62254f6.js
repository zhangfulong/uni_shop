(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-news"],{"05de":function(t,n,e){"use strict";var i=e("7d56"),r=e.n(i);r.a},"0d30":function(t,n,e){var i=e("8f3b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("3ede72ad",i,!0,{sourceMap:!1,shadowMode:!1})},"0d38":function(t,n,e){"use strict";e.r(n);var i=e("16f5"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=r.a},"16f5":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={props:["list"],filters:{formatData:function(t){var n=new Date(t),e=n.getFullYear(),i=n.getMonth().toString().padStart(2,0),r=n.getDay().toString().padStart(2,0);return e+"-"+i+"-"+r}},methods:{navigatorTo:function(t){this.$emit("itemClick",t)}}};n.default=i},5594:function(t,n,e){"use strict";e.r(n);var i=e("7ea5"),r=e("b3ac");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("05de");var s=e("2877"),o=Object(s["a"])(r["default"],i["a"],i["b"],!1,null,"05c5098e",null);n["default"]=o.exports},"58ed":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",t._l(t.list,function(n){return e("v-uni-view",{key:n.id,staticClass:"news_item",on:{click:function(e){e=t.$handleEvent(e),t.navigatorTo(n.id)}}},[e("v-uni-image",{attrs:{src:n.img_url,mode:""}}),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"tit"},[t._v(t._s(n.title))]),e("v-uni-view",{staticClass:"info"},[e("v-uni-text",[t._v("发表时间:"+t._s(t._f("formatData")(n.add_time)))]),e("v-uni-text",[t._v("浏览量:"+t._s(n.click))])],1)],1)],1)}),1)},r=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return r})},7159:function(t,n,e){"use strict";var i=e("0d30"),r=e.n(i);r.a},"7d56":function(t,n,e){var i=e("b8c5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("3b78c188",i,!0,{sourceMap:!1,shadowMode:!1})},"7ea5":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"news"},[e("newsItem",{attrs:{list:t.newsList},on:{click:function(n){n=t.$handleEvent(n),t.goToDetail(n)},itemClick:function(n){n=t.$handleEvent(n),t.goToDetail(n)}}})],1)},r=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return r})},"8f3b":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.news_item[data-v-7d861d6b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?10?% %?10?%;border:1px solid #eee}.news_item uni-image[data-v-7d861d6b]{min-width:%?200?%;max-width:%?200?%;height:%?150?%}.news_item .right[data-v-7d861d6b]{margin-left:%?15?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.news_item .right .tit[data-v-7d861d6b]{font-size:%?30?%}.news_item .right .info[data-v-7d861d6b]{font-size:%?24?%}.news_item .right .info uni-text[data-v-7d861d6b]:nth-child(2){margin-left:%?30?%}',""])},a34a:function(t,n,e){t.exports=e("bbdd")},b3ac:function(t,n,e){"use strict";e.r(n);var i=e("e8c1"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=r.a},b8c5:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */',""])},bbdd:function(t,n,e){var i=function(){return this||"object"===typeof self&&self}()||Function("return this")(),r=i.regeneratorRuntime&&Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime")>=0,a=r&&i.regeneratorRuntime;if(i.regeneratorRuntime=void 0,t.exports=e("96cf"),r)i.regeneratorRuntime=a;else try{delete i.regeneratorRuntime}catch(s){i.regeneratorRuntime=void 0}},c796:function(t,n,e){"use strict";e.r(n);var i=e("58ed"),r=e("0d38");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("7159");var s=e("2877"),o=Object(s["a"])(r["default"],i["a"],i["b"],!1,null,"7d861d6b",null);n["default"]=o.exports},e8c1:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("a34a")),r=a(e("c796"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,n,e,i,r,a,s){try{var o=t[a](s),u=o.value}catch(c){return void e(c)}o.done?n(u):Promise.resolve(u).then(i,r)}function o(t){return function(){var n=this,e=arguments;return new Promise(function(i,r){var a=t.apply(n,e);function o(t){s(a,i,r,o,u,"next",t)}function u(t){s(a,i,r,o,u,"throw",t)}o(void 0)})}}var u={data:function(){return{newsList:[]}},components:{newsItem:r.default},methods:{getNews:function(){var t=o(i.default.mark(function t(){var n;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$myRequest({url:"/api/getnewslist"});case 2:n=t.sent,this.newsList=n.data.message;case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),goToDetail:function(t){uni.navigateTo({url:"/pages/news-detail/news-detail?id="+t})}},onLoad:function(){this.getNews()}};n.default=u}}]);