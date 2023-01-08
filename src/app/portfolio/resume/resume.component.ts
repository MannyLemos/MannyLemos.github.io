import { Component } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { HeaderService } from '../../core/services/header.service';
import { ResumeService } from '../../core/services/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  isHome$ = this.headerService.isHome();

  respOptions = [
    { viewClasses: 'd-none d-md-flex', displayInColumn: false, useSmallerHeadings: false, titleClasses: 'display-3' },
    { viewClasses: 'd-flex d-md-none', displayInColumn: true, useSmallerHeadings: true, titleClasses: '' }
  ];

  constructor(private resumeService: ResumeService, private headerService: HeaderService) { }
}