"use strict";
(self["webpackChunkportfolio_angular"] = self["webpackChunkportfolio_angular"] || []).push([["src_app_portfolio_portfolio_module_ts"],{

/***/ 7326:
/*!***************************************************!*\
  !*** ./src/app/core/services/projects.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsService: () => (/* binding */ ProjectsService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9450);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);



class ProjectsService {
  constructor(http) {
    this.http = http;
  }
  // gets the projects from the assets/json/projects.json file
  getProjects(featured) {
    let projects$ = this.http.get('assets/json/projects.json');
    if (featured) {
      return projects$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.mergeAll)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(project => project.featured || false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.toArray)());
    }
    return projects$;
  }
  static {
    this.ɵfac = function ProjectsService_Factory(t) {
      return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: ProjectsService,
      factory: ProjectsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3507:
/*!*************************************************!*\
  !*** ./src/app/core/services/resume.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumeService: () => (/* binding */ ResumeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class ResumeService {
  constructor(http) {
    this.http = http;
  }
  static {
    this.ɵfac = function ResumeService_Factory(t) {
      return new (t || ResumeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ResumeService,
      factory: ResumeService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1942:
/*!*************************************************!*\
  !*** ./src/app/core/services/skills.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillsService: () => (/* binding */ SkillsService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9450);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);



class SkillsService {
  constructor(http) {
    this.http = http;
  }
  // gets the Skills from the assets/json/projects.json file
  getSkills(featured) {
    let skills$ = this.http.get('assets/json/skills.json');
    if (featured) {
      return skills$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.mergeAll)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(skill => skill.featured || false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.toArray)());
    }
    return skills$;
  }
  static {
    this.ɵfac = function SkillsService_Factory(t) {
      return new (t || SkillsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: SkillsService,
      factory: SkillsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8123:
/*!**************************************************!*\
  !*** ./src/app/portfolio/home/home.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_bio_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/bio.service */ 3698);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projects/projects.component */ 2641);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skills/skills.component */ 8337);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resume/resume.component */ 5731);







function HomeComponent_div_0_div_2_div_7_h4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const content_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](content_r6);
  }
}
function HomeComponent_div_0_div_2_div_7_h5_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const content_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](content_r6);
  }
}
function HomeComponent_div_0_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HomeComponent_div_0_div_2_div_7_h4_1_Template, 2, 1, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HomeComponent_div_0_div_2_div_7_h5_2_Template, 2, 1, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const options_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !options_r3.useSmallerHeadings);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", options_r3.useSmallerHeadings);
  }
}
function HomeComponent_div_0_div_2_div_8_h4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const content_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](content_r12);
  }
}
function HomeComponent_div_0_div_2_div_8_h5_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const content_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](content_r12);
  }
}
function HomeComponent_div_0_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HomeComponent_div_0_div_2_div_8_h4_1_Template, 2, 1, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HomeComponent_div_0_div_2_div_8_h5_2_Template, 2, 1, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const options_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !options_r3.useSmallerHeadings);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", options_r3.useSmallerHeadings);
  }
}
function HomeComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "I'm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, HomeComponent_div_0_div_2_div_7_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, HomeComponent_div_0_div_2_div_8_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " See My Work ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const options_r3 = ctx.$implicit;
    const bio_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", options_r3.viewClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", options_r3.headingClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", bio_r1.firstName + " " + bio_r1.lastName, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", bio_r1.intro);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", bio_r1.about);
  }
}
function HomeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HomeComponent_div_0_div_2_Template, 12, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 4)(4, "app-skills", 5)(5, "div", 4)(6, "app-projects", 6)(7, "div", 4)(8, "app-resume", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.respOptions);
  }
}
class HomeComponent {
  constructor(bioService) {
    this.bioService = bioService;
    this.bio$ = this.bioService.getBio();
    this.respOptions = [{
      viewClasses: 'd-none d-md-flex',
      headingClass: 'display-3',
      useSmallerHeadings: false
    }, {
      viewClasses: 'd-flex d-md-none',
      headingClass: '',
      useSmallerHeadings: true
    }];
  }
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_bio_service__WEBPACK_IMPORTED_MODULE_0__.BioService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 2,
      vars: 3,
      consts: [["class", "d-flex flex-column justify-content-center align-items-center w-100", 4, "ngIf"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center", "w-100"], [1, "d-flex", "flex-column", "min-vh-95", "justify-content-center", "align-items-center", "w-100"], ["class", "flex-column justify-content-center align-items-start w-75", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "d-none", "d-md-block", "mt-5"], ["id", "skills", 1, "mb-3"], ["id", "projects", 1, "mb-5"], ["id", "resume", 1, "mb-5"], [1, "flex-column", "justify-content-center", "align-items-start", "w-75", 3, "ngClass"], [1, "d-flex", "align-items-center"], [1, "text-left", "current-mode-font-color", 3, "ngClass"], [1, "current-mode-font-color", "bold"], ["src", "./assets/images/profile_photo.PNG", "alt", "Profile Photo", 1, "fit"], [4, "ngFor", "ngForOf"], ["routerLink", "/", "fragment", "projects", 1, "mt-3", "mb-5", "btn", "bold", "light-border", "current-mode-button", "current-mode-font-color"], [1, "ml-1", "fas", "fa-angle-right"], ["class", "text-left current-mode-font-color", 4, "ngIf"], [1, "text-left", "current-mode-font-color"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 9, 1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.bio$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__.SkillsComponent, _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__.ResumeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
      styles: [".min-vh-95[_ngcontent-%COMP%] {\n    height: 95vh;\n}\n\nimg.fit[_ngcontent-%COMP%] {\n  object-fit: contain;\n  height: auto;\n  width: 100px;\n  margin-left: 3em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9ydGZvbGlvL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtBQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi5taW4tdmgtOTUge1xuICAgIGhlaWdodDogOTV2aDtcbn1cblxuaW1nLmZpdCB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogM2VtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9282:
/*!*******************************************************!*\
  !*** ./src/app/portfolio/portfolio-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PortfolioRoutingModule: () => (/* binding */ PortfolioRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 8123);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/projects.component */ 2641);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills/skills.component */ 8337);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume/resume.component */ 5731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);







const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'projects',
  component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsComponent
}, {
  path: 'skills',
  component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__.SkillsComponent
}, {
  path: 'resume',
  component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__.ResumeComponent
}];
class PortfolioRoutingModule {
  static {
    this.ɵfac = function PortfolioRoutingModule_Factory(t) {
      return new (t || PortfolioRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: PortfolioRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PortfolioRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 9051:
/*!***********************************************!*\
  !*** ./src/app/portfolio/portfolio.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PortfolioModule: () => (/* binding */ PortfolioModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio-routing.module */ 9282);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 8123);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ 2641);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills/skills.component */ 8337);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume/resume.component */ 5731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);







class PortfolioModule {
  static {
    this.ɵfac = function PortfolioModule_Factory(t) {
      return new (t || PortfolioModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: PortfolioModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_0__.PortfolioRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PortfolioModule, {
    declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__.SkillsComponent, _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__.ResumeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_0__.PortfolioRoutingModule]
  });
})();

/***/ }),

/***/ 2641:
/*!**********************************************************!*\
  !*** ./src/app/portfolio/projects/projects.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/projects.service */ 7326);
/* harmony import */ var _core_services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/header.service */ 3313);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);






function ProjectsComponent_div_0_div_5_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const src_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const project_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", src_r10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", project_r6.tool_name[i_r11]);
  }
}
function ProjectsComponent_div_0_div_5_div_1_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", project_r6.link1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", project_r6.link1_name, " ");
  }
}
function ProjectsComponent_div_0_div_5_div_1_a_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", project_r6.link2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", project_r6.link2_name, " ");
  }
}
const _c0 = function (a0, a1) {
  return {
    "m-3": a0,
    "mb-3": a1
  };
};
function ProjectsComponent_div_0_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h6", 11)(5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ProjectsComponent_div_0_div_5_div_1_div_6_Template, 2, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProjectsComponent_div_0_div_5_div_1_a_10_Template, 3, 2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ProjectsComponent_div_0_div_5_div_1_a_11_Template, 3, 2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const project_r6 = ctx.$implicit;
    const options_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c0, !options_r1.displayInColumn, options_r1.displayInColumn));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", project_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", project_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", project_r6.tool_src);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", project_r6.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", project_r6.link1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", project_r6.link2);
  }
}
const _c1 = function (a0, a1) {
  return {
    "justify-content-center flex-wrap": a0,
    "flex-column  align-items-center": a1
  };
};
function ProjectsComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProjectsComponent_div_0_div_5_div_1_Template, 12, 10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const projects_r4 = ctx.ngIf;
    const options_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c1, !options_r1.displayInColumn, options_r1.displayInColumn));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", projects_r4);
  }
}
function ProjectsComponent_div_0_button_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " See More Projects ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "h1", 2)(2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "My");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProjectsComponent_div_0_div_5_Template, 2, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProjectsComponent_div_0_button_7_Template, 3, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const options_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", options_r1.viewClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", options_r1.titleClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 4, ctx_r0.projects$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 6, ctx_r0.isHome$));
  }
}
class ProjectsComponent {
  constructor(projectsService, headerService) {
    this.projectsService = projectsService;
    this.headerService = headerService;
    this.isHome$ = this.headerService.isHome();
    this.projects$ = this.isHome$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(atHome => this.projectsService.getProjects(atHome)));
    this.respOptions = [{
      viewClasses: 'd-none d-md-flex',
      displayInColumn: false,
      useSmallerHeadings: false,
      titleClasses: 'display-3'
    }, {
      viewClasses: 'd-flex d-md-none',
      displayInColumn: true,
      useSmallerHeadings: true,
      titleClasses: ''
    }];
  }
  static {
    this.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_header_service__WEBPACK_IMPORTED_MODULE_1__.HeaderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 1,
      vars: 1,
      consts: [["class", "flex-column align-items-center text-center vw-90 mx-auto", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "flex-column", "align-items-center", "text-center", "vw-90", "mx-auto", 3, "ngClass"], [1, "mb-5", "current-mode-font-color", 3, "ngClass"], [1, "current-mode-font-color", "bold"], ["class", "d-flex vw-90", 3, "ngClass", 4, "ngIf"], ["routerLink", "/projects", "class", "mt-3 mb-5 btn bold light-border current-mode-button current-mode-font-color", 4, "ngIf"], [1, "d-flex", "vw-90", 3, "ngClass"], ["class", "card project-card m-3", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card", "project-card", "m-3", 3, "ngClass"], [1, "card-body", "d-flex", "flex-column"], [1, "card-title", "font-weight-bold", "text-left", "project-title", 3, "title"], [1, "card-subtitle", "mb-2", "font-weight-lighter", "text-left"], [1, "logo-box"], [4, "ngFor", "ngForOf"], [1, "card-text", "text-left", "description"], [1, "project-link-box"], ["target", "_blank", "class", "btn btn-dark mr-2 project-button", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "btn btn-dark project-button", 3, "href", 4, "ngIf"], [1, "tool-logo", 3, "src", "title"], ["target", "_blank", 1, "btn", "btn-dark", "mr-2", "project-button", 3, "href"], [1, "fa-lg", "mr-1", "far", "fa-eye"], ["target", "_blank", 1, "btn", "btn-dark", "project-button", 3, "href"], [1, "fa-lg", "mr-1", "fab", "fa-github-alt"], ["routerLink", "/projects", 1, "mt-3", "mb-5", "btn", "bold", "light-border", "current-mode-button", "current-mode-font-color"], [1, "ml-1", "fas", "fa-angle-right"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProjectsComponent_div_0_Template, 9, 8, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.respOptions);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
      styles: [".heading-bold[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: #4c5265;\n}\n\n.heading-light[_ngcontent-%COMP%] {\n    font-weight: lighter;\n    color: #4c5265;\n}\n\n.project-card[_ngcontent-%COMP%] {\n    width: 290px;\n    height: auto;\n    background-color: #e7e7e7;\n    box-shadow: 0 1px 2px rgba(0,0,0,0.15);\n    transition: transform .2s;\n}\n.project-card[_ngcontent-%COMP%]::after {\n    box-shadow: 0 5px 15px rgba(0,0,0,0.3);\n    opacity: 0;\n    transition: opacity 0.3s ease-in-out;\n}\n.project-card[_ngcontent-%COMP%]:hover::after {\n    opacity: 1;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n    scale: 1.05;\n\n}\n\n.project-title[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 20ch;\n}\n\n.project-button[_ngcontent-%COMP%] {\n    background-color: #4c5265;\n}\n.project-button[_ngcontent-%COMP%]:hover {\n    background-color: #292b2c;\n}\n\n.see-projects[_ngcontent-%COMP%] {\n    font-weight: bold;\n    border: 1;\n    color: #4c5265;\n}\n.see-projects[_ngcontent-%COMP%]:hover {\n    color: white;\n    background-color: #e60877;\n}\n\n.logo-box[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.tool-logo[_ngcontent-%COMP%] {\n    height: 30px;\n    width: auto;\n    margin-right: 5px;\n    margin-bottom: 2px;\n    transition: transform .2s;\n}\n\n.tool-logo[_ngcontent-%COMP%]:hover {\n    transform: scale(1.2);\n}\n\n.description[_ngcontent-%COMP%] {\n    flex-grow: 1;\n}\n\n.project-link-box[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9ydGZvbGlvL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsc0NBQXNDO0lBQ3RDLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLFVBQVU7SUFDVixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVzs7QUFFZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nLWJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNGM1MjY1O1xufVxuXG4uaGVhZGluZy1saWdodCB7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgY29sb3I6ICM0YzUyNjU7XG59XG5cbi5wcm9qZWN0LWNhcmQge1xuICAgIHdpZHRoOiAyOTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xufVxuLnByb2plY3QtY2FyZDo6YWZ0ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnByb2plY3QtY2FyZDpob3Zlcjo6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG59XG4ucHJvamVjdC1jYXJkOmhvdmVyIHtcbiAgICBzY2FsZTogMS4wNTtcblxufVxuXG4ucHJvamVjdC10aXRsZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtd2lkdGg6IDIwY2g7XG59XG5cbi5wcm9qZWN0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjNTI2NTtcbn1cbi5wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MmIyYztcbn1cblxuLnNlZS1wcm9qZWN0cyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyOiAxO1xuICAgIGNvbG9yOiAjNGM1MjY1O1xufVxuLnNlZS1wcm9qZWN0czpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjA4Nzc7XG59XG5cbi5sb2dvLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4udG9vbC1sb2dvIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7XG59XG5cbi50b29sLWxvZ286aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi5wcm9qZWN0LWxpbmstYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5731:
/*!******************************************************!*\
  !*** ./src/app/portfolio/resume/resume.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumeComponent: () => (/* binding */ ResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_resume_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/resume.service */ 3507);
/* harmony import */ var _core_services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/header.service */ 3313);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);




function ResumeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "h1", 2)(2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "My");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Resume");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 7)(9, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Find it Here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const options_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", options_r1.viewClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", options_r1.titleClasses);
  }
}
class ResumeComponent {
  constructor(resumeService, headerService) {
    this.resumeService = resumeService;
    this.headerService = headerService;
    this.isHome$ = this.headerService.isHome();
    this.respOptions = [{
      viewClasses: 'd-none d-md-flex',
      displayInColumn: false,
      useSmallerHeadings: false,
      titleClasses: 'display-3'
    }, {
      viewClasses: 'd-flex d-md-none',
      displayInColumn: true,
      useSmallerHeadings: true,
      titleClasses: ''
    }];
  }
  static {
    this.ɵfac = function ResumeComponent_Factory(t) {
      return new (t || ResumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_resume_service__WEBPACK_IMPORTED_MODULE_0__.ResumeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_header_service__WEBPACK_IMPORTED_MODULE_1__.HeaderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ResumeComponent,
      selectors: [["app-resume"]],
      decls: 1,
      vars: 1,
      consts: [["class", "flex-column align-items-center text-center vw-90 mx-auto", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "flex-column", "align-items-center", "text-center", "vw-90", "mx-auto", 3, "ngClass"], [1, "mb-5", "current-mode-font-color", 3, "ngClass"], [1, "current-mode-font-color", "bold"], [1, "card", "project-card", "m-3"], ["href", "./assets/images/MRL_Resume.pdf", "target", "_blank"], ["src", "./assets/images/MRL_Resume.png", "alt", "MRL_Resume", 1, "resume"], [1, "mt-3", "mb-5", "btn", "bold", "light-border", "current-mode-button", "current-mode-font-color"], ["href", "./assets/images/MRL_Resume.pdf", "target", "_blank", 1, "link-button"], [1, "ml-1", "fas", "fa-angle-right"]],
      template: function ResumeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ResumeComponent_div_0_Template, 12, 2, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.respOptions);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
      styles: [".heading-bold[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: #4c5265;\n}\n\n.heading-light[_ngcontent-%COMP%] {\n    font-weight: lighter;\n    color: #4c5265;\n}\n\n.project-card[_ngcontent-%COMP%] {\n    width: 290px;\n    height: auto;\n    background-color: #e7e7e7;\n    box-shadow: 0 1px 2px rgba(0,0,0,0.15);\n    transition: transform .2s;\n}\n.project-card[_ngcontent-%COMP%]::after {\n    box-shadow: 0 5px 15px rgba(0,0,0,0.3);\n    opacity: 0;\n    transition: opacity 0.3s ease-in-out;\n}\n.project-card[_ngcontent-%COMP%]:hover::after {\n    opacity: 1;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n    scale: 1.05;\n\n}\n\n.project-title[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 20ch;\n}\n\n.resume[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\na[_ngcontent-%COMP%]:visited {\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9ydGZvbGlvL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixzQ0FBc0M7SUFDdEMseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxzQ0FBc0M7SUFDdEMsVUFBVTtJQUNWLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXOztBQUVmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nLWJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNGM1MjY1O1xufVxuXG4uaGVhZGluZy1saWdodCB7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgY29sb3I6ICM0YzUyNjU7XG59XG5cbi5wcm9qZWN0LWNhcmQge1xuICAgIHdpZHRoOiAyOTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xufVxuLnByb2plY3QtY2FyZDo6YWZ0ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnByb2plY3QtY2FyZDpob3Zlcjo6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG59XG4ucHJvamVjdC1jYXJkOmhvdmVyIHtcbiAgICBzY2FsZTogMS4wNTtcblxufVxuXG4ucHJvamVjdC10aXRsZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtd2lkdGg6IDIwY2g7XG59XG5cbi5yZXN1bWUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5hOnZpc2l0ZWQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8337:
/*!******************************************************!*\
  !*** ./src/app/portfolio/skills/skills.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillsComponent: () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_skills_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/skills.service */ 1942);
/* harmony import */ var _core_services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/header.service */ 3313);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);





const _c0 = function (a0, a1) {
  return {
    "m-3": a0,
    "mb-3": a1
  };
};
function SkillsComponent_div_0_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 14)(9, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const skill_r5 = ctx.$implicit;
    const options_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c0, !options_r1.displayInColumn, options_r1.displayInColumn));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", skill_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", skill_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", skill_r5.stack.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", skill_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "child-", skill_r5.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r5.description);
  }
}
const _c1 = function (a0, a1) {
  return {
    "justify-content-center flex-wrap": a0,
    "flex-column  align-items-center": a1
  };
};
function SkillsComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SkillsComponent_div_0_div_5_div_1_Template, 11, 10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skills_r3 = ctx.ngIf;
    const options_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c1, !options_r1.displayInColumn, options_r1.displayInColumn));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", skills_r3);
  }
}
function SkillsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "h1", 2)(2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "My");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SkillsComponent_div_0_div_5_Template, 2, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const options_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", options_r1.viewClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", options_r1.titleClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 3, ctx_r0.skills$));
  }
}
class SkillsComponent {
  constructor(skillsService, headerService) {
    this.skillsService = skillsService;
    this.headerService = headerService;
    this.isHome$ = this.headerService.isHome();
    this.skills$ = this.isHome$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(atHome => this.skillsService.getSkills(atHome)));
    this.respOptions = [{
      viewClasses: 'd-none d-md-flex d-flex d-md-none',
      displayInColumn: false,
      useSmallerHeadings: false,
      titleClasses: 'display-3'
    }];
  }
  static {
    this.ɵfac = function SkillsComponent_Factory(t) {
      return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_skills_service__WEBPACK_IMPORTED_MODULE_0__.SkillsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_header_service__WEBPACK_IMPORTED_MODULE_1__.HeaderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SkillsComponent,
      selectors: [["app-skills"]],
      decls: 1,
      vars: 1,
      consts: [["class", "flex-column align-items-center justify-content-center text-center vw-90 mx-auto", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "flex-column", "align-items-center", "justify-content-center", "text-center", "vw-90", "mx-auto", 3, "ngClass"], [1, "mb-5", "current-mode-font-color", 3, "ngClass"], [1, "current-mode-font-color", "bold"], ["class", "skill-box", 3, "ngClass", 4, "ngIf"], [1, "skill-box", 3, "ngClass"], ["class", "card skill-card m-3", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card", "skill-card", "m-3", 3, "ngClass"], [1, "main-card"], [1, "card-header"], [1, "skill-title", 3, "title"], [3, "ngClass"], ["onclick", "toggleSkills(this.id)", "unselectable", "on", 1, "skill-dropdown", 3, "id"], [1, "fas", "fa-angle-down"], [1, "description-content", "hide", 3, "id"], [1, "ml-3"]],
      template: function SkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SkillsComponent_div_0_Template, 7, 5, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.respOptions);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
      styles: [".skill-box[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: min(85vw, 600px);\n    justify-content: center;\n}\n\n.main-card[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 0.2em;\n    margin-bottom: 0.2em;\n}\n\n.heading-bold[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: #4c5265;\n}\n\n.heading-light[_ngcontent-%COMP%] {\n    font-weight: lighter;\n    color: #4c5265;\n}\n\n.skill-card[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    background-color: #e7e7e7;\n    box-shadow: 0 1px 2px rgba(0,0,0,0.15);\n}\n.skill-card[_ngcontent-%COMP%]::after {\n    box-shadow: 0 5px 15px rgba(0,0,0,0.3);\n    opacity: 0;\n    transition: opacity 0.3s ease-in-out;\n}\n.skill-card[_ngcontent-%COMP%]:hover::after {\n    opacity: 1;\n}\n\n.card-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: 100%;\n    background-color: transparent;\n    border-color: transparent;\n}\n\n.skill-title[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    overflow: hidden;\n    font-weight: bold;\n    height: 100%;\n    font-size: large;\n}\n\n.skill-dropdown[_ngcontent-%COMP%] {\n    background-color: #4c5265;\n    transform: rotate(0deg);\n    border-color: inherit;\n    border-radius: .2em;\n    color: white;\n    height: 35px;\n    width: 35px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.rotated[_ngcontent-%COMP%]{\n    background-color: #4c5265;\n    transform: rotate(180deg);\n    border-color: inherit;\n    border-radius: .2em;\n    color: white;\n    height: 35px;\n    width: 35px;\n    justify-content: center;\n    align-items: center;\n}\n.rotated[_ngcontent-%COMP%]:hover, .skill-dropdown[_ngcontent-%COMP%]:hover {\n    background-color: #292b2c;\n    scale: 1.1;\n    transition: opacity 0.3s ease-in-out;\n}\n\n.break[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    height: 0;\n}\n\n.hide[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n}\n.description-content[_ngcontent-%COMP%] {\n    display: flex;\n    text-align: left;\n    white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9ydGZvbGlvL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLHNDQUFzQztJQUN0QyxVQUFVO0lBQ1Ysb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsWUFBWTtJQUNaLDZCQUE2QjtJQUM3Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1Ysb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGwtYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IG1pbig4NXZ3LCA2MDBweCk7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYWluLWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi10b3A6IDAuMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xufVxuXG4uaGVhZGluZy1ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzRjNTI2NTtcbn1cblxuLmhlYWRpbmctbGlnaHQge1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGNvbG9yOiAjNGM1MjY1O1xufVxuXG4uc2tpbGwtY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4xNSk7XG59XG4uc2tpbGwtY2FyZDo6YWZ0ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnNraWxsLWNhcmQ6aG92ZXI6OmFmdGVyIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5za2lsbC10aXRsZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4uc2tpbGwtZHJvcGRvd24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzUyNjU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xuICAgIGJvcmRlci1yYWRpdXM6IC4yZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yb3RhdGVke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzUyNjU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyLXJhZGl1czogLjJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucm90YXRlZDpob3ZlciwgLnNraWxsLWRyb3Bkb3duOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyYjJjO1xuICAgIHNjYWxlOiAxLjE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnJlYWsge1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgaGVpZ2h0OiAwO1xufVxuXG4uaGlkZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTk5OTlweDtcbiAgICBsZWZ0OiAtOTk5OXB4O1xufVxuLmRlc2NyaXB0aW9uLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3159:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/reduce.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reduce: () => (/* binding */ reduce)
/* harmony export */ });
/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan */ 2508);
/* harmony import */ var _takeLast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./takeLast */ 446);
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultIfEmpty */ 4702);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/pipe */ 782);




function reduce(accumulator, seed) {
  if (arguments.length >= 2) {
    return function reduceOperatorFunctionWithSeed(source) {
      return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,_scan__WEBPACK_IMPORTED_MODULE_1__.scan)(accumulator, seed), (0,_takeLast__WEBPACK_IMPORTED_MODULE_2__.takeLast)(1), (0,_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__.defaultIfEmpty)(seed))(source);
    };
  }
  return function reduceOperatorFunction(source) {
    return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,_scan__WEBPACK_IMPORTED_MODULE_1__.scan)((acc, value, index) => accumulator(acc, value, index + 1)), (0,_takeLast__WEBPACK_IMPORTED_MODULE_2__.takeLast)(1))(source);
  };
}

/***/ }),

/***/ 9251:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/toArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toArray: () => (/* binding */ toArray)
/* harmony export */ });
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reduce */ 3159);

function toArrayReducer(arr, item, index) {
  if (index === 0) {
    return [item];
  }
  arr.push(item);
  return arr;
}
function toArray() {
  return (0,_reduce__WEBPACK_IMPORTED_MODULE_0__.reduce)(toArrayReducer, []);
}

/***/ })

}]);
//# sourceMappingURL=src_app_portfolio_portfolio_module_ts.js.map