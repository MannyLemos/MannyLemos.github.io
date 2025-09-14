import { Component } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { HeaderService } from '../../core/services/header.service';
import { SkillsService } from '../../core/services/skills.service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css'],
    standalone: false
})
export class SkillsComponent {

  isHome$ = this.headerService.isHome();
  skills$ = this.isHome$.pipe(
    mergeMap(atHome => this.skillsService.getSkills(atHome))
  );

  respOptions = [
    { viewClasses: 'd-none d-md-flex d-flex d-md-none', displayInColumn: false, useSmallerHeadings: false, titleClasses: 'display-3' },
  ];

  constructor(private skillsService: SkillsService, private headerService: HeaderService) { }
}