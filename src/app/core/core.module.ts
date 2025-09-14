import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

@NgModule({ declarations: [
        HeaderComponent
    ],
    exports: [HeaderComponent] // make header component accessible
    , imports: [CommonModule,
        RouterModule, // used for routing
        NgbModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class CoreModule { }
