"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[6341],{9689:(M,v,s)=>{s.d(v,{G:()=>u});var c=s(6382),e=s(4650),t=s(27),f=s(6519),Z=s(866),h=s(6895),d=s(433);function l(r,E){if(1&r&&(e.TgZ(0,"div",42),e._UZ(1,"img",43),e.qZA()),2&r){const o=e.oxw();e.xp6(1),e.Q6J("src",o.IMAGEN_PREVISUALIZA,e.LSH)}}const p=function(r){return["/doctors/list/profile/",r]};function U(r,E){if(1&r&&(e.TgZ(0,"a",25),e._uU(1,"Mi Perfil"),e.qZA()),2&r){const o=e.oxw(2);e.Q6J("routerLink",e.VKq(1,p,o.user.id))}}function O(r,E){if(1&r&&(e.ynx(0),e.YNc(1,U,2,3,"a",44),e.BQk()),2&r){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.isPermision("profile_doctor"))}}let u=(()=>{class r{constructor(o,g,n){this.router=o,this.sideBar=g,this.auth=n,this.routes=c._,this.openBox=!1,this.miniSidebar=!1,this.addClass=!1,this.IMAGEN_PREVISUALIZA="assets/img/user-06.jpg",this.sideBar.toggleSideBar.subscribe(a=>{this.miniSidebar="true"==a});const T=localStorage.getItem("user");this.user=JSON.parse(T||""),console.log(this.user),this.IMAGEN_PREVISUALIZA=this.user.avatar?this.user.avatar:"assets/img/user-06.jpg"}isPermited(){let o=!1;return this.user.roles.forEach(g=>{-1!=g.toUpperCase().indexOf("DOCTOR")&&(o=!0)}),o}isPermision(o=""){return!(!this.user.roles.includes("Super-Admin")&&!this.user.permissions.includes(o))}getRole(){let o="";return this.user.roles.forEach(g=>{o=g}),o}openBoxFunc(){this.openBox=!this.openBox;var o=document.getElementsByClassName("main-wrapper")[0];this.openBox?o.classList.add("open-msg-box"):o.classList.remove("open-msg-box")}toggleSideBar(){this.sideBar.switchSideMenuPosition()}toggleMobileSideBar(){this.sideBar.switchMobileSideBarPosition(),this.addClass=!this.addClass;var o=document.getElementsByTagName("html")[0],g=document.getElementById("sidebar");this.addClass?(o.classList.add("menu-opened"),g.classList.add("opened")):(o.classList.remove("menu-opened"),g.classList.remove("opened"))}logout(){this.auth.logout()}static#e=this.\u0275fac=function(g){return new(g||r)(e.Y36(t.F0),e.Y36(f.G),e.Y36(Z.e))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-header"]],decls:232,vars:23,consts:[[1,"header"],[1,"header-left"],[1,"logo",3,"routerLink"],["src","assets/img/logo.png","width","150px","alt",""],["id","toggle_btn","href","javascript:void(0);",3,"click"],["src","assets/img/icons/bar-icon.svg","alt",""],["id","mobile_btn",1,"mobile_btn","float-start",3,"click"],[1,"top-nav-search","mob-view"],["type","text","placeholder","Search here",1,"form-control"],[1,"btn"],["src","assets/img/icons/search-normal.svg","alt",""],[1,"nav","user-menu","float-end"],[1,"nav-item","dropdown","has-arrow","user-profile-list"],["href","javascript:void(0);","data-bs-toggle","dropdown",1,"dropdown-toggle","nav-link","user-link"],[1,"user-names"],[1,"user-img"],["class","",4,"ngIf"],[1,"dropdown-menu"],[4,"ngIf"],["href","#","onclick","return false",1,"dropdown-item",3,"click"],[1,"nav-item"],[1,"dropdown","mobile-user-menu","float-end"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle"],[1,"fa-solid","fa-ellipsis-vertical"],[1,"dropdown-menu","dropdown-menu-end"],[1,"dropdown-item",3,"routerLink"],[1,"notification-box"],[1,"msg-sidebar","notifications","msg-noti"],[1,"topnav-dropdown-header"],["id","msg_list",1,"drop-scroll","msg-list-scroll"],[1,"list-box"],[3,"routerLink"],[1,"list-item"],[1,"list-left"],[1,"avatar"],[1,"list-body"],[1,"message-author"],[1,"message-time"],[1,"clearfix"],[1,"message-content"],[1,"list-item","new-message"],[1,"topnav-dropdown-footer"],[1,""],["alt","","width","250","srcset","",3,"src"],["class","dropdown-item",3,"routerLink",4,"ngIf"]],template:function(g,n){1&g&&(e.TgZ(0,"div",0)(1,"div",1)(2,"a",2),e._UZ(3,"img",3),e.qZA()(),e.TgZ(4,"a",4),e.NdJ("click",function(){return n.toggleSideBar()}),e._UZ(5,"img",5),e.qZA(),e.TgZ(6,"a",6),e.NdJ("click",function(){return n.toggleMobileSideBar()}),e._UZ(7,"img",5),e.qZA(),e.TgZ(8,"div",7)(9,"form"),e._UZ(10,"input",8),e.TgZ(11,"a",9),e._UZ(12,"img",10),e.qZA()()(),e.TgZ(13,"ul",11)(14,"li",12)(15,"a",13)(16,"div",14)(17,"h5"),e._uU(18),e.qZA(),e.TgZ(19,"span"),e._uU(20),e.qZA()(),e.TgZ(21,"span",15),e.YNc(22,l,2,1,"div",16),e.qZA()(),e.TgZ(23,"div",17),e.YNc(24,O,2,1,"ng-container",18),e.TgZ(25,"a",19),e.NdJ("click",function(){return n.logout()}),e._uU(26,"Salir"),e.qZA()()(),e._UZ(27,"li",20),e.qZA(),e.TgZ(28,"div",21)(29,"a",22),e._UZ(30,"i",23),e.qZA(),e.TgZ(31,"div",24)(32,"a",25),e._uU(33,"My Profile"),e.qZA(),e.TgZ(34,"a",25),e._uU(35,"Edit Profile"),e.qZA(),e.TgZ(36,"a",25),e._uU(37,"Settings"),e.qZA(),e.TgZ(38,"a",25),e._uU(39,"Logout"),e.qZA()()()(),e.TgZ(40,"div",26)(41,"div",27)(42,"div",28)(43,"span"),e._uU(44,"Messages"),e.qZA()(),e.TgZ(45,"div",29)(46,"ul",30)(47,"li")(48,"a",31)(49,"div",32)(50,"div",33)(51,"span",34),e._uU(52,"R"),e.qZA()(),e.TgZ(53,"div",35)(54,"span",36),e._uU(55,"Richard Miles "),e.qZA(),e.TgZ(56,"span",37),e._uU(57,"12:28 AM"),e.qZA(),e._UZ(58,"div",38),e.TgZ(59,"span",39),e._uU(60,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(61,"li")(62,"a",31)(63,"div",40)(64,"div",33)(65,"span",34),e._uU(66,"J"),e.qZA()(),e.TgZ(67,"div",35)(68,"span",36),e._uU(69,"John Doe"),e.qZA(),e.TgZ(70,"span",37),e._uU(71,"1 Aug"),e.qZA(),e._UZ(72,"div",38),e.TgZ(73,"span",39),e._uU(74,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(75,"li")(76,"a",31)(77,"div",32)(78,"div",33)(79,"span",34),e._uU(80,"T"),e.qZA()(),e.TgZ(81,"div",35)(82,"span",36),e._uU(83," Tarah Shropshire "),e.qZA(),e.TgZ(84,"span",37),e._uU(85,"12:28 AM"),e.qZA(),e._UZ(86,"div",38),e.TgZ(87,"span",39),e._uU(88,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(89,"li")(90,"a",31)(91,"div",32)(92,"div",33)(93,"span",34),e._uU(94,"M"),e.qZA()(),e.TgZ(95,"div",35)(96,"span",36),e._uU(97,"Mike Litorus"),e.qZA(),e.TgZ(98,"span",37),e._uU(99,"12:28 AM"),e.qZA(),e._UZ(100,"div",38),e.TgZ(101,"span",39),e._uU(102,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(103,"li")(104,"a",31)(105,"div",32)(106,"div",33)(107,"span",34),e._uU(108,"C"),e.qZA()(),e.TgZ(109,"div",35)(110,"span",36),e._uU(111," Catherine Manseau "),e.qZA(),e.TgZ(112,"span",37),e._uU(113,"12:28 AM"),e.qZA(),e._UZ(114,"div",38),e.TgZ(115,"span",39),e._uU(116,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(117,"li")(118,"a",31)(119,"div",32)(120,"div",33)(121,"span",34),e._uU(122,"D"),e.qZA()(),e.TgZ(123,"div",35)(124,"span",36),e._uU(125," Domenic Houston "),e.qZA(),e.TgZ(126,"span",37),e._uU(127,"12:28 AM"),e.qZA(),e._UZ(128,"div",38),e.TgZ(129,"span",39),e._uU(130,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(131,"li")(132,"a",31)(133,"div",32)(134,"div",33)(135,"span",34),e._uU(136,"B"),e.qZA()(),e.TgZ(137,"div",35)(138,"span",36),e._uU(139," Buster Wigton "),e.qZA(),e.TgZ(140,"span",37),e._uU(141,"12:28 AM"),e.qZA(),e._UZ(142,"div",38),e.TgZ(143,"span",39),e._uU(144,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(145,"li")(146,"a",31)(147,"div",32)(148,"div",33)(149,"span",34),e._uU(150,"R"),e.qZA()(),e.TgZ(151,"div",35)(152,"span",36),e._uU(153," Rolland Webber "),e.qZA(),e.TgZ(154,"span",37),e._uU(155,"12:28 AM"),e.qZA(),e._UZ(156,"div",38),e.TgZ(157,"span",39),e._uU(158,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(159,"li")(160,"a",31)(161,"div",32)(162,"div",33)(163,"span",34),e._uU(164,"C"),e.qZA()(),e.TgZ(165,"div",35)(166,"span",36),e._uU(167," Claire Mapes "),e.qZA(),e.TgZ(168,"span",37),e._uU(169,"12:28 AM"),e.qZA(),e._UZ(170,"div",38),e.TgZ(171,"span",39),e._uU(172,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(173,"li")(174,"a",31)(175,"div",32)(176,"div",33)(177,"span",34),e._uU(178,"M"),e.qZA()(),e.TgZ(179,"div",35)(180,"span",36),e._uU(181,"Melita Faucher"),e.qZA(),e.TgZ(182,"span",37),e._uU(183,"12:28 AM"),e.qZA(),e._UZ(184,"div",38),e.TgZ(185,"span",39),e._uU(186,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(187,"li")(188,"a",31)(189,"div",32)(190,"div",33)(191,"span",34),e._uU(192,"J"),e.qZA()(),e.TgZ(193,"div",35)(194,"span",36),e._uU(195,"Jeffery Lalor"),e.qZA(),e.TgZ(196,"span",37),e._uU(197,"12:28 AM"),e.qZA(),e._UZ(198,"div",38),e.TgZ(199,"span",39),e._uU(200,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(201,"li")(202,"a",31)(203,"div",32)(204,"div",33)(205,"span",34),e._uU(206,"L"),e.qZA()(),e.TgZ(207,"div",35)(208,"span",36),e._uU(209,"Loren Gatlin"),e.qZA(),e.TgZ(210,"span",37),e._uU(211,"12:28 AM"),e.qZA(),e._UZ(212,"div",38),e.TgZ(213,"span",39),e._uU(214,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(215,"li")(216,"a",31)(217,"div",32)(218,"div",33)(219,"span",34),e._uU(220,"T"),e.qZA()(),e.TgZ(221,"div",35)(222,"span",36),e._uU(223,"Tarah Shropshire"),e.qZA(),e.TgZ(224,"span",37),e._uU(225,"12:28 AM"),e.qZA(),e._UZ(226,"div",38),e.TgZ(227,"span",39),e._uU(228,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()()()(),e.TgZ(229,"div",41)(230,"a",31),e._uU(231,"See all messages"),e.qZA()()()()),2&g&&(e.xp6(2),e.Q6J("routerLink",n.routes.adminDashboard),e.xp6(16),e.hij("",n.user.name," "),e.xp6(2),e.Oqu(n.getRole()),e.xp6(2),e.Q6J("ngIf",n.IMAGEN_PREVISUALIZA),e.xp6(2),e.Q6J("ngIf",n.isPermited()),e.xp6(8),e.Q6J("routerLink",n.routes.profile),e.xp6(2),e.Q6J("routerLink",n.routes.editProfile),e.xp6(2),e.Q6J("routerLink",n.routes.settings),e.xp6(2),e.Q6J("routerLink",n.routes.login),e.xp6(10),e.Q6J("routerLink",n.routes.chat),e.xp6(14),e.Q6J("routerLink",n.routes.chat),e.xp6(14),e.Q6J("routerLink",n.routes.chat),e.xp6(14),e.Q6J("routerLink",n.routes.chat),e.xp6(14),e.Q6J("routerLink",n.routes.chat),e.xp6(14),e.Q6J("routerLink",n.routes.chat),e.xp6(14),e.Q6J("routerLink",n.routes.chat),e.xp6(14),e.Q6J("routerLink",n.routes.chat),e.xp6(14),e.Q6J("routerLink",n.routes.chat),e.xp6(14),e.Q6J("routerLink",n.routes.chat),e.xp6(14),e.Q6J("routerLink",n.routes.chat),e.xp6(14),e.Q6J("routerLink",n.routes.chat),e.xp6(14),e.Q6J("routerLink",n.routes.chat),e.xp6(14),e.Q6J("routerLink",n.routes.chat))},dependencies:[h.O5,d._Y,d.JL,d.F,t.rH]})}return r})()},2407:(M,v,s)=>{s.d(v,{k:()=>T});var c=s(27),e=s(6382),t=s(4650),f=s(7945),Z=s(6519),h=s(866),d=s(6895),l=s(4153);function p(a,A){if(1&a&&t._UZ(0,"i",13),2&a){const i=t.oxw(2).$implicit;t.Tol(i.icon)}}function U(a,A){if(1&a&&(t.TgZ(0,"li")(1,"a",10)(2,"span",5),t.YNc(3,p,1,2,"i",11),t._UZ(4,"img",12),t.qZA(),t.TgZ(5,"span"),t._uU(6),t.ALo(7,"titlecase"),t.qZA()()()),2&a){const i=t.oxw().$implicit,_=t.oxw(2);t.xp6(1),t.ekj("active",_.base===i.base),t.Q6J("routerLink",i.route),t.xp6(2),t.Q6J("ngIf",!0===i.faIcon),t.xp6(1),t.Q6J("src",i.img,t.LSH),t.xp6(2),t.Oqu(t.lcZ(7,6,i.menuValue))}}function O(a,A){if(1&a&&t._UZ(0,"i",13),2&a){const i=t.oxw(2).$implicit;t.Tol(i.icon)}}function u(a,A){if(1&a&&(t.TgZ(0,"a",10),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&a){const i=t.oxw().$implicit,_=t.oxw(4);t.ekj("active",_.currentUrl===i.base),t.Q6J("routerLink",i.route),t.xp6(1),t.hij(" ",t.lcZ(2,4,i.menuValue)," ")}}function r(a,A){if(1&a&&(t.ynx(0),t.TgZ(1,"li",17),t.YNc(2,u,3,6,"a",18),t.qZA(),t.BQk()),2&a){const i=A.$implicit,_=t.oxw(2).$implicit;t.xp6(1),t.Q6J("ngClass",!0===_.showSubRoute?"d-block":"d-none"),t.xp6(1),t.Q6J("ngIf",i.show_nav)}}const E=function(a){return{subdrop:a}};function o(a,A){if(1&a){const i=t.EpF();t.TgZ(0,"li",14)(1,"a",15),t.NdJ("click",function(){t.CHM(i);const m=t.oxw().$implicit,L=t.oxw(2);return t.KtG(L.expandSubMenus(m))}),t.TgZ(2,"span",5),t.YNc(3,O,1,2,"i",11),t._UZ(4,"img",12),t.qZA(),t.TgZ(5,"span"),t._uU(6),t.ALo(7,"titlecase"),t.qZA(),t._UZ(8,"span",16),t.qZA(),t.TgZ(9,"ul"),t.YNc(10,r,3,2,"ng-container",2),t.qZA()()}if(2&a){const i=t.oxw().$implicit,_=t.oxw(2);t.xp6(1),t.ekj("active",_.base===i.base),t.Q6J("ngClass",t.VKq(9,E,!0===i.showSubRoute)),t.xp6(2),t.Q6J("ngIf",!0===i.faIcon),t.xp6(1),t.Q6J("src",i.img,t.LSH),t.xp6(2),t.hij(" ",t.lcZ(7,7,i.menuValue),""),t.xp6(4),t.Q6J("ngForOf",i.subMenus)}}function g(a,A){if(1&a&&(t.ynx(0),t.YNc(1,U,8,8,"li",8),t.YNc(2,o,11,11,"li",9),t.BQk()),2&a){const i=A.$implicit;t.xp6(1),t.Q6J("ngIf",!1===i.hasSubRoute),t.xp6(1),t.Q6J("ngIf",!0===i.hasSubRoute)}}function n(a,A){if(1&a&&(t.ynx(0),t.TgZ(1,"li",7)(2,"span"),t._uU(3),t.ALo(4,"titlecase"),t.qZA()(),t.YNc(5,g,3,2,"ng-container",2),t.BQk()),2&a){const i=A.$implicit;t.xp6(3),t.Oqu(t.lcZ(4,2,i.tittle)),t.xp6(2),t.Q6J("ngForOf",i.menu)}}let T=(()=>{class a{constructor(i,_,m,L){this.data=i,this.router=_,this.sideBar=m,this.authService=L,this.base="",this.page="",this.currentUrl="",this.classAdd=!1,this.multilevel=[!1,!1,!1],this.routes=e._,this.sidebarData=[];const B=localStorage.getItem("user");if(this.user=JSON.parse(B||""),this.user.roles.includes("Super-Admin"))this.sidebarData=this.data.sideBar;else{const I=this.user.permissions,x=[];this.data.sideBar.forEach(D=>{const b=[];D.menu.forEach(S=>{if(S.subMenus.length>0){const C=S.subMenus.filter(P=>I.includes(P.permision)&&P.show_nav);C.length>0&&(S.subMenus=C,b.push(S))}else I.includes(S.permision)&&(S.subMenus=[],b.push(S))}),b.length>0&&(D.menu=b,x.push(D))}),this.sidebarData=x}_.events.subscribe(I=>{I instanceof c.m2&&this.getRoutes(I)}),this.getRoutes(this.router)}expandSubMenus(i){sessionStorage.setItem("menuValue",i.menuValue),this.sidebarData.map(_=>{_.menu.map(m=>{m.menuValue==i.menuValue?i.showSubRoute=!i.showSubRoute:m.showSubRoute=!1})})}getRoutes(i){const _=document.body;_.classList.remove("slide-nav"),_.classList.remove("opened"),this.currentUrl=i.url;const m=i.url.split("/");this.base=m[1],this.page=m[2]}miniSideBarMouseHover(i){this.sideBar.expandSideBar.next("over"==i?"true":"false")}logout(){this.authService.logout()}static#e=this.\u0275fac=function(_){return new(_||a)(t.Y36(f.D),t.Y36(c.F0),t.Y36(Z.G),t.Y36(h.e))};static#t=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-sidebar"]],decls:11,vars:1,consts:[["id","sidebar",1,"sidebar",3,"mouseover","mouseout"],["id","sidebar-menu",1,"sidebar-menu"],[4,"ngFor","ngForOf"],[1,"logout-btn"],[3,"click"],[1,"menu-side"],["src","assets/img/icons/logout.svg","alt",""],[1,"menu-title"],[4,"ngIf"],["class","submenu",4,"ngIf"],[3,"routerLink"],["class","fa",3,"class",4,"ngIf"],["alt","",3,"src"],[1,"fa"],[1,"submenu"],["href","javascript:void(0)",3,"ngClass","click"],[1,"menu-arrow"],[3,"ngClass"],[3,"routerLink","active",4,"ngIf"]],template:function(_,m){1&_&&(t.TgZ(0,"div",0),t.NdJ("mouseover",function(){return m.miniSideBarMouseHover("over")})("mouseout",function(){return m.miniSideBarMouseHover("out")}),t.TgZ(1,"ng-scrollbar")(2,"div",1)(3,"ul"),t.YNc(4,n,6,4,"ng-container",2),t.qZA(),t.TgZ(5,"div",3)(6,"a",4),t.NdJ("click",function(){return m.logout()}),t.TgZ(7,"span",5),t._UZ(8,"img",6),t.qZA(),t.TgZ(9,"span"),t._uU(10,"Salir"),t.qZA()()()()()()),2&_&&(t.xp6(4),t.Q6J("ngForOf",m.sidebarData))},dependencies:[d.mk,d.sg,d.O5,l.KC,c.rH,d.rS]})}return a})()},5862:(M,v,s)=>{s.d(v,{$g:()=>t});const t="https://api.micitasalud.com/api"},866:(M,v,s)=>{s.d(v,{e:()=>p});var c=s(6382),e=s(5862),t=s(4004),f=s(262),Z=s(9646),h=s(4650),d=s(27),l=s(529);let p=(()=>{class U{constructor(u,r){this.router=u,this.http=r,this.getLocalStorage()}getLocalStorage(){if(localStorage.getItem("token")&&localStorage.getItem("user")){const u=localStorage.getItem("user");this.user=JSON.parse(u||""),this.token=localStorage.getItem("token")}else this.user=null,this.token=null}registerUser(u){return this.http.post(e.$g+"/auth/register",u)}login(u,r){return this.http.post(e.$g+"/auth/login",{email:u,password:r}).pipe((0,t.U)(o=>(console.log(o),this.saveLocalStorage(o))),(0,f.K)(o=>(console.log(o),(0,Z.of)(void 0))))}saveLocalStorage(u){return!(!u||!u.access_token||(localStorage.setItem("token",u.access_token),localStorage.setItem("user",JSON.stringify(u.user)),localStorage.setItem("authenticated","true"),localStorage.setItem("clinic_id",u.user.clinic_id),0))}logout(){localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("authenticated"),localStorage.removeItem("clinic_id"),this.router.navigate([c._.login])}static#e=this.\u0275fac=function(r){return new(r||U)(h.LFG(d.F0),h.LFG(l.eN))};static#t=this.\u0275prov=h.Yz7({token:U,factory:U.\u0275fac,providedIn:"root"})}return U})()},9744:(M,v,s)=>{s.d(v,{a:()=>Z});var c=s(6382),e=s(4650),t=s(27),f=s(866);let Z=(()=>{class h{constructor(l,p){this.router=l,this.auth=p}canActivate(){if(!localStorage.getItem("token")||!localStorage.getItem("user"))return this.router.navigate([c._.login]),!1;const l=localStorage.getItem("token");console.log(l);const p=JSON.parse(atob(l.split(".")[1])).exp;return Math.floor((new Date).getTime()/1e3)>=p?(this.auth.logout(),!1):(console.log(!0),!0)}static#e=this.\u0275fac=function(p){return new(p||h)(e.LFG(t.F0),e.LFG(f.e))};static#t=this.\u0275prov=e.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()},6519:(M,v,s)=>{s.d(v,{G:()=>f});var c=s(1135),e=s(4650),t=s(7945);let f=(()=>{class Z{constructor(d){this.data=d,this.toggleSideBar=new c.X(localStorage.getItem("isMiniSidebar")||"false"),this.toggleMobileSideBar=new c.X(localStorage.getItem("isMobileSidebar")||"false"),this.expandSideBar=new c.X("false")}switchSideMenuPosition(){localStorage.getItem("isMiniSidebar")?(this.toggleSideBar.next("false"),localStorage.removeItem("isMiniSidebar"),this.data.sideBar.map(d=>{d.menu.map(l=>{const p=sessionStorage.getItem("menuValue");p&&p==l.menuValue&&(l.showSubRoute=!0)})})):(this.toggleSideBar.next("true"),localStorage.setItem("isMiniSidebar","true"),this.data.sideBar.map(d=>{d.menu.map(l=>{l.showSubRoute=!1})}))}switchMobileSideBarPosition(){localStorage.getItem("isMobileSidebar")?(this.toggleMobileSideBar.next("false"),localStorage.removeItem("isMobileSidebar")):(this.toggleMobileSideBar.next("true"),localStorage.setItem("isMobileSidebar","true"))}static#e=this.\u0275fac=function(l){return new(l||Z)(e.LFG(t.D))};static#t=this.\u0275prov=e.Yz7({token:Z,factory:Z.\u0275fac,providedIn:"root"})}return Z})()}}]);