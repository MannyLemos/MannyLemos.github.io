!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9enj":function(e,o,i){"use strict";i.r(o),i.d(o,"PortfolioModule",function(){return rt});var c=i("ofXK"),r=i("tyNb"),s=i("fXoL"),a=i("jl36"),l=i("5+tZ"),b=i("bHdf"),f=i("pLZG"),d=i("Kqap"),g=i("BFxc"),p=i("xbPD"),u=i("mCNh");function m(t,e,n){return 0===n?[e]:(t.push(e),t)}function h(){return function(t,e){return arguments.length>=2?function(n){return Object(u.a)(Object(d.a)(t,e),Object(g.a)(1),Object(p.a)(e))(n)}:function(e){return Object(u.a)(Object(d.a)(function(e,n,o){return t(e,n,o+1)}),Object(g.a)(1))(e)}}(m,[])}var v,C=i("tk/3"),x=((v=function(){function e(n){t(this,e),this.http=n}return n(e,[{key:"getSkills",value:function(t){var e=this.http.get("assets/json/skills.json");return t?e.pipe(Object(b.a)(),Object(f.a)(function(t){return t.featured||!1}),h()):e}}]),e}()).\u0275fac=function(t){return new(t||v)(s.Xb(C.a))},v.\u0275prov=s.Hb({token:v,factory:v.\u0275fac,providedIn:"root"}),v),P=i("XOzN"),w=function(t,e){return{"m-3":t,"mb-3":e}};function O(t,e){if(1&t&&(s.Qb(0,"div",7),s.Qb(1,"div",8),s.Qb(2,"div",9),s.Qb(3,"div",10),s.vc(4),s.Mb(5,"i",11),s.Pb(),s.Qb(6,"button",12),s.Mb(7,"i",13),s.Pb(),s.Pb(),s.Qb(8,"div",14),s.Qb(9,"p",15),s.vc(10),s.Pb(),s.Pb(),s.Pb(),s.Pb()),2&t){var n=e.$implicit,o=s.cc(2).$implicit;s.hc("ngClass",s.lc(7,w,!o.displayInColumn,o.displayInColumn)),s.zb(3),s.hc("title",n.name),s.zb(1),s.xc(" ",n.name," "),s.zb(1),s.hc("ngClass",n.stack.icon),s.zb(1),s.ic("id",n.name),s.zb(2),s.jc("id","child-",n.name,""),s.zb(2),s.wc(n.description)}}var j=function(t,e){return{"justify-content-center flex-wrap":t,"flex-column  align-items-center":e}};function y(t,e){if(1&t&&(s.Qb(0,"div",5),s.tc(1,O,11,10,"div",6),s.Pb()),2&t){var n=e.ngIf,o=s.cc().$implicit;s.hc("ngClass",s.lc(2,j,!o.displayInColumn,o.displayInColumn)),s.zb(1),s.hc("ngForOf",n)}}function k(t,e){if(1&t&&(s.Qb(0,"div",1),s.Qb(1,"h1",2),s.Qb(2,"span",3),s.vc(3,"My"),s.Pb(),s.vc(4," Skills"),s.Pb(),s.tc(5,y,2,5,"div",4),s.dc(6,"async"),s.Pb()),2&t){var n=e.$implicit,o=s.cc();s.hc("ngClass",n.viewClasses),s.zb(1),s.hc("ngClass",n.titleClasses),s.zb(4),s.hc("ngIf",s.ec(6,3,o.skills$))}}var M,_,Q=((_=n(function e(n,o){var i=this;t(this,e),this.skillsService=n,this.headerService=o,this.isHome$=this.headerService.isHome(),this.skills$=this.isHome$.pipe(Object(l.a)(function(t){return i.skillsService.getSkills(t)})),this.respOptions=[{viewClasses:"d-none d-md-flex d-flex d-md-none",displayInColumn:!1,useSmallerHeadings:!1,titleClasses:"display-3"}]})).\u0275fac=function(t){return new(t||_)(s.Lb(x),s.Lb(P.a))},_.\u0275cmp=s.Fb({type:_,selectors:[["app-skills"]],decls:1,vars:1,consts:[["class","flex-column align-items-center justify-content-center text-center vw-90 mx-auto",3,"ngClass",4,"ngFor","ngForOf"],[1,"flex-column","align-items-center","justify-content-center","text-center","vw-90","mx-auto",3,"ngClass"],[1,"mb-5","current-mode-font-color",3,"ngClass"],[1,"current-mode-font-color","bold"],["class","skill-box",3,"ngClass",4,"ngIf"],[1,"skill-box",3,"ngClass"],["class","card skill-card m-3",3,"ngClass",4,"ngFor","ngForOf"],[1,"card","skill-card","m-3",3,"ngClass"],[1,"main-card"],[1,"card-header"],[1,"skill-title",3,"title"],[3,"ngClass"],["onclick","toggleSkills(this.id)","unselectable","on",1,"skill-dropdown",3,"id"],[1,"fas","fa-angle-down"],[1,"description-content","hide",3,"id"],[1,"ml-3"]],template:function(t,e){1&t&&s.tc(0,k,7,5,"div",0),2&t&&s.hc("ngForOf",e.respOptions)},directives:[c.k,c.j,c.l],pipes:[c.b],styles:[".skill-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:min(85vw,600px);justify-content:center}.main-card[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-top:.2em;margin-bottom:.2em}.heading-bold[_ngcontent-%COMP%]{font-weight:700;color:#4c5265}.heading-light[_ngcontent-%COMP%]{font-weight:lighter;color:#4c5265}.skill-card[_ngcontent-%COMP%]{width:100%;height:auto;background-color:#e7e7e7;box-shadow:0 1px 2px rgba(0,0,0,.15)}.skill-card[_ngcontent-%COMP%]:after{box-shadow:0 5px 15px rgba(0,0,0,.3);opacity:0;transition:opacity .3s ease-in-out}.skill-card[_ngcontent-%COMP%]:hover:after{opacity:1}.card-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;height:100%;background-color:transparent;border-color:transparent}.skill-title[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;font-weight:700;height:100%;font-size:large}.skill-dropdown[_ngcontent-%COMP%]{transform:rotate(0deg);display:flex}.rotated[_ngcontent-%COMP%], .skill-dropdown[_ngcontent-%COMP%]{background-color:#4c5265;border-color:inherit;border-radius:.2em;color:#fff;height:35px;width:35px;justify-content:center;align-items:center}.rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}.rotated[_ngcontent-%COMP%]:hover, .skill-dropdown[_ngcontent-%COMP%]:hover{background-color:#292b2c;scale:1.1;transition:opacity .3s ease-in-out}.break[_ngcontent-%COMP%]{flex-basis:100%;height:0}.hide[_ngcontent-%COMP%]{position:absolute;top:-9999px;left:-9999px}.description-content[_ngcontent-%COMP%]{display:flex;text-align:left;white-space:pre-line}"]}),_),I=((M=function(){function e(n){t(this,e),this.http=n}return n(e,[{key:"getProjects",value:function(t){var e=this.http.get("assets/json/projects.json");return t?e.pipe(Object(b.a)(),Object(f.a)(function(t){return t.featured||!1}),h()):e}}]),e}()).\u0275fac=function(t){return new(t||M)(s.Xb(C.a))},M.\u0275prov=s.Hb({token:M,factory:M.\u0275fac,providedIn:"root"}),M);function z(t,e){if(1&t&&(s.Qb(0,"div"),s.Mb(1,"img",18),s.Pb()),2&t){var n=e.$implicit,o=e.index,i=s.cc().$implicit;s.zb(1),s.ic("src",n,s.qc),s.ic("title",i.tool_name[o])}}function $(t,e){if(1&t&&(s.Qb(0,"a",19),s.Mb(1,"i",20),s.vc(2),s.Pb()),2&t){var n=s.cc().$implicit;s.hc("href",n.link1,s.qc),s.zb(2),s.xc(" ",n.link1_name," ")}}function F(t,e){if(1&t&&(s.Qb(0,"a",21),s.Mb(1,"i",22),s.vc(2),s.Pb()),2&t){var n=s.cc().$implicit;s.hc("href",n.link2,s.qc),s.zb(2),s.xc(" ",n.link2_name," ")}}var S=function(t,e){return{"m-3":t,"mb-3":e}};function H(t,e){if(1&t&&(s.Qb(0,"div",8),s.Qb(1,"div",9),s.Qb(2,"h5",10),s.vc(3),s.Pb(),s.Qb(4,"h6",11),s.Qb(5,"div",12),s.tc(6,z,2,2,"div",13),s.Pb(),s.Pb(),s.Qb(7,"p",14),s.vc(8),s.Pb(),s.Qb(9,"div",15),s.tc(10,$,3,2,"a",16),s.tc(11,F,3,2,"a",17),s.Pb(),s.Pb(),s.Pb()),2&t){var n=e.$implicit,o=s.cc(2).$implicit;s.hc("ngClass",s.lc(7,S,!o.displayInColumn,o.displayInColumn)),s.zb(2),s.hc("title",n.name),s.zb(1),s.xc(" ",n.name," "),s.zb(3),s.hc("ngForOf",n.tool_src),s.zb(2),s.xc(" ",n.description," "),s.zb(2),s.hc("ngIf",n.link1),s.zb(1),s.hc("ngIf",n.link2)}}var L=function(t,e){return{"justify-content-center flex-wrap":t,"flex-column  align-items-center":e}};function N(t,e){if(1&t&&(s.Qb(0,"div",6),s.tc(1,H,12,10,"div",7),s.Pb()),2&t){var n=e.ngIf,o=s.cc().$implicit;s.hc("ngClass",s.lc(2,L,!o.displayInColumn,o.displayInColumn)),s.zb(1),s.hc("ngForOf",n)}}function X(t,e){1&t&&(s.Qb(0,"button",23),s.vc(1," See More Projects "),s.Mb(2,"i",24),s.Pb())}function q(t,e){if(1&t&&(s.Qb(0,"div",1),s.Qb(1,"h1",2),s.Qb(2,"span",3),s.vc(3,"My"),s.Pb(),s.vc(4," Projects"),s.Pb(),s.tc(5,N,2,5,"div",4),s.dc(6,"async"),s.tc(7,X,3,0,"button",5),s.dc(8,"async"),s.Pb()),2&t){var n=e.$implicit,o=s.cc();s.hc("ngClass",n.viewClasses),s.zb(1),s.hc("ngClass",n.titleClasses),s.zb(4),s.hc("ngIf",s.ec(6,4,o.projects$)),s.zb(2),s.hc("ngIf",s.ec(8,6,o.isHome$))}}var J,V,G=((V=n(function e(n,o){var i=this;t(this,e),this.projectsService=n,this.headerService=o,this.isHome$=this.headerService.isHome(),this.projects$=this.isHome$.pipe(Object(l.a)(function(t){return i.projectsService.getProjects(t)})),this.respOptions=[{viewClasses:"d-none d-md-flex",displayInColumn:!1,useSmallerHeadings:!1,titleClasses:"display-3"},{viewClasses:"d-flex d-md-none",displayInColumn:!0,useSmallerHeadings:!0,titleClasses:""}]})).\u0275fac=function(t){return new(t||V)(s.Lb(I),s.Lb(P.a))},V.\u0275cmp=s.Fb({type:V,selectors:[["app-projects"]],decls:1,vars:1,consts:[["class","flex-column align-items-center text-center vw-90 mx-auto",3,"ngClass",4,"ngFor","ngForOf"],[1,"flex-column","align-items-center","text-center","vw-90","mx-auto",3,"ngClass"],[1,"mb-5","current-mode-font-color",3,"ngClass"],[1,"current-mode-font-color","bold"],["class","d-flex vw-90",3,"ngClass",4,"ngIf"],["routerLink","/projects","class","mt-3 mb-5 btn bold light-border current-mode-button current-mode-font-color",4,"ngIf"],[1,"d-flex","vw-90",3,"ngClass"],["class","card project-card m-3",3,"ngClass",4,"ngFor","ngForOf"],[1,"card","project-card","m-3",3,"ngClass"],[1,"card-body","d-flex","flex-column"],[1,"card-title","font-weight-bold","text-left","project-title",3,"title"],[1,"card-subtitle","mb-2","font-weight-lighter","text-left"],[1,"logo-box"],[4,"ngFor","ngForOf"],[1,"card-text","text-left","description"],[1,"project-link-box"],["target","_blank","class","btn btn-dark mr-2 project-button",3,"href",4,"ngIf"],["target","_blank","class","btn btn-dark project-button",3,"href",4,"ngIf"],[1,"tool-logo",3,"src","title"],["target","_blank",1,"btn","btn-dark","mr-2","project-button",3,"href"],[1,"fa-lg","mr-1","far","fa-eye"],["target","_blank",1,"btn","btn-dark","project-button",3,"href"],[1,"fa-lg","mr-1","fab","fa-github-alt"],["routerLink","/projects",1,"mt-3","mb-5","btn","bold","light-border","current-mode-button","current-mode-font-color"],[1,"ml-1","fas","fa-angle-right"]],template:function(t,e){1&t&&s.tc(0,q,9,8,"div",0),2&t&&s.hc("ngForOf",e.respOptions)},directives:[c.k,c.j,c.l,r.c],pipes:[c.b],styles:[".heading-bold[_ngcontent-%COMP%]{font-weight:700;color:#4c5265}.heading-light[_ngcontent-%COMP%]{font-weight:lighter;color:#4c5265}.project-card[_ngcontent-%COMP%]{width:290px;height:auto;background-color:#e7e7e7;box-shadow:0 1px 2px rgba(0,0,0,.15);transition:transform .2s}.project-card[_ngcontent-%COMP%]:after{box-shadow:0 5px 15px rgba(0,0,0,.3);opacity:0;transition:opacity .3s ease-in-out}.project-card[_ngcontent-%COMP%]:hover:after{opacity:1}.project-card[_ngcontent-%COMP%]:hover{scale:1.05}.project-title[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;max-width:20ch}.project-button[_ngcontent-%COMP%]{background-color:#4c5265}.project-button[_ngcontent-%COMP%]:hover{background-color:#292b2c}.see-projects[_ngcontent-%COMP%]{font-weight:700;border:1;color:#4c5265}.see-projects[_ngcontent-%COMP%]:hover{color:#fff;background-color:#e60877}.logo-box[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap}.tool-logo[_ngcontent-%COMP%]{height:30px;width:auto;margin-right:5px;margin-bottom:2px;transition:transform .2s}.tool-logo[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.description[_ngcontent-%COMP%]{flex-grow:1}.project-link-box[_ngcontent-%COMP%]{display:flex;flex-direction:row}"]}),V),B=((J=n(function e(n){t(this,e),this.http=n})).\u0275fac=function(t){return new(t||J)(s.Xb(C.a))},J.\u0275prov=s.Hb({token:J,factory:J.\u0275fac,providedIn:"root"}),J);function K(t,e){if(1&t&&(s.Qb(0,"div",1),s.Qb(1,"h1",2),s.Qb(2,"span",3),s.vc(3,"My"),s.Pb(),s.vc(4," Resume"),s.Pb(),s.Qb(5,"div",4),s.Qb(6,"a",5),s.Mb(7,"img",6),s.Pb(),s.Pb(),s.Qb(8,"button",7),s.Qb(9,"a",8),s.vc(10," Find it Here "),s.Pb(),s.Mb(11,"i",9),s.Pb(),s.Pb()),2&t){var n=e.$implicit;s.hc("ngClass",n.viewClasses),s.zb(1),s.hc("ngClass",n.titleClasses)}}var Z,D=((Z=n(function e(n,o){t(this,e),this.resumeService=n,this.headerService=o,this.isHome$=this.headerService.isHome(),this.respOptions=[{viewClasses:"d-none d-md-flex",displayInColumn:!1,useSmallerHeadings:!1,titleClasses:"display-3"},{viewClasses:"d-flex d-md-none",displayInColumn:!0,useSmallerHeadings:!0,titleClasses:""}]})).\u0275fac=function(t){return new(t||Z)(s.Lb(B),s.Lb(P.a))},Z.\u0275cmp=s.Fb({type:Z,selectors:[["app-resume"]],decls:1,vars:1,consts:[["class","flex-column align-items-center text-center vw-90 mx-auto",3,"ngClass",4,"ngFor","ngForOf"],[1,"flex-column","align-items-center","text-center","vw-90","mx-auto",3,"ngClass"],[1,"mb-5","current-mode-font-color",3,"ngClass"],[1,"current-mode-font-color","bold"],[1,"card","project-card","m-3"],["href","./assets/images/Manuel_Lemos_CV_2023.pdf","target","_blank"],["src","./assets/images/Manuel_Lemos_CV_2023.PNG","alt","Manuel_Lemos_CV_2023",1,"resume"],[1,"mt-3","mb-5","btn","bold","light-border","current-mode-button","current-mode-font-color"],["href","./assets/images/Manuel_Lemos_CV_2023.pdf","target","_blank",1,"link-button"],[1,"ml-1","fas","fa-angle-right"]],template:function(t,e){1&t&&s.tc(0,K,12,2,"div",0),2&t&&s.hc("ngForOf",e.respOptions)},directives:[c.k,c.j],styles:[".heading-bold[_ngcontent-%COMP%]{font-weight:700;color:#4c5265}.heading-light[_ngcontent-%COMP%]{font-weight:lighter;color:#4c5265}.project-card[_ngcontent-%COMP%]{width:290px;height:auto;background-color:#e7e7e7;box-shadow:0 1px 2px rgba(0,0,0,.15);transition:transform .2s}.project-card[_ngcontent-%COMP%]:after{box-shadow:0 5px 15px rgba(0,0,0,.3);opacity:0;transition:opacity .3s ease-in-out}.project-card[_ngcontent-%COMP%]:hover:after{opacity:1}.project-card[_ngcontent-%COMP%]:hover{scale:1.05}.project-title[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;max-width:20ch}.resume[_ngcontent-%COMP%]{width:100%}a[_ngcontent-%COMP%]:visited{color:#fff}"]}),Z);function E(t,e){if(1&t&&(s.Qb(0,"h4",17),s.vc(1),s.Pb()),2&t){var n=s.cc().$implicit;s.zb(1),s.wc(n)}}function R(t,e){if(1&t&&(s.Qb(0,"h5",17),s.vc(1),s.Pb()),2&t){var n=s.cc().$implicit;s.zb(1),s.wc(n)}}function T(t,e){if(1&t&&(s.Qb(0,"div"),s.tc(1,E,2,1,"h4",16),s.tc(2,R,2,1,"h5",16),s.Pb()),2&t){var n=s.cc().$implicit;s.zb(1),s.hc("ngIf",!n.useSmallerHeadings),s.zb(1),s.hc("ngIf",n.useSmallerHeadings)}}function W(t,e){if(1&t&&(s.Qb(0,"h4",17),s.vc(1),s.Pb()),2&t){var n=s.cc().$implicit;s.zb(1),s.wc(n)}}function A(t,e){if(1&t&&(s.Qb(0,"h5",17),s.vc(1),s.Pb()),2&t){var n=s.cc().$implicit;s.zb(1),s.wc(n)}}function U(t,e){if(1&t&&(s.Qb(0,"div"),s.tc(1,W,2,1,"h4",16),s.tc(2,A,2,1,"h5",16),s.Pb()),2&t){var n=s.cc().$implicit;s.zb(1),s.hc("ngIf",!n.useSmallerHeadings),s.zb(1),s.hc("ngIf",n.useSmallerHeadings)}}function Y(t,e){if(1&t&&(s.Qb(0,"div",8),s.Qb(1,"div",9),s.Qb(2,"h1",10),s.vc(3,"I'm "),s.Qb(4,"span",11),s.vc(5),s.Pb(),s.Pb(),s.Mb(6,"img",12),s.Pb(),s.tc(7,T,3,2,"div",13),s.tc(8,U,3,2,"div",13),s.Qb(9,"button",14),s.vc(10," See My Work "),s.Mb(11,"i",15),s.Pb(),s.Pb()),2&t){var n=e.$implicit,o=s.cc().ngIf;s.hc("ngClass",n.viewClasses),s.zb(2),s.hc("ngClass",n.headingClass),s.zb(3),s.xc("",o.firstName+" "+o.lastName,"."),s.zb(2),s.hc("ngForOf",o.intro),s.zb(1),s.hc("ngForOf",o.about)}}function tt(t,e){if(1&t&&(s.Qb(0,"div",1),s.Qb(1,"div",2),s.tc(2,Y,12,5,"div",3),s.Pb(),s.Mb(3,"div",4),s.Mb(4,"app-skills",5),s.Mb(5,"div",4),s.Mb(6,"app-projects",6),s.Mb(7,"div",4),s.Mb(8,"app-resume",7),s.Pb()),2&t){var n=s.cc();s.zb(2),s.hc("ngForOf",n.respOptions)}}var et,nt,ot,it=[{path:"",component:(et=n(function e(n){t(this,e),this.bioService=n,this.bio$=this.bioService.getBio(),this.respOptions=[{viewClasses:"d-none d-md-flex",headingClass:"display-3",useSmallerHeadings:!1},{viewClasses:"d-flex d-md-none",headingClass:"",useSmallerHeadings:!0}]}),et.\u0275fac=function(t){return new(t||et)(s.Lb(a.a))},et.\u0275cmp=s.Fb({type:et,selectors:[["app-home"]],decls:2,vars:3,consts:[["class","d-flex flex-column justify-content-center align-items-center w-100",4,"ngIf"],[1,"d-flex","flex-column","justify-content-center","align-items-center","w-100"],[1,"d-flex","flex-column","min-vh-95","justify-content-center","align-items-center","w-100"],["class","flex-column justify-content-center align-items-start w-75",3,"ngClass",4,"ngFor","ngForOf"],[1,"d-none","d-md-block","mt-5"],["id","skills",1,"mb-3"],["id","projects",1,"mb-5"],["id","resume",1,"mb-5"],[1,"flex-column","justify-content-center","align-items-start","w-75",3,"ngClass"],[1,"d-flex","align-items-center"],[1,"text-left","current-mode-font-color",3,"ngClass"],[1,"current-mode-font-color","bold"],["src","./assets/images/profile_photo.PNG","alt","Profile Photo",1,"fit"],[4,"ngFor","ngForOf"],["routerLink","/","fragment","projects",1,"mt-3","mb-5","btn","bold","light-border","current-mode-button","current-mode-font-color"],[1,"ml-1","fas","fa-angle-right"],["class","text-left current-mode-font-color",4,"ngIf"],[1,"text-left","current-mode-font-color"]],template:function(t,e){1&t&&(s.tc(0,tt,9,1,"div",0),s.dc(1,"async")),2&t&&s.hc("ngIf",s.ec(1,1,e.bio$))},directives:[c.l,c.k,Q,G,D,c.j,r.c],pipes:[c.b],styles:[".min-vh-95[_ngcontent-%COMP%]{height:95vh}img.fit[_ngcontent-%COMP%]{-o-object-fit:contain;object-fit:contain;height:auto;width:100px;margin-left:3em}"]}),et)},{path:"projects",component:G},{path:"skills",component:Q},{path:"resume",component:D}],ct=((ot=n(function e(){t(this,e)})).\u0275fac=function(t){return new(t||ot)},ot.\u0275mod=s.Jb({type:ot}),ot.\u0275inj=s.Ib({imports:[[r.d.forChild(it)],r.d]}),ot),rt=((nt=n(function e(){t(this,e)})).\u0275fac=function(t){return new(t||nt)},nt.\u0275mod=s.Jb({type:nt}),nt.\u0275inj=s.Ib({imports:[[c.c,ct]]}),nt)}}])}();