(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n.n(o),i=n(9),a=n.n(i),d=(n(15),n(8)),r=n(3),s=n(10),u=n(6),l=n(1);var j=function(t){var e=Object(o.useState)(t.edit?t.edit.value:""),n=Object(r.a)(e,2),c=n[0],i=n[1],a=Object(o.useRef)(null);Object(o.useEffect)((function(){a.current.focus()}));var d=function(t){i(t.target.value)};return Object(l.jsx)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e3*Math.random()),text:c}),i("")},children:t.edit?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{type:"text",placeholder:"Update your item",value:c,name:"text",className:"todo-input edit",onChange:d,ref:a}),Object(l.jsx)("button",{className:"todo-button edit",children:"Update"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{type:"text",placeholder:"Add a todo",value:c,name:"text",className:"todo-input",onChange:d,ref:a}),Object(l.jsx)("button",{className:"todo-button",children:"Add Todo"})]})})};var b=function(t){var e=t.todos,n=t.completeTodo,c=t.removeTodo,i=t.updateTodo,a=Object(o.useState)({id:null,value:""}),d=Object(r.a)(a,2),b=d[0],m=d[1];return b.id?Object(l.jsx)(j,{edit:b,onSubmit:function(t){i(b.id,t),m({id:null,value:""})}}):e.map((function(t,e){return Object(l.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(l.jsx)("div",{children:t.text},t.id),Object(l.jsxs)("div",{className:"icons",children:[Object(l.jsx)(u.b,{onClick:function(){return n(t.id)},className:"complete-icon"}),Object(l.jsx)(s.a,{onClick:function(){return c(t.id)},className:"delete-icon"}),Object(l.jsx)(u.a,{onClick:function(){return m({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))},m=new Date,f=m.getMonth()+1,p=m.getDate(),x=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][m.getDay()];var O=function(){var t=Object(o.useState)([]),e=Object(r.a)(t,2),n=e[0],c=e[1];return Object(l.jsxs)("div",{className:"todo-app",children:[Object(l.jsxs)("h1",{children:[f,"/",p," (",x,")\xa0\xa0\xa0TodoList"]}),Object(l.jsx)(j,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(d.a)(n));c(e)}}}),Object(l.jsx)(b,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));c(e)},removeTodo:function(t){var e=Object(d.a)(n).filter((function(e){return e.id!==t}));c(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&c((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var v=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(O,{})})};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.656ab27d.chunk.js.map