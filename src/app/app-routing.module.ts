import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })], // enables anchorScrolling on the router module so you can jump to different sections on the home page.
  exports: [RouterModule]
})
export class AppRoutingModule { }