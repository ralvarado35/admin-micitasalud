"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[2052],{2052:(k,d,n)=>{n.r(d),n.d(d,{StaffListModule:()=>U});var c=n(6895),g=n(27),m=n(7155),f=n(6382),t=n(4650),_=n(7945),p=n(6308),h=n(433);function Z(i,l){if(1&i&&(t.TgZ(0,"tr")(1,"td")(2,"div",36),t._UZ(3,"input",37),t.qZA()(),t.TgZ(4,"td",55)(5,"a",7),t._UZ(6,"img",56),t._uU(7),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"a",31),t._uU(16),t.qZA()(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td",57)(22,"div",58)(23,"a",59),t._UZ(24,"i",60),t.qZA(),t.TgZ(25,"div",61)(26,"a",62),t._UZ(27,"i",63),t._uU(28," Edit"),t.qZA(),t.TgZ(29,"a",64),t._UZ(30,"i",65),t._uU(31," Delete"),t.qZA()()()()()),2&i){const e=l.$implicit,s=t.oxw();t.xp6(5),t.Q6J("routerLink",s.routes.profile),t.xp6(1),t.Q6J("src",e.img,t.LSH),t.xp6(1),t.hij(" ",e.name,""),t.xp6(2),t.Oqu(e.department),t.xp6(2),t.Oqu(e.specialization),t.xp6(2),t.Oqu(e.degree),t.xp6(3),t.Oqu(e.mobile),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.joiningDate),t.xp6(6),t.Q6J("routerLink",s.routes.editStaff)}}function v(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"li",67),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.moveToPage(a.currentPage-2))}),t.TgZ(1,"a",68),t._uU(2," ... "),t.qZA()()}if(2&i){const e=t.oxw(2);t.Q6J("hidden",1===e.currentPage)}}function T(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"li",67),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.moveToPage(a.currentPage+2))}),t.TgZ(1,"a",68),t._uU(2," ... "),t.qZA()()}if(2&i){const e=t.oxw(2);t.Q6J("hidden",e.currentPage>=e.pageNumberArray[e.pageNumberArray.length-2]||e.totalData<e.serialNumberArray[e.serialNumberArray.length-1])}}function b(i,l){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"li",52)(2,"a",54),t.NdJ("click",function(){const r=t.CHM(e).$implicit,o=t.oxw();return t.KtG(o.moveToPage(r))}),t._uU(3),t.qZA()(),t.YNc(4,v,3,1,"li",66),t.YNc(5,T,3,1,"li",66),t.BQk()}if(2&i){const e=l.$implicit,s=l.index,a=t.oxw();t.xp6(1),t.ekj("active",e===a.currentPage),t.Q6J("ngClass",a.pageNumberArray[a.currentPage-2]>e&&1!==e&&a.pageNumberArray.length>6||a.pageNumberArray[a.currentPage]<e&&1!==e&&a.pageNumberArray.length>6&&a.pageNumberArray.length!==e?"hide-page-no":"show-page-no"),t.xp6(2),t.hij(" ",e," "),t.xp6(1),t.Q6J("ngIf",0===s&&a.pageNumberArray.length>6&&a.currentPage>2),t.xp6(1),t.Q6J("ngIf",s===a.pageNumberArray.length-2&&a.pageNumberArray.length>6)}}const u=function(i){return{disabled:i}},A=[{path:"",component:(()=>{class i{constructor(e){this.data=e,this.routes=f._,this.staffList=[],this.showFilter=!1,this.searchDataValue="",this.lastIndex=0,this.pageSize=10,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0}ngOnInit(){this.getTableData()}getTableData(){this.staffList=[],this.serialNumberArray=[],this.data.getStaffList().subscribe(e=>{this.totalData=e.totalData,e.data.map((s,a)=>{const r=a+1;a>=this.skip&&r<=this.limit&&(this.staffList.push(s),this.serialNumberArray.push(r))}),this.dataSource=new m.by(this.staffList),this.calculateTotalPages(this.totalData,this.pageSize)})}searchData(e){this.dataSource.filter=e.trim().toLowerCase(),this.staffList=this.dataSource.filteredData}sortData(e){const s=this.staffList.slice();this.staffList=e.active&&""!==e.direction?s.sort((a,r)=>(a[e.active]<r[e.active]?-1:1)*("asc"===e.direction?1:-1)):s}getMoreData(e){"next"==e?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData()):"previous"==e&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData())}moveToPage(e){this.currentPage=e,this.skip=this.pageSelection[e-1].skip,this.limit=this.pageSelection[e-1].limit,e>this.currentPage?this.pageIndex=e-1:e<this.currentPage&&(this.pageIndex=e+1),this.getTableData()}PageSize(){this.pageSelection=[],this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(e,s){this.pageNumberArray=[],this.totalPages=e/s,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(var a=1;a<=this.totalPages;a++){const r=s*a,o=r-s;this.pageNumberArray.push(a),this.pageSelection.push({skip:o,limit:r})}}static#t=this.\u0275fac=function(s){return new(s||i)(t.Y36(_.D))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-staff-list"]],decls:80,vars:14,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"card","card-table","show-entire"],[1,"card-body"],[1,"page-table-header","mb-2"],[1,"row","align-items-center"],[1,"col"],[1,"doctor-table-blk"],[1,"doctor-search-blk"],[1,"top-nav-search","table-search-blk"],["placeholder","Search here",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn"],["src","assets/img/icons/search-normal.svg","alt",""],[1,"add-group"],[1,"btn","btn-primary","add-pluss","ms-2",3,"routerLink"],["src","assets/img/icons/plus.svg","alt",""],["href","javascript:;",1,"btn","btn-primary","doctor-refresh","ms-2"],["src","assets/img/icons/re-fresh.svg","alt",""],[1,"col-auto","text-end","float-end","ms-auto","download-grp"],["href","javascript:;",1,"me-2"],["src","assets/img/icons/pdf-icon-01.svg","alt",""],["src","assets/img/icons/pdf-icon-02.svg","alt",""],["src","assets/img/icons/pdf-icon-03.svg","alt",""],["href","javascript:;"],["src","assets/img/icons/pdf-icon-04.svg","alt",""],[1,"table-responsive"],["matSort","",1,"table","border-0","custom-table","comman-table","datatable","mb-0",3,"matSortChange"],["mat-sort-header","checkbox"],[1,"form-check","check-tables"],["type","checkbox","value","something",1,"form-check-input"],["mat-sort-header","name"],["mat-sort-header","department"],["mat-sort-header","specialization"],["mat-sort-header","degree"],["mat-sort-header","mobile"],["mat-sort-header","email"],["mat-sort-header","joiningDate"],[4,"ngFor","ngForOf"],[1,"table_footer"],[1,"col-sm-12","col-md-5"],[1,"dataTables_info"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"pagination"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click"],["href","javascript:void(0);",1,"page-link",3,"click"],[1,"profile-image"],["width","28","height","28","alt","",1,"rounded-circle","m-r-5",3,"src"],[1,"text-end"],[1,"dropdown","dropdown-action"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"action-icon","dropdown-toggle"],[1,"fa","fa-ellipsis-v"],[1,"dropdown-menu","dropdown-menu-end"],[1,"dropdown-item",3,"routerLink"],[1,"fa-solid","fa-pen-to-square","m-r-5"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#delete_patient",1,"dropdown-item"],[1,"fa","fa-trash-alt","m-r-5"],["class","page-item",3,"hidden","click",4,"ngIf"],[1,"page-item",3,"hidden","click"],["href","javascript:void(0);",1,"page-link"]],template:function(s,a){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),t._uU(8,"Staffs "),t.qZA()(),t.TgZ(9,"li",6),t._UZ(10,"i",8),t.qZA(),t.TgZ(11,"li",9),t._uU(12,"Staff List"),t.qZA()()()()(),t.TgZ(13,"div",3)(14,"div",4)(15,"div",10)(16,"div",11)(17,"div",12)(18,"div",13)(19,"div",14)(20,"div",15)(21,"h3"),t._uU(22,"Staffs List"),t.qZA(),t.TgZ(23,"div",16)(24,"div",17)(25,"input",18),t.NdJ("ngModelChange",function(o){return a.searchDataValue=o})("ngModelChange",function(){return a.searchData(a.searchDataValue)}),t.qZA(),t.TgZ(26,"a",19),t._UZ(27,"img",20),t.qZA()(),t.TgZ(28,"div",21)(29,"a",22),t._UZ(30,"img",23),t.qZA(),t.TgZ(31,"a",24),t._UZ(32,"img",25),t.qZA()()()()(),t.TgZ(33,"div",26)(34,"a",27),t._UZ(35,"img",28),t.qZA(),t.TgZ(36,"a",27),t._UZ(37,"img",29),t.qZA(),t.TgZ(38,"a",27),t._UZ(39,"img",30),t.qZA(),t.TgZ(40,"a",31),t._UZ(41,"img",32),t.qZA()()()(),t.TgZ(42,"div",33)(43,"table",34),t.NdJ("matSortChange",function(o){return a.sortData(o)}),t.TgZ(44,"thead")(45,"tr")(46,"th",35)(47,"div",36),t._UZ(48,"input",37),t.qZA()(),t.TgZ(49,"th",38),t._uU(50,"Name"),t.qZA(),t.TgZ(51,"th",39),t._uU(52,"Department"),t.qZA(),t.TgZ(53,"th",40),t._uU(54,"Specialization"),t.qZA(),t.TgZ(55,"th",41),t._uU(56,"Degree"),t.qZA(),t.TgZ(57,"th",42),t._uU(58,"Mobile"),t.qZA(),t.TgZ(59,"th",43),t._uU(60,"Email"),t.qZA(),t.TgZ(61,"th",44),t._uU(62,"Joining Date"),t.qZA(),t._UZ(63,"th"),t.qZA()(),t.TgZ(64,"tbody"),t.YNc(65,Z,32,10,"tr",45),t.qZA()(),t.TgZ(66,"div",46)(67,"div",47)(68,"div",48),t._uU(69),t.qZA()(),t.TgZ(70,"div",49)(71,"div",50)(72,"ul",51)(73,"li",52)(74,"a",53),t.NdJ("click",function(){return a.getMoreData("previous")}),t._uU(75,"Previous"),t.qZA()(),t.YNc(76,b,6,6,"ng-container",45),t.TgZ(77,"li",52)(78,"a",54),t.NdJ("click",function(){return a.getMoreData("next")}),t._uU(79,"Next "),t.qZA()()()()()()()()()()()()()),2&s&&(t.xp6(7),t.Q6J("routerLink",a.routes.staffList),t.xp6(18),t.Q6J("ngModel",a.searchDataValue),t.xp6(4),t.Q6J("routerLink",a.routes.addStaff),t.xp6(36),t.Q6J("ngForOf",a.staffList),t.xp6(4),t.lnq(" Showing ",a.serialNumberArray[0]," to ",a.serialNumberArray[a.serialNumberArray.length-1]," of ",a.totalData," entries "),t.xp6(4),t.Q6J("ngClass",t.VKq(10,u,1===a.currentPage)),t.xp6(3),t.Q6J("ngForOf",a.pageNumberArray),t.xp6(1),t.Q6J("ngClass",t.VKq(12,u,a.currentPage===a.pageNumberArray[a.pageNumberArray.length-1]||0===a.staffList.length)))},dependencies:[c.mk,c.sg,c.O5,g.rH,p.YE,p.nU,h.Fj,h.JJ,h.On]})}return i})()}];let S=(()=>{class i{static#t=this.\u0275fac=function(s){return new(s||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(A),g.Bz]})}return i})();var L=n(9079);let U=(()=>{class i{static#t=this.\u0275fac=function(s){return new(s||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[c.ez,S,L.m]})}return i})()}}]);