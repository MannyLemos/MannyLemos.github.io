import {
  AsyncPipe,
  BioService,
  CommonModule,
  Component,
  HeaderService,
  HttpClient,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  RouterLink,
  RouterModule,
  __name,
  filter,
  mergeAll,
  mergeMap,
  setClassMetadata,
  toArray,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-27FAP33E.js";

// src/app/core/services/projects.service.ts
var _ProjectsService = class _ProjectsService {
  constructor(http) {
    this.http = http;
  }
  // gets the projects from the assets/json/projects.json file
  getProjects(featured) {
    let projects$ = this.http.get("assets/json/projects.json");
    if (featured) {
      return projects$.pipe(mergeAll(), filter((project) => project.featured || false), toArray());
    }
    return projects$;
  }
};
__name(_ProjectsService, "ProjectsService");
_ProjectsService.\u0275fac = /* @__PURE__ */ __name(function ProjectsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProjectsService)(\u0275\u0275inject(HttpClient));
}, "ProjectsService_Factory");
_ProjectsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectsService, factory: _ProjectsService.\u0275fac, providedIn: "root" });
var ProjectsService = _ProjectsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/portfolio/projects/projects.component.ts
var _c0 = /* @__PURE__ */ __name((a0, a1) => ({ "justify-content-center flex-wrap": a0, "flex-column  align-items-center": a1 }), "_c0");
var _c1 = /* @__PURE__ */ __name((a0, a1) => ({ "m-3": a0, "mb-3": a1 }), "_c1");
function ProjectsComponent_div_0_div_5_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "img", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const src_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const project_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate(src_r1), \u0275\u0275sanitizeUrl)("title", \u0275\u0275interpolate(project_r3.tool_name[i_r2]));
  }
}
__name(ProjectsComponent_div_0_div_5_div_1_div_6_Template, "ProjectsComponent_div_0_div_5_div_1_div_6_Template");
function ProjectsComponent_div_0_div_5_div_1_a_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", project_r3.link1, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", project_r3.link1_name, " ");
  }
}
__name(ProjectsComponent_div_0_div_5_div_1_a_10_Template, "ProjectsComponent_div_0_div_5_div_1_a_10_Template");
function ProjectsComponent_div_0_div_5_div_1_a_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 21);
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", project_r3.link2, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", project_r3.link2_name, " ");
  }
}
__name(ProjectsComponent_div_0_div_5_div_1_a_11_Template, "ProjectsComponent_div_0_div_5_div_1_a_11_Template");
function ProjectsComponent_div_0_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "h5", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h6", 11)(5, "div", 12);
    \u0275\u0275template(6, ProjectsComponent_div_0_div_5_div_1_div_6_Template, 2, 4, "div", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15);
    \u0275\u0275template(10, ProjectsComponent_div_0_div_5_div_1_a_10_Template, 3, 2, "a", 16)(11, ProjectsComponent_div_0_div_5_div_1_a_11_Template, 3, 2, "a", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const project_r3 = ctx.$implicit;
    const options_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c1, !options_r4.displayInColumn, options_r4.displayInColumn));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", project_r3.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", project_r3.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", project_r3.tool_src);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", project_r3.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", project_r3.link1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", project_r3.link2);
  }
}
__name(ProjectsComponent_div_0_div_5_div_1_Template, "ProjectsComponent_div_0_div_5_div_1_Template");
function ProjectsComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, ProjectsComponent_div_0_div_5_div_1_Template, 12, 10, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const projects_r5 = ctx.ngIf;
    const options_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c0, !options_r4.displayInColumn, options_r4.displayInColumn));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", projects_r5);
  }
}
__name(ProjectsComponent_div_0_div_5_Template, "ProjectsComponent_div_0_div_5_Template");
function ProjectsComponent_div_0_button_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275text(1, " See More Projects ");
    \u0275\u0275element(2, "i", 24);
    \u0275\u0275elementEnd();
  }
}
__name(ProjectsComponent_div_0_button_7_Template, "ProjectsComponent_div_0_button_7_Template");
function ProjectsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h1", 2)(2, "span", 3);
    \u0275\u0275text(3, "My");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProjectsComponent_div_0_div_5_Template, 2, 5, "div", 4);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275template(7, ProjectsComponent_div_0_button_7_Template, 3, 0, "button", 5);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const options_r4 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", options_r4.viewClasses);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", options_r4.titleClasses);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(6, 4, ctx_r5.projects$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(8, 6, ctx_r5.isHome$));
  }
}
__name(ProjectsComponent_div_0_Template, "ProjectsComponent_div_0_Template");
var _ProjectsComponent = class _ProjectsComponent {
  constructor(projectsService, headerService) {
    this.projectsService = projectsService;
    this.headerService = headerService;
    this.isHome$ = this.headerService.isHome();
    this.projects$ = this.isHome$.pipe(mergeMap((atHome) => this.projectsService.getProjects(atHome)));
    this.respOptions = [
      { viewClasses: "d-none d-md-flex", displayInColumn: false, useSmallerHeadings: false, titleClasses: "display-3" },
      { viewClasses: "d-flex d-md-none", displayInColumn: true, useSmallerHeadings: true, titleClasses: "" }
    ];
  }
};
__name(_ProjectsComponent, "ProjectsComponent");
_ProjectsComponent.\u0275fac = /* @__PURE__ */ __name(function ProjectsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProjectsComponent)(\u0275\u0275directiveInject(ProjectsService), \u0275\u0275directiveInject(HeaderService));
}, "ProjectsComponent_Factory");
_ProjectsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["app-projects"]], standalone: false, decls: 1, vars: 1, consts: [["class", "flex-column align-items-center text-center vw-90 mx-auto", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "flex-column", "align-items-center", "text-center", "vw-90", "mx-auto", 3, "ngClass"], [1, "mb-5", "current-mode-font-color", 3, "ngClass"], [1, "current-mode-font-color", "bold"], ["class", "d-flex vw-90", 3, "ngClass", 4, "ngIf"], ["routerLink", "/projects", "class", "mt-3 mb-5 btn bold light-border current-mode-button current-mode-font-color", 4, "ngIf"], [1, "d-flex", "vw-90", 3, "ngClass"], ["class", "card project-card m-3", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card", "project-card", "m-3", 3, "ngClass"], [1, "card-body", "d-flex", "flex-column"], [1, "card-title", "font-weight-bold", "text-left", "project-title", 3, "title"], [1, "card-subtitle", "mb-2", "font-weight-lighter", "text-left"], [1, "logo-box"], [4, "ngFor", "ngForOf"], [1, "card-text", "text-left", "description"], [1, "project-link-box"], ["target", "_blank", "class", "btn btn-dark mr-2 project-button", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "btn btn-dark project-button", 3, "href", 4, "ngIf"], [1, "tool-logo", 3, "src", "title"], ["target", "_blank", 1, "btn", "btn-dark", "mr-2", "project-button", 3, "href"], [1, "fa-lg", "mr-1", "far", "fa-eye"], ["target", "_blank", 1, "btn", "btn-dark", "project-button", 3, "href"], [1, "fa-lg", "mr-1", "fab", "fa-github-alt"], ["routerLink", "/projects", 1, "mt-3", "mb-5", "btn", "bold", "light-border", "current-mode-button", "current-mode-font-color"], [1, "ml-1", "fas", "fa-angle-right"]], template: /* @__PURE__ */ __name(function ProjectsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProjectsComponent_div_0_Template, 9, 8, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngForOf", ctx.respOptions);
  }
}, "ProjectsComponent_Template"), dependencies: [NgClass, NgForOf, NgIf, RouterLink, AsyncPipe], styles: ["\n\n.heading-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #4c5265;\n}\n.heading-light[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  color: #4c5265;\n}\n.project-card[_ngcontent-%COMP%] {\n  width: 290px;\n  height: auto;\n  background-color: #e7e7e7;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n  transition: transform .2s;\n}\n.project-card[_ngcontent-%COMP%]::after {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n.project-card[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  scale: 1.05;\n}\n.project-title[_ngcontent-%COMP%] {\n  white-space: normal;\n  text-overflow: ellipsis;\n  max-width: 20ch;\n}\n.project-button[_ngcontent-%COMP%] {\n  background-color: #4c5265;\n}\n.project-button[_ngcontent-%COMP%]:hover {\n  background-color: #292b2c;\n}\n.see-projects[_ngcontent-%COMP%] {\n  font-weight: bold;\n  border: 1;\n  color: #4c5265;\n}\n.see-projects[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #e60877;\n}\n.logo-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.tool-logo[_ngcontent-%COMP%] {\n  height: 30px;\n  width: auto;\n  margin-right: 5px;\n  margin-bottom: 2px;\n  transition: transform .2s;\n}\n.tool-logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n.description[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.project-link-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=projects.component.css.map */"] });
var ProjectsComponent = _ProjectsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsComponent, [{
    type: Component,
    args: [{ selector: "app-projects", standalone: false, template: `<div *ngFor="let options of respOptions" [ngClass]="options.viewClasses" class="flex-column align-items-center text-center vw-90 mx-auto">
    <h1 [ngClass]="options.titleClasses" class="mb-5 current-mode-font-color"><span class="current-mode-font-color bold">My</span> Projects</h1>
    <div class="d-flex vw-90" 
        [ngClass]="{'justify-content-center flex-wrap': !options.displayInColumn, 'flex-column  align-items-center': options.displayInColumn}"
        *ngIf="projects$ | async as projects">
        <div *ngFor="let project of projects" class="card project-card m-3"
            [ngClass]="{'m-3': !options.displayInColumn, 'mb-3': options.displayInColumn}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title font-weight-bold text-left project-title" [title]="project.name">
                    {{project.name}}
                </h5>
                <h6 class="card-subtitle mb-2 font-weight-lighter text-left">
                    <div class="logo-box">
                        <div *ngFor="let src of project.tool_src; let i = index">
                            <img class="tool-logo" src={{src}} title="{{project.tool_name[i]}}">
                        </div>
                    </div>
                </h6>
                <p class="card-text text-left description">
                    {{project.description}}
                </p>
                <div class="project-link-box">
                    <a [href]="project.link1" target="_blank" *ngIf="project.link1" class="btn btn-dark mr-2 project-button">
                        <i class="fa-lg mr-1 far fa-eye"></i>
                        {{project.link1_name}}
                    </a>
                    <a [href]="project.link2" target="_blank" *ngIf="project.link2" class="btn btn-dark project-button">
                        <i class="fa-lg mr-1 fab fa-github-alt"></i>
                        {{project.link2_name}}
                    </a>
                </div>
            </div>
        </div>
    </div>
    <button *ngIf="isHome$ | async" routerLink="/projects" class="mt-3 mb-5 btn bold light-border current-mode-button current-mode-font-color">
        See More Projects
        <i class="ml-1 fas fa-angle-right"></i>
    </button>
</div>`, styles: ["/* src/app/portfolio/projects/projects.component.css */\n.heading-bold {\n  font-weight: bold;\n  color: #4c5265;\n}\n.heading-light {\n  font-weight: lighter;\n  color: #4c5265;\n}\n.project-card {\n  width: 290px;\n  height: auto;\n  background-color: #e7e7e7;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n  transition: transform .2s;\n}\n.project-card::after {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n.project-card:hover::after {\n  opacity: 1;\n}\n.project-card:hover {\n  scale: 1.05;\n}\n.project-title {\n  white-space: normal;\n  text-overflow: ellipsis;\n  max-width: 20ch;\n}\n.project-button {\n  background-color: #4c5265;\n}\n.project-button:hover {\n  background-color: #292b2c;\n}\n.see-projects {\n  font-weight: bold;\n  border: 1;\n  color: #4c5265;\n}\n.see-projects:hover {\n  color: white;\n  background-color: #e60877;\n}\n.logo-box {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.tool-logo {\n  height: 30px;\n  width: auto;\n  margin-right: 5px;\n  margin-bottom: 2px;\n  transition: transform .2s;\n}\n.tool-logo:hover {\n  transform: scale(1.2);\n}\n.description {\n  flex-grow: 1;\n}\n.project-link-box {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=projects.component.css.map */\n"] }]
  }], () => [{ type: ProjectsService }, { type: HeaderService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src/app/portfolio/projects/projects.component.ts", lineNumber: 12 });
})();

// src/app/core/services/skills.service.ts
var _SkillsService = class _SkillsService {
  constructor(http) {
    this.http = http;
  }
  // gets the Skills from the assets/json/projects.json file
  getSkills(featured) {
    let skills$ = this.http.get("assets/json/skills.json");
    if (featured) {
      return skills$.pipe(mergeAll(), filter((skill) => skill.featured || false), toArray());
    }
    return skills$;
  }
};
__name(_SkillsService, "SkillsService");
_SkillsService.\u0275fac = /* @__PURE__ */ __name(function SkillsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SkillsService)(\u0275\u0275inject(HttpClient));
}, "SkillsService_Factory");
_SkillsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SkillsService, factory: _SkillsService.\u0275fac, providedIn: "root" });
var SkillsService = _SkillsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkillsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/portfolio/skills/skills.component.ts
var _c02 = /* @__PURE__ */ __name((a0, a1) => ({ "justify-content-center flex-wrap": a0, "flex-column  align-items-center": a1 }), "_c0");
var _c12 = /* @__PURE__ */ __name((a0, a1) => ({ "m-3": a0, "mb-3": a1 }), "_c1");
function SkillsComponent_div_0_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275element(5, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 12);
    \u0275\u0275element(7, "i", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14)(9, "p", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    const options_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c12, !options_r2.displayInColumn, options_r2.displayInColumn));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", skill_r1.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r1.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", skill_r1.stack.icon);
    \u0275\u0275advance();
    \u0275\u0275property("id", \u0275\u0275interpolate(skill_r1.name));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", \u0275\u0275interpolate1("child-", skill_r1.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(skill_r1.description);
  }
}
__name(SkillsComponent_div_0_div_5_div_1_Template, "SkillsComponent_div_0_div_5_div_1_Template");
function SkillsComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, SkillsComponent_div_0_div_5_div_1_Template, 11, 12, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skills_r3 = ctx.ngIf;
    const options_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c02, !options_r2.displayInColumn, options_r2.displayInColumn));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", skills_r3);
  }
}
__name(SkillsComponent_div_0_div_5_Template, "SkillsComponent_div_0_div_5_Template");
function SkillsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h1", 2)(2, "span", 3);
    \u0275\u0275text(3, "My");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Skills");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SkillsComponent_div_0_div_5_Template, 2, 5, "div", 4);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const options_r2 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", options_r2.viewClasses);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", options_r2.titleClasses);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(6, 3, ctx_r3.skills$));
  }
}
__name(SkillsComponent_div_0_Template, "SkillsComponent_div_0_Template");
var _SkillsComponent = class _SkillsComponent {
  constructor(skillsService, headerService) {
    this.skillsService = skillsService;
    this.headerService = headerService;
    this.isHome$ = this.headerService.isHome();
    this.skills$ = this.isHome$.pipe(mergeMap((atHome) => this.skillsService.getSkills(atHome)));
    this.respOptions = [
      { viewClasses: "d-none d-md-flex d-flex d-md-none", displayInColumn: false, useSmallerHeadings: false, titleClasses: "display-3" }
    ];
  }
};
__name(_SkillsComponent, "SkillsComponent");
_SkillsComponent.\u0275fac = /* @__PURE__ */ __name(function SkillsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SkillsComponent)(\u0275\u0275directiveInject(SkillsService), \u0275\u0275directiveInject(HeaderService));
}, "SkillsComponent_Factory");
_SkillsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkillsComponent, selectors: [["app-skills"]], standalone: false, decls: 1, vars: 1, consts: [["class", "flex-column align-items-center justify-content-center text-center vw-90 mx-auto", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "flex-column", "align-items-center", "justify-content-center", "text-center", "vw-90", "mx-auto", 3, "ngClass"], [1, "mb-5", "current-mode-font-color", 3, "ngClass"], [1, "current-mode-font-color", "bold"], ["class", "skill-box", 3, "ngClass", 4, "ngIf"], [1, "skill-box", 3, "ngClass"], ["class", "card skill-card m-3", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card", "skill-card", "m-3", 3, "ngClass"], [1, "main-card"], [1, "card-header"], [1, "skill-title", 3, "title"], [3, "ngClass"], ["onclick", "toggleSkills(this.id)", "unselectable", "on", 1, "skill-dropdown", 3, "id"], [1, "fas", "fa-angle-down"], [1, "description-content", "hide", 3, "id"], [1, "ml-3"]], template: /* @__PURE__ */ __name(function SkillsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SkillsComponent_div_0_Template, 7, 5, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngForOf", ctx.respOptions);
  }
}, "SkillsComponent_Template"), dependencies: [NgClass, NgForOf, NgIf, AsyncPipe], styles: ["\n\n.skill-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: min(85vw, 600px);\n  justify-content: center;\n}\n.main-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 0.2em;\n  margin-bottom: 0.2em;\n}\n.heading-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #4c5265;\n}\n.heading-light[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  color: #4c5265;\n}\n.skill-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-color: #e7e7e7;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n.skill-card[_ngcontent-%COMP%]::after {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n.skill-card[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  border-color: transparent;\n}\n.skill-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  font-weight: bold;\n  height: 100%;\n  font-size: large;\n}\n.skill-dropdown[_ngcontent-%COMP%] {\n  background-color: #4c5265;\n  transform: rotate(0deg);\n  border-color: inherit;\n  border-radius: .2em;\n  color: white;\n  height: 35px;\n  width: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.rotated[_ngcontent-%COMP%] {\n  background-color: #4c5265;\n  transform: rotate(180deg);\n  border-color: inherit;\n  border-radius: .2em;\n  color: white;\n  height: 35px;\n  width: 35px;\n  justify-content: center;\n  align-items: center;\n}\n.rotated[_ngcontent-%COMP%]:hover, \n.skill-dropdown[_ngcontent-%COMP%]:hover {\n  background-color: #292b2c;\n  scale: 1.1;\n  transition: opacity 0.3s ease-in-out;\n}\n.break[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  height: 0;\n}\n.hide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n}\n.description-content[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: left;\n  white-space: pre-line;\n}\n/*# sourceMappingURL=skills.component.css.map */"] });
var SkillsComponent = _SkillsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkillsComponent, [{
    type: Component,
    args: [{ selector: "app-skills", standalone: false, template: `<div *ngFor="let options of respOptions" [ngClass]="options.viewClasses" class="flex-column align-items-center justify-content-center text-center vw-90 mx-auto">
    <h1 [ngClass]="options.titleClasses" class="mb-5 current-mode-font-color"><span class="current-mode-font-color bold">My</span> Skills</h1>
    <div class="skill-box" [ngClass]="{'justify-content-center flex-wrap': !options.displayInColumn, 'flex-column  align-items-center': options.displayInColumn}"
        *ngIf="skills$ | async as skills">
        <div *ngFor="let skill of skills" class="card skill-card m-3" [ngClass]="{'m-3': !options.displayInColumn, 'mb-3': options.displayInColumn}">
            <div class="main-card">
                <div class="card-header">
                    <div class="skill-title" [title]="skill.name">
                        {{skill.name}}
                        <i [ngClass]="skill.stack.icon"></i>
                    </div>
                    <button id={{skill.name}} onclick="toggleSkills(this.id)" class="skill-dropdown" unselectable="on">
                        <i class="fas fa-angle-down"></i>
                    </button>
                </div>
                <div id='child-{{skill.name}}' class="description-content hide"> <!--- the prefix to {{skill.name}} is irrelevant. Simply used to uniquely identify the div -->
                    <p class="ml-3">{{skill.description}}</p>
                </div>
            </div>
        </div>
    </div>
</div>`, styles: ["/* src/app/portfolio/skills/skills.component.css */\n.skill-box {\n  display: flex;\n  flex-direction: column;\n  width: min(85vw, 600px);\n  justify-content: center;\n}\n.main-card {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 0.2em;\n  margin-bottom: 0.2em;\n}\n.heading-bold {\n  font-weight: bold;\n  color: #4c5265;\n}\n.heading-light {\n  font-weight: lighter;\n  color: #4c5265;\n}\n.skill-card {\n  width: 100%;\n  height: auto;\n  background-color: #e7e7e7;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n.skill-card::after {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n.skill-card:hover::after {\n  opacity: 1;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  border-color: transparent;\n}\n.skill-title {\n  white-space: nowrap;\n  overflow: hidden;\n  font-weight: bold;\n  height: 100%;\n  font-size: large;\n}\n.skill-dropdown {\n  background-color: #4c5265;\n  transform: rotate(0deg);\n  border-color: inherit;\n  border-radius: .2em;\n  color: white;\n  height: 35px;\n  width: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.rotated {\n  background-color: #4c5265;\n  transform: rotate(180deg);\n  border-color: inherit;\n  border-radius: .2em;\n  color: white;\n  height: 35px;\n  width: 35px;\n  justify-content: center;\n  align-items: center;\n}\n.rotated:hover,\n.skill-dropdown:hover {\n  background-color: #292b2c;\n  scale: 1.1;\n  transition: opacity 0.3s ease-in-out;\n}\n.break {\n  flex-basis: 100%;\n  height: 0;\n}\n.hide {\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n}\n.description-content {\n  display: flex;\n  text-align: left;\n  white-space: pre-line;\n}\n/*# sourceMappingURL=skills.component.css.map */\n"] }]
  }], () => [{ type: SkillsService }, { type: HeaderService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkillsComponent, { className: "SkillsComponent", filePath: "src/app/portfolio/skills/skills.component.ts", lineNumber: 12 });
})();

// src/app/core/services/resume.service.ts
var _ResumeService = class _ResumeService {
  constructor(http) {
    this.http = http;
  }
};
__name(_ResumeService, "ResumeService");
_ResumeService.\u0275fac = /* @__PURE__ */ __name(function ResumeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResumeService)(\u0275\u0275inject(HttpClient));
}, "ResumeService_Factory");
_ResumeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ResumeService, factory: _ResumeService.\u0275fac, providedIn: "root" });
var ResumeService = _ResumeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/portfolio/resume/resume.component.ts
function ResumeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h1", 2)(2, "span", 3);
    \u0275\u0275text(3, "My");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Resume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "a", 5);
    \u0275\u0275element(7, "img", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 7)(9, "a", 8);
    \u0275\u0275text(10, " Find it Here ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "i", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const options_r1 = ctx.$implicit;
    \u0275\u0275property("ngClass", options_r1.viewClasses);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", options_r1.titleClasses);
  }
}
__name(ResumeComponent_div_0_Template, "ResumeComponent_div_0_Template");
var _ResumeComponent = class _ResumeComponent {
  constructor(resumeService, headerService) {
    this.resumeService = resumeService;
    this.headerService = headerService;
    this.isHome$ = this.headerService.isHome();
    this.respOptions = [
      { viewClasses: "d-none d-md-flex", displayInColumn: false, useSmallerHeadings: false, titleClasses: "display-3" },
      { viewClasses: "d-flex d-md-none", displayInColumn: true, useSmallerHeadings: true, titleClasses: "" }
    ];
  }
};
__name(_ResumeComponent, "ResumeComponent");
_ResumeComponent.\u0275fac = /* @__PURE__ */ __name(function ResumeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResumeComponent)(\u0275\u0275directiveInject(ResumeService), \u0275\u0275directiveInject(HeaderService));
}, "ResumeComponent_Factory");
_ResumeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResumeComponent, selectors: [["app-resume"]], standalone: false, decls: 1, vars: 1, consts: [["class", "flex-column align-items-center text-center vw-90 mx-auto", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "flex-column", "align-items-center", "text-center", "vw-90", "mx-auto", 3, "ngClass"], [1, "mb-5", "current-mode-font-color", 3, "ngClass"], [1, "current-mode-font-color", "bold"], [1, "card", "project-card", "m-3"], ["href", "./assets/images/MRL_Resume.pdf", "target", "_blank"], ["src", "./assets/images/MRL_Resume.png", "alt", "MRL_Resume", 1, "resume"], [1, "mt-3", "mb-5", "btn", "bold", "light-border", "current-mode-button", "current-mode-font-color"], ["href", "./assets/images/MRL_Resume.pdf", "target", "_blank", 1, "link-button"], [1, "ml-1", "fas", "fa-angle-right"]], template: /* @__PURE__ */ __name(function ResumeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ResumeComponent_div_0_Template, 12, 2, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngForOf", ctx.respOptions);
  }
}, "ResumeComponent_Template"), dependencies: [NgClass, NgForOf], styles: ["\n\n.heading-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #4c5265;\n}\n.heading-light[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  color: #4c5265;\n}\n.project-card[_ngcontent-%COMP%] {\n  width: 290px;\n  height: auto;\n  background-color: #e7e7e7;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n  transition: transform .2s;\n}\n.project-card[_ngcontent-%COMP%]::after {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n.project-card[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  scale: 1.05;\n}\n.project-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 20ch;\n}\n.resume[_ngcontent-%COMP%] {\n  width: 100%;\n}\na[_ngcontent-%COMP%]:visited {\n  color: white;\n}\n/*# sourceMappingURL=resume.component.css.map */"] });
var ResumeComponent = _ResumeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumeComponent, [{
    type: Component,
    args: [{ selector: "app-resume", standalone: false, template: '<div *ngFor="let options of respOptions" [ngClass]="options.viewClasses" class="flex-column align-items-center text-center vw-90 mx-auto">\n    <h1 [ngClass]="options.titleClasses" class="mb-5 current-mode-font-color"><span class="current-mode-font-color bold">My</span> Resume</h1>\n    <div class="card project-card m-3">\n        <a href="./assets/images/MRL_Resume.pdf" target="_blank"><img class="resume" src="./assets/images/MRL_Resume.png" alt="MRL_Resume"></a>\n    </div>\n    <button class="mt-3 mb-5 btn bold light-border current-mode-button current-mode-font-color">\n        <a href="./assets/images/MRL_Resume.pdf" target="_blank" class="link-button">\n            Find it Here\n        </a>\n        <i class="ml-1 fas fa-angle-right"></i>\n    </button>\n</div>', styles: ["/* src/app/portfolio/resume/resume.component.css */\n.heading-bold {\n  font-weight: bold;\n  color: #4c5265;\n}\n.heading-light {\n  font-weight: lighter;\n  color: #4c5265;\n}\n.project-card {\n  width: 290px;\n  height: auto;\n  background-color: #e7e7e7;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n  transition: transform .2s;\n}\n.project-card::after {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n.project-card:hover::after {\n  opacity: 1;\n}\n.project-card:hover {\n  scale: 1.05;\n}\n.project-title {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 20ch;\n}\n.resume {\n  width: 100%;\n}\na:visited {\n  color: white;\n}\n/*# sourceMappingURL=resume.component.css.map */\n"] }]
  }], () => [{ type: ResumeService }, { type: HeaderService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResumeComponent, { className: "ResumeComponent", filePath: "src/app/portfolio/resume/resume.component.ts", lineNumber: 12 });
})();

// src/app/portfolio/home/home.component.ts
function HomeComponent_div_0_div_2_div_7_h4_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(content_r1);
  }
}
__name(HomeComponent_div_0_div_2_div_7_h4_1_Template, "HomeComponent_div_0_div_2_div_7_h4_1_Template");
function HomeComponent_div_0_div_2_div_7_h5_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(content_r1);
  }
}
__name(HomeComponent_div_0_div_2_div_7_h5_2_Template, "HomeComponent_div_0_div_2_div_7_h5_2_Template");
function HomeComponent_div_0_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, HomeComponent_div_0_div_2_div_7_h4_1_Template, 2, 1, "h4", 16)(2, HomeComponent_div_0_div_2_div_7_h5_2_Template, 2, 1, "h5", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const options_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !options_r2.useSmallerHeadings);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", options_r2.useSmallerHeadings);
  }
}
__name(HomeComponent_div_0_div_2_div_7_Template, "HomeComponent_div_0_div_2_div_7_Template");
function HomeComponent_div_0_div_2_div_8_h5_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(content_r3);
  }
}
__name(HomeComponent_div_0_div_2_div_8_h5_1_Template, "HomeComponent_div_0_div_2_div_8_h5_1_Template");
function HomeComponent_div_0_div_2_div_8_h6_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(content_r3);
  }
}
__name(HomeComponent_div_0_div_2_div_8_h6_2_Template, "HomeComponent_div_0_div_2_div_8_h6_2_Template");
function HomeComponent_div_0_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, HomeComponent_div_0_div_2_div_8_h5_1_Template, 2, 1, "h5", 16)(2, HomeComponent_div_0_div_2_div_8_h6_2_Template, 2, 1, "h6", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const options_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !options_r2.useSmallerHeadings);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", options_r2.useSmallerHeadings);
  }
}
__name(HomeComponent_div_0_div_2_div_8_Template, "HomeComponent_div_0_div_2_div_8_Template");
function HomeComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "h1", 10);
    \u0275\u0275text(3, "I'm ");
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, HomeComponent_div_0_div_2_div_7_Template, 3, 2, "div", 13)(8, HomeComponent_div_0_div_2_div_8_Template, 3, 2, "div", 13);
    \u0275\u0275elementStart(9, "button", 14);
    \u0275\u0275text(10, " See My Work ");
    \u0275\u0275element(11, "i", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const options_r2 = ctx.$implicit;
    const bio_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("ngClass", options_r2.viewClasses);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", options_r2.headingClass);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", bio_r4.firstName + " " + bio_r4.lastName, ".");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", bio_r4.intro);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", bio_r4.about);
  }
}
__name(HomeComponent_div_0_div_2_Template, "HomeComponent_div_0_div_2_Template");
function HomeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275template(2, HomeComponent_div_0_div_2_Template, 12, 5, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 4)(4, "app-skills", 5)(5, "div", 4)(6, "app-projects", 6)(7, "div", 4)(8, "app-resume", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.respOptions);
  }
}
__name(HomeComponent_div_0_Template, "HomeComponent_div_0_Template");
var _HomeComponent = class _HomeComponent {
  constructor(bioService) {
    this.bioService = bioService;
    this.bio$ = this.bioService.getBio();
    this.respOptions = [
      { viewClasses: "d-none d-md-flex", headingClass: "display-3", useSmallerHeadings: false },
      { viewClasses: "d-flex d-md-none", headingClass: "", useSmallerHeadings: true }
    ];
  }
};
__name(_HomeComponent, "HomeComponent");
_HomeComponent.\u0275fac = /* @__PURE__ */ __name(function HomeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(BioService));
}, "HomeComponent_Factory");
_HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: false, decls: 2, vars: 3, consts: [["class", "d-flex flex-column justify-content-center align-items-center w-100", 4, "ngIf"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center", "w-100"], [1, "d-flex", "flex-column", "min-vh-95", "justify-content-center", "align-items-center", "w-100"], ["class", "flex-column justify-content-center align-items-start w-75", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "d-none", "d-md-block", "mt-5"], ["id", "skills", 1, "mb-3"], ["id", "projects", 1, "mb-5"], ["id", "resume", 1, "mb-5"], [1, "flex-column", "justify-content-center", "align-items-start", "w-75", 3, "ngClass"], [1, "d-flex", "align-items-center"], [1, "text-left", "current-mode-font-color", 3, "ngClass"], [1, "current-mode-font-color", "bold"], ["src", "./assets/images/profile_photo.PNG", "alt", "Profile Photo", 1, "fit"], [4, "ngFor", "ngForOf"], ["routerLink", "/", "fragment", "projects", 1, "mt-3", "mb-5", "btn", "bold", "light-border", "current-mode-button", "current-mode-font-color"], [1, "ml-1", "fas", "fa-angle-right"], ["class", "text-left current-mode-font-color", 4, "ngIf"], [1, "text-left", "current-mode-font-color"]], template: /* @__PURE__ */ __name(function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HomeComponent_div_0_Template, 9, 1, "div", 0);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.bio$));
  }
}, "HomeComponent_Template"), dependencies: [NgClass, NgForOf, NgIf, RouterLink, ProjectsComponent, SkillsComponent, ResumeComponent, AsyncPipe], styles: ["\n\n.min-vh-95[_ngcontent-%COMP%] {\n  height: 95vh;\n}\nimg.fit[_ngcontent-%COMP%] {\n  object-fit: contain;\n  height: auto;\n  width: 100px;\n  margin-left: 3em;\n}\n/*# sourceMappingURL=home.component.css.map */"] });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: false, template: `<div class="d-flex flex-column justify-content-center align-items-center w-100" *ngIf="bio$ | async as bio">
    <div class="d-flex flex-column min-vh-95 justify-content-center align-items-center w-100">
        <div *ngFor="let options of respOptions" [ngClass]="options.viewClasses" class="flex-column justify-content-center align-items-start w-75">
            <div class="d-flex align-items-center">
                <!--- LARGE HEADLINE NAME -->
                <h1 [ngClass]="options.headingClass" class="text-left current-mode-font-color">I'm 
                    <span class="current-mode-font-color bold">{{bio.firstName+' '+bio.lastName}}.</span>
                </h1>
                <!--- PROFILE PHOTO -->
                <img src="./assets/images/profile_photo.PNG" class="fit" alt="Profile Photo">
            </div>
            <!--- BIO INTRO -->
            <div *ngFor="let content of bio.intro">
                <h4 class="text-left current-mode-font-color" *ngIf="!options.useSmallerHeadings">{{content}}</h4>
                <h5 class="text-left current-mode-font-color" *ngIf="options.useSmallerHeadings">{{content}}</h5>
            </div>
            <!--- BIO ABOUT -->
            <div *ngFor="let content of bio.about">
                <h5 class="text-left current-mode-font-color" *ngIf="!options.useSmallerHeadings">{{content}}</h5>
                <h6 class="text-left current-mode-font-color" *ngIf="options.useSmallerHeadings">{{content}}</h6>
            </div>
            <button class="mt-3 mb-5 btn bold light-border current-mode-button current-mode-font-color" routerLink="/" fragment="projects">
                See My Work
                <i class="ml-1 fas fa-angle-right"></i> 
            </button>
        </div>
    </div>

    <!--- SKILLS PREVIEW -->
    <div class="d-none d-md-block mt-5"></div>
    <app-skills id="skills" class="mb-3"></app-skills>

    <!--- PROJECTS PREVIEW -->
    <div class="d-none d-md-block mt-5"></div>
    <app-projects id="projects" class="mb-5"></app-projects>

    <!--- RESUME PREVIEW -->
    <div class="d-none d-md-block mt-5"></div>
    <app-resume id="resume" class="mb-5"></app-resume>
</div>`, styles: ["/* src/app/portfolio/home/home.component.css */\n.min-vh-95 {\n  height: 95vh;\n}\nimg.fit {\n  object-fit: contain;\n  height: auto;\n  width: 100px;\n  margin-left: 3em;\n}\n/*# sourceMappingURL=home.component.css.map */\n"] }]
  }], () => [{ type: BioService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/portfolio/home/home.component.ts", lineNumber: 10 });
})();

// src/app/portfolio/portfolio-routing.module.ts
var routes = [
  { path: "", component: HomeComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "skills", component: SkillsComponent },
  { path: "resume", component: ResumeComponent }
];
var _PortfolioRoutingModule = class _PortfolioRoutingModule {
};
__name(_PortfolioRoutingModule, "PortfolioRoutingModule");
_PortfolioRoutingModule.\u0275fac = /* @__PURE__ */ __name(function PortfolioRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PortfolioRoutingModule)();
}, "PortfolioRoutingModule_Factory");
_PortfolioRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PortfolioRoutingModule });
_PortfolioRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var PortfolioRoutingModule = _PortfolioRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortfolioRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/portfolio/portfolio.module.ts
var _PortfolioModule = class _PortfolioModule {
};
__name(_PortfolioModule, "PortfolioModule");
_PortfolioModule.\u0275fac = /* @__PURE__ */ __name(function PortfolioModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PortfolioModule)();
}, "PortfolioModule_Factory");
_PortfolioModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PortfolioModule });
_PortfolioModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  PortfolioRoutingModule
] });
var PortfolioModule = _PortfolioModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortfolioModule, [{
    type: NgModule,
    args: [{
      declarations: [
        HomeComponent,
        ProjectsComponent,
        SkillsComponent,
        ResumeComponent
      ],
      imports: [
        CommonModule,
        PortfolioRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  PortfolioModule
};
//# sourceMappingURL=portfolio.module-LVDBT5BC.js.map
