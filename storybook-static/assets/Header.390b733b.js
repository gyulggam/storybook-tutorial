var p=Object.defineProperty;var m=(t,e)=>p(t,"name",{value:e,configurable:!0});import{_ as g,M as v}from"./Button.4992636b.js";import{b as c,e as s,f as u,t as h,g as a,i as r,j as y,k as f,o as n}from"./vue.esm-bundler.18dcd8e3.js";const d={name:"my-header",components:{MyButton:v},props:{user:{type:Object}},emits:["login","logout","createAccount"]},k={class:"wrapper"},_=y('<div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg><h1>Acme</h1></div>',1),b={key:0,class:"welcome"};function w(t,e,o,z,A,B){const l=f("my-button");return n(),c("header",null,[s("div",k,[_,s("div",null,[o.user?(n(),c("span",b,[u("Welcome, "),s("b",null,h(o.user.name),1),u("!")])):a("",!0),o.user?(n(),r(l,{key:1,size:"small",onClick:e[0]||(e[0]=i=>t.$emit("logout")),label:"Log out"})):a("",!0),o.user?a("",!0):(n(),r(l,{key:2,size:"small",onClick:e[1]||(e[1]=i=>t.$emit("login")),label:"Log in"})),o.user?a("",!0):(n(),r(l,{key:3,primary:"",size:"small",onClick:e[2]||(e[2]=i=>t.$emit("createAccount")),label:"Sign up"}))])])])}m(w,"_sfc_render");const C=g(d,[["render",w]]);d.__docgenInfo={displayName:"my-header",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"logout"},{name:"login"},{name:"createAccount"}]};export{C as M};
//# sourceMappingURL=Header.390b733b.js.map
