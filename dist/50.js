/*! NutUI v1.2.9 Thu Jun 28 2018 17:03:52 GMT+0800 (CST) */
webpackJsonpnutui([50],{1070:function(e,t,a){(e.exports=a(1)()).push([e.i,".nut-checkboxgroup .checkboxlist{display:inline-block;width:100px}",""])},1154:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nut-docheader",{attrs:{name:e.$route.name,chName:e.$route.params.chnName,type:"Component",desc:"复选按钮组。",showQrCode:!0}}),e._v(" "),a("h5",[e._v("示例")]),e._v(" "),a("h6",[e._v("默认用法")]),e._v(" "),a("nut-checkboxgroup",{attrs:{data:e.data1}}),e._v(" "),a("nut-codebox",{attrs:{code:e.demo1}}),e._v(" "),a("nut-codebox",{attrs:{code:e.demo11}}),e._v(" "),a("h6",[e._v("回调事件")]),e._v(" "),a("nut-checkboxgroup",{attrs:{data:e.data2},on:{change:e.checkboxgroupChange}}),e._v(" "),a("nut-codebox",{attrs:{code:e.demo2}}),e._v(" "),a("nut-codebox",{attrs:{code:e.demo22}}),e._v(" "),a("h6",[e._v("禁用选项")]),e._v(" "),a("nut-checkboxgroup",{attrs:{inline:!0,data:e.data3}}),e._v(" "),a("nut-codebox",{attrs:{code:e.demo3}}),e._v(" "),a("nut-codebox",{attrs:{code:e.demo33}}),e._v(" "),a("nut-codebox",{attrs:{code:e.demo333}}),e._v(" "),a("h5",[e._v("Props")]),e._v(" "),e._m(0),e._v(" "),a("h5",[e._v("Events")]),e._v(" "),e._m(1)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tbl-wrapper"},[a("table",{staticClass:"u-full-width"},[a("thead",[a("tr",[a("th",[e._v("参数")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("默认值")]),e._v(" "),a("th",[e._v("可选值")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("data")]),e._v(" "),a("td",[e._v("数据源，对象数组(必传)")]),e._v(" "),a("td",[e._v("Array")]),e._v(" "),a("td",[e._v("[]")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("inline")]),e._v(" "),a("td",[e._v("是否在一行展示")]),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("true/false")])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tbl-wrapper"},[a("table",{staticClass:"u-full-width"},[a("thead",[a("tr",[a("th",[e._v("事件名")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("回调参数")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("change")]),e._v(" "),a("td",[e._v("选择时触发回调函数change(item,index,event)")]),e._v(" "),a("td",[e._v("item,index,event")])])])])])}]}},1279:function(e,t,a){var n=a(1070);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(3)("6dce8bc0",n,!0,{})},871:function(e,t,a){var n=a(2)(a(971),a(1154),function(e){a(1279)},null,null);e.exports=n.exports},971:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,d=a(17);(n=d)&&n.__esModule;t.default={data:function(){return{data1:[{id:1,name:"test1",value:1},{id:2,name:"test1",value:2},{id:3,name:"test1",value:3},{id:4,name:"test1",value:4},{id:5,name:"test1",value:5}],data2:[{id:10,name:"test",value:"是",label:"是",checked:!0},{id:12,name:"test",value:"否",label:"否",checked:!1}],data3:[{id:11,name:"test2",value:"足球"},{id:22,name:"test2",value:"篮球",checked:!1},{id:33,name:"test2",value:"羽毛球",checked:!1},{id:44,name:"test2",value:"乒乓球",disabled:!0,checked:!1},{id:55,name:"test2",value:"排球",checked:!0}],demo1:'<nut-checkboxgroup :data="data1"></nut-checkboxgroup>',demo11:"export default {\n    data(){\n        return{\n            data1:[\n                {id:1,name:'test1',value:1},\n                {id:2,name:'test1',value:2},\n                {id:3,name:'test1',value:3},\n                {id:4,name:'test1',value:4},\n                {id:5,name:'test1',value:5}\n            ]\n        }\n    }\n}",demo2:'<nut-checkboxgroup \n:data="data2" \n@change="test1">\n</nut-checkboxgroup>',demo22:"export default {\n    data(){\n        return{\n            data2:[\n                {id:10,name:'test',value:'是',label:'是',checked:true},\n                {id:12,name:'test',value:'否',label:'否',checked:false},\n            ]\n        }\n    },\n    methods:{\n        test1(item){\n            alert(item.value+'checked:'+event.target.checked);\n        }\n    }\n}",demo3:'<nut-checkboxgroup \n:data="data3" \n@change="change">\n</nut-checkboxgroup>',demo33:"export default {\n    data(){\n        return{\n            data3:[\n                {id:11,name:'test2',value:'足球',},\n                {id:22,name:'test2',value:'篮球',checked:false},\n                {id:33,name:'test2',value:'羽毛球',checked:false},\n                {id:44,name:'test2',value:'乒乓球',disabled:true,checked:false},\n                {id:55,name:'test2',value:'排球',checked:true}\n            ]\n        }\n    },\n    methods:{\n        change(item,index){\n            console.log(index,event.target.value,event.target.checked);\n        }\n    }\n}",demo333:".nut-checkboxgroup .checkboxlist{\n    display: inline-block;\n    width: 100px;\n}"}},components:{},methods:{checkboxgroupChange:function(e,t,a,n){alert(t.label+"： "+n.target.checked)}}}}});