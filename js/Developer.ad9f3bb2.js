(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Developer"],{"0160":function(t,e,i){},"2a7f":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var a=i("71d9"),s=i("80d2"),n=Object(s["e"])("v-toolbar__title"),r=Object(s["e"])("v-toolbar__items");a["a"]},3054:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("v-toolbar",{staticStyle:{"background-color":"#272727"},attrs:{elevation:"0"}},[i("v-toolbar-title",{staticClass:"text-h4",staticStyle:{color:"white"}},[t._v(" Products ")])],1),i("v-timeline",{attrs:{"align-top":"",dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.project_data,(function(e,a){return i("v-timeline-item",{key:a,attrs:{color:e.color,icon:e.icon}},[i("v-card",{attrs:{color:e.color,dark:""}},[i("v-card-title",{staticClass:"text-h6"},[t._v(" "+t._s(e.project)+" ")]),i("v-card-text",{staticClass:"white text--primary"},[i("p",[t._v(t._s(e.programming_language))]),i("p",[t._v("Duration: "+t._s(e.duration))]),i("v-btn",{attrs:{text:"",to:/projectinformation/+e.id+"/"+e.project}},[i("v-btn",{attrs:{fab:"",color:e.color}},[i("v-icon",[t._v("mdi-arrow-right")])],1),i("span",{staticStyle:{color:"black"}},[t._v("See the project")])],1)],1)],1)],1)})),1)],1)])},s=[],n=i("33e6"),r={name:"ProjectsList",data:function(){return{project_data:n.data.pr,dialog:!1,project_id:0}}},o=r,l=i("2877"),c=i("6544"),d=i.n(c),h=i("8336"),p=i("b0af"),u=i("99d9"),m=i("132d"),v=i("5530"),g=(i("0160"),i("58df")),f=i("7560"),b=Object(g["a"])(f["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return Object(v["a"])({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),y=(i("c96a"),i("9d26")),w=i("a9ad"),_=Object(g["a"])(w["a"],f["a"]),j=_.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(y["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var t=this.setBackgroundColor(this.color);return this.$createElement("div",Object(v["a"])({staticClass:"v-timeline-item__inner-dot"},t),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(t){var e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:Object(v["a"])({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},e)}}),T=i("71d9"),k=i("2a7f"),I=Object(l["a"])(o,a,s,!1,null,null,null);e["default"]=I.exports;d()(I,{VBtn:h["a"],VCard:p["a"],VCardText:u["c"],VCardTitle:u["d"],VIcon:m["a"],VTimeline:b,VTimelineItem:j,VToolbar:T["a"],VToolbarTitle:k["a"]})},"33e6":function(t){t.exports=JSON.parse('{"data":{"pr":[{"id":0,"project":"BUSE Community website","programming_language":"Frameworks: Ionic + Angular","database":"Database: Firebase","color":"indigo","duration":"25 January 2022- present","description":"For all events at Bindura University of Science Education visit: https://busecommunity.web.app . I developed this project for both websites and android application using Ionic Framework. This app will be made available on Google play store once it is finishes Beta version"},{"id":1,"project":"ICT Inventory","programming_language":"Programming Language: Java","database":"Database: MySQL","color":"green darken","duration":"December 2020-March 2021","description":"I developed this project during my industrial attachment period at MUAST Zimbabwe. I developed and deployed the ICT Inventory system on a productions server. The system authenticates the user using the login screen and it validates whether the user exists or not. If the user exists it checks the role of the user such as normal user, admin and super admin. The normal user as the ability to just view tables without performing additional functions which the admin and super admin user holds. The admin user has the permission to add stock, add and modify employees. When adding stock the required details are product serial number, model, Name, Category, Location and Description. After adding the fields and clicking add stock the system validates the entered details. If the details are correct the stock is added into the stock table in the ICT inventory database and appears in the stock panel in the User interface. The stock panel provides the issue button which opens the Issue Form. The Issue Form will allow the user to issue the stock by selecting the employee in the employee and clicking issue product. "},{"id":2,"project":"Transport Requesition System","programming_language":"Frameworks: Vue.js, Laravel.","database":"Database: MySQL","color":"purple darken-1","duration":"March 2021-June 2021","description":"I developed this project during my industrial attachment period at MUAST Zimbabwe. I learned the various concepts of Laravel and Vue.js which made me be able to develop the Transport Requisition system. I successfully managed to create the Transport Requisition database using MySQL The system uses Single Page Application (SPA) and RESTFUL Application Programming Interface (API). A RESTFUL Application Programming Interface (API) is an application programming Interface that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services (Redhat, 2020). A Single Page Application is an application that allows the user navigate to different web pages without the need for the page to refresh or reload. The major functions of the Transport Requisition System are to allow the user to request for Transport and the HOD of that department approves it. After the HOD of that department has approved the transport the Transport manager will then approve that the transport will be made available. I made the system authenticate the user using a Laravel package named Sanctum"},{"id":3,"project":"DanverSoft Lab website","programming_language":"Frameworks: Vue.js","database":"Database: Json","color":"indigo","duration":"30 August 2021","description":"If you have visited this website you have seen one of my creations."}]}}')},3408:function(t,e,i){},"3ccb":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-card",{attrs:{"max-width":"740px"}},[a("v-app-bar",{attrs:{flat:"",color:"indigo"}},[a("v-btn",{attrs:{icon:"",to:"/"}},[a("v-icon",{attrs:{color:"white",size:"lg"}},[t._v(" mdi-arrow-left ")])],1),a("v-app-bar-title",{staticStyle:{color:"white"}},[t._v("Developer")])],1),a("v-card-title",[a("v-avatar",{attrs:{size:"100"}},[a("img",{attrs:{alt:"user",src:i("a87b")}})]),t._v("Danver Kanyemba ")],1),a("v-card-subtitle",{staticStyle:{"padding-top":"20px"}},[t._v(" Student at Bindura University currently studying IT specialising in Software engineering. Skilled in web application development, Java Desktop Application development and User interface Design. Posses a knock for taking part in engineering involving innovative technology. "),a("br"),a("strong",[t._v("Technology skills: ")]),t._v("HTML, css, JavaScript, Java, Typescript. "),a("br"),a("strong",[t._v("Frameworks skills: ")]),t._v("Angular, Vue js and Laravel ")]),a("v-card-text",[a("div",{staticClass:"font-weight-bold ml-8 mb-2"},[t._v("Today")])])],1)],1)],1)},s=[],n={name:"Developer"},r=n,o=i("2877"),l=i("6544"),c=i.n(l),d=i("40dc"),h=i("3206"),p=i("80d2"),u=i("0246"),m=Object(h["a"])("VAppBar","v-app-bar-title","v-app-bar"),v=m.extend().extend({name:"v-app-bar-title",data:function(){return{contentWidth:0,left:0,width:0}},watch:{"$vuetify.breakpoint.width":"updateDimensions"},computed:{styles:function(){if(!this.contentWidth)return{};var t=this.width,e=this.contentWidth,i=Object(u["easeInOutCubic"])(Math.min(1,1.5*this.VAppBar.scrollRatio));return{width:Object(p["d"])(t+(e-t)*i),visibility:this.VAppBar.scrollRatio?"visible":"hidden"}}},mounted:function(){this.updateDimensions()},methods:{updateDimensions:function(){var t=this.$refs.placeholder.getBoundingClientRect();this.width=t.width,this.left=t.left,this.contentWidth=this.$refs.content.scrollWidth}},render:function(t){return t("div",{class:"v-toolbar__title v-app-bar-title"},[t("div",{class:"v-app-bar-title__content",style:this.styles,ref:"content"},[this.$slots.default]),t("div",{class:"v-app-bar-title__placeholder",style:{visibility:this.VAppBar.scrollRatio?"hidden":"visible"},ref:"placeholder"},[this.$slots.default])])}}),g=i("5530"),f=(i("a9e3"),i("3408"),i("a9ad")),b=i("24b2"),y=i("a236"),w=i("58df"),_=Object(w["a"])(f["a"],b["a"],y["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(g["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(g["a"])({height:Object(p["d"])(this.size),minWidth:Object(p["d"])(this.size),width:Object(p["d"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),j=i("8336"),T=i("b0af"),k=i("99d9"),I=i("a523"),S=i("132d"),C=i("0fd9"),D=Object(o["a"])(r,a,s,!1,null,null,null);e["default"]=D.exports;c()(D,{VAppBar:d["a"],VAppBarTitle:v,VAvatar:_,VBtn:j["a"],VCard:T["a"],VCardSubtitle:k["b"],VCardText:k["c"],VCardTitle:k["d"],VContainer:I["a"],VIcon:S["a"],VRow:C["a"]})},"9d26":function(t,e,i){"use strict";var a=i("132d");e["a"]=a["a"]},a87b:function(t,e,i){t.exports=i.p+"img/danver.6812938f.jpg"}}]);