(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-084408eb"],{"173a":function(e,t,n){},"1ac2":function(e,t,n){"use strict";n("d45e")},b6f8:function(e,t,n){"use strict";n("173a")},b914:function(e,t,n){"use strict";n.r(t);var r=(n("a9e3"),n("5698")),u={props:{bundle:{type:Number,default:.5},curveType:{type:String,default:"curveLinear"}},data:function(){return{points:[{x:200,y:500}]}},computed:{definition:function(){var e=r[this.curveType];return e.tension&&(e=e.tension(this.bundle)),e.beta&&(e=e.beta(this.bundle)),e.alpha&&(e=e.alpha(this.bundle)),r.line().x((function(e){return e.x})).y((function(e){return e.y})).curve(e)}},methods:{addPoint:function(e){var t=e.layerX,n=e.layerY;this.points.push({x:t,y:n})}}},i=(n("1ac2"),n("2877")),a={components:{MyComponent:Object(i.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{width:"100%",height:"100%"},on:{click:e.addPoint,contextmenu:function(t){t.preventDefault(),e.points=[]}}},[n("path",{attrs:{fill:"none",stroke:"white","stroke-width":"5",d:e.definition(e.points)}}),e._l(e.points,(function(e,t){return n("circle",{key:t,attrs:{cx:e.x,cy:e.y,r:"10"}})}))],2)}),[],!1,null,"0439d74a",null).exports,OptionSlider:n("6fc9").a},data:function(){return{bundle:.5,curveType:"curveLinear",curves:["curveBasisClosed","curveBasisOpen","curveBasis","curveBundle","curveCardinalClosed","curveCardinalOpen","curveCardinal","curveCatmullRomClosed","curveCatmullRomOpen","curveCatmullRom","curveLinearClosed","curveLinear","curveMonotoneX","curveMonotoneY","curveNatural","curveStep","curveStepAfter","curveStepBefore"]}}},c=(n("b6f8"),Object(i.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid-tools"},[n("header",[n("option-slider",{attrs:{min:0,max:1},model:{value:e.bundle,callback:function(t){e.bundle=t},expression:"bundle"}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.curveType,expression:"curveType"}],attrs:{id:"sel",name:"sel"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.curveType=t.target.multiple?n:n[0]}}},e._l(e.curves,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0)],1),n("div",[n("div",{staticClass:"flex items-center justify-center relative"},[n("my-component",e._b({},"my-component",e.$data,!1))],1)])])}),[],!1,null,"05f08f00",null));t.default=c.exports},d45e:function(e,t,n){}}]);