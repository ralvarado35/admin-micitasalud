"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[9693],{9693:(F,m,t)=>{t.r(m),t.d(m,{MedicalModule:()=>J});var f=t(6895),o=t(27),i=t(4650),v=t(6519),c=t(7945),S=t(9689),g=t(2407);const C=function(s,V,e){return{"expand-menu":s,"mini-sidebar":V,"slide-nav":e}},r=function(s){return{"d-none":s}},M=function(s){return{opened:s}},A=[{path:"",component:(()=>{class s{constructor(e,a,n){this.sideBar=e,this.router=a,this.data=n,this.miniSidebar="false",this.expandMenu="false",this.mobileSidebar="false",this.sideBarActivePath=!1,this.headerActivePath=!1,this.base="",this.page="",this.currentUrl="",this.sideBar.toggleSideBar.subscribe(l=>{this.miniSidebar="true"==l?"true":"false"}),this.sideBar.toggleMobileSideBar.subscribe(l=>{this.mobileSidebar="true"==l||"true"==l?"true":"false"}),this.sideBar.expandSideBar.subscribe(l=>{this.expandMenu=l,"false"==l&&"true"==this.miniSidebar&&this.data.sideBar.map(h=>{h.menu.map(d=>{d.showSubRoute=!1})}),"true"==l&&"true"==this.miniSidebar&&this.data.sideBar.map(h=>{h.menu.map(d=>{const u=sessionStorage.getItem("menuValue");d.showSubRoute=!(!u||u!=d.menuValue)})})}),this.getRoutes(this.router)}toggleMobileSideBar(){this.sideBar.switchMobileSideBarPosition()}getRoutes(e){"confirm-mail"===e.url.split("/")[2]?(this.sideBarActivePath=!1,this.headerActivePath=!1):(this.sideBarActivePath=!0,this.headerActivePath=!0)}static#t=this.\u0275fac=function(a){return new(a||s)(i.Y36(v.G),i.Y36(o.F0),i.Y36(c.D))};static#s=this.\u0275cmp=i.Xpm({type:s,selectors:[["app-medical"]],decls:5,vars:14,consts:[[1,"main-wrapper",3,"ngClass"],[3,"ngClass"],[1,"sidebar-overlay",3,"ngClass"]],template:function(a,n){1&a&&(i.TgZ(0,"div",0),i._UZ(1,"app-header",1)(2,"app-sidebar",1)(3,"router-outlet")(4,"div",2),i.qZA()),2&a&&(i.Q6J("ngClass",i.kEZ(4,C,"true"===n.expandMenu&&"true"===n.miniSidebar,"true"===n.miniSidebar,"true"===n.mobileSidebar)),i.xp6(1),i.Q6J("ngClass",i.VKq(8,r,!1===n.sideBarActivePath&&!1===n.headerActivePath)),i.xp6(1),i.Q6J("ngClass",i.VKq(10,r,!1===n.sideBarActivePath&&!1===n.headerActivePath)),i.xp6(2),i.Q6J("ngClass",i.VKq(12,M,"true"===n.mobileSidebar)))},dependencies:[f.mk,o.lC,S.G,g.k]})}return s})(),canActivate:[t(9744).a],children:[{path:"roles",loadChildren:()=>Promise.all([t.e(7155),t.e(8615)]).then(t.bind(t,8615)).then(s=>s.RolesModule)},{path:"staffs",loadChildren:()=>Promise.all([t.e(7155),t.e(8592),t.e(7865)]).then(t.bind(t,7865)).then(s=>s.StaffModule)},{path:"specialities",loadChildren:()=>Promise.all([t.e(7155),t.e(4975)]).then(t.bind(t,4975)).then(s=>s.SpecialitieModule)},{path:"doctors",loadChildren:()=>Promise.all([t.e(7155),t.e(4608)]).then(t.bind(t,4608)).then(s=>s.DoctorsModule)},{path:"patient-m",loadChildren:()=>Promise.all([t.e(7155),t.e(5207)]).then(t.bind(t,5207)).then(s=>s.PatientMModule)},{path:"appointment-m",loadChildren:()=>Promise.all([t.e(7155),t.e(8592),t.e(3870)]).then(t.bind(t,3870)).then(s=>s.AppointmentModule)},{path:"appointment-pay",loadChildren:()=>Promise.all([t.e(7155),t.e(8592),t.e(8186)]).then(t.bind(t,8186)).then(s=>s.AppointmentPayModule)},{path:"appointment-calendar",loadChildren:()=>Promise.all([t.e(8076),t.e(8592),t.e(8405)]).then(t.bind(t,8405)).then(s=>s.CalendarAppointmentModule)},{path:"setting-m",loadChildren:()=>t.e(4159).then(t.bind(t,4159)).then(s=>s.SettingMModule)},{path:"clinics",loadChildren:()=>Promise.all([t.e(7155),t.e(3241)]).then(t.bind(t,3241)).then(s=>s.ClinicModule)}]}];let p=(()=>{class s{static#t=this.\u0275fac=function(a){return new(a||s)};static#s=this.\u0275mod=i.oAB({type:s});static#i=this.\u0275inj=i.cJS({imports:[o.Bz.forChild(A),o.Bz]})}return s})();var y=t(9079),R=t(433);let J=(()=>{class s{static#t=this.\u0275fac=function(a){return new(a||s)};static#s=this.\u0275mod=i.oAB({type:s});static#i=this.\u0275inj=i.cJS({imports:[f.ez,p,y.m,R.u5]})}return s})()}}]);