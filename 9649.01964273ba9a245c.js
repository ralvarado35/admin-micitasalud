"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[9649],{9649:(x,u,o)=>{o.r(u),o.d(u,{ProvidentFundModule:()=>U});var l=o(6895),c=o(27),m=o(7155),v=o(6382),t=o(4650),_=o(7945),p=o(6308),g=o(433);const Z=function(i,d){return{"status-green":i,"status-orange":d}};function f(i,d){if(1&i&&(t.TgZ(0,"tr")(1,"td")(2,"div",36),t._UZ(3,"input",37),t.qZA()(),t.TgZ(4,"td",54)(5,"a",7),t._UZ(6,"img",55),t._uU(7),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td")(17,"div",56)(18,"a",57),t._uU(19),t.qZA(),t.TgZ(20,"div",58)(21,"a",59),t._uU(22,"Pending"),t.qZA(),t.TgZ(23,"a",59),t._uU(24,"Approved"),t.qZA()()()(),t.TgZ(25,"td",60)(26,"div",61)(27,"a",62),t._UZ(28,"i",63),t.qZA(),t.TgZ(29,"div",64)(30,"a",65),t._UZ(31,"i",66),t._uU(32," Edit"),t.qZA(),t.TgZ(33,"a",67),t._UZ(34,"i",68),t._uU(35," Delete"),t.qZA()()()()()),2&i){const e=d.$implicit,n=t.oxw();t.xp6(5),t.Q6J("routerLink",n.routes.profile),t.xp6(1),t.Q6J("src",e.img,t.LSH),t.xp6(1),t.hij(" ",e.name,""),t.xp6(2),t.Oqu(e.designation),t.xp6(2),t.Oqu(e.providentFundType),t.xp6(2),t.Oqu(e.employeeShare),t.xp6(2),t.Oqu(e.organizationShare),t.xp6(3),t.Q6J("ngClass",t.WLB(10,Z,"Approved"===e.status,"Pending"===e.status)),t.xp6(1),t.hij(" ",e.status," "),t.xp6(11),t.Q6J("routerLink",n.routes.editProvidentFund)}}function T(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"li",70),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.moveToPage(a.currentPage-2))}),t.TgZ(1,"a",71),t._uU(2," ... "),t.qZA()()}if(2&i){const e=t.oxw(2);t.Q6J("hidden",1===e.currentPage)}}function A(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"li",70),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.moveToPage(a.currentPage+2))}),t.TgZ(1,"a",71),t._uU(2," ... "),t.qZA()()}if(2&i){const e=t.oxw(2);t.Q6J("hidden",e.currentPage>=e.pageNumberArray[e.pageNumberArray.length-2]||e.totalData<e.serialNumberArray[e.serialNumberArray.length-1])}}function b(i,d){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"li",51)(2,"a",53),t.NdJ("click",function(){const r=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.moveToPage(r))}),t._uU(3),t.qZA()(),t.YNc(4,T,3,1,"li",69),t.YNc(5,A,3,1,"li",69),t.BQk()}if(2&i){const e=d.$implicit,n=d.index,a=t.oxw();t.xp6(1),t.ekj("active",e===a.currentPage),t.Q6J("ngClass",a.pageNumberArray[a.currentPage-2]>e&&1!==e&&a.pageNumberArray.length>6||a.pageNumberArray[a.currentPage]<e&&1!==e&&a.pageNumberArray.length>6&&a.pageNumberArray.length!==e?"hide-page-no":"show-page-no"),t.xp6(2),t.hij(" ",e," "),t.xp6(1),t.Q6J("ngIf",0===n&&a.pageNumberArray.length>6&&a.currentPage>2),t.xp6(1),t.Q6J("ngIf",n===a.pageNumberArray.length-2&&a.pageNumberArray.length>6)}}const h=function(i){return{disabled:i}},P=[{path:"",component:(()=>{class i{constructor(e){this.data=e,this.routes=v._,this.providentFund=[],this.showFilter=!1,this.searchDataValue="",this.lastIndex=0,this.pageSize=10,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0}ngOnInit(){this.getTableData()}getTableData(){this.providentFund=[],this.serialNumberArray=[],this.data.getProvidentFund().subscribe(e=>{this.totalData=e.totalData,e.data.map((n,a)=>{const r=a+1;a>=this.skip&&r<=this.limit&&(this.providentFund.push(n),this.serialNumberArray.push(r))}),this.dataSource=new m.by(this.providentFund),this.calculateTotalPages(this.totalData,this.pageSize)})}searchData(e){this.dataSource.filter=e.trim().toLowerCase(),this.providentFund=this.dataSource.filteredData}sortData(e){const n=this.providentFund.slice();this.providentFund=e.active&&""!==e.direction?n.sort((a,r)=>(a[e.active]<r[e.active]?-1:1)*("asc"===e.direction?1:-1)):n}getMoreData(e){"next"==e?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData()):"previous"==e&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData())}moveToPage(e){this.currentPage=e,this.skip=this.pageSelection[e-1].skip,this.limit=this.pageSelection[e-1].limit,e>this.currentPage?this.pageIndex=e-1:e<this.currentPage&&(this.pageIndex=e+1),this.getTableData()}PageSize(){this.pageSelection=[],this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(e,n){this.pageNumberArray=[],this.totalPages=e/n,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(var a=1;a<=this.totalPages;a++){const r=n*a,s=r-n;this.pageNumberArray.push(a),this.pageSelection.push({skip:s,limit:r})}}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(_.D))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-provident-fund"]],decls:78,vars:14,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"card","card-table","show-entire"],[1,"card-body"],[1,"page-table-header","mb-2"],[1,"row","align-items-center"],[1,"col"],[1,"doctor-table-blk"],[1,"doctor-search-blk"],[1,"top-nav-search","table-search-blk"],["placeholder","Search here",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn"],["src","assets/img/icons/search-normal.svg","alt",""],[1,"add-group"],[1,"btn","btn-primary","add-pluss","ms-2",3,"routerLink"],["src","assets/img/icons/plus.svg","alt",""],["href","javascript:;",1,"btn","btn-primary","doctor-refresh","ms-2"],["src","assets/img/icons/re-fresh.svg","alt",""],[1,"col-auto","text-end","float-end","ms-auto","download-grp"],["href","javascript:;",1,"me-2"],["src","assets/img/icons/pdf-icon-01.svg","alt",""],["src","assets/img/icons/pdf-icon-02.svg","alt",""],["src","assets/img/icons/pdf-icon-03.svg","alt",""],["href","javascript:;"],["src","assets/img/icons/pdf-icon-04.svg","alt",""],[1,"table-responsive"],["matSort","",1,"table","border-0","custom-table","comman-table","datatable","mb-0",3,"matSortChange"],["mat-sort-header","checkbox"],[1,"form-check","check-tables"],["type","checkbox","value","something",1,"form-check-input"],["mat-sort-header","name"],["mat-sort-header","designation"],["mat-sort-header","providentFundType"],["mat-sort-header","employeeShare"],["mat-sort-header","organizationShare"],["mat-sort-header","status"],[4,"ngFor","ngForOf"],[1,"table_footer"],[1,"col-sm-12","col-md-5"],[1,"dataTables_info"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"pagination"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click"],["href","javascript:void(0);",1,"page-link",3,"click"],[1,"profile-image"],["width","28","height","28","alt","",1,"rounded-circle","m-r-5",3,"src"],[1,"dropdown","action-label"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"custom-badge","dropdown-toggle",3,"ngClass"],[1,"dropdown-menu","dropdown-menu-end","status-staff"],["href","javascript:;",1,"dropdown-item"],[1,"text-end"],[1,"dropdown","dropdown-action"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"action-icon","dropdown-toggle"],[1,"fa","fa-ellipsis-v"],[1,"dropdown-menu","dropdown-menu-end"],[1,"dropdown-item",3,"routerLink"],[1,"fa-solid","fa-pen-to-square","m-r-5"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#delete_patient",1,"dropdown-item"],[1,"fa","fa-trash-alt","m-r-5"],["class","page-item",3,"hidden","click",4,"ngIf"],[1,"page-item",3,"hidden","click"],["href","javascript:void(0);",1,"page-link"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),t._uU(8,"Accounts "),t.qZA()(),t.TgZ(9,"li",6),t._UZ(10,"i",8),t.qZA(),t.TgZ(11,"li",9),t._uU(12,"Provident Fund List"),t.qZA()()()()(),t.TgZ(13,"div",3)(14,"div",4)(15,"div",10)(16,"div",11)(17,"div",12)(18,"div",13)(19,"div",14)(20,"div",15)(21,"h3"),t._uU(22,"Provident Fund List"),t.qZA(),t.TgZ(23,"div",16)(24,"div",17)(25,"input",18),t.NdJ("ngModelChange",function(s){return a.searchDataValue=s})("ngModelChange",function(){return a.searchData(a.searchDataValue)}),t.qZA(),t.TgZ(26,"a",19),t._UZ(27,"img",20),t.qZA()(),t.TgZ(28,"div",21)(29,"a",22),t._UZ(30,"img",23),t.qZA(),t.TgZ(31,"a",24),t._UZ(32,"img",25),t.qZA()()()()(),t.TgZ(33,"div",26)(34,"a",27),t._UZ(35,"img",28),t.qZA(),t.TgZ(36,"a",27),t._UZ(37,"img",29),t.qZA(),t.TgZ(38,"a",27),t._UZ(39,"img",30),t.qZA(),t.TgZ(40,"a",31),t._UZ(41,"img",32),t.qZA()()()(),t.TgZ(42,"div",33)(43,"table",34),t.NdJ("matSortChange",function(s){return a.sortData(s)}),t.TgZ(44,"thead")(45,"tr")(46,"th",35)(47,"div",36),t._UZ(48,"input",37),t.qZA()(),t.TgZ(49,"th",38),t._uU(50,"Name"),t.qZA(),t.TgZ(51,"th",39),t._uU(52,"Designation"),t.qZA(),t.TgZ(53,"th",40),t._uU(54,"Provident Fund Type"),t.qZA(),t.TgZ(55,"th",41),t._uU(56,"Employee Share"),t.qZA(),t.TgZ(57,"th",42),t._uU(58,"Organization Share"),t.qZA(),t.TgZ(59,"th",43),t._uU(60,"Status"),t.qZA(),t._UZ(61,"th"),t.qZA()(),t.TgZ(62,"tbody"),t.YNc(63,f,36,13,"tr",44),t.qZA()(),t.TgZ(64,"div",45)(65,"div",46)(66,"div",47),t._uU(67),t.qZA()(),t.TgZ(68,"div",48)(69,"div",49)(70,"ul",50)(71,"li",51)(72,"a",52),t.NdJ("click",function(){return a.getMoreData("previous")}),t._uU(73,"Previous"),t.qZA()(),t.YNc(74,b,6,6,"ng-container",44),t.TgZ(75,"li",51)(76,"a",53),t.NdJ("click",function(){return a.getMoreData("next")}),t._uU(77,"Next "),t.qZA()()()()()()()()()()()()()),2&n&&(t.xp6(7),t.Q6J("routerLink",a.routes.providentFund),t.xp6(18),t.Q6J("ngModel",a.searchDataValue),t.xp6(4),t.Q6J("routerLink",a.routes.addProvidentFund),t.xp6(34),t.Q6J("ngForOf",a.providentFund),t.xp6(4),t.lnq(" Showing ",a.serialNumberArray[0]," to ",a.serialNumberArray[a.serialNumberArray.length-1]," of ",a.totalData," entries "),t.xp6(4),t.Q6J("ngClass",t.VKq(10,h,1===a.currentPage)),t.xp6(3),t.Q6J("ngForOf",a.pageNumberArray),t.xp6(1),t.Q6J("ngClass",t.VKq(12,h,a.currentPage===a.pageNumberArray[a.pageNumberArray.length-1]||0===a.providentFund.length)))},dependencies:[l.mk,l.sg,l.O5,c.rH,p.YE,p.nU,g.Fj,g.JJ,g.On]})}return i})()}];let F=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(P),c.Bz]})}return i})();var y=o(9079);let U=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[l.ez,F,y.m]})}return i})()}}]);