import { Component, OnInit } from '@angular/core';
import { BioService } from '../services/bio.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  bio$ = this.bioService.getBio(); // get your name from the bio JSON file
  isHome$ = this.headerService.isHome(); // determine if the page currently displayed is the home page

  menuItems = [
    { title: 'My Skills', homePath: '/', fragment: 'skills', pagePath: '/skills' },
    { title: 'My Projects', homePath: '/', fragment: 'projects', pagePath: '/projects' },
    { title: 'My Resume', homePath: '/', fragment: 'resume', pagePath: '/resume' }
  ];

  constructor(private bioService: BioService, private headerService: HeaderService) { }

  ngOnInit(): void {
  }

}
