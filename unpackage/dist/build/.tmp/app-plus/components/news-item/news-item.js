(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/news-item/news-item"],{"0d38":function(t,n,e){"use strict";e.r(n);var a=e("18b4"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=r.a},"18b4":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={props:["list"],filters:{formatData:function(t){var n=new Date(t),e=n.getFullYear(),a=n.getMonth().toString().padStart(2,0),r=n.getDay().toString().padStart(2,0);return e+"-"+a+"-"+r}},methods:{navigatorTo:function(t){this.$emit("itemClick",t)}}};n.default=a},"27d5":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.list.map(function(n,e){var a=t._f("formatData")(n.add_time);return{$orig:t.__get_orig(n),f0:a}}));t.$mp.data=Object.assign({},{$root:{l0:e}})},r=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r})},6666:function(t,n,e){},c796:function(t,n,e){"use strict";e.r(n);var a=e("27d5"),r=e("0d38");for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);e("cb81");var o=e("2877"),u=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,null,null);n["default"]=u.exports},cb81:function(t,n,e){"use strict";var a=e("6666"),r=e.n(a);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/news-item/news-item-create-component',
    {
        'components/news-item/news-item-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("c796"))
        })
    },
    [['components/news-item/news-item-create-component']]
]);                
