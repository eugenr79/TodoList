(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,n){},151:function(e,t,n){e.exports=n(169)},160:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var o=n(126),r=n(7),a=n.n(r),c=n(64),d=n.n(c),i=(n(132),n(45)),l=n(37);n(160);function u(e){var t,n=e.add,o=e.remove,r=e.clear;return a.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},a.a.createElement("textarea",{ref:function(e){return t=e}}),a.a.createElement("button",{onClick:function(){return n(t.value)}},"Add"),a.a.createElement("button",{onClick:function(){return o()}},"Remove"),a.a.createElement("button",{onClick:function(){return r()}},"Clear"))}var s=n(39),O=n(150),E=function(e){return function(e){return function(t){var n=t["Call API"];if("undefined"===typeof n)return e(t);var o=n.types,r=n.endpoint,a=n.body;if(!Array.isArray(o)||3!==o.length)throw new Error("Expected an array of three action types.");var c=function(e){var n=Object.assign({},t,e);return delete n["Call API"],n},d=Object(O.a)(o,3),i=d[0],l=d[1],u=d[2];return e(c({type:i})),function(e,t){var n=e,o=void 0;return t&&(o={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}),fetch(n,o).then(function(e){return e.json()})}(r,a).then(function(t){return e(c({type:l,response:t}))},function(t){return e(c({type:u,error:t.message||"Error"}))})}}},f=function(){return Object(s.a)({},"Call API",{types:["TODOLIST_REQUEST","TODOLIST_SUCCESS","TODOLIST_FAILURE"],endpoint:"todos"})},T=function(e){return function(t){return t(Object(s.a)({},"Call API",{types:["TODOADD_REQUEST","TODOADD_SUCCESS","TODOADD_FAILURE"],endpoint:"todos/add",body:{text:e}}))}},p=function(e){return function(t){return t(Object(s.a)({},"Call API",{types:["TODOREMOVE_REQUEST","TODOREMOVE_SUCCESS","TODOREMOVE_FAILURE"],endpoint:"todos/remove",body:{id:e}}))}},S=function(){return function(e){return e(Object(s.a)({},"Call API",{types:["TODOCLEAR_REQUEST","TODOCLEAR_SUCCESS","TODOCLEAR_FAILURE"],endpoint:"todos/clear"}))}},D=function(e){return{type:"TODO_SELECT",payload:e}};l.b(null,function(e){return{clear:function(){return e(S())}}})(function(e){var t=e.clear;return a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t()}},a.a.createElement("button",{type:"submit"},"Clear"))});var b=n(146),m=n(149),v=(n(167),n(168),l.b(function(e,t){return{loading:e.loading,loaded:e.loaded,error:e.error,todos:e.todos,loadData:t.load,onSelect:t.onSelect}})(function(e){var t=e.loading,n=e.loaded,o=e.todos,c=e.loadData,d=e.onSelect,i=!t&&!n;if(Object(r.useEffect)(function(){i&&c()}),i)return a.a.createElement("p",null,"Loading...");var l=o.map(function(e,t){return{id:e._id,text:e.text}});return a.a.createElement("div",{className:"ag-theme-balham",style:{height:"200px",width:"600px"}},a.a.createElement(b.AgGridReact,{columnDefs:[{field:"text",headerName:"Text"}],rowSelection:"single",onSelectionChanged:function(e){if(d){var t=e.api.getSelectedRows();if(t&&0!==t.length){var n=t[0];d(n.id)}}},rowData:l,modules:m.a}))})),C=l.b(function(e,t){return{selectedTodo:e.selectedTodo}},function(e){return Object(i.b)({loadTodo:f,addTodo:T,removeTodo:p,selectTodo:D,clearTodo:S},e)})(function(e){var t=e.addTodo,n=e.clearTodo,o=e.removeTodo,r=e.loadTodo,c=e.selectTodo,d=e.selectedTodo;return a.a.createElement("div",{className:"App"},a.a.createElement(u,{add:t,remove:function(){void 0!==d&&d.length>0&&o(d)},clear:n}),a.a.createElement(v,{load:r,onSelect:function(e){c(e)}}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=n(147),A=n(148),R=n.n(A),h={loading:!1,loaded:!1,error:"",todos:[],selectedTodo:"",checked:!1},y=n(23),_=[function(e,t){switch(t.type){case"TODOLIST_REQUEST":return Object(y.a)({},e,{loading:!0,loaded:!1});case"TODOLIST_SUCCESS":return Object(y.a)({},e,{loading:!1,loaded:!0,todos:t.response});case"TODOLIST_FAILURE":return Object(y.a)({},e,{loading:!1,loaded:!0,error:t.error});case"TODOADD_REQUEST":return Object(y.a)({},e,{loading:!0,loaded:!1});case"TODOADD_FAILURE":return Object(y.a)({},e,{loading:!1,loaded:!0,error:t.error});case"TODOADD_SUCCESS":return t.response&&t.response.text?Object(y.a)({},e,{todos:[].concat(Object(o.a)(e.todos),[t.response])}):e;case"TODOREMOVE_REQUEST":return Object(y.a)({},e,{loading:!0,loaded:!1});case"TODOREMOVE_FAILURE":return Object(y.a)({},e,{loading:!1,loaded:!0,error:t.error});case"TODOREMOVE_SUCCESS":if(t.response&&t.response.length>0){var n=t.response,r=e.todos.filter(function(e){return e._id!==n});return Object(y.a)({},e,{todos:r})}return e;case"TODOCLEAR_REQUEST":return Object(y.a)({},e,{loading:!0,loaded:!1});case"TODOCLEAR_FAILURE":return Object(y.a)({},e,{loading:!1,loaded:!0,error:t.error});case"TODOCLEAR_SUCCESS":return t.response?Object(y.a)({},e,{todos:[]}):e;case"TODO_SELECT":return Object(y.a)({},e,{selectedTodo:t.payload});default:return e}},function(e,t){return t.type,e}];var j=Object(i.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;return _.reduce(function(e,n){return n(e,t)},e)},h,i.a.apply(void 0,Object(o.a)([g.a,E,R.a])));d.a.render(a.a.createElement(l.a,{store:j},a.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[151,1,2]]]);
//# sourceMappingURL=main.1987b443.chunk.js.map