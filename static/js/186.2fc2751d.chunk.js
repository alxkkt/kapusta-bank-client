"use strict";(self.webpackChunkreact_project_template=self.webpackChunkreact_project_template||[]).push([[186],{8899:function(a,e,t){t.r(e),t.d(e,{default:function(){return U}});var s="HomePage_section__QO2n7",n="HomePage_title__ygULj",c="HomePage_link__29SvY",l=t(885),i=t(2791),_=t(3504),o=t(4775),r=t(1413),d=t(948),b="ModalBalance_wrapper__+H3WA",m="ModalBalance_tooltipContainer__yjckQ",h="ModalBalance_visible__wFg4O",x="ModalBalance_triangle__yV5k7",u="ModalBalance_textContainer__npWGz",j="ModalBalance_strongSign__mVGuQ",N="ModalBalance_smallSign__twhS9",p=t(3329),f=function(a){var e=a.isOpen;return(0,p.jsxs)("div",{className:function(a){return a?"".concat(m," ").concat(h):"".concat(m)}(e),children:[(0,p.jsx)("div",{className:x}),(0,p.jsx)("div",{className:b,children:(0,p.jsxs)("div",{className:u,children:[(0,p.jsx)("p",{className:j,children:"Hello! To get started, enter the current balance of your account!"}),(0,p.jsx)("p",{className:N,children:"You can't spend money until you have it :)"})]})})]})},g="balance_balance__jTx0k",v="balance_form__foFsA",y="balance_input__qs-TE",S="balance_button__lEJ5T",T="balance_container__y8xuW",L=function(){var a=(0,i.useState)(""),e=(0,l.Z)(a,2),t=e[0],s=e[1],n=(0,i.useState)({isOpen:!1,isShown:!1}),c=(0,l.Z)(n,2),_=c[0],o=c[1];(0,i.useEffect)((function(){+t||_.isShown||setTimeout((function(){o((function(a){return(0,r.Z)((0,r.Z)({},a),{},{isOpen:!0})}))}),500)}),[t,_.isShown]);return(0,p.jsxs)("div",{className:T,onClick:function(){return o({isOpen:!1,isShown:!0})},children:[(0,p.jsx)("p",{className:g,children:"Balance:"}),(0,p.jsxs)("form",{className:v,action:"",children:[(0,p.jsx)(d.Z,{className:y,name:"balance",type:"text",value:t,onChange:function(a){s(a.target.value)},thousandSeparator:" ",decimalSeparator:".",decimalScale:2,fixedDecimalScale:!0,suffix:"UAH",placeholder:"00.00 UAH",minLength:1}),(0,p.jsx)("button",{className:S,type:"submit",children:"CONFIRM"})]}),(0,p.jsx)(f,{isOpen:_.isOpen})]})},O="ReportsIcon_container__h4PbO",w="ReportsIcon_wrapper__T4OaU",B="ReportsIcon_element__8P6+L",k="ReportsIcon_description__BWfbU",C=function(){return(0,p.jsxs)("div",{className:O,children:[(0,p.jsx)("p",{className:k,children:"Reports"}),(0,p.jsxs)("div",{className:w,children:[(0,p.jsx)("div",{className:B}),(0,p.jsx)("div",{className:B}),(0,p.jsx)("div",{className:B})]})]})},Z="transactions_reports__FEBWw",A=function(){var a=(0,i.useState)(Date.now()),e=(0,l.Z)(a,2),t=e[0],s=e[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(_.rU,{className:Z,to:"/reports",children:(0,p.jsx)(C,{})}),(0,p.jsx)(L,{}),(0,p.jsx)(o.Z,{startDate:t,onChange:function(a){s(a)}})]})},M={table:"TransactionsList_table__4Wr3t",table_container:"TransactionsList_table_container__9ZE7O",table_th:"TransactionsList_table_th__2hqVF",table_scroll:"TransactionsList_table_scroll__vJUYN",table_body_transactions:"TransactionsList_table_body_transactions__BmMfO",table_transaction:"TransactionsList_table_transaction__fhQzp",table_date:"TransactionsList_table_date__A9KPA",table_description:"TransactionsList_table_description__NalkP",table_category:"TransactionsList_table_category__+fgx9",table_sum:"TransactionsList_table_sum__yym17",table_icon:"TransactionsList_table_icon__4-XnO",delete_btn:"TransactionsList_delete_btn__KWZ68"},H=t(2075),P=function(){return(0,p.jsxs)("div",{className:M.table_container,children:[(0,p.jsx)("table",{className:M.table,children:(0,p.jsx)("thead",{className:M.table_header,children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{className:"".concat(M.table_th," ").concat(M.table_date),children:"Date"}),(0,p.jsx)("th",{className:"".concat(M.table_th," ").concat(M.table_description),children:"Description"}),(0,p.jsx)("th",{className:"".concat(M.table_th," ").concat(M.table_category),children:"Category"}),(0,p.jsx)("th",{className:"".concat(M.table_th," ").concat(M.table_sum),children:"Sum"}),(0,p.jsx)("th",{className:"".concat(M.table_th," ").concat(M.table_icon)})]})})}),(0,p.jsx)("div",{className:M.table_scroll,children:(0,p.jsx)("table",{className:"".concat(M.table," ").concat(M.table_body_transactions),children:(0,p.jsx)("tbody",{className:M.table_body,children:(0,p.jsxs)("tr",{className:M.table_transaction,children:[(0,p.jsx)("td",{className:M.table_date,children:"Some text"}),(0,p.jsx)("td",{className:M.table_description,children:"Some text"}),(0,p.jsx)("td",{className:M.table_category,children:"Some text"}),(0,p.jsx)("td",{className:M.table_sum,children:"Some text"}),(0,p.jsx)("td",{className:M.table_icon,children:(0,p.jsx)("button",{className:M.delete_btn,children:(0,p.jsx)(H.Z,{name:"icon-delete",width:18,height:18,className:"table_delete_icon"})})})]})})})})]})},U=function(){return(0,p.jsx)("section",{className:s,children:(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("h1",{className:n,children:"Home Page"}),(0,p.jsx)(A,{}),(0,p.jsx)(_.rU,{className:c,to:"/addtransaction",children:"ADD TRANSACTION"}),(0,p.jsx)(P,{})]})})}}}]);
//# sourceMappingURL=186.2fc2751d.chunk.js.map