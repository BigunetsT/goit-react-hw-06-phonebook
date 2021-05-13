(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={filter:"Filter_filter__1A7XU",label:"Filter_label__2qcHO",input:"Filter_input__1_rJK"}},12:function(t,e,n){t.exports={phoneNumber:"ContactItem_phoneNumber__i1BhP",contactItem:"ContactItem_contactItem__2_XQD",contactDeleteBtn:"ContactItem_contactDeleteBtn__2O9uU",ring:"ContactItem_ring__1BgWT"}},18:function(t,e,n){t.exports={contactsList:"ContactList_contactsList__2QB4_"}},36:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),i=(n(28),n(3)),s=n(6),l=n(7),u=n(16),b=n(17),d=n(23),m=n(22),j=n(8),h=n.n(j),O=n(42);var f,p=function(t){return t.slice(0,3)+"-"+t.slice(3,5)+"-"+t.slice(5,7)},C=n(4),_={addContact:Object(C.b)("contacts/add",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(O.a)(),name:e,number:p(n)}}})),deleteContact:Object(C.b)("contacts/delete"),filterContact:Object(C.b)("contacts/filter")},x=n(1),v={name:"",number:""},g=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=Object(l.a)({},v),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(s.a)({},a,c))}))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState(Object(l.a)({},v))},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(x.jsxs)("form",{onSubmit:this.handleSubmit,className:h.a.contactForm,children:[Object(x.jsxs)("label",{className:h.a.label,children:["Name",Object(x.jsx)("input",{className:h.a.input,type:"text",name:"name",value:e,placeholder:"input name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange})]}),Object(x.jsxs)("label",{className:h.a.label,children:["Number",Object(x.jsx)("input",{className:h.a.input,type:"tel",name:"number",placeholder:"XXX-XX-XX",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})]}),Object(x.jsx)("button",{type:"submit",className:h.a.addContactBtn,children:"Add contact"})]})}}]),n}(a.Component),N=Object(i.b)(null,(function(t){return{onSubmit:function(e){var n=e.name,a=e.number;return t(_.addContact({name:n,number:a}))}}}))(g),y=n(11),F=n.n(y),B=Object(i.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(_.filterContact(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(x.jsx)("div",{className:F.a.filter,children:Object(x.jsxs)("label",{className:F.a.label,children:["Find contacts by name",Object(x.jsx)("input",{type:"text",className:F.a.input,value:e,onChange:n})]})})})),k=n(18),A=n.n(k),w=n(12),S=n.n(w),X=Object(i.b)(null,(function(t){return{onDelete:function(e){return t(_.deleteContact(e))}}}))((function(t){var e=t.id,n=t.name,a=t.number,c=t.onDelete;return Object(x.jsxs)("li",{name:n,number:a,className:S.a.contactItem,children:[n,":",Object(x.jsx)("span",{className:S.a.phoneNumber,children:a}),Object(x.jsx)("button",{type:"button",className:S.a.contactDeleteBtn,onClick:function(){return c(e)},children:"Delete"})]})})),D=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},I=Object(i.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contacts:D(n,a)}}))((function(t){var e=t.contacts;return Object(x.jsx)("ul",{className:A.a.contactsList,children:e.map((function(t){var e=t.id,n=t.name,a=t.number;return Object(x.jsx)(X,{id:e,name:n,number:a},e)}))})})),L=(n(36),function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{className:"title",children:"Phonebook"}),Object(x.jsx)(N,{}),Object(x.jsx)("h2",{className:"title",children:"Contacts"}),Object(x.jsx)(B,{}),Object(x.jsx)(I,{})]})})}),z=n(10),J=n(2),q=Object(C.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(f={},Object(s.a)(f,_.addContact,(function(t,e){var n=e.payload;return[].concat(Object(z.a)(t),[n])})),Object(s.a)(f,_.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),f)),H=Object(C.c)("",Object(s.a)({},_.filterContact,(function(t,e){return e.payload}))),T=Object(J.b)({items:q,filter:H}),U=n(19),Z=n.n(U),E=n(20),K=n.n(E),M=n(5),P=[].concat(Object(z.a)(Object(C.d)({serializableCheck:{ignoredActions:[M.a,M.f,M.b,M.c,M.d,M.e]}})),[Z.a]),Q={key:"contacts",storage:K.a,blacklist:["filter"]},Y=Object(C.a)({reducer:{contacts:Object(M.g)(Q,T)},middleware:P,devTools:!1}),G={store:Y,persistor:Object(M.h)(Y)},R=n(21);o.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(i.a,{store:G.store,children:Object(x.jsx)(R.a,{loading:"Loading...",persistor:G.persistor,children:Object(x.jsx)(L,{})})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__190wV",label:"ContactForm_label__1UiYg",input:"ContactForm_input__208YH",addContactBtn:"ContactForm_addContactBtn__34Gdi"}}},[[40,1,2]]]);
//# sourceMappingURL=main.8132b18f.chunk.js.map