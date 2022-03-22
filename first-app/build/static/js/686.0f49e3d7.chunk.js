"use strict";(self.webpackChunkfirst_app=self.webpackChunkfirst_app||[]).push([[686],{686:function(e,s,a){a.r(s),a.d(s,{default:function(){return m}});var l=a(885),n=a(791),t=a(907);var c=a(181);function r(e){return function(e){if(Array.isArray(e))return(0,t.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,c.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=a(184);var o=function(e){var s=(0,n.useState)([]),a=(0,l.Z)(s,2),t=a[0],c=a[1],o=(0,n.useState)(""),d=(0,l.Z)(o,2),m=d[0],h=d[1],u=(0,n.useState)(""),x=(0,l.Z)(u,2),v=x[0],j=x[1],p=(0,n.useState)(""),f=(0,l.Z)(p,2),y=f[0],N=f[1],b=(0,n.useState)(""),g=(0,l.Z)(b,2),k=g[0],C=g[1],S=(0,n.useState)("savings"),w=(0,l.Z)(S,2),E=w[0],A=w[1];return(0,i.jsx)("div",{children:(0,i.jsxs)("form",{action:"index.html",method:"post",style:{width:"100%"},children:[(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("label",{htmlFor:"txtName",className:"form-label",children:"Name"})}),(0,i.jsx)("div",{className:"col-9",children:(0,i.jsx)("input",{type:"text",required:!0,className:"form-control",name:"txtName",id:"txtName",value:m,onChange:function(e){h(e.target.value)}})})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("label",{htmlFor:"txtEmail",className:"form-label",children:"Email"})}),(0,i.jsx)("div",{className:"col-9",children:(0,i.jsx)("input",{type:"email",required:!0,className:"form-control",name:"txtEmail",id:"txtEmail",value:v,onChange:function(e){return j(e.target.value)}})})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("label",{htmlFor:"txtAddress",className:"form-label",children:"Address: "})}),(0,i.jsx)("div",{className:"col-9",children:(0,i.jsx)("textarea",{className:"form-control",name:"txtAddress",id:"txtAddress",value:y,onChange:function(e){return N(e.target.value)}})})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("label",{htmlFor:"ddlCity",children:"City:"})}),(0,i.jsx)("div",{className:"col-9",children:(0,i.jsxs)("select",{name:"ddlCity",id:"ddlCity",className:"form-select",value:k,onChange:function(e){return C(e.target.value)},children:[(0,i.jsx)("option",{value:""}),(0,i.jsx)("option",{value:"Mumbai",children:"Mumbai"}),(0,i.jsx)("option",{value:"Delhi",children:"Delhi"})]})})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("label",{htmlFor:"chkAcctype",children:"Account Type:"})}),(0,i.jsxs)("div",{className:"col-9",children:[(0,i.jsxs)("div",{className:"form-check form-check-inline",children:[(0,i.jsx)("input",{className:"form-check-input",type:"radio",name:"accType",value:"savings",id:"aacTypeSavings",checked:"savings"===E,onChange:function(e){e.target.checked&&A("savings")}}),(0,i.jsx)("label",{className:"form-check-label",htmlFor:"aacTypeSavings",children:"Savings"})]}),(0,i.jsxs)("div",{className:"form-check form-check-inline",children:[(0,i.jsx)("input",{className:"form-check-input",type:"radio",name:"accType",value:"current",id:"accTypeCurrent",checked:"current"===E,onChange:function(e){return e.target.checked&&A("current")}}),(0,i.jsx)("label",{className:"form-check-label",htmlFor:"accTypeCurrent",children:"Current"})]})]})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-3"}),(0,i.jsx)("div",{className:"col-9",children:(0,i.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){console.log("add employee",m,v),m||alert("please enter name");var s=r(t);s.push({name:m,email:v,address:y,city:k,accType:E}),c(s),console.log("updated state",s),h(""),j(""),N(""),C(""),A("savings"),e.onEmployeeListChange(s)},children:"Add"})})]})]})})};a(508);var d=function(e){var s=e.employees||[];return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{children:["Number of employees: ",s.length]}),(0,i.jsx)("div",{children:s.map((function(s,a){return(0,i.jsxs)("div",{className:"emp-row",children:[(0,i.jsx)("div",{children:s.name}),(0,i.jsx)("div",{children:s.email}),(0,i.jsx)("div",{children:s.address}),(0,i.jsx)("div",{children:s.city}),(0,i.jsx)("div",{children:s.accType}),(0,i.jsxs)("div",{children:[(0,i.jsx)("button",{type:"button",onClick:function(){return e.onEmployeeEdit(s)},children:"Edit"}),(0,i.jsx)("button",{type:"button",children:"Delete"})]})]},"emp"+a.toString())}))})]})};var m=function(e){var s=(0,n.useState)([]),a=(0,l.Z)(s,2),t=a[0],c=a[1],r=(0,n.useState)({}),m=(0,l.Z)(r,2),h=m[0],u=m[1];return(0,i.jsx)("div",{className:"emp-container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-6 col-sm-12 left-section",children:(0,i.jsx)(d,{employees:t,onEmployeeEdit:function(e){console.log("Emp object for edit",e),u(e)}})}),(0,i.jsx)("div",{className:"col-md-6 col-sm-12 right-section",children:(0,i.jsx)(o,{onEmployeeListChange:function(e){console.log("***",e),c(e)},editObj:h})})]})})}}}]);
//# sourceMappingURL=686.0f49e3d7.chunk.js.map