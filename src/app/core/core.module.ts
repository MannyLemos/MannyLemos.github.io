import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,     // used for routing
    NgbModule,        // used to fetch ng-bootstrap components
    HttpClientModule // used to fetch data from the JSON files
  ],
  exports: [ HeaderComponent ] // make header component accessible
})
export class CoreModule { }
